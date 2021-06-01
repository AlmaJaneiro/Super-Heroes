import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router'
import { getHeroesById } from '../../selectors/getHeroById';

export const HeroeScreen = ({history}) => {
    const {heroeId} = useParams();
    const hero = useMemo(() => getHeroesById(heroeId), [heroeId])
    
    if( !hero){
        return <Redirect to="/" />
    }
    const HandleReturn = ()=>{
        if(history.length <=2){
            history.push('/');
        }
        else{
            history.goBack();
        }
    }
    const {superhero, publisher, alter_ego, first_appearance, characters} = hero;
    return (
        <div className="row mt-5">
            <div className="col-4">
                <img className="img-thumbnail animate__animated animate__fadeInLeft" src={`../../../assets/heroes/${heroeId}.jpg`} alt={ `${superhero}` } />
            </div>
            <div className="col-8">
                <h3>{superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Publisher: </b> {publisher} </li>
                    <li className="list-group-item"><b>Alter Ego: </b> {alter_ego} </li>
                    <li className="list-group-item"><b>Primera Aparición: </b> {first_appearance} </li> 
                </ul>
                <h5 className="mt-3 mb-3">Personajes: </h5>
                <p>{characters}</p>
                <button onClick={ HandleReturn } className="btn btn-danger">Return to home</button>
            </div>
        </div>
    )
}
