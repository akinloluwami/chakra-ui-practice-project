import { createAvatar } from "@dicebear/avatars";
import * as style from "@dicebear/micah";

const Creators = [
  {
    name: "Ingrid",
    money: 16890,
    avatar: createAvatar(style, "Ingrid"),
  },
  {
    name: "Sash",
    money: 8876,
    avatar: createAvatar(style, "Sash"),
  },
  {
    name: "John",
    money: 7876,
    avatar: createAvatar(style, "John"),
  },
  {
    name: "Karafu",
    money: 10876,
    avatar: createAvatar(style, "Karafu"),
  },
];

export default Creators;
