import express from 'express';

const requestLoggerMiddleWare = (req: express.Request, resp: express.Response, next: express.NextFunction) => {
    console.log(`METHOD IS :: ${req.method} and URL IS ::: ${req.originalUrl}`);
    const start = new Date().getTime();
    resp.on('finish', () => {
        const elapsed = new Date().getTime() - start;
    });
    next();
}

export { requestLoggerMiddleWare };