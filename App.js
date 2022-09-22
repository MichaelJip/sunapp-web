function navigate() {
  if (/Mobi|Android/i.test(navigator.userAgent)) {
    window.location.href =
      "https://play.google.com/store/apps/details?id=com.sunedu.app&hl=en&gl=US";
  }
  if (/Mobi|iPad|iPhone|iPod/i.test(navigator.userAgent)) {
    window.location.href =
      "https://apps.apple.com/id/app/sun-education-group/id1446868544?l=id";
  }
}
