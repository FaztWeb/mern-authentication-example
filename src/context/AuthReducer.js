const user = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser")).user
  : null;

const token = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser")).token
  : null;

export const initialState = {
  user,
  token,
  loading: false,
  errorMessage: null,
};

export const authReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "REQUEST_LOGIN":
      return {
        ...state,
        loading: true,
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        user: payload.user,
        token: payload.token,
        loading: false,
      };
    case "LOGIN_ERROR":
      return {
        ...state,
        loading: false,
        errorMessage: payload,
      };

    default:
      return state;
  }
};
