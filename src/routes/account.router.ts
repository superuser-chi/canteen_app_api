import express from "express";
import AccountController from "../controllers/account.controller";

const router = express.Router();

router.get("/get-account-number/:pf", async (_req, res) => {
  const controller = new AccountController();
  const response = await controller.getAccountNumber(Number.parseInt(_req.params.pf));
  return res.send(response);
});


export default router;