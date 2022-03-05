import mailPreview from './mail-preview.cmp.js'

export default {
    props: ["mails"],
    template: `
        <section class="mails-list">
            <ul>
                <li v-for="mail in mails" :key="mail.id" class="mail-preview-container">
                    <mail-preview :mail="mail" />
                </li>
            </ul>
        </section>
    `,
    components: {
        mailPreview,
    },
}