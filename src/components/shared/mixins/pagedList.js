export default {
    data: function() {
        return {
            page: [],
            pageNumber: 1,
            pageSize: 10,
            numberOfPages: 20,
            url: "",
            query: "",
            sortList: [],
            filtersList: [],
            sortBy: "",
            filtersValues: {}
        };
    },
    methods: {
        getSortList() {
            this.sortList = ['Price High to Low', 'Price Low to High', 'Best Selling']
        },
        getFiltersList() {
            this.filtersList = [
                { header: 'Brands', type: 'text', values: ['CK', 'Kalles', 'Chanel'] },
                { header: 'Price', type: 'range', range: [0, 100] },
                { header: 'Colors', type: 'color', values: ['#FCC6DE', '#E9F09D', '#25BDB0'] }
            ];
            this.filtersList.forEach(e => {
                this.filtersValues[e.header] = { type: e.type };
                if (e.type == "range")
                    this.filtersValues[e.header].range = [];
                else this.filtersValues[e.header].values = [];
            });
        },
        getPage: function() {
            //call api to get page based on query and pagenumber changes
        },
        filter() {
            console.log(this.filtersValues);
        },
        sort() {}
    }
}