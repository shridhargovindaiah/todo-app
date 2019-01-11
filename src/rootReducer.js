const initialState = {
  tasks: [],
  posts: [],
  comments: []
};

export default function(state = initialState, action) {
  if (action.type === "ADD_TASK") {
    const newTask = {
      userId: 10,
      title: action.payload,
      completed: false
    };
    return {
      tasks: [newTask, ...state.tasks]
    };
  }
  return state;
}
