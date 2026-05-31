<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  emits: ['delete-post'],
}
</script>

<template>
  <div class="card h-100">
    <img :src="post.imageUrl" :alt="post.title" class="card-img-top" />
    <div class="card-body">
      <h5 class="card-title">{{ post.title }}</h5>
      <p class="card-text">{{ post.text }}</p>
      <p class="card-text">
        <small class="text-muted">{{ post.date }}</small>
      </p>
      <button type="button" class="btn btn-danger" @click="$emit('delete-post')">
        Удалить
      </button>
    </div>
  </div>
</template>
