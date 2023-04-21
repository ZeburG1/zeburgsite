<template>
    <div class="main-container">
        <router-link to="/" ><img class="arrow" src="../assets/icons/left-arrow.png"></router-link>
        <div class="cont">
            <h1 class="work">In progress...</h1>
        </div>
    </div>
</template>
<style scoped>
.main-container {
    width: 100%;
    height: calc(100vh - 14rem);
    font-size: 1.5rem;
    margin-top: 40px;
}
.cont {
    margin-left: 150px;
    margin-top: 5vh;
}
.work {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 70px;
    color: White;
    cursor: default;
    text-shadow: 15px 10px 10px black;
    font-size: 50px;
    margin-top: 0%;
    margin-left: 2%;
    font-weight: bolder;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin-bottom: 2%;
}
.arrow {
    display: flex;
    margin-top: 30px;
    margin-left: 30px;
    transition: 0.3s;
    cursor: pointer;
}
.arrow:hover {
    transform: scale(1.2);
}


@media screen and (max-width: 700px) {
    .work {
        display: flex;
        height: 70px;
        color: White;
        cursor: default;
        text-shadow: 15px 10px 10px black;
        font-size: 25px;
        font-weight: bolder;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    .cont {
        margin-left: 10px;
        margin-top: 3vh;
    }
    .arrow {
        width: 22px;
        height: 22px;
        display: flex;
        margin-top: 15px;
        margin-left: 15px;
        transition: 0.3s;
        cursor: pointer;
    }
    .arrow:hover {
        transform: scale(1.2);
    }
    .main-container {
        width: 100%;
        height: calc(100vh - 14rem);
        margin-top: 0px;
    }
}
</style>