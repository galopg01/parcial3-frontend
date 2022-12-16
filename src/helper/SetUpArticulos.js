import { Global } from './Global';
const baseUrl = Global.baseUrl;

export const setUpArticulos = (setArticulos) => {

    console.log(baseUrl)

    fetch(`${baseUrl}articulos`)
        .then(resp => resp.json())
        .then(data => {
            setArticulos(data);
        }
        )
}
