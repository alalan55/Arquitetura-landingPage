<template>
  <div class="container">
    <Navbar/>
    <Capa/>
    <main>
      <Sobre/>
      <Projetos/>
      <Servicos/>
    </main>
  </div>

</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Capa from '@/components/Capa.vue'
import Sobre from '@/components/Sobre.vue'
import Projetos from '@/components/Projetos.vue'
import Servicos from '@/components/Servicos.vue'

export default {
  components: {
    Navbar,
    Capa,
    Sobre,
    Projetos,
    Servicos
  }
}
</script>

<style>


</style>
