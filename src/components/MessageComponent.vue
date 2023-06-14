<template>

    <div class="text-align-center">
        <div class="container">
            <div style="display: inline-block;">
                <div class="row" v-for="message in messages" :key="message.id">
                    <div class="row">
                        <p>{{ message.message }}</p>
                        <p>{{ message.subject }}</p>
                        <p>{{ message.display }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import jsonData from '../JSON/messages.json';

export default {
    data() {
        return {
            messages: jsonData,
            show: true,
        };
    }
};
</script> 

<style scoped>
/* Styles for the message component and avatar */
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

/* Styles for different message types */
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

/* Styles for the close button */
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

/* Responsive styles */
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