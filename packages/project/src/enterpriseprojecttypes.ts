import { ProjectQueryable, ProjectQueryableCollection, ProjectQueryableInstance } from "./projectqueryable";
import { ProjectDetailPages } from "./projectdetailpages";

/**
 * Describes a collection of Item objects
 *
 */
export class EnterpriseProjectTypes extends ProjectQueryableCollection {

    /**
     * Creates a new instance of the Items class
     *
     * @param baseUrl The url or Queryable which forms the parent of this fields collection
     */
    constructor(baseUrl: string | ProjectQueryable, path = "_api/projectserver/EnterpriseProjectTypes") {
        super(baseUrl, path);
    }

    public getById(id: string): EnterpriseProjectType {
        const proj = new EnterpriseProjectType(this);
        proj.concat(`('${id}')`);
        return proj;
    }

    public get enterpriseprojecttypes(): EnterpriseProjectTypes {
        return new EnterpriseProjectTypes(this);
    }
}

/**
 * Descrines a single Task instance
 *
 */
export class EnterpriseProjectType extends ProjectQueryableInstance {
    public get projectdetailpages(): ProjectDetailPages {
        return new ProjectDetailPages(this, "projectdetailpages");
    }
}




