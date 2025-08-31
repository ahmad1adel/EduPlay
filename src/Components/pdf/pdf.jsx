
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BookCard } from './BOOKCard.jsx';
import { PDFViewer } from './PDFViewer.jsx';
import { books } from '../data.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './../Navbar/Navbar.jsx';

function Library() {
  const [selectedBook, setSelectedBook] = useState(null);
  const [searchTerm] = useState('');

  const filteredBooks = books.filter(book => 
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-vh-100 bg-light">
      <Navbar/>

      <Container>
        <Row xs={1} md={2} lg={4} className="g-4">
          {filteredBooks.map(book => (
            <Col key={book.id}>
              <BookCard book={book} onClick={() => setSelectedBook(book)} />
            </Col>
          ))}
        </Row>
      </Container>

      <PDFViewer book={selectedBook} onClose={() => setSelectedBook(null)} />
    </div>
  );
}

export default Library;