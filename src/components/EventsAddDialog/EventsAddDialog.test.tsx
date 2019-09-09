import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import { mount } from 'enzyme';

import EventsAddDialog from './EventsAddDialog';
import Select from '@material-ui/core/Select';

const [setIsEventsDialogAddOpen, addEvent] = new Array(2).fill(jest.fn());

const mockStore = configureStore();

describe('<EventsAddDialog />', () => {
  let component: any;
  beforeEach(() => {
    component = mount(
      <Provider
        store={mockStore({
          isEventsDialogAddOpen: true,
          setIsEventsDialogAddOpen,
          addEvent
        })}
      >
        <EventsAddDialog />
      </Provider>
    );
  });
  it('should set submit btn disable prop to false when all fields is filled', () => {
    expect(component.find('button[type="submit"]').prop('disabled')).toBe(true);
    component
      .find('EventsAddDialog')
      .instance()
      .setState({
        title: 'title',
        date: new Date(),
        location: 'location'
      });
    component.find(Select).simulate('change');
    expect(component.find('button[type="submit"]').prop('disabled')).toBe(
      false
    );
  });

  it('should close dialog and set initial state', () => {
    component
      .find('EventsAddDialog')
      .instance()
      .setState({
        title: 'title',
        date: new Date(),
        location: 'location'
      });
    component.find('button[type="submit"]').simulate('click');

    expect(component.contains('EventsAddDialog')).toBe(false);
    expect(component.find('input[name="title"]').text()).toEqual('');
    expect(component.find('input[name="location"]').text()).toEqual('');
  });
});
