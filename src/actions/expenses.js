import { v4 as uuidv4 } from 'uuid';

// Add expense
export const addExpense = ({
  description = '',
  notes = '',
  amount = 0,
  createdAt = 0,
} = {}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuidv4(),
    description,
    amount,
    createdAt,
  },
});

// Remove expense
export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id,
});

// Edit expense
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates,
});
