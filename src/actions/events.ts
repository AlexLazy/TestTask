import {
  ADD_EVENT,
  SET_IS_EVENT_DIALOG_ADD_OPEN,
  AppActions,
  Event
} from '../actions/actionTypes';

export const addEvent = (event: Event): AppActions => ({
  type: ADD_EVENT,
  event
});

export const setIsEventDialogAddOpen = (isOpen: boolean): AppActions => ({
  type: SET_IS_EVENT_DIALOG_ADD_OPEN,
  isOpen
});
