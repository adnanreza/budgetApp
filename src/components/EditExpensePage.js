import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {
  render() {
    return (
      <Fragment>
        <ExpenseForm expense={this.props.expense} subProp={this.onSubmit} />
        <button onClick={this.onRemove}>Remove</button>
      </Fragment>
    );
  }

  onSubmit = (exp) => {
    this.props.editExpense(this.props.match.params.id, exp);
    this.props.history.push('/');
  };

  onRemove = (e) => {
    this.props.removeExpense({ id: this.props.match.params.id });
    this.props.history.push('/');
  };
}

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find(
    (expense) => expense.id === props.match.params.id
  ),
});

const mapDispatchToProps = (dispatch, props) => ({
  editExpense: (id, expense) => dispatch(editExpense(id, expense)),
  removeExpense: (expense) => dispatch(removeExpense(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
