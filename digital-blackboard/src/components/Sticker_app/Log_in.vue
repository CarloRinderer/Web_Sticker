<template>
  <v-img
      :width="300"
      aspect-ratio="16/9"
      src="https://upload.wikimedia.org/wikipedia/commons/6/6b/Deloitte_Deutschland_logo.svg"
  ></v-img>
  <v-container fluid="isFluid">
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="4">
        <v-card>
          <v-card-title class="headline">
            Log In
          </v-card-title>

          <v-card-text>
            <v-form @submit.prevent="login">
              <v-text-field
                  v-model="username"
                  label="Username"
                  outlined
                  required
              ></v-text-field>

              <v-text-field
                  v-model="password"
                  label="Password"
                  type="password"
                  outlined
                  required
              ></v-text-field>

              <v-btn type="submit" color="primary" class="mr-4">
                Log In
              </v-btn>

              <v-btn @click="resetForm">
                Reset
              </v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Log_in",

  data() {
    return {
      username: '',
      password: '',
      isFluid: true,
    };
  },
  methods: {
    login() {
      // Perform login logic here
      console.log('Logging in...');
      console.log('Username:', this.username);
      console.log('Password:', this.password);

      // You can add your authentication logic here
      // For simplicity, let's just reset the form for now
      this.resetForm();
    },
    resetForm() {
      this.username = '';
      this.password = '';
    },
  },
};
</script>

<style scoped>

</style>