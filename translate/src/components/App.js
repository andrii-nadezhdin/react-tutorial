import React from 'react';
import UserCreate from './UserCreate';
import { LanguageStore } from '../Contexts/LangugageContext';
import LanguageSelector from './LanguageSelector';

class App extends React.Component {
    render() {
        return (
            <div>
                <LanguageStore>
                    <LanguageSelector/>
                    <UserCreate/>
                </LanguageStore>
            </div>
        );
    }
}

export default App;
