import request from './index';

export const getteam = () => {
    return request({
        url: '/v1/user-coupons/youpin/r/get/team',
        method: 'get'
    })
}

export const jointeam = (source, teamId) => {
    return request({
        url: '/v1/user-coupons/youpin/w/join/team',
        method: 'post',
        data: {
            source,
            teamId
        }
    })
}

export const opencoupon = () => {
    return request({
        url: '/v1/user-coupons/youpin/w/join/team',
        method: 'post'
    })
}

export const config = () => {
    return request({
        url: '/v1/user-coupons/youpin/r/config',
        method: 'get'
    })
}