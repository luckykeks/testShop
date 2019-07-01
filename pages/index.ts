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
    }
}
