import React, { useEffect, useState } from 'react';

const Clock = () => {

    const data = {
        fecha: new Date(),
        edad: 0,
        nombre: 'Martín',
        apellidos: 'San José'
     };

    const [dat, setDat] = useState(data);
    
    useEffect(() => {
       const timerID = setInterval(() =>{
        tick();
       }, 1000);

       return () => {
        clearInterval(timerID);
       };
    }, []);

    const tick = () => {
        setDat((prevState) => {
            const edad = prevState.edad + 1;

            return {
                ...prevState,
                fecha: new Date(),
                edad
            }
        });
    }
    
    return (
        <div>
            <h2>Hora Actual: { dat.fecha.toLocaleDateString() }</h2>
            <h3> {dat.nombre} {dat.apellidos}</h3>
            <h1>{dat.edad}</h1>
        </div>
    );



}

export default Clock;
