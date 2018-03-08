import { ProjectQueryable, ProjectQueryableCollection, ProjectQueryableInstance } from "./projectqueryable";

/**
 * Describes a collection of Item objects
 *
 */
export class EntityTypes extends ProjectQueryableCollection {

    /**
     * Creates a new instance of the Items class
     *
     * @param baseUrl The url or Queryable which forms the parent of this fields collection
     */
    constructor(baseUrl: string | ProjectQueryable, path = "_api/projectserver/EntityTypes") {
        super(baseUrl, path);
    }

    public get entitytypes(): EntityTypes {
        return new EntityTypes(this);
    }
}

/**
 * Descrines a single Task instance
 *
 */
export class EntityType extends ProjectQueryableInstance {
    constructor(baseUrl: string | ProjectQueryable, path = "EntityType") {
        super(baseUrl, path);
    }
}




