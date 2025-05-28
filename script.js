function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
document.querySelectorAll('a[href^="http"]').forEach(link => {
  link.setAttribute('target', '_blank');
});
 function openPopup(imageSrc) {
    document.getElementById("popupImage").src = imageSrc;
    document.getElementById("certificatePopup").style.display = "flex";
  }

  function closePopup() {
    document.getElementById("certificatePopup").style.display = "none";
  }
  function openPopup(imageUrl) {
  const popup = document.getElementById('certificatePopup');
  const popupImage = document.getElementById('popupImage');
  popupImage.src = imageUrl;
  popup.style.display = 'flex';
}

function closePopup() {
  document.getElementById('certificatePopup').style.display = 'none';
}