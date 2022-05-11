import {Cart} from "./cart";
import {IData} from "./IData";

export class clickfcn{
    click(): any {
        var button = (document.querySelectorAll('.formcontrol') as unknown as HTMLFormElement);
        // button.forEach(function(tag){
        //     tag = tag.href
        console.log(button)
        var counter: any = 0;
        var a = document.querySelector(".badge")
        a.innerHTML = counter;
        var abcd: IData[] = [];
        var js = {} as IData;
        var ispresent: boolean;
        var count:number;
        var isplay:boolean = false;
        for (var i in button) {
            button[i].addEventListener('submit', function (this: HTMLElement, e: Event) {
                e.preventDefault()
                var img: string = (this.parentElement.parentElement.firstChild as HTMLImageElement).src;
                var title: string = (this.parentElement.firstChild as HTMLElement).innerHTML;
                var discprice = (this.parentElement.children[2] as HTMLElement).innerHTML;
                var disc_price: number = parseInt((discprice).replace(/\D/g, ""))
                var id = (this.firstChild as HTMLButtonElement).value;
                // console.log(disc_price)
                // console.log(title)
                // console.log(id)
                counter++;
                count=1;
                a.innerHTML = counter;
                js = {
                    ID: id,
                    count: count,
                    title: title,
                    disc_price: disc_price,
                    img_url: img
                }
                // console.log(js)
                if (abcd.length == 0) {
                    abcd.push(js)
                } else {
                    for (i in abcd) {
                        if (id == abcd[i].ID) {
                            ispresent = true;
                            abcd[i].count++
                            // console.log(abcd[i].count)
                            break;
                        } else {
                            ispresent = false
                        }
                    }
                    if (ispresent == false) {
                        abcd.push(js)
                    }
                }
                console.log(abcd)
            })
        if(isplay==false){
            console.log(abcd)
        new Cart(abcd)
        isplay = true
        }
        }
    }
    //     


}