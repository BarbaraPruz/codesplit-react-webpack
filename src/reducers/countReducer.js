const defaultState = {
    count: 0
  };
  
  const countReducer = (state = defaultState, action) => {
    switch (action.type) {
      case "INCREMENT": {
        console.log(action);
        let i=state.count;
        return ({count: i+1})
      }
  
      default:
        return state;
    }
  };
  
  export default countReducer;