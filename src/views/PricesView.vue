<template>
  <div class="price">
    <h1>This is a Price page</h1>
  </div>
  <h3 class="heading">Lorem 4 Life</h3>
  <div class="scrollable-content">
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta aliquid quae quas deserunt, rerum consequuntur obcaecati ipsa, dolor, atque quasi ipsam officia? Inventore facere illum consectetur aut dolore, consequuntur nihil!
      Veritatis quibusdam omnis facilis. Illum quos aperiam nostrum similique delectus recusandae omnis cupiditate ab quibusdam. Temporibus quis repellat accusamus quo at perspiciatis, provident in non voluptas, maxime aperiam dolorum suscipit!</p>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta aliquid quae quas deserunt, rerum consequuntur obcaecati ipsa, dolor, atque quasi ipsam officia? Inventore facere illum consectetur aut dolore, consequuntur nihil!
      Veritatis quibusdam omnis facilis. Illum quos aperiam nostrum similique delectus recusandae omnis cupiditate ab quibusdam. Temporibus quis repellat accusamus quo at perspiciatis, provident in non voluptas, maxime aperiam dolorum suscipit!</p>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta aliquid quae quas deserunt, rerum consequuntur obcaecati ipsa, dolor, atque quasi ipsam officia? Inventore facere illum consectetur aut dolore, consequuntur nihil!
      Veritatis quibusdam omnis facilis. Illum quos aperiam nostrum similique delectus recusandae omnis cupiditate ab quibusdam. Temporibus quis repellat accusamus quo at perspiciatis, provident in non voluptas, maxime aperiam dolorum suscipit!</p>
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
