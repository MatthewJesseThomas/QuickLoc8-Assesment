<template>
    <div>
        <div v-if="show" :class="['message', variant]">
            <div class="avatar">{{ getAvatarIcon() }}</div>
            <button class="close-btn" @click="dismiss">
                <svg class="close-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                        d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95 1.414-1.414z" />
                </svg>
                Close
            </button>
        </div>
        <ul>
            <li v-for="message in messages" :key="message.id">
                <p>{{ message.message }}</p>
                <p>{{ message.subject }}</p>
                <p>{{ message.display }}</p>
            </li>
        </ul>
    </div>
</template>
  
<script>
import jsonData from '../JSON/messages.json';

export default {
    data() {
        return {
            messages: [],
            show: true,
        };
    },
    mounted() {
        this.fetchMessages();
    },
    methods: {
        async fetchMessages() {
            try {
                this.messages = jsonData.messages;
            } catch (error) {
                console.error('Error fetching messages:', error);
            }
        },
        getAvatarIcon() {
            if (this.messages && this.messages.length > 0) {
                const type = this.messages[0].type;
                switch (type) {
                    case 'info':
                        return 'ℹ️';
                    case 'success':
                        return '✅';
                    case 'warning':
                        return '⚠️';
                    case 'error':
                        return '❌';
                    default:
                        return 'Avatar';
                }
            } else {
                return 'Avatar';
            }
        },
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