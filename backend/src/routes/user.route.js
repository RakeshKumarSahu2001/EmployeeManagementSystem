import { Router } from "express";
import ZodValidator from "../middlewares/ZodValidator.js";
import { regSchemaValidator } from "../Validators/users/Registration.validator.js";
import {loginController, registerController} from "../controllers/Auth.controller.js"

const router=Router();


router.route("/register").post(ZodValidator(regSchemaValidator),registerController)
router.route("/login").post(loginController)


export default router;