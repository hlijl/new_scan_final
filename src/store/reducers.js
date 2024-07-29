const initialState = {
  menuStatus: false,
};

function myReducer(state = initialState, action) {
  switch (action.type) {
    case "CHANGE_MENU_STATUS":
      return { ...state, menuStatus: !state.menuStatus };
    default:
      return state;
  }
}

export default myReducer;
