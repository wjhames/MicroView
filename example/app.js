import { createRouter, h, mount } from '../src/microview.js';
import { AppLayout } from './layouts/AppLayout.js';
import { Home } from './pages/Home.js';
import { About } from './pages/About.js';
import { Todo } from './pages/Todo.js';
import { NotFound } from './pages/NotFound.js';

const routes = {
  '/': Home,
  '/about': About,
  '/todos': Todo,
  '/404': NotFound,
};

const { activeComponent } = createRouter(routes);

function App() {
  return h(AppLayout, { activeComponent });
}

mount('#root', App);
