import { ProjectQueryable, ProjectQueryableCollection, ProjectQueryableInstance } from "./projectqueryable";
import { CustomFields } from "./customfields";
import { User } from "./users";
import { Resource } from "./resources";
import { Task } from "./tasks";

/**
 * Describes a collection of Item objects
 *
 */
export class Assignments extends ProjectQueryableCollection {

    /**
     * Creates a new instance of the Items class
     *
     * @param baseUrl The url or Queryable which forms the parent of this fields collection
     */
    constructor(baseUrl: string | ProjectQueryable, path = "assignments") {
        super(baseUrl, path);
    }

    public getById(id: string): Assignment {
        const proj = new Assignment(this);
        proj.concat(`('${id}')`);
        return proj;
    }
}

/**
 * Descrines a single Assignment instance
 *
 */
export class Assignment extends ProjectQueryableInstance {
    /**
     * Begins a custom fields rest request
     */
    public get customfields(): CustomFields {
        return new CustomFields(this, "customfields");
    }
    /**
     * Begins a owner rest request
     */
    public get owner(): User {
        return new User(this, "owner");
    }
    /**
     * Begins a resource rest request
     */
    public get resource(): Resource {
        return new Resource(this, "resource");
    }
    /**
     * Begins a task rest request
     */
    public get task(): Task {
        return new Task(this, "task");
    }
}




