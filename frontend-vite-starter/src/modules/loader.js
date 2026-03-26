export async function loadComponent(path) {
  const response = await fetch(path);

  if (!response.ok) {
    throw new Error(`Failed to load component: ${path}`);
  }

  const html = await response.text();
  const template = document.createElement('template');
  template.innerHTML = html.trim();

  return template.content.cloneNode(true);
}
