import axios from "axios";
export function ArticleRequest(config) {
    const articlerequest = axios.create({
        baseURL: "https://api.apiopen.top",
        timeout: 10000
    });
    articlerequest.interceptors.response.use(config => {
        return config.data.result;
    },err => {
        console.log(err);
    })
    return articlerequest(config)
} 