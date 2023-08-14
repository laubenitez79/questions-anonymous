"use client";
import Swal from "sweetalert2";

export default function CopyQuestionToClipboard() {
  async function handleClick() {
    const image = await fetch(`${location.pathname}/opengraph-image`).then((res) => res.blob());

    await navigator.clipboard.write([
      new ClipboardItem({
        [image.type]: image,
      }),
    ]);

    Swal.fire("PreguntaXpress", "Copiado en portapapeles", "success")
      .then((res) => {
        res;
      })
      .catch((err) => {
        err;
      });
  }

  return (
    <button
      className="transition-color w-full rounded-lg bg-orange-500 p-4 text-xl font-medium hover:bg-orange-600"
      type="button"
      onClick={handleClick}
    >
      Copiar al portapapeles
    </button>
  );
}
