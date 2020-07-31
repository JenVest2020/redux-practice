import React, { useEffect } from 'react';
import PlayersCard from './PlayersCard';

import { connect } from 'react-redux';

import { fetchPlayers } from '../actions/actionsIndex';


const PlayersList = (props) => {
    console.log('from PlayersList', props);
    useEffect(() => {
        props.fetchPlayers()
    }, []);

    return (
        <div>
            {props.players.map(player => {
                return <PlayersCard key={player.name} player={player} />
            })}
        </div>
    )
};

const mapStateToProps = state => {
    return {
        players: state.players,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(
    mapStateToProps,
    {
        fetchPlayers
    }
)(PlayersList);