import { defineComponent, ref } from 'vue';
import './index.scss';

import { Image } from '@varlet/ui';
import SvgIcon from '@/components/SvgIcon';
import Icon_likes from '@/assets/icons/Icon_likes.vue';

export default defineComponent({
  name: 'ArticleCard',
  // props: {},
  emits: ['click'],
  setup(props, { expose, emit, slots }) {
    const handleClick = () => {
      emit('click', '张三');
    };
    const name = ref<string>('zyt');
    expose({ name: name.value, handleClick });
    console.log('slots ==> ', slots);
    return () => {
      return (
        <div class="card">
          <div class="card-header">
            <div class="card-header__avatar">
              <Image
                fit="cover"
                height={'100%'}
                width={'100%'}
                radius={'50%'}
                src="https://varlet.gitee.io/varlet-ui/cat.jpg"
              />
            </div>
            <div class="card-header-info">
              <div class="card-header-info__name">Tommy Shelby</div>
              <div class="card-header-info__time">15 min ago</div>
            </div>
          </div>
          <div class="card-content">
            <div class="card-content__desc">
              Researchers are discovering how music affects the brain, helping us to make sense of
              its real emotional and social power Researchers are discovering how music affects the
              brain, helping us to make sense of its real emotional and social power
            </div>
            <div class="card-content__cover">
              <Image
                fit="cover"
                height={'100%'}
                width={'100%'}
                radius={'16px'}
                src="https://varlet.gitee.io/varlet-ui/cat.jpg"
              />
              <div class="card-content__cover__tag">tag</div>
            </div>
          </div>
          <div class="card-footer">
            <div class="card-footer-left">
              <div class="card-footer-left__avs">
                <div class="card-footer-left__avs__img">
                  <Image
                    fit="cover"
                    height={'100%'}
                    width={'100%'}
                    radius={'50%'}
                    src="https://varlet.gitee.io/varlet-ui/cat.jpg"
                  />
                </div>
                <div class="card-footer-left__avs__img">
                  <Image
                    fit="cover"
                    height={'100%'}
                    width={'100%'}
                    radius={'50%'}
                    src="https://varlet.gitee.io/varlet-ui/cat.jpg"
                  />
                </div>
              </div>
              <div class="card-footer-left__count">24 comments</div>
            </div>
            <div class="card-footer-right">
              <SvgIcon src={Icon_likes} size={16}></SvgIcon>
              2000k likes
            </div>
          </div>
        </div>
      );
    };
  }
});
