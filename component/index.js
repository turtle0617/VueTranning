

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

Vue.component('magic-eight-ball', {
  data: function () {
    return {
      possibleAdvice: ['Yes', 'No', 'Maybe']
    }
  },
  methods: {
    giveAdvice: function () {
      var randomAdviceIndex = Math.floor(Math.random() * this.possibleAdvice.length)
      this.$emit('give-advice', this.possibleAdvice[randomAdviceIndex])
    }
  },
  template: `
    <button v-on:click="giveAdvice">
      Click me for advice
    </button>
  `
})
Vue.component('todo-item', {
  data:function () {
    return{
      todo: [
        { id: 0, text: 'a' },
        { id: 1, text: 'b' },
        { id: 2, text: 'c' }
      ]
    }
  },
  props: ['todo'],

  template: '<li>{{ todo }}</li>'
})
Vue.component('custom-input', {
  props: ['value'],
  template: `
    <input
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
    >
  `
})
var app7 = new Vue({
  el: '#app-7',
  data: {
    todo: [
      { id: 0, text: 'Vegetables' },
      { id: 1, text: 'Cheese' },
      { id: 2, text: 'Whatever else humans are supposed to eat' }
    ],
    posts: [
     { id: 1, title: 'My journey with Vue' },
     { id: 2, title: 'Blogging with Vue' },
     { id: 3, title: 'Why Vue is so fun' }
   ],
    searchText: ""
 },
 methods: {
  onEnlargeText: function (enlargeAmount) {
    console.log(enlargeAmount);
    this.postFontSize += enlargeAmount
  },
  showAdvice: function (advice) {
        alert(advice)
    }
  }
})
