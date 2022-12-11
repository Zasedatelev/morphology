// @flow 
import * as React from 'react';
import { Link } from 'react-router-dom';

function Navbar () {
    return (
        <div>
            <button className='logout_bar'>
                Выход
                <Link to='/logout'></Link>
            </button>
        </div>
    );
};


export default Navbar;