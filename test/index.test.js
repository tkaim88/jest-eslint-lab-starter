const {
    capitalizeWords,
    filterActiveUsers,
    logAction
} = require('../index');

// capitalizeWords tests
describe('capitalizeWords', () => {
    // Normal case
    test('capitalizes "hello world" to "Hello World"', () => {
        expect(capitalizeWords('hello world')).toBe('Hello World');
    });
    
    // Edge cases
    test('returns empty string for empty input', () => {
        expect(capitalizeWords('')).toBe('');
    });
    
    test('handles strings with special characters like "hello-world"', () => {
        expect(capitalizeWords('hello-world')).toBe('Hello-World');
    });
    
    test('handles single-word strings like "hello"', () => {
        expect(capitalizeWords('hello')).toBe('Hello');
    });
});

// filterActiveUsers tests
describe('filterActiveUsers', () => {
    const users = [
        { name: 'Alice', isActive: true },
        { name: 'Bob', isActive: false }
    ];
    
    test('filters active users from mixed array', () => {
        expect(filterActiveUsers(users)).toEqual([{ name: 'Alice', isActive: true }]);
    });
    
    test('returns empty array when all users are inactive', () => {
        const inactiveUsers = [
            { name: 'Alice', isActive: false },
            { name: 'Bob', isActive: false }
        ];
        expect(filterActiveUsers(inactiveUsers)).toEqual([]);
    });
    
    test('returns empty array for empty input', () => {
        expect(filterActiveUsers([])).toEqual([]);
    });
});

// logAction tests
describe('logAction', () => {
    test('generates log string with timestamp for valid inputs', () => {
        const result = logAction('login', 'Alice');
        expect(result).toContain('User Alice performed login at');
    });
    
    test('handles missing action', () => {
        expect(logAction(null, 'Alice')).toContain('User Alice performed null');
    });
    
    test('handles missing username', () => {
        expect(logAction('login', null)).toContain('User null performed login');
    });
    
    test('handles empty strings as inputs', () => {
        const result = logAction('', '');
    
        // eslint-disable-next-line no-regex-spaces
        expect(result).toMatch(/User  performed  at/);
    });
});