import React, { FC } from 'react';

import { connect } from 'react-redux';

import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import Checkbox from '@material-ui/core/Checkbox';

import { Event } from '../../actions/actionTypes';
import { AppState } from '../..';

import EventsTableRow from '../EventsTableRow';

const EventsTable: FC<LinkStateProps> = ({ events }) => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell padding='checkbox'>
          <Checkbox checked={false} />
        </TableCell>
        <TableCell>Название</TableCell>
        <TableCell>Дата</TableCell>
        <TableCell>Место проведения</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {events.map(event => (
        <EventsTableRow key={event.id} isSelected={false} {...event} />
      ))}
    </TableBody>
  </Table>
);

interface LinkStateProps {
  events: Event[];
}

const mapStateToProps = (state: AppState): LinkStateProps => ({
  events: state.events
});

export default connect(mapStateToProps)(EventsTable);
