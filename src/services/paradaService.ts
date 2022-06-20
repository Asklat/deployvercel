import axios from "axios";
class LoadParada {
    async LoadDataSimple(id:any) {
        let data:any
        try {
            let res = await axios.get(`http://127.0.0.1:3000/api/paradasimple?id=${id}`);
            data = res.data
        } catch (error) {
            data = error
        }
        return data
    }
    async LoadData(id:any) {
        let data:any
        try {
            let res = await axios.get(`http://127.0.0.1:3000/api/parada?id=${id}`);
            data = res.data
        } catch (error) {
            data = error
        }
        return data
    }
}

export const loadParada = new LoadParada();