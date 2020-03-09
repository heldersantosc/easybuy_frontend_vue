<template>
  <div class="login">
    <div class="form">
      <div class="text-center">
        <router-link to="/home">
          <img
            src="../assets/logo_web.png"
            alt=""
            style="width: 250px"
            class="m-4"
          />
        </router-link>
      </div>

      <b-form class="col-sm-12" @submit="onSubmit" @reset="onReset" v-if="show">
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
            v-model="form.password"
            required
            placeholder="**********"
          ></b-form-input>
        </b-form-group>
      </b-form>

      <div class="col-sm-8 text-center">
        <router-link to="/profile">
          <button type="button" class="btn btn-primary mb-2">
            <div class="btn-center size-2">
              <i class="material-icons">
                arrow_right_alt
              </i>
              Entrar
            </div>
          </button>
        </router-link>
        <router-link to="/signup">
          <button type="button" class="btn btn-success mb-2">
            <div class="btn-center size-2">
              <i class="material-icons">
                assignment_ind
              </i>
              Criar conta
            </div>
          </button>
        </router-link>
      </div>
      <router-link to="/resetpassword">
        <h5 class="easybuy-brown">Recuperar senha?</h5>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "",
        name: ""
      },
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
      this.form.password = "";

      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.login {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translatey(10%);
}
.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.b-form-input,
.b-form-select {
  font-size: 18px;
  padding-left: 30px;
  margin-top: -10px;
  height: 70px;
  border-radius: 20px;
  border: none;
}
</style>
