export const reducer = (state, action) => {
    if (action.type === "CHANGE_BILL_AMOUNT") {
      return { ...state, billAmount: action.payload };
    }
  
    if (action.type === "SET_TIP") {
      return { ...state, tipPercentage: action.payload };
    }
  
    if (action.type === "SET_PEOPLE_COUNT") {
      if (action.payload === "0") {
        return { ...state, error: true, peopleCount: action.payload };
      }
      return { ...state, error: false, peopleCount: action.payload };
    }
  
    if (action.type === "SET_CUSTOM") {
      return { ...state, custom: action.payload };
    }
  
    if (action.type === "RESET_VALUES") {
      return {
        ...state,
        billAmount: "",
        tipPercentage: 0,
        peopleCount: "",
        custom: "",
      };
    }
  };
  