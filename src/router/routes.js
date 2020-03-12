
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'home', component: () => import('pages/LoggedIn.vue') },
      { path: 'error', component: () => import('pages/Error.vue') },
      { path: 'connectionerror', component: () => import('pages/ConnectionError.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
