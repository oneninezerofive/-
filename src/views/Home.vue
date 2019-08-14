<template>
  <div class="home">
    <Header />
    <Mian1 />
    <Footer />
    
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Mian1 from '../components/main/Mian1.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'home',
  components: {
    Header,
    Mian1,
    Footer
  }
}
</script>
<style>
  .home{
    width: 100%;
    height: 100%;
  }
</style>

