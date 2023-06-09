<template>
    <div class="splash-screen" v-show="showSplashScreen">
        <div class="splash-screen__background"></div>
        <div class="splash-screen__content">
            <!-- Add your splash screen content here -->
            <img src="https://i.postimg.cc/dtzHb8Dh/Quikloc8-Logo.png" alt="logo" class="splash-screen__logo">
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showSplashScreen: true
        };
    },
    mounted() {
        setTimeout(() => {
            // Code to hide the splash screen after a certain duration
            this.hideSplashScreen();
        }, 3500); // Adjust the duration as needed
    },
    methods: {
        hideSplashScreen() {
            this.showSplashScreen = false;
        }
    }
}
</script>

<style scoped>
.splash-screen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
}

.splash-screen__background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    animation: pulseBackground 3.5s infinite;
}

.splash-screen__content {
    position: relative;
    z-index: 1;
    text-align: center;
}

.splash-screen__logo {
    max-width: 600px;
    animation: growLogo 3.5s infinite;
    height: auto;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    overflow: hidden;
}

.splash-screen__logo {
    position: relative;
}

.splash-screen__logo::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50px;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1));
}

@keyframes pulseBackground {
    0% {
        opacity: 0.5;
    }

    50% {
        opacity: 1;
    }

    100% {
        opacity: 0.5;
        display: none;
    }
    
}

@keyframes growLogo {
    0% {
        transform: scale(0.05);
    }

    50% {
        transform: scale(1.5);
    }

    100% {
        transform: scale(3);
    }
}
</style>