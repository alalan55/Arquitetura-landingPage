<template>
  <div class="container">
    <Navbar/>
    <Capa/>
    <main>
      <Sobre/>
    </main>
  </div>

</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Capa from '@/components/Capa.vue'
import Sobre from '@/components/Sobre.vue'

export default {
  components: {
    Navbar,
    Capa,
    Sobre
  }
}
</script>

<style>


</style>
