import { DataNumber } from './data.number';
export declare class DataDuration extends DataNumber {
    static className: string;
    static type: string;
    static unit: string;
    getDisplayValue(): string;
    getDisplayUnit(): string;
}
