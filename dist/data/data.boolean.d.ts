import { DataBare } from './data.bare';
export declare abstract class DataBoolean extends DataBare {
    static className: string;
    protected value: any;
    constructor(value: boolean);
}
