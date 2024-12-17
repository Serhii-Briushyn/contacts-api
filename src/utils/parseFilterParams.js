const parseType = (type) => {
  if (typeof type !== "string") return null;
  const validTypes = ["work", "home", "personal"];

  return validTypes.includes(type) ? type : null;
};

const parseBoolean = (value) => {
  if (typeof value !== "string") return null;
  if (value.toLowerCase() === "true") return true;
  if (value.toLowerCase() === "false") return false;
  return null;
};

export const parseFilterParams = (query) => {
  const { type, isFavorite } = query;

  const parsedType = parseType(type);
  const parsedIsFavorite = parseBoolean(isFavorite);

  return {
    type: parsedType,
    isFavorite: parsedIsFavorite,
  };
};
