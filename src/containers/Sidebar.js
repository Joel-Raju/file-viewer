import React, { useContext } from 'react';
import { GlobalStoreContext } from '../context/globalReducer';
import { uploadNewDocument, setActiveDocument } from '../context/globalActions';
import { UploadButton, DocumentLink } from '../components/';
import readerZoneLogo from '../../assets/readerzone-logo.svg';
import './Sidebar.scss';

const Sidebar = () => {
  const { dispatch, state } = useContext(GlobalStoreContext);

  const handleDocUpload = file => dispatch(uploadNewDocument(file));

  const handleDocClick = doc => dispatch(setActiveDocument(doc));

  return (
    <div className='sidebar-wrapper'>
      <div className='logo'>
        <img src={readerZoneLogo} width={208} height={37} />
      </div>
      <div className='document-list-wrapper'>
        <span className='files-label'>Files</span>
        <ul className='list'>
          {state.documentList.map(doc => (
            <DocumentLink
              key={doc.id}
              onClick={() => handleDocClick(doc)}
              file={doc}
              isActive={
                state.activeDocument
                  ? state.activeDocument.id === doc.id
                  : false
              }
            />
          ))}
        </ul>
      </div>
      <div className='footer'>
        <UploadButton onUpload={handleDocUpload} />
      </div>
    </div>
  );
};

export default Sidebar;
