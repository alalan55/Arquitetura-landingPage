<template>
<div class="container">
    <div class="img__sobre">
        <img src="https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="">

    </div>
    <div class="texto__sobre">
        <div class="title__sobre">
        <span> We Are The Leaderin TheArchitectural</span>
        </div>
        <div class="descricao__sobre">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita debitis inventore reiciendis quam asperiores? Repudiandae culpa velit optio consequatur odio, repellat quod sint id dolor aperiam voluptatibus, atque veniam tempora!</p>
        </div>
        <div class="status__sobre">
            <div class="status">
                <span class="title__status">800</span>
                <span class="descricao__status">Projetos <br> Concluídos</span>
            </div>

             <div class="status">
                <span class="title__status">24</span>
                <span class="descricao__status">Prêmios <br> Ganhados</span>
            </div>

             <div class="status">
                <span class="title__status">10</span>
                <span class="descricao__status"> Anos de <br> Experiência</span>
            </div>
        </div>
    </div>
    
</div>
    
</template>
<script>
export default {
    
}
</script>
<style scoped>
.container{
    /* height: 100vh; */
    padding:var(--padding-uiversal);
    display: flex;
    flex-wrap: wrap;
}
.container>div{
    flex: 1 1 300px;
}
.img__sobre{
    /* max-width: 30%; */
    /* min-width: 30%; */
    height: 600px;
    overflow: hidden;
}
.img__sobre > img{
    object-fit: cover;
    width: 100%;
    height: 100%;
}
.texto__sobre{
    padding: 1.5em;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.title__sobre{
    margin: 1.5em 0;
}
.title__sobre span{
    font-size: var(--F1);
    font-weight: 200;
}
.descricao__sobre{
     margin: 1.5em 0;
}
.status__sobre{
    display: flex;
    align-items: center;
    justify-content: center;
}
.status{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 100%;
}
.status >span{
    display: block;
}
.title__status{
    font-weight: 700;
    margin: .5em 0;
    font-size: 1.6rem;
}

@media screen and (max-width: 632px){
    .title__sobre span{
        font-size: var(--F2);
    }
}
@media screen and (max-width: 450px){
    .container{
        padding: var(--pading-universal-mobile);
    }
    .title__sobre span{
        font-size: var(--F3);
    }
    .title__status{
        font-size: 1em;
    }
    .descricao__status{
        font-size: .7em;
    }
}
</style>