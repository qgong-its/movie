export function getFromLocalStorage(storageKey) {
  const storageValue = localStorage.getItem(storageKey);

  if (!storageValue) return [];

  try {
    const dataArray = JSON.parse(storageValue);
    return Array.isArray(dataArray) ? dataArray : [];
  } catch (e) {
    console.log('parse data failed', e);
    return [];
  }
}

export function saveToLocalStorage(storageKey, dataArray) {
  localStorage.setItem(storageKey, JSON.stringify(dataArray));
}
