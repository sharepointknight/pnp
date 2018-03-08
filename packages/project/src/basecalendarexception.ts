import { ProjectQueryable, ProjectQueryableCollection, ProjectQueryableInstance } from "./projectqueryable";
import { Calendar } from "./calendars";

/**
 * Describes a collection of Item objects
 *
 */
export class BaseCalendarExceptions extends ProjectQueryableCollection {

    /**
     * Creates a new instance of the Items class
     *
     * @param baseUrl The url or Queryable which forms the parent of this fields collection
     */
    constructor(baseUrl: string | ProjectQueryable, path = "BaseCalendarExceptions") {
        super(baseUrl, path);
    }

    /**
     * Gets a Calendar Exception by its ID
     * 
     * @param {number} id The Id of the calendar exception
     */
    public getById(id: number): BaseCalendarException {
        const proj = new BaseCalendarException(this);
        proj.concat(`('${id}')`);
        return proj;
    }
}

/**
 * Descrines a single Task instance
 *
 */
export class BaseCalendarException extends ProjectQueryableInstance {
    public get calendar(): Calendar {
        return new Calendar(this, "calendar");
    }
}
