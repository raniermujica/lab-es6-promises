// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
/*
  getInstruction("mashedPotatoes", 0, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 2, (step3) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 3, (step4) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 4, (step5) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  }, (error) => console.log(error));
*/

// Iteration 1 - using callbacks
// ...
getInstruction("mashedPotatoes", 0, (step1) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;

  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  
    getInstruction("mashedPotatoes", 2, (step3) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
    
      getInstruction("mashedPotatoes", 3, (step4) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
      
        getInstruction("mashedPotatoes", 4, (step5) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
        
          getInstruction("mashedPotatoes", 5, (step6) => {
            document.querySelector("#mashedPotatoes").innerHTML += `<li>${step6}</li>`;
          },(error) => document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes are ready!</li>`);
        })

        }, (error) => {
          console.log(error)
        })
      
    }, (error) => {
      console.log(error)
    })
  
}, (error) => {
  console.log(error)
})

}, (error) => {
  console.log(error)
})

// Iteration 2 - using promises
// ...

obtainInstruction('steak', 0)

  .then( (step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
    return obtainInstruction("steak", 1)
  }) 

  .then( (step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`
    return obtainInstruction("steak", 2)
  })

  .then( (step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`
    return obtainInstruction("steak", 3)
  })

  .then( (step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`
    return obtainInstruction("steak", 4)
  })

  .then( (step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`
    return obtainInstruction("steak", 5)
  })

  .then( (step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`
    return obtainInstruction("steak", 6)
  })

  .then( (step6) => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`
    return obtainInstruction("steak", 7)
  })

  .then( (step7) => {
    document.querySelector("#steak").innerHTML += `<li>${step7}</li>`
    return obtainInstruction("steak", 8)
  })
  
  .catch ((error) => {
    document.querySelector("#steak").innerHTML += `<li>Stake is ready!</li>`
  })

 // obtainInstruction();
/*
  /obtainInstruction('steak', 7)
  .then( (step7) => {
    document.querySelector("#steak").innerHTML += `<li>${step7}</li>`
    return obtainInstruction(8)
  })
  */


// Iteration 3 using async/await
// ...

obtainInstruction('broccoli', 0)
  .then( (step0) => {
    document.querySelector("#broccoli").innerHTML += `<li>${step0}</li>`
    
    async function makeBroccoli() {
  
      try {
      
        let response = await makeBroccoli(1)
        document.querySelector("#broccoli").innerHTML += `<li>${step1}</li>`
        return response
      
        let response2 = await makeBroccoli(2)
        document.querySelector("#broccoli").innerHTML += `<li>${step2}</li>`
        return response2
      
        let response3 = await makeBroccoli(2)
        
      
        let response4 = await makeBroccoli(3)
        
      
        let response5 = await makeBroccoli(4)
        
        let response6 = await makeBroccoli(5)
        
      
        let response7 = await makeBroccoli(6)
        
      
        let response8 = await makeBroccoli(7)
        
      
      }
      catch (error) {
        console.log(error)
      }
      
      }

  })






//makeBroccoli()

// Bonus 2 - Promise all
// ...
