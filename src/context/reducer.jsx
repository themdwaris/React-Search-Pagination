const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };

    case "LOAD_NEWS":
      return {
        ...state,
        isLoading: false,
        hits: action.payload.hits,
        remainNews: [...action.payload.hits],
        nbPages: action.payload.nbPages,
      };

    case "DEL_STORIES":
      let updated = state.remainNews.filter((currPost) => {
        return currPost.objectID !== action.payload;
      });
      return {
        ...state,
        remainNews: updated,
      };

    case "GET_NEXT":
      let pageIncre = state.page + 1;
    //   console.log(state.nbPages);
    //   console.log(pageIncre);
      if (pageIncre + 1 > state.nbPages) {
        pageIncre = 0;
      }

      return {
        ...state,
        page: pageIncre,
      };
    case "GET_PREV":
      let pageDecre = state.page - 1;
      if (pageDecre <= 1) {
        pageDecre = 0;
      }

      return {
        ...state,
        page: pageDecre,
      };
  }
  return state;
};

export default reducer;
