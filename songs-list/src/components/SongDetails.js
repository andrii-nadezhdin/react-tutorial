import React from 'react';
import { connect } from 'react-redux';

const SongDetails = (props) => {
    return (
        props.song &&
        <div>
            <div>{props.song.title}</div>
            <div>{props.song.duration}</div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return { song: state.selectedSong }
}

export default connect(mapStateToProps)(SongDetails);
