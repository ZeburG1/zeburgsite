<template>
    <div class="main-container">    
        <div class="main-container-center">
            <h1 class="welcome">Welcome</h1>
            <ul class="puncts">
                <router-link to="/AboutMe" class="hrefs"><li class="punct">About me</li></router-link>
                <router-link to="/MyWorks" class="hrefs"><li class="punct">My work's</li></router-link>
            </ul>
        </div>
    </div>
</template>

<style scoped>
.main-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 50px;
    margin-top: -8vh;
    height: calc(65vh - 1rem);
    font-size: 2rem;
}
.main-container-center {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 150px;
    margin-top: 20vh;
}
.welcome {
    width: 150px;
    height: 70px;
    color: White;
    cursor: default;
    text-shadow: 15px 10px 10px black;
    font-size: 70px;
    font-weight: bolder;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.puncts {
    width: 210px;
    color: White;
    margin-top: 10vh;
    margin-left: 40px;
    font-size: 40px;
    font-weight: bolder;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    cursor: pointer;
}
.punct {
    color: White;
    height: 50px;
    margin-bottom: 30px;
    text-shadow: 15px 7px 7px black;
    transition: 0.4s;
    cursor: pointer;
}
.hrefs {
    text-decoration: none;
    cursor: pointer;
}
li {
    transition: all 0.3s ease-in-out;
    list-style-type: none;
}
.punct:hover {
    text-shadow: 15px 12px 12px black;
    transform: scale(1.1);
    cursor: pointer;
}

@media screen and (max-width: 700px) {
    .main-container {   
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        height: calc(65vh - 1rem);
        font-size: 2rem;
        margin-left: 0;
        margin-bottom: 0;
        margin-right: 0;
        margin: 0;
    }
    .main-container-center {
        display: grid;
        float: left;
        margin-top: 3vh;
        margin: 0;
    }
    .welcome {
        width: 100px;
        height: 50px;
        color: White;
        cursor: default;
        margin-left: 10%;
        font-size: 40px;
    }
    .puncts {
        color: White;
        font-size: 30px;
        font-weight: bolder;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        cursor: pointer;
    }
    .punct {
        width: fit-content;
        color: White;
        height: fit-content;
        margin-bottom: 30px;
        text-shadow: 15px 7px 7px black;
        transition: 0.4s;
        cursor: pointer;
    }
    .hrefs {
        text-decoration: none;
        cursor: pointer;
    }
    li {
        transition: all 0.3s ease-in-out;
        list-style-type: none;
    }
    .punct:hover {
        text-shadow: 15px 12px 12px black;
        transform: scale(1.1);
        cursor: pointer;
    }
}
@media screen and (max-width: 300px) {
.welcome {
        width: 100px;
        height: 50px;
        color: White;
        cursor: default;
        margin-left: 12%;
        font-size: 40px;
    }
}
</style>