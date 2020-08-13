import React from 'react';
import SearchForm from './SearchForm';
import GifList from './GifList';
// import './index.css';

class Boilerplate extends React.Component {
    state = {
        gifs: []
    }

    componentDidMount() {
        this.getTrend();
    }

    getTrend = () => {
        fetch('https://api.giphy.com/v1/gifs/trending?api_key=8516ae5930e2408f8dd8849ccb63835d')
            .then(response => response.json())
            .then(responseData => {
                this.setState({ gifs: responseData.data });
            })
            .catch(error => {
                console.log(error);
            });
    }

    performSearch(query) {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&limit=24&api_key=8516ae5930e2408f8dd8849ccb63835d`)
            .then(response => response.json())
            .then(responseData => {
                this.setState({ gifs: responseData.data });
            })
            .catch(error => {
                console.log(error);
            });
    }


    render() {
        return (
            <div >
                <div className="main-header">
                    <div className="inner">
                        <h1 className="main-title">GiphySearch</h1>
                        <SearchForm onSearch={this.performSearch.bind(this)} />
                    </div>
                </div>
                <div className="main-content">
                    <GifList data={this.state.gifs} />
                </div>
            </div>
        );
    }
}

export default Boilerplate;











