export const navLinkStyles = ({ isActive }) => {
    return {
        color: isActive ? "whitesmoke" : "black",
        backgroundColor: isActive ? "black" : "whitesmoke",
    };
};
