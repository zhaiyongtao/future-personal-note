import { ref, computed, reactive } from 'vue';
import { defineStore } from 'pinia';

export const useHomeStore = defineStore('Home', () => {
  let articleList = reactive<any>([]);

  const setArticleList = (payload: any) => {
    articleList.splice(0, articleList.length);
    Object.assign(articleList, payload);
  };

  return { articleList };
});
