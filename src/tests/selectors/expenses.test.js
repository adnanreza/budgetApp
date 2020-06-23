import selectExpenses from '../../selectors/expenses';

const expenses = [
  {
    id: '1',
    description: 'Gum',
    note: '',
    amount: 195,
    createdAt: 0,
  },
  {
    id: '2',
    description: 'Burger',
    note: '',
    amount: 1905,
    createdAt: -1000,
  },
  {
    id: '3',
    description: 'Chocolate',
    note: '',
    amount: 4500,
    createdAt: 1000,
  },
];

test('should filter by text value', () => {
  const filters = {
    text: 'e',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined,
  };
  const result = selectExpenses(expenses, filters);
  console.log(result);
  expect(result).toEqual([expenses[2], expenses[1]]);
});
