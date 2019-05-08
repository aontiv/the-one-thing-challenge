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
        getTracker,
        handleResponse
    };
};

export default Client();
