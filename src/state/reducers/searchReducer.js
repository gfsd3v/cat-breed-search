/* eslint-disable default-case */
const initialState = {
  searchResults: [],
  imagesResults: []
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_FIRST_RESULT":
      return {
        searchResults: action.searchResults,
        imagesResults: action.imagesResults
      };
    case "SET_FULL_RESULTS":
      return {
        searchResults: action.searchResults,
        imagesResults: action.imagesResults
      };
    case "RESET_RESULTS":
      return { ...initialState };
    default:
      return initialState;
  }
};

export default searchReducer;
