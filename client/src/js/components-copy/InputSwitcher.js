import React, { Component } from "react";

import InputNote from "./InputNote";
import DisplayNote from "./DisplayNote";

class InputSwitcher extends Component {
    render() {
        const noteId = "";

        return (
            <div>
                {
                    !noteId || (noteId && edit) ? (
                        <InputNote />
                    ) : (
                        <DisplayNote />
                    )
                }
            </div>
        )
    }
}

export default InputSwitcher;
