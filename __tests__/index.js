const supertest = require("supertest");
const server = require("../index");
const db = require("../data/config");

test("GET /", async () => {
    const res = await supertest(server).get("/api/items")
    .expect(200)
    .expect('Content-Type', 'application/json; charset=utf-8');
})

test("REGISTER /", async () => {
    const res = await supertest(server).post("/api/register")
    .send({username: "Testing_Something22", password: "Testing_Something22", email: "Testing_Something22@test.com", lastName: "test22", firstName: "test22"})
    .expect(200)
    .expect('Content-Type', 'application/json; charset=utf-8')
})

test("LOGIN /", async () => {
    const res = await supertest(server).post("/api/login")
    .send({username: "Testing_Something22", password: "Testing_Something22"})
    .expect(200)
    .expect('Content-Type', 'application/json; charset=utf-8');
})

test("ITEMS /", async () => {
    const res = await supertest(server).get("/api/items")
    .expect(200)
    .expect('Content-Type', 'application/json; charset=utf-8');
})

test("POST ITEMS /", async () => {
    const res = await supertest(server).post("/api/items")
    .send({itemName : "carrot", itemType : 1, price : 2.00, itemdesc : "Crunchy and Juicy", imageUrl: "test.com", itemLocation : "Tanzania"})
    .expect(201)
    .expect('Content-Type', 'application/json; charset=utf-8');
})