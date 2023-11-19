import supertest from 'supertest';
import app from '../app'; 

let id: number;

test("GET /countries debe traer un arreglo de países", async () => {
  const res = await supertest(app).get('/countries');
  expect(res.status).toBe(200);
});

test('POST /countries should return 201', async () => { 
  const data = {
    name: 'pais inventado'
  }
  const res:any = await supertest(app).post('/countries').send(data)
  id = res.id;
  expect(res.status).toBe(201);
 })

test('DELETE /countries/:id should return 204', async () => { 
  const res = await supertest(app).delete(`/countries/${id}`)
  expect(res.status).toBe(204)
 })