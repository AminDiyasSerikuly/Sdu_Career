var id_of_item = localStorage.getItem("id");
// var image_of_the_item = localStorage.getItem("image_of_the_item");
// var description_of_the_item = localStorage.getItem("description_of_the_item");
// var price_of_the_item = localStorage.getItem("price_of_the_item");
loadXMLDoc();
// document.getElementById("item_image_of_the_page").src =  image_of_the_item;
// document.getElementById("item_name_item_page").innerHTML =  name_of_the_item;
// document.getElementById("item_description_item_page").innerHTML =  description_of_the_item;
// document.getElementById("item_price_item_page").innerHTML =  price_of_the_item;

function loadXMLDoc(count,arr) {
  var j = count;
  var id_counter = arr;
  xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction(this, j, id_counter);

    }
  };
  xmlhttp.open("GET", "news.xml", true);
  xmlhttp.send();
}

function myFunction(xml, j, id_counter) {
  var i;
  var xmlDoc = xml.responseXML;
  var image_src_of_ns;
  var content_of_ns;
  var x_id = xmlDoc.getElementsByTagName("ID");
  var x_all = xmlDoc.getElementsByTagName("ITEM");
  // for (i = 0; i < x.length; i++){
  //   for(j = 0; j < x[i].length; j++){
  //
  //   }
  // }

  for (i = 0; i <x_all.length; i++) {
    // console.log();

    if(id_of_item == x_all[i].childNodes[3].childNodes[0].nodeValue){
      // console.log(id_of_item + "==" + x_all[i].childNodes[3].childNodes[0].nodeValue);
      image_src_of_ns = x_all[i].childNodes[5].childNodes[0].nodeValue;
      content_of_ns = x_all[i].childNodes[1].childNodes[0].nodeValue;
      // console.log("The image source is: " + image_src_of_ns);
      // console.log("The content is: \t" + content_of_ns);
      // item_general_box += x_all[i].getElementsByTagName("SRC")[0].childNodes[0].nodeValue;
    }
  // document.getElementById("nsbc_image_of_the_box").src = item_general_box;
  }
  document.getElementById("nsbc_image_of_the_box").src = image_src_of_ns;
  document.getElementById("nsbc_paragraph_of_the_box").innerHTML = content_of_ns;

  // for (i = j; i <x.length; i++) {
  //     item_general_box += "<div class='container item_general_box'><a href='item_page.html' id='food" + id_counter[0]+ "'onclick='item_clicked2(this.id)'><div class='item_box text-center'><div class='item_box_header'><h3>" +
  //     x[i].getElementsByTagName("ITEM_NAME")[0].childNodes[0].nodeValue + "</h3></div>"
      // + "<img src='" +
      // x[i].getElementsByTagName("SRC")[0].childNodes[0].nodeValue +"' "+
      // "width='100%' height='70%'>" + "<div class='item_box_footer'><h5>" +
      // x[i].getElementsByTagName("ID")[0].childNodes[0].nodeValue +
      // "</h5><p style='display:none;'>Айранды ішкен өте керемет!</p></div></div>" +
      // "<a href='item_page.html' id='food" + id_counter[1]+ "'onclick='item_clicked2(this.id)'><div class='item_box text-center'><div class='item_box_header'><h3>" +
      // x[i].getElementsByTagName("ITEM_NAME")[1].childNodes[0].nodeValue + "</h3></div>"
      // + "<img src='" +
      // x[i].getElementsByTagName("SRC")[1].childNodes[0].nodeValue +"' "+
      // "width='100%' height='70%'>" + "<div class='item_box_footer'><h5>" +
      // x[i].getElementsByTagName("ID")[1].childNodes[0].nodeValue +
      // "</h5><p style='display:none;'>Айранды ішкен өте керемет!</p></div></div>"+
      // "<a href='item_page.html' id='food" + id_counter[2]+ "'onclick='item_clicked2(this.id)'><div class='item_box text-center'><div class='item_box_header'><h3>" +
      // x[i].getElementsByTagName("ITEM_NAME")[2].childNodes[0].nodeValue + "</h3></div>"
      // + "<img src='" +
      // x[i].getElementsByTagName("SRC")[2].childNodes[0].nodeValue +"' "+
      // "width='100%' height='70%'>" + "<div class='item_box_footer'><h5>" +
      // x[i].getElementsByTagName("ID")[2].childNodes[0].nodeValue +
      // "</h5><p style='display:none;'>Айранды ішкен өте керемет!</p></div></div>"+
      // "<a href='item_page.html' id='food" + id_counter[3]+ "'onclick='item_clicked2(this.id)'><div class='item_box text-center'><div class='item_box_header'><h3>" +
      // x[i].getElementsByTagName("ITEM_NAME")[3].childNodes[0].nodeValue + "</h3></div>"
      // + "<img src='" +
      // x[i].getElementsByTagName("SRC")[3].childNodes[0].nodeValue +"' "+
      // "width='100%' height='70%'>" + "<div class='item_box_footer'><h5>" +
      // x[i].getElementsByTagName("ID")[3].childNodes[0].nodeValue +
      // "</h5><p style='display:none;'>Айранды ішкен өте керемет!</p></div></div></a></div>";
  //     id_counter++;
  //     break;
  //
  //
  // }
  // document.getElementById("load_more_div").innerHTML += item_general_box;
  // return j;
}
