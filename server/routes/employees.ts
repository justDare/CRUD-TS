import { Router, Request, Response } from "express";
import { getAll, create, deleteOne, update } from "db/queries/employees";
import employeeI from "db/interfaces/Employee";

const router = Router();

const validEmployee = (body: any) => {
  const { name, profession, color, city, branch, assigned } = body;

  const hasName = typeof name == "string" && name.trim() != "";
  const hasProfession =
    typeof profession == "string" && profession.trim() != "";
  const hasColor = typeof color == "string" && color.trim() != "";
  const hasCity = typeof city == "string" && city.trim() != "";
  const hasBranch = typeof branch == "string" && branch.trim() != "";
  const hasAssigned = typeof assigned == "boolean";

  return (
    hasName && hasProfession && hasColor && hasCity && hasBranch && hasAssigned
  );
};

// @route GET /api/employees
// @desc Get all employees
// @access Public
router.get("/", (req: Request, res: Response) => {
  getAll().then((employees: object) => {
    res.json(employees);
  });
});

// @route POST /api/employees
// @desc Create an employee
// @access Public
router.post("/", (req: Request, res: Response) => {
  if (validEmployee(req.body)) {
    return create(req.body).then((employees: Array<employeeI>) => {
      res.json(employees[0]);
    });
  } else {
    return res.status(400).json("Invalid parameters");
  }
});

// @route DELETE /api/employees/:id
// @desc Delete an employee
// @access Public
router.delete("/:id", (req: Request, res: Response) => {
  deleteOne(req.params.id).then(() => {
    res.json({
      deleted: true,
      id: req.params.id,
    });
  });
});

// @route PUT /api/employees/:id
// @desc Update fields of an employee
// @access Public
router.put("/:id", (req, res, next) => {
  if (validEmployee(req.body)) {
    update(req.params.id, req.body).then((employees: Array<employeeI>) => {
      res.json(employees[0]);
    });
  } else {
    next(new Error("Invalid sticker"));
  }
});

export default router;
