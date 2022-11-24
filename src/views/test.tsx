import { defineComponent } from 'vue';
import styles from './index.module.scss';
export default defineComponent({
  name: 'Test',
  props: {},
  setup(props) {},
  render() {
    return <div class={styles.test}>Test</div>;
  }
});
