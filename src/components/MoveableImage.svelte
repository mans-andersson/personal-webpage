<script lang="ts">
  import { onMount } from "svelte";
  let {
    imagePath,
    imageAlt,
    rotationDegree = 0,
  }: {
    imagePath: string;
    imageAlt: string;
    rotationDegree: number;
  } = $props();
  let imgElement: HTMLImageElement | null;
  let horizontalOffset = 0;
  let verticalOffset = 0;
  const moveImage = (event: PointerEvent) => {
    imgElement!.style.left = `${event.clientX + horizontalOffset + window.scrollX}px`;
    imgElement!.style.top = `${event.clientY + verticalOffset + window.scrollY}px`;
  };

  onMount(() => {
    if (imgElement) {
      imgElement.addEventListener("pointerdown", (event) => {
        event.preventDefault();
        imgElement!.style.transform = "rotate(0deg)";
        imgElement!.style.zIndex = "10";
        imgElement!.setPointerCapture(event.pointerId);
        const rect = imgElement!.getBoundingClientRect();
        horizontalOffset = rect.x - event.clientX;
        verticalOffset = rect.y - event.clientY;
        imgElement!.style.transform = `rotate(${rotationDegree}deg)`;
        imgElement!.addEventListener("pointermove", moveImage);
        imgElement!.addEventListener("touchmove", (event) => {
          event.preventDefault();
        });
        imgElement!.addEventListener("pointerup", (event) => {
          imgElement!.style.zIndex = "0";
          imgElement!.releasePointerCapture(event.pointerId);
          imgElement!.removeEventListener("pointermove", moveImage);
        });
      });
    }
  });
</script>

<div class="h-48 w-48 lg:h-64 lg:w-64 flex justify-center">
  <img
    id="moveable-image"
    alt={imageAlt}
    src={imagePath}
    bind:this={imgElement}
    class="absolute h-48 lg:h-64 rounded-xl cursor-grab active:cursor-grabbing fly-in"
    style="--rotation-degree: {rotationDegree}deg;"
  />
</div>

<style>
  .fly-in {
    opacity: 0;
    transform: translateY(100%);
    animation: flyIn 1s ease-out forwards;
  }

  @keyframes flyIn {
    0% {
      transform: translateY(100%);
      opacity: 0;
    }
    100% {
      transform: rotate(var(--rotation-degree)) translateY(0);
      opacity: 1;
    }
  }
</style>
