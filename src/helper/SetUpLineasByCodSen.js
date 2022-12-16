import { Global } from './Global';
const baseUrl = Global.baseUrl;

export const setUpLineasByCodSen = (cod, sen, setLineas) => {

    fetch(`${baseUrl}lineas/find/`+cod+`/`+sen)
        .then(resp => resp.json())
        .then(data => {
            setLineas(data);
        }
        )
}
