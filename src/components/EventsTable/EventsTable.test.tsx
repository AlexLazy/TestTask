import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import { mount } from 'enzyme';

import EventsTable from './EventsTable';
import TableHead from '@material-ui/core/TableHead';
import Checkbox from '@material-ui/core/Checkbox';

const mockStore = configureStore();

describe('<EventsTable />', () => {
  let component: any;
  beforeEach(() => {
    component = mount(
      <Provider
        store={mockStore({
          events: [
            {
              id: '1',
              title: '1',
              date: new Date(),
              location: '1'
            },
            {
              id: '2',
              title: '1',
              date: new Date(),
              location: '1'
            }
          ],
          eventsToDelIds: []
        })}
      >
        <EventsTable />
      </Provider>
    );
  });
  it('should render two EventsTableRow', () => {
    expect(component.find('EventsTableRow')).toHaveLength(2);
  });

  // it('should correct switch checkboxes state', () => {
  //   component
  //     .find(Checkbox)
  //     .forEach((checkbox: any) => expect(checkbox.prop('checked')).toBe(false));
  //   expect(
  //     component
  //       .find(TableHead)
  //       .find(Checkbox)
  //       .prop('indeterminate')
  //   ).toBe(false);

  //   component
  //     .find(TableHead)
  //     .find(Checkbox)
  //     .instance()
  //     .simulate('click');

  //   console.log(
  //     component
  //       .find(TableHead)
  //       .find(Checkbox)
  //       .debug()
  //   );
  //   component
  //     .find(Checkbox)
  //     .forEach((checkbox: any) => expect(checkbox.prop('checked')).toBe(true));
  // });
});
