import axios from "axios";
class LoadParadas {
    async LoadData() {
        let data:any
        try {
            let res = await axios.get(`http://127.0.0.1:3000/api/paradas`);
            data = res.data
        } catch (error) {
            data = error
        }
        return data
    }
}

export const loadParadas = new LoadParadas();