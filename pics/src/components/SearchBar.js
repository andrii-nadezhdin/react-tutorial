import React from 'react';

class SearchBar extends React.Component {
    state = {
        term: ''
    };

    onSubmit = (event) => {
        event.preventDefault();
        this.props.onFormSubmit(this.state.term);

    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input
                            type="text"
                            value={this.state.value}
                            onChange={e => this.setState({term: e.target.value})}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;