import React, {useState, useEffect} from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { Header } from '../components/header';
//import { setUpArticulos } from '../helper/SetUpArticulos';
import { setUpLineasByCodSen } from '../helper/SetUpLineasByCodSen';
import '../styles/main.css';
import "leaflet/dist/leaflet.css";


const Home = () => {

    document.title = "Inicio";

    const [lineas, setLineas] = useState([]);
    const [codLinea, setCodLinea] = useState('');
    const [sentido, setSentido] = useState('');
    let lineasMarkers = undefined;
   
    /* useEffect(() => {
        
        if (codLinea !== '' && sentido !== '') {
            setUpLineasByCodSen(codLinea, sentido, setLineas);
        }
    
    }, [codLinea, sentido]); */


    const iconMarker = L.icon({
        iconUrl: require('../static/marker.png'),
        iconSize: [48,48],
        iconAnchor: [32, 64],
    });

    

    function handleFiltroCodSen() {
        if (codLinea !== '' && sentido !== '') {
            setUpLineasByCodSen(codLinea, sentido, setLineas);
            lineasMarkers = lineas.map((linea) => (
                <Marker position={[linea.lat, linea.lon]} key={linea._id} icon={iconMarker}>
                    <Popup>
                        <div className="card-body py-0">
                            <p className="card-text my-0 fw-bold fs-6">{linea.titulo}</p>
                            <p className="card-text my-1 fw-bold">{linea.sentido}</p>
                        </div>
                    </Popup>
                </Marker>
            ));
        }

    } 
   
    
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
            <div>
                <Header />
                <main className="row justify-content-center" >
                    <h1 className="col-sm-6" >Home</h1>
                    <div className="row col-sm-8">
                        <h3>Filtrar por código y sentido</h3>       
                        <Container>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label>Código de linea</Form.Label>
                                    <Form.Control type="integer"
                                        value={codLinea}
                                        onChange={(e)=> setCodLinea(e.target.value)}/>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Sentido</Form.Label>
                                    <Form.Control type="integer"
                                        value={sentido}
                                        onChange={(e)=> setSentido(e.target.value)}/>
                                </Form.Group>

                                <Button variant="primary" onClick={ handleFiltroCodSen()}>Filtrar por código y sentido</Button>
                            </Form>
                        </Container>  
                    </div>
                    <div className='col-sm-8'>
                        <MapContainer center={[36.71991187675718, -4.427040808953345]} zoom={13} >
                            <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            {lineasMarkers === undefined ? null : lineasMarkers } 
                        </MapContainer>
                    </div>
                </main>
                


            </div>
    )
}

export default Home;