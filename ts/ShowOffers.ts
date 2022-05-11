import { clickfcn } from "./clickfcn";

export class ShowOffers extends clickfcn{

    
    showoffers(data:any):void{
        console.log(data)
        var cart = document.querySelector('.cart');
        
        var str:string = '';
        str += '<div class="row mt-5">'
        for(const i in data){
            str += '<div class="col-lg-4 col-md-4 col-sm-6 col-12 mb-3">'
            str += '<div class="card h-100">'
            str += '<img src="'+data[i].img_url+'" class="card-img-top p-5">'
            str += '<div class="card-body">'
            str += '<h5 class="card-title">'+data[i].title+'</h5>'
            str += '<del><p class="card-text">Price : '+data[i].orig_price+'</p></del>'
            str += '<p class="card-text" style="color:red;">Offer Price : '+data[i].disc_price+'</p>'
            str += '<p class="card-text"">Description : '+data[i].desc+'</p>'
            str += '<form class="formcontrol"><button type="submit" value="'+data[i].id+'" class="btn btn-primary" id="btn">Add to Cart</button></form>'
            str += '</div></div></div>'
        }
        str += "</div>"
        cart.innerHTML=str;
        this.click()
    }
}