import {createClient} from "@supabase/supabase-js";
import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";
import Link from "next/link";

const supabase = createClient(
  "https://kzaxahkhotoyvmujnsut.supabase.co",
  process.env.SUPABASE_KEY!,
);

async function getQuestion() {
  const questions = await supabase
    .from("questions")
    .select()
    .then(({data}) => data as {id: string; text: string}[]);

  return questions;
}

export default async function Home() {
  const questions = await getQuestion();

  async function handleSubmit(formData: FormData) {
    "use server";

    const question = formData.get("question");
    const id = Date.now().toString();

    await supabase.from("questions").insert({text: question, id});

    revalidatePath("/");
    redirect(`/${id}`);
  }

  return (
    <div className="grid gap-8">
      <form action={handleSubmit} className="grid gap-4">
        <section className="grid">
          <p className="rounded-t-lg bg-pink-500 p-4 text-xl font-medium text-white">Questioncy</p>
          <input
            className="rounded-b-lg bg-white p-4 text-xl text-black"
            name="question"
            placeholder="Me pregunto si..."
          />
        </section>
        <button
          className="transition-color w-full rounded-lg bg-pink-500 p-4 text-xl font-medium hover:bg-pink-600"
          type="submit"
        >
          Enviar pregunta
        </button>
      </form>
      <hr className="opacity-40" />
      <article className="grid grid-cols-[repeat(auto-fill,minmax(230px,1fr))] items-start gap-4">
        {questions.map((question) => (
          <Link key={question.id} className="grid" href={`${question.id}`}>
            <p className=" rounded-t-lg bg-pink-500 p-4 text-xl font-medium text-white">
              Questioncy
            </p>
            <p className="rounded-b-lg bg-white p-4 text-xl text-black">{question.text}</p>
          </Link>
        ))}
      </article>
    </div>
  );
}
