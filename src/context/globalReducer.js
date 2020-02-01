import { createContext } from 'react';
import uuidv4 from 'uuid/v4';
import { ACTION_TYPES } from './globalActions';

export const INITIAL_STATE = {
  documentList: [],
  activeDocument: null
};

export const GlobalStoreContext = createContext({
  state: INITIAL_STATE,
  dispatch: () => {}
});

export const globalReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case ACTION_TYPES.UPLOAD_NEW_DOC:
      const newDoc = {
        id: uuidv4(),
        file: payload,
        title: `Document ${state.documentList.length + 1}`,
        fileName: payload.name
      };
      return {
        ...state,
        documentList: [...state.documentList, newDoc],
        activeDocument: newDoc
      };

    case ACTION_TYPES.SET_ACTIVE_DOC:
      return {
        ...state,
        activeDocument: payload
      };

    default:
      return state;
  }
};
