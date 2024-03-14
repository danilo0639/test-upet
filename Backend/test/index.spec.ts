import request from 'supertest';
import { app } from '../index';

describe('Test user', () => {
  it('Should created a new user', async () => {
    const newUser = {
      name: 'John',
      lastName: 'Doe',
      email: 'john@example.com',
      phone: '123456789',
      password: 'password123'
    };

    const response = await request(app)
      .post('/api/users')
      .send(newUser);

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('name', 'John');
  });
});
