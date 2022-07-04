var app = new Vue(
  {
      el: '#root',
      data: {
        randomEmail: null,
        emailList: [],
      },
      methods: {
        getRandomEmailFromApi() {
          for (let i = 10; i > this.emailList.length; i--) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
              this.randomEmail = response.data.response;
              this.emailList.push(this.randomEmail);
            });       
          }              
        }
      },
      mounted() {
        this.getRandomEmailFromApi();
      }
  }
);