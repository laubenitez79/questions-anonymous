import type {GetStaticPaths, GetStaticProps} from "next";

import {createClient} from "@supabase/supabase-js";
import {ImageResponse} from "next/server";

const supabase = createClient(
  "https://kzaxahkhotoyvmujnsut.supabase.co",
  process.env.SUPABASE_KEY!,
);

export default function Image({question}: {question: {id: string; text: string}}) {
  return (
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
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const {data, error} = await supabase.from("questions").select("id");

  if (error) {
    console.error(error);

    return {
      paths: [],
      fallback: false,
    };
  }

  const paths = data.map((question: {id: string}) => ({
    params: {id: question.id},
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({params}) => {
  const {id} = params!;
  const {data, error} = await supabase.from("questions").select().eq("id", id).single();

  if (error) {
    console.error(error);

    return {
      notFound: true,
    };
  }

  const question = data as {id: string; text: string};

  return {
    props: {
      question,
    },
  };
};
