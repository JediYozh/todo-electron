import {
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
  EDIT_TODO
} from '../actions';

function todoReducer(state = {}, action) {
  switch (action.type) {
    case ADD_TODO: {
      return {
        id: action.id,
        completed: false,
        title: action.title,
      };
    }

    case TOGGLE_TODO: {
      if (state.id === action.id) {
        return {
          ...state,
          completed: !state.completed
        };
      }
      return state;
    }

    case EDIT_TODO: {
      if (state.id === action.id) {
        return {
          ...state,
          title: action.title
        };
      }
      return state;
    }

    default: return state;
  }
}

export default function reducer(state = [], action) {
  switch (action.type) {
    case ADD_TODO: {
      return [...state, todoReducer(undefined, action)];
    }

    case DELETE_TODO: {
      const index = state.findIndex(todo => todo.id === action.id);
      return [
        ...state.slice(0, index),
        ...state.slice(index + 1),
      ];
    }

    case TOGGLE_TODO: {
      return state.map(todo => todoReducer(todo, action));
    }

    case EDIT_TODO: {
      return state.map(todo => todoReducer(todo, action));
    }

    default: return state;
  }
}
