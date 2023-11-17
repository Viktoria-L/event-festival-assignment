
import { IActivity } from "../activities/IActivity";
import { IResponseBaseType } from "./IResponseBaseType";

export interface IActivitiesResponseType extends IResponseBaseType {
    data: IActivity[];
}

export interface IActivityResponseType extends IResponseBaseType {
    data: IActivity;
}

