import React from 'react';
import Form from 'react-jsonschema-form';
import { Header } from '../components/header';
import { Global } from '../helper/Global';
 
const baseUrl = Global.baseUrl;
//const URIArticulos = `${baseUrl}articulos`;

document.title="Nuevo Artículo";

function crearArticulo({formData}) {
    const Articulo = {
        vendedor: 'yo',
        descripcion: formData['Descripción'],
        imagenes: [],
        precioSalida: formData['Precio de salida'],
        comprador: null
    };

    /* fetch(URIArticulos, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(Articulo)})
        .then(res => res.json())
        .then(data => {
          console.log(data);
        }).catch(err => console.log(err)); */
}


const schema = `{
  "title": "Nuevo Artículo",
  "type": "object",
  "properties": {
    "Descripción": {
      "type": "string"
    },
    "Precio de salida": {
      "type": "number"
    }
  },
  "required": [
    "Descripción",
    "Precio de salida"
  ]
}`;
 
const schemaAsObject = JSON.parse(schema);
 
export const CreateArticulo = () => {
    return (
        <div>
            <Header/>
            <div className='row justify-content-center pt-4'>
               <Form className="col-md-offset-3 col-md-6"
                schema={schemaAsObject} 
                onSubmit={crearArticulo}
                onChange={console.log("Changed")}
            /> 
            </div>
            
        </div>
    )
}
