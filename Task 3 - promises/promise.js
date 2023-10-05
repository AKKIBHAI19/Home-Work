let display = (val)=>{
    document.querySelector('#demo').innerText = val;
}
  
  let myPromise = new Promise(function(resolve, reject) {
    let name = 'akshay';
    age = 21;
    let x = 28
    let strlength = name.length;
    let y = age+strlength;

  
  // The producing code (this may take some time)
  
    if (x > y) {
      resolve("yes you are qualified for this");
    } else {
      reject("no you are now rejected");
    }
  });
  
  myPromise.then(
(value)=>{
  display(value)
},
(error)=>{
    display(error)
}
  );
