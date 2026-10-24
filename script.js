(function () {
  document.querySelector("#ex1_button").addEventListener("click", function () {
    let content = document.querySelector("#ex1_content");
    content.textContent = "";
    for (let i = 0; i <= 9; i++) {
      content.textContent += i;
      if (i != 9) content.textContent += ",";
    }
  });
  let ex2text = document.querySelector("#ex2_text");
  ex2text.addEventListener("input", function () {
    let content = document.querySelector("#ex2_content");
    content.textContent = "";
    if (ex2text.value.length != 9) {
      content.textContent = "Długość numeru musi być równa 9";
      return;
    }
    if (ex2text.value.match(/[a-zA-Z]/)) {
      content.textContent = "Numer nie może zawierać liter";
      return;
    }
    if (ex2text.value.match(/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/)) {
      content.textContent = "Numer nie może zawierać znaków specjalnych";
      return;
    }
    if (ex2text.value.length == 9)
      content.textContent = "Numer telefonu jest poprawny";
  });

  //1_2

  let ex3item = document.querySelector("#ex3_element")
  ex3item.addEventListener("dragstart", function(e){
    e.dataTransfer.setData("text",  e.target.id);
  });

  let ex3two = document.querySelector("#ex3_two")
  let ex3one = document.querySelector("#ex3_one")
  
  function dragoverHandler(e){
    e.preventDefault();
  }

  function dropHandler(e){
    e.preventDefault();
    const data = e.dataTransfer.getData("text");
    e.target.appendChild(document.getElementById(data));
  }


  ex3two.addEventListener("dragover", dragoverHandler);
  ex3one.addEventListener("dragover", dragoverHandler);

  ex3two.addEventListener("drop", dropHandler);
  ex3one.addEventListener("drop", dropHandler);
})();
