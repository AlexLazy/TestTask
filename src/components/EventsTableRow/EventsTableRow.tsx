import React, { FC } from 'react';

import { format } from 'date-fns';

import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Checkbox from '@material-ui/core/Checkbox';

import { Event } from '../../actions/actionTypes';

interface EventsTableRowProps extends Event {
  isSelected: boolean;
}

const EventsTableRow: FC<EventsTableRowProps> = ({
  title,
  date,
  location,
  isSelected
}) => (
  <TableRow hover role='checkbox' tabIndex={-1} selected={isSelected}>
    <TableCell padding='checkbox'>
      <Checkbox checked={isSelected} />
    </TableCell>
    <TableCell>{title}</TableCell>
    <TableCell>{format(date, 'MM.dd.yyyy')}</TableCell>
    <TableCell>{location}</TableCell>
  </TableRow>
);

export default EventsTableRow;
