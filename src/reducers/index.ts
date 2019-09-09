import uuid from 'uuid/v4';
import {
  ADD_EVENT,
  SELECT_EVENT,
  UNSELECT_EVENT,
  SELECT_ALL_EVENTS,
  UNSELECT_ALL_EVENTS,
  REMOVE_SELECTED_EVENTS,
  SET_IS_EVENTS_DIALOG_ADD_OPEN,
  SET_IS_EVENTS_DIALOG_REMOVE_OPEN,
  SETARCH_EVENTS,
  AppActions,
  Event
} from '../actions/actionTypes';

interface IState {
  events: Event[];
  eventsToDelIds: (string | undefined)[];
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
    case SELECT_EVENT: {
      return {
        ...state,
        eventsToDelIds: state.eventsToDelIds.includes(action.id)
          ? [...state.eventsToDelIds]
          : [...state.eventsToDelIds, action.id]
      };
    }
    case UNSELECT_EVENT: {
      return {
        ...state,
        eventsToDelIds: !state.eventsToDelIds.includes(action.id)
          ? [...state.eventsToDelIds]
          : [...state.eventsToDelIds.filter(id => id !== action.id)]
      };
    }
    case SELECT_ALL_EVENTS: {
      return {
        ...state,
        eventsToDelIds:
          state.events.length > 0 ? state.events.map(event => event.id) : []
      };
    }
    case UNSELECT_ALL_EVENTS: {
      return {
        ...state,
        eventsToDelIds: []
      };
    }
    case REMOVE_SELECTED_EVENTS: {
      return {
        ...state,
        events: state.events.filter(
          event => !state.eventsToDelIds.includes(event.id)
        ),
        eventsToDelIds: []
      };
    }
    case SET_IS_EVENTS_DIALOG_ADD_OPEN: {
      return {
        ...state,
        isEventsDialogAddOpen: action.isOpen
      };
    }
    case SET_IS_EVENTS_DIALOG_REMOVE_OPEN: {
      return {
        ...state,
        isEventsDialogRemoveOpen: action.isOpen
      };
    }
    case SETARCH_EVENTS: {
      return {
        ...state,
        eventsSearch: action.search
      };
    }
    default:
      return state;
  }
}
