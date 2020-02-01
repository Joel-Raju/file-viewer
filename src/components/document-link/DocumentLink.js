import React from 'react';
import PropTypes from 'prop-types';
import './DocumentLink.scss';
import { fileProps } from '../../proptypes';
import documentIcon from '../../../assets/document-icon.svg';

const DocumentLink = ({ file, onClick, isActive }) => {
  return (
    <li
      className={
        isActive ? 'document-link-wrapper active' : 'document-link-wrapper'
      }
      onClick={onClick}
    >
      <div className='icon'>
        <img src={documentIcon} width={17} height={17} />
      </div>

      <div className='name'>
        <div className='document-name'>{file.title}</div>
        <div className='file-name'>{file.fileName}</div>
      </div>
    </li>
  );
};

DocumentLink.propTypes = {
  file: PropTypes.shape(fileProps).isRequired,
  onClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired
};

export default DocumentLink;
