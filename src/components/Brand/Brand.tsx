import Link from "next/link";
import Image from "next/image";

export default function Brand() {
  return (
    <Link href="/">
      <Image
        src="/assets/brand.svg"
        alt="HUBusca"
        title="HUBusca"
        className="brand__img"
        width={170}
        height={17}
        layout="fixed"
      />
    </Link>
  );
}
