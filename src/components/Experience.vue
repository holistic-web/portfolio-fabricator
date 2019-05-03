<template>
  <b-container class="Experience">
    <h2>Experience</h2>

    <ul>
      <li class="Experience__item">
        <div class="Experience__item__row">
          <h3>Willy Wonka's Factory</h3>
          <p>March 2017 (3 months)</p>
        </div>
        <p>Intern as chocolate stirrer</p>
        <div class="Experience__item__row">
          <h4>Projects</h4>
        </div>
        <ul>
          <li>Built a cool app</li>
        </ul>
      </li>
    </ul>
  </b-container>
</template>

<style lang="scss">
@import "../styles/index.scss";

.Experience {
  display: flex;
  flex-direction: column;
  justify-content: center;

  &__item {
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    text-align: left;

    &__row {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  }
}
</style>
