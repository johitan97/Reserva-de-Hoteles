import React, { Component } from 'react'
import defaultBcg from '../images/room-3.jpeg';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import { RoomContext } from '../context';
import StyledHero from '../components/StyledHero';

export default class SingleRoom extends Component {
    constructor (props){
        super(props);
        this.state = {
            slug: this.props.match.params.slug,
            defaultBcg
        };
    }
    static contextType = RoomContext;
    render() {
        const { getRoom } = this.context;
        const room = getRoom(this.state.slug);
        if(!room){
            return (<div className="container roomerror">
                    <div className="row my-5">
                        <div className="col-md-6 col-12 mx-auto">
                            <div className="card shadow-lg border-0 p-4 error">
                                <h1 className="text-center display-4">Disculpe</h1>
                                <h3>No encontramos esa Habitacion.</h3>
                                <Link to="/rooms" className="btn btn-warning mt-4 ">Regresar a Habitaciones</Link>
                            </div> 
                        </div>
                    </div>
                </div>);
        }
        const {name,description,capacity,size,price,extras,breakfast,pets,images} = room;
        const [mainImg, ...defaultBcg] = images;
        return (
            <>
            <StyledHero img={mainImg || this.state.defaultBcg }>
           
            <Banner title={`${name} room`}>
                    <Link to="/rooms" className="btn btn-primary">Regresar a Habitaciones</Link>
            </Banner>
            </StyledHero>
            <section className="single-room container">
               <div className="row">
                    {defaultBcg.map((item,index) => {
                        return (
                        <div className="col-md-4 col-12 mx-auto" key={index}>
                            <div className="card border-0 shadow-lg">
                               <img key={index} src={item} alt={name} className="img-fluid" />
                            </div>
                        </div>)
                    })}
               </div>
               <div className="single-room-info">
                   <article className="desc">
                      <h3>Detalles</h3>
                      <p>{description}</p>
                   </article>
                   <article className="info">
                      <h3>Informacion</h3>
                      <h6>precio : ${price}</h6>
                      <h6>Tamaño  : {size} Habitacion</h6>
                      <h6>
                          Maxima capacidad : {" "}
                              {capacity > 1 ? `${capacity} personas`: `${capacity} persona`}
                      </h6>
                      <h6>{pets? 'Mascotas': 'No Mascotas'}</h6>
                      <h6>{breakfast && "Incluye desayuno gratis"}</h6>
                   </article>
               </div>
            </section>
            <section className="room-extras">
                <h3>Extras</h3>
                <ul className="extras">
                    {extras.map((item,index) => {
                          return <li key={index}>{item}</li>
                    })}
                </ul>
                <div className="p-4 clearfix">
                    <div className="row">
                       <div className="col-md-3 col-12 ml-auto">
                          <Link to={`/booknow/${this.state.slug}`} className="btn btn-outline-primary btn-block btn-lg float-right ">Reserva Ahora</Link>
                       </div>
                    </div>
                </div>
            </section>
            </>
        )
    }
}
