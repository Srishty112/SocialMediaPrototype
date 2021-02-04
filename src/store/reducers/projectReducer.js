 
const initstate ={
    projects:[
    ]
}

const projectReducer = (state = initstate, action) => {
    switch (action.type) {
      case 'CREATE_PROJECT_SUCCESS':
        console.log('create project success');
        return state;
      case 'CREATE_PROJECT_ERROR':
        console.log('create project error');
        return state;
      case 'UPDATE_PROJECT':
        console.log('UPDATE project');
        return state;
      case 'UPDATE_PROJECT_ERROR':
        console.log('update project error');
        return state;
      default:
        return state;
    }
  };

export default projectReducer;