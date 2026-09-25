import React from 'react';
import BookingForm from './BookingForm';

export default function BookingPage({ availableTimes, dispatch }) {
  return (
    <main>
      <section className="booking-card">
        <h1>Reserve a Table at Little Lemon</h1>
        <p>Please fill out the details below to complete your registration.</p>
        <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
      </section>
    </main>
  );
}