import Link from 'next/link'

interface IInfo {
  type: string
  value: number | undefined
}

const DashboardCard = ({
  title,
  count,
  category,
  description
}: {
  title: string
  count: number | undefined
  category: IInfo
  description: string
}) => {
  return (
    <div className="relative block p-8 overflow-hidden border border-zinc-100 rounded-lg mr-0 mt-4 sm:mr-2 last:mr-0">
      <span className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-cyan-500  to-blue-500"></span>

      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col">
          <div className="sm:flex justify-between ">
            <div>
              <h5 className="text-xl font-bold text-zinc-800 dark:text-zinc-100">
                {title}
              </h5>
              <p className="mt-1 text-xs font-medium text-zinc-600 dark:text-zinc-400">
                <span>
                  <span className="font-bold">{category.type}: </span>
                  {category.value}
                </span>
              </p>
            </div>
          </div>

          <div className="mt-4 sm:pr-8">
            <p className="text-sm text-zinc-500">{description}</p>
          </div>
        </div>

        <dl className="flex mt-6 justify-between">
          <div className="flex flex-col-reverse">
            <dt className="text-sm font-medium text-zinc-600 dark:text-zinc-100">
              {count}
            </dt>
            <dd className="text-xs text-zinc-400">Total</dd>
          </div>

          <div className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-100 flex flex-col-reverse hover:underline">
            <Link href={`/${title.toLowerCase()}`}>All {title} &rarr;</Link>
          </div>
        </dl>
      </div>
    </div>
  )
}

export default DashboardCard
