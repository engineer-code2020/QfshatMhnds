$(function(){
    let xx=20
$.get("https://www.googleapis.com/blogger/v2/blogs/6854104807807729546/posts?maxResults="+xx+"&key=AIzaSyAae3-lpH00xoHemo_elHcve14uGyjxZ4U",function(data,stats){
// let data_cont=JSON.parse(data)
console.log(data.items[2].title)
let cont=""
let uy=1
for(let post of data.items ){
    cont +=`<tr>
    <th scope="row">`+uy+`</th>
    <td>${post.title}</td>
    <td><a href="${post.url}">${post.url}</a></td></tr>`
  $("#cont_tb").html(cont)
  uy++
}

})



})