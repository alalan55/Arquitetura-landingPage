<template>
<div class="container">
    <div class="descricao__projetos">
        <span>Alguns de Nossos Melhores Projetos</span>
    </div>
    <div class="projetos">
        <div class="card">
            <img src="https://images.pexels.com/photos/2119714/pexels-photo-2119714.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="">
         <div class="descricao">
                <span>Project name</span>
            </div>
        </div>

        <div class="card">
            <img src="https://images.pexels.com/photos/3663530/pexels-photo-3663530.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="">
         <div class="descricao">
                <span>Project name</span>
            </div>
        </div>

        <div class="card">
            <img src="https://images.pexels.com/photos/4082527/pexels-photo-4082527.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="">
            <div class="descricao">
                <span>Project name</span>
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
    padding: var(--padding-uiversal);
    background:var(--B1);
}
.projetos{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}
.projetos>div{
    flex: 1 1 300px;
}
.descricao__projetos{
    margin: 1.5em 0;
}
.descricao__projetos span{
     font-size: var(--F1);
    font-weight: 200;
}
.card{
    height: 600px;
    overflow: hidden;
    width: 30%;
    margin: .5em;
    position: relative;
}
.card>img{
    object-fit: cover;
    width: 100%;
    height: 100%;
}
.descricao{
    position: absolute;
    bottom: 0;
    color: white;
    padding: .8em;
    background: rgba(0,0,0, 0.5);
}

@media screen and (max-width: 450px){
    .container{
        padding: var(--pading-universal-mobile);
    }
}
</style>