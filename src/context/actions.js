const API = "";

export async function loginUser(dispatch, credentials) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  };

  try {
    dispatch({ type: "REQUEST_LOGIN" });

    const response = await fetch(`${API}/login`, requestOptions);
    const data = await response.json();

    if (data.user) {
      dispatch({ type: "LOGIN_SUCCESS", payload: data });
      localStorage.setItem("currentUser", JSON.stringify(data));
      return data;
    }

    dispatch({ type: "LOGIN_ERROR", payload: data.errors[0] });
  } catch (error) {
    dispatch({ type: "LOGIN_ERROR", payload: error });
  }
}

export async function logout(dispatch) {
  dispatch({ type: "LOGOUT" });

  localStorage.removeItem("currentUser");
  localStorage.removeItem("token");
}
