import React, { useState, useEffect } from 'react';
import './App.css';
import firebase from "./firebase";
import { Link } from 'react-router-dom';
function Content() {
    const [movie, setMovie] = useState([]);
    const [loading, setLoading] = useState(false);

    const ref = firebase.firestore().collection("movie");
   
    function getMovie() {
        setLoading(true);
        ref.onSnapshot((querySnapshot) =>{
            const items =[];
            querySnapshot.forEach((doc) => {
                items.push(doc.data());
            });
            setMovie(items);
            setLoading(false);
        });
    }
  

    useEffect(() => {
    getMovie();
    
    }, []);

    if (loading) {
        return  <h1 color='red'>LOADING........ </h1>
    }

    return (
        
        <div  className='content-body'>
        {movie.map((movie) =>(
      
     <div className='content'>
      <div className='blocks'> <Link to={`/mov/${movie.name}`}>
           < img className='img-cont' src={movie.img} alt={movie.name} />
          
           <span className='img-txt'>                                                                                   

              {movie.name}
               </span></Link>
           </div>
                        </div>
        
  
        
        ))}
</div>
       
    );
}

export default Content
