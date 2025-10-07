const collegeFamouse = [
    { AREA: "iit delhi ", branch: "cse", year: "2024-2025" },
    { AREA: "iit mumbai ", branch: "cse", year: "2024-20" },
    { AREA: "iit kharagpur ", branch: "cse", year: "2024-20" },
    { AREA: "iit madras ", branch: "cse", year: "2024-20" },
    { AREA: "iit kanpur ", branch: "cse", year: "2024-20" },

]
//using for loops
 for(let i=0;i<collegeFamouse.length;i++){
    console.log(collegeFamouse[i].AREA)
 }
array.forEach(element => {
    
});
//using forEach loop
collegeFamouse.forEach(function(names,index){
    console.log(names.AREA);
})

const ages=[22,34,50,78,87,60,84,63,52,99,95];


for(let i=0;i<ages.length;i++){
    if(ages[i]>50){
        console.log(ages[i])
    }
}
 // filter method
collegeFamouse.filter((colleges)=>{
    if(colleges.AREA==="iit delhi"){
        return true;
    }
})
console.log(collegeFamouse)
//filter method
 const since=ages.filter((since)=>{
    if(since>=60){
        return senior
    }

})
console.log(since);
 //or
ages.filter((age)=>{(age>=60)

})
console.log(ages)