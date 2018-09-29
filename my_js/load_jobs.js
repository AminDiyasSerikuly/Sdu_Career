var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    show_jobs(this);

  }
};
xmlhttp.open("GET", "jobs.xml", true);
xmlhttp.send();


function show_jobs(xml){
  var i;
  var xmlDoc = xml.responseXML;
  var x_id = xmlDoc.getElementsByTagName("ITEM");
  var one_job_at_a_time = "";

  for(i = 0; i < x_id.length; i++){
    // console.log(x_id[i].childNodes[5].childNodes[0].nodeValue);
    one_job_at_a_time += "<a href='vacancy_info.html' style='text-decoration:none;' id='" + x_id[i].childNodes[5].childNodes[0].nodeValue + "' onclick='item_clicked(this.id)'><div class='job_vacancy_general_box'><div class='box_name_of_the_job'><h2 id='name_of_the_job'>"+
    x_id[i].childNodes[1].childNodes[0].nodeValue +"</h2></div><div class='box_city_date_of_the_job'><h4 id='city_of_the_job'>" +
    x_id[i].childNodes[7].childNodes[0].nodeValue + "</h4><h4 id='date_of_the_job'>" +
    x_id[i].childNodes[9].childNodes[0].nodeValue +"</h4></div><div class='box_descrptn_of_the_job'><p id='descrptn_of_the_job'>" +
    x_id[i].childNodes[11].childNodes[0].nodeValue + "</p></div></div></a>";
  }
  document.getElementById("center_job_vacancy_box").innerHTML = one_job_at_a_time;

  // document.getElementById("center_job_vacancy_box").src = ;

}
