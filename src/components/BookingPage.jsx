import React from 'react';
import BookingForm from './BookingForm';

export default function BookingPage() {
  return (
    <main>
      <h1>Reserve a Table at Little Lemon</h1>
      <p>Please fill out the details below to complete your registration.</p>
      
      {/* Rendering the BookingForm component */}
      <BookingForm />
    </main>
  );
}