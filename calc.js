

const calc = document.querySelector(".btn1");
const tip=document.querySelector(".tip")
tip.style.display="none";

calc.addEventListener("click",() =>{
    const bill = document.querySelector(".amount").value;
    const numberofpeople = document.querySelector(".numb  ").value;
    const selectedValue = document.querySelector(".list").value;
    document.querySelector(".tipamount").value = "Rs"+ "" + (bill*selectedValue)/numberofpeople;
    tip.style.display="inline";
})