import { HelloController } from "@/controller/HelloControler";
import { LogInfo } from "@/utils/logger";
import express, { Request, Response } from "express";

// Router from express
let helloRouter = express.Router(); //access to router

//http://localhost:8000/api/hello/ the last / is the one below
helloRouter.route('/')
    // GET -> /api/hello?name=Martin/
    .get(async(req: Request, res: Response)=>{
        //Obtain a Query param (to make request through URL)
        let name: any = req?.query?.name;
        LogInfo(`Query Param: ${name}`);
        // Controller Instance to execute
        const controller: HelloController = new HelloController();
        // Obatin Response
        const response = await controller.getMessage(name);
        // Send to the client the response
        return res.send(response)


    });

//Export HelloRouter
export default helloRouter;