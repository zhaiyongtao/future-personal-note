import { defineComponent, ref } from 'vue';
import { RouterView } from 'vue-router';
import PageWrapper from '@/components/PageWrapper';
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
    return () => {
      return (
        <>
          <PageWrapper>
            {{
              content: () => (
                <div>
                  12
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
