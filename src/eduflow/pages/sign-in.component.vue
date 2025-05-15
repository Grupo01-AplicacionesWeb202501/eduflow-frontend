<script>
  import {ref} from "vue";
  import {useRouter} from "vue-router";
  import {UserService} from "../services/user.service.js";

  export default {
    name: "SignInComponent",
    setup(){
      const email = ref("");
      const password = ref("");
      const router = useRouter();
      const userService = new UserService();

      const handleSignIn = async () => {
        try{
          const user = await userService.signIn(email.value, password.value);
          alert(`Welcome, ${user.name}!`);
          router.push("/dashboard");
        }catch(error){
          alert("Credentials are incorrect. Try again.");
        }
      };

      return { email, password, handleSignIn };
    },
  };
</script>

<template>
 <div class="signin-container">

    <div class="form-card">
      <h2>EduFlow Sign In</h2>
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
.signin-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #1e3a8a; /* Fondo azul */
  padding: 1rem;
}
</style>