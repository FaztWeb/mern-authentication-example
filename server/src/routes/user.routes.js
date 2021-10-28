import { Router } from "express";
import { login, register } from "../controllers/user.controller";

const router = Router();

router.get("/login", login);

router.get("/register", register);

export default router;
