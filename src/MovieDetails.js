import React , { useState, useEffect }from 'react'
import { useParams } from 'react-router';
import './App.css';
import firebase from "./firebase";



export default function MovieDetails() {
    const { name } = useParams();


    const [movie, setMovie] = useState([]);
    const [loading, setLoading] = useState(false);

    const ref = firebase.firestore().collection("movie");
   
    function getMovie() {
        setLoading(true);
        ref.where("name", "==",name).onSnapshot((querySnapshot) =>{
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
    
  <div>
    
    <div  className='content-body'>
        {movie.map((movie) =>(
    
    <div className='content'>
         <div className='content2'>
         </div>
      <div className='blocks2'> 
           {/* < img src={movie.img}  /> */} <iframe width='100%' height='auto'  sandbox = "allow-forms  allow-same-origin   allow-scripts  allowFullScreen"  src={movie.link} allowtransparency allow="autoplay" scrolling="no" frameborder="0" allowFullScreen></iframe> 
         
          
           </div>   

           <div className='content2'><p>   <h1>{movie.name}</h1> </p>{movie.about}</div>
                    
        
           <div > < img className="img-details" src={movie.img}  /> </div>
           </div>
        ))}
</div>
       

    </div>

    )
}
