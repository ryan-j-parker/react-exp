// import React from 'react';

// function Twitter() {
//   return (
//     <div>Twitter</div>
//   );
// }

// export default Twitter;

import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://twitter32.p.rapidapi.com/getTweetsByHashtag',
  params: { hashtag: 'crypto' },
  headers: {
    'X-RapidAPI-Key': '36451e9fccmsh259cd583d6fc4b8p10c7ddjsn6a0b2ecdc65d',
    'X-RapidAPI-Host': 'twitter32.p.rapidapi.com',
  },
};

axios
  .request(options)
  .then(function(response) {
    console.log(response.data);
  })
  .catch(function(error) {
    console.error(error);
  });
