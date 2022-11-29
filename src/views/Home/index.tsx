import { defineComponent, ref } from 'vue';
import { RouterView } from 'vue-router';
import PageWrapper from '@/components/PageWrapper';
import { getHomeData } from '@/service';
import { NButton } from 'naive-ui';
export default defineComponent({
  name: 'Home',
  props: {},
  emits: ['changeName'],
  setup(props, { expose, emit, slots }) {
    const handleClick = () => {
      emit('changeName', '张三');
    };
    const name = ref<string>('zyt');
    expose({ name: name.value, handleClick });
    console.log('slots ==> ', slots);

    const handleClickTestRequest = async () => {
      const res = await getHomeData();
      console.log('res ==> ', res);
    };
    return () => {
      return (
        <>
          <PageWrapper>
            {{
              content: () => (
                <div>
                  <NButton onClick={handleClickTestRequest}>test</NButton>
                  {/* <RouterView /> */}
                </div>
              ),
              footer: () => <div>底部</div>
            }}
          </PageWrapper>
        </>
      );
    };
  }
});
