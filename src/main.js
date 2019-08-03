import App from './components/App.svelte';

const app = new App({
  target: document.body,
  props: {
    name: 'Toilet Checker',
    promise: null
  }
});

export default app;
