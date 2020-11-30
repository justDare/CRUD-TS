import { Router } from "express";
import employees from "./employees";

const router = Router();

router.use("/api/employees", employees);

export default router;
