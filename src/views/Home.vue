<template>
  <div id="container">
    <div class="row">
      <hr>
      <div class="col-10">
        <stock-quote v-if="stock" v-bind:stock="stock"></stock-quote>
        <div class="alert alert-danger" role="alert" v-if="error">
          <strong>Error!</strong> {{this.error}}
        </div>
      </div>
      <div class="button-area">
        <input type="text" class="buttons"
               autofocus placeholder="Enter symbol..." v-model="symbol" v-on:keyup.enter="search"/>
        <span>
          <input class="buttons" type="button" value="Get New Quote" v-on:click="search" />

        </span>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import StockQuote from '@/components/StockQuote'

export default {
  data () {
    return {
      stock: {},
      error: '',
      symbol: ''
    }
  },
  components: {
    'stock-quote': StockQuote
  },
  methods: {
    init () {
      this.stock = {}
      this.error = ''
    },
    clear () {
      this.symbol = ''
    },
    search () {
      const axios = require('axios')

      this.init()
      axios({
        method: 'GET',
        url: 'https://investors-exchange-iex-trading.p.rapidapi.com/stock/' + this.symbol + '/book',
        headers: {
          'content-type': 'application/octet-stream',
          'x-rapidapi-host': 'investors-exchange-iex-trading.p.rapidapi.com',
          'x-rapidapi-key': '6c9880c44emsh99301f9d46cb5ebp11fbebjsn7fcfd3f93a9e',
          useQueryString: true
        }
      })
        .then((response) => {
          this.stock = response.data.quote
          console.log(response.data.quote)
        })
        .catch(this.handleErrors)
      this.clear()
    },
    handleErrors (err) {
      if (err.status === 404) {
        this.error = ' That symbol could not be found. Please use another.'
      } else {
        this.stock = ''
        this.error = ' There was an error retrieving the data. Please try again.'
      }
    }
  }
}
</script>

<style>
hr {
  border-top: 4px solid gray;
}

input, button {
  padding: 0.2em;
  margin: 0.1em 0.2em;
  box-sizing: content-box;
  -moz-box-sizing: content-box;
  -webkit-box-sizing: content-box;
  font-family: 'Cabin', sans-serif;
}

#container {
  width: 40%;
  margin: 100px auto;
}

.button-area {
  text-align: center;
}

.buttons {
  width: 44%;
  margin-top: 10px;
  padding: 10px;
  font-size: 1em;
}

input.quote-button {
  background-image: linear-gradient(white, lightgrey);
  border-radius: 2px;
  border: 1px solid grey;
}
</style>
