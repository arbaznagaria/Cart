export class ShowOffers{
    showoffers():void{
        var data:any = localStorage.getItem('cartdata');
        var cart = document.querySelector('.cart');
        // console.log(cart)
        
        // document.getElementsByClassName("cart").innerHTML = "Arbaz";
        data = JSON.parse(data);
        // console.log(data)
        var str:string = '';
        str += '<div class="row mt-5">'
        for(const i in data){
            str += '<div class="col-3 mb-3">'
            str += '<div class="card h-100">'
            str += '<img src="'+data[i].img_url+'" class="card-img-top p-5">'
            str += '<div class="card-body">'
            str += '<h5 class="card-title">'+data[i].title+'</h5>'
            str += '<del><p class="card-text">Price : '+data[i].orig_price+'</p></del>'
            str += '<p class="card-text" style="color:red;">Offer Price : '+data[i].disc_price+'</p>'
            str += '<p class="card-text"">Description : '+data[i].desc+'</p>'
            str += '<a href="#'+data[i].id+'" class="btn btn-primary">Add to Cart</a>'
            str += '</div></div></div>'
        }
        str += "</div>"
        cart.innerHTML=str;
        // console.log("str")
    }
}