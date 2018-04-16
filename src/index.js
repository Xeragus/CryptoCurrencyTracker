const electron = require('electron')
const path = require('path')
const axios = require('axios')
var bitcoinValue = document.getElementById('bitcoin-value')
var etheriumValue = document.getElementById('etherium-value')
var rippleValue = document.getElementById('ripple-value')
var eosValue = document.getElementById('eos-value')
var bitcoinCashValue = document.getElementById('bitcoin-cash-value')
var litecoinValue = document.getElementById('litecoin-value')
var tronixValue = document.getElementById('tronix-value')
var etheriumClassicValue = document.getElementById('etherium-classic-value')
var huobiTokenValue = document.getElementById('huobi-value')
var digitalCashValue = document.getElementById('digital-value')

function getCurrencyValues() {
	
	// get bitcoin value
	axios.get('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,EUR')
		.then (response => {
			const bitcoinUSD = response.data.USD
			bitcoinValue.innerHTML = '$' + bitcoinUSD.toLocaleString('en')
		})
		.catch(error => {
			console.log(error)
		})

	// get etherium value
	axios.get('https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD,EUR')
		.then(response => {
			const etheriumValueUSD = response.data.USD
			etheriumValue.innerHTML = '$' + etheriumValueUSD.toLocaleString('en')
		})
		.catch(error => {
			console.log(error)
		})

	// get ripple value
	axios.get('https://min-api.cryptocompare.com/data/price?fsym=XRP&tsyms=USD,EUR')
		.then(response => {
			const rippleValueUSD = response.data.USD
			rippleValue.innerHTML = rippleValueUSD.toLocaleString('en')
		})
		.catch(error => {
			console.log(error)
		})

	// get eos value
	axios.get('https://min-api.cryptocompare.com/data/price?fsym=EOS&tsyms=USD,EUR')
		.then(response => {
			const eosValueUSD = response.data.USD
			eosValue.innerHTML = eosValueUSD.toLocaleString('en')
		})
		.catch(error => {
			console.log(error)
		})

	// get bitcoin cash value
	axios.get('https://min-api.cryptocompare.com/data/price?fsym=BCH&tsyms=USD,EUR')
		.then(response => {
			const bitcoinCashValueUSD = response.data.USD
			bitcoinCashValue.innerHTML = bitcoinCashValueUSD.toLocaleString('en')
		})
		.catch(error => {
			console.log(error)
		})

	// get litecoin value
	axios.get('https://min-api.cryptocompare.com/data/price?fsym=LTC&tsyms=USD,EUR')
		.then(response => {
			const litecoinValueUSD = response.data.USD
			litecoinValue.innerHTML = litecoinValueUSD.toLocaleString('en')
		})
		.catch(error => {
			console.log(error)
		})
	
	// get tronix value
	axios.get('https://min-api.cryptocompare.com/data/price?fsym=TRX&tsyms=USD,EUR')
		.then(response => {
			const tronixValueUSD = response.data.USD
			tronixValue.innerHTML = tronixValueUSD.toLocaleString('en')
		})
		.catch(error => {
			console.log(error)
		})
	
	// get etherium classic value
	axios.get('https://min-api.cryptocompare.com/data/price?fsym=ETC&tsyms=USD,etheriumValueUSD')
		.then(response => {
			const etheriumClassicValueUSD = response.data.USD
			etheriumClassicValue.innerHTML = etheriumClassicValueUSD.toLocaleString('en')
		})
		.catch(error => {
			console.log(error)
		})

	// get huobi value
	axios.get('https://min-api.cryptocompare.com/data/price?fsym=HT&tsyms=USD,EUR')
		.then(response => {
			const huobiTokenValueUSD = response.data.USD
			huobiTokenValue.innerHTML = huobiTokenValueUSD.toLocaleString('en')
		})
		.catch(error => {
			console.log(error)
		})

	// get digital value
	axios.get('https://min-api.cryptocompare.com/data/price?fsym=DASH&tsyms=USD,EUR')
		.then(response => {
			const digitalCashValueUSD = response.data.USD
			digitalCashValue.innerHTML = digitalCashValueUSD.toLocaleString('en')
		})
		.catch(error => {
			console.log(error)
		})
}
getCurrencyValues()
setInterval(getCurrencyValues, 10000)