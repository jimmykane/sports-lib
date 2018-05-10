import { PointInterface } from './point.interface';
import { DataInterface } from '../data/data.interface';
import { DataPositionInterface } from '../data/data.position.interface';
export declare class Point implements PointInterface {
    private date;
    private position;
    private data;
    constructor(date: Date);
    getDate(): Date;
    addData(data: DataInterface): void;
    removeDataByType(dataType: string): void;
    getData(): Map<string, DataInterface>;
    getDataByType(dataType: string): DataInterface;
    getPosition(): DataPositionInterface;
    toJSON(): any;
}
