import { Vue, Component } from 'nuxt-property-decorator';
import Logo from '~/components/Logo';

@Component({
    components: {
        Logo
    }
})
export default class index extends Vue {
    private mounted() {
        console.log('GUS PETROVI4')
        for (let index = 0; index < 7; index++) {
            setTimeout(
                () => this.$q.notify({ message: 'Gus valen0k', type: 'info' }),
                600 * index + 1
            );
        }
    }
}
