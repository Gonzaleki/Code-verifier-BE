import { BasicResponse } from "./types";
import { IHelloController } from "./interfaces";
import { LogSuccess } from "@/utils/logger";

/**
 * Class to administrate de Routes
 */
export class HelloController implements IHelloController {

    public async getMessage(name?: string | undefined): Promise<BasicResponse> {
        LogSuccess('[/api/hello] Get Request');

        return {
            message: `Hello ${name || 'Anonymouse!'}`
        }

    }
    
}