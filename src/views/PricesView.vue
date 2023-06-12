<template>
  <div class="price">
    <h1>This is a Price page</h1>
  </div>

</template>

<script>
export default {

}
</script>

<style scoped>
.price {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 150px;
}

.heading {
  margin: auto;
  display: flex;
  text-align: center;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 3rem;
  font-size: 2rem; /* Increase the font size for better visibility */
}

.scrollable-content {
  max-height: 300px; /* Set a maximum height for the scrollable content */
  overflow-y: auto; /* Enable vertical scrolling */
}

/* Media query for mobile devices */
@media only screen and (max-width: 768px) {
  .price {
    margin-top: 50px;
  }

  .heading {
    font-size: 1.5rem;
  }
}
</style>
