import { ProjectQueryable, ProjectQueryableCollection, ProjectQueryableInstance } from "./projectqueryable";

/**
 * Describes a collection of Item objects
 *
 */
export class Phases extends ProjectQueryableCollection {

    /**
     * Creates a new instance of the Items class
     *
     * @param baseUrl The url or Queryable which forms the parent of this fields collection
     */
    constructor(baseUrl: string | ProjectQueryable, path = "_api/projectserver/Phases") {
        super(baseUrl, path);
    }

    public getById(id: string): Phase {
        const proj = new Phase(this);
        proj.concat(`('${id}')`);
        return proj;
    }
}

/**
 * Descrines a single Task instance
 *
 */
export class Phase extends ProjectQueryableInstance {
}




