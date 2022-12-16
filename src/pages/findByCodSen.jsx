import React, {useState, useEffect} from 'react';

const filtroCodSen = () => {


    return (
        <div>
            <Container>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Código de linea</Form.Label>
                        <Form.Control type="integer"
                            value={precioSalida}
                            onChange={(e)=> setPrecioSalida(e.target.value)}/>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Sentido</Form.Label>
                        <Form.Control type="integer"
                            value={sentido}
                            onChange={(e)=> setVendedor(e.target.value)}/>
                    </Form.Group>                    

                    <Button variant="primary" onClick={editarArticulo}>Filtrar por código y sentido</Button>
                </Form>
            </Container>
        </div>
    )
}