import ClientOnly from "../components/ClientOnly";
import Launches from "./launches";

export default function ClientSide() {
  return (
        <ClientOnly>
          <Launches />
        </ClientOnly>
  );
}