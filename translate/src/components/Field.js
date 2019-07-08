import React from 'react';
import LangugageContext from '../Contexts/LangugageContext';

class Field extends React.Component {
    static contextType = LangugageContext;

    render() {
        return (
            <div>
                <label>{this.context.language === 'EN' ? 'Name' : 'Ima'}</label>
                <input />
            </div>
        );
    }
}

export default Field;