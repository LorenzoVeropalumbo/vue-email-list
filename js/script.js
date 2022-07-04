var app = new Vue(
  {
      el: '#root',
      data: {
        randomEmail: null,
        emailList: [],
      },
      methods: {
        getRandomEmailFromApi() {
          // save all email in the array
          for (let i = 10; i > this.emailList.length; i--) {
            // HTTP call to take email
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
              this.randomEmail = response.data.response;
              // push email in the array
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