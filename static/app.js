Vue.createApp({
  data() {
    return{
      users: [],
      titleIndex: 'Base Information',
      titleForm: 'Form',
      name: '',
      lastName: '',
      telefon: '',
      email: '',
    }
  },
  methods: {
    async createPerson() {
      const data = {
        name: this.name,
        lastName: this.lastName,
        telefon: this.telefon,
        email: this.email
      }
      const res = await fetch('/api/server', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      this.name = ''
      this.lastName = ''
      this.telefon = ''
      this.email = ''
      const newPeson = await res.json()
      this.users.push(newPeson)
      console.log(newPeson)
    },
  }
}).mount('#app')