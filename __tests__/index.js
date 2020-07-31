const supertest = require("supertest");
const server = require("../index");

test("GET /", async () => {
    const res = await supertest(server).get("/api/items")
    .expect(200)
    .expect('Content-Type', 'application/json; charset=utf-8');
})

test("REGISTER /", async () => {
    const res = await supertest(server).post("/api/register")
    .send({username: "Testing_Something", password: "Testing_Something", email: "Testing_Something@test.com", lastName: "test", firstName: "test"})
    .expect(200)
    .expect('Content-Type', 'application/json; charset=utf-8')
})

test("LOGIN /", async () => {
    const res = await supertest(server).post("")
})