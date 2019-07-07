import React from 'react';
import UserCreate from './UserCreate';
import LangugageContext from '../Contexts/LangugageContext';

class App extends React.Component {
    state = {
        language: 'EN'
    };

    render() {
        return (
            <div>
                <div>Select language ({this.state.language}):</div>
                <button onClick={() => this.onLanguageChange('EN')}>EN</button>
                <button onClick={() => this.onLanguageChange('RU')}>RU</button>
                <LangugageContext.Provider value={this.state.language}>
                    <UserCreate/>
                </LangugageContext.Provider>
            </div>
        );
    }

    onLanguageChange(language) {
        this.setState({language});
    }
}

export default App;
