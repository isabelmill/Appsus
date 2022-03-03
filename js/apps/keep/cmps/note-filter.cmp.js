export default {
    // props: [""],
    template: `
        <div class="filter-container">
        <div class="notes-filter-input">
        <div class="search-icon">
        <img @click="show = !show" src="./img/keep-img/icons/search.PNG" alt="">
        </div>
         <input   @input="setFilter" type="text" class="filter-search-bar" v-model="filterBy.txt" placeholder="Search">
        </div>
        <Transition name="fade">
          <div v-if="show" class="filters">
          <!-- <span> Filter By :</span> -->
           <select class="select-filters" @change="setFilter" v-model="filterBy.type">
            <option value=''>All</option>
            <option value="note-img">Images</option>
            <option value="note-txt">Text</option>
            <option value="note-todos">Todos</option>
           </select>
          </div>
          </Transition>


        </div>  
    `,
    components: {},
    created() {},
    data() {
        return {
            show: false,
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