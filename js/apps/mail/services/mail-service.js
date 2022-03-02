import { storageService } from './async-storage-service.js'
import { utilService } from './util-service.js'

export const mailService = {
    query,
    // remove,
    // save,
    // get,
    // getEmptyBook,
    // addReview,
    // getBooks,
    // addGoogleBook,
    // _setNextPrevBookId
}

const MAILS_KEY = 'mailsData'
_createMails()

function query() {
    return storageService.query(MAILS_KEY);
}

function _createMails() {
    let mails = utilService.loadFromStorage(MAILS_KEY)
    if (!mails || !mails.length) {
        mails = [
            {
                id: utilService.makeId(),
                from: 'sharon@walla.com',
                user: 'sharon',
                subject: 'Miss you!',
                body: 'Would love to catch up sometimes',
                isRead: false,
                isSent: false,
                sentAt: {
                    time: '7:35 AM',
                    date: '06-02-2022',
                },
            },
            {
                id: utilService.makeId(),
                from: 'transaction@notice.aliexpress.com',
                user: 'AliExpress',
                subject: 'Confirmation: Order 30153385152559',
                body: 'How was your shopping experience? Hi user Order 30153385152559 confirmed. Customer reviews help buyers get product information on AliExpress.',
                isRead: false,
                isSent: false,
                sentAt: {
                    time: '8:04 AM',
                    date: '06-02-2022',
                },
            },
            {
                id: utilService.makeId(),
                from: 'noreply@github.com',
                user: 'isabelmill',
                subject: 'isabelmill invited you to isabelmill/Appsus',
                body: '@isabelmill has invited you to collaborate on the isabelmill/Appsus repository',
                isRead: false,
                isSent: false,
                sentAt: {
                    time: '12:47 PM',
                    date: '05-02-2022',
                },
            },
            {
                id: utilService.makeId(),
                from: 'DoNotReply@pango.co.il',
                user: 'Pango',
                subject: 'Your monthly account in Pango',
                body: 'The monthly invoice is ready for the dates: 25.02.2022 - 26.01.2022, Invoice amount: NIS 13.11',
                isRead: false,
                isSent: false,
                sentAt: {
                    time: '11:01 PM',
                    date: '05-02-2022',
                },
            },
            {
                id: utilService.makeId(),
                from: 'no-reply@dropbox.com',
                user: 'Dropbox',
                subject: 'Idan and 79 others made changes in your shared folders',
                body: 'Activity in Shared Folders Heres what happened in your shared folders last week Follow specific folders and get focused updates Follow folders to get more detailed insights, reported instantly or once per day. Choose a folder to follow',
                isRead: false,
                isSent: false,
                sentAt: {
                    time: '7:12 PM',
                    date: '05-02-2022',
                },
            },
            {
                id: utilService.makeId(),
                from: 'reply@terminalx.co.il', 
                user: 'TERMINAL X',
                subject: 'Welcome aboard, get 15% off!',
                body: 'Thank you for buying at TERMINAL X. We are glad you joined our shopping experience and for it to continue to be fun, get a 15% discount on your next purchase on the site.',
                isRead: false,
                isSent: false,
                sentAt: {
                    time: '2:00 PM',
                    date: '05-02-2022',
                },
            },
            {
                id: utilService.makeId(),
                from: 'contact@eventer.co.il',
                user: 'Eventer',
                subject: 'E-BODED ~ PURIM BA OMAN',
                body: 'our E-BODED ~ PURIM BA OMAN event ticket request was entered into the system.',
                isRead: false,
                isSent: false,
                sentAt: {
                    time: '4:06 PM',
                    date: '04-02-2022',
                },
            },
            {
                id: utilService.makeId(),
                from: 'Do-not-Reply@isracard.co.il',
                user: 'ISRACARD',
                subject: 'monthly billing',
                body: 'Peace, The monthly billing notice is waiting for you to view the website. Customer Service 6272 *',
                isRead: false,
                isSent: false,
                sentAt: {
                    time: '4:36 PM',
                    date: '04-02-2022',
                },
            },
            {
                id: utilService.makeId(),
                from: 'no-reply@email.zeplin.io',
                user: 'Matan (via Zeplin)',
                subject: 'Matan invited you to Meme Generator v1.',
                body: 'Hola, Matan invited you as a teammate on Meme Generator v1.1 project in Zeplin. Let us know if you have any questions. support@zeplin.io',
                isRead: false,
                isSent: false,
                sentAt: {
                    time: '8:36 AM',
                    date: '03-02-2022',
                },
            },
            {
                id: utilService.makeId(),
                from: 'no_reply@email.apple.com',
                user: 'Apple',
                subject: 'Your receipt from Apple',
                body: 'Receipt',
                isRead: false,
                isSent: false,
                sentAt: {
                    time: '9:36 AM',
                    date: '02-02-2022',
                },
            },
            {
                id: utilService.makeId(),
                from: 'omri@gmail.com',
                user: 'omri',
                subject: 'Hi!',
                body: 'We need to make an urgent appointment!',
                isRead: false,
                isSent: false,
                sentAt: {
                    time: '12:38 PM',
                    date: '01-02-2022',
                },
            },
            {
                id: utilService.makeId(),
                from: 'yarinatona@gmail.com',
                user: 'Yarina Tona',
                subject: 'Great joy!',
                body: 'Joy will not be here!',
                isRead: false,
                isSent: false,
                sentAt: {
                    time: '2:35 PM',
                    date: '01-02-2022',
                },
            },
            {
                id: utilService.makeId(),
                from: 'macaroni@walla.com',
                user: 'Macaroni',
                subject: 'Delicious',
                body: 'This macaroni is delicious Macaroni is amazing ,Macaroni Macaroni.',
                isRead: false,
                isSent: false,
                sentAt: {
                    time: '6:46 PM',
                    date: '01-02-2022',
                }
            },
        ];
        utilService.saveToStorage(MAILS_KEY, mails);
    }
    return mails;
}

// user
const loginUser = {
    email: 'user@appsus.com',
    fullName: 'Mahatma Appsus'
}

// Model
// const email = {
//     id: 'e101',
//     subject: 'Miss you!',
//     body: 'Would love to catch up sometimes',
//     isRead: false,
//     sentAt: 1551133930594,
//     to: 'momo@momo.com'
// }

// const criteria = {
//     status: 'inbox/sent/trash/draft',
//     txt: 'puki', // no need to support complex text search
//     isRead: true, // (optional property, if missing: show all)
//     isStared: true, // (optional property, if missing: show all)
//     labels: ['important', 'romantic'] // has any of the labels
// }

