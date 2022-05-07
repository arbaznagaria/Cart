export class ShowOffers{
    showoffers():void{
        var data:any = localStorage.getItem('cartdata');
        var cart :HTMLElement= document.getElementsByClassName('cart')
        cart.innerHTML="Arbaz";
        // document.getElementsByClassName("cart").innerHTML = "Arbaz";
        data = JSON.parse(data);
        // console.log(data)
        var str:string = '';
        str += '<div class="row">'
        for(const i in data){
            str += '<div class="col-4">'
            str += '<img src="'+data[i].img_url+'" class="img-fluid">'
            str += '</div>'
        }
        str += "</div>"
        console.log(str)
    }
}