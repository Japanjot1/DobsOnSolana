"use client"
import Link from "next/link"

export default function Merch() {
  return (
    <section className="grid grid-cols-1 gap-4  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
      <div className="border-2 bg-white/10 relative overflow-hidden rounded-lg group">
        <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
          <span className="sr-only">View</span>
        </Link>
        <img
          src="/merch/shirtOne.png"
          alt="Product 1"
          width="200"
          height="200"
          className="object-cover w-full h-60"
          style={{ aspectRatio: "200/200", objectFit: "cover" }}
        />
      </div>
      <div className="border-2 bg-white/10 relative overflow-hidden rounded-lg group">
        <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
          <span className="sr-only">View</span>
        </Link>
        <img
          src="/merch/shirtTwo.png"
          alt="Product 2"
          width="200"
          height="200"
          className="object-cover w-full h-60"
          style={{ aspectRatio: "200/200", objectFit: "cover" }}
        />
      </div>
      <div className="border-2 bg-white/10 relative overflow-hidden rounded-lg group">
        <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
          <span className="sr-only">View</span>
        </Link>
        <img
          src="/merch/shirtThree.png"
          alt="Product 3"
          width="200"
          height="200"
          className="object-cover w-full h-60"
          style={{ aspectRatio: "200/200", objectFit: "cover" }}
        />
      </div>
    </section>
  )
}