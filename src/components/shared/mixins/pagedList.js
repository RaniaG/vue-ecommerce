
export default {
  data: function () {
    return {
      page: [],
      pageNumber: 1,
      pageSize: 10,
      numberOfPages: 1,
      url: "",
      query: ""
    };
  },
  methods: {
    getPage: function () {
      //call api to get page based on query and pagenumber changes
    }
  }
}
