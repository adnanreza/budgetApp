import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should setup remove expense action object', () => {
  const action = removeExpense({ id: '123abc' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc',
  });
});

test('should setup edit expense action object', () => {
  const action = editExpense('333abc', {
    name: 'new name',
    note: 'New note value',
    price: 12.4,
  });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '333abc',
    updates: {
      name: 'new name',
      note: 'New note value',
      price: 12.4,
    },
  });
});
