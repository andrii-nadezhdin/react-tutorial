import React from 'react';

const seasonConfig = {
    summer: {
        text: 'Let\' hit the beach!',
        iconName: 'sun'
    },
    winter: {
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
    const {text, iconName} = getSeason(props.lat, new Date().getMonth());
    return (
        <div>
            <i className={`${iconName} icon`} />
            <h1>{text}</h1>
            <i className={`${iconName} icon`} />
        </div>
    );
}

export default SeasonDisplay;