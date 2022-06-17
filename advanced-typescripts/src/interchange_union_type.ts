type letters = "a" | "b" | "c"

// It maps over union, distributivity, typescript moves over automatically
type RemoveC<T> = T extends "c" ? never : T
type withoutC = RemoveC<letters>