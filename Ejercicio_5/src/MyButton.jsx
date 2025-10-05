import React from 'react';

function MyButton({ count, onClick }) {
    return (
        <button onClick={onClick}>
            Soy un botón custom y mi cuenta es: {count}
        </button>
    );
}

export default MyButton;