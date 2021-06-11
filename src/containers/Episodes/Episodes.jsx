
import React from "react";
import "./Episodes.css";
import axios from 'axios';

class Episodes extends React.Component {

    constructor (props) {
		super(props);

        //Estado del componente (this.state)

        this.state = {
            episodes : []
        }
    }

    //Distintos estados del ciclo del componente
    componentDidMount(){
        //Esta funcion corresponde a cuando el componente se ha montado

        this.traeEpisodios();
    }

    componentDidUpdate(){
        //Esta funcion corresponde a cada vez que el estado del componente cambie 
        //y este por lo tanto se actualiza.
    }
    
    async traeEpisodios(){

        try{

            let res = await axios.get('https://rickandmortyapi.com/api/episode');

            this.setState({episodes : res.data.results});

        }catch (err){
            console.log(err);
        }

    }

    render(){

        if(this.state.episodes[0]?.id){
            return(
                <div>
                {this.state.episodes.map((episodio,index) => (
                    <div key={index}>{episodio.name}{episodio.air_date}</div>
                ))}
                </div>
            )
        }else{
            return(
                <div>CARGANDO LOS EPISODIOS</div>
            )
        }

        
    }

}

export default Episodes;