<script>
export default {
  emits: ['add-post'],
  data() {
    return {
      title: '',
      text: '',
    }
  },
  methods: {
    submitForm() {
      if (this.title.trim() === '' || this.text.trim() === '') {
        return
      }
      this.$emit('add-post', {
        title: this.title.trim(),
        text: this.text.trim(),
      })
      this.title = ''
      this.text = ''
    },
  },
}
</script>

<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">Новый пост</h5>
      <div class="mb-3">
        <label class="form-label">Заголовок</label>
        <input v-model="title" type="text" class="form-control" placeholder="Введите заголовок" />
      </div>
      <div class="mb-3">
        <label class="form-label">Текст</label>
        <textarea
          v-model="text"
          class="form-control"
          rows="4"
          placeholder="Напишите текст поста"
        ></textarea>
      </div>
      <button type="button" class="btn btn-primary" @click="submitForm">
        Добавить пост
      </button>
    </div>
  </div>
</template>
