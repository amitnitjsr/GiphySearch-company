import React from 'react';

class NoGifs extends React.Component {
    render() {
        return (
            <li className='no-gifs'>
                <h3>Sorry, no GIFs match your search.</h3>
            </li>
        );
    }
}

export default NoGifs;