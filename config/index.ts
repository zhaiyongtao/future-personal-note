const APP_CONFIG: Record<
  'dev' | 'test' | 'prod',
  {
    apiHost: string;
    baseApi: string;
  }
> = {
  dev: {
    apiHost: 'http://127.0.0.1:4523/m1/2005353-0-default',
    baseApi: '/mock'
  },
  test: {
    apiHost: 'http://baidu.com',
    baseApi: '/mock'
  },
  prod: {
    apiHost: 'http://127.0.0.1:4523/m1/2005353-0-default',
    baseApi: '/mock'
  }
};

export default APP_CONFIG;
