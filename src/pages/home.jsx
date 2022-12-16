import React, {useState, useEffect} from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Header } from '../components/header';
import { setUpArticulos } from '../helper/SetUpArticulos';
import '../styles/main.css';
import "leaflet/dist/leaflet.css";


const Home = () => {

    document.title = "Inicio";

    const [articulos, setArticulos] = useState([]);

    useEffect(() => {

        setUpArticulos(setArticulos);

    }, []);


    const iconMarker = L.icon({
        iconUrl: require('../static/marker.png'),
        iconSize: [48,48],
        iconAnchor: [32, 64],
    });
    
      /* const houseMarkers = houses.map((house) => (
        <Marker position={[house.coordenadas.latitud, house.coordenadas.longitud]} key={house._id} icon={iconMarker}>
                <Popup>
                      <img src={house.imagenes[0]} className="card-img-top mb-2 rounded-4 cropped-marker" alt={house.titulo} />
                      <div className="card-body py-0">
                          <p className="card-text my-0 fw-bold fs-6">{house.titulo}</p>
                          <p className="card-text my-1 fw-bold">{house.precioNoche} € noche</p>
                          <p className="card-text my-0 fst-italic">{house.direccion}</p>
                      </div>
                </Popup>
            </Marker>
      )); */

    return (
        articulos.length === 0
          ? <div> 
            <Header />
            <main className='row justify-content-center'>
                <div className='col-sm-8'>
                    <b>No se han encontrado artículos</b>
                </div> 

                <div className='col-sm-8'>
                    <MapContainer center={[40.41831, -3.70275]} zoom={13} >
                        <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        {/* { houseMarkers } */}
                    </MapContainer>
                </div>
            </main>
            </div>
          :
            <div>
                <Header />
                <main className="row justify-content-center" >
                    <h1 className="col-sm-6" >Home</h1>
                    <div className="container pt-2">
                        <div className="row col-sm-8">
                            {
                                articulos.map(articulo => (
                                    <div className="col-4" key={articulo._id}>
                                        <div className="card">
                                            <img src={articulo.imagenes[0]} className="card-img-top" alt="" />
                                            <div className="card-body">
                                                <h5 className="card-title">{articulo.descripcion}</h5>
                                                <p className="card-text">{articulo.vendedor}</p>
                                                <p className="card-text">{articulo.precioSalida}</p>
                                                <a href={"/articulo/" + articulo._id} className="stretched-link"> </a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div> 
                    <div className='col-sm-8'>
                        <MapContainer center={[40.41831, -3.70275]} zoom={13} >
                            <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            {/* { houseMarkers } */}
                        </MapContainer>
                    </div>
                </main>
                


            </div>
    )
}

export default Home;