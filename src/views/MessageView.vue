<template>
    <div class="messages">
        <h1>Messages</h1>
    </div>
    <div>
        <Message variant="info" message="This is an informational message" />
        <Message variant="success" message="This is a success message" />
        <Message variant="warning" message="This is a warning message" />
        <Message variant="error" message="This is an error message" />
      </div>
</template>

<script>
import Message from '@/components/MessageComponent.vue';

export default {
  name: 'App',
  components: {
    Message,
  },
};
</script>

<style scoped>
.messages{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 150px;
}
</style>