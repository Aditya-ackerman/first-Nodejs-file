const { readFile, writeFile } = require('fs')

readFile('./contant/first.txt','utf8', (err,result)=>
{
  if (err)
  {
   console.log(err)
   return
  }
  const first  = result;
  readFile('./contant/second.txt', 'utf8', (err, result)=>
  {
       if (err)
  {
   console.log(err)
   return
  }
  const second  = result;
  writeFile('./contant/fourth.txt', 'Namruto Uzumaki, Beleive it!',
  (err,result)=>
  {
      if(err)
      {
           console.log(err)
   return
      }
      console.log(result)
  })
  })
})