import * as request from 'supertest';
import { TestUser } from './model.test.user';
import { app } from '../index';
import mongoose from 'mongoose';
import connectToMongoDb from '../db/connectMongoDb';

describe('Test user', () => {
  let testCollectionName: string;
  beforeAll(async () => {
    await connectToMongoDb();
    testCollectionName = 'test_users';
    await mongoose.connection.dropCollection(testCollectionName);
    await mongoose.connection.createCollection(testCollectionName);
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });


  it('Should create a new user', async () => {
    const newUser = new TestUser({
      name: 'Papo',
      lastName: 'Daniel',
      email: 'danielppso@gmail.com',
      phone: '9876632217',
      password: 'passwrsd123A'
    });

    const savedUser = await newUser.save();

    expect(savedUser).toBeDefined();
    expect(savedUser.name).toBe('Papo');
  });

  it('Should have an error', async () => {
    const newUser = {
      name: 'Papos',
      lastName: 'Daniel',
      email: '1gmail.com',
      phone: '(987)663-5217',
      password: 'saasas'
    };

    const response = await request(app)
      .post('/api/users')
      .send(newUser);
       
      console.log(newUser)

    expect(response.status).toBe(400);
  });
});
