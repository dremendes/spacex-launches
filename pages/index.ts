import client from "../apollo-client";
import ClientSide from "./client-side";
import { query } from './launches';

export async function getServerSideProps(context: any) {
  const { data } = await client.query({ query });

  return  {
    props: {
      launches: data,
    },
  };
}

export default function HomePage() {
  return ClientSide();
}