// Custom styles for a Select component.
export const customSelectStyles = {
    // Styles for the single selected value.
    singleValue: (provided) => ({
        ...provided,
        color: "whitesmoke",
    }),

    // Styles for the dropdown menu.
    menu: (provided) => ({
        ...provided,
        backgroundColor: "rgb(73, 73, 73)",
        borderRadius: "10px",
        overflow: "hidden",
    }),

    // Styles for each option in the dropdown menu.
    option: (provided, state) => ({
        ...provided,
        color: state.isFocused ? "black" : "inherit",
        backgroundColor: "rgb(73, 73, 73)",
        cursor: "pointer",

        // Styles for the option when it is active (clicked).
        "&:active": {
            backgroundColor: "grey",
        },
    }),

    // Styles for the control (outer container) of the Select component.
    control: (provided, state) => ({
        ...provided,
        backgroundColor: "rgb(73, 73, 73)",
        border: state.isFocused ? "2px solid black" : "2px solid whitesmoke",
        boxShadow: "none",
        borderRadius: "10px",
        cursor: "pointer",

        // Styles for the control when hovered.
        "&:hover": {
            borderColor: "grey",
        },
    }),
};
