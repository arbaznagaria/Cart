import { clickfcn } from "./clickfcn";
import { IData } from "./IData";

export class Cart{
    cartdata: IData[]; 
    constructor(abcd: IData[]){
        this.cartdata = abcd;
        this.cart()
    }
    cart():void{
        var cartbtn = document.getElementById("cartbtn")
        var cartdata = document.getElementById("cartshow")
        var str:string;
        var total:number = 0;

        var abcd:any = this.cartdata;
        cartbtn.addEventListener("click",function cartshow(){
            str='';
        console.log(abcd)
        str += '<div class="row">'
        for(var i in abcd){ 
            var totalprice:number = abcd[i].disc_price * abcd[i].count;
            total += totalprice;
            str += '<div class="col-12">'
            str += '<div class="offer mb-4">'
            str += '<div class="row">'
            str += '<div class="col-2">'
            str += '<img src="'+abcd[i].img_url+'" class="img-fluid">'
            str += '</div>'
            str += '<div class="col-2">'
            str += '<p>Product Count : '+abcd[i].count+'</p>'
            str += '</div>'
            str += '<div class="col-2">'
            str += '<p>Price PerItem : '+abcd[i].disc_price+'</p>'
            str += '</div>'
            str += '<div class="col-2">'
            str += '<p>Price : '+totalprice+'</p>'
            str += '</div>'
            str += '<div class="col-2">'
            str += '<button class="btn btn-primary remove" value="'+abcd[i].ID+'" id="remove">Remove item</button>'
            str += '</div>'
            str += '</div></div></div>'
            
        }
        str += '<div class="col-12 text-end">'
        str += '<p>Total Amount : '+total+'</p>'
        str += '</div>'
        str += '</div>'
        cartdata.innerHTML=str;
        })
    }
    // removefn(){
    //     var re = document.getElementsByClassName("remove") as unknown as HTMLButtonElement;
    //     console.log(re)
    //     re.onclick=function(){
    //         alert("abfasd")
    //     }
    // }

}