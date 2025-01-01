const db = require('../data/db-config')
const request = require('supertest')
const server = require('./server')

beforeAll(async () => {
    await db.migrate.rollback()
    await db.migrate.latest()
})

beforeEach(async () => {
    await db.seed.run()
})

describe('GET /something', () => {
    test('responds with 200 OK', async () => {
        const res = await request(server).get('/something')
        expect(res.status).toBe(200)
    })
    test('responds with all the things', async () => {
        const res = await request(server).get('/something')
        expect(res.body).toHaveLength(4)
    })
})