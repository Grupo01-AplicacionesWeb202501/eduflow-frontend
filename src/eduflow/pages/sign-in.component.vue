<script>

  import {UserService} from "../services/user.service.js";

  export default{
    name: "SignInComponent",
    data(){
      return{
        email: '',
        password: '',
        userService: new UserService(),
      };
    },
    methods:{
      async handleSignIn(){
        try{
          const user = await this.userService.signIn(this.email, this.password);
          alert(`¡Welcome, ${user.name}!`);
        }catch(error){
          alert("Error signing in: " + error.message);
        }
      },
    },
  };
</script>

<template>
  <div class="signin-container">
    <header>
      <h1>Welcome to Eduflow</h1>
    </header>
    <div class="form-card">
      <h2>Sign In</h2>
      <pv-input-text
        v-model="email"
        label="Email"
        placeholder="Enter your email"></pv-input-text>
      <pv-input-text v-model="password"
                     label="Password"
                      type="password"
                     placeholder="Enter your password"></pv-input-text>
      <button class="signin-btn" @click="handleSignIn()">Sign In</button>
      <p class="switch-link">
        Don't have an account?
        <router-link to="/sign-up">Create one</router-link>
      </p>
    </div>
  </div>
</template>

<style>
 /* .signin-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #000;
  }
  .form-card {
    background: #024;
    color: white;
    padding: 2rem;
    border-radius: 10px;
    text-align: center;
    width: 300px;
  }
  .signin-btn {
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    border: none;
    background-color: #0288d1;
    color: white;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
  }
  .signin-btn:hover {
    background-color: #0277bd;
  }*/
</style>