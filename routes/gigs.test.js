const request = require("supertest");
const app = require("../app");

describe("Test GET /gigs", () => {
  test("It should respond with 200 success", async () => {
    const response = await request(app)
      .get("/gigs")
      .expect("Content-Type", /json/)
      .expect(200);

    // console.log(response)
    // USING JEST WITH SUPERTEST
    // expect(response.statusCode).toBe(200);
    // expect(response.headers["content-type"]).toMatch(/json/);
  });
});

describe("Test POST /gigs", () => {
  const createGigTest = {
    title: "node.js and django dev needed",
    technologies: "node, django, js",
    budget: "$100",
    description: "no dey ask me stiupid things broi",
    contact_email: "nairamarley@yahoo.com",
  };

  const createGigTestIncomplete = {
    technologies: "node, django, js",
    budget: "$100",
    description: "no dey ask me stiupid things broi",
    contact_email: "nairamarley@yahoo.com",
  };

  test("It should return with 201 created", async () => {
    const response = await request(app)
      .post("/gigs")
      .send(createGigTest)
      .expect("Content-Type", /json/)
      .expect(201);
  });

  test("It should catch missing properties", async () => {
    const response = await request(app)
      .post("/gigs")
      .send(createGigTestIncomplete)
      .expect("Content-Type", /json/)
      .expect(400);

    expect(response.body).toStrictEqual({
      status: "fail",
      message: "Title field is required",
    });
  });
});
