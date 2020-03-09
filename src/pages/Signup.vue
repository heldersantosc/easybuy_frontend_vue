<template>
  <div class="signup">
    <div class="container col-sm-6">
      <div class="text-center">
        <router-link to="/home">
          <img src="../assets/logo_web.png" alt="" height="200px" class="m-2" />
        </router-link>
      </div>

      <b-form class="p-2" @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group id="input-group-1" label-for="input-1">
          <b-form-input
            id="input-1"
            class="b-form-input"
            v-model="form.email"
            type="email"
            required
            placeholder="seuemail@email.com"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label-for="input-2">
          <b-form-input
            id="input-2"
            class="b-form-input"
            v-model="form.name"
            required
            placeholder="Nome completo"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-3" label-for="input-3">
          <b-form-select
            id="input-3"
            class="b-form-select"
            v-model="form.country"
            :options="country"
            required
          ></b-form-select>
        </b-form-group>

        <div class="text-right">
          <router-link to="/home">
            <b-button class="m-2" type="reset" variant="danger">
              Cancelar
            </b-button>
          </router-link>
          <b-button class="m-2" type="submit" variant="success">
            Cadastrar
          </b-button>
        </div>
      </b-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "",
        name: "",
        country: null
      },
      country: [{ text: "Selecione o país", value: null }, "Brasil"],
      show: true
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.country = null;
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>

<style lang="scss">
.signup {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url("../assets/background/background_asset_wave.png");
  background-size: 100vw 200px;
  background-repeat: no-repeat;
  background-position: bottom;
}
.b-form-input,
.b-form-select {
  font-size: 18px;
  padding-left: 30px;
  height: 50px;
  border-radius: 20px;
  border: none;
}
</style>
