<template id="state-form">

    <form @submit.prevent="handleSubmit">
      <div class="flex-box">
        <div class="flex-one">
          <label>
            <select v-model="choice.state" class="soflow-color" required>
              <option disabled value="">Select a state</option>
              <option
                v-for="state in states"
                :key="state.id"
                :value="state.id">
                {{state.name}}
              </option>
            </select>
            <br>
          </label>
        </div>
        <div class="flex-two">
          <label>
            <select v-model="choice.issue" class="soflow-color" required>
            <option disabled value="">Select an issue</option>
            <option
                v-for="issue in issues"
                :key="issue.id"
                :value="issue.id">
                {{issue.name}}
            </option>
            </select>
            <br>
          </label>
        </div>
        <div class="button-container">
          <button class="soflow-color" type="submit">Search</button>
        </div>
      </div>
    </form>

</template>

<script>

const initChoices = () => {
  return {
    state: '',
    issue: '',
  };
};

export default {
  props: {
    states: Array,
    issues: Array,
    onAdd: Function
  },
  data() {
    return {
      choice: initChoices(),
    };
  },
  methods: {
    handleSubmit() {
      this.onAdd(this.choice);
    }
  }
};
</script>

<style scoped>
form {
  background: white;
  padding: 30px;
  box-shadow: -4px 2px 20px -6px rgba(0,0,0,0.75);
}
p {
  text-align: center;
  text-transform: uppercase;
}
button {
   -webkit-appearance: button;
   -webkit-padding-end: 20px;
   -webkit-padding-start: 2px;
   border: 1px solid #AAA;
   font-size: inherit;
   overflow: hidden;
   text-overflow: ellipsis;
   white-space: nowrap;
   width: 100px;

  background: #fa504d;
  border: none;
  color: white;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-top: 5px;
  padding: 10px;
  font-weight: 600;
  box-shadow: -4px 2px 20px -6px rgba(0,0,0,0.75);
  transition: all .2s ease-in-out;
}
button:hover {
    transform: scale(1.1); 
}
.flex-box{
  display:flex;
  align-items: center;
}
.soflow-color {
  -webkit-appearance: button;
  -webkit-padding-end: 20px;
  -webkit-padding-start: 2px;
  border: 1px solid #AAA;
  font-size: inherit;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 200px;

  background: #fa504d;
  border: none;
  color: white;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-top: 5px;
  padding: 10px;
  font-weight: 600;
  box-shadow: -4px 2px 20px -6px rgba(0,0,0,0.75);
  transition: all .2s ease-in-out;

}

button.soflow-color {
  border-radius: 5px;
  width: 100px;
}

@supports ((display: -ms-grid) or (display: grid)) {
    @media (max-width: 800px) {
    .flex-box{
      display:flex;
      flex-direction: column;
      align-items: center;
    }

    .button-container {
      padding: 30px;
    }

    button {
      width: 50px;
    }
    }
}


</style>