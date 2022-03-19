import React from 'react';

const CarCard = ({ car: { ID, Year, Make, Model, Type } }) => {
    return (
        <div className="car" key={ID}>

            <div>
                <p>{Year}</p>
            </div>

            <div>
                <span>{Make}</span>
                <h3>{Model}</h3>
                <p>{Type}</p>
            </div>

        </div>
    );
}

export default CarCard;
