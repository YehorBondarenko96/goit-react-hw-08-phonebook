import axios from "axios";

// const idImg = 3643027;

export const searchForBackground = async() =>{
    const idImg = Math.floor(Math.random() * 10000000) + 1;
    try{
        const messyResult = await axios.get(`https://pixabay.com/api/?q=spaсe&page=1&key=40289268-709deefe1360f0520e7e421a0&id=${idImg}&image_type=photo&orientation=horizontal&per_page=12`);
        return messyResult.data.hits
    } catch (e){
        return console.error(e);
    }
};