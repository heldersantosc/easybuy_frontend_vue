<template>
  <div>
    <div class="home">
      <a href="/home">
        <img src="../assets/logo_web.png" style="height: 50vh" />
      </a>
      <div class="subtitle">
        <h5>Faça suas compras em casa!</h5>
      </div>
      <div class="button-group text-center m-4">
        <router-link to="/login">
          <button type="button" class="btn btn-primary m-2 w-75 h-50">
            <div class="btn-center">
              <i class="material-icons">
                shopping_cart
              </i>
              Comece a comprar
            </div>
          </button>
        </router-link>
        <button type="button" class="btn btn-danger w-75 h-50">
          <div class="btn-center">
            <i class="material-icons">
              info
            </i>
            Conheça o nosso site
          </div>
        </button>
      </div>
    </div>
    <div class="banner">
      <h2>Crie sua conta e comece a comprar!</h2>
      <div class="row justify-content-center align-items-center col-md-4">
        <router-link to="/signup">
          <button type="button" class="btn btn-success m-2">
            <div class="btn-center size-1">
              <i class="material-icons">
                account_circle
              </i>
              Crie sua conta
            </div>
          </button>
        </router-link>
        <router-link to="/login">
          <button type="button" class="btn btn-warning  m-2">
            <div class="btn-center size-1">
              <i class="material-icons">
                assignment_ind
              </i>
              Já tenho cadastro
            </div>
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "../../style/globalStyles.scss";

.material-icons {
  margin-right: 4px;
  margin-left: 4px;
}

.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url("../assets/background/background_asset_wave.png");
  background-size: 100vw 100px;
  background-repeat: no-repeat;
  background-position: bottom;
  height: 100vh;
  width: 100%;
  &.subtitle {
    text-align: center;
    color: black;
  }
}

.banner {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  height: 250px;
  width: 100%;
  margin-top: -1px;
  padding: 40px;
  background-color: #11294e;
  /*background-image: linear-gradient(180deg, #11294e, #0f5582);*/
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
</style>
