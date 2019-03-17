import ACTIONS from "./action";
import _ from "lodash";

const defaultState = {
  homeTitle: "Bienvenido a Project Code Names",
  items: [ {id: 1 , description: "Teriyaki"}, {id: 2,description: "Patepluma"}, {id: 3,description: "Pope"},
  {id: 4,description: "Llave Inglesa"}, {id: 5,description: "Ceramica"}, {id: 6,description: "Windoor"},
  {id: 7,description: "Falcon"},{id: 8,description: "Alpha"},{id: 9,description: "Sierra117"},
  {id: 10,description: "Covenant"} ]
};

const todoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.Types.CREATE_ITEM: {
      console.log(action);

      let item = action.payload;
      let newItem = { id: state.items.length + 1, description: item };
      let newState = _.cloneDeep(state);
      newState.items.push(newItem);
      return newState;
    }

    case ACTIONS.Types.DELETE_ITEM: {
      let newState = _.cloneDeep(state);
      console.log(action.payload);
      let index = _.findIndex(newState.items, { id: action.payload });
      newState.items.splice(index, 1);
      return newState;
    }
    default:
      return state;
  }
};

export default todoReducer;



