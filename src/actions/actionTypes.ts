export const ADD_EVENT = 'ADD_EVENT';
export const SELECT_EVENT = 'SELECT_EVENT';
export const UNSELECT_EVENT = 'UNSELECT_EVENT';
export const SELECT_ALL_EVENTS = 'SELECT_ALL_EVENTS';
export const UNSELECT_ALL_EVENTS = 'UNSELECT_ALL_EVENTS';
export const SET_IS_EVENT_DIALOG_ADD_OPEN = 'SET_IS_EVENT_DIALOG_ADD_OPEN';

export interface Event {
  id?: string;
  title: string;
  date: Date;
  location: string;
}

export interface AddEventAction {
  type: typeof ADD_EVENT;
  event: Event;
}

export interface SelectEventAction {
  type: typeof SELECT_EVENT;
  id: string;
}

export interface UnselectEventAction {
  type: typeof UNSELECT_EVENT;
  id: string;
}

export interface SelectAllEventsAction {
  type: typeof SELECT_ALL_EVENTS;
}

export interface UnselectAllEventsAction {
  type: typeof UNSELECT_ALL_EVENTS;
}

export interface SetIsEventDialogAddOpenAction {
  type: typeof SET_IS_EVENT_DIALOG_ADD_OPEN;
  isOpen: boolean;
}

export type EventActionTypes =
  | AddEventAction
  | SelectEventAction
  | UnselectEventAction
  | SelectAllEventsAction
  | UnselectAllEventsAction
  | SetIsEventDialogAddOpenAction;
export type AppActions = EventActionTypes;
