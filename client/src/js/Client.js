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

    const getDayList = userId => {
        return fetch(`/get_day_list/${userId}`);
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

    const addDayList = dayListObject => {
        return fetch("/add_day_list", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dayListObject)
        });
    };

    const deleteHabit = userId => {
        return fetch(`/delete_habit/${userId}`, {
            method: "DELETE",
        });
    };

    const deleteTracker = userId => {
        return fetch(`/delete_tracker/${userId}`, {
            method: 'DELETE',
        });
    };

    const deleteDayList = userId => {
        return fetch(`/delete_day_list/${userId}`, {
            method: 'DELETE'
        });
    };

    const updateNoteText = (userId, dayNumber, noteText) => {
        return fetch(`/update_note_text/${userId}/${dayNumber}`, {
            method: "UPDATE",
            headers: { "Content-Type": "text/plain" },
            body: noteText
        });
    };

    const deleteNoteText = (userId, dayNumber) => {
        return fetch(`/delete_note_text/${userId}/${dayNumber}`, {
            method: "DELETE"
        });
    };

    const updateComplete = (userId, dayNumber) => {
        return fetch(`/update_complete/${userId}/${dayNumber}`, {
            method: "UPDATE"
        });
    };

    const updateIncomplete = (userId, dayNumber) => {
        return fetch(`/update_incomplete/${userId}/${dayNumber}`, {
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

    const parseJSON = data => {
        return data.json();
    };

    return {
        addDayList,
        addHabit,
        addTracker,
        deleteDayList,
        deleteHabit,
        deleteNoteText,
        deleteTracker,
        getDayList,
        getHabit,
        getTracker,
        handleResponse,
        login,
        parseJSON,
        register,
        updateNoteText,
        updateComplete,
        updateIncomplete
    };
};

export default Client();
