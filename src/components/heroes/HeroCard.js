import React from 'react'
import { Link } from 'react-router-dom'

export const HeroCard = ({ id, superhero, publisher, alter_ego, first_appearance, characters }) => {
    return (
        <div className="col-sm-6" style={{ marginTop:"10px", marginBottom:"10px"}}>
            <div className="card mb-12" style={{}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img className="card-img" src={`../../../assets/heroes/${id}.jpg`} alt={ `${superhero}` } />
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{superhero}</h5>
                        <p className="card-text text-left">
                            <b>{alter_ego}</b>
                            {
                                (alter_ego !== characters) &&  <span className="card-text">{characters}</span> 
                            }    
                        </p>
                        <p className="card-text">
                            <small className="text-muted">{first_appearance}</small>
                        </p>
                        <Link className="btn btn-success" to={`./hero/${id}`}>Leer más</Link>
                    </div>
                    </div>
                </div>
            </div> 
        </div>
    )
}
