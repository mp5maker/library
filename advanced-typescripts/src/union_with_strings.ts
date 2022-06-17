type iconSizeT = "sm" | "xs" | Omit<string, "xs" | "sm">;
type UnionWithString<T extends string> = T | Omit<string, T>
type anotherIconSizeT = UnionWithString<"sm" | "xs">

const iconSize: iconSizeT = "sm";
const anotherIconSize: anotherIconSizeT = "xs";