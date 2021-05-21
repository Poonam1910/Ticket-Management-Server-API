const supertest = require('supertest');

const app = require('../../app');;
const TicketModel = require('../../models/ticket.model');
const request = supertest(app);


//get tickets
describe('Ticket', () => {
  it('should be able to get the tickets', async () => {
    const response = await request.get('/tickets').send();
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });
});

//get ticket with guid
describe('Ticket', () => {
  it('should be able to get the ticket', async () => {
    const response = await request.get('tickets/60a5633d5ff4727d04029b67').send();
    expect(response.status).toBe(404);
  });
});

//post
describe('Ticket', () => {
  it('should be able to create ticket', async () => {
    const response = await request.post('/tickets/create').send({
      description: 'Ticket e2e test Suite',
      projectName: 'Project-test',
      assigneeId: '60a0c8c9eb957939600487a6', //user guid
      priorityId:1,
      typeId:1,
      statusId:1      
    });
    expect(response.status).toBe(200);   
  });
});


//put invalid Guid
describe('Ticket', () => {
  it('should be able to update the ticket', async () => {
    const response = await request.post('/tickets/update/60a5633d5ff4727d04029b67').send({
      description: 'Ticket e2e test Suite ',
      projectName: 'Project-test',
      assigneeId: '60a0c8c9eb957939600487a6', //user guid
      priorityId:1,
      typeId:1,
      statusId:1      
    });
    expect(response.status).toBe(200);
    expect(response.body).toBe('Ticket Not found');
  });
});

//delete
describe('Ticket', () => {
  it('should be able to update the ticket', async () => {
    const response = await request.delete('/tickets/60a5633d5ff4727d04029b67').send()  
    expect(response.status).toBe(200);
  });
});

