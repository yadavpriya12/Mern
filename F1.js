import fs from "fs"
//Question-2
// try
// {
//     fs.writeFileSync("./F1.txt","JavaScript is lightweightes scripting language")
//     let s = "JavaScript is lightweightes scripting language"
//       let count=0
//     for(let i of s)
//     {
//       if('aeiou'.includes(i.toLowerCase()))
//       {
//         count++
//         console.log(i+" = "+count)
        
//       }
      
//     }
//     console.log("Total = " +count)
// } 
// catch(err)
// {
// console.log("error is occured",err)
// }



// try{

//     fs.writeFileSync("./F1.txt","Environment")
//      console.log("Task is done....")
// }
// catch(err)
// {
// console.log("Error is handle",err)
// }

// try 
// {
//     fs.readFileSync("./F1.txt","utf8")
//     console.log("read operation complete...")
// }
// catch(err)
// {
//  console.log("error is handle in read")
// }


//Question-1
try
{
  let data = fs.readFileSync("./F1.txt","utf8")
  console.log("data is successfully read")


  fs.writeFile("./Copy.txt",data)
  console.log("data is succesfully copied")

}
catch(err)
{
    console.log("Error is occured")
}


//Question-3
