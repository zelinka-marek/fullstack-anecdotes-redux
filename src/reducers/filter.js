export function filterReducer(state = "", action) {
  switch (action.type) {
    case "SET_FILTER": {
      const { filter } = action.payload;

      return filter;
    }
    default: {
      return state;
    }
  }
}

export function setFilter(filter) {
  return { type: "SET_FILTER", payload: { filter } };
}
