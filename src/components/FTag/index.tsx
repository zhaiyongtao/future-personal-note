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

  color: {
    type: Object as PropType<{
      fontColor: string;
      bgColor: string;
    }>
  },
  type: {
    type: String as PropType<'normal' | 'small'>,
    default: 'normal'
  }
};
export default defineComponent({
  name: '',
  props: FTagProps,
  emits: ['click'],
  setup(props, { expose, emit, slots }) {
    const handleClick = (e: Event) => {
      // e.preventDefault();
      e.stopPropagation();
      emit('click', e);
    };
    // 根据传入进来的类名生成样式
    const wrapperClassName = () => {
      if (props.className) {
        return classNames('fTag', props.className, {
          'fTag-small': props.type === 'small'
        });
      } else {
        return classNames('fTag', {
          'fTag-small': props.type === 'small'
        });
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
          onClick={handleClick}
        >
          {slots.prefix ? <div class="fTag-prefix">{slots.prefix()}</div> : null}
          <div class="fTag-title">{props.title}</div>
          {slots.suffix ? <div class="fTag-suffix">{slots.suffix()}</div> : null}
        </div>
      );
    };
  }
});
