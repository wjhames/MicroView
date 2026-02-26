# MicroView

A tiny signal-first UI library for building reactive interfaces with plain JavaScript.

## Code example

```js
import { createSignal, createRouter, Link, h, mount } from './src/microview.js';

const count = createSignal(0);

function Counter() {
  return h(
    'section',
    null,
    h('h1', null, 'MicroView Counter'),
    h('p', null, () => `Count: ${count()}`),
    h('button', { onClick: () => count(count() + 1) }, 'Increment'),
  );
}

const routes = {
  '/': Counter,
};

const { activeComponent } = createRouter(routes);

function App() {
  return h(
    'div',
    null,
    h('nav', null, h(Link, { to: '/' }, 'Home')),
    activeComponent,
  );
}

mount('#root', App);
```

## Features

- Fine-grained reactivity with signals
- Simple component model with `h(tag, props, ...children)`
- Hash-based router with `createRouter` and `Link`
- Zero build step required for the included example
- Tiny API surface that is easy to learn

## Quick Start

1. Clone the repository.
2. Open `example/index.html` in your browser.
3. Explore `example/app.js` and `example/pages/*`.

## Core Concepts (short)

- Signals: `createSignal` stores reactive state and updates subscribers.
- Effects and memos: `createEffect` and `createMemo` derive and react to state.
- Components: functions that return DOM nodes using `h(...)`.
- Mounting: `mount(selector, component)` renders and wires cleanup.
- Routing: `createRouter(routes)` maps hash paths to components.

## Docs link

- API docs: `./docs/index.html`

## Why MicroView Exists

MicroView exists as a focused learning and experimentation framework for modern reactive UI architecture: signals, fine-grained updates, and component composition without heavy tooling.
