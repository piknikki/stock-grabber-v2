<template>
  <div id="app">

    <div id="nav">
      <span>
        <img class="logo" src="./assets/logo.png" alt="Stock Grabber logo">
        <router-link to="/">Stock Grabber</router-link>
      </span>
       |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.logo {
  width: 20px;
  padding-right: 10px;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    font-size: 1.2em;
    color: #2c3e50;
    text-decoration: none;
    justify-content: center;
    margin: 20px;

    &.router-link-exact-active {
      color: #14A9BF;

    }
  }
}
</style>
