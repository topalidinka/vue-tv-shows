<template>
  <div id="app">
    <AppHeader />
    <AppContent />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader';
import AppContent from './components/AppContent';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppContent,
  }
}
</script>

<style>
body {
  margin: 0;
}
</style>
