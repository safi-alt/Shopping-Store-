export const SIGNUP = "SIGNUP";

export const signup = (email, password) => {
  return async (dispatch) => {
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAShOw-RCRR13yU-f7djMNUZr6ik6-zCqU",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true,
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Something went Wrong");
    }

    const resData = await response.json();
    console.log(resData);

    dispatch({
      type: SIGNUP,
    });
  };
};
