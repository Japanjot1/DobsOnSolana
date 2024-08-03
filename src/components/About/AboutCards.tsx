/**
 * v0 by Vercel.
 * @see https://v0.dev/t/mmMC66n9dd0
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"

export default function AboutCards() {
  return (
    <div className="my-24">
     <div className="text-center">
          <h2 className="font-extrabold text-3xl md:text-4xl lg:text-5xl text-white">Dob's Mission</h2>
        </div>
    <section className="w-full py-12 md:py-16 lg:py-20">
      <div className="container grid gap-6 md:gap-8 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          <div className="relative group overflow-hidden rounded-lg">
            <img
              src="/Dobs-1.jpg"
              alt="Card Image"
              width={400}
              height={300}
              className="object-cover w-full aspect-[4/3]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent group-hover:opacity-90 transition-opacity" />
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <h3 className="text-xl font-semibold text-white">Guardian of Trust</h3>
              <p className="text-sm text-white mt-2">
              "Dobs tirelessly patrols the crypto landscape, ensuring that every project and transaction is conducted with honesty and fairness. He exposes those who seek to deceive and exploit, protecting the community from scams and fraud.
              </p>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-lg">
            <img
              src="/Dobs-3.jpg"
              alt="Card Image"
              width={400}
              height={300}
              className="object-cover w-full aspect-[4/3]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent group-hover:opacity-90 transition-opacity" />
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <h3 className="text-xl font-semibold text-white">Champion of Transparency</h3>
              <p className="text-sm text-white mt-2">
              Dobs believes in open, transparent operations where everyone has access to the same information. He advocates for clear communication and full disclosure, ensuring that all participants can make informed decisions.
              </p>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-lg">
            <img
              src="/Dobs-4.jpg"
              alt="Card Image"
              width={400}
              height={300}
              className="object-cover w-full aspect-[4/3]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent group-hover:opacity-90 transition-opacity" />
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <h3 className="text-xl font-semibold text-white">Protector of Community</h3>
              <p className="text-sm text-white/80 mt-2">
              At his core, Dobs is all about community. He fights for the rights and interests of every member, big or small. He encourages collaboration and mutual support, fostering a strong, united front against those who would harm the collective good.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}