const { palindrome } = require('../utils/for_testing')

test('palindrome of DWU', () => {
    const result = palindrome('DWU')

    expect(result).toBe('UWD')
})

test('palindrome of empty string', () => {
    const result = palindrome('')

    expect(result).toBe('')
})

test('palindrome of undefined', () => {
    const result = palindrome()

    expect(result).toBeUndefined()
})

