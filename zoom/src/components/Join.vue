<template>
  <div class="join">
    <div class="join-card">
      <div class="join-header">
        <h2>Reuniones Lerny.co</h2>
      </div>
      <div>
        <div class="form-item">
          <label for="alias">Nombre: </label>
          <input v-model="nickname" type="text" name="alias">
        </div>

        <div class="form-item">
          <label for="meetingId">Meeting ID Zoom: </label>
          <input v-model="meetingId" type="text" name="meetingId">
        </div>

        <div class="form-item">
          <label for="password">Contraseña: </label>
          <input v-model="password" type="password" name="password">
        </div>

        <div class="form-item">
          <button>
            <router-link
              :to="{ name: 'meeting', query: { nickname: nickname, meetingId: meetingId, password: password }}"
            >Unirme a la reunion</router-link>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "join",
  data: function() {
    return {
      nickname: "",
      meetingId: "",
      password: "",
    };
  }
};
</script>

<style>
.join {
  padding: 5px;
}

.join-card {
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  width: 30%;
  height: 50%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}

.join-header {
  border-bottom: 1px solid #d7dae2;
  padding: 20px;
  margin-bottom: 20px;
}

.form-item {
  display: block;
  padding: 5px;
}

</style>