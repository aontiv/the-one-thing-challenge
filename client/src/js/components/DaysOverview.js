import classNames from "classnames";
import React, { Component } from "react";

const listStyles = () => classNames(
    [ "list-group-item", "d-flex", "flex-1", "justify-content-center", "align-items-center", "border-0", "custom-p-1", "p-md-1" ]
);

const badgeStyles = day => classNames(
    [ "badge", "badge-pill", "d-flex", "justify-content-center", "align-items-center" ],
    { "badge-danger": day.isIncomplete },
    { "badge-success": day.isComplete },
    { "badge-primary": !day.isComplete && !day.isComplete },
    { "text-warning": day.noteText }
);

class DaysOverview extends Component {
    handleItemClick = (event, dayNumber) => {
        event.preventDefault();
        this.props.updateSelectedDay(dayNumber);
    };

    render() {
        const dayList = this.props.dayList.map(day => {
            return (
                <li key={`d:${day.dayNumber}`} className={listStyles()}>
                    <a href="" className={badgeStyles(day)} onClick={event => this.handleItemClick(event, day.dayNumber)}>{day.dayNumber}</a>
                </li>
            );
        });

        return (
            <div className="mb-5">
                <ul className="list-group list-group-horizontal">
                    { dayList.slice(0, 11) }
                </ul> 
                <ul className="list-group list-group-horizontal">
                    { dayList.slice(11, 22) }
                </ul> 
                <ul className="list-group list-group-horizontal">
                    { dayList.slice(22, 33) }
                </ul> 
                <ul className="list-group list-group-horizontal">
                    { dayList.slice(33, 44) }
                </ul> 
                <ul className="list-group list-group-horizontal">
                    { dayList.slice(44, 55) }
                </ul> 
                <ul className="list-group list-group-horizontal">
                    { dayList.slice(55, 66) }
                </ul>
          </div>
        );
    }
}

export default DaysOverview;
