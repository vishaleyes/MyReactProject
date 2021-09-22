export const increment = "increment";
export const decrement = "decrement";
export const fetching = "fetching";
export const submitFormData = "submitFormData";

// export const aboutAddRequest = () => ({
//     type: ABOUT_ADD_REQUEST
// });

export const AddSuccess = (data) => ({
    type: increment,
    data
});

export const MinusSuccess = (data) => ({
    type: decrement,
    data
});


export const fetchDataSuccess = (data) => ({
    type: fetching,
    data
});


export const formDataSuccess = (data) => ({
    type: submitFormData,
    data
});

// export const aboutFetchRequest = () => ({
//     type: ABOUT_FETCH_REQUEST
// });
