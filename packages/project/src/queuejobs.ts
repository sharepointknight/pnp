import { ProjectQueryable, ProjectQueryableCollection, ProjectQueryableInstance } from "./projectqueryable";


/**
 * Describes a collection of Item objects
 *
 */
export class QueueJobs extends ProjectQueryableCollection {

    /**
     * Creates a new instance of the Items class
     *
     * @param baseUrl The url or Queryable which forms the parent of this fields collection
     */
    constructor(baseUrl: string | ProjectQueryable, path = "QueueJobs") {
        super(baseUrl, path);
    }

    public getById(id: string): QueueJob {
        const proj = new QueueJob(this);
        proj.concat(`('${id}')`);
        return proj;
    }
}

/**
 * Descrines a single Task instance
 *
 */
export class QueueJob extends ProjectQueryableInstance {
}




