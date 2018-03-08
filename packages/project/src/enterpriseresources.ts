import { ProjectQueryable, ProjectQueryableCollection, ProjectQueryableInstance } from "./projectqueryable";
import { Assignments } from "./assignments";
import { CustomFields } from "./customfields";
import { User } from "./users";
import { Calendar } from "./calendars";

/**
 * Describes a collection of Item objects
 *
 */
export class EnterpriseResources extends ProjectQueryableCollection {

    /**
     * Creates a new instance of the Items class
     *
     * @param baseUrl The url or Queryable which forms the parent of this fields collection
     */
    constructor(baseUrl: string | ProjectQueryable, path = "_api/projectserver/EnterpriseResources") {
        super(baseUrl, path);
    }

    public getById(id: string): EnterpriseResource {
        const proj = new EnterpriseResource(this);
        proj.concat(`('${id}')`);
        return proj;
    }
}

/**
 * Descrines a single Task instance
 *
 */
export class EnterpriseResource extends ProjectQueryableInstance {
    public get assignments(): Assignments {
        return new Assignments(this, "assignments");
    }
    public get customfields(): CustomFields {
        return new CustomFields(this, "customfields");
    }
    public get timesheetmanager(): User {
        return new User(this, "TimesheetManager");
    }
    public get defaultassignmentowner(): User {
        return new User(this, "DefaultAssignmentOwner");
    }
    public get user(): User {
        return new User(this, "user");
    }
    public get basecalendar(): Calendar {
        return new Calendar(this, "BaseCalendar");
    }
}
