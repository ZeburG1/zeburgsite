<template>
    <div class="main-container">
        <router-link to="/" ><img class="arrow" src="../assets/icons/left-arrow.png"></router-link>
        <h1 class="work">In progress...</h1>
    </div>
</template>

<style scoped>
.main-container {
    font-size: 2rem;
}
.work {
    display: flex;
    height: 70px;
    color: White;
    cursor: default;
    text-shadow: 15px 10px 10px black;
    font-size: 70px;
    margin-top: 7%;
    margin-left: 10%;
    font-weight: bolder;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.arrow {
    display: flex;
    padding-top: 70px;
    margin-left: 30px;
    transition: 0.3s;
    cursor: pointer;
}
.arrow:hover {
    transform: scale(1.2);
}
@media screen and (max-width: 700px) {
    .container {
        font-size: 1.5rem;
    }
}
/* eslint-disable */
</style>