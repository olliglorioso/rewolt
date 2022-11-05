import { Request, Response, NextFunction } from "express";
export declare const requireLogin: (req: Request, res: Response, next: NextFunction) => Promise<void | Response<any, Record<string, any>>>;
