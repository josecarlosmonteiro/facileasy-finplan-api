import request from "supertest";
import app from "./server";

describe('Server run', () => {
  test('Mensagem de servidor rodando', async () => {
    const res = await request(app).get('/');

    expect(res.body).toHaveProperty('message');
    expect(res.body.message).toBe('Server running!');
  })
})