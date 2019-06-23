import React from 'react';
import loader from './loader.gif';

const Spinner = () => (
    <div className='loader'>
        <img src={loader}></img>
    </div>
);

export default Spinner;