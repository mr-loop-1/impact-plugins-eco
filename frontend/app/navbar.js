import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="mt-5 ml-5">
            <Link href="/">
                <Image src={"logo.svg"} height={50} width={50} />
            </Link>
        </nav>
    );
}
