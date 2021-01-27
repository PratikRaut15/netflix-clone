import React, { useState,useEffect } from 'react'
import axios from './axios'
import requests from './Requests'
import './Banner.css'

function Banner() {
    function truncate(str,n){
        return str?.length > n ? str.substr(0,n-1) + "..." : str;
    }
    const [movie,setMovie] = useState([]);
    useEffect(() =>{
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1 )]);
           
        }
        fetchData();
    },[]);
    let a = ["1", "1", "2", "3", "3", "1","100","110","110"];
    // let unique = a.filter((item,i,ar) => {
    //     //return ar.indexOf(item) === i;
    //     //return ar[i] === true;
    // }) ;

    let unique = a.filter((item,i,ar) => {
        
        //console.log("keys",ar[i]);x`
       // console.log("item",item);
        return ar.indexOf(item) === i;
    }) ;

     console.log("unique",unique);
    return (
        <>
            <header className="banner"  
            style={{
                backgroundSize : "cover",
                backgroundImage : `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundPosition : "center center",
            }}
            >
            <div className="banner_contents"> 
                <h1 className="banner_title">{movie?.title || movie?.name || movie?.original_name}</h1>
            
                <div>
                    <button className="banner_buttons">Play</button>
                    <button className="banner_buttons">My List</button>
                </div>
                <h1 className="banner_description">{truncate(movie?.overview,100)}</h1>
            </div>
            <div className="banner_fadeBottom"></div>
            </header>
        </>
    )
}

export default Banner
