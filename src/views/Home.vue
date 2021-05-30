<template>
  <div class="container">
    <Capa/>
    <main>
      <Sobre/>
      <Projetos/>
      <Servicos/>
    </main>
  </div>
</template>

<script>
import Capa from '@/components/Capa.vue'
import Sobre from '@/components/Sobre.vue'
import Projetos from '@/components/Projetos.vue'
import Servicos from '@/components/Servicos.vue'

export default {
  components: {
    Capa,
    Sobre,
    Projetos,
    Servicos
  }
}
</script>
