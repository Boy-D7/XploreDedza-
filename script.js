// Welcome popup removal
setTimeout(() => {
  const popup = document.getElementById('welcome-popup');
  if (popup) popup.remove();
}, 5000);

// Feature of the Week
document.getElementById('feature-text').innerText =
  'Explore Chongoni Rock Art—Malawi’s ancient storytelling gallery.';

// Donation redirect
function redirectToDonation() {
  window.location.href = 'https://your-donation-link.com';
}

// Faces of Dedza (sample data)
const facesData = [
  {
    name: "Chikondi Banda",
    role: "Pottery Artist",
    quote: "Dedza’s soil gives my art its soul.",
    photo: "images/chikondi.jpg"
  }
];

const facesContainer = document.getElementById("faces-container");
facesData.forEach(face => {
  const card = document.createElement("div");
  card.className = "face-card";
  card.innerHTML = `
    <img src="${face.photo}" alt="${face.name}" />
    <h3>${face.name} – ${face.role}</h3>
    <p>“${face.quote}”</p>
  `;
  facesContainer.appendChild(card);
});

// Dedza Moments Submission
document.getElementById("photo-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const photo = document.getElementById("photo").files[0];
  if (photo) {
    const reader = new FileReader();
    reader.onload = function () {
      const img = document.createElement("img");
      img.src = reader.result;
      document.getElementById("submitted-photos").appendChild(img);
    };
    reader.readAsDataURL(photo);
  }
});