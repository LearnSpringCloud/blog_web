import Vue from 'vue'
import Router from 'vue-router'
import Home from "../view/home/page/Home";
import BillEdit from "../view/bill/page/BillEdit";
import BillView from "../view/bill/page/BillView";


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {path: "/bill/page/billedit/", name: 'Edit', component: BillEdit},
        {path: "/bill/page/billview/", name: 'View', component: BillView},
        /*{path: "/cms/page/add", name: 'PageAdd', component: PageAdd},
        {path: "/cms/page/edit/:pageId", name: 'PageEdit', component: PageEdit},
        {path: "/cms/template/pagelist/", name: 'TemplateList', component: TemplateList},*/
      ]
    }
  ]
})
