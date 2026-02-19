const request = require("supertest");
const app = require("../server");

describe("GET /", () => {
  it("should return demo message", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("Node.js CI/CD Demo 🚀");
  });
});

describe("GET /health", () => {
  it("should return OK", async () => {
    const res = await request(app).get("/health");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("OK");
  });
});
