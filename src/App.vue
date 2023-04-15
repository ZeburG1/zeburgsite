<script setup>
</script>
<template>
<!-- Header -->
<header class="header">
    <div>
        <img class="ZeburG-icon" src="../src/assets/icons/icon_64x64.png" alt="ZeburG">
    </div>
</header>

<!-- Main -->
<main>
    <router-view v-slot="{Component}">
      <transition name="slide" mode="out-in">
        <component :is="Component" :key="$route.path"></component>
      </transition>
    </router-view>
</main>

<!-- Footer -->
<footer class="footer">
    <div class="footer-content">
        <a class="footer-icons" href="https://github.com/ZeburG1"><img class="icon" src="../src/assets/icons/github-icon.webp"></a>
        <a class="footer-icons" href="https://discordapp.com/users/299807775326732288/"><img class="icon" src="../src/assets/icons/discord-icon.webp"></a>
    </div>
</footer>
</template>

<style scoped>
.header {
    width: 100%;
    height: 100px;
    background-color: rgb(22, 22, 22);
    display: flex;
}
.ZeburG-icon {
    margin-left: 18px;
    margin-top: 18px;
    transition: 0.1s;
}
.ZeburG-icon:hover {
    transform: rotate(-10deg);
}

.footer {
    position: fixed;
    width: 100%;
    bottom: 0;
    height: 100px;
    box-shadow: 0px -1px 10px white;
    background-color: rgb(22, 22, 22);
}
.footer-content {
    display: flex;
    float: left;
    margin-top: 30px;
    margin-left: 5px;
}
.footer-icons {
    margin-left: 35px;
}
.icon {
    width: 44px;
    height: 44px;
    transition: 0.5s;
}
.icon:hover {
    transform: scale(1.1);
}
.slide-enter-active{
    transition: 0.7s;
} 
.slide-leave-active {
    transition: 0.8s;
}
.slide-enter-from{
    transition: 0.8s;
    transform: translateX(-700px);
}
.slide-leave-to {
    transition: 0.8s;
    transform: translateX(-1000px);
}
@media screen and (max-width: 700px) {
    
    #app {
        height: 100%;
    }
    
    .header {
        width: 100%;
        height: 60px;
        background-color: rgb(22, 22, 22);
        display: flex;
    }
    .ZeburG-icon {
        width: 32px;
        margin-left: 15px;
        margin-top: 15px;
        transition: 0.1s;
    }
    .ZeburG-icon:hover {
        transform: rotate(-10deg);
    }

    .footer {
        widows: 100%;
        height: 60px;
        box-shadow: 0px -1px 10px white;
        background-color: rgb(22, 22, 22);
    }
    .footer-content {
        display: flex;
        float: left;
        margin-left: 5px;
    }
    .footer-icons {
        
        margin-top: -10%;
        margin-left: 25px;
    }
    .icon {
        width: 25px;
        height: 25px;
        transition: 0.5s;
    }
    .icon:hover {
        transform: scale(1.1);
    }
    .slide-enter-active{
        transition: 0.7s;
    } 
    .slide-leave-active {
        transition: 0.8s;
    }
    .slide-enter-from{
        transition: 0.8s;
        transform: translateX(-700px);
    }
    .slide-leave-to {
        transition: 0.8s;
        transform: translateX(-1000px);
    }
}
</style>