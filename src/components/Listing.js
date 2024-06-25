import React, { useState, useEffect } from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

const Listing = () => {
    const [listings, setListings] = useState([]);

    useEffect(() => {
        const fetchListings = async () => {
            const listingsCollection = await getDocs(collection(db, 'listings'));
            setListings(listingsCollection.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        };
        fetchListings();
    }, []);

    return (
        <Container>
            <Row>
                {listings.map(listing => (
                    <Col key={listing.id} sm={12} md={6} lg={4} className="mb-4">
                        <Card>
                            <Card.Img variant="top" src={listing.image} />
                            <Card.Body>
                                <Card.Title>{listing.name}</Card.Title>
                                <Card.Text>{listing.description}</Card.Text>
                                <Button variant="primary" href={`/listing/${listing.id}`}>View Details</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Listing;
