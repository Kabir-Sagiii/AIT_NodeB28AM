const initialdata = {
  users: {
    id: "",
    username: "",
    password: "",
    email: "",
    city: "",
  },
  products: [],
};

const reducers = (state = initialdata, action) => {
  if (action.type === "users") {
    state = {
      ...state,
      users: action.payload,
    };
  }

  return state;
};

export default reducers;
