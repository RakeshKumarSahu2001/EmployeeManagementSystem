import { Router } from "express";
import { delSpecificEmpController, editSpecificEmpController, empRegController, fetchAllEmpController, fetchSpecificEmpController } from "../controllers/Admin.controller.js";
import ZodValidator from "../middlewares/ZodValidator.js";
import { empRegSchemaValidator } from "../Validators/employee/EmpRegistration.validator.js";
import TokenValidation from "../middlewares/TokenValidation.middleware.js";
import AccessValidation from "../middlewares/AccessValidation.middleware.js";

const router = Router();

router.route("/emp-registration").post(TokenValidation,AccessValidation,ZodValidator(empRegSchemaValidator), empRegController);

router.route("/fetch-all-emp").get(TokenValidation,fetchAllEmpController);
router.route("/edit-specific-emp/:id").put(TokenValidation,AccessValidation,editSpecificEmpController)
router.route("/del-specific-emp/:id").delete(TokenValidation,AccessValidation,delSpecificEmpController)
router.route("/fetch-specific-emp/:id").get(TokenValidation,AccessValidation,fetchSpecificEmpController)

export default router;