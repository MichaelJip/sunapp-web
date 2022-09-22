function unduh() {
  const element = document.getElementById("UNDUH");
  if (navigator.userAgent.match(/iPhone/i)) {
    location.replace(
      "https://apps.apple.com/id/app/sun-education-group/id1446868544?l=id"
    );
  } else if (navigator.userAgent.match(/Android/i)) {
    location.replace(
      "https://play.google.com/store/apps/details?id=com.sunedu.app&hl=en&gl=US"
    );
  }
}
