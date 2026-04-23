function add(){
  let q = document.getElementById("q").value;
  let o1 = document.getElementById("o1").value;
  let o2 = document.getElementById("o2").value;
  let o3 = document.getElementById("o3").value;
  let o4 = document.getElementById("o4").value;
  let ans = Number(document.getElementById("ans").value);
  let sub = document.getElementById("sub").value;

  db.ref("questions/"+sub).push({
    q:q,
    options:[o1,o2,o3,o4],
    answer:ans
  });

  alert("Added!");
}
