const request = require('supertest');
const app = require('../../src/app');
const connection =require('../../src/database/connection');

describe('ONG', () => {
    beforeEach(async() => {
        await connection.migrate.rollback();
       await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    });

    it('should be able to create a new ONG', async () => {
      const response = await request(app)
        .post('/ongs')
        .send({
          name: "APAD",
	      email: "contato@asd.com",
	      whatsapp: "4199999999",
	      city: "curitiba",
	      uf: "PR"
        });
        console.log(response.body);
    });
});