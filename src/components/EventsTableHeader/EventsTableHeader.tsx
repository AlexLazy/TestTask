import React, { FC } from 'react';
import { connect } from 'react-redux';

import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';

const EventsTableHeader: FC = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell padding='checkbox'></TableCell>
      </TableRow>
    </TableHead>
  );
};

// const mapStateToProps = (
//   state: AppState,
//   ownProps: HomePageProps
// ): LinkStateProps => ({
//   expenses: state.expenses
// });

// const mapDispatchToProps = (
//   dispatch: ThunkDispatch<any, any, AppActions>,
//   ownProps: HomePageProps
// ): LinkDispatchProps => ({
//   startEditExpense: bindActionCreators(startEditExpense, dispatch),
//   startRemoveExpense: bindActionCreators(startRemoveExpense, dispatch)
// });
export default EventsTableHeader;
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(EventsTableHeader);
