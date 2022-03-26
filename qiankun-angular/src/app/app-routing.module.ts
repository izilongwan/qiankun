import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { getUrlParams } from './util';

const routes: Routes = [
  { path: '', redirectTo: 'first', pathMatch: 'full' },
  { path: 'first', loadChildren: () => import('./pages/first/first.module').then(m => m.FirstModule) },
  { path: 'second', loadChildren: () => import('./pages/second/second.module').then(m => m.SecondModule) },
  { path: 'second/:id', loadChildren: () => import('./pages/second-id/second-id.module').then(m => m.SecondIdModule) },
];

const isPreload = getUrlParams('preload')?.[0]

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    preloadingStrategy: isPreload &&  PreloadAllModules, // 预加载，先加载当前模块，再预下载其他模块，这样用户在激活路由时就无需等待下载这些元素
    relativeLinkResolution: 'legacy'
  })],
  exports: [RouterModule],
  providers: [
    { provide: APP_BASE_HREF, useValue: window.__POWERED_BY_QIANKUN__ ? '/angular' : '/' }
  ],
   declarations: [
  ]
})
export class AppRoutingModule { }
