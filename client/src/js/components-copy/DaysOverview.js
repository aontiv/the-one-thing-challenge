import React, { Component } from "react";

class DaysOverview extends Component {
    render() {
        const dayList = this.props.dayList.map(day => {
            return (
                <li key={`d:${day.dayNumber}`} className="list-group-item d-flex flex-1 justify-content-center align-items-center border-0 custom-p-1 p-md-1">
                    <a href="" className="badge badge-pill badge-danger d-flex justify-content-center align-items-center text-warning">{day.dayNumber}</a>
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
