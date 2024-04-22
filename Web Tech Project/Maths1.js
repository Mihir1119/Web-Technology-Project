function Result()
{
    let total = 0;

    var o1 = document.getElementById("flexRadioDefault1_4");
    if (o1.checked) {
        total= total + 1;
    }
    var o2 = document.getElementById("flexRadioDefault2_4");
    if (o2.checked) {
        total = total + 1;
    }
    var o3 = document.getElementById("flexRadioDefault3_2");
    if(o3.checked){
        total = total + 1;
    }
    var o4 = document.getElementById("flexRadioDefault4_1");
    if(o4.checked){
        total = total + 1;
    }
    var o5 = document.getElementById("flexRadioDefault5_4");
    if(o5.checked){
        total = total + 1;
    }
    var o6 = document.getElementById("flexRadioDefault6_2");
    if(o6.checked){
        total = total + 1;
    }
    var o7 = document.getElementById("flexRadioDefault7_3");
    if(o7.checked){
        total = total + 1;
    }
    var o8 = document.getElementById("flexRadioDefault8_3");
    if(o8.checked){
        total = total + 1;
    }
    var o9 = document.getElementById("flexRadioDefault9_2");
    if(o9.checked){
        total = total + 1;
    }
    var o10 = document.getElementById("flexRadioDefault10_1");
    if(o10.checked){
        total = total + 1;
    }
    var o11 = document.getElementById("flexRadioDefault11_3");
    if(o11.checked){
        total = total + 1;
    }
    var o12 = document.getElementById("flexRadioDefault12_2");
    if(o12.checked){
        total = total + 1;
    }
    var o13 = document.getElementById("flexRadioDefault13_2");
    if(o13.checked){
        total = total + 1;
    }
    var o14 = document.getElementById("flexRadioDefault14_3");
    if(o14.checked){
        total = total + 1;
    }
    var o15 = document.getElementById("flexRadioDefault15_2");
    if(o15.checked){
        total = total + 1;
    }
    
    let total_1 = (total / 15) * 100;

    let total_2 = total_1.toFixed(2);

    localStorage.setItem("total", total_2);

    location.href = "Result.html"
}