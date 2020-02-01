import React, { useReducer } from 'react';
import {
  GlobalStoreContext,
  globalReducer,
  INITIAL_STATE as initialAppState
} from './context/globalReducer';
import Layout from './containers/Layout';

const App = () => {
  const [globalState, globalDispatch] = useReducer(
    globalReducer,
    initialAppState
  );

  return (
    <GlobalStoreContext.Provider
      value={{ state: globalState, dispatch: globalDispatch }}
    >
      <Layout />
    </GlobalStoreContext.Provider>
  );
};

export default App;
