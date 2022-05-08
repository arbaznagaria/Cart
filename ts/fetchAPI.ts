import { ShowOffers } from "./ShowOffers";
export class fetchAPI extends ShowOffers{
    fetchapi(): void {
        var f = fetch('http://localhost:3000/products')
            .then((response)=> 
                // data = JSON.stringify(response);
                // data = JSON.parse(data);
                {
                    return response.json()
                    // localStorage.setItem('cartdata',JSON.stringify(data));
                }
                // for(i in data){
                //     console.log(data[i].id)
                // }
            )
            .then(data => this.showoffers(data.products))

            .catch(function (error) {
                console.log(error)
            });

    }
}