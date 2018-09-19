const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]

const User = {
  template: '<div>User {{ $route.params.username }}</div>'
}
const router = new VueRouter({
  routes: [
    { path: '/user/:username', component: User }
  ]
})

const app = new Vue({
  el:'#app',
  router:router
})
