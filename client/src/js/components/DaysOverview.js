import React from 'react';
import classNames from 'classnames';

const listStyles = () => classNames(
    [
        'list-group-item',
        'd-flex',
        'flex-1',
        'justify-content-center',
        'align-items-center',
        'border-0',
        'custom-p-1',
        'p-md-1'
    ]
);

const badgeStyles = day => classNames(
    [ 'badge', 'badge-pill', 'd-flex', 'justify-content-center', 'align-items-center' ],
    { 'badge-danger': day.incomplete },
    { 'badge-success': day.complete },
    { 'badge-primary': !day.complete && !day.incomplete },
    { 'text-warning': day.note_text }
);

const DaysOverview = props => {
    const dayList = props.dayList.map(day => {
        return (
            <li key={`d:${day.day}`} className={listStyles()}>
                <a
                    href=''
                    className={badgeStyles(day)}
                    onClick={event => props.onClick(event, day.day)}
                >
                    {day.day}
                </a>
            </li>
        );
    });

    return (
        <div className="mb-5">
            <ul className='list-group list-group-horizontal'>
                { dayList.slice(0, 11) }
            </ul>
            <ul className='list-group list-group-horizontal'>
                { dayList.slice(11, 22) }
            </ul>
            <ul className='list-group list-group-horizontal'>
                { dayList.slice(22, 33) }
            </ul>
            <ul className='list-group list-group-horizontal'>
                { dayList.slice(33, 44) }
            </ul>
            <ul className='list-group list-group-horizontal'>
                { dayList.slice(44, 55) }
            </ul>
            <ul className='list-group list-group-horizontal'>
                { dayList.slice(55, 66) }
            </ul>
        </div>
    );
}

export default DaysOverview;
