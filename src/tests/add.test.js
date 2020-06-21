const add = (a, b) => a + b;

const generateGreeting = (name = 'anonymous') => `Hello ${name}!`;

test('should add two numbers', () => {
  const result = add(3, 4);
  expect(result).toBe(7);
});

test('should return correct greeting', () => {
  const res = generateGreeting('Adnan');
  expect(res).toBe('Hello Adnan!');
});

test('should generate greeting for no name', () => {
  const res = generateGreeting();
  expect(res).toBe('Hello anonymous!');
});
