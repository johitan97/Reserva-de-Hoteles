import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import RoomsContainer from '../components/RoomsContainer';
const Rooms = () => {
    return (
    <div>
        <Hero hero="roomsHero">
        </Hero>
        <Banner title="Habitaciones Disponibles" subtitle="Las Mejores Habitaciones Disponibles">
                <Link to="/" className="btn btn-warning">
                      Regrese A Inicio
                </Link>
        </Banner>
        <RoomsContainer/>
    </div>
    )
}

export default Rooms
