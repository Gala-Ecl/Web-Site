<template>
  <section>
    <section class="section-logo-gala"></section>
    <section class="section-bg-image-1"></section>
    <section class="countdown">{{couldownContent}}</section>
    <section class="standard-content">
      <h1>Bienvenue sur le site du gala</h1>
      <br />Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.
    </section>
    <section class="section-bg-image-2"></section>
    <section class="section-logo-edition"></section>
    <section class="section-bg-image-3"></section>
    <section>
      <h1>Bienvenue sur le site du gala</h1>
      <br />
      <a class="main-button" href="/party">La soirée</a>
      <br />
      <br />
      <br />
      <a class="main-button" href="/login">Se connecter</a>
    </section>
  </section>
</template>

<script>
export default {
  data() {
    return {
      beginningDatetime: new Date("2020-11-28T20:00:00"),
      couldownContent: undefined
    };
  },
  mounted() {
    setInterval(() => {
      const differenceTime =
        (this.beginningDatetime.getTime() - Date.now()) / 1000;
      if (differenceTime < 0) this.couldownContent = "";
      else {
        const days = Math.round(differenceTime / 86400);
        const hours = Math.round((differenceTime % 86400) / 3600);
        const minutes = Math.round((differenceTime % 3600)/60);
        const seconds = Math.round((differenceTime % 60));
        this.couldownContent = `${days ? days + " jour"+(days>1 ? "s ":" ") : ""}${
          hours ? hours + " heure"+(hours>1 ? "s ":" ") : ""
        }${minutes ? minutes + " minute"+(minutes>1 ? "s ":" ") : ""}${
          seconds ? seconds + " seconde"+(seconds>1 ? "s ":" ") : ""
        }`;
      }
    }, 1000);
  }
};
</script>