import Head from "next/head";
import { Main } from "../components/Main";
import { RecoilRoot } from "recoil";

export default function Home() {
  return (
    <>
      <Head>
        <title>the rule of 28</title>
      </Head>
      <RecoilRoot>
        <Main />
      </RecoilRoot>
    </>
  );
}
