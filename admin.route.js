import express from "express";
import { singInPage, signInAction, singUpPage, signUpAction,homePage } from "../controller/admin.controller.js";
const router = express.Router();

// http://localhost:3000/admin/sign-in
router.get("/sign-in",singInPage);
router.post("/sign-in",signInAction);
router.get("/sign-up",singUpPage);
router.post("/sign-up",signUpAction);
router.get("/home",homePage);
export default router;