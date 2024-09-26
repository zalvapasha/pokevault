export function convertToDecimal(num) {
  return (num / 10).toFixed(1);
}

export function convertToProgressBar(num) {
  return (num / 255) * 100;
}

export function replaceDashWithSpace(str) {
  return str.replace(/-/g, " ");
}

export function toTitleCase(str) {
  if (!str) {
    return str;
  } else {
    return str
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }
}

export function nullMovesData(str) {
  if (str === null) {
    return "—";
  } else {
    return str;
  }
}
