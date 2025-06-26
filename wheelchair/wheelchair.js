// Event listeners for button actions
const callBackButtons = document.querySelectorAll('.btn-primary');

callBackButtons.forEach((button) => {
  button.addEventListener('click', () => {
    alert('Request a call back feature is coming soon!');
  });
});
