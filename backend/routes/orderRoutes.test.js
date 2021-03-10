import app from '../server' // Link to your server file
import request from 'supertest'
import router from './orderRoutes'
import mongoose from 'mongoose'
jest.useFakeTimers()

let token  

beforeAll((done) => {
    request(app)
        .post('/api/users/login')
        .send({
            email: 'emailpass@email.com',
            password: '123456'
        })
        .end((err, response) => {
            token =  response.body.token; // save the token!
            done();
        });
});

afterEach(() => {
    console.log(`Bearer ${token}`)
})

describe('app', () => {

    it('Index should return 200 Status', () => {
        return request(app)
            .post('/api/users/login')
            .send({
                email: 'emailpass@email.com',
                password: '123456'
            })
            .then((response) => {
                expect(response.statusCode).toBe(200);
            });
    });

    it('Index should return 200 Status', () => {
        return request(app)
            .get('/api/orders')
            .set('Authorization', `Bearer ${token}`)
            .then((response) => {
                expect(response.statusCode).toBe(200); //fix 
            });
    });

});

