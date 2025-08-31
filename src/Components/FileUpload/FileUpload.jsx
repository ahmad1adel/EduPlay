import React, { useState } from 'react';
import { Card, Form } from 'react-bootstrap';
import { FileText, Folder, ArrowDown } from 'lucide-react';

const FileUpload = () => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [files, setFiles] = useState([]);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    
    if (e.dataTransfer.files) {
      const filesArray = Array.from(e.dataTransfer.files);
      setFiles([...files, ...filesArray]);
    }
  };

  const handleFileInput = (e) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      setFiles([...files, ...filesArray]);
    }
  };

  return (
    <div>
      <h5 className="mb-3">File submissions</h5>
      <Card className="border-1">
        <Card.Body>
          <div className="d-flex justify-content-end mb-2">
            <div className="small text-muted">Maximum file size: 1 MB, Maximum number of file: 30</div>
          </div>
          
          <div className="d-flex justify-content-center my-2">
            <label htmlFor="file-upload" className="upload-btn me-2">
              <FileText size={20} color="#3646d1" />
              <span className="ms-1">File</span>
              <input 
                id="file-upload" 
                type="file" 
                className="d-none" 
                onChange={handleFileInput}
                multiple
              />
            </label>
            
            <label htmlFor="folder-upload" className="upload-btn">
              <Folder size={20} color="#3646d1" />
              <span className="ms-1">Folder</span>
              <input 
                id="folder-upload" 
                type="file" 
                className="d-none"
                onChange={handleFileInput} 
                webkitdirectory=""
                directory=""
              />
            </label>
          </div>
          
          <div 
            className={`upload-area mt-3 ${isDragOver ? 'border-primary' : ''}`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <div className="text-center">
              <ArrowDown size={48} color="#3646d1" className="mb-2" />
              <p className="mb-0">You can drag and drop files here to add them.</p>
            </div>
          </div>
          
          {files.length > 0 && (
            <div className="mt-3">
              <h6>Selected Files ({files.length})</h6>
              <ul className="list-group">
                {files.map((file, index) => (
                  <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                    <span>
                      <FileText size={16} className="me-2" />
                      {file.name}
                    </span>
                    <span className="badge bg-primary rounded-pill">{(file.size / 1024).toFixed(2)} KB</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default FileUpload;