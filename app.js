let btn=document.querySelector("button");
let pra=document.querySelector("#pra")

let url="https://catfact.ninja/fact";

async function getFacts(){
    try{
        let res= await axios.get(url);
        return res.data.fact;     
    }
    catch(e){
        console.log("Error");
    }
}

btn.addEventListener("click", async() => {
    let output=await getFacts();
    console.log(output);
    pra.innerText=output;
})
 
