import { ProjectQueryable, ProjectQueryableCollection, ProjectQueryableInstance } from "./projectqueryable";
import { CustomFields } from "./customfields";
import { Project } from "./projects";
import { TypedHash, Util } from "@pnp/common";

/**
 * Describes a collection of Item objects
 *
 */
export class Tasks extends ProjectQueryableCollection {

    /**
     * Creates a new instance of the Items class
     *
     * @param baseUrl The url or Queryable which forms the parent of this fields collection
     */
    constructor(baseUrl: string | ProjectQueryable, path = "tasks") {
        super(baseUrl, path);
    }
    public getById(id: string): Task {
        const proj = new Task(this);
        proj.concat(`('${id}')`);
        return proj;
    }
}

/**
 * Descrines a single Task instance
 *
 */
export class Task extends ProjectQueryableInstance {
    /**
     * Gets the lists in this web
     *
     */
    public get customfields(): CustomFields {
        return new CustomFields(this, "customfields");
    }
    public update(properties: TypedHash<any>): Promise<void> {
        const postBody = JSON.stringify(Util.extend({
            "__metadata": { "type": "PS.DraftTask" },
        }, properties));
        const options = {
            method: "PATCH",
            body: postBody,
            headers: {
                "X-HTTP-Method": "MERGE",
            },
        };
        return this.patchCore(options);
    }
}

export class ProjectSummaryTask extends Task {
    public get subproject(): Project {
        return new Project(this, "subproject");
    }
}
