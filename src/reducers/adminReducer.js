const initialState = {
  imgFile: null,
  bgImgFile: null,
  username: "",
  imgSrc: "",
  profileName: "",
  about: "",
  links: [],
  appearance: {
    background: "",
    backgroundColor: "#070707",
    font: "Nunito",
    fontColor: "#e5e5e5",
    linkStyle: {
      rounded: true,
      filled: true,
      shadow: false,
      special: "",
    },
    linkColor: "#171717",
    linkFontColor: "#fff",
  },
  error: "",
  loading: false,
};

function adminReducer(state, action) {
  switch (action.type) {
    case "field":
      return {
        ...state,
        [action.field]: action.value,
      };
    case "update":
      return {
        ...state,
        loading: true,
      };
    case "success":
      return {
        ...state,
        loading: false,
        imgFile: null,
        bgImgFile: null,
      };
    case "error":
      return {
        ...state,
        error: action.error,
      };
    default:
      break;
  }
}

export { initialState, adminReducer };
