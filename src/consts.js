import DeleteLast from "./assets/delete-last.tsx";
import DeleteWord from "./assets/delete-word.tsx";
import DeleteAll from "./assets/delete-all.tsx";

export const LANGUAGES = ["EN", "HE", "EM"];

const FONTS = [
  "Arial",
  "Courier New",
  "Times New Roman",
  "Verdana",
  "Georgia",
  "Tahoma",
  "Trebuchet MS",
  "Impact",
  "Comic Sans MS",
  "Roboto",
];

const FONT_SIZES = [
  "12px",
  "14px",
  "16px",
  "18px",
  "20px",
  "22px",
  "24px",
  "26px",
  "28px",
  "30px",
  "32px",
];

const FONT_COLORS = [
  { name: "Black", hash: "#000000" },
  { name: "Red", hash: "#FF0000" },
  { name: "Blue", hash: "#0000FF" },
  { name: "Gray", hash: "#808080" },
  { name: "Orange", hash: "#FFA500" },
  { name: "Purple", hash: "#800080" },
];

export const FONT_ACTIONS = [
  { key: "fontFamily", values: FONTS },
  { key: "fontSize", values: FONT_SIZES },
  { key: "color", values: FONT_COLORS },
];

export const DELETE_ACTIONS = [
  { key: "delete-last", name: "Delete Last", icon: DeleteLast },
  { key: "delete-word", name: "Delete Word", icon: DeleteWord },
  { key: "delete-all", name: "Delete All", icon: DeleteAll },
];

export const KEYBOARD_LAYOUT_ROWS = [
  [
    { en: "`", he: "`", em: "😀" },
    { en: "1", he: "1", em: "😁" },
    { en: "2", he: "2", em: "😂" },
    { en: "3", he: "3", em: "🤣" },
    { en: "4", he: "4", em: "😃" },
    { en: "5", he: "5", em: "😄" },
    { en: "6", he: "6", em: "😅" },
    { en: "7", he: "7", em: "😆" },
    { en: "8", he: "8", em: "😉" },
    { en: "9", he: "9", em: "😊" },
    { en: "0", he: "0", em: "😋" },
    { en: "-", he: "-", em: "😎" },
    { en: "=", he: "=", em: "😍" },
    { en: "Backspace", he: "Backspace", em: "Backspace" },
  ],
  [
    { en: "Tab", he: "Tab", em: "Tab" },
    { en: "q", he: "/", em: "😙" },
    { en: "w", he: "'", em: "😚" },
    { en: "e", he: "ק", em: "☺️" },
    { en: "r", he: "ר", em: "🙂" },
    { en: "t", he: "א", em: "🤗" },
    { en: "y", he: "ט", em: "🤩" },
    { en: "u", he: "ו", em: "🤔" },
    { en: "i", he: "ן", em: "🤨" },
    { en: "o", he: "ם", em: "😐" },
    { en: "p", he: "פ", em: "😑" },
    { en: "[", he: "[", em: "😶" },
    { en: "]", he: "]", em: "🙄" },
    { en: "\\", he: "\\", em: "😏" },
  ],
  [
    { en: "CapsLock", he: "CapsLock", em: "😣" },
    { en: "a", he: "ש", em: "😥" },
    { en: "s", he: "ד", em: "😮" },
    { en: "d", he: "ג", em: "🤐" },
    { en: "f", he: "כ", em: "😯" },
    { en: "g", he: "ע", em: "😪" },
    { en: "h", he: "י", em: "😫" },
    { en: "j", he: "ח", em: "😴" },
    { en: "k", he: "ל", em: "😌" },
    { en: "l", he: "ף", em: "😛" },
    { en: ";", he: ";", em: "😜" },
    { en: "'", he: "'", em: "😝" },
    { en: "Enter", he: "Enter", em: "Enter" },
  ],
  [
    { en: "Shift", he: "Shift", em: "😒" },
    { en: "z", he: "\\", em: "😓" },
    { en: "x", he: "ז", em: "😔" },
    { en: "c", he: "ס", em: "😕" },
    { en: "v", he: "ב", em: "🙃" },
    { en: "b", he: "ה", em: "🤑" },
    { en: "n", he: "נ", em: "😲" },
    { en: "m", he: "מ", em: "☹️" },
    { en: ",", he: "צ", em: "🙁" },
    { en: ".", he: ",", em: "😖" },
    { en: "/", he: ".", em: "😞" },
    { en: "?", he: "?", em: "😟" },
  ],
  [
    { en: "Ctrl", he: "Ctrl", em: "😤" },
    { en: "Alt", he: "Alt", em: "😢" },
    { en: "Space", he: "Space", em: "Space" },
    { en: "<", he: "<", em: "😦" },
    { en: ">", he: ">", em: "😧" },
  ],
];
