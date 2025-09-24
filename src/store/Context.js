import React from 'react'

import appLogo from '../images/shangyu_logo.svg'

import appleStoreBadge from '../images/apple_store_badge.svg'

import coverImage from '../images/shangyu-cover.png'

// section images
import fish_spot from '../images/fish-spot.png'
import fish_wiki from '../images/fish-wiki.png'
import fish_community from '../images/fish-community.png'
import fish_weather from '../images/fish-weather.png'
import fish_store from '../images/fish-store.png'

export const initialState = {
    // when in dev, change appURL to local url
    // appURL: 'http://localhost:3000',  
    // when in production, change appURL to real url
    appURL: 'http://localhost:3000',

    appLogo: appLogo,
    appName: '上渔App',

    coverTitle: '你的专属钓鱼助手',
    coverText: '上渔让上鱼变得更加简单',
    appleStoreBadge: appleStoreBadge,
    appleStoreLink: 'https://apps.apple.com/us/app/amplichat/id1499570373',

    coverImage: coverImage,

    endorsementTitle: `Hangout with your favorite people on your favorite apps`,
    endorsementText: `AmpliChat powers conversations within DreamHub, VoiceQnA, VoiceMirror, BaZiPaiPai, and SpindriftHome.`,

    sectionList: [
        {
            'title': `水域标点`,
            'text': `钓鱼地图让您探索附近水域并识别可能出现的鱼类。您可以查看同一区域钓友的捕获情况，并深入了解渔获详情。点击特定鱼类，还能获得专属饵料推荐，全面提升钓鱼体验。`,
            'image': fish_spot,
        },
        {
            'title': `钓鱼百科`,
            'text': `鱼类百科为垂钓者提供有关各种鱼类的基本信息，包括大小、栖息地、平均重量、濒危状况和推荐的饵料，使他们更容易计划成功的钓鱼之旅并支持可持续实践。`,
            'image': fish_wiki,
        },
        {
            'title': `上渔社群`,
            'text': `在社区中，您可以与钓友们联系、分享心得、查询鱼类信息，并展开有趣的交流。通过邀请功能，只需选择时间和地点，就能约上朋友一起钓鱼，让出行计划更轻松，也让钓鱼体验更欢乐。`,
            'image': fish_community,
        },
        {
            'title': `钓鱼天气`,
            'text': `钓鱼天气为您打造专属的出钓参考。它会根据水温、风向等自然条件，智能推荐最佳作钓地点，让您的每一次出行更高效、更有收获。`,
            'image': fish_weather,
        },
        {
            'title': `智能推荐商城`,
            'text': `我们的商城配备了AI智能推荐功能。用户只需输入需求，系统即可精准匹配相关装备，免去在其他平台反复查找的麻烦。同时，系统还会根据钓鱼习惯与偏好，推荐最合适的装备，带来个性化的购物体验。`,
            'image': fish_store,
        },
    ],
}

const initialContext = {
    state: initialState,
    dispatch: () => null,
}

export const Context = React.createContext(initialContext)
