import { ProjectQueryable, ProjectQueryableCollection, ProjectQueryableInstance } from "./projectqueryable";
import { Groups } from "./groups";

/**
 * Describes a collection of Item objects
 *
 */
export class Users extends ProjectQueryableCollection {

    /**
     * Creates a new instance of the Items class
     *
     * @param baseUrl The url or Queryable which forms the parent of this fields collection
     */
    constructor(baseUrl: string | ProjectQueryable, path = "CheckedOutBy") {
        super(baseUrl, path);
    }
}

/**
 * Descrines a single Task instance
 *
 */
export class User extends ProjectQueryableInstance {
    /**
     * Creates a new instance of the Items class
     *
     * @param baseUrl The url or Queryable which forms the parent of this fields collection
     */
    constructor(baseUrl: string | ProjectQueryable, path = "CheckedOutBy") {
        super(baseUrl, path);
    }

    public get groups(): Groups {
        return new Groups(this, "groups");
    }
}
