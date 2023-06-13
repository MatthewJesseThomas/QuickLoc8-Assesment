<template>
    <div v-if="show" :class="['message', variant]">
        <div class="avatar">{{ getAvatarIcon() }}</div>
        <button class="close-btn" @click="dismiss">
            <svg class="close-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                    d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95 1.414-1.414z" />
            </svg>
            Close
        </button>
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
        getAvatarIcon() {
            const firstLetter = this.message.charAt(0).toUpperCase();
            const isLetter = /^[A-Z]$/i.test(firstLetter);
            return isLetter ? firstLetter : '?';
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
    display: flex;
    align-items: center;
}

.avatar {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background-color: #cbd5e0;
    color: #718096;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 1rem;
    margin-right: 1rem;
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
    padding: 0;
    display: flex;
    align-items: center;
}

.close-icon {
    width: 1rem;
    height: 1rem;
    margin-right: 0.5rem;
}

@media only screen and (max-width: 768px) {
    .message {
        padding: 0.75rem;
        margin-bottom: 0.75rem;
    }

    .close-btn {
        top: 0.25rem;
        right: 0.25rem;
        font-size: 0.875rem;
    }
}
</style>