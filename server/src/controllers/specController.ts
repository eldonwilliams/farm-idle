import { Controller, Get, Route, Tags } from "tsoa";
import { readFile } from "fs";
import { join } from "path";

let specData: unknown;
readFile(join(__dirname, "../../src/tsoa/swagger.json"), (err, data) => {
    if (err) return console.log(`Caught err loading swagger.json, ${err}`);
    specData = JSON.parse(data.toString("utf-8"));
})

type OpenAPISpec = ReturnType<typeof JSON.parse>;

@Route("/oa-spec.json")
export class SpecController extends Controller {
    /**
     * Gets the generated version of the file at ../../src/tsoa/swagger.json, which should contain a valid open-api v3 spec generated by tsoa.
     * 
     * @returns The JSON object of the current OAPI spec.
     */
    @Tags("Spec")
    @Get()
    public async getSpec(): Promise<OpenAPISpec> {
        return specData;
    }
}