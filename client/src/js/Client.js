const Client = () => {
    const login = user => {
        return fetch("/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user)
        });
    };

    const register = user => {
        return fetch("/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user)
        });
    };

    const getHabit = userId => {
        return fetch(`/get_habit/${userId}`);
    };

    const getTracker = userId => {
        return fetch(`/get_tracker/${userId}`);
    };

    const addHabit = habit => {
        return fetch("/add_habit", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(habit)
        });
    };

    const addTracker = tracker => {
        return fetch("/add_tracker", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(tracker)
        });
    };

    const deleteHabit = userId => {
        return fetch(`/delete_habit/${userId}`, {
            method: "DELETE",
        });
    };

    const deleteTracker = userId => {
        return fetch(`/delete_tracker/${userId}`, {
            method: "DELETE",
        });
    };

    const updateNote = (trackerId, dayNumber, noteText) => {
        return fetch(`/update_note/${trackerId}/${dayNumber}`, {
            method: "UPDATE",
            headers: { "Content-Type": "text/plain" },
            body: noteText
        });
    };

    const deleteNote = (trackerId, dayNumber) => {
        return fetch(`/delete_note/${trackerId}/${dayNumber}`, {
            method: "DELETE"
        });
    };

    const updateIsComplete = (trackerId, dayNumber) => {
        return fetch(`/update_is_complete/${trackerId}/${dayNumber}`, {
            method: "UPDATE"
        });
    };

    const updateIsIncomplete = (trackerId, dayNumber) => {
        return fetch(`/update_is_incomplete/${trackerId}/${dayNumber}`, {
            method: "UPDATE"
        });
    };

    const handleResponse = response => {
        if (response.status === 200) {
            return response.json();
        }
        else {
            return new Promise((resolve, reject) => {
                const promise = response.json();
                promise.then(error => reject(new Error(error.message)));
            });
        }
    };

    return {
        login,
        register,
        getHabit,
        addHabit,
        getTracker,
        addTracker,
        updateNote,
        deleteNote,
        deleteHabit,
        deleteTracker,
        handleResponse,
        updateIsComplete,
        updateIsIncomplete
    };
};

export default Client();
