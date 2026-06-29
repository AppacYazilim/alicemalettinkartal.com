import { AckHero } from "../../components/AckHero";
import { AckBio } from "../../components/AckBio";
import { AckVentures } from "../../components/AckVentures";
import { AckThoughts } from "../../components/AckThoughts";
import { AckFooter } from "../../components/AckFooter";

export default function Page() {
  return (
    <>
      <AckHero />
      <AckBio />
      <AckVentures />
      <AckThoughts />
      <AckFooter />
    </>
  );
}
