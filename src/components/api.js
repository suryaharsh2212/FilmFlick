// function givedata(search)
// { 
//     let info;
//     fetch(`https://www.omdbapi.com/?s=${search}&apikey=e3956d65`)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       return response.json();
//     })
//     .then(data => {
//        info = data.Search;
      
//     })
//     .catch(error => {
//       console.error('Fetch error:', error);
//     });
//     console.log(info);
//     return info;

// }
// export default givedata;