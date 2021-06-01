import React, { useMemo } from 'react';
import { useLocation } from 'react-router';
import { useForm } from '../../hooks/useForm';
import { getHeroesByName } from '../../selectors/getHeroesByName';
import { HeroCard } from '../heroes/HeroCard';
const queryString = require('query-string');

export const SearchScreen = ({ history}) => {
    const location = useLocation();
    const { q = '' } = queryString.parse(location.search);
    
    const [ valores, handleInputChange ] = useForm({searchText : q });

    const handleSearch = (e) => {
        e.preventDefault() 
        history.push(`?q=${ searchText}`) 
    }

    const { searchText} = valores;

    const heroesFiltered =  useMemo(() => getHeroesByName(searchText), [q]);

   
    return (
        <div>
            <h1>Search Screen</h1>
            <hr />
            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <hr />
                    <form onSubmit={ handleSearch  } > 
                        <input 
                            type="text" 
                            placeholder="Find Your Hero" 
                            className="form-control mt-2 mb-2"
                            name="searchText"
                            autoComplete="off"
                            value={searchText}
                            onChange={handleInputChange}
                        /> 
                        <button type="submit" className="btn btn-outline-primary btn-block mt-1  ">Search</button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Results</h4>
                    <hr />
                    {
                        (q ==='') && 
                        <div className="alert alert-info">
                            Search a hero
                        </div>
                    }
                    {
                        (q !=='' && heroesFiltered.length === 0) && 
                        <div className="alert alert-danger">
                            No data were found { searchText }
                        </div>
                    }
                    {
                        heroesFiltered.map( hero => {
                            return(

                                <HeroCard
                                    key={hero.id}
                                    {...hero}
                                />
                            )
                        })
                    }
                </div>

            </div>
        </div>
    )
}
