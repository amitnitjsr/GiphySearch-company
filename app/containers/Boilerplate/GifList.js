import NoGifs from './NoGifs';
import React from 'react';
// import './index.css';

class GifList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        const results = this.props.data;
        let gifs;
        if (results.length > 0) {
            gifs = results.map(function (gif, i) {
                return <li key={gif.id} className="gif-wrap">
                    <img alt="" src={gif.images.fixed_height.url} />
                </li>
            }, this);
        } else {
            gifs = <NoGifs />;
        }
        return (
            <ul className="gif-list">
                {gifs}
            </ul>
        );
    }
}

export default GifList;