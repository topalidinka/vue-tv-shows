<template>
  <div class="shows-table-wrapper">
        <div class="shows-search">
            <label class="search-label" for="search">Search:</label>
            <el-input
                id="search"
                placeholder="Please input"
                v-model="search"
                @change="searchShows"
            ></el-input>
        </div>
        <el-table
            v-loading="loading"
            :data="tableData"
            style="width: 100%"
            :default-sort="{
                prop: 'name',
                order: 'ascending',
            }"
            empty-text="Empty"
        >
            <el-table-column
                prop="name"
                label="Show name"
                sortable
            >
            </el-table-column>
            <el-table-column
                prop="language"
                label="Language"
            >
            </el-table-column>
            <el-table-column
                prop="genres"
                label="Genres"
            >
            </el-table-column>
            <el-table-column
                prop="status"
                label="Status"
            >
            </el-table-column>
            <el-table-column
                prop="rating"
                label="Rating"
                sortable
            >
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
  name: 'ShowsTable',
  data() {
    return {
      loading: false,
      search: 'girls',
      tableData: [],
    };
  },
  created() {
    this.searchShows();
  },
  methods: {
    getGenres(item) {
      if (
        Array.isArray(item.genres)
        && item.genres.length > 0
      ) {
        return item.genres.join(', ');
      }
      return '-';
    },
    getRating(item) {
      if (item.rating && item.rating.average) {
        return item.rating.average;
      }
      return '-';
    },
    searchShows() {
      this.loading = true;
      this.$store.dispatch('shows/searchShows', {
        query: this.search,
      })
        .then((result) => {
          this.tableData = result.map((item) => ({
            id: item.show.id,
            name: item.show.name,
            language: item.show.language,
            genres: this.getGenres(item.show),
            status: item.show.status,
            rating: this.getRating(item.show),
          }));
          this.loading = false;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.content {
  padding: 20px;
  .search-label {
    display: inline-block;
    font-size: 20px;
    color: #5c5a5a;
    margin-bottom: 7px;
  }
}
</style>
