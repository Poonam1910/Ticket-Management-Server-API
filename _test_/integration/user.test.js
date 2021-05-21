const supertest = require('supertest');
const app = require('../../app');
const UserModel = require('../../models/user.model');
const request = supertest(app);

//post user
describe('User', () => {
  it('should be able to create user', async () => {
    const response = await request.post('/users/create').send({
      name: 'userName',
      email: 'useremail@email.com',
      role: 'Administrator',
      loginName: 'userName',
    });
    expect(response.status).toBe(200);
  });
});

//get users
describe('User', () => {
    it('should be able to get the users', async () => {
      const response = await request.get('/users').send();
      expect(response.status).toBe(200);
    });
  });


  //delete user
describe('user', () => {
    it('should be able to delete the user', async () => {
      const response = await request.delete('/users/60a5c61346d6ee3a1887c14d').send()  ;
     expect(response.status).toBe(200);
    });
  });
  