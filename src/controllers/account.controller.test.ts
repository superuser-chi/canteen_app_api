import AccountController from './account.controller'

describe("AccountController", () => {
  describe("getAccountNumber_less_than_10000", () => {
    test("should return account number 100004000988", async () => {
      const controller = new AccountController();
      const response = await controller.getAccountNumber(988);
      expect(response.fulfillmentText).toBe("100004000988")

    })
    describe("getAccountNumber_great_than_10000", () => {
      test("should return account number 100004001004", async () => {
        const controller = new AccountController();
        const response = await controller.getAccountNumber(1004);
        expect(response.fulfillmentText).toBe("100004001004")
      })
    })
  })
})