interface Animal {
  name: string;
}

interface Human {
  firstName: string;
  lastName: string;
}

export const getDisplayName = <T extends Animal | Human>(item: T) => {
  if ("name" in item) {
    return {
      name: item.name,
    };
  }
  return {
    name: `${item.firstName} ${item.lastName}`,
  };
};
