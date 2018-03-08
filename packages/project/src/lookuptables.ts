import { ProjectQueryable, ProjectQueryableCollection, ProjectQueryableInstance } from "./projectqueryable";
import { LookupEntries } from "./lookupentries";

/**
 * Describes a collection of Item objects
 *
 */
export class LookupTables extends ProjectQueryableCollection {

    /**
     * Creates a new instance of the Items class
     *
     * @param baseUrl The url or Queryable which forms the parent of this fields collection
     */
    constructor(baseUrl: string | ProjectQueryable, path = "_api/projectserver/LookupTables") {
        super(baseUrl, path);
    }

    public getById(id: string): LookupTable {
        const proj = new LookupTable(this);
        proj.concat(`('${id}')`);
        return proj;
    }
}

/**
 * Descrines a single Task instance
 *
 */
export class LookupTable extends ProjectQueryableInstance {
    public get entries(): LookupEntries {
        return new LookupEntries(this, "entries");
    }
}




