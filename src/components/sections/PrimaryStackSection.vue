<template>
  <div class="logos">
    <hr />
    <span class="centered"><h6>Primary tech stack</h6></span>

    <div class="imageline">
      <div class="logo-container">
        <div class="logo">
          <img src="@/assets/mongodb.png" style="max-width: 100%" />
        </div>
        <div class="logo">
          <img src="@/assets/expressjs.png" style="max-width: 100%" />
        </div>
      </div>

      <div class="logo-container">
        <div class="logo">
          <img src="@/assets/react.png" style="max-width: 100%" />
        </div>
        <div class="logo">
          <img src="@/assets/nodejs.png" style="max-width: 100%" />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
hr {
  width: 30%;
  border-bottom: 1px solid #ccc;
  margin: 40px auto 20px auto !important;
}
.imageline {
  display: flex;
  align-items: center;
  justify-content: center;
}
.logo {
  width: 180px;
  flex-shrink: 0;
  margin-left: auto;
  margin-right: auto;
  display: block;
  padding: 5px;
}
.logo-container {
  display: flex;
  flex-wrap: wrap;
  width: 250px;
  flex-shrink: 1;
  padding: 10px 0px;
}
.logo-container {
  flex-grow: 1;
  max-width: 550px;
}
</style>
