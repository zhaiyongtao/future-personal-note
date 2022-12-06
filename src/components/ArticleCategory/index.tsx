import { defineComponent, type PropType, ref } from 'vue';
import './index.scss';

const ArticleCategoryProps = {
  categoryList: {
    type: Array as
      | PropType<
          Array<{
            title: string;
            code: string;
            idx: number;
          }>
        >
      | []
      | undefined,
    default: [
      {
        title: '音乐',
        code: 'music',
        idx: 0
      },
      {
        title: '电影',
        code: 'movie',
        idx: 1
      },
      {
        title: '书籍',
        code: 'book',
        idx: 2
      },
      {
        title: '游戏',
        code: 'game',
        idx: 3
      },
      {
        title: '动漫',
        code: 'cartoon',
        idx: 4
      },
      {
        title: '其他',
        code: 'other',
        idx: 5
      },
      {
        title: '其他1',
        code: 'other1',
        idx: 6
      },
      {
        title: '其他2',
        code: 'other2',
        idx: 7
      },
      {
        title: '其他3',
        code: 'other3',
        idx: 8
      }
    ]
  }
};

export default defineComponent({
  name: 'ArticleCategory',
  props: ArticleCategoryProps,
  emits: ['change'],
  setup(props, { expose, emit, slots }) {
    const currentTag = ref<number>(0);
    const handleClick = (e: any, item: { title: string; code: string; idx: number }) => {
      currentTag.value = item.idx;
      // 点击的元素水平平缓滚动到中间
      const scrollLeft = e.target.offsetLeft - (window.innerWidth - e.target.offsetWidth) / 2;
      e.target.parentNode.scrollTo({
        left: scrollLeft,
        behavior: 'smooth'
      });
      emit('change', item);
    };
    // expose({ name: name.value, handleClick });
    return () => {
      return (
        <div class="articleWrapper">
          <ul class="articleWrapper__ul">
            {props.categoryList?.map((item, index) => (
              <li
                class={currentTag.value === index ? 'active__li' : ''}
                key={`tag-${index}`}
                onClick={(e) => handleClick(e, item)}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      );
    };
  }
});
