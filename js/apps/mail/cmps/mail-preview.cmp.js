export default {
    props: ["mail"],
    template: `
        <section class="mail-preview">
            <div class="mail-preview-btns">
                <img src="img/mail-img/icons/check_box_line.svg">
                <!-- <img src="img/mail-img/icons/check_box_v.svg"> -->
                <img src="img/mail-img/icons/star_border.svg">
                <img src="img/mail-img/icons/important.svg">

                <div>
                    <p>{{mail.user}}</p>
                </div>
                
            </div>
            <div>
                <p>{{mail.subject}}</p>
            </div>
            <div>
                <p>{{mail.sentAt.date}}</p>
            </div>
        </section>
    `,
    components: {
    },
    created() { },
    data() {
        return {}
    },
    methods: {},
    computed: {},
    unmounted() { },
}