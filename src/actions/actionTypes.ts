export const ADD_EVENT = 'ADD_EVENT';
export const SELECT_EVENT = 'SELECT_EVENT';
export const UNSELECT_EVENT = 'UNSELECT_EVENT';
export const SELECT_ALL_EVENTS = 'SELECT_ALL_EVENTS';
export const UNSELECT_ALL_EVENTS = 'UNSELECT_ALL_EVENTS';
export const REMOVE_SELECTED_EVENTS = 'REMOVE_SELECTED_EVENTS';
export const SET_IS_EVENTS_DIALOG_ADD_OPEN = 'SET_IS_EVENTS_DIALOG_ADD_OPEN';
export const SET_IS_EVENTS_DIALOG_REMOVE_OPEN =
  'SET_IS_EVENTS_DIALOG_REMOVE_OPEN';
export const SETARCH_EVENTS = 'SETARCH_EVENTS';

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

export interface RemoveSelectedEventsAction {
  type: typeof REMOVE_SELECTED_EVENTS;
}

export interface SetIsEventsDialogAddOpenAction {
  type: typeof SET_IS_EVENTS_DIALOG_ADD_OPEN;
  isOpen: boolean;
}

export interface SetIsEventsDialogRemoveOpenAction {
  type: typeof SET_IS_EVENTS_DIALOG_REMOVE_OPEN;
  isOpen: boolean;
}

export interface SearchEventsAction {
  type: typeof SETARCH_EVENTS;
  search: string;
}

export type EventActionTypes =
  | AddEventAction
  | SelectEventAction
  | UnselectEventAction
  | SelectAllEventsAction
  | UnselectAllEventsAction
  | RemoveSelectedEventsAction
  | SetIsEventsDialogAddOpenAction
  | SetIsEventsDialogRemoveOpenAction
  | SearchEventsAction;
export type AppActions = EventActionTypes;
