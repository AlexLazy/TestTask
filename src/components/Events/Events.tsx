import React, { FC, Fragment } from 'react';

import EventsTableToolbar from '../EventsTableToolbar';
import EventsTable from '../EventsTable';

const Events: FC = () => (
  <Fragment>
    <EventsTableToolbar />
    <EventsTable />
  </Fragment>
);
export default Events;
