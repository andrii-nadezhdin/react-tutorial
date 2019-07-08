import React from 'react';
import LangugageContext from '../Contexts/LangugageContext';

class LanguageSelector extends React.Component {
    static contextType = LangugageContext;

    render() {
        return (
            <div>
                <div>Select language:</div>
                <button onClick={() => this.context.onLanguageChange('EN')}>EN</button>
                <button onClick={() => this.context.onLanguageChange('RU')}>RU</button>
            </div>
        );
    }
}

export default LanguageSelector;