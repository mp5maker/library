<template>
  <form>
    <div class="form-group">
      <label> Email: </label>
      <div>
        <input type="text" v-model="form.email" autocomplete="off" />
      </div>
    </div>
    <div class="form-group">
      <label> Password: </label>
      <div>
        <input type="password" v-model="form.password" autocomplete="off" />
      </div>
    </div>
    <div class="form-group">
      <label> Password: </label>
    </div>
    <div class="form-group">
      <select v-model="form.role">
        <option value="developer">Developer</option>
        <option value="designer">Designer</option>
      </select>
    </div>
    <div class="form-group">
      <label>Skills: </label>
      <div>
        <input type="text" v-model="form.tempSkill" @keyup="addSkill" />
      </div>
      <div class="d-flex-inline space-top">
        <div
          v-for="skill in form.skills"
          :key="skill"
          class="pill"
          @click="deleteSkill(skill)"
        >
          {{ skill }}
        </div>
      </div>
    </div>
    <div class="form-group d-flex-inline space-top">
      <input type="checkbox" v-model="form.terms" required />
      <label>Accept terms and and conditions </label>
    </div>
    <div class="form-group" @click="handleSubmit">
      <button class="submit">Create an account</button>
    </div>
  </form>
</template>

<script>
export default {
  name: "SignupForm",
  data() {
    return {
      form: {
        email: "",
        password: "",
        role: "developer",
        terms: false,
        tempSkill: "",
        skills: [],
      },
    };
  },
  methods: {
    addSkill(event) {
      const tempSkill = this.form.tempSkill.replace(",", "");
      if (event.key === "," && tempSkill) {
        if (!this.form.skills.includes(tempSkill)) {
          this.form.skills = [...this.form.skills, tempSkill];
        }
        this.form.tempSkill = "";
      }
    },
    deleteSkill(skill) {
      this.form.skills = this.form.skills.filter((item) => item !== skill);
    },
    handleSubmit(event) {
      console.log(this.form);
    },
  },
};
</script>

<style scoped>
input,
select {
  padding: var(--extraSmall);
}
.form-group {
  margin-bottom: var(--extraSmall);
}
.space-top {
  margin-top: var(--extraSmall);
}
.d-flex-inline {
  display: flex;
  justify-content: flex-start;
}
.d-flex-inline input {
  margin-right: var(--extraSmall);
}
.pill {
  border-radius: 10px;
  border: 1px solid var(--black);
  background-color: var(--whitesmoke);
  padding: calc(var(--extraSmall) * 0.5);
  cursor: pointer;
  margin-right: var(-extraSmall);
}
.submit {
  background-color: var(--black);
  color: var(--white);
  padding: var(--extraSmall);
  border-radius: 5px;
  min-width: 200px;
}
</style>
