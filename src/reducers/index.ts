import uuid from 'uuid/v4';
import {
  ADD_EVENT,
  SET_IS_EVENT_DIALOG_ADD_OPEN,
  AppActions,
  Event
} from '../actions/actionTypes';

interface IState {
  events: Event[];
  eventsToDelIds: string[];
  eventsSearch: string;
  isEventsDialogAddOpen: boolean;
  isEventsDialogRemoveOpen: boolean;
}

const initialState = {
  events: [],
  eventsToDelIds: [],
  eventsSearch: '',
  isEventsDialogAddOpen: false,
  isEventsDialogRemoveOpen: false
};

export default function(state: IState = initialState, action: AppActions) {
  switch (action.type) {
    case ADD_EVENT: {
      return {
        ...state,
        events: [
          ...state.events,
          {
            ...action.event,
            id: uuid()
          }
        ]
      };
    }
    case SET_IS_EVENT_DIALOG_ADD_OPEN: {
      return {
        ...state,
        isEventsDialogAddOpen: action.isOpen
      };
    }
    default:
      return state;
  }
}
