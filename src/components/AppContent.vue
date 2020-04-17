<template>
  <div class="content">
    <ShowsTable />
  </div>
</template>

<script>
import ShowsTable from './ShowsTable';

export default {
  name: 'AppContent',
  components: {
    ShowsTable,
  },
};
</script>

<style lang="scss" scoped>
.content {
  padding: 20px;
}
</style>
