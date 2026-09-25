import { fireEvent, render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';

const availableTimes = ['17:00', '18:00', '19:00'];

const renderBookingForm = (dispatch = jest.fn()) => {
  render(
    <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
  );

  return dispatch;
};

test('renders the booking fields and available times', () => {
  renderBookingForm();

  expect(screen.getByLabelText(/choose date/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/choose time/i)).toHaveValue('17:00');
  expect(screen.getByRole('option', { name: '18:00' })).toBeInTheDocument();
  expect(screen.getByLabelText(/number of guests/i)).toHaveValue(1);
  expect(screen.getByLabelText(/occasion/i)).toHaveValue('Birthday');
});

test('dispatches the selected date to update available times', () => {
  const dispatch = renderBookingForm();
  const dateInput = screen.getByLabelText(/choose date/i);

  fireEvent.change(dateInput, { target: { value: '2026-10-01' } });

  expect(dispatch).toHaveBeenCalledWith({
    type: 'UPDATE_TIMES',
    date: '2026-10-01'
  });
  expect(dateInput).toHaveValue('2026-10-01');
});

test('updates booking fields and submits the reservation', () => {
  const consoleLog = jest.spyOn(console, 'log').mockImplementation(() => {});
  renderBookingForm();

  fireEvent.change(screen.getByLabelText(/number of guests/i), {
    target: { value: '4' }
  });
  fireEvent.change(screen.getByLabelText(/occasion/i), {
    target: { value: 'Anniversary' }
  });
  fireEvent.click(screen.getByRole('button', { name: /make your reservation/i }));

  expect(consoleLog).toHaveBeenCalledWith('Reservation details:', {
    date: '',
    time: '17:00',
    guests: '4',
    occasion: 'Anniversary'
  });

  consoleLog.mockRestore();
});
