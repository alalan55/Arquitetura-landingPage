<template>
  <header>
    <nav>
      <div class="logo">
        <span>LOGO.CO</span>
      </div>
      <ul class="links">
        <li><a href="">Home</a></li>
        <li><a href="">Sobre</a></li>
        <li><a href="">Projetos</a></li>
        <li><a href="">Fale conosco</a></li>
      </ul>
      <button class="fancy-burger" @click="nav">
        <span class="box"></span>
        <span class="rectangle rectangle--top rectangle--small"></span>
        <span class="rectangle rectangle--middle"></span>
        <span class="rectangle rectangle--bottom rectangle--small"></span>
      </button>
    </nav>
  </header>
</template>
<script>
export default {
  data() {
    return {
      active: false,
      active2: false,
    };
  },
  methods: {
    closeNavbar() {},

    nav() {
      let btnHamburguer = document.querySelector(".fancy-burger");
      let overlay = document.querySelector(".links");

      this.active == true ? (this.active = false) : (this.active = true);

      btnHamburguer.querySelectorAll("span").forEach((span) => {
          span.classList.toggle("open");
      });

      this.active ? overlay.style.left = 0 : overlay.style.left = '-100%'
    },
  },
};
</script>
<style scoped>
header {
  width: 100%;
  height: 70px;
  padding: 1em;
}
nav {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}
.logo span{
    font-weight: 700;
}
.fancy-burger{
 display: none;
  position: relative;
  width: var(--button-width);
  height: var(--button-height);
  border: 0;
  background: transparent;
  outline: none;
  cursor: pointer;
}
.rectangle {
  position: absolute;
  height: var(--rectangle-height);
  background: black;
  border-radius: var(--rectangle-radius);
  transition: transform var(--transition);
}
.rectangle--small {
  width: calc(var(--button-width) / 2);
}
.rectangle--top {
  top: 0;
  left: 0;
  transform-origin: top left;
}
.rectangle--top.open {
  transform: translateX(var(--translate)) rotate(45deg);
}
.rectangle--middle {
  top: 50%;
  left: 0;
  width: var(--button-width);
  transform: translatey(-50%);
}
.rectangle--middle.open {
  transform: translatey(-50%) rotate(-45deg);
}
.rectangle--bottom {
  bottom: 0;
  right: 0;
  transform-origin: bottom right;
}
.rectangle--bottom.open {
  transform: translateX(calc(-1 * var(--translate))) rotate(45deg);
}

.links li {
  display: inline-block;
  margin: 0 0.5em;
 
}
.links li a {
  text-decoration: none;
   padding: .5em;
   color: black;
   transition: .1s ease-in;
}
.links li a:hover{
    background: var(--buton-capa-color);
    color: white;
}

.bars {
  display: none;
  cursor: pointer;
}

@media screen and (max-width: 600px) {
  .fancy-burger{
      display: block;
  }
  .links {
    position: fixed;
    width: 70%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    top: 0;
    left: -100%;
    text-align: center;
    transition: all 0.5s;
    background: rgba(0, 0, 0, 0.93);
    z-index: 10;
  }
  .links li {
    margin: 2em 0;
  }
  .links li a {
    color: white;
  }
}
</style>