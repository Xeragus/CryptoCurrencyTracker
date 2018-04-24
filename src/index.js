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


var bitcoinValueOld = 0;
var etheriumValueOld = 0;
var rippleValueOld = 0;
var eosValueOld = 0;
var bitcoinCashValueOld = 0;
var litecoinValueOld = 0;
var tronixValueOld = 0;
var etheriumClassicValueOld = 0;
var huobiTokenValueOld = 0;
var digitalCashValueOld = 0;

function getCurrencyValues() {
	
	// get bitcoin value
	axios.get('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,EUR')
		.then (response => {
			const bitcoinUSD = (response.data.USD).toLocaleString('en')
			const numberBitcoinUSD = Number(bitcoinUSD.replace(',', ""))
			bitcoinValue.innerHTML = '$' + bitcoinUSD

			if (numberBitcoinUSD > bitcoinValueOld) {
				bitcoinValue.classList.add('increasedValue')
				setTimeout(function(){ 
					bitcoinValue.classList.remove('increasedValue')
				}, 3000);
			} 
			else if (numberBitcoinUSD < bitcoinValueOld) {
				bitcoinValue.classList.add('decreasedValue')
				setTimeout(function(){ 
					bitcoinValue.classList.remove('decreasedValue')
				}, 3000);
			}
			bitcoinValueOld = numberBitcoinUSD
		})
		.catch(error => {
			console.log(error)
		})

	// get etherium value
	axios.get('https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD')
		.then(response => {
			const etheriumValueUSD = (response.data.USD).toLocaleString('en')
			const numberEtherium = Number(etheriumValueUSD.replace(',', ""))
			etheriumValue.innerHTML = '$' + etheriumValueUSD

			if (numberEtherium > etheriumValueOld) {
				etheriumValue.classList.add('increasedValue')
				setTimeout(function(){ 
					etheriumValue.classList.remove('increasedValue')
				}, 3000);
			} 
			else if (numberEtherium < etheriumValueOld) {
				etheriumValue.classList.add('decreasedValue')
				setTimeout(function(){ 
					etheriumValue.classList.remove('decreasedValue')
				}, 3000);
			}
			etheriumValueOld = numberEtherium
		})
		.catch(error => {
			console.log(error)
		})

	// get ripple value
	axios.get('https://min-api.cryptocompare.com/data/price?fsym=XRP&tsyms=USD')
		.then(response => {
			const rippleValueUSD = (response.data.USD).toLocaleString('en')
			const numberRipple = Number(rippleValueUSD.replace(',', ""))
			rippleValue.innerHTML = '$' + rippleValueUSD

			if (numberRipple > rippleValueOld) {
				rippleValue.classList.add('increasedValue')
				setTimeout(function(){ 
					rippleValue.classList.remove('increasedValue')
				}, 3000);
			} 
			else if (numberRipple < rippleValueOld) {
				rippleValue.classList.add('decreasedValue')
				setTimeout(function(){ 
					rippleValue.classList.remove('decreasedValue')
				}, 3000);
			}
			rippleValueOld = numberRipple
		})
		.catch(error => {
			console.log(error)
		})

	// get eos value
	axios.get('https://min-api.cryptocompare.com/data/price?fsym=EOS&tsyms=USD')
		.then(response => {
			const eosValueUSD = (response.data.USD).toLocaleString('en')
			const numberEos = Number(eosValueUSD.replace(',', ""))
			eosValue.innerHTML = '$' + eosValueUSD

			if (numberEos > eosValueOld) {
				eosValue.classList.add('increasedValue')
				setTimeout(function(){ 
					eosValue.classList.remove('increasedValue')
				}, 3000);
			} 
			else if (numberEos < eosValueOld) {
				eosValue.classList.add('decreasedValue')
				setTimeout(function(){ 
					eosValue.classList.remove('decreasedValue')
				}, 3000);
			}
			eosValueOld = numberEos
		})
		.catch(error => {
			console.log(error)
		})

	// get bitcoin cash value
	axios.get('https://min-api.cryptocompare.com/data/price?fsym=BCH&tsyms=USD')
		.then(response => {
			const bitcoinCashValueUSD = (response.data.USD).toLocaleString('en')
			const numberBitcoinCash = Number(bitcoinCashValueUSD.replace(',', ""))
			bitcoinCashValue.innerHTML = '$' + bitcoinCashValueUSD

			if (numberBitcoinCash > bitcoinCashValueOld) {
				bitcoinCashValue.classList.add('increasedValue')
				setTimeout(function(){ 
					bitcoinCashValue.classList.remove('increasedValue')
				}, 3000);
			} 
			else if (numberBitcoinCash < bitcoinCashValueOld) {
				bitcoinCashValue.classList.add('decreasedValue')
				setTimeout(function(){ 
					bitcoinCashValue.classList.remove('decreasedValue')
				}, 3000);
			}
			bitcoinCashValueOld = numberBitcoinCash
		})
		.catch(error => {
			console.log(error)
		})

	// get litecoin value
	axios.get('https://min-api.cryptocompare.com/data/price?fsym=LTC&tsyms=USD')
		.then(response => {
			const litecoinValueUSD = (response.data.USD).toLocaleString('en')
			const numberLitecoin = Number(litecoinValueUSD.replace(',', ""))
			litecoinValue.innerHTML = '$' + litecoinValueUSD

			if (numberLitecoin > litecoinValueOld) {
				litecoinValue.classList.add('increasedValue')
				setTimeout(function(){ 
					litecoinValue.classList.remove('increasedValue')
				}, 3000);
			} 
			else if (numberLitecoin < litecoinValueOld) {
				litecoinValue.classList.add('decreasedValue')
				setTimeout(function(){ 
					litecoinValue.classList.remove('decreasedValue')
				}, 3000);
			}
			litecoinValueOld = numberLitecoin
		})
		.catch(error => {
			console.log(error)
		})
	
	// get tronix value
	axios.get('https://min-api.cryptocompare.com/data/price?fsym=TRX&tsyms=USD')
		.then(response => {
			const tronixValueUSD = (response.data.USD).toLocaleString('en')
			const numberTronix = Number(tronixValueUSD.replace(',', ""))
			tronixValue.innerHTML = '$' + tronixValueUSD

			if (numberTronix > tronixValueOld) {
				tronixValue.classList.add('increasedValue')
				setTimeout(function(){ 
					tronixValue.classList.remove('increasedValue')
				}, 3000);
			} 
			else if (numberTronix < tronixValueOld) {
				tronixValue.classList.add('decreasedValue')
				setTimeout(function(){ 
					tronixValue.classList.remove('decreasedValue')
				}, 3000);
			}
			tronixValueOld = numberTronix
		})
		.catch(error => {
			console.log(error)
		})
	
	// get etherium classic value
	axios.get('https://min-api.cryptocompare.com/data/price?fsym=ETC&tsyms=USD')
		.then(response => {
			const etheriumClassicValueUSD = (response.data.USD).toLocaleString('en')
			const numberEtheriumClassic = Number(etheriumClassicValueUSD.replace(',', ""))
			etheriumClassicValue.innerHTML = '$' + etheriumClassicValueUSD

			if (numberEtheriumClassic > etheriumClassicValueOld) {
				etheriumClassicValue.classList.add('increasedValue')
				setTimeout(function(){ 
					etheriumClassicValue.classList.remove('increasedValue')
				}, 3000);
			} 
			else if (numberEtheriumClassic < etheriumClassicValueOld) {
				etheriumClassicValue.classList.add('decreasedValue')
				setTimeout(function(){ 
					etheriumClassicValue.classList.remove('decreasedValue')
				}, 3000);
			}
			etheriumClassicValueOld = numberEtheriumClassic
		})
		.catch(error => {
			console.log(error)
		})

	// get huobi value
	axios.get('https://min-api.cryptocompare.com/data/price?fsym=HT&tsyms=USD')
		.then(response => {
			const huobiTokenValueUSD = (response.data.USD).toLocaleString('en')
			const numberHuobi = Number(huobiTokenValueUSD.replace(',', ""))
			huobiTokenValue.innerHTML = '$' + huobiTokenValueUSD

			if (numberHuobi > huobiTokenValueOld) {
				huobiTokenValue.classList.add('increasedValue')
				setTimeout(function(){ 
					huobiTokenValue.classList.remove('increasedValue')
				}, 3000);
			} 
			else if (numberHuobi < huobiTokenValueOld) {
				huobiTokenValue.classList.add('decreasedValue')
				setTimeout(function(){ 
					huobiTokenValue.classList.remove('decreasedValue')
				}, 3000);
			}
			huobiTokenValueOld = numberHuobi
		})
		.catch(error => {
			console.log(error)
		})

	// get digital value
	axios.get('https://min-api.cryptocompare.com/data/price?fsym=DASH&tsyms=USD')
		.then(response => {
			const digitalCashValueUSD = (response.data.USD).toLocaleString('en')
			const numberDigitalCash = Number(digitalCashValueUSD.replace(',', ""))
			digitalCashValue.innerHTML = '$' + digitalCashValueUSD

			if (numberDigitalCash > digitalCashValueOld) {
				digitalCashValue.classList.add('increasedValue')
				setTimeout(function(){ 
					digitalCashValue.classList.remove('increasedValue')
				}, 3000);
			} 
			else if (numberDigitalCash < digitalCashValueOld) {
				digitalCashValue.classList.add('decreasedValue')
				setTimeout(function(){ 
					digitalCashValue.classList.remove('decreasedValue')
				}, 3000);
			}
			digitalCashValueOld = numberDigitalCash
		})
		.catch(error => {
			console.log(error)
		})
}
getCurrencyValues()
setInterval(getCurrencyValues, 10000)