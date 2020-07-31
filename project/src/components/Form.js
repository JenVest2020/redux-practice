import React, { useState } from 'react';
import { connect } from 'react-redux';
import { postPlayers } from '../actions/actionsIndex';

const PlayersForm = (props) => {
    const [player, setPlayer] = useState({
        name: '',
        age: '',
        height: ''
    })
    const inputHandler = e => {
        setPlayer({
            ...player, [e.target.name]: e.target.value
        })
    }

    const submitHandler = e => {
        e.preventDefault();
        props.postPlayers(player)
    }

    return (
        <form id='playerForm' className='form'>
            <label htmlFor='name'>Name</label>
            <input
                type='text'
                name='name'
                label='name'
                placeholder='Enter name'
                value={props.name}
                onChange={inputHandler}
                className='input' />

            <label htmlFor='age'>Age</label>
            <input
                style={{ border: '5px ridge yellow' }}
                type='text'
                name='age'
                label='age'
                placeholder='Enter age'
                value={props.age}
                onChange={inputHandler}
                className='input' />

            <label htmlFor='height'>Height</label>
            <input
                type='text'
                name='height'
                label='height'
                placeholder='Enter height'
                value={props.height}
                onChange={inputHandler}
                className='input' />

            <button className='btn' onClick={submitHandler}>Submit your player</button>
        </form>
    )
};

const mapStateToProps = state => {
    return {
        players: state.players,
        isPosting: state.isPosting,
        error: state.error
    }
}

export default connect(
    mapStateToProps,
    {
        postPlayers
    }
)(PlayersForm);