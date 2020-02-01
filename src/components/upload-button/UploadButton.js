import React from 'react';
import PropTypes from 'prop-types';
import './UploadButton.scss';
import cloudIcon from '../../../assets/cloud-icon.svg';

const UploadButton = ({ onUpload }) => {
  const onChangeHandler = ({ target: { files } }) => {
    onUpload(files[0]);
  };

  return (
    <div className='upload-button'>
      <input
        type='file'
        className='input-file'
        id='file'
        onChange={onChangeHandler}
      />

      <label htmlFor='file'>
        <img src={cloudIcon} width={33} height={33} />
        Upload Files
      </label>
    </div>
  );
};

UploadButton.propTypes = {
  onUpload: PropTypes.func.isRequired
};

export default UploadButton;
