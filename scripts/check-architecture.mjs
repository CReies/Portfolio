import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import ts from 'typescript';

const root = fileURLToPath(new URL('../', import.meta.url));
const app = path.join(root, 'src/app');
const violations = [];

async function inspect(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      await inspect(file);
      continue;
    }
    if (!entry.name.endsWith('.ts')) continue;

    const relative = path.relative(app, file).split(path.sep).join('/');
    const [layer, feature, area] = relative.split('/');
    const source = ts.createSourceFile(
      file,
      await readFile(file, 'utf8'),
      ts.ScriptTarget.Latest,
      true,
    );
    function visit(node) {
      let specifier;
      if (ts.isImportDeclaration(node) || ts.isExportDeclaration(node)) {
        specifier = node.moduleSpecifier;
      } else if (
        ts.isCallExpression(node) &&
        node.expression.kind === ts.SyntaxKind.ImportKeyword
      ) {
        specifier = node.arguments[0];
      }
      if (specifier && ts.isStringLiteral(specifier) && specifier.text.startsWith('.')) {
        const target = path.resolve(path.dirname(file), specifier.text);
        const destination = path.relative(app, target).split(path.sep).join('/');
        const [targetLayer, targetFeature, targetArea] = destination.split('/');
        const allowed = {
          shared: ['shared'],
          core: ['core', 'shared'],
          layout: ['layout', 'core', 'shared'],
          features: ['features', 'core', 'shared'],
        };
        if (
          allowed[layer] &&
          (!allowed[layer].includes(targetLayer) ||
            (layer === 'features' && targetLayer === 'features' && feature !== targetFeature))
        ) {
          violations.push(`${relative}: forbidden dependency on ${destination}`);
        }
        const featureAreas = {
          models: ['models'],
          'data-access': ['data-access', 'models'],
          application: ['application', 'data-access', 'models'],
          ui: ['ui', 'models'],
        };
        if (
          layer === 'features' &&
          targetLayer === 'features' &&
          feature === targetFeature &&
          featureAreas[area] &&
          !featureAreas[area].includes(targetArea)
        ) {
          violations.push(`${relative}: forbidden ${area} dependency on ${destination}`);
        }
        if (specifier.text.endsWith('.json') && !relative.split('/').includes('data-access')) {
          violations.push(`${relative}: JSON content belongs in data-access`);
        }
      }
      ts.forEachChild(node, visit);
    }
    visit(source);
  }
}

await inspect(app);
if (violations.length) {
  console.error(violations.join('\n'));
  process.exitCode = 1;
} else {
  console.log('Architecture boundaries passed.');
}
