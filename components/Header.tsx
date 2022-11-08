const Header = ({
  title,
  description
}: {
  title: string
  description: string
}) => {
  return (
    <section className="mt-2">
      <div className="flex justify-center max-w-full">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-5xl">
          {title}
        </h1>
      </div>
      <div className="flex justify-center max-w-full mx-0 sm:mx-28">
        <p className="text-center mb-6 font-light text-zinc-500 lg:mb-8 md:text-lg lg:text-xl">
          {description}
        </p>
      </div>
    </section>
  )
}

export default Header
