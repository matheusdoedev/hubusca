import Link from "next/link";
import Image from "next/image";

export default function Brand() {
  return (
    <Link href="/">
      <div style={{ cursor: "pointer" }}>
        <Image
          src="/assets/brand.svg"
          alt="HUBusca"
          title="HUBusca"
          width={170}
          height={17}
          layout="fixed"
        />
      </div>
    </Link>
  );
}
