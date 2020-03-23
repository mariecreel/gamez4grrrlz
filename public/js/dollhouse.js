function handleClick(id){
  $("#kitchendialog").dialog({ autoOpen: false, modal: true, width:400});
  $("#bedroomdialog").dialog({ autoOpen: false, modal: true, width:400});
  $("#bathroomdialog").dialog({ autoOpen: false, modal: true, width:400 });
  $("#closetdialog").dialog({ autoOpen: false, modal: true, width:400 });
  const element = document.getElementById(id);
  switch (id) {
    case "kitchen":
      if(element.src ="../assets/images/dollhouse/cleankitchen.png"){
        element.src = "../assets/images/dollhouse/corruptkitchen.png";
      }else{
        element.src = "../assets/images/dollhouse/cleankitchen.png";
      };
      $("#kitchendialog").dialog("open");
      break;
    case "bathroom":
      if(element.src ="../assets/images/dollhouse/cleanbathroom.png"){
        element.src = "../assets/images/dollhouse/corruptbathroom.png";
      }else{
        element.src = "../assets/images/dollhouse/cleanbathroom.png";
      };
      $("#bathroomdialog").dialog("open");
      break;
    case "bedroom":
      if(element.src ="../assets/images/dollhouse/cleanbedroom.png"){
        element.src = "../assets/images/dollhouse/corruptbedroom.png";
      }else{
        element.src = "../assets/images/dollhouse/cleanbedroom.png";
      };
      $("#bedroomdialog").dialog("open");
      break;
    case "closet":
      if(element.src ="../assets/images/dollhouse/cleancloset.png"){
        element.src = "../assets/images/dollhouse/corruptcloset.png";
      }else{
        element.src = "../assets/images/dollhouse/cleancloset.png";
      };
      $("#closetdialog").dialog("open");
    }
}
