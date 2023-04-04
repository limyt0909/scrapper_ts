import express, { Request, Response, NextFunction } from 'express';

/**
 * 요청된 Request 로그를 기록하는 미들웨어 
 * @author 용택
 */

export const requestlog = async (req: Request, res: Response, next: NextFunction) => {
    const Request = `
 Request   
 요청시각 :${new Date()}
 header :${JSON.stringify(req.headers)}
 method : ${req.method} 
 url : ${req.url} 
 ip : ${req.ip}
 params : ${JSON.stringify(req.params)}
 query : ${JSON.stringify(req.query)}
 cookies : ${JSON.stringify(req.cookies)}
`;
    console.log(Request)
    next()
};  
