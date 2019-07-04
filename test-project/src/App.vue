<template>
  <div>
    <h2>Form inputs</h2>
    <input type="text" v-model.lazy="name">
    <p>{{ name }}</p>
    <div>
      <textarea v-model="textarea"></textarea>
      <p>{{ textarea}}</p>
    </div>
    <div>
      <label>
        <input type="checkbox" value="instagram" v-model="social"> Instagram
      </label>

      <label>
        <input type="checkbox" value="vk" v-model="social"> Vk
      </label>

      <label>
        <input type="checkbox" value="facebook" v-model="social"> Facebook
      </label>

      <hr>

      <ul>
        <li v-for="s of social">{{ s }}</li>
      </ul>

    </div>

    <hr>
    <hr>

    <div>
      <label>
        <input type="radio" value="instagram" v-model="social2"> Instagram
      </label>

      <label>
        <input type="radio" value="vk" v-model="social2"> Vk
      </label>

      <label>
        <input type="radio" value="facebook" v-model="social2"> Facebook
      </label>

      <hr>

      <p>{{ social2 }}</p>
    </div>

    <hr>
    <hr>

    <div>
      <select v-model="notDefaultSocialList">
        <option
                v-for="s of socialList"
        >{{ s }}</option>
      </select>
      <p>{{ notDefaultSocialList }}</p>
    </div>

    <hr>
    <hr>

    <div>
      <h2>Form input</h2>
      <input type="text" v-model.number="age">
      <p>{{ age }}</p>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      name: '',
      textarea: 'I am initial text',
      social: ['vk'],
      social2: 'facebook',
      socialList: ['instagram', 'vk', 'facebook'],
      defaultSocialList: 'vk',
      notDefaultSocialList: 'vk',
      age: 20

    }
  },
  watch: {
    age (value) {
      console.log(value)
      console.log(typeof value)

    }
  }
}
</script>

<style scoped>
  textarea {
    height: 100px;
    width: 400px;
  }
  p {
    white-space: pre;
  }
</style>
