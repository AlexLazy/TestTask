import React, { FC } from 'react';

import { connect } from 'react-redux';

import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import Checkbox from '@material-ui/core/Checkbox';

import { Event } from '../../actions/actionTypes';
import {
  selectEvent,
  unselectEvent,
  selectAllEvents,
  unselectAllEvents
} from '../../actions';
import { AppState } from '../..';

import EventsTableRow from '../EventsTableRow';

const EventsTable: FC<LinkStateProps & LinkDispanchProps> = ({
  events,
  selectEvent,
  unselectEvent,
  selectAllEvents,
  unselectAllEvents,
  eventsToDelIds
}) => {
  const handleSelectAll = () => {
    eventsToDelIds.length === events.length
      ? unselectAllEvents()
      : selectAllEvents();
  };

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell padding='checkbox'>
            <Checkbox
              onClick={handleSelectAll}
              indeterminate={
                eventsToDelIds.length > 0 &&
                eventsToDelIds.length < events.length
              }
              checked={
                events.length > 0 && eventsToDelIds.length === events.length
              }
            />
          </TableCell>
          <TableCell>Название</TableCell>
          <TableCell>Дата</TableCell>
          <TableCell>Место проведения</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {events.length > 0 &&
          events.map(event => (
            <EventsTableRow
              key={event.id}
              onClick={() =>
                event.id &&
                (eventsToDelIds.includes(event.id)
                  ? unselectEvent(event.id)
                  : selectEvent(event.id))
              }
              isSelected={!!event.id && eventsToDelIds.includes(event.id)}
              {...event}
            />
          ))}
      </TableBody>
    </Table>
  );
};

interface LinkStateProps {
  events: Event[];
  eventsToDelIds: (string | undefined)[];
}

const mapStateToProps = (state: AppState): LinkStateProps => ({
  events: state.events,
  eventsToDelIds: state.eventsToDelIds
});

interface LinkDispanchProps {
  selectEvent(id: string): void;
  unselectEvent(id: string): void;
  selectAllEvents(): void;
  unselectAllEvents(): void;
}

const mapDispatchToProps = {
  selectEvent,
  unselectEvent,
  selectAllEvents,
  unselectAllEvents
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventsTable);
