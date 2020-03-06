function handleClick(id){
  const element = document.getElementById(id);
  switch (id) {
    case "kitchen":
      if(element.src ="../assets/images/dollhouse/cleankitchen.png"){
        element.src = "../assets/images/dollhouse/corruptkitchen.png";
      }else{
        element.src = "../assets/images/dollhouse/cleankitchen.png";
      };
      alert(kitchen);
      break;
    case "bathroom":
      if(element.src ="../assets/images/dollhouse/cleanbathroom.png"){
        element.src = "../assets/images/dollhouse/corruptbathroom.png";
      }else{
        element.src = "../assets/images/dollhouse/cleanbathroom.png";
      };
      alert(bathroom);
      break;
    case "bedroom":
      if(element.src ="../assets/images/dollhouse/cleanbedroom.png"){
        element.src = "../assets/images/dollhouse/corruptbedroom.png";
      }else{
        element.src = "../assets/images/dollhouse/cleanbedroom.png";
      };
      alert(bedroom);
      break;
    case "closet":
      if(element.src ="../assets/images/dollhouse/cleancloset.png"){
        element.src = "../assets/images/dollhouse/corruptcloset.png";
      }else{
        element.src = "../assets/images/dollhouse/cleancloset.png";
      };
      alert(closet);
    }
}
