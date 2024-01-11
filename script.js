const tabs = document.querySelectorAll('.tab a');

tabs.forEach(tab => {
  tab.addEventListener('click', function(e) {
    e.preventDefault();
    tabs.forEach(tab => tab.classList.remove('active'));
    this.classList.add('active');
  });
});
function toggleWindow() {
    var window = document.getElementById("window");
    window.classList.toggle("opened");
  }
  