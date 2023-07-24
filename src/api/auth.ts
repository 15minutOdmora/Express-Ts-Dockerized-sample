import express, { Router, Request, Response } from "express";

const router: Router = express.Router();

router.get('/auth', async (req: Request, res: Response) => {
    res.send('Example /auth page.');
});

export default router;
