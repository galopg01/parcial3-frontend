import React, {useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Header } from '../components/header';
import { Global } from '../helper/Global';
import { setUpArticulo } from '../helper/setUpArticulo';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';


const baseUrl = Global.baseUrl;

export const EditArticulo = () => {

    const { id } = useParams();
    const [articulo, setArticulo] = useState();

    const [descripcion, setDescripcion] = useState('');
    const [precioSalida, setPrecioSalida] = useState('');
    const [vendedor, setVendedor] = useState('');
    const [fecha, setFecha] = useState('');

    useEffect(() => {
        setUpArticulo(id, setArticulo);
    }, [id]);


    useEffect(() => {
        if (articulo !== undefined) {
            setDescripcion(articulo.descripcion);
            setPrecioSalida(articulo.precioSalida);
            setVendedor(articulo.vendedor);

        }
    }, [articulo]);

    function editarArticulo() {
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                descripcion: descripcion,
                vendedor: vendedor,
                precioSalida: precioSalida,
            })
        };
        fetch(baseUrl + 'articulos/' + id, requestOptions)
            .then(response => response.json())
            .then(data => console.log(data));

        window.location.reload();

    }

    return (
        articulo === undefined ? <div> No se ha encontrado</div>
        : 
        <div>
            <Header />
            <Container>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Descripción</Form.Label>
                        <Form.Control type="text" required 
                            value={descripcion}
                            onChange={(e)=> setDescripcion(e.target.value)}/>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>PrecioSalida</Form.Label>
                        <Form.Control type="number"
                            value={precioSalida}
                            onChange={(e)=> setPrecioSalida(e.target.value)}/>
                    </Form.Group>

                   {/*  <Form.Group className="mb-3">
                        <Form.Label>Foto</Form.Label>
                        <Form.Control type="file" 
                            onChange={(event) => {handleUpload(event.target.files[0])}}/>
                    </Form.Group> */}

                    <Form.Group className="mb-3">
                        <Form.Label>Vendedor</Form.Label>
                        <Form.Control type="email"
                            value={vendedor}
                            onChange={(e)=> setVendedor(e.target.value)}/>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Fecha de nacimiento</Form.Label>
                        <Form.Control type="date"
                            value={fecha}
                            onChange={(e)=> setFecha(e.target.value)}/>
                    </Form.Group>

                    {/* <Form.Group className="mb-3">
                        <Form.Label>Calle</Form.Label>
                        <Form.Control type="text"
                            value={calle}
                            onChange={(e)=> setCalle(e.target.value)}/>
                    </Form.Group> */}

                    {/* <Form.Group className="mb-3">
                        <Form.Label>Número</Form.Label>
                        <Form.Control type="number"
                            value={numero}
                            onChange={(e)=> setNumero(e.target.value)}/>
                    </Form.Group> */}

                    <Button variant="primary" onClick={editarArticulo}>Editar</Button>
                </Form>
            </Container>
        </div>
    )

}

