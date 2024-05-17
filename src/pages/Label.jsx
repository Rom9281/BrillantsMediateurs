import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { NavigationBar } from '../components/nav_bar/NavigationBar';
import { PEFElement } from '../components/label/PEFElement';
import {SearchBar} from '../components/label/SearchBar';
import './Label.css';
import composants from '../data/Composants';
import pef from '../data/PEF';


export const Label = () => {

    const [queryParameters] = useSearchParams()

    const id = queryParameters.get("id")
    const strId = String(id);

    let content = (<p>Aucun produit trouvé correspondant à l'ID</p>);

    if (id != null) {
        if (composants.hasOwnProperty(strId)) {
            const name = composants[strId].nom;
            let pefDict = composants[strId].PEF;
            let pefIDArray = Object.keys(pefDict);

            
            content = (
                <div>
                    
                    <h1 className='composite-title'>{name}</h1>
                    <p className='composite-id'>Id: {id}</p>
                
               {pefIDArray.map((id) => {
                    return (
                        <div>
                            <PEFElement 
                                id={id} 
                                nom={pef[id].nom} 
                                image={pef[id].image}
                                note={pefDict[id]} 
                            />
                        </div>
                    );
                })}
                </div>
            );
            
        }
    }

    return (
        <>
            <NavigationBar />
            <div className='search-bar-container'>
                <SearchBar />
            </div>
            <div className='identification-label'>
                
                {content}
                
            </div>

            <div className="div-download-app">
                <button className="btn-download-app">Download Our App</button>
            </div>

        </>
    );
}

export default Label;