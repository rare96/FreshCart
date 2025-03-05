import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'productDetails/:id',
    renderMode: RenderMode.Client,
  },
  { path:'checkout/:cartId',
    renderMode: RenderMode.Client,
  },
  
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
