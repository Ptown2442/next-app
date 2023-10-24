import Image from "next/image";
import jack from "@/public/images/Jc.jpg";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main>
      <Image src={jack} alt="jack playing card" />
    </main>
  );
}
