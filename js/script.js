var vm = new Vue({
        el: '#search',
        data:{
              status:[]
        },
        
        methods:{
        delJoke(index){
          this.$delete(this.status, index);
        },
        searchJokes: function(item) {
          this.status = 'Loading...';
          var vm = this;
            axios.get('https://api.chucknorris.io/jokes/search?query='+item)
            .then(function(response){
              vm.status = response.data['result'];
              
            })
            
          }

        }
});


    new Vue({
      el: '#pic',
      data() {
        return {
          jokes: []
        }
      },
      methods: {
        PIC(){
          axios.get('https://api.chucknorris.io/jokes/random')
            .then(response => {
              let apiInfo = {
                text1 : response.data['icon_url'],
              };
              this.jokes.unshift(apiInfo)
          })
        }
      },
      beforeMount(){
        this.PIC()
      }
    })


    new Vue({
      el: '#categories',
      data() {
        return {
          jokes: [],
          categories:[]
        }
      },
      methods: {
        delJoke(index){
            this.$delete(this.jokes, index);
        },
         categs() {

            var vm = this;
          axios.get('https://api.chucknorris.io/jokes/categories')
            .then(function(response) {
              vm.categories = response;
          })
        },
        addJoke(item) {
          axios
          .get('https://api.chucknorris.io/jokes/random?category='+item)
            .then(response => {
              let apiInfo = {
                text : response.data['value']
              };
              this.jokes.unshift(apiInfo)
          })
        }
      },
      beforeMount(){        
        this.categs();
      }
    })

    
    new Vue({
      el: '#jokes',
      data() {
        return {
          jokes: []
        }
      },
      methods: {
        delJoke(index){
            this.$delete(this.jokes, index);
        },
        addJoke() {
          axios.get('https://api.chucknorris.io/jokes/random')
            .then(response => {
              let apiInfo = {
                text : response.data['value']
              };
              this.jokes.unshift(apiInfo)
          })
        }
      },
      beforeMount(){        
        this.addJoke()
      }
    })
