 <template>
  <section>
    <section class="section-bandeau"> 
    </section>
    <section class="section-banner">
      <div class="photobanner">
        <img class="first" src="../../Info_Defilante_1.png">
        <img src="../../Info_Defilante_2.png">
        <img src="../../Info_Defilante_3.png">
        <img src="../../Info_Defilante_4.png">
        <img src="../../Info_Defilante_1.png"> <!-- Remettre les 4 premieres pour effet de continuite -->
        <img src="../../Info_Defilante_2.png">
        <img src="../../Info_Defilante_3.png">
      </div>
    </section>
    <section> 
      <div class="slider">
        <input type="radio" id="show_slide1" name="slider_commands">
        <input type="radio" id="show_slide2" name="slider_commands">
        <input type="radio" id="show_slide3" name="slider_commands">
        <div class="slides">
          <figure id="slide1">
              <img src="../../diplomes.png" alt="La journée">
              <figcaption><h1>La Journée</h1></figcaption>
          </figure>
          <figure id="slide2">
              <img src="../../diner.jpg" alt="Le dîner">
              <figcaption><h1>Le Dîner</h1></figcaption>
          </figure>
          <figure id="slide3">
              <img src="../../barnums.png" alt="La Soirée">
              <figcaption><h1>La Soirée</h1></figcaption>
          </figure>
        </div>
        <nav>
          <ul class="dots_commands">
            <li><label for="show_slide1">Slide 1</label></li>
            <li><label for="show_slide2">Slide 2</label></li>
            <li><label for="show_slide3">Slide 3</label></li>
          </ul>
        </nav>
      </div>
    </section>
  </section>
</template>

<script>
export default {};
</script>

<style>
</style>