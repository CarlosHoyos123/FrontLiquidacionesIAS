import { Route } from '@angular/router';
import { LayoutHomeComponent } from './modules/layout/layout-home/layout-home.component';



export const appRutas: Route[] = [
    //{ path: '**', component: PageNotFoundComponent },
    {
        path: '',
        component: LayoutHomeComponent,
        children: [
            { 
                path: '', loadChildren: () => import('src/app/modules/home/home.module')
                    .then(m => m.HomeModule) }
        ]
    }/*,
    {
        path: 'home',
        component: LayoutHomeComponent,
        children: [
            {
                path: '', loadChildren: () => import('src/app/modules/home/home.module')
                    .then(m => m.HomeModule)
            }/*,
            {
                path: '', loadChildren: () => import('src/app/modulos/home/home.module')
                    .then(m => m.HomeModule)
            }
        ]
    },
    {
        path: 'Product',
        component: LayoutDescriptionComponent,
        children: [
            {
                path: '', loadChildren: () => import('src/app/modulos/detailed/detailed.module')
                    .then(m => m.DetailedModule)
            }
        ]
    }*/
];