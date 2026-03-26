import './style.css';
import { loadComponent } from './modules/loader.js';

const app = document.querySelector('#app');

async function init() {
  if (!app) return;

  const [hero, feature] = await Promise.all([
    loadComponent('/src/components/hero-section.html'),
    loadComponent('/src/components/feature-section.html'),
  ]);

  app.append(hero, feature);
}

init();
