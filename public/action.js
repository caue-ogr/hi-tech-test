const app = new Vue({
  el: '#app',
  data: {
    names: [],
    cities: [],
    states: [],
    zips: [],
    newName: null,
    newCity: null,
    newState: null,
    newZip: null
  },
  mounted() {
    if (localStorage.getItem('names')) {
      try {
        this.names = JSON.parse(localStorage.getItem('names'));
      } catch(e) {
        localStorage.removeItem('names');
      }
    }
  },
  mounted() {
    if (localStorage.getItem('cities')) {
      try {
        this.cities = JSON.parse(localStorage.getItem('cities'));
      } catch(e) {
        localStorage.removeItem('cities');
      }
    }
  },
  mounted() {
    if (localStorage.getItem('states')) {
      try {
        this.states = JSON.parse(localStorage.getItem('states'));
      } catch(e) {
        localStorage.removeItem('states');
      }
    }
  },
  mounted() {
    if (localStorage.getItem('zips')) {
      try {
        this.zips = JSON.parse(localStorage.getItem('zips'));
      } catch(e) {
        localStorage.removeItem('zips');
      }
    }
  },
  methods: {
    addRegister() {

      if (!this.newName) {
        return;
      }
      if (!this.newCity) {
        return;
      }
      if (!this.newState) {
        return;
      }
      if (!this.newZip) {
        return;
      }

      this.names.push(this.newName);
      this.newName = '';
      this.cities.push(this.newCity);
      this.newCity = '';
      this.states.push(this.newState);
      this.newState = '';
      this.zips.push(this.newZip);
      this.newZip = '';
      this.saveRegister();
    },
    removeRegister(x) {
      this.names.splice(x, 1);
      this.cities.splice(x, 1);
      this.states.splice(x, 1);
      this.zips.splice(x, 1);
      this.saveRegister();
    },
    saveRegister() {
      const parsedName = JSON.stringify(this.names);
      const parsedCity = JSON.stringify(this.cities);
      const parsedState = JSON.stringify(this.states);
      const parsedZip = JSON.stringify(this.zips);
      localStorage.setItem('names', parsedName);
      localStorage.setItem('cities', parsedCity);
      localStorage.setItem('states', parsedState);
      localStorage.setItem('zips', parsedZip);
    }
  }
})
