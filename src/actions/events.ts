import {
  ADD_EVENT,
  SELECT_EVENT,
  UNSELECT_EVENT,
  SELECT_ALL_EVENTS,
  UNSELECT_ALL_EVENTS,
  SET_IS_EVENT_DIALOG_ADD_OPEN,
  AppActions,
  Event
} from '../actions/actionTypes';

export const addEvent = (event: Event): AppActions => ({
  type: ADD_EVENT,
  event
});

export const selectEvent = (id: string): AppActions => ({
  type: SELECT_EVENT,
  id
});

export const unselectEvent = (id: string): AppActions => ({
  type: UNSELECT_EVENT,
  id
});

export const selectAllEvents = (): AppActions => ({
  type: SELECT_ALL_EVENTS
});

export const unselectAllEvents = (): AppActions => ({
  type: UNSELECT_ALL_EVENTS
});

export const setIsEventDialogAddOpen = (isOpen: boolean): AppActions => ({
  type: SET_IS_EVENT_DIALOG_ADD_OPEN,
  isOpen
});
