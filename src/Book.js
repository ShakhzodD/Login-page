import React from 'react';

const Book = (props) => {
    return (props.name ? (
        <div>
           <h1>{props.name}</h1> 
           <p>{props.extra}</p>
           <p>{props.text}</p>
        </div>
    ) : <h1>Malumotlar yuklanmadi</h1>
    );
};

export default Book;