import { hemburgur_Menu, theme } from "./Action";

const initial = {
  theme: false,
  hemburgur_Menu: false,
};

export default function stateManage(state = initial, action) {
  switch (action.type) {
    case theme:
      return { ...state, theme: !state.theme };
    case hemburgur_Menu:
      return { ...state, hemburgur_Menu: action.hemburgur_Menu };
    default:
      return state;
  }
}
