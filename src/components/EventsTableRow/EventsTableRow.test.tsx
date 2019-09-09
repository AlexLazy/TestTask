import React from 'react';

import { shallow } from 'enzyme';
import MockDate from 'mockdate';

import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import EventsTableRow from './EventsTableRow';

describe('<EventsTableRow />', () => {
  it('should rendered with currently props', () => {
    MockDate.set('09.09.2019');
    const props = {
      title: 'title',
      date: new Date(),
      location: 'location',
      isSelected: false
    };
    const wrapper = shallow(<EventsTableRow {...props} />);

    expect(wrapper.find(Checkbox).prop('checked')).toBe(false);
    expect(wrapper.find(TableRow).prop('selected')).toBe(false);

    wrapper.setProps({
      ...props,
      isSelected: true
    });
    expect(wrapper.find(Checkbox).prop('checked')).toBe(true);
    expect(wrapper.find(TableRow).prop('selected')).toBe(true);

    expect(
      wrapper
        .find(TableCell)
        .at(1)
        .text()
    ).toEqual('title');
    expect(
      wrapper
        .find(TableCell)
        .at(2)
        .text()
    ).toEqual('09.09.2019');
    expect(
      wrapper
        .find(TableCell)
        .at(3)
        .text()
    ).toEqual('location');
  });
});
