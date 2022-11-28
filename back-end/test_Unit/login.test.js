const supertest = require('supertest')
const app= require('../server')
 

describe("POST /api/auth/login",()=>{

    describe("when email and password is missing",() => {
        
        test('should reponde with a status code 400', async() => {
            const response = await  supertest(app).post("/api/auth/login").send({
                //set email without password
                email: "chaimaetoumy5@gmail.com"
            })
            expect(response.statusCode).toBe(400)
        })

    })
    describe("given a valid email and password",()=>{

        test('should reponde with a 200 status code', async() => {
            const response= await  supertest(app).post("/api/auth/login").send({
                email: "chaimaetoumy5@gmail.com",
                password: "abcd"
            })
            expect(response.statusCode).toBe(200)
        })
    })
    describe("not verify account",()=>{

        test('should reponde with a 401 status code (not verify)', async() => {
            const response = await  supertest(app).post("/api/auth/login").send({
                email: "boubker@gmail.com",
                password: "boubker"
            })
            expect(response.statusCode).toBe(401)
        })

    })
    describe("given incorrect password",()=>{

        test('should reponde with a 400 status code', async() => {
            const response = await  supertest(app).post("/api/auth/login").send({
                email: "chaimaetoumy5@gmail.com",
                password: "gfhgfhghgg"
            })
            expect(response.statusCode).toBe(400)
        })

    })
  
    describe("user not found",()=>{

        test('should reponde with a 404 status code', async() => {
            const response = await  supertest(app).post("/api/auth/login").send({
                email: "hgdhfhgds@gmail.com",
                password: "youdsdhgcode"
            })
            expect(response.statusCode).toBe(404)
        })

    })
    
})