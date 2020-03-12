import request from './index';
export const getDetails = (id) => {
    return request({
        url: '/api/getDetails',
        method: 'get',
        params: {
          id
        },
    });
};
export const getList = () => {
  return request({
    url: '/api/getList',
    method: 'get',
  });
};
export const download = (id) => {
  return request({
    url: '/api/download',
    method: 'get',
    params: {
      id
    },
  });
};

request.interceptors.request.use(config=>{
    if ((config.url.indexOf('/apis/d/') >= 0) && (config.url.indexOf('/userInfo') < 0)) {
        config.headers.common['token'] = localStorage.getItem('stock_token') || '27db0b58a7f067726ff1be74cef10ce0'
    }
    //每次请求带上token
    return config
})
request.interceptors.response.use(res =>{
    if (res.code === "003"){
        window.location.replace("https://open.feishu.cn/connect/qrconnect/page/sso/?redirect_uri="+window.location.href+"&app_id=cli_9d7d8766e8759107");
    }
    return res;
})

