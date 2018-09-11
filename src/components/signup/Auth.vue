<template>
  <section class="signup-form">
    <div>
    <button class="signup-button" @click="type = isSignUp ? 'signIn' : 'signUp'">
      {{
        isSignUp
          ? "Already a user? Click here to sign in"
          : "New? Click here to sign up"
      }}
    </button>
    </div>
    <div>
    <form @submit.prevent="handleSubmit">
      <FormControl label="email">
        <input 
            autocomplete="email" 
            v-model="credentials.email">
      </FormControl>
      <FormControl label="password">
        <input 
          :type="show ? 'text' : 'password'"
          autocomplete="current-password" 
          v-model="credentials.password">
        <!-- <button class='password-button'
          @click="show = !show"
          type="button"
        >
          {{ show ? 'Hide Password' : 'Show Password' }}
        </button> -->
      </FormControl>
      <FormControl>
        <button class='submit-button' type="submit">
          {{ label }}
        </button>
      </FormControl>
    </form>
  </div>
  </section>
</template>

<script>
import { signUp, signIn } from '../../services/api';
import FormControl from './FormControl';
export default {
  props: {
    onUser: Function
  },
  components: {
    FormControl
  },
  data() {
    return {
      credentials: {
        email: '',
        password: ''
      },
      show: false,
      type: 'signIn',
      error: null
    };
  },
  computed: {
    isSignUp() {
      return this.type === 'signUp';
    },
    label() {
      return this.isSignUp ? 'Sign Up' : 'Sign In';
    }
  },
  watch: {
    type(newType, oldType) {
      if(newType !== oldType) {
        this.error = null;
      }
    }
  },
  methods: {
    handleSubmit() {
      this.error = null;
      const action = this.isSignUp ? signUp : signIn;
      action(this.credentials)
        .then(user => {
          this.onUser(user);
          this.$router.push('/tweets');
        })
        .catch(err => {
          this.error = err;
        });
    }
  }
};
</script>

<style scoped>
.signup-form {
  width: 500px;
  text-align: left;
  font-family: 'Open Sans';
  padding-top: 50px;
}
section {
  display: flex;
  flex-direction: column;
  margin: auto;
}
button {
  display: block;
}
input {
  display: block;
  margin-top: 20px;
  margin-bottom: 20px;
}
.submit-button {
    background: #fa504d;
    border: none;
    color: white;
    text-transform: uppercase;
    letter-spacing: 2px;
    padding: 10px;
    font-weight: 600;
    box-shadow: -4px 2px 20px -6px rgba(0,0,0,0.75);
    transition: all .2s ease-in-out;
    margin-bottom: 200px;
}
.signup-button {
    background: #fa504d;
    border: none;
    color: white;
    text-transform: uppercase;
    letter-spacing: 2px;
    padding: 10px;
    font-weight: 600;
    box-shadow: -4px 2px 20px -6px rgba(0,0,0,0.75);
    transition: all .2s ease-in-out;
    margin-bottom: 20px;
}

.password-button {
    background: #fa504d;
    border: none;
    color: white;
    text-transform: uppercase;
    letter-spacing: 2px;
    padding: 5px;
    font-weight: 600;
    box-shadow: -4px 2px 20px -6px rgba(0,0,0,0.75);
    transition: all .2s ease-in-out;
    margin-bottom: 20px;
}

button:hover {
    transform: scale(1.1); 
} 

@supports ((display: -ms-grid) or (display: grid)) {
    @media (max-width: 1080px) {
        .signup-form {
          width: 80%;
        }
    input {
      width: 80%;
    }
    }
}
</style>