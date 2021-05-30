<template>
  <div class="container">
    <div class="conteudo__arquitetura">
      <div class="capa__arquitetura">
        <div class="titulo__arquitetura">
          <span>Arquiteruta</span>
          <small>Lore ipsun, dolor met, lorem do lorem do lorem</small>
        </div>
      </div>
      <section class="conteudo">
        <div class="textos__conteudo">
          <span class="titulo__conteudo">Monsoon Architeture House</span>
          <p class="descricao__conteudo">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Accusantium nulla dolorum atque maxime aut cumque dicta, temporibus,
            vitae inventore sed voluptates ipsam consequatur perferendis
            assumenda corrupti amet beatae ex explicabo.
          </p>
        </div>
        <div class="imagem__conteudo">
          <img
            src="https://images.pexels.com/photos/1005644/pexels-photo-1005644.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
            alt=""
          />
        </div>
      </section>
      <section class="contatos">
          <Contato/>
      </section>
    </div>
  </div>
</template>
<script>
import Contato from "@/views/Contato.vue"
export default {
  components: {
    Contato
  },
};
</script>
<style scoped>
.conteudo__arquitetura {
  height: auto;
}

.capa__arquitetura {
  height: calc(100vh - 70px);
  background: url(https://images.pexels.com/photos/227675/pexels-photo-227675.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260)
    no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
}
.titulo__arquitetura {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1em;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: white;
  transition: 0.2s ease-in;
}
.titulo__arquitetura span {
  font-size: 4em;
  font-weight: 300;
  transition: 0.2s ease-in;
}

.conteudo {
  padding: var(--padding-uiversal);
  display: flex;
  flex-wrap: wrap;
}
.contatos{
    background: var(--B1);
}
.conteudo>div{
    flex: 1 1 400px;
}
.imagem__conteudo{
    width: 100%;
    height: 500px;
    overflow: hidden;
}
.imagem__conteudo img{
    height: 100%;
    width: 100%;
    object-fit: cover;
}
.textos__conteudo{
    margin: 1.5em 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.textos__conteudo span{
       font-size: var(--F1);
    font-weight: 200;
}
.descricao__conteudo{
     margin: 1.5em 0;
}

@media screen and (max-width: 700px) {
  .titulo__arquitetura {
    max-width: 100%;
  }
}

@media screen and (max-width: 500px) {
  .titulo__arquitetura span {
    font-size: 2.5rem;
  }
}

@media screen and (max-width: 450px){
    .conteudo{
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