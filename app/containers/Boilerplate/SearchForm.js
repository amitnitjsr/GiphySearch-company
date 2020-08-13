import React from 'react';

class SearchForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchText: ''
        }
    }

    onSearchChange(e) {
        this.setState({ searchText: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onSearch(this.state.searchText);
        e.currentTarget.reset();
    }

    render() {
        return (
            <form className="search-form" onSubmit={this.handleSubmit.bind(this)} >
                <label className="is-hidden" htmlFor="search">Search</label>
                <input type="search"
                    onChange={this.onSearchChange.bind(this)}
                    ref="query"
                    name="search"
                    value={this.state.searchText}
                    placeholder="Search..." />
                <button type="submit" id="submit" className="search-button" >
                    <i className="fa fa-search"></i>
                </button>
            </form>
        );
    }
}

export default SearchForm;