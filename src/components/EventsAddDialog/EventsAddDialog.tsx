import React, { Component, ChangeEvent } from 'react';

import { connect } from 'react-redux';
import { AppState } from '../../index';
import { Event } from '../../actions/actionTypes';
import { setIsEventDialogAddOpen, addEvent } from '../../actions';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

import { locations } from '../../stubs';

class EventsAddDialog extends Component<LinkStateProps & LinkDispanchProps> {
  state = {
    title: '',
    date: new Date(),
    location: ''
  };

  handleTitle = (e: ChangeEvent<HTMLInputElement>) =>
    this.setState({
      ...this.state,
      title: e.target.value
    });
  handleDate = (date: Date | null) =>
    this.setState({
      ...this.state,
      date
    });
  handleLocation = (e: ChangeEvent<{ value: unknown }>) =>
    this.setState({
      ...this.state,
      location: e.target.value + ''
    });

  handleClose = () => this.props.setIsEventDialogAddOpen(false);
  handleSubmit = () => {
    const { title, date, location } = this.state;
    if (title && date && location) {
      addEvent({
        title,
        date,
        location
      });
      this.setState({
        title: '',
        date: new Date(),
        location: ''
      });
      this.handleClose();
    }
  };

  render() {
    const { isEventsDialogAddOpen } = this.props;
    const { title, date, location } = this.state;
    return (
      <Dialog
        open={isEventsDialogAddOpen}
        onClose={this.handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle>Добавление мероприятия</DialogTitle>
        <DialogContent>
          <TextField
            value={title}
            onChange={this.handleTitle}
            name='title'
            label='Название'
            margin='normal'
            fullWidth
          />
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              disableToolbar
              value={date}
              onChange={this.handleDate}
              variant='inline'
              format='MM.dd.yyyy'
              margin='normal'
              fullWidth
            />
          </MuiPickersUtilsProvider>
          <FormControl margin='normal' fullWidth>
            <InputLabel>Город</InputLabel>
            <Select
              value={location}
              onChange={this.handleLocation}
              name='location'
            >
              {locations &&
                locations.map((location, i) => (
                  <MenuItem key={i} value={location}>
                    {location}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button color='primary' onClick={this.handleClose}>
            Отмена
          </Button>
          <Button
            color='primary'
            autoFocus
            type='submit'
            disabled={!(title && date && location)}
            onClick={this.handleSubmit}
          >
            Добавить
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

interface LinkStateProps {
  isEventsDialogAddOpen: boolean;
}

const mapStateToProps = (state: AppState): LinkStateProps => ({
  isEventsDialogAddOpen: state.isEventsDialogAddOpen
});

interface LinkDispanchProps {
  setIsEventDialogAddOpen(isOpen: boolean): void;
  addEvent(event: Event): void;
}

const mapDispatchToProps = { setIsEventDialogAddOpen, addEvent };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventsAddDialog);
