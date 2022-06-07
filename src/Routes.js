import Vue from 'vue';
import Router from 'vue-router';

import Layout from '@/components/Layout/Layout';

// Pages
import Dashboard from '@/pages/Dashboard/Dashboard';
import Typography from '@/pages/Typography/Typography'

import Tables from '@/pages/Tables/Basic'
import Notifications from '@/pages/Notifications/Notifications'
import Icons from '@/pages/Icons/Icons'
import Charts from '@/pages/Charts/Charts'
import Steps from '@/pages/Steps/Steps'
// import Paso1 from '@/pages/Steps/Paso1'

// import DataPerusahaan from '@/pages/Steps/DataPerusahaan'


// import Chartsz from '@/pages/Chartss/Charts'
import Maps from '@/pages/Maps/Google'
import Error from "@/pages/Error/Error";
import Login from "@/pages/Login/Login";
// import shipper from "@/pages/shipper-prospect-list";
import Stepper from "@/pages/Stepper/Stepper";
// import StepForm from "@/pages/Step-form/new-step";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
    path: '/',
    redirect: 'login',
    name: 'Layout',
    component: Layout,
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: Dashboard,
      },
      {
        path: 'Stepper',
        name: 'Stepper',
        component: Stepper,
      },
      // {
      //   path: 'stepform',
      //   name: 'Step-Form',
      //   component: stepform,
      // },
      // {
      //   path: 'shipper-prospect-list',
      //   name: 'shipper-prospect-list',
      //   component: shipper,
      // },
      {
        path: 'typography',
        name: 'Typography',
        component: Typography,
      },
      {
        path: 'tables',
        name: 'Tables',
        component: Tables
      },
      {
        path: 'notifications',
        name: 'Notifications',
        component: Notifications
      },
      {
        path: 'icons',
        name: 'Icons',
        component: Icons
      },
      {
        path: 'charts',
        name: 'Charts',
        component: Charts
      },
      {
        path: 'Steps',
        name: 'Steps',
        component: Steps
      },
      // {
      //   path: 'DataPerusahaan',
      //   name: 'DataPerusahaan',
      //   component: DataPerusahaan
      // },      
      // {
      //   path: 'charts',
      //   name: 'Chartss',
      //   component: Chartsz
      // },      
      {
        path: 'maps',
        name: 'Maps',
        component: Maps
      },
      
    ],
  },
    {
      path: '*',
      name: 'Error',
      component: Error
    }
  ],
});
