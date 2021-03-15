import Home from './Home'
import News from './News'
import NewsHome from './NewsHome'
import NewsDetail from './NewsDetail'
import NewsSearch from './NewsSearch'

export default [
    {path:'/', exact:true, component:Home},
    {
        path:'/news',
        exact:true,
        component:News,
        children:[
            {path:'/',exact:true, component:NewsHome},
            {path:'/detail',exact:true, component:NewsDetail},
            {path:'/search',exact:true, component:NewsSearch},
        ]
    },
]