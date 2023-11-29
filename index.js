let a=$(".dark");
let flag=false;
const fun=function(){
    if(flag==false){
        $("body").attr("data-bs-theme","dark");
        flag=true;
    }
    else{
        $("body").attr("data-bs-theme","light");
        flag=false;
    }
}
a.click(fun)
$("body").keypress(function(event){
    alert("helo",event.key)
    console.log(event.key)
})
setInterval(()=>{
    $(".il").css("color","red").toggle();
},2000)