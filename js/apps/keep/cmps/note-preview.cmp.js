import {
    eventBus
} from '../../../services/eventBus-service.js';
import notePreviewToolbar from "./note-preview-toolbar.cmp.js";
import noteEdit from "./note-edit.cmp.js";
import noteTodoPreview from "./note-todo-preview.cmp.js";

export default {
    props: ["note"],
    template: `
    <section class="note-preview" :style="{backgroundColor:note.style}" @mouseover="isHovered = true" @mouseleave="isHovered = false" draggable="true">

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
            <img @click="setColor('#FFFFFF')" src="./img/keep-img/color-palette/white.png" alt="">
            </div>
              </transition>
         </div>

         <div  class="note-img" v-if="note.type === 'note-img'">

         <div class="note-info"  @click="openEditMode">
             <h1>{{note.title}}</h1>
             <img :src="note.info.url">
           </div>

             <note-preview-toolbar :class="hoverToolBar"  class="toolbar-note-preview" :note="note" @colorPalette="openColors"></note-preview-toolbar>
             <transition name="bounce">
             <div v-if="color" class="drop-down-colors">
            <img @click="setColor('#C6EBFF')" src="./img/keep-img/color-palette/blue.png" alt="">
            <img @click="setColor('#DE4278')"src="./img/keep-img/color-palette/pink.png" alt="">
            <img @click="setColor('#FFFFAA')" src="./img/keep-img/color-palette/yellow.png" alt="">
            <img @click="setColor('#A05DA6')" src="./img/keep-img/color-palette/purple.png" alt="">
            <img @click="setColor('#FFFFFF')" src="./img/keep-img/color-palette/white.png" alt="">
            </div>
              </transition>
         </div>

         <div  class="note-vid" v-if="note.type === 'note-vid'">

           <div class="note-info"  @click="openEditMode">
             <h1>{{note.title}}</h1>
             <iframe width="230" height="155" controls :src="note.info.vidUrl" title="YouTube video player" ></iframe> 
           </div>

             <note-preview-toolbar :class="hoverToolBar"  class="toolbar-note-preview" :note="note" @colorPalette="openColors"></note-preview-toolbar>
             <transition name="bounce">
             <div v-if="color" class="drop-down-colors">
            <img @click="setColor('#C6EBFF')" src="./img/keep-img/color-palette/blue.png" alt="">
            <img @click="setColor('#DE4278')"src="./img/keep-img/color-palette/pink.png" alt="">
            <img @click="setColor('#FFFFAA')" src="./img/keep-img/color-palette/yellow.png" alt="">
            <img @click="setColor('#A05DA6')" src="./img/keep-img/color-palette/purple.png" alt="">
            <img @click="setColor('#FFFFFF')" src="./img/keep-img/color-palette/white.png" alt="">
            </div>
              </transition>
         </div>

         <div class="note-todos" v-if="note.type === 'note-todos'">

         <div class="note-info"  @click="openEditMode">
             <h1>{{note.title}}</h1>
            </div>
             <ul class="todos-container" v-for="todo in note.info.todos"> 
                <note-todo-preview :todo="todo" :note="note"></note-todo-preview>
                </ul>

                <note-preview-toolbar :class="hoverToolBar"  class="toolbar-note-preview" :note="note" @colorPalette="openColors" > </note-preview-toolbar>
                <transition name="bounce">
             <div v-if="color" class="drop-down-colors">
            <img @click="setColor('#C6EBFF')" src="./img/keep-img/color-palette/blue.png" alt="">
            <img @click="setColor('#DE4278')" src="./img/keep-img/color-palette/pink.png" alt="">
            <img @click="setColor('#FFFFAA')" src="./img/keep-img/color-palette/yellow.png" alt="">
            <img @click="setColor('#A05DA6')" src="./img/keep-img/color-palette/purple.png" alt="">
            <img @click="setColor('#FFFFFF')" src="./img/keep-img/color-palette/white.png" alt="">
            </div>
              </transition>
         </div>
     </div>

    </section>
    `,
    components: {
        'note-preview-toolbar': notePreviewToolbar,
        'note-edit': noteEdit,
        noteTodoPreview,
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
        setColor(color) {
            this.note.style = color
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
                onToolBar: this.isHovered
            };
        },
    },
    unmounted() {},
}