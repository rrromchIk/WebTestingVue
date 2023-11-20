<script>
export default {
  name: "UserNameFormModal",
  emits: ["closeModal", "submitUserName"],

  data() {
    return {
      userName: ""
    }
  },

  methods: {
    closeModal() {
      this.$emit("closeModal");
    },

    submitUserName() {
      this.$emit("submitUserName", this.userName);
    }
  }
}
</script>

<template>
  <div class="my-modal">
    <div class="my-modal-content">
      <div class="my-modal-header">
        <span class="modal-header-text">Enter name</span>
        <span class="close-modal" @click="closeModal">&times;</span>
      </div>

      <form class="add-form" @submit.prevent="submitUserName">
        <div class="form-group">
          <input type="text" name="list" v-model="userName" placeholder="Enter name" required/>
        </div>

        <div class="button-group">
          <button class="btn btn-outline-danger" type="button" @click="closeModal">Cancel</button>
          <button class="btn btn-success" type="submit">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.my-modal {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: hsla(0, 0%, 0%, 0.5);
}

.my-modal-content {
  margin: 8% auto; /* 15% from the top and centered */
  border-radius: 0.5rem;
  padding: 1rem;
  width: 25rem;
  background-color: white;
  display: flex;
  flex-direction: column;
}

.close-modal {
  display: block;
  margin-left: auto;
  color: #aaa;
  font-size: 28px;
  font-weight: bold;
}

.close-modal:hover,
.close-modal:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

.modal-header-text {
  font-size: 17.5px;
  font-weight: bold;
}

.button-group {
  display: flex;
  justify-content: flex-end;
  align-items: center; /* Align vertically centered */
}

.button-group > button {
  font-size: 16px;
  border: 1px solid black;
  padding: 3px;
  border-radius: 3px;
  margin-left: 5px;
}

.button-group > button:active {
  background-color: lightgray;
}

.my-modal-header {
  display: flex;
  align-items: center;
}

.add-form {
  padding: 5px 25px;
  font-size: 20px;
}

input, select {
  border: 1px solid rgb(128, 128, 128);
  border-radius: 5px;
  width: 100%;
  text-align: center;
}

.form-group {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>