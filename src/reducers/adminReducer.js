const initialState = {
  imgFile: null,
  bgImgFile: null,
  imgSrc: "",
  profileName: "",
  about: "",
  links: [],
  appearance: {
    background: "",
    backgroundColor: "#000000",
    font: "Nunito",
    fontColor: "#e5e5e5",
    linkStyle: {
      rounded: true,
      filled: true,
      shadow: false,
      special: "",
    },
    linkColor: "#212529",
    linkFontColor: "#fff",
  },
  socials: {
    twitter: "",
    instagram: "",
    facebook: "",
    linkedin: "",
    github: "",
    hashnode: "",
    devto: "",
    medium: "",
    whatsapp: "",
  },
};

function adminReducer(state, action) {
  switch (action.type) {
    case "field":
      localStorage.setItem(action.field, JSON.stringify(action.value));
      return {
        ...state,
        [action.field]: action.value,
      };
    default:
      break;
  }
}

export { initialState, adminReducer };
