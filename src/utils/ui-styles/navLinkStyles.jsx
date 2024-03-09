// Function to generate styles for navigation links based on the isActive prop.
export const navLinkStyles = ({ isActive }) => {
    return {
        // Set text color based on isActive prop.
        color: isActive ? "whitesmoke" : "black",

        // Set background color based on isActive prop.
        backgroundColor: isActive ? "black" : "whitesmoke",
    };
};
