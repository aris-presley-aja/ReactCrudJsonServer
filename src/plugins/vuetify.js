import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import config from '@/config'
import 'font-awesome/css/font-awesome.css'

import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: config.light
        }
    }
});
