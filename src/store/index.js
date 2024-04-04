import { createStore } from 'vuex';

export default createStore({
    state: {
        about: {
            title: 'заголовок один',
            text: 'текст к заголовку один'
        },
        education: {
            title: 'заголовок два',
            text: 'текст к заголовку два'
        },
        notes: {
            title: 'заголовок два',
            text: 'текст к заголовку два'
        }
        
    }
})