import supertest from "supertest";
import {app} from './index.js';

const request = supertest(app);
let token = " "
describe('it should pass', () => {

    it('should pass', async() => {
        const res = await request
        .post("/login")
        .send({username:"sonu", password:"sonu"});
    expect(res.status).toBe(200);
    expect(res.body).toBe("Login Successful");
    expect(res.body).toBeTruthy();
    })

  
});

it("should not login", async () =>{
    const res = await request
    .post("/login")
    .send({username:"sonu",password:"sonu"});
    expect 
})


// describe();
// it();


// describe(arg1, arg2);
// describe('it should pass', () => { });

// it(a1, a2);
// it('test should pass', () => { });

// describe('it should pass', () => {

//     it();
//     it();
//     it();

// });