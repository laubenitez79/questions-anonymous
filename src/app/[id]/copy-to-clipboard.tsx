"use client";
import React, {useState} from "react";
import Swal from "sweetalert2";

export default function CopyQuestionToClipboard() {
  const [showEmojis, setShowEmojis] = useState(false);

  // async function shareToInstagramStories(imageUrl, caption) {
  //   const encodedCaption = encodeURIComponent(caption);
  //   const instagramUrl = `https://www.instagram.com/stories/create/?backgroundImage=${imageUrl}&text=${encodedCaption}`;

  //   window.location.href = instagramUrl;
  // }

  async function handleClick() {
    const image = await fetch(`${location.pathname}/opengraph-image`).then((res) => res.blob());

    await navigator.clipboard.write([
      new ClipboardItem({
        [image.type]: image,
      }),
    ]);

    setShowEmojis(true);

    setTimeout(() => {
      setShowEmojis(false);
    }, 900);

    // Swal.fire("PreguntaXpress", "Copiado en portapapeles", "success")
    //   .then((res) => {
    //     res;
    //   })
    //   .catch((err) => {
    //     err;
    //   });
  }

  return (
    <div className="grid">
      <button
        className="transition-color w-full rounded-lg bg-orange-500 p-4 text-xl font-medium hover:bg-orange-400"
        type="button"
        onClick={handleClick}
      >
        Copiar al portapapeles
      </button>
      {showEmojis ? (
        <div className="animate-emoji-cascade flex flex-wrap gap-4">
          <span aria-label="Emoji" role="img">
            🤫
          </span>
          <span aria-label="Emoji" role="img">
            🤫
          </span>
          <span aria-label="Emoji" role="img">
            🤫
          </span>
          <span aria-label="Emoji" role="img">
            🤫
          </span>
          <span aria-label="Emoji" role="img">
            🤫
          </span>
          <span aria-label="Emoji" role="img">
            🤫
          </span>
          <span aria-label="Emoji" role="img">
            🤫
          </span>
          <span aria-label="Emoji" role="img">
            🤫
          </span>
          <span aria-label="Emoji" role="img">
            🤫
          </span>
          <span aria-label="Emoji" role="img">
            🤫
          </span>
          <span aria-label="Emoji" role="img">
            🤫
          </span>
          <span aria-label="Emoji" role="img">
            🤫
          </span>
          <span aria-label="Emoji" role="img">
            🤫
          </span>
          <span aria-label="Emoji" role="img">
            🤫
          </span>
          <span aria-label="Emoji" role="img">
            🤫
          </span>
          <span aria-label="Emoji" role="img">
            🤫
          </span>
          <span aria-label="Emoji" role="img">
            🤫
          </span>
          <span aria-label="Emoji" role="img">
            🤫
          </span>
          <span aria-label="Emoji" role="img">
            🤫
          </span>
          <span aria-label="Emoji" role="img">
            🤫
          </span>
          <span aria-label="Emoji" role="img">
            🤫
          </span>
          <span aria-label="Emoji" role="img">
            🤫
          </span>
        </div>
      ) : null}
      {/* <div className="flex max-w-md flex-wrap gap-4">
        <button
          className="transition-color w-full rounded-lg bg-orange-500 p-4 text-xl font-medium hover:bg-orange-400"
          type="button"
          onClick={() =>
            shareToInstagramStories(`${location.pathname}/opengraph-image`, "Pie de foto")
          }
        >
          Instagram
        </button>
        <button
          className="transition-color w-full rounded-lg bg-orange-500 p-4 text-xl font-medium hover:bg-orange-400"
          type="button"
          onClick={() =>
            shareToInstagramStories(`${location.pathname}/opengraph-image`, "Pie de foto")
          }
        >
          Facebook
        </button>
        <button
          className="transition-color w-full rounded-lg bg-orange-500 p-4 text-xl font-medium hover:bg-orange-400"
          type="button"
          onClick={() =>
            shareToInstagramStories(`${location.pathname}/opengraph-image`, "Pie de foto")
          }
        >
          Twitter
        </button>
      </div> */}
    </div>
  );
}
