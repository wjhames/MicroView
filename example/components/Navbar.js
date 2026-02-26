import { h, Link } from '../../src/microview.js';

export function Navbar() {
  return h(
    'nav',
    { style: 'padding: 10px; border-bottom: 1px solid #ccc;' },
    h(Link, { to: '/' }, 'Home'),
    ' | ',
    h(Link, { to: '/about' }, 'About'),
    ' | ',
    h(Link, { to: '/todos' }, 'To-Do App')
  );
}
