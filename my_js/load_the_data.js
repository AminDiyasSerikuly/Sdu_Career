function item_clicked(id){
  // console.log("Item clicked!");
  var clicked_item = document.getElementById(id);
  // console.log("Item clicked element id: " + id);


  // console.log(clicked_item);
  // var name_of_the_item = clicked_item.childNodes[1].childNodes[1].childNodes[1].childNodes[0].nodeValue;
  // var description_of_the_item = clicked_item.childNodes[1].childNodes[5].childNodes[3].childNodes[0].nodeValue;
  // var image_of_the_item = clicked_item.childNodes[1].childNodes[3].getAttribute("src");
  // var price_of_the_item = clicked_item.childNodes[1].childNodes[5].childNodes[1].childNodes[0].nodeValue;
  // console.log(clicked_item);
  // // console.log(name_of_the_item);
  localStorage.setItem("id", id);
  console.log(id);
  // localStorage.setItem("image_of_the_item", image_of_the_item);
  // localStorage.setItem("description_of_the_item", description_of_the_item);
  // localStorage.setItem("price_of_the_item", price_of_the_item);
  //
  // console.log("Item clicked element id: " + clicked_item);
  // console.log("Item clicked name: " + name_of_the_item);
  // console.log("Item clicked name: " + description_of_the_item);
  // console.log("Item clicked name: " + image_of_the_item);
  // console.log("Item clicked name: " + price_of_the_item);
}

function item_clicked2(id){
  var clicked_item = document.getElementById(id);
  // console.log(clicked_item.childNodes[0].childNodes[0].childNodes[0].childNodes[0].nodeValue);
  var name_of_the_item = clicked_item.childNodes[0].childNodes[0].childNodes[0].childNodes[0].nodeValue;
  var image_of_the_item = clicked_item.childNodes[0].childNodes[1].getAttribute("src");
  var price_of_the_item = clicked_item.childNodes[0].childNodes[2].childNodes[0].childNodes[0].nodeValue;
  var description_of_the_item = clicked_item.childNodes[0].childNodes[2].childNodes[1].childNodes[0].nodeValue;

  localStorage.setItem("name_of_the_item", name_of_the_item);
  localStorage.setItem("image_of_the_item", image_of_the_item);
  localStorage.setItem("description_of_the_item", description_of_the_item);
  localStorage.setItem("price_of_the_item", price_of_the_item);
  // console.log();
  console.log("Item clicked element id: " + clicked_item);
  console.log("Item clicked name: " + name_of_the_item);
  console.log("Item clicked name: " + description_of_the_item);
  console.log("Item clicked name: " + image_of_the_item);
  console.log("Item clicked name: " + price_of_the_item);

}
