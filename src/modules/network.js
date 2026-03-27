export async function fetchProductData(url) {
  const response = await fetch(url);

  if (!response.ok) throw new Error('no product data fetched');

  return await response.json();
}
