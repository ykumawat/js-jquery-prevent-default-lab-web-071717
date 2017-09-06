$(document).ready(function(){
  // call functions here
  submitForm()
});

// define functions here

function submitForm() {
  $('form').on('submit', function(event) {
    let task = $('#item').val()
    let list = document.getElementById('list')
    list.innerHTML += '<li>' + task + '</li>'
    event.preventDefault()
  })
}
