
import Home from './Home'
import News from './News'
import NewsHome from './NewsHome'
import NewsDetail from './NewsDetail'
import NewsSearch from './NewsSearch'

 //eslint-disable-next-line
export default [
    
    
    {
        path:'/news',
        component:News,
        name:'news',
        children:[
            {path:'/',exact:true,name:'newsHome', component:NewsHome},
            {path:'/detail',name:'newsDetail',exact:true, component:NewsDetail},
            {path:'/search',name:'newsSearch',exact:true, component:NewsSearch},
        ]
    },
    {path:'/',name:'home', exact:true, component:Home},
]