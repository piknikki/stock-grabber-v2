<template>
  <div>
    <div id="stock-card" class="quote" v-if="stock.symbol">
      <div>
        <h1 id="company-name">{{ stock.companyName }}</h1>
      </div>
      <div class="flex-row">
        <span class="left header">{{ stock.latestPrice }}</span>
        <span class="right header" :style="style">{{stock.ytdChange | formatSmallNumber}} ( {{stock.iexMarketPercent | formatPercent}})</span>
      </div>
      <div class="flex-row bottom">
        <span class="left">Range</span>
        <span class="right">{{stock.low}} - {{stock.high}}</span>
      </div>
      <div class="flex-row bottom">
        <span class="left">Open</span>
        <span class="right">{{stock.open  | formatSmallNumber}}</span>
      </div>
      <div class="flex-row bottom">
        <span class="left">Volume</span>
        <span class="right">{{stock.avgTotalVolume | formatBigNumber}}</span>
      </div>
      <div class="flex-row bottom">
        <span class="left">Market Cap</span>
        <span class="right">{{stock.marketCap | formatBigNumber}}</span>
      </div>
      <div class="flex-row bottom time">

        <span class="right time" >As of {{ stock.latestUpdate | moment('h:mm:ss A')}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['stock', 'color'],
  computed: {
    style () {
      if (this.stock.ytdChange > 0) {
        return 'color: green'
      } else if (this.stock.ytdChange < 0) {
        return 'color: red'
      } else {
        return 'color: black'
      }
    }
  }
}
</script>

<style scoped>
#company-name {
  width: 40%;
  text-align: left;
  margin-left: 2px;
  letter-spacing: 0.05em;
}

#company-name, .header {
  text-transform: uppercase;
  display: flex;
  justify-items: left;
  flex-wrap: wrap;
  font-family: 'Lora', serif;
}

#stock-card {
  font-size: 1em;
  display: flex;
  flex-direction: column;
}

.flex-row {
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid gray;
  padding: 10px 10px;
  font-size: 20px;
}

.bottom {
  font-family: 'Roboto', sans-serif;
}

.left {
  font-weight: 400;
}

.right {
  margin-left: auto;
  font-weight: bold;
}

.flex-row.bottom.time {
  padding-right: 2px;
}

.right.time {
  font-weight: 400;
}

.header {
  font-size: 32px;
  font-weight: bold;
}
</style>
