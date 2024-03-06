export const customSelectStyles = {
    singleValue: (provided) => ({
        ...provided,
        color: "whitesmoke",
    }),
    menu: (provided) => ({
        ...provided,
        backgroundColor: "rgb(73, 73, 73)",
        borderRadius: "10px",
        overflow: "hidden",
    }),
    option: (provided, state) => ({
        ...provided,
        color: state.isFocused ? "black" : "inherit",
        backgroundColor: "rgb(73, 73, 73)",
        cursor: "pointer",

        "&:active": {
            backgroundColor: "grey",
        },
    }),
    control: (provided, state) => ({
        ...provided,
        backgroundColor: "rgb(73, 73, 73)",
        border: state.isFocused ? "2px solid black" : "2px solid whitesmoke",
        boxShadow: "none",
        borderRadius: "10px",
        cursor: "pointer",

        "&:hover": {
            borderColor: "grey",
        },
    }),
};
