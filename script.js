const dragScrollRails = document.querySelectorAll("[data-drag-scroll]");

dragScrollRails.forEach((rail) => {
  let activePointerId = null;
  let startX = 0;
  let startScrollLeft = 0;
  let moved = false;

  rail.classList.add("is-draggable");

  rail.addEventListener("pointerdown", (event) => {
    if (event.pointerType === "mouse" && event.button !== 0) {
      return;
    }

    activePointerId = event.pointerId;
    startX = event.clientX;
    startScrollLeft = rail.scrollLeft;
    moved = false;

    rail.classList.add("is-dragging");
    rail.setPointerCapture?.(event.pointerId);
  });

  rail.addEventListener("pointermove", (event) => {
    if (activePointerId !== event.pointerId) {
      return;
    }

    const deltaX = event.clientX - startX;

    if (Math.abs(deltaX) > 6) {
      moved = true;
    }

    rail.scrollLeft = startScrollLeft - deltaX;
  });

  const endDrag = (event) => {
    if (activePointerId !== null && event.pointerId !== activePointerId) {
      return;
    }

    activePointerId = null;

    window.requestAnimationFrame(() => {
      rail.classList.remove("is-dragging");
    });
  };

  rail.addEventListener("pointerup", endDrag);
  rail.addEventListener("pointercancel", endDrag);

  rail.addEventListener("dragstart", (event) => {
    event.preventDefault();
  });

  rail.addEventListener(
    "click",
    (event) => {
      if (!moved) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();
      moved = false;
    },
    true
  );
});
