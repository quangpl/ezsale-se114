
const initialState = [
    {
        id:1,
        name:"ten san pham",
        url:"123",
        image:"url.com"
    }
]
const items = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [
        ...state,
        {
          id: action.item.id,
          item: action.item,
        }
      ];
    default:
      return state;
  }
};

export default items;
