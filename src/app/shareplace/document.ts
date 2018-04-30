import { Employee } from './employee'

export class Document {

    Selected: boolean;
    Name: string;
    Activity: string;
    Modified: Date;
    ModifiedBy: Employee;
    StoragePath: string;

    constructor(Name: string, Activity: string, Modified: Date, ModifiedBy: Employee, StoragePath: string) {
        this.Selected = false;
        this.Name = Name;
        this.Activity = Activity;
        this.Modified = Modified;
        this.ModifiedBy = ModifiedBy;
        this.StoragePath = StoragePath;
    }

}
