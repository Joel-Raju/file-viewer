import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Document, Page } from 'react-pdf/dist/entry.parcel';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import { fileProps } from '../../proptypes';
import documentIcon from '../../../assets/document-icon.svg';
import './PdfViewer.scss';

const PdfViewer = ({ file }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div className='pdf-viewer-wrapper'>
      {file ? (
        <>
          <div className='header'>
            <img src={documentIcon} width='41' height='41' />

            <div className='title'>{file.title}</div>
          </div>

          <Document
            file={file ? file.file : null}
            onLoadSuccess={onDocumentLoadSuccess}
          >
            <div style={{ overflow: scroll }}>
              <Page pageNumber={pageNumber} height={650} />
            </div>
          </Document>
        </>
      ) : (
        <div className='header'>
          <div className='title'></div>
        </div>
      )}
    </div>
  );
};

PdfViewer.propTypes = {
  file: PropTypes.shape(fileProps)
};

export default PdfViewer;
