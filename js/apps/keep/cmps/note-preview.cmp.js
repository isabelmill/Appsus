import {
    eventBus
} from '../../../services/eventBus-service.js';
import notePreviewToolbar from "./note-preview-toolbar.cmp.js";
import noteEdit from "./note-edit.cmp.js";

export default {
    props: ["note"],
    template: `
    <section class="note-preview" :style="{backgroundColor:note.style}" @mouseover="isHovered = true" @mouseleave="isHovered = false" >

     <note-edit v-if="isEdit" @close="closeEditMode" :note="note" ></note-edit> 

     <div class="note-details">

         <div class="note-text" v-if="note.type === 'note-txt'" >

             <div class="note-info"  @click="openEditMode">
             <h1>{{note.title}}</h1>
             <h2>{{note.info.txt}}</h2>
             </div>

             <note-preview-toolbar :class="hoverToolBar"  class="toolbar-note-preview" :note="note"  @colorPalette="openColors"></note-preview-toolbar>
             <transition name="bounce">
             <div v-if="color" class="drop-down-colors">
            <img @click="setColor('#C6EBFF')" src="./img/keep-img/color-palette/blue.png" alt="">
            <img @click="setColor('#DE4278')" src="./img/keep-img/color-palette/pink.png" alt="">
            <img @click="setColor('#FFFFAA')" src="./img/keep-img/color-palette/yellow.png" alt="">
            <img @click="setColor('#A05DA6')" src="./img/keep-img/color-palette/purple.png" alt="">
            <img @click="setColor('#6DC067')" src="./img/keep-img/color-palette/green.png" alt="">
            </div>
              </transition>
         </div>

         <div   class="note-img" v-if="note.type === 'note-img'">

         <div class="note-info"  @click="openEditMode">
             <h1>{{note.title}}</h1>
             <h2>{{note.info.txt}}</h2>
             <img :src="note.info.url">
           </div>

             <note-preview-toolbar :class="hoverToolBar"  class="toolbar-note-preview" :note="note" @colorPalette="openColors"></note-preview-toolbar>
             <transition name="bounce">
             <div v-if="color" class="drop-down-colors">
            <img @click="setColor('#C6EBFF')" src="./img/keep-img/color-palette/blue.png" alt="">
            <img @click="setColor('#DE4278')"src="./img/keep-img/color-palette/pink.png" alt="">
            <img @click="setColor('#FFFFAA')" src="./img/keep-img/color-palette/yellow.png" alt="">
            <img @click="setColor('#A05DA6')" src="./img/keep-img/color-palette/purple.png" alt="">
            <img @click="setColor('#6DC067')" src="./img/keep-img/color-palette/green.png" alt="">
            </div>
              </transition>
         </div>

         <div class="note-todos" v-if="note.type === 'note-todos'">

         <div class="note-info"  @click="openEditMode">
             <h1>{{note.title}}</h1>
            </div>
             <ul class="todos-container" v-for="todo in note.info.todos"> 
             <li>
                <input class="check-box-input" type="checkbox"  v-model="todo.doneAt">
                <h2>{{todo.txt}}</h2>
                </li>
                </ul>

                <note-preview-toolbar :class="hoverToolBar"  class="toolbar-note-preview" :note="note" @colorPalette="openColors" > </note-preview-toolbar>
                <transition name="bounce">
             <div v-if="color" class="drop-down-colors">
            <img @click="setColor('#C6EBFF')" src="./img/keep-img/color-palette/blue.png" alt="">
            <img @click="setColor('#DE4278')" src="./img/keep-img/color-palette/pink.png" alt="">
            <img @click="setColor('#FFFFAA')" src="./img/keep-img/color-palette/yellow.png" alt="">
            <img @click="setColor('#A05DA6')" src="./img/keep-img/color-palette/purple.png" alt="">
            <img @click="setColor('#6DC067')" src="./img/keep-img/color-palette/green.png" alt="">
            </div>
              </transition>
         </div>
     </div>

    </section>
    `,
    components: {
        'note-preview-toolbar': notePreviewToolbar,
        'note-edit': noteEdit,
    },
    created() {},
    data() {
        return {
            color: false,
            isHovered: false,
            isEdit: false,
        }
    },
    methods: {
        openColors(colorPalette) {
            this.color = colorPalette
        },
        changeOnMe() {
            this.isHovered = !this.isHovered
        },
        setColor(color) {
            this.note.style = color
            console.log('note:', this.note.style);
            eventBus.emit('setColor', this.note)
        },
        openEditMode() {
            this.isEdit = true;
        },
        closeEditMode() {
            this.isEdit = false;
        },
    },
    computed: {
        hoverToolBar() {
            return {
                onme: this.isHovered
            };
        },
    },
    unmounted() {},
}