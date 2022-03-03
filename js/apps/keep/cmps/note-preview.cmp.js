import {
    eventBus
} from '../../../services/eventBus-service.js';
import notePreviewToolbar from "./note-preview-toolbar.cmp.js";

export default {
    props: ["note"],
    template: `
    <section class="note-preview" :style="{backgroundColor:note.style}" @mouseover="isHovered = true" @mouseleave="isHovered = false" >

     <div class="note-details" >
         <div class="note-text" v-if="note.type === 'note-txt'" >
             <h1>{{note.title}}</h1>
             <h2>{{note.info.txt}}</h2>
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

         <div class="note-img" v-if="note.type === 'note-img'">
             <h1>{{note.title}}</h1>
             <h2>{{note.info.txt}}</h2>
             <img :src="note.info.url">
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
             <h1>{{note.title}}</h1>
             <ul class="todos-container" v-for="todo in note.info.todos"> 
             <li>
                <input class="check-box-input" type="checkbox"  v-model="todo.doneAt">
                <p>{{todo.txt}}</p>
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
    },
    created() {},
    data() {
        return {
            color: false,
            isHovered: false,
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
            // console.log('color:', color);
            console.log('note:', this.note.style);
            this.note.style = color
            console.log('note:', this.note.style);
            eventBus.emit('setColor', this.note)
        }
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