import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Listing from './components/Listing';
import Booking from './components/Booking';
import OrderHistory from './components/OrderHistory';

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" exact component={Listing} />
                <Route path="/listing/:id" component={Booking} />
                <Route path="/order-history" component={OrderHistory} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
