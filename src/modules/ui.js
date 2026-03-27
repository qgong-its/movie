export function renderHtml(productData, containerId) {
  const container = document.getElementById(containerId);

  const htmlString = productData
    .map(
      (product) => `
        <li class="${product.id} border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
          <img src="${product.image}" alt="${product.title}" class="h-48 w-full object-contain mb-2">
          <h2 class="font-bold text-sm line-clamp-2">
            ${product.title}
          </h2>
          <span class="text-xs font-semibold bg-gray-100 text-gray-600 px-2 py-1 rounded w-max mb-2">
            ${product.category}
          </span>
          <p class="text-sm text-gray-600 mb-4 line-clamp-3 grow">
            ${product.description}
          </p>
          <div class="mt-auto">
            <span class="text-xl text-orange-600 font-bold block mb-2">
              € ${product.price}
            </span>
            <button class="add-to-cart-btn w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
              Add to Cart
           </button>
          </div>
        </li>
    `,
    )
    .join('');

  container.innerHTML = htmlString;
}

export function activateBtn(container, callback) {
  container.addEventListener('click', (event) => {
    const btn = event.target.closest('.add-to-cart-btn');
    if (btn) {
      const productId = btn.dataset.id;
      callback(productId);
    }
  });
}
