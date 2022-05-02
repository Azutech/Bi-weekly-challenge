import app from "../app";
import supertest from "supertest";

describe("Test users endpoint response", () => {
   it("it get user", async () => {
      const request = supertest(app);
      const response = await request.get("/user");
      expect(response.status).toBe(404);
   });
   it("it post user", async () => {
      const request = supertest(app);
      const response = await request.post("/user");
      expect(response.status).toBe(404);
   });
   it("it update user", async () => {
      const request = supertest(app);
      const response = await request.put("/user/:id");
      expect(response.status).toBe(404);
   });
   it("it delete user", async () => {
      const request = supertest(app);
      const response = await request.delete("/user/:id");
      expect(response.status).toBe(404);
   });
});
