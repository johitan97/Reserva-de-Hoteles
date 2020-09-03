import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';

export default function Home() {
    return (
        <>
        <Hero hero="defaultHero">
        </Hero>
        <Banner title="Hotel Ciudad Flores" subtitle="Habitaciones Desde los 500$ Pesos">
                <Link to="/rooms" className="btn btn-primary">
                      Nuestras Habitaciones
                </Link>
        </Banner>
        <Services/> 
        <FeaturedRooms/>
        </>

    )
}
