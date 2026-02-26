import { createRouter } from '../src/router.js';
import { h } from '../src/microview.js';
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

export function App() {
  return h(AppLayout, { activeComponent });
}
