<template>
  <view class="container">
    <button :on-press="changeThemeLight" title="LIGHT" />
    <button :on-press="changeThemeDark" title="DARK" />
  </view>
</template>

<script>
import Settings from "./constants/settings.native";

export default {
  name: "App",
  data() {
    return {
      theme: "LIGHT",
    };
  },
  methods: {
    changeThemeLight() {
      this.theme = "LIGHT";
      console.log("light");
      this.$emit(Settings.EMIT.THEME_CHANGE, "LIGHT");
    },
    changeThemeDark() {
      this.theme = "DARK";
      console.log("dark");
      this.$emit(Settings.EMIT.THEME_CHANGE, "DARK");
    },
  },
  components: {},
};
</script>


<style>
.container {
  background-color: white;
  align-items: center;
  justify-content: center;
  flex: 1;
}
.text-color-primary {
  color: blue;
}
</style>
