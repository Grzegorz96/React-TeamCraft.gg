// Function to save data to local storage.
export const saveDataToLocalStorage = (key, data) => {
    // Convert data to a JSON string and store it in local storage.
    localStorage.setItem(key, JSON.stringify(data));
};

// Function to retrieve data from local storage.
export const getDataFromLocalStorage = (key) => {
    // Retrieve data from local storage and parse it from JSON.
    const storedData = localStorage.getItem(key);
    return storedData ? JSON.parse(storedData) : null;
};
