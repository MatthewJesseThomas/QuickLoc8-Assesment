<template>
    <div v-if="show" :class="['message', variant]">
        <button class="close-btn" @click="dismiss">Close</button>
        <p>{{ message }}</p>
    </div>
</template>
  
<script>
export default {
    name: 'Message',
    props: {
        variant: {
            type: String,
            default: 'info',
            validator: (value) => ['info', 'success', 'warning', 'error'].includes(value),
        },
        message: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            show: true,
        };
    },
    methods: {
        dismiss() {
            this.show = false;
        },
    },
};
</script>
  
<style scoped>
.message {
    padding: 1rem;
    border-radius: 4px;
    margin-bottom: 1rem;
    position: relative;
}

.info {
    background-color: #e2e8f0;
    color: #718096;
}

.success {
    background-color: #c6f6d5;
    color: #38a169;
}

.warning {
    background-color: #fffaf0;
    color: #dd6b20;
}

.error {
    background-color: #fed7d7;
    color: #e53e3e;
}

.close-btn {
    background: none;
    border: none;
    cursor: pointer;
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    font-size: 1rem;
    color: #718096;
    display: block;
    /* Added display property */
    padding: 0;
    /* Added padding property */
}
</style>
  