const Something = require('./something-model')
const db = require('../../data/db-config')

beforeAll(async () => {
    await db.migrate.rollback()
    await db.migrate.latest()
})

beforeEach(async () => {
    await db.seed.run()
}) 

test('environment to be testing', () => {
    expect(process.env.NODE_ENV).toBe('testing')
})

describe('getAll', () => {
    test('gets list of all items from the "something" table', async () => {
        const result = await Something.getAll()
        expect(result).toHaveLength(4)
        expect(result[0]).toMatchObject({ name: 'Nico' })
        expect(result[1]).toMatchObject({ name: 'The color green' })
        expect(result[2]).toMatchObject({ name: 'Season 2 Episode 7' })
        expect(result[3]).toMatchObject({ name: 'merry chimis' })
    })
})