import axios from "axios";

const KEY = "AIzaSyDGIeqvobCGx5wRA3Trlhek1SGqMRsqCO8";


export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        type: "video",
        maxResults: 5,
        key: KEY
    }
});