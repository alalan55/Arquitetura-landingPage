<template>
<div class="container">
    <div class="descricao__servicos">
        <span>We Provide Designer  <br> for Your Home Project</span>
    </div>
    <div class="cards">
        <div class="card">
            <div class="title__card">
                <span>Arquitetura</span>
            </div>
            <div class="descricao__card">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat optio cupiditate commodi, repellendus unde iste.</p>
            </div>
         <a href="" class="btn__info"> Leia mais <i class="fas fa-arrow-right"></i></a>
        </div>

          <div class="card">
            <div class="title__card">
                <span>Design de Interior</span>
            </div>
            <div class="descricao__card">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat optio cupiditate commodi, repellendus unde iste.</p>
            </div>
        <a href="" class="btn__info"> Leia mais <i class="fas fa-arrow-right"></i></a>
        </div>

          <div class="card">
            <div class="title__card">
                <span>Construções</span>
            </div>
            <div class="descricao__card">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat optio cupiditate commodi, repellendus unde iste.</p>
            </div>
            <a href="" class="btn__info"> Leia mais <i class="fas fa-arrow-right"></i></a>
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
    padding: var(--padding-uiversal);
}
.descricao__servicos{
    margin: 1.5em 0;
}
.descricao__servicos span{
    font-size: var(--F1);
    font-weight: 200;
}
.cards{
    display: flex;
    flex-wrap: wrap;
   
}
.cards>div{
    flex: 1 1 300px;
     margin: 1em .5em;
     border: 1px solid var(--B2);
     padding: .5em;
}
.title__card{
    margin: .5em 0;
}
.title__card span{
    font-weight: 500;
    font-size: var(--F4);
}
.descricao__card{
    margin-bottom: 1em;
}
.btn__info{
    padding: .4em;
    border: 1px solid;
    display: block;
    margin-bottom: .5em;
    text-align: center;
    text-decoration: none;
    border: 1px solid var(--B2);
    color: var(--B3);
    transition: .1s ease-in;
}
.btn__info:hover{
    border: none;
    background: var(--B3);
    color: white;
}

@media screen and (max-width: 450px){
    .container{
        padding: var(--pading-universal-mobile);
    }
    .descricao__servicos span{
        font-size: var(--F2);
    }
}

</style>