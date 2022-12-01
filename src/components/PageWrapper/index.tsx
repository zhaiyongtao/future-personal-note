import { defineComponent } from 'vue';
import './index.scss';
import SvgIcon from '@/components/SvgIcon';
import Icon_menu from '@/assets/icons/Icon_menu.vue';
export default defineComponent({
  name: 'PageWrapper',
  setup(props, { slots }) {
    return () => {
      return (
        <div class="page-wrapper">
          <div class="page-wrapper-menu">
            <SvgIcon src={Icon_menu} size={24}></SvgIcon>
          </div>
          <div>{slots.content ? slots.content() : <div>内容</div>}</div>
          <div class="page-wrapper-footer">{slots.footer ? slots.footer() : <div>底部</div>}</div>
        </div>
      );
    };
  }
});
