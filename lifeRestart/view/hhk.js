$('#clearAllStorage').click(() => clearAllStorage());
function clearAllStorage (){
  localStorage.clear();
  window.location.reload();
}