// input field 

let input_field=document.getElementById('input_field');

// search_btn

let search_btn=document.getElementById('search_btn');

// result

let result=document.getElementById('result');


search_btn.addEventListener('click',function(){



         let country=input_field.value;

         let url=`https://restcountries.com/v3.1/name/${country}`

         fetch(url)
         .then(res=>res.json())
         .then(data=>{


              console.log(data[0])


              result.innerHTML=`
              
              <!-- country flag and logo -->

              <div class="text-center">
  
                  <figure class="bg-[#2e0927] p-2 rounded-xl"><img class="rounded-xl" src="${data[0].flags.png}" alt="Shoes" /></figure>
                  
                   <h1 class="text-2xl text-black font-extrabold">${data[0].name.common}</h1>
              </div>
  
  
              <!-- country information -->
  
              <div class="pt-5">
  
                  <p class="text-base text-black font-extrabold">Capital : <span class="text-[#31ae71]">${data[0].capital}</span> </p>


                  <p class="text-base text-black font-extrabold">Area : <span class="text-[#31ae71]">${data[0].area}</span> </p>
  
                  <p class="text-base text-black font-extrabold">Continent : <span class="text-[#31ae71]">${data[0].continents}</span> </p>


                  <p class="text-base text-black font-extrabold">Sub-Continent : <span class="text-[#31ae71]">${data[0].subregion}</span> </p>
  
                  <p class="text-base text-black font-extrabold">Population : <span class="text-[#31ae71]">${data[0].population}</span> </p>
  
                  <p class="text-base text-black font-extrabold">Currency : <span class="text-[#31ae71]">${(Object.keys(data[0].currencies)[0])}</span> </p>
  
                  <p class="text-base text-black font-extrabold">Common Languages : <span class="text-[#31ae71]">${Object.values(data[0].languages)[0]}</span> </p>
  
  
  
              </div>
              
              
              `;

         })

        //  .catch=(error)=>{
        //     result.innerText='';
        //  }


         input_field.value='';

})