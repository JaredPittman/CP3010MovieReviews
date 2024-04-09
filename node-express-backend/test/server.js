import { expect } from "chai";
import request from "request";

describe("API Tests", () => {
  it("should return status code 200 for /api/addInfo route", (done) => {
    request.post("http://localhost:8000/api/addInfo", (body, response) => {
      expect(response).to.equal(200);
      done();
    });
  });
});
