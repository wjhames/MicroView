import { h } from '../../src/microview.js';
import { Navbar } from '../components/Navbar.js';

export function AppLayout({ activeComponent }) {
  return h(
    'div',
    null,
    h(Navbar),
    h('hr'),
    activeComponent
  );
}
