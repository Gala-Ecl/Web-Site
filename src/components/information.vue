 <template>
  <section>
    <section class="section-bandeau"> 
    </section>
    <section class="section-banner">
      <div class="photobanner">
        <a  @click="imageChosenSource=1"><img class="first" src="../../Info_Defilante_1.png"></a>
        <a  @click="imageChosenSource=2"><img src="../../Info_Defilante_2.png"></a>
        <a  @click="imageChosenSource=3"><img src="../../Info_Defilante_3.png"></a>
        <a  @click="imageChosenSource=4"><img src="../../Info_Defilante_4.png"></a>
        <a  @click="imageChosenSource=5"><img src="../../Info_Defilante_1.png"></a> <!-- Remettre les 4 premieres pour effet de continuite -->
        <a  @click="imageChosenSource=6"><img src="../../Info_Defilante_2.png"></a>
        <a  @click="imageChosenSource=7"><img src="../../Info_Defilante_3.png"></a>
      </div>
    </section>
    <section class="section-bg-image-2">
      <img v-if="imageChosenSource==1" src="../../Info_Defilante_1.png">
      <img v-if="imageChosenSource==2" src="../../Info_Defilante_2.png">
      <img v-if="imageChosenSource==3" src="../../Info_Defilante_3.png">
      <img v-if="imageChosenSource==4" src="../../Info_Defilante_4.png">
      <img v-if="imageChosenSource==5" src="../../Info_Defilante_1.png"> <!-- Remettre les 4 premieres pour effet de continuite -->
      <img v-if="imageChosenSource==6" src="../../Info_Defilante_2.png">
      <img v-if="imageChosenSource==7" src="../../Info_Defilante_3.png">
    </section>
    <section class="section-bg-image-2">
      <div class="tickets">
        <a class="ticket-button" href="/party">TICKET</a>
      </div>
    </section>
    <section class="standard-content">
      <h1>Présentation de la soirée</h1>
      <br/>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.
    </section>
    <section class="standard-content">
      <h1>Présentation du site (photos, localisation,...)</h1>
      <br/>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.
    </section>
    <section class="standard-content">
      <h1>Contacts (photos d'équipe + individuelles avec poste et contact)</h1>
      <br/>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.
    </section>
  </section>
</template>

<script>
export default {
  data() {
    return {
      imageChosenSource : 1
    }
  },

};
</script>

<style>
</style>