import {createClient} from "@supabase/supabase-js";
import Link from "next/link";

const supabase = createClient(
  "https://kzaxahkhotoyvmujnsut.supabase.co",
  process.env.SUPABASE_KEY!,
);

export default async function Question({params: {id}}: {params: {id: string}}) {
  const question = await supabase
    .from("questions")
    .select()
    .eq("id", id)
    .single()
    .then(({data}) => data as {id: string; text: string}[]);

  return (
    <article className="grid gap-4">
      <Link href="/">← Volver al inicio</Link>
      <section className="grid">
        <p className=" rounded-t-lg bg-pink-500 p-4 text-xl font-medium text-white">Questioncy</p>
        <p className="rounded-b-lg bg-white p-4 text-xl text-black">{question.text}</p>
      </section>
    </article>
  );
}
