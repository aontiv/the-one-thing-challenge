import React from 'react';

const NoteInput = props => {
    const disabled = props.noteText === '';
    
    return (
        <form
            className='input-group mb-5'
            onSubmit={event => props.onSubmit(event, props.selected, props.noteText)}
        >
            <input
                className='form-control'
                type='text'
                placeholder='note...'
                value={props.noteText ? props.noteText : ''}
                onChange={props.onChange}
            />
            <div className='input-group-append'>
                <button
                    className='btn btn-secondary'
                    type='submit'
                    disabled={disabled}
                >
                    { props.editNote ? 'Edit' : 'Submit' }
                </button>
            </div>
        </form>
    );
}

export default NoteInput;
