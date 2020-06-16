import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const EditExpensePage = (props) => {
  console.log(props);
  return (
    <Fragment>
      <div>This is from my edit expense component</div>
      <p>
        Go to <Link to='/edit/1'>1</Link>
      </p>
    </Fragment>
  );
};

export default EditExpensePage;
