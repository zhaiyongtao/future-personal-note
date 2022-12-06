import { defineComponent, ref } from 'vue';
import { Button } from '@varlet/ui';
import PageWrapper from '@/components/PageWrapper';
import SvgIcon from '@/components/SvgIcon';

import ArticleCategory from '@/components/ArticleCategory';

import Icon_home from '@/assets/icons/Icon_home.vue';
import Icon_home_add from '@/assets/icons/Icon_home_add.vue';
import Icon_home_profile from '@/assets/icons/Icon_home_profile.vue';

import { getHomeData } from '@/service';
import styles from './index.module.scss';
import ArticleCard from '@/components/ArticleCard';

export default defineComponent({
  name: 'Home',
  props: {},
  emits: ['changeName'],
  setup(props, { expose, emit, slots }) {
    const handleClick = () => {
      emit('changeName', '张三');
    };
    const env = import.meta.env.VITE_NODE_ENV;
    console.log(env);
    const name = ref<string>('zyt');
    expose({ name: name.value, handleClick });
    console.log('slots ==> ', slots);

    const handleClickTestRequest = async () => {
      try {
        const res = await getHomeData();
        console.log('res ==> ', res);
      } catch (error) {
        console.log('error ==> ', error);
      }
    };
    return () => {
      return (
        <>
          <PageWrapper>
            {{
              content: () => (
                <div class={styles.homeContent}>
                  <br />
                  <ArticleCategory></ArticleCategory>
                  <br />

                  <ArticleCard></ArticleCard>
                  <Button onClick={handleClickTestRequest}>点击</Button>
                </div>
              ),
              footer: () => (
                <div class={styles.homeFooter}>
                  <div class={styles['homeFooter-home']}>
                    <SvgIcon src={Icon_home} size={24}></SvgIcon>
                    首页
                  </div>
                  <div class={styles['homeFooter-add']}>
                    <SvgIcon src={Icon_home_add} size={32}></SvgIcon>
                  </div>
                  <div class={styles['homeFooter-profile']}>
                    <SvgIcon src={Icon_home_profile} size={24}></SvgIcon>
                    profile
                  </div>
                </div>
              )
            }}
          </PageWrapper>
        </>
      );
    };
  }
});
