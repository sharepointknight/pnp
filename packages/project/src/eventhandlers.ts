import { ProjectQueryable, ProjectQueryableCollection, ProjectQueryableInstance } from "./projectqueryable";

/**
 * Describes a collection of Item objects
 *
 */
export class EventHandlers extends ProjectQueryableCollection {

    /**
     * Creates a new instance of the Items class
     *
     * @param baseUrl The url or Queryable which forms the parent of this fields collection
     */
    constructor(baseUrl: string | ProjectQueryable, path = "_api/projectserver/EventHandlers") {
        super(baseUrl, path);
    }

    public getById(id: string): Calendar {
        const proj = new Calendar(this);
        proj.concat(`('${id}')`);
        return proj;
    }

    public get eventhandlers(): EventHandlers {
        return new EventHandlers(this);
    }
}

/**
 * Descrines a single Task instance
 *
 */
export class Calendar extends ProjectQueryableInstance {
    public Created: Date;
    public Id: string;
    public IsStandardCalendar: boolean;
    public Modified: Date;
    public Name: string;
}




