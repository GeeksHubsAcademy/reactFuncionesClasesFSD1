
import React, {useState, useEffect} from 'react';
import "./Characters.css";
import axios from 'axios';

const Characters = () => {

    //Estado del componente (hooks)
    const [characters,setCharacters] = useState([]);

    //Distintos estados del ciclo del componente

    useEffect(()=>{
        //Este useEffect corresponde a una vez 
        //el componente se HA montado. Sólo se ejecuta una vez.

        traePersonajes();
    },[]);


    useEffect(()=>{
        //Este useEffect sin el array vacio como segundo argumento,
        //corresponde al estado de cada actualización del componente. Se ejecutará
        //tantas veces como se cambie el estado del componente
        
    });

    const traePersonajes = async () => {

        try{

            let res = await axios.get('https://rickandmortyapi.com/api/character');
            
            setCharacters(res.data.results);
            
        }catch (err){
            console.log(err);
        }
    }
    
    if(characters[0]?.id){

        //En caso de si existir los datos, mapeamos los resultados
        return (
            <div>
                {characters.map((personaje,index) => (
                    <div key={index}>{personaje.name}<img src={personaje.image} alt="muñeco"/></div>
                ))}
            </div>
        )

    }else{
        return (
            <div>CARGANDO LOS PERSONAJES</div>
        )
    }
    
}

export default Characters;