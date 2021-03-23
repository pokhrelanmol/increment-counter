const counters = document.querySelectorAll('.counter');
counters.forEach((counter)=>{
    // console.log(counters)
    counter.innerHTML = 0;

    const updateCounter = ()=>{
        const targetCount = +counter.getAttribute('data-target');
        // console.log(  targetCount)
     const startingCount = Number(counter.innerHTML);
   const incr = targetCount/100;
   if(startingCount < targetCount){
       counter.innerHTML= `${Math.round(startingCount + incr)}`
      setTimeout(updateCounter, 10)
       
   }else{
       counter.innerHTML =targetCount;
   }
  
}

    updateCounter();
    
})



// there  are various ways to convert string to number
// 1. using unary plus operator
// var num = +Str;// here we will get value of str as a number
// 2. the number constructor
// var n = Number(str);
// 3. the parse float function
// var n = parseFloat(str);

