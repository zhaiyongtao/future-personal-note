import { defineComponent, h, type PropType } from 'vue';
import { Icon } from '@vicons/utils';
import './index.scss';
// 当 preserveValueImports 和 isolatedModules 一起打开时，明确引入的是类型时需要在类型前面明确的加入 type 关键字

const SvgIconProps = {
  size: {
    type: String as PropType<string | number | undefined>,
    default: 16
  },
  color: {
    type: String as PropType<string | undefined>
  },
  src: {
    type: Object as PropType<any>
  }
};
export default defineComponent({
  name: 'SvgIcon',
  props: SvgIconProps,
  setup(props) {
    console.log('props.src ==> ', props.src);
    return () => (
      <>
        <Icon color={props.color} size={props.size}>
          {h(props.src)}
          {/* <div */}
          {/*  class="icon" */}
          {/*  style={{ */}
          {/*    width: `${Number(props.size) / 37.5}rem`, */}
          {/*    height: `${Number(props.size) / 37.5}rem` */}
          {/*  }}> */}
          {/*  {h(props.src)} */}
          {/* </div> */}
          {/* {h(props.src)} */}
        </Icon>
      </>
    );
  }
});
