function saveName() {
  let name = document.getElementById("name").value;

  if (name === "") {
    alert("Naam likho!");
    return;
  }

  localStorage.setItem("username", name);

  db.ref("users").push({
    name: name
  });

  alert("Saved!");
}
