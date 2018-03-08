import { ProjectQueryable, ProjectQueryableCollection, ProjectQueryableInstance } from "./projectqueryable";
import { EntityType } from "./entitytypes";
import { LookupEntries } from "./lookupentries";
import { LookupTable } from "./lookuptables";

/**
 * Describes a collection of Item objects
 *
 */
export class CustomFields extends ProjectQueryableCollection {

    /**
     * Creates a new instance of the Items class
     *
     * @param baseUrl The url or Queryable which forms the parent of this fields collection
     */
    constructor(baseUrl: string | ProjectQueryable, path = "_api/projectserver/customfields") {
        super(baseUrl, path);
    }

    public getById(id: string): CustomField {
        const proj = new CustomField(this);
        proj.concat(`('${id}')`);
        return proj;
    }

    public get customfields(): CustomFields {
        return new CustomFields(this);
    }
}

/**
 * Descrines a single Task instance
 *
 */
export class CustomField extends ProjectQueryableInstance {
    public get entitytype(): EntityType {
        return new EntityType(this);
    }
    public get lookupentries(): LookupEntries {
        return new LookupEntries(this, "lookupentries");
    }
    public get lookuptable(): LookupTable {
        return new LookupTable(this, "lookuptable");
    }
}




