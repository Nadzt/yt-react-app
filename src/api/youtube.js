import axios from "axios"

const KEY = "AIzaSyCzJQrI5oLClmyKmrAa6-2-l-ec0AePaYs"

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        type: "video",
        maxResults: 5,
        key: KEY
    }
})