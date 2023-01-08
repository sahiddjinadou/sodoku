//Recuperer le boutton
const btn = document.querySelector("#button-verif");
//assigné l'évernement click
btn.addEventListener("click", verifier);
const verifier = () => {
  //verifier que les nombre saisis sont bien des nombre 1 à 9

  //recuperer tous les input s
  const listinput = document.querySelectorAll("input");
  console.log(listinput);
  //et pour chacun de input
  // verifier que les champs sont sont valide
  //si c'estpas valide ,tout arreté
};
