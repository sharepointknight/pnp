import { ProjectQueryable, ProjectQueryableCollection, ProjectQueryableInstance } from "./projectqueryable";
import { BaseCalendarExceptions} from "./basecalendarexception";

/**
 * Describes a collection of Item objects
 *
 */
export class Calendars extends ProjectQueryableCollection {

    /**
     * Creates a new instance of the Items class
     *
     * @param baseUrl The url or Queryable which forms the parent of this fields collection
     */
    constructor(baseUrl: string | ProjectQueryable, path = "_api/projectserver/calendars") {
        super(baseUrl, path);
    }

    /**
     * 
     * @param id Gets a Calendar by its ID(GUID)
     */
    public getById(id: string): Calendar {
        const proj = new Calendar(this);
        proj.concat(`('${id}')`);
        return proj;
    }
}

/**
 * Descrines a single Task instance
 *
 */
export class Calendar extends ProjectQueryableInstance {
    public get basecalendarexceptions(): BaseCalendarExceptions {
        return new BaseCalendarExceptions(this, "basecalendarexceptions");
    }
}
