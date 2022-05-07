export const initialState = {
  isShow: false,
  messageName: '',
  messageEmail: '',
  messageSub: '',
  messageBody: '',
  errorSuccess: {},
  showMessage: false,
  skills: [],
  works: []
}

export const rootReducer = (state = initialState, action) => {
  switch (action.type){
    case 'CHANGE_SHOW_TRUE': 
    return {
      ...state,
      isShow: true,
    }
    case 'CHANGE_SHOW_FALSE': 
    return {
      ...state,
      isShow: false,
    }
    case 'MESSAGE_NAME': 
    return {
      ...state,
      messageName: action.payload
    }
    case 'MESSAGE_EMAIL': 
    return {
      ...state,
      messageEmail: action.payload
    }
    case 'MESSAGE_SUB': 
    return {
      ...state,
      messageSub: action.payload
    }
    case 'MESSAGE_BODY': 
    return {
      ...state,
      messageBody: action.payload
    }
    case 'ERROR_SUCCESS': {
      return {
        ...state,
        errorSuccess: action.payload
      }
    }
    case 'SHOW_MESSAGE': 
    return {
      ...state,
      showMessage: true
    }
    case 'CLEAR_INPUTS': 
    return {
      ...state,
      messageName: '',
      messageEmail: '',
      messageSub: '',
      messageBody: ''
    }
    case 'GET_SKILLS': 
    return {
      ...state,
      skills: action.payload
    }
    case 'GET_WORKS': 
    return {
      ...state,
      works: action.payload
    }

    default: 
      return state;
  }

}