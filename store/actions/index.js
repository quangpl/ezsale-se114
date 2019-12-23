const addItem = (item) => ({
  type: "ADD_ITEM",
  payload:item,
});

const auth = (item) => ({
  type: "AUTH",
  payload: item
});

const login = authInfo => ({
  type: "LOGIN",
    payload: authInfo
});

const logout = authInfo => ({
  type: "LOGOUT",
});
export { addItem, login, auth, logout };

