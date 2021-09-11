import express from "express";
import AccountController from "../controllers/account.controller";
import AccountRouter from "./account.router";

const router = express.Router();

router.post("/", async (req, res) => {
  let { queryResult } = req.body;
  if (queryResult) {
    const { action, parameters } = queryResult;
    switch (action) {
      case 'get-account-number':
        const { PF } = parameters;
        const controller = new AccountController();
        const response = await controller.getAccountNumber(PF);
        res.setHeader('Content-Type', 'application/json')
        return res.send(JSON.stringify(response));
      default:
        return res.send({
          fulfillmentText: `Sorry, i could not detect what your intent.`
        });
    }
  }
  return res.send({ fulfillmentText: "Something went wrong while trying to retrieve your account number." });
});

router.use("/accounts", AccountRouter)

export default router;
