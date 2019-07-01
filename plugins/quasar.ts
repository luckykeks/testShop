import Vue from "vue";
// // import '~/styles/quasar.styl';
import "quasar-framework/dist/umd/quasar.mat.css";

import 'quasar-framework/dist/quasar.ie.polyfills';
import quasarRuLocale from 'quasar-framework/i18n/ru';
import 'quasar-extras/animate';
import 'quasar-extras/roboto-font';
import 'quasar-extras/material-icons';
// import Quasar, * as All from 'quasar';
import Quasar, * as All from 'quasar-framework/dist/quasar.mat.esm';

Vue.use(Quasar, {
    i18n: quasarRuLocale,
    components: All,
    directives: All,
    plugins: All
});
