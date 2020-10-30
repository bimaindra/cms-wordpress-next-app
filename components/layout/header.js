import Link from 'next/link';

export default function Header() {
  return (
    <>
      <div className="mb-8 mt-8">
        <h2 className="font-bold leading-tight text-2xl">
          <Link href="/">
            <a className="flex items-center text-2xl hover:underline"><img src="/images/bim.jpg" width="75" className="rounded-full mr-4" /> Rubric BimaIndra</a>
          </Link>
        </h2>
      </div>
      <hr className="border-accent-2 mt-8 mb-16" />
    </>
  )
}
