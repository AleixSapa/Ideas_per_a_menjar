document.addEventListener("DOMContentLoaded", () => {
  const notification = document.getElementById("notification");
  notification.classList.add("show");

  setTimeout(() => {
    notification.classList.remove("show");
  }, 3000); // La notificació desapareix després de 3 segons
});
