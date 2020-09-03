import React from 'react';
import {Link} from 'react-router-dom';
import defaultImg from '../images/room-1.jpeg';
import PropTypes from 'prop-types';

export default function Room({room}) {
    const { name , slug, images, price } = room;
    return (
        <div className="col-md-4 col-12 mx-auto p-2">
            <div className="card shadow-lg border-0 room">
                <img src={images[0] || defaultImg} alt="single room" className="img-fluid"/>
                <div className="price-top">
                    <h6>$ {price}</h6>
                    <p>Por Noche</p>
                </div>
                <Link to={`/rooms/${slug}`} className="btn-warning room-link text-center" >Caracteristicas</Link>
              <p className="room-info">{name}</p>
            </div>
        </div>
    )
}
 
Room.propTypes = {
    room: PropTypes.shape({
        name:PropTypes.string.isRequired,
        slug:PropTypes.string.isRequired,
        images:PropTypes.arrayOf(PropTypes.string).isRequired,
        price:PropTypes.number.isRequired,
    })
}