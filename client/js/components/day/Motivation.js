import React from 'react';

const Motivation = props => {
    return (
        <div className='motivation'>
            <div className="card shadow-sm text-center text-white" style={{ height: '25rem', backgroundColor: 'black' }}>
                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                    <p className="card-text">"Accountability is the breakfast of champions."</p>
                    <p className="card-text" style={{ color: '#b40101' }}>- Gary Keller</p>
                </div>
            </div>
        </div>
    )
}

export default Motivation;
