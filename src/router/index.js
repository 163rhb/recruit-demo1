import Vue from 'vue'
import Router from 'vue-router'//可通过提示导入
import Login from "@/components/Login";
import Hr_Index from "@/components/Hr_Index";
import Position from "@/components/hr/Position";
import Resume from "@/components/hr/Resume";
import notFound from "@/components/notFound";
Vue.use(Router)
export default new Router(
    {
        /*mode:'history',*/
        routes: [
            {
                path: '/',
                name: 'Login',
                component: Login,

            },
            {
                path: '/hr_index',
                name: ' Hr_Index',
                component: Hr_Index,
                children:[
                    {
                        path: '/position',
                        name: ' 职位管理',
                        component: Position,
                    },
                    {
                        path: '/resume',
                        name: '简历管理',
                        component: Resume,
                    },

                ]
            },
            {
                path: '*',
                name: 'error',
                component: notFound,
            }
            ]
    }
)