const express = require("express");
import { Request, Response } from 'express';
import User from '../models/User.models';

const router = express.Router();

router.post('/users', async (req: Request, res: Response) => {

    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).json(user);
    } catch (err: any) {
        res.status(400).json({ message: err.message });
    }
});

export default router;
