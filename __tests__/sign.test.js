const { describe, expect, it } = require('@jest/globals');
const jwt = require('jsonwebtoken')

describe(() => {
    const payload = { name: 'Matthew'}
    const secret = 'HEY'
    it('signs and returns token', () => {
        const token = jwt.sign(payload, secret)
        expect(token.includes('.')).toBe(true)
    })
})