<template>
  <div class="capa">
    <div class="textos__capa">
      <div class="elementos__texto">
        <div class="titulo__capa">
          <h1>We Believe in Great Architeture</h1>
        </div>
        <div class="descricao__capa">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nobis
            repellat dolorem quam corrupti tenetur laboriosam repellendus
            incidunt quas, nemo, in facere! Culpa, harum expedita at voluptates
            cumque eos cupiditate.
          </p>
        </div>
        <button class="btn__projetos">Projetos</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.capa {
  height: calc(100vh - 70px);
  background: url(https://images.pexels.com/photos/1758672/pexels-photo-1758672.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260)
    no-repeat;
  background-size: cover;
  background-attachment: fixed;
}
.elementos__texto {
  max-width: 80%;
}
.textos__capa {
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
.titulo__capa {
margin: 2em 0;
}
.titulo__capa h1{
    font-size: 4em;
    font-weight: 300;
    transition: .2s ease-in;
}
.descricao__capa{
    margin: 2em 0;
}
.descricao__capa p{
    font-weight: 300;
}
.btn__projetos{
    padding: 1em 2.5em;
    color: white;
    background: var(--buton-capa-color);
    border: none;
    transition: .2s ease;   
}
.btn__projetos:hover{
    background: var(--buton-capa-color--hover);
}

@media screen and (max-width: 700px) {
  .textos__capa {
    max-width: 100%;
  }
}

@media screen and (max-width: 500px) {
 .titulo__capa h1{
     font-size: 2.5rem;
 }
 .descricao__capa p{
     text-align: justify;
     font-size: .8em;
 }
}
</style>