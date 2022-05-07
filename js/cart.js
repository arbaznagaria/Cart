function fetchapi() {
  fetch('http://localhost:3000/products')
    .then(async function (response) {
      // data = JSON.stringify(response);
      // data = JSON.parse(data);
      var data = await response.json()
      data = data.products;
      console.log(data)
      // for(i in data){
      //     console.log(data[i].id)
      // }
    })

    .catch(function (error) {
      console.log(error)
    });
}
fetchapi()