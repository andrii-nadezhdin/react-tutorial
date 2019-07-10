import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
import useLocation from './useLocation';

const App = () => {
        const {errorMessage, latitude} = useLocation();
        if (errorMessage && !latitude)
            return <div>Error: {errorMessage}</div>;
        
        if (!errorMessage && latitude)
            return <SeasonDisplay lat={latitude} />;

        return <Spinner message="Please accept location request"/>;
}

ReactDOM.render(<App />, document.querySelector('#root'));