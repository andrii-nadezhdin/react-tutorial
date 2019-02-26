import React from 'react';
import './SeasonDisplay.css';

const seasonConfig = {
    summer: {
        name: 'summer',
        text: 'Let\' hit the beach!',
        iconName: 'sun'
    },
    winter: {
        name: 'winter',
        text: 'Bur it is cold!',
        iconName: 'snowflake'
    }
};

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? seasonConfig.summer : seasonConfig.winter;
    } else {
        return lat > 0 ? seasonConfig.winter : seasonConfig.summer;
    }
};

const SeasonDisplay = (props) => {
    const {name, text, iconName} = getSeason(props.lat, new Date().getMonth());
    return (
        <div className={`season-display ${name}`}>
            <i className={`icon-left massive ${iconName} icon`} />
            <h1>{text}</h1>
            <i className={`icon-right massive ${iconName} icon`} />
        </div>
    );
}

export default SeasonDisplay;