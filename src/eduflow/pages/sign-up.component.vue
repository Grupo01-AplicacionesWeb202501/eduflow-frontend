<script>
  import {UserService} from "../services/user.service.js";

  export default{
    name: "SignUpComponent",
    data(){
      return{
        name: "",
        email: "",
        password: "",
        type: "",
        userTypes: [
          { label: "Student", value: "student" },
          { label: "Teacher", value: "teacher" },
        ],
        userService: new UserService(),
      };
    },
    methods: {
      async handleSignUp(){
        try{
          const additionalInfo =
              this.type === "teacher"
              ? { subject: "maths", experience: 0 }
                  : {grade: "First", age: 16};
          const user = await this.userService.signUp(
              this.email,
              this.password,
              this.type,
              this.name,
              additionalInfo
          );
          alert(`User created successfully, ${user.name}`);
        }catch(error){
          alert('Error creating user: ' + error.message);
        }
      },
    },
  };
</script>

<template>
  <div class="auth-container">
    <header>
      <h1>Welcome to Eduflow</h1>
    </header>
    <div class="form-card">
      <h2>Register</h2>
      <pv-input-text
          v-model="name"
          label="Name"
          placeholder="Enter your name"
      ></pv-input-text>
      <pv-input-text
          v-model="email"
          label="Email"
          placeholder="Enter your email"
      ></pv-input-text>
      <pv-input-text
          v-model="password"
          label="Password"
          placeholder="Enter your password"
          type="password"
      ></pv-input-text>
      <pv-dropdown
          v-model="type"
          :options="userTypes"
          label="User Type"
          placeholder="Select user type"
      ></pv-dropdown>
      <button class="auth-btn" @click="handleSignUp">Sign Up</button>
      <p class="switch-link">
        Already have an account?
        <router-link to="/sign-in">Sign in</router-link>
      </p>
    </div>
  </div>
</template>

<style scoped>
.auth-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw; /* Ancho total de la ventana */
  height: 100vh; /* Alto total de la ventana */
  background-color: #1e1e1e; /* Color de fondo oscuro */
  margin: 0;
  padding: 0;
}

.form-card {
  background: #315a86;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
  text-align: center;
}

.auth-btn {
  width: 100%;
  margin-top: 1rem;
  padding: 0.5rem;
  border: none;
  background-color: #0288d1;
  color: #ffffff;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
}

.auth-btn:hover {
  background-color: #5969da;
}

.switch-link {
  margin-top: 1rem;
  font-size: 0.9rem;
}

@media screen and (min-width: 768px) {
  .auth-container {
    padding: 2rem;
    gap: 3rem;
  }

  .form-card {
    max-width: 500px;
  }

  .auth-btn {
    font-size: 1.1rem;
  }
}
</style>