<template>
  <section>
    <div class="container">
      <span v-if="!content">Downloading...</span>
      <div v-if="content">
        <div v-for="text in content.textList" :key="text.id">
          <span v-if="!text.isModifying">{{text.value}}</span>
          <input
            v-if="$store.state.privilege=='admin' && text.isModifying"
            placeholder="Ecrire son texte ici..."
            v-model="text.value"
          />
          <button
            v-if="$store.state.privilege=='admin' && !text.isModifying"
            @click="text.isModifying=true"
          >Modifier</button>
          <button v-if="$store.state.privilege=='admin'" @click="deleteText(text.id)">Supprimer</button>
          <button
            v-if="$store.state.privilege=='admin' && text.isModifying"
            @click="text.isModifying=false"
          >Valider</button>
        </div>
      </div>
      <button v-if="$store.state.privilege=='admin'" @click="addText">Ajouter un texte</button>
      <button v-if="$store.state.privilege=='admin'" @click="save">Enregistrer la page</button>
    </div>
  </section>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      content: null
    };
  },
  async mounted() {
    const { data } = await axios.get(
      `${process.env.VUE_APP_API_URL}/content?page=party`
    );
    this.content = data.content;
  },
  methods: {
    addText() {
      this.content.textList.push({
        id: Math.max(...this.content.textList.map(x => x.id))+1,
        isModifying: true,
        value: ""
      });
    },
    async save() {
      this.content.textList.forEach(element => (element.isModifying = false));
      await axios.post(`${process.env.VUE_APP_API_URL}/content?page=party`, {
        content: this.content
      });
    },
    deleteText(id) {
      this.content.textList.splice(
        this.content.textList.findIndex(element => element.id == id),
        1
      );
    }
  }
};
</script>