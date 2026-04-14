import { Request, Response, NextFunction } from "express";

export function middlewareLoging(req: Request, res: Response, next: NextFunction) {
    res.on('finish', () => {
        const status = res.statusCode;
        if (status !== 200) {
            console.log(`[NON-OK] ${req.method} ${req.url} - Status: ${status}`);
        }
    });

    next();
}