import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

const EditExpensePage = (props) => {
  return (
    <Fragment>
      <ExpenseForm
        expense={props.expense}
        subProp={(exp) => {
          // dispatch the action to edit the expense
          // redirect to the dashboard
          console.log('updated', exp);
          props.dispatch(editExpense(props.match.params.id, exp));
          props.history.push('/');
        }}
      />
      <button
        onClick={(e) => {
          props.dispatch(removeExpense({ id: props.match.params.id }));
          props.history.push('/');
        }}
      >
        Remove
      </button>
    </Fragment>
  );
};

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(
      (expense) => expense.id === props.match.params.id
    ),
  };
};

export default connect(mapStateToProps)(EditExpensePage);
