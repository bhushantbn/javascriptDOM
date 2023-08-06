// Get references to HTML elements
const inputText = document.getElementById('inputText');
const generateButton = document.getElementById('generateButton');
const qrCodeContainer = document.getElementById('qrCodeContainer');
const qrCodeImage = document.getElementById('qrCodeImage');

// Event listener for the "Generate" button click
generateButton.addEventListener('click', () => {
  const text = inputText.value.trim(); // Get the input text and remove leading/trailing spaces

  if (text.length > 0) {
    // Generate QR code and display it
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(text)}`;

    // Set the src attribute of the image to the QR code URL
    qrCodeImage.src = qrCodeUrl;

    // Show the QR code container and hide the input field and button
    qrCodeContainer.style.display = 'block';
    // inputText.style.display = 'none';
    // generateButton.style.display = 'none';
  }else{
    alert("Please Generate QR...");
  }
});
