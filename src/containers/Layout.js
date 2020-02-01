import React, { useContext } from 'react';
import './Layout.scss';
import Sidebar from './Sidebar';
import { GlobalStoreContext } from '../context/globalReducer';
import { PdfViewer } from '../components';

const Layout = () => {
  const { state } = useContext(GlobalStoreContext);
  return (
    <div className='wrapper'>
      <aside className='sidebar'>
        <Sidebar />
      </aside>
      <div className='content'>
        <PdfViewer file={state.activeDocument} />
      </div>
    </div>
  );
};

export default Layout;
