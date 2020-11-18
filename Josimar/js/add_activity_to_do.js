let plus = document.getElementById('plus');
let activity_input = document.querySelector('.activity_input');
plus.addEventListener('click', function() {
    
  if(activity_input.style.display === 'block') {
        activity_input.style.display = 'none';
  } else {
        activity_input.style.display = 'block';
  }
});