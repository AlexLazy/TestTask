export const ADD_EVENT = 'ADD_EVENT';
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

export interface SetIsEventDialogAddOpenAction {
  type: typeof SET_IS_EVENT_DIALOG_ADD_OPEN;
  isOpen: boolean;
}

export type EventActionTypes = AddEventAction | SetIsEventDialogAddOpenAction;
export type AppActions = EventActionTypes;
