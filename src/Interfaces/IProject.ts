import { IProjectCardBackData } from './IProjectCardBackData';
import { IProjectCardFrontData } from './IProjectCardFrontData';

export interface IProject extends IProjectCardBackData, IProjectCardFrontData {
	id: number;
}
