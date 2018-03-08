import { ProjectQueryable, ProjectQueryableCollection, ProjectQueryableInstance } from "./projectqueryable";
import { Tasks, ProjectSummaryTask } from "./tasks";
import { User } from "./users";
import { CustomFields } from "./customfields";
import { EnterpriseProjectType } from "./enterpriseprojecttypes";
import { Phase } from "./phases";
import { QueueJobs } from "./queuejobs";
import { Stage } from "./stages";
import { Assignments } from "./assignments";
import { Calendar } from "./calendars";
import { TypedHash, Util } from "@pnp/common";
/**
 * Describes a collection of Item objects
 *
 */
export class Projects extends ProjectQueryableCollection {

    /**
     * Creates a new instance of the Items class
     *
     * @param baseUrl The url or Queryable which forms the parent of this fields collection
     */
    constructor(baseUrl: string | ProjectQueryable, path = "_api/projectserver/projects") {
        super(baseUrl, path);
    }

    public getById(id: string): Project {
        const proj = new Project(this);
        proj.concat(`('${id}')`);
        return proj;
    }

    public get projects(): Projects {
        return new Projects(this);
    }
}

/**
 * Describes a Draft Project instance
 *
 */
export class DraftProject extends ProjectQueryableInstance {
    /**
     * Gets the lists in this web
     *
     */
    public get tasks(): Tasks {
        return new Tasks(this);
    }
    public get checkedoutby(): User {
        return new User(this, "CheckedOutBy");
    }
    public get customfields(): CustomFields {
        return new CustomFields(this, "CustomFields");
    }
    public get enterpriseprojecttype(): EnterpriseProjectType {
        return new EnterpriseProjectType(this, "enterpriseprojecttype");
    }
    public get phase(): Phase {
        return new Phase(this, "phase");
    }
    public get projectsummarytask(): ProjectSummaryTask {
        return new ProjectSummaryTask(this, "projectsummarytask");
    }
    public get queuejobs(): QueueJobs {
        return new QueueJobs(this, "queuejobs");
    }
    public get stage(): Stage {
        return new Stage(this, "stage");
    }
    public get assignments(): Assignments {
        return new Assignments(this, "assignments");
    }
    public get calendar(): Calendar {
        return new Calendar(this, "calendar");
    }
    public checkin(force: boolean): Promise<void> {
        return this.clone(DraftProject, `checkin(${force})`).postCore();
    }
    public publish(checkIn: boolean): Promise<void> {
        return this.clone(DraftProject, `publish(${checkIn})`).postCore();
    }
    public update(properties: TypedHash<any>): Promise<void> {
        const postBody = JSON.stringify(Util.extend({
            "__metadata": { "type": "PS.DraftProject" },
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

export class Project extends ProjectQueryableInstance {
    /**
     * Gets the lists in this web
     *
     */
    public get tasks(): Tasks {
        return new Tasks(this);
    }
    public get checkedoutby(): User {
        return new User(this, "CheckedOutBy");
    }
    public get customfields(): CustomFields {
        return new CustomFields(this, "CustomFields");
    }
    public get enterpriseprojecttype(): EnterpriseProjectType {
        return new EnterpriseProjectType(this, "enterpriseprojecttype");
    }
    public get phase(): Phase {
        return new Phase(this, "phase");
    }
    public get projectsummarytask(): ProjectSummaryTask {
        return new ProjectSummaryTask(this, "projectsummarytask");
    }
    public get queuejobs(): QueueJobs {
        return new QueueJobs(this, "queuejobs");
    }
    public get stage(): Stage {
        return new Stage(this, "stage");
    }
    public get assignments(): Assignments {
        return new Assignments(this, "assignments");
    }
    public get calendar(): Calendar {
        return new Calendar(this, "calendar");
    }
    public get draft(): DraftProject {
        return new DraftProject(this, "draft");
    }
    public checkout(): Promise<CheckoutResponse> {
        return this.clone(Project, "checkout").postCore();
    }
}
export class CheckoutResponse {
    public CheckOutId: string;
    public CheckOutDescription: string;
}
