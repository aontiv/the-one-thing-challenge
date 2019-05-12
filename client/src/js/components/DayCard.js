import React from 'react';
import classNames from 'classnames';

import InputSwitcher from './InputSwitcher';

const btnCompleteStyles = complete => classNames(
    [ 'btn', 'btn-block', 'mb-1' ],
    {
        'btn-outline-success': !complete ? true : false,
        'btn-success': complete ? true : false
    }
);

const btnIncompleteStyles = incomplete => classNames(
    [ 'btn', 'btn-block' ],
    {
        'btn-outline-danger': !incomplete ? true : false,
        'btn-danger': incomplete ? true : false
    }
);

const DayCard = props => (
    <div className='mb-5'>
        <div className='card p-0 shadow-sm'>
            <header className='card-header text-white bg-primary rounded mb-5'>
                <h1>{props.selected}</h1>
            </header>
            <div className='card-body d-flex flex-column justify-content-between align-items-center'>
                <InputSwitcher
                    editNote={props.editNote}
                    noteText={props.noteText}
                    onEditClick={props.onEditClick}
                    onSubmit={props.onSubmit}
                    onDeleteClick={props.onDeleteClick}
                    selected={props.selected}
                />
                <div className='btn-group-vertical w-100'>
                    <button
                        className={btnCompleteStyles(props.complete)}
                        onClick={() => props.onCompleteClick(props.selected)}
                        type='button'
                    >
                        Complete
                    </button>
                    <button
                        className={btnIncompleteStyles(props.incomplete)}
                        onClick={() => props.onIncompleteClick(props.selected)}
                        type='button'
                    >
                        Incomplete
                    </button>
                </div>
            </div>
        </div>
    </div>
);


export default DayCard;
