import React, { Component } from "react";

import InputNote from "./InputNote";
import DisplayNote from "./DisplayNote";

class InputSwitcher extends Component {
    render() {
        const edit = false;
        const noteId = "Walk the dog!";

        return (
            !noteId || (noteId && edit) ? (
                <InputNote />
            ) : (
                <DisplayNote />
            )
        )
    }
}

export default InputSwitcher;
