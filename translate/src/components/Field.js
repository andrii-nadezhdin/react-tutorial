import React from 'react';
import LangugageContext from '../Contexts/LangugageContext';

class Field extends React.Component {
    static contextType = LangugageContext;

    render() {
        const text = this.context === 'EN' ? 'Name' : 'Ima';
        return (
            <div>
                <label>{text}</label>
                <input />
            </div>
        );
    }
}

export default Field;