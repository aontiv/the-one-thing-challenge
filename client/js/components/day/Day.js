import React from 'react';
import PropTypes from 'prop-types';
import { updateSelected, updateComplete, updateMarked, updateNote, updateNoteSubmitted } from '../../actions/day/actions';

const Day = props => {
    const handleClickLeft = id => {
        if (props.day.day > 1) {
            updateSelected({ id: props.days[(props.day.day - 1) - 1].id });
        } else {
            updateSelected({ id: props.days[65].id });
        }
    }

    const handleClickRight = () => {
        if (props.day.day < 66) {
            updateSelected({ id: props.days[props.day.day].id });
        } else {
            updateSelected({ id: props.days[0].id });
        }
    }

    const handleClickSubmit = id => {
        if (props.day.note) {
            return updateNoteSubmitted({ id, value: true });
        }
    }

    const handleClickEdit = id => {
        return updateNoteSubmitted({ id, value: false });
    }

    const handleClickChoice = (id, type) => {
        const value = type === 'complete' ? true : false;

        updateMarked({ id, value: true });
        updateComplete({ id, value });
    }

    const handleChange = (event, id) => {
        return updateNote({ id , note: event.target.value });
    }

    const isComplete = props.day.marked && props.day.completed ? true : false;
    const isIncomplete = props.day.marked && !props.day.completed ? true : false;
    
    return (
        <div className="day position-relative">
            <i className="material-icons position-absolute left-arrow" onClick={handleClickLeft}>keyboard_arrow_left</i>
            <i className="material-icons position-absolute right-arrow" onClick={handleClickRight}>keyboard_arrow_right</i>

            <div className="card shadow position-relative mb-5" style={{ height: '24.588rem', width: '100%' }}>
                <svg className="position-absolute rounded-top" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 30">
                    <polygon stroke="black" points="0,0 100,0 0,29" />
                </svg>
                <div className="day-num">
                    <h1 className="text-white position-relative pl-3 pt-2" style={{ letterSpacing: '0.05rem' }}>{props.day.day}</h1>
                </div>
                <div className="card-body d-flex flex-column justify-content-center align-items-center pb-0">
                    {
                        props.day.noteSubmitted
                            ? (
                                <div className="note d-flex flex-column align-items-center w-100">
                                    <p className="w-100 border-0 text-center p-1 mb-1 text-dark" style={{ fontSize: '1.25rem' }}>{props.day.note}</p>
                                    <span className="note-action" style={{ color: 'blue', fontSize: '1rem', letterSpacing: '0.05rem' }} onClick={_ => handleClickEdit(props.day.id)}>edit</span>
                                </div>
                            )
                            : (
                                <div className="note d-flex flex-column align-items-center w-100">
                                    <input className="w-100 border-0 text-center p-1 mb-1 text-dark" type="text" placeholder="- add a note -" style={{ fontSize: '1.25rem' }} value={props.day.note} onChange={event => handleChange(event, props.day.id)} />
                                    <span className="note-action" style={{ color: 'blue', fontSize: '1rem', letterSpacing: '0.05rem' }} onClick={_ => handleClickSubmit(props.day.id)}>submit</span>
                                </div>
                            )
                    }
                </div>
                <div className="buttons d-flex flex-column w-100 p-3">
                    <button className={"button-complete btn btn-block btn-outline-dark" + (isComplete ? ' complete-selected' : '')} type="button" style={{ fontSize: '1.25rem' }} onClick={_ => handleClickChoice(props.day.id, 'complete')}>Complete</button>
                    <button className={"button-incomplete btn btn-block btn-outline-dark" + (isIncomplete ? ' incomplete-selected' : '')} type="button" style={{ fontSize: '1.25rem' }} onClick={_ => handleClickChoice(props.day.id, 'incomplete')}>Incomplete</button>
                </div>
            </div>
        </div>
    )
}

export default Day;

Day.propTypes = {

}
