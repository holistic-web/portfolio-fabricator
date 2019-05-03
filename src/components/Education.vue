<template>
  <b-container class="Education">
    <h2>Education</h2>

    <ul>
      <li class="Education__item">
        <div class="Education__item__row">
          <h3>Night's Watch</h3>
          <span>Seasons 2-5ish</span>
        </div>
        <p>I helped protect the world from the cold for a lil bit.</p>
      </li>
    </ul>
  </b-container>
</template>

<style lang="scss">
@import "../styles/index.scss";

.Education {
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
