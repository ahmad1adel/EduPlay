import React from 'react';
import { Download } from 'lucide-react';
import { Card } from 'react-bootstrap';

export const BookCard = ({ book, onClick }) => {
  return (
    <Card 
      className="h-100 shadow-sm position-relative overflow-hidden cursor-pointer "
      onClick={onClick}
    >
      <Card.Img 
        variant="top" 
        src={book.coverUrl} 
        alt={book.title}
        style={{ height: '250px', objectFit: 'cover' ,width :'100%', overflow:'hidden' }}
      />
      <div className="position-absolute top-0 overflow-hidden end-0 m-2 opacity-0 hover-visible">
        <Download className="text-white" size={24} />
      </div>
      <Card.Body className="bg-dark bg-opacity-75 overflow-hidden text-white position-absolute bottom-0 w-100 ">
        <Card.Title>{book.title}</Card.Title>
        <Card.Text className='text-white'>{book.subject}</Card.Text>
      </Card.Body>
    </Card>
  );
};