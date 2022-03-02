export default {
    // props: [""],
    template: `
        <div class="filter-container">
         <input @input="setFilter" type="text" class="filter-search-bar" v-model="filterBy.txt" placeholder="Search...">

           <div class="filters">
           <span> Filter By :</span>
            <select  @change="setFilter" v-model="filterBy.type">
             <option value=''>All</option>
             <option value="note-img">Images</option>
             <option value="note-txt">Text</option>
             <option value="note-todos">Todos</option>
            </select>
           </div>

        </div>  
    `,
    components: {},
    created() {},
    data() {
        return {
            filterBy: {
                txt: null,
                type: '',
            },
        }
    },
    methods: {
        setFilter() {
            this.$emit('filtered', this.filterBy);
        }
    },
    computed: {},
    unmounted() {},
}