import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { NavigationBar } from '../components/nav_bar/NavigationBar';
import { PEFElement } from '../components/label/PEFElement';
import './Label.css';
import composants from '../data/Composants';
import pef from '../data/pef';


export const Label = () => {

    const [queryParameters] = useSearchParams()

    const id = queryParameters.get("id")
    const strId = String(id);

    let content = (<p>Id not found</p>);

    if (id != null) {
        if (composants.hasOwnProperty(strId)) {
            const name = composants[strId].nom;
            let pefDict = composants[strId].PEF;
            let pefIDArray = Object.keys(pefDict);

            
            content = (
                <div>
                    <p>Id: {id}</p>
                    <h1>{name}</h1>
                
               {pefIDArray.map((id) => {
                    return (
                        <div>
                            <PEFElement 
                                id={id} 
                                nom={pef[id].nom} 
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