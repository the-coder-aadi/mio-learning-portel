import {htmlnotes} from "./Data/htmlnotes"
import { cssnotes } from "./Data/cssnotes";
import { jsnotes } from "./Data/jsnotes";
import { ReactNotes } from "./Data/ReactNotes";
import { FirebaseNotes } from "./Data/FirebaseNotes";

export const notes = [
  ...htmlnotes,
  ...cssnotes,
  ...jsnotes,
  ...ReactNotes,
  ...FirebaseNotes
];