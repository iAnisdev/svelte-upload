import axios from "axios";

export default () => {
    return axios.create({
        headers: {
            'Authorization': `Client-ID e390116846eef75`
        },
        baseURL:'https://api.imgur.com/3'
    })
}