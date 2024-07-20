import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSession } from 'next-auth/client';
import SearchFilter from '../components/SearchFilter';

const HomePage = () => {
    const [session, loading] = useSession();
    const [flights, setFlights] = useState([]);
    const [filteredFlights, setFilteredFlights] = useState([]);

    useEffect(() => {
        const fetchFlights = async () => {
            const response = await axios.get('/api/flights');
            setFlights(response.data);
            setFilteredFlights(response.data);
        };

        fetchFlights();
    }, []);

    // useEffect(() => {
    //     socket.on('flightUpdate', (flight) => {
    //         // Handle real-time flight update
    //     });
    // }, []);

    const handleSearch = (term) => {
        const filtered = flights.filter((flight) =>
            flight.flightNumber.includes(term) ||
            flight.origin.includes(term) ||
            flight.destination.includes(term)
        );
        setFilteredFlights(filtered);
    };

    if (loading) return <div>Loading...</div>;
    if (!session) return <div>Please log in to view flights.</div>;

    return (
        <div>
            <h1>Flight Management Dashboard</h1>
            <SearchFilter onSearch={handleSearch} />
            <table>
                <thead>
                    <tr>
                        <th>Flight Number</th>
                        <th>Origin</th>
                        <th>Destination</th>
                        <th>Scheduled Departure</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredFlights.map((flight) => (
                        <tr key={flight._id}>
                            <td>{flight.flightNumber}</td>
                            <td>{flight.origin}</td>
                            <td>{flight.destination}</td>
                            <td>{new Date(flight.scheduledDepartureTime).toLocaleString()}</td>
                            <td>{flight.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default HomePage;
