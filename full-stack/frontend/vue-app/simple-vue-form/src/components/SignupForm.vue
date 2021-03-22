<template>
  <form>
    <div class="form-group">
      <label> Email: </label>
      <div>
        <input type="text" v-model="email" autocomplete="off" />
      </div>
    </div>
    <div class="form-group">
      <label> Password: </label>
      <div>
        <input type="password" v-model="password" autocomplete="off" />
      </div>
    </div>
    <div class="form-group">
      <label> Password: </label>
    </div>
    <div class="form-group">
      <select v-model="role">
        <option value="developer">Developer</option>
        <option value="designer">Designer</option>
      </select>
    </div>
    <div class="form-group">
      <label>Skills: </label>
      <div>
        <input type="text" v-model="tempSkill" @keyup="addSkill" />
      </div>
      <div class="d-flex-inline space-top">
        <div
          v-for="skill in skills"
          :key="skill"
          class="pill"
          @click="deleteSkill(skill)"
        >
          {{ skill }}
        </div>
      </div>
    </div>
    <div class="form-group d-flex-inline space-top">
      <label>Accept terms and and conditions </label>
      <input type="checkbox" v-model="terms" required />
    </div>
  </form>
</template>

<script>
export default {
  name: "SignupForm",
  data() {
    return {
      email: "",
      password: "",
      role: "developer",
      terms: false,
      tempSkill: "",
      skills: [],
    };
  },
  methods: {
    addSkill(event) {
      const tempSkill = this.tempSkill.replace(",", "");
      if (event.key === "Enter" && tempSkill) {
        if (!this.skills.includes(tempSkill)) {
          this.skills = [...this.skills, tempSkill];
        }
        this.tempSkill = "";
      }
    },
    deleteSkill(skill) {
      this.skills = this.skills.filter((item) => item !== skill);
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
.d-flex-inline label {
  margin-right: var(--extraSmall);
}
.pill {
  border-radius: 10px;
  border: 1px solid var(--black);
  background-color: var(--whitesmoke);
  padding: calc(var(--extraSmall) * 0.5);
  cursor: pointer;
}
</style>
