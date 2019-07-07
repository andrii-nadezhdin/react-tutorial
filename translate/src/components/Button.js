import React from 'react';
import LanguageContext from '../Contexts/LangugageContext';

class Button extends React.Component {
    static contextType = LanguageContext;

    renderSubmit = value => value === 'EN' ?'Submit' : 'Gotovo';

    render() {
        return (
            <div>
                <button>
                <LanguageContext.Consumer>
                    {this.renderSubmit}
                </LanguageContext.Consumer>
                </button>
            </div>
        );
    }
}

export default Button;