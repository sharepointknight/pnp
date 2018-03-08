import { expect } from "chai";
import { testSettings } from "../../../test/main";
import { toMatchEndRegex } from "./utils";
import { sp, Web } from "../";
import { Util } from "@pnp/common";

describe("Alias Parameters", () => {

    let webAbsUrl = "";
    let webRelativeUrl = "";
    let web: Web;

    before((done) => {

        // we need to take some steps to ensure we are operating on the correct web here
        // due to the url manipulation in the library for sharing
        web = new Web(testSettings.webUrl);

        web.select("ServerRelativeUrl", "Url").get().then(u => {

            // make sure we have the correct server relative url
            webRelativeUrl = u.ServerRelativeUrl;
            webAbsUrl = u.Url;

            // we need a doc lib with a file and folder in it
            web.lists.ensure("AliasTestLib", "Used to test alias parameters", 101).then(ler => {

                // add a file and folder
                Promise.all([
                    ler.list.rootFolder.folders.add("MyTestFolder"),
                    ler.list.rootFolder.files.add("text.txt", "Some file content!"),
                ]).then(_ => {
                    done();
                }).catch(_ => {
                    done();
                });
            }).catch(_ => {
                done();
            });
        });
    });


    if (testSettings.enableWebTests) {

        it("Should allow aliasing for folders", () => {

            return expect(sp.web.getFolderByServerRelativeUrl(`!@p1::/${Util.combinePaths(webRelativeUrl, "AliasTestLib/MyTestFolder")}`).get()).to.eventually.be.fulfilled;
        });

        it("Should allow aliasing for files", () => {

            return expect(sp.web.getFileByServerRelativeUrl(`!@p1::/${Util.combinePaths(webRelativeUrl, "AliasTestLib/text.txt")}`).get()).to.eventually.be.fulfilled;
        });

        it("Should allow aliasing for sub-parameters", () => {

            const folder = sp.web.getFolderByServerRelativeUrl(`!@p1::/${Util.combinePaths(webRelativeUrl, "AliasTestLib/MyTestFolder")}`);
            return expect(folder.files.add("!@p2::myfilename.txt", "new file content")).to.eventually.be.fulfilled;
        });
    }
});
