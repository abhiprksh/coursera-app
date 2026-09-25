import { useReducer } from 'react';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import BookingPage from './components/BookingPage';

const initializeTimes = () => [
  '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'
];

const updateTimes = (availableTimes, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return availableTimes;
    default:
      return availableTimes;
  }
};

const HomePage = () => {
  return (
    <main>
      <p>This is the main content of the Little Lemon restaurant.</p>
      <Link className="book-button" to="/booking">Book a table</Link>
    </main>
  );
}

const Main = () => {
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/booking"
        element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} />}
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default Main;