export function saveData(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function fetchData(key) {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch {
    console.error(`item with key ${key} dosn't exists`);
  }
}
