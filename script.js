const videoMap = {
  telugu: 'assets/telugu.mp4',
  hindi: 'assets/hindi.mp4',
  english: 'assets/english.mp4'
};

function onScanSuccess(decodedText, decodedResult) {
  console.log(`QR Code detected: ${decodedText}`);
  document.getElementById("qr-reader").style.display = "none";
  document.getElementById("language-selection").classList.remove("hidden");

  html5QrcodeScanner.clear(); // Stop scanning
}

const html5QrcodeScanner = new Html5Qrcode("qr-reader");
html5QrcodeScanner.start(
  { facingMode: "environment" },
  { fps: 10, qrbox: 250 },
  onScanSuccess
);

function playVideo(language) {
  const videoSrc = videoMap[language];
  const videoElement = document.getElementById("info-video");
  videoElement.src = videoSrc;
  videoElement.load();
  videoElement.play();

  document.getElementById("language-selection").classList.add("hidden");
  document.getElementById("video-container").classList.remove("hidden");
}
