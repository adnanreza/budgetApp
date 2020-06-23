import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should setup default filter values', () => {
  const state = filtersReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month'),
  });
});

test('should setup sortBy to amount', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
  expect(state.sortBy).toBe('amount');
});

test('should setup sortBy to date', () => {
  const currentState = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined,
  };
  const action = {
    type: 'SORT_BY_DATE',
  };
  const state = filtersReducer(currentState, action);
  expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
  const filter = 'thisIsMy filter text';
  const action = { type: 'SET_TEXT_FILTER', text: filter };

  const state = filtersReducer(undefined, action);
  expect(state.text).toBe(filter);
});

test('should set startDate filter', () => {
  const startDate = moment(0).subtract(4, 'days').valueOf();
  const action = { type: 'SET_START_DATE', startDate };

  const state = filtersReducer(undefined, action);
  expect(state.startDate).toEqual(startDate);
});

test('should set endDate filter', () => {
  const endDate = moment(0).subtract(4, 'months').valueOf();
  const action = { type: 'SET_END_DATE', endDate };

  const state = filtersReducer(undefined, action);
  expect(state.endDate).toEqual(endDate);
});
