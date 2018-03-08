import { Projects } from "./project";
import { Calendars } from "./calendars";
import { CustomFields } from "./customfields";
import { EnterpriseProjectTypes } from "./enterpriseprojecttypes";
import { EntityTypes } from "./entitytypes";
import { EventHandlers } from "./eventhandlers";
import { Events } from "./events";
import { LookupTables } from "./lookuptables";
import { Phases } from "./phases";
import { ProjectDetailPages } from "./projectdetailpages";
import { Stages } from "./stages";
import { TimeSheetPeriods } from "./timesheetperiods";
import { ConfigOptions } from "@pnp/common";
import { UtilityMethod, UtilityMethods } from "./utilities";
import {
    setup as _setup,
    SPConfiguration,
} from "./config/splibconfig";

/**
 * Root of the SharePoint REST module
 */
export class ProjectRest {

    /** 
     * Creates a new instance of the SPRest class
     * 
     * @param options Additional options
     * @param baseUrl A string that should form the base part of the url
     */
    constructor(protected _options: ConfigOptions = {}, protected _baseUrl = "") { }

    /**
     * Configures instance with additional options and baseUrl.
     * Provided configuration used by other objects in a chain
     * 
     * @param options Additional options
     * @param baseUrl A string that should form the base part of the url
     */
    public configure(options: ConfigOptions, baseUrl = ""): ProjectRest {
        return new ProjectRest(options, baseUrl);
    }

    /**
     * Global SharePoint configuration options
     * 
     * @param config The SharePoint configuration to apply
     */
    public setup(config: SPConfiguration) {
        _setup(config);
    }

    /**
     * Begins a project scoped REST request
     *
     */
    public get projects(): Projects {
        return new Projects(this._baseUrl).configure(this._options);
    }
    /**
     * Begins a calendar scoped REST request
     *
     */
    public get calendars(): Calendars {
        return new Calendars(this._baseUrl).configure(this._options);
    }
    /**
     * Begins a custom field scoped REST request
     *
     */
    public get customfields(): CustomFields {
        return new CustomFields(this._baseUrl).configure(this._options);
    }
    /**
     * Begins an enterprise project types scoped REST request
     *
     */
    public get enterpriseprojecttypes(): EnterpriseProjectTypes {
        return new EnterpriseProjectTypes(this._baseUrl).configure(this._options);
    }
    /**
     * Begins an entity types scoped REST request
     *
     */
    public get entitytypes(): EntityTypes {
        return new EntityTypes(this._baseUrl).configure(this._options);
    }
    /**
     * Begins an event handlers scoped REST request
     *
     */
    public get eventhandlers(): EventHandlers {
        return new EventHandlers(this._baseUrl).configure(this._options);
    }
    /**
     * Begins an events scoped REST request
     *
     */
    public get events(): Events {
        return new Events(this._baseUrl).configure(this._options);
    }
    /**
     * Begins a lookup tables scoped REST request
     *
     */
    public get lookuptables(): LookupTables {
        return new LookupTables(this._baseUrl).configure(this._options);
    }
    /**
     * Begins a phases scoped REST request
     *
     */
    public get phases(): Phases {
        return new Phases(this._baseUrl).configure(this._options);
    }
    /**
     * Begins a Project Detials scoped REST request
     *
     */
    public get projectdetailpages(): ProjectDetailPages {
        return new ProjectDetailPages(this._baseUrl).configure(this._options);
    }
    /**
     * Begins an enterprise project types scoped REST request
     *
     */
    public get stages(): Stages {
        return new Stages(this._baseUrl).configure(this._options);
    }
    /**
     * Begins an enterprise project types scoped REST request
     *
     */
    public get timesheetperiods(): TimeSheetPeriods {
        return new TimeSheetPeriods(this._baseUrl).configure(this._options);
    }

    /**
     * Creates a new batch object for use with the SharePointQueryable.addToBatch method
     *
     */
    /* public createBatch(): SPBatch {
        return this.web.createBatch();
    } */

    /**
     * Static utilities methods from SP.Utilities.Utility
     */
    public get utility(): UtilityMethods {
        return new UtilityMethod(this._baseUrl, "").configure(this._options);
    }
}

export const project = new ProjectRest();
