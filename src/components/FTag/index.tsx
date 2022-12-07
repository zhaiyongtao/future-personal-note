import { defineComponent, type PropType, ref } from 'vue';
import classNames from 'classnames';
import './index.scss';

const FTagProps = {
  title: {
    type: String as PropType<string>,
    required: true
  },
  className: {
    type: String as PropType<string>
  },
  isActived: {
    type: Boolean as PropType<boolean>,
    default: false
  },
  color: {
    type: Object as PropType<{
      fontColor: string;
      bgColor: string;
    }>
  }
};

export default defineComponent({
  name: '',
  props: FTagProps,
  emits: ['click', 'update:isActived'],
  setup(props, { expose, emit, slots }) {
    const handleClick = () => {
      emit('click', '张三');
    };
    const name = ref<string>('zyt');
    expose({ name: name.value, handleClick });
    console.log('slots ==> ', slots);

    // 根据传入进来的类名生成样式
    const wrapperClassName = () => {
      if (props.className) {
        return classNames('fTag', props.className);
      } else {
        return 'fTag';
      }
    };

    return () => {
      const { color } = props;
      return (
        <div
          class={wrapperClassName()}
          style={{
            background: color?.bgColor,
            color: color?.fontColor
          }}
        >
          {slots.prefix ? <div class="fTag-prefix">{slots.prefix()}</div> : null}
          <div class="fTag-title">{props.title}</div>
          {slots.suffix ? <div class="fTag-suffix">{slots.suffix()}</div> : null}
        </div>
      );
    };
  }
});
