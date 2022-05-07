export class fetchAPI {
    fetchapi(): any {
        fetch('http://localhost:3000/products')
            .then(async function (response) {
                // data = JSON.stringify(response);
                // data = JSON.parse(data);
                var data:any = await response.json()
                data = data.products;
                localStorage.setItem('cartdata',JSON.stringify(data));
                // console.log(data)
                // for(i in data){
                //     console.log(data[i].id)
                // }
            })

            .catch(function (error) {
                console.log(error)
            });
    }
}