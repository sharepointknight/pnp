import { ProjectQueryable, ProjectQueryableCollection, ProjectQueryableInstance } from "./projectqueryable";
import { CustomFields } from "./customfields";
import { EnterpriseResource } from "./enterpriseresources";
import { Assignments } from "./assignments";
import { User } from "./users";

/**
 * Describes a collection of Item objects
 *
 */
export class Resources extends ProjectQueryableCollection {

    /**
     * Creates a new instance of the Items class
     *
     * @param baseUrl The url or Queryable which forms the parent of this fields collection
     */
    constructor(baseUrl: string | ProjectQueryable, path = "resources") {
        super(baseUrl, path);
    }

    public getById(id: string): Resource {
        const proj = new Resource(this);
        proj.concat(`('${id}')`);
        return proj;
    }
}

/**
 * Descrines a single Task instance
 *
 */
export class Resource extends ProjectQueryableInstance {
    public get customfields(): CustomFields {
        return new CustomFields(this, "customfields");
    }
    public get enterpriseresource(): EnterpriseResource {
        return new EnterpriseResource(this, "enterpriseresource");
    }
    public get assignments(): Assignments {
        return new Assignments(this, "Assigments");
    }
    public get defaultassignmentowner(): User {
        return new User(this, "DefaultAssignmentOwner");
    }
}




