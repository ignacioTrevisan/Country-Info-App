import Image from "next/image";
import { GetAllCountries } from "./core/uses-cases/getAllCountries";
import { CountryList } from "./components/countryList";
import Link from "next/link";

export default async function Home() {
  const allCountries = await GetAllCountries();
  if (!allCountries.data) return;
  return (

    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start p-1 w-full">


      <CountryList Countries={allCountries.data} />
    </main>


  );
}
