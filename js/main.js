(function() {
  'use strict';

  // Vue.jsの特徴：双方向データバインディング
  // データバインディング：UIとデータを結びつけること
  // 双方ことは、データを更新すればUIが更新され、UIが更新されればデータが更新されること

  let likeComponent = Vue.extend({
    props: { // 属性を使ってコンポーネントに値を渡す
      message: {
        type: String,
        default: 'Like'
      }
    },
    data: function() { // componentのdataは関数で返す
      return {
        count: 0
      }
    },
    template: '<button @click="countUp">{{ message}} {{ count }}</button>',
    methods: {
      countUp: function() {
        this.count++;
        this.$emit('increment') // incrementイベントを発火しトータルを加算
      }
    }
  });

  let app = new Vue ({
    el: '#app',
    components: {
      'like-component': likeComponent
    },
    data: {
      total: 0
    },
    methods: {
      incrementTotal: function() {
        this.total++;
      }
    }
  });



  // let vm = new Vue({
  //   el: '#app',
  //   data: {
  //     newItem: '',
  //     todos: []
  //   },
  //   // データが追加・削除・変更された時にローカルに保存
  //   watch: {
  //     todos: {
  //       handler: function() {
  //         localStorage.setItem('todos', JSON.stringify(this.todos));
  //       },
  //       deep: true
  //     }
  //   },
  //   // ロード時にローカルストレージからtodoを読み込む
  //   mounted: function() {
  //     this.todos = JSON.parse(localStorage.getItem('todos')) || [];
  //   },
  //   methods: {
  //     addItem: function() {
  //       let item = {
  //         title: this.newItem,
  //         isDone: false,
  //       };
  //       this.todos.push(item);
  //       this.newItem = '';
  //     },
  //     deleteItem: function(index) {
  //       if (confirm('are you sure?')) {
  //         this.todos.splice(index, 1);
  //       }
  //     },
  //     // 完了したtodoを全削除
  //     purge: function(index) {
  //       if (!confirm('are you sure?')) {
  //         return;
  //       }
  //       this.todos = this.remaining
  //     }
  //   },
  //   computed: {
  //     // 残件todoを返す
  //     remaining: function() {
  //       return this.todos.filter(function(todo) {
  //         return !todo.isDone;
  //       });
  //     }
  //   }
  // });
})();
