// PRELOADER ANIAMTION
const preloader = document.querySelector('.preloader');

const animation = () => {
  preloader.style.transform = 'translateY(-100%)';
  preloader.style.transition = '0.5s ease-in-out';
};

setTimeout(animation, 4000);

const fetchingData = () => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'e0f2b7102amshaa1596575ea8f03p17ea7fjsnf3f5f9109382',
      'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
      'X-Access-Token':
        'coinrankingfda33b9c62ed106cf84e6931fce65ed358253038d167f9ca',
    },
  };

  fetch(
    'https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0',
    options
  )
    .then((response) => response.json())
    .then((response) => {
      // FETCHING RANK ONE DATA
      rank1Name.innerHTML = response.data.coins[0].name;
      rank1Price.innerHTML = response.data.coins[0].price;
      rank1MarketCap.innerHTML = response.data.coins[0].marketCap;
      rank1Change.innerHTML = response.data.coins[0].change;

      if (response.data.coins[0].change > 0) {
        document.getElementById('rank1Change').style.color = '#03C988';
      } else if ((response.data.coins[0].change = 0)) {
        document.getElementById('rank1Change').style.color = 'black';
      } else {
        document.getElementById('rank1Change').style.color = 'red';
      }
      // FETCHING RANK 2 DATA
      rank2Name.innerHTML = response.data.coins[1].name;
      rank2Price.innerHTML = response.data.coins[1].price;
      rank2MarketCap.innerHTML = response.data.coins[1].marketCap;
      rank2Change.innerHTML = response.data.coins[1].change;

      if (response.data.coins[1].change > 0) {
        document.getElementById('rank2Change').style.color = '#03C988';
      } else if ((response.data.coins[1].change = 0)) {
        document.getElementById('rank2Change').style.color = 'black';
      } else {
        document.getElementById('rank2Change').style.color = 'red';
      }
      // FETCHING RANK 3 DATA
      rank3Name.innerHTML = response.data.coins[2].name;
      rank3Price.innerHTML = response.data.coins[2].price;
      rank3MarketCap.innerHTML = response.data.coins[2].marketCap;
      rank3Change.innerHTML = response.data.coins[2].change;

      if (response.data.coins[2].change > 0) {
        document.getElementById('rank3Change').style.color = '#03C988';
      } else if ((response.data.coins[2].change = 0)) {
        document.getElementById('rank3Change').style.color = 'black';
      } else {
        document.getElementById('rank3Change').style.color = 'red';
      }
      // FETCHING RANK 4 DATA
      rank4Name.innerHTML = response.data.coins[3].name;
      rank4Price.innerHTML = response.data.coins[3].price;
      rank4MarketCap.innerHTML = response.data.coins[3].marketCap;
      rank4Change.innerHTML = response.data.coins[3].change;

      if (response.data.coins[3].change > 0) {
        document.getElementById('rank4Change').style.color = '#03C988';
      } else if ((response.data.coins[3].change = 0)) {
        document.getElementById('rank4Change').style.color = 'black';
      } else {
        document.getElementById('rank4Change').style.color = 'red';
      }
      // FETCHING RANK 5 DATA
      rank5Name.innerHTML = response.data.coins[4].name;
      rank5Price.innerHTML = response.data.coins[4].price;
      rank5MarketCap.innerHTML = response.data.coins[4].marketCap;
      rank5Change.innerHTML = response.data.coins[4].change;

      if (response.data.coins[4].change > 0) {
        document.getElementById('rank5Change').style.color = '#03C988';
      } else if ((response.data.coins[4].change = 0)) {
        document.getElementById('rank5Change').style.color = 'black';
      } else {
        document.getElementById('rank5Change').style.color = 'red';
      }
      // FETCHING RANK 6 DATA
      rank6Name.innerHTML = response.data.coins[5].name;
      rank6Price.innerHTML = response.data.coins[5].price;
      rank6MarketCap.innerHTML = response.data.coins[5].marketCap;
      rank6Change.innerHTML = response.data.coins[5].change;

      if (response.data.coins[5].change > 0) {
        document.getElementById('rank6Change').style.color = '#03C988';
      } else if ((response.data.coins[5].change = 0)) {
        document.getElementById('rank6Change').style.color = 'black';
      } else {
        document.getElementById('rank6Change').style.color = 'red';
      }
      // FETCHING RANK 7 DATA
      rank7Name.innerHTML = response.data.coins[6].name;
      rank7Price.innerHTML = response.data.coins[6].price;
      rank7MarketCap.innerHTML = response.data.coins[6].marketCap;
      rank7Change.innerHTML = response.data.coins[6].change;

      if (response.data.coins[6].change > 0) {
        document.getElementById('rank7Change').style.color = '#03C988';
      } else if ((response.data.coins[6].change = 0)) {
        document.getElementById('rank7Change').style.color = 'black';
      } else {
        document.getElementById('rank7Change').style.color = 'red';
      }
      // FETCHING RANK 8 DAAT
      rank8Name.innerHTML = response.data.coins[7].name;
      rank8Price.innerHTML = response.data.coins[7].price;
      rank8MarketCap.innerHTML = response.data.coins[7].marketCap;
      rank8Change.innerHTML = response.data.coins[7].change;

      if (response.data.coins[7].change > 0) {
        document.getElementById('rank8Change').style.color = '#03C988';
      } else if ((response.data.coins[7].change = 0)) {
        document.getElementById('rank8Change').style.color = 'black';
      } else {
        document.getElementById('rank8Change').style.color = 'red';
      }
      // FETCHING RANK 9 DATA
      rank9Name.innerHTML = response.data.coins[8].name;
      rank9Price.innerHTML = response.data.coins[8].price;
      rank9MarketCap.innerHTML = response.data.coins[8].marketCap;
      rank9Change.innerHTML = response.data.coins[8].change;

      if (response.data.coins[8].change > 0) {
        document.getElementById('rank9Change').style.color = '#03C988';
      } else if ((response.data.coins[8].change = 0)) {
        document.getElementById('rank9Change').style.color = 'black';
      } else {
        document.getElementById('rank9Change').style.color = 'red';
      }
      // FETCHING RANK 10 DATA
      rank10Name.innerHTML = response.data.coins[9].name;
      rank10Price.innerHTML = response.data.coins[9].price;
      rank10MarketCap.innerHTML = response.data.coins[9].marketCap;
      rank10Change.innerHTML = response.data.coins[9].change;

      if (response.data.coins[9].change > 0) {
        document.getElementById('rank10Change').style.color = '#03C988';
      } else if ((response.data.coins[9].change = 0)) {
        document.getElementById('rank10Change').style.color = 'black';
      } else {
        document.getElementById('rank10Change').style.color = 'red';
      }

      // FOR SEARCHING THE CURRENCY
      const option = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key':
            'dc18e5742dmsh9de7e330cd630d1p1a2007jsncbbe32bef71e',
          'X-RapidAPI-Host': 'coinlore-cryptocurrency.p.rapidapi.com',
        },
      };

      const userInput = document.getElementById('userInput').innerHTML;
      fetch(
        `https://coinlore-cryptocurrency.p.rapidapi.com/api/ticker/?name=${userInput}`,
        option
      )
        .then((response) => response.json())
        .then((response) => {
          name.innerHTML = response.data.coin.name;
          price.innerHTML = response.data.coin.price;
          marketCap.innerHTML = response.data.coin.marketCap;
          rank.innerHTML = response.data.coin.rank;
          website.innerHTML = response.data.coin.websiteUrl;
          change.innerHTML = response.data.coin.change;
          listed.innerHTML = response.data.coin.numberOfExchanges;

          console.log(response);
        })
        .catch((err) => console.error(err));
    })
    .catch((err) => console.error(err));
};

submit.addEventListener('click', (e) => {
  e.preventDefault();
});

const dataArea = document.querySelector('.data-area');

const handleOnClick = () => {
  dataArea.style.transform = 'translateY(100%)';
  dataArea.style.opacity = '100%';
};
fetchingData();
