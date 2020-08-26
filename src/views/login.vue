<template>
  <div id="app">
    <div class="login-form">
      <h2>Ibsolution Game</h2>
      <form v-on:submit.prevent="onSubmit">
        <div class="container">
          <label for="name"><b>Username</b></label>
          <input name="name" v-model="userName" />
        </div>
        <div class="container">
          <label for="password"><b>Password</b></label>
          <input name="password" v-model="password" />
        </div>
        <button>Login</button>
      </form>
    </div>
  </div>
</template>
<script src="./login.js" />
