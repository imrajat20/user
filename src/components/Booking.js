import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

const Booking = ({ show, handleClose, listingId }) => {
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [guests, setGuests] = useState('');
    const [address, setAddress] = useState('');

    const handleBooking = async () => {
        await addDoc(collection(db, 'bookings'), {
            listingId,
            checkIn,
            checkOut,
            guests,
            address,
            status: 'pending'
        });
        handleClose();
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Book Now</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="checkIn">
                        <Form.Label>Check-in Date</Form.Label>
                        <Form.Control type="date" value={checkIn} onChange={e => setCheckIn(e.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="checkOut">
                        <Form.Label>Check-out Date</Form.Label>
                        <Form.Control type="date" value={checkOut} onChange={e => setCheckOut(e.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="guests">
                        <Form.Label>Number of Guests</Form.Label>
                        <Form.Control type="number" value={guests} onChange={e => setGuests(e.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="address">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" value={address} onChange={e => setAddress(e.target.value)} />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
                <Button variant="primary" onClick={handleBooking}>Book</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default Booking;
