import { ref, computed, reactive } from 'vue';
import { defineStore } from 'pinia';
import type { UserInfoType } from '@/stores/type';

export const useCommonStore = defineStore('common', () => {
  let token = ref('');
  let userInfo = ref<UserInfoType | {}>({});

  const setToken = (payload: string) => {
    token.value = payload;
  };

  const setUserInfo = (payload: UserInfoType) => {
    userInfo.value = payload;
  };

  return { userInfo, token, setToken, setUserInfo };
});
