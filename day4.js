//compare two JSON have same properties without order?
  
   //var obj1 = {name: "person 1", age:5};
   //var obj2 = {age:5, name: "person 1"};
 
 const obj1 = {
    name : 'person1',
    age  : '5'
 };

 const obj2 = {
    age : '5',
    name : 'person1'
 };

 JSON.stringify(obj1) === JSON.stringify(obj2)
 console.log(true)
 //false

 //_.isEqual(obj1, obj2)
 //true



 
 //2.use rest countries API and display all countries "flags"

 var request = new XMLHttpRequest();

 request.open('GET','https://restcountries.com/v3.1/all',true);
 
 request.send();
 
 request.onload = function(){
     var data = JSON.parse(request.response)
     console.log(data)

     //for(i=0; i<data.length; i++){
       // console.log(data.name)
     //}

    for (var obj of data){
     console.log(obj.flags)
    }
 }


//3.use the rest countries  and print all countries "names"

var request = new XMLHttpRequest();

 request.open('GET','https://restcountries.com/v3.1/all',true);
 
 request.send();
 
 request.onload = function(){
     var data = JSON.parse(request.response)
     console.log(data)

     for(i=0; i<data.length; i++){
      // console.log(data.name)
     }

     for (var obj of data){
         console.log(obj.name)
    }
}


//use the rest countries  and print all countries "region"

var request = new XMLHttpRequest();

 request.open('GET','https://restcountries.com/v3.1/all',true);
 
 request.send();
 
 request.onload = function(){
     var data = JSON.parse(request.response)
     console.log(data)

     for(i=0; i<data.length; i++){
      // console.log(data.region)
     }

     for (var obj of data){
         console.log(obj.region)
    }
}


//use the rest countries  and print all countries "subregion"

var request = new XMLHttpRequest();

 request.open('GET','https://restcountries.com/v3.1/all',true);
 
 request.send();
 
 request.onload = function(){
     var data = JSON.parse(request.response)
     console.log(data)

     for(i=0; i<data.length; i++){
      // console.log(data.subregion)
     }

     for (var obj of data){
         console.log(obj.subregion)
    }
}


//use the rest countries  and print all countries "population"

var request = new XMLHttpRequest();

 request.open('GET','https://restcountries.com/v3.1/all',true);
 
 request.send();
 
 request.onload = function(){
     var data = JSON.parse(request.response)
     console.log(data)

     for(i=0; i<data.length; i++){
      // console.log(data.population)
     }

     for (var obj of data){
         console.log(obj.population)
    }
}