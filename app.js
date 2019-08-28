window.addEventListener("load", () => {
  alert(
    "If you want to send a message with the form at the bottom, just click send and don't enter details you'll be redirected"
  );
  const button = document.querySelector(".submit");
  button.addEventListener("click", () => {
    console.log("button clicked");

    window.open(
      "mailto:rcoric03@gmail.com?subject=Put your name here&body=enter your message here"
    );
  });
});
