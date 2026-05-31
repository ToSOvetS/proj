<script>
import BlogPost from './components/BlogPost.vue'
import AddPostForm from './components/AddPostForm.vue'

export default {
  components: {
    BlogPost,
    AddPostForm,
  },
  data() {
    return {
      items: [
        {
          id: 1,
          title: 'Мой первый день в школе',
          text: 'Сегодня был интересный день: новые одноклассники и урок информатики.',
          date: '28.05.2026',
          imageUrl: 'https://picsum.photos/400/200?random=1',
        },
        {
          id: 2,
          title: 'Прогулка в парке',
          text: 'В выходные гуляли в парке. Погода была солнечной, настроение отличное.',
          date: '29.05.2026',
          imageUrl: 'https://picsum.photos/400/200?random=2',
        },
        {
          id: 3,
          title: 'Подготовка к контрольной',
          text: 'Повторял тему по Vue.js и Bootstrap. Завтра сдаём проект.',
          date: '30.05.2026',
          imageUrl: 'https://picsum.photos/400/200?random=3',
        },
      ],
    }
  },
  methods: {
    addPost(newPost) {
      this.items.push({
        id: Date.now(),
        title: newPost.title,
        text: newPost.text,
        date: new Date().toLocaleDateString('ru-RU'),
        imageUrl: `https://picsum.photos/400/200?random=${this.items.length + 10}`,
      })
    },
    deletePost(index) {
      this.items.splice(index, 1)
    },
  },
}
</script>

<template>
  <div class="container my-4">
    <h1 class="text-center mb-4">Личный блог</h1>

    <div class="row">
      <div class="col-12 col-lg-4 mb-4">
        <AddPostForm @add-post="addPost" />
      </div>

      <div class="col-12 col-lg-8">
        <div class="row">
          <div
            v-for="(item, index) in items"
            :key="item.id"
            class="col-12 col-md-6 mb-4"
          >
            <p class="text-muted small mb-2">
              <strong>{{ item.title }}</strong> — {{ item.date }}
            </p>
            <BlogPost :post="item" @delete-post="deletePost(index)" />
          </div>
        </div>

        <p v-if="items.length === 0" class="text-center text-muted">
          Пока нет постов. Добавьте первый!
        </p>
      </div>
    </div>
  </div>
</template>
