import Header from '@/components/Header'
import { Layout } from '@/components/Layout'
import { NextHead } from '@/components/NextHead'
import { products } from 'lib/products'

const Products = () => {
  return (
    <Layout>
      <NextHead
        title="Products - Carely"
        metaName="Carely"
        metaContent="Carely enables enrollee-centered, goal-oriented, culturally relevant
            and logical steps to assure that an enrollee receives supportive,
            effective, efficient, timely and cost-effective services."
      />
      <h2 className="text-xs text-center font-bold tracking-wider text-zinc-600">
        CARE PERSONIFIED
      </h2>
      <Header
        title="Our Products"
        description="Carely enables enrollee-centered, goal-oriented, culturally relevant
            and logical steps to assure that an enrollee receives supportive,
            effective, efficient, timely and cost-effective services."
      />

      <div className="bg-white pt-0 sm:pt-20 pb-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mt-10">
            <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
              {products.map((product) => (
                <div key={product.name} className="relative">
                  <dt>
                    <div className="absolute p-1.5 flex h-10 w-10 items-center justify-center rounded-md  bg-zinc-100 text-black">
                      <product.icon
                      // fill={'black'}
                      // w={20}
                      // h={20}
                      // aria-hidden="true"
                      />
                    </div>
                    <p className="ml-16 text-left lg:text-center text-lg font-bold leading-6 text-black">
                      {product.name}
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-left lg:text-center text-base text-zinc-500">
                    {product.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Products
