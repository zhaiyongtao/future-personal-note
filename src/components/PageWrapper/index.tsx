import { defineComponent } from 'vue';
import './index.scss';
export default defineComponent({
  name: 'PageWrapper',
  setup(props, { slots }) {
    return () => {
      return (
        <div class="page-wrapper">
          <div>{slots.content ? slots.content() : <div>内容</div>}</div>
          <div class="page-wrapper-footer">{slots.footer ? slots.footer() : <div>底部</div>}</div>
        </div>
      );
    };
  }
});
