import React, { useState, useEffect } from 'react';
import { Container, Table } from 'react-bootstrap';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

const OrderHistory = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            const ordersCollection = await getDocs(collection(db, 'bookings'));
            setOrders(ordersCollection.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        };
        fetchOrders();
    }, []);

    return (
        <Container>
            <h1>Order History</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Listing ID</th>
                        <th>Check-In</th>
                        <th>Check-Out</th>
                        <th>Guests</th>
                        <th>Address</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order, index) => (
                        <tr key={index}>
                            <td>{order.listingId}</td>
                            <td>{order.checkIn}</td>
                            <td>{order.checkOut}</td>
                            <td>{order.guests}</td>
                            <td>{order.address}</td>
                            <td>{order.status}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default OrderHistory;
