import { useReducer } from 'react';
import { Link, Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import BookingPage from './components/BookingPage';
import ConfirmedBooking from './components/ConfirmedBooking';

const fallbackTimes = [
  '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'
];

const fetchAvailableTimes = (date) => {
  if (typeof window.fetchAPI === 'function') {
    return window.fetchAPI(date);
  }

  return fallbackTimes;
};

const initializeTimes = () => fetchAvailableTimes(new Date());

const updateTimes = (availableTimes, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return fetchAvailableTimes(new Date(action.date));
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
  const navigate = useNavigate();
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  const submitForm = (formData) => {
    if (typeof window.submitAPI === 'function' && window.submitAPI(formData)) {
      navigate('/confirmed');
    }
  };

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/booking"
        element={
          <BookingPage
            availableTimes={availableTimes}
            dispatch={dispatch}
            submitForm={submitForm}
          />
        }
      />
      <Route path="/confirmed" element={<ConfirmedBooking />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default Main;