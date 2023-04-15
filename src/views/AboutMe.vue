
<script setup>
import {ref} from "vue"
const languages = ref([
    {
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
        id: "html"
    },
    {
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        id: "css"
    },
    {
        link: "https://sass-lang.com/documentation/",
        id: "sass"
    },
    {
        link: "https://getbootstrap.ru/docs/5.1/getting-started/introduction/",
        id: "bootstrap"
    },
    {
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        id: "js"
    },
    {
        link: "https://api.jquery.com/",
        id: "jquery"
    },
    {
        link: "https://www.php.net/manual/en/index.php",
        id: "php"
    },
    {
        link: "https://www.latex-project.org/help/documentation/",
        id: "latex"
    },
    {
        link: "https://www.lua.org/docs.html",
        id: "lua"
    },
    {
        link: "https://dev.mysql.com/doc/",
        id: "mysql"
    },
    {
        link: "https://learn.microsoft.com/ru-ru/dotnet/csharp/",
        id: "cs"
    },
    {
        link: "https://vuejs.org",
        id: "vue"
    }  
]);
const programs = ref([
    {
        link: "https://visualstudio.microsoft.com/",
        id: "visualstudio"
    },
    {
        link: "https://code.visualstudio.com",
        id: "vscode"
    },
    {
        link: "https://www.figma.com/",
        id: "figma"
    },
    {
        link: "https://github.com",
        id: "github"
    },
    {
        link: "https://git-scm.com/",
        id: "git"
    },
    {
        link: "https://www.blender.org",
        id: "blender"
    },
    {
        link: "https://www.adobe.com/products/illustrator.html",
        id: "ai"
    },
    {
        link: "https://www.adobe.com/products/photoshop.html",
        id: "ps"
    },
    {
        link: "https://www.adobe.com/products/aftereffects.html",
        id: "ae"
    },
    {
        link: "https://learn.microsoft.com/en-us/powershell/",
        id: "powershell"
    },
    {
        link: "https://www.gnu.org/software/bash/manual/bash.html",
        id: "bash"
    }
]);
</script>

<template>
    <div class="main-container">
        <router-link to="/"><img class="arrow" src="../assets/icons/left-arrow.png"></router-link>
        <div class="Info-wrapper">
            <div class="Info-content">
                <ul class="main-table">
                    <li class="main-info"><h1>About me</h1></li>
                    <li class="add-info"><h1>I'm speak on Rus and Eng</h1></li>
                    <li class="add-info"><h1>I'm studying php, python now</h1></li>
                    <li class="add-info"><h1>Skills:</h1></li>
                </ul>
                <h2 class="languages">programming languages and markup languages:</h2>
                
                <div class="skill-container">
                    <a v-for="skill in languages" :href="`${skill.link}`" target="_blank">
                    <img :src='`https://skillicons.dev/icons?i=${skill.id}`' :alt="`${skill.id}`">
                    </a>
                </div>

                <h2 class="programs">Programs:</h2>

                <div class="program-container">
                    <a v-for="program in programs" :href="`${program.link}`" target="_blank">
                    <img :src='`https://skillicons.dev/icons?i=${program.id}`' :alt="`${program.id}`">
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>


.skill-container {
    display: inline-flex;
    flex-wrap: wrap;
    gap: 0.8rem;
    margin-bottom: 20px;
}
.skill-container > a {
    border-radius: 12px;
    width: 2.5rem;
    height: 2.5rem;
    transition: all 0.3s;
    margin-left: 15px;
}
.skill-container > a > img {
    width: 48px;
    height: 48px;
    transition: all 0.3s;
    border-radius: 12px;
}
.skill-container > a > img:hover {
    box-shadow: 0px 0px 10px 10px rgba(255, 255, 255,1);
    transform: scale(1.2);
}

.program-container {
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
}
.program-container > a {
    border-radius: 12px;
    width: 2.5rem;
    height: 2.5rem;
    transition: all 0.3s;
    margin-left: 15px;
}

.program-container > a > img {
    width: 48px;
    height: 48px;
    transition: all 0.3s;
    border-radius: 12px;
}
.program-container > a > img:hover {
    
    box-shadow: 0px 0px 10px 10px rgba(255, 255, 255,1);
    transform: scale(1.2);
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
.main-container {
    height: calc(150vh - 14rem);
    font-size: 1.5rem;
    margin-top: 40px;
}
#Info {
    width: 100%;
    margin: auto;
    transition: 2s;
}
.Info-wrapper {
    width: 900px;
    display: flex;
    float: left;
    margin-left: 150px;
    margin-top: 5vh;
}
.main-info {
    color: white;
    text-shadow: 15px 10px 10px black;
    cursor: default;
    margin-bottom: 20px;
    font-size: 25px;
    font-weight: bolder;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    list-style-type: none;
}
.add-info {
    color: white;
    text-shadow: 15px 10px 10px black;
    cursor: default;
    margin-bottom: 15px;
    font-size: 20px;
    font-weight: bolder;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    list-style-type: none;
}
.main-table {
    color: white;
    display: block;
    font-size: 15px;
    font-weight: bolder;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
.languages {
    color: white;
    text-shadow: 15px 10px 10px black;
    cursor: default;
    margin-bottom: 20px;
    font-size: 30px;
    font-weight: bolder;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
.programs {
    color: white;
    text-shadow: 15px 10px 10px black;
    cursor: default;
    margin-bottom: 20px;
    font-size: 30px;
    font-weight: bolder;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
@media screen and (max-width: 700px) {
    .skill-container { 
        display: inline-flex;
        flex-wrap: wrap;
        gap: 12px;
        margin-bottom: 10px;
    }
    .skill-container > a {
        border-radius: 12px;
        width: 40px;
        height: 40px;
        transition: all 0.3s;
        margin-left: 6px;
    }
    .skill-container > a > img {
        width: 35px;
        height: 35px;
        transition: all 0.3s;
        border-radius: 12px;
    }
    .skill-container > a > img:hover {
        box-shadow: 0px 0px 10px 10px white;
        transform: scale(1.2);
    }

    .program-container {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
    }
    .program-container > a {
        border-radius: 12px;
        width: 40px;
        height: 40px;
        transition: all 0.3s;
        margin-left: 6px;
    }

    .program-container > a > img {
        width: 35px;
        height: 35px;
        transition: all 0.3s;
        border-radius: 12px;
    }
    .program-container > a > img:hover {
        
        box-shadow: 0px 0px 10px 10px white;
        transform: scale(1.2);
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
        height: calc(100vh - 14rem);
        font-size: 1.5rem;
        margin-top: 0px;
    }
    #Info {
        width: 100%;
        margin: auto;
        transition: 2s;
    }
    .Info-wrapper {
        width: 100%;
        height: 100%;
        margin-left: 20px;
        margin-top: 3vh;
    }
    .main-info {
        color: white;
        text-shadow: 15px 10px 10px black;
        cursor: default;
        margin-bottom: 10px;
        font-size: 10px;
    }
    .add-info {
        color: white;
        text-shadow: 15px 10px 10px black;
        cursor: default;
        margin-bottom: 10px;
        font-size: 10px;
    }
    .main-table {
        color: white;
        display: block;
        font-size: 15px;
    }
    .languages {
        color: white;
        text-shadow: 15px 10px 10px black;
        cursor: default;
        margin-bottom: 20px;
        font-size: 15px;
    }
    .programs {
        color: white;
        text-shadow: 15px 10px 10px black;
        cursor: default;
        margin-bottom: 20px;
        font-size: 15px;
    }
}
</style>