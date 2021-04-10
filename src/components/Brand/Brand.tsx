import Link from "next/link";

import * as B from "./Brand.styles";

export default function Brand() {
  return (
    <Link href="/">
      <B.BrandBlock
        src="/assets/brand.svg"
        alt="HUBusca"
        title="HUBusca"
        width={170}
        height={17}
      />
    </Link>
  );
}
