
Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})
Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})
Vue.component('blog-post', {
  props: ['post'],
  template: `
    <div class="blog-post">
      <h3>{{ post.title }}</h3>
      <button v-on:click="$emit('enlarge-text', 0.1)">
        Enlarge text
      </button>
      <div v-html="post.content"></div>
    </div>
  `
})
var app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { id: 0, text: 'Vegetables' },
      { id: 1, text: 'Cheese' },
      { id: 2, text: 'Whatever else humans are supposed to eat' }
    ],
    posts: [
     { id: 1, title: 'My journey with Vue' },
     { id: 2, title: 'Blogging with Vue' },
     { id: 3, title: 'Why Vue is so fun' }
   ],
    postFontSize: 1
 },
 methods: {
  onEnlargeText: function (enlargeAmount) {
    console.log(enlargeAmount);
    this.postFontSize += enlargeAmount
  }
}
})
