window.onload = function() {
    const popup = document.getElementById("offerPopup");
    setTimeout(() => {
      popup.style.display = "block";
    }, 2000);
  };
  
  function closePopup() {
    const popup = document.getElementById("offerPopup");
    popup.style.display = "none";
  }
  
