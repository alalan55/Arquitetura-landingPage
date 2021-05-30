<template>
    <div class="container">
         <div class="informacoes__contato">
             <div class="card__informacoes">
                <div class="titulo__card">
                    <span>Design your world <br> your way</span>
                </div>
                <form  class="form__contato">
                        <div class="inputs">
                            <input type="text" placeholder="Qual seu nome?">
                            <input type="email" placeholder="Qual seu e-mail?">
                        </div>
                        <div class="assunto">
                            <textarea name="message"  cols="30" rows="10"  id="mensagem"></textarea>    
                        </div>
                    
                </form>
             </div>

         </div>


    </div>
</template>

<script>
// import Navbar from '@/components/Navbar.vue'
    export default {
        components: {
         //   Navbar,
     }
    }
</script>

<style scoped>

.informacoes__contato{
    height: calc(100vh - 70px);
    display: flex;
    justify-content: center;
    align-items: center;
     padding: var(--F1);
}
.card__informacoes{
    border: 3px solid black;
    padding: 1em;
    max-width: 1200px;
    width: 100%;
}
.titulo__card{
    text-align: center;
}
.titulo__card span{
     font-size: var(--F1);
    font-weight: 200;
}
.form__contato {
    display: flex;
    flex-direction: column;
    padding: 1em;
}
.inputs{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.inputs input{
    padding: .7em;
    width: 100%;
    margin: 1em .2em;
    flex: 1 1 260px;
    background: none;
    border: 1px solid;
}
.assunto{
     width: 100%;
}
.assunto textarea{
     max-width: 100%;
     min-width: 99.5%;
     margin: 1em .2em;
    padding: .7em;
    background: none;
}

@media screen and (max-width: 596px){
    .container{
        padding: var(--pading-universal-mobile);
    }
    .informacoes__contato{
        padding:0 ;
    }
    .card__informacoes span{
        font-size: var(--F3);
    }
    textarea{
        width: 100%;
    }
}

</style>