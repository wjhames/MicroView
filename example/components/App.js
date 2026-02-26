import { h } from '../../src/microview.js';
import { Navbar } from './Navbar.js';

/**
 * Main application layout component including navigation.
 * Renders the active component provided by the router.
 */
export function App({ activeComponent }) {
  return h(
    'div',
    null,
    h(Navbar),
    h('hr'),
    activeComponent // Render the active component signal from the router
  );
}
