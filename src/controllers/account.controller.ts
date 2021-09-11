import { Fulfillment } from "src/models";
import { Get, Path, Route, Tags, } from "tsoa";

@Route("accounts")
export default class AccountController {
  @Get("/get-account-number/:pF")
  public async getAccountNumber(@Path() pF: number): Promise<any> {
    return {
      fulfillmentText: `10000400${pF >= 1000 ? '' : '0'}${pF}`
    };
  }
}