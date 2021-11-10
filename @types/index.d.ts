import * as express from "express"
declare global {
    namespace Express {
        interface Request {
            usuario? : Record<Any,any>
            // usuario? : Record<String,any>
        }
    }
}