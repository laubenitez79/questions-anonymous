import {createClient} from "@supabase/supabase-js";
import {ImageResponse} from "next/server";

const supabase = createClient(
  "https://kzaxahkhotoyvmujnsut.supabase.co",
  process.env.SUPABASE_KEY!,
);

export default async function Image({params: {id}}: {params: {id: string}}) {
  const {data, error} = await supabase.from("questions").select().eq("id", id).single();

  if (error) {
    // Manejo del error
  }

  const question = data as {id: string; text: string};

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 64,
          background: "black",
          color: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            backgroundColor: "hotpink",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p>Questioncy</p>
        </div>
        <div
          style={{
            backgroundColor: "white",
            color: "black",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p
            style={{
              textAlign: "center",
            }}
          >
            {question.text}
          </p>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
