const zoomTriggers = document.querySelectorAll(".image-zoom-trigger");

if (zoomTriggers.length > 0) {
  const lightbox = document.createElement("dialog");
  const enlargedImage = document.createElement("img");
  const closeButton = document.createElement("button");

  lightbox.className = "image-lightbox";
  lightbox.setAttribute("aria-label", "Image preview");
  enlargedImage.alt = "";
  closeButton.className = "image-lightbox-close";
  closeButton.type = "button";
  closeButton.textContent = "Close";
  closeButton.setAttribute("aria-label", "Close image preview");
  lightbox.append(closeButton, enlargedImage);
  document.body.append(lightbox);

  zoomTriggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const image = trigger.querySelector("img");
      if (!image) {
        throw new Error("Image zoom controls must contain an image.");
      }

      enlargedImage.src = image.currentSrc || image.src;
      enlargedImage.alt = image.alt;
      // Portrait images that are much taller than wide get a scrolling lightbox
      lightbox.classList.toggle("tall", image.naturalHeight > image.naturalWidth * 1.4);
      // Very wide images (code and checker screenshots) scroll sideways on small screens so the text stays readable
      lightbox.classList.toggle("wide", image.naturalWidth > image.naturalHeight * 2.2);
      lightbox.showModal();
      closeButton.focus();
    });
  });

  closeButton.addEventListener("click", () => lightbox.close());
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      lightbox.close();
    }
  });
}
