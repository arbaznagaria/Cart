export class clickfcn {
    click(): void {
        var button = (document.querySelectorAll('.formcontrol') as unknown as HTMLFormElement);
        // button.forEach(function(tag){
        //     tag = tag.href
        console.log(button)
        var counter:any = 0;
        var a = document.querySelector(".badge")
        a.innerHTML=counter;
        for(var i=0;i<button.length;i++){
        button[i].addEventListener('submit',(e:Event)=>{
            e.preventDefault()
            counter++;
            a.innerHTML=counter;
            // console.log(button.parentElement)
        })
    }
    }
    //     


}