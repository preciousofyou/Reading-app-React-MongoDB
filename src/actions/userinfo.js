// import update from './mainnav'

export const add = (userinfo) => {
    return {
        type:'ADDUSERINFO',
        userinfo
    }
}

export const del = (userinfo) => {
    return {
        type: 'DELUSERINFO',
        userinfo
    }
}

export const update = (navIndex) => {   //更新导航位置
    return {
        type: 'UPDATECURNAV',
        navIndex
    }
}
