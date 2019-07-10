import { useState, useEffect } from 'react';

export default () => {
    const [latitude, setLatitude] = useState(0);
    const [errorMessage, setMessage] = useState('');

    useEffect(() => {
        window.navigator.geolocation.getCurrentPosition(
            (position) => setLatitude(position.coords.latitude),
            (err) => setMessage(err.message)
        );            
    }, []);
    return {latitude, errorMessage};
}