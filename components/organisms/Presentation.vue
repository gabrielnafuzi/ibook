<template>
  <div class="presentation">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea beatae harum
      et illo laborum ut. Fuga praesentium labore perspiciatis laudantium
      temporibus eaque unde culpa odit et, quaerat numquam at? Officiis
      distinctio saepe recusandae atque animi impedit, veritatis maxime amet
      repellendus, delectus maiores unde quam, dolore molestiae accusantium quas
      rem eos. Est tempora quas accusantium, recusandae porro explicabo fuga
      earum nihil voluptatibus repellat maiores vel beatae ea id iusto
      consequatur consequuntur.
    </p>

    <img src="@/assets/img/presentation.svg" alt="Apresentação" />
  </div>
</template>

<style lang="scss" scoped>
.presentation {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
  place-items: center;

  @include screen('small', 'medium') {
    grid-template-columns: 1fr;
  }

  p {
    line-height: 26px;
  }

  img {
    max-width: 100%;
  }
}
</style>
