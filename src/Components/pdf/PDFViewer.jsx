import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { Modal } from 'react-bootstrap';

const hideControlsPlugin = () => ({
  renderDefaultToolbar: (Toolbar) => (
    <Toolbar>
      {({
        CurrentPageInput,
        NumberOfPages,
        ZoomIn,
        ZoomOut,
      }) => (
        <div style={{ padding: '0 2px' }}>
          <div style={{ padding: '0 2px', display: 'flex', alignItems: 'center' }}>
            <ZoomOut />
            <ZoomIn />
            <CurrentPageInput /> / <NumberOfPages />
          </div>
        </div>
      )}
    </Toolbar>
  ),
});

export const PDFViewer = ({ book, onClose }) => {
  const plugin = hideControlsPlugin();

  return (
    <Modal show={!!book} onHide={onClose} size="xl" centered>
      <Modal.Header closeButton>
        <Modal.Title>{book?.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="h-[80vh]">
        {book && (
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
            <Viewer
              fileUrl={book.pdfUrl}
              plugins={[plugin]}
            />
          </Worker>
        )}
      </Modal.Body>
    </Modal>
  );
};