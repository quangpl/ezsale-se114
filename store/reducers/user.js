import UserService from "../../services/user";


const initialState = [
  {
  }
];
const user = (state=initialState , action) => {
  switch (action.type) {
    case "LOGIN":
      console.log(action.payload);
      return {
        
        authInfo: action.payload
      };
    case "AUTH":
      return {
        authInfo: action.payload
      };
    case "LOGOUT":
      return {
        error: false,
      payload:{
    _id: "",
    createdAt: "",
    email: "",
    name: "",
    password: "",
    point: 0,
    token: "",
    updatedAt: "",
  },
      };
    default:
      return state;
  }
};

export default  user; 