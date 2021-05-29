<template>
  <div class="container">
    <Navbar/>
    <Capa/>
    <main>
      <Sobre/>
      <Projetos/>
    </main>
  </div>

</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Capa from '@/components/Capa.vue'
import Sobre from '@/components/Sobre.vue'
import Projetos from '@/components/Projetos.vue'

export default {
  components: {
    Navbar,
    Capa,
    Sobre,
    Projetos
  }
}
</script>

<style>


</style>
