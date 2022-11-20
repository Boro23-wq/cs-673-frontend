import { features } from 'lib/heroFeatures'
import Image from 'next/image'
import { CheckFillIcon } from './Icons'

export const HeroFeaturesSection = () => {
  return (
    <section>
      <div className="px-2 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-20">
        {/* Feature - 1 */}
        <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
          <div className="text-gray-500 sm:text-lg">
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900">
              {features[0].title}
            </h2>
            <p className="mb-8 font-light lg:text-xl">
              {features[0].description}
            </p>
            <ul
              role="list"
              className="pt-8 space-y-5 border-t border-gray-200 my-7">
              {features[0].features.map((feature, index) => (
                <li key={index} className="flex space-x-3">
                  <CheckFillIcon />
                  <span className="text-base font-medium leading-tight text-gray-900">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mb-8 font-light lg:text-xl">
              {features[0].subdescription}
            </p>
          </div>
          <Image
            className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
            src={features[0].icon}
            width="400"
            height="400"
            alt="Hero Feature Image 1"
          />
        </div>

        {/* Feature - 2 */}
        <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
          <Image
            className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
            src={features[1].icon}
            width="400"
            height="400"
            alt="Hero Feature Image 2"
          />
          <div className="text-gray-500 sm:text-lg">
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900">
              {features[1].title}
            </h2>
            <p className="mb-8 font-light lg:text-xl">
              {features[1].description}
            </p>
            <ul
              role="list"
              className="pt-8 space-y-5 border-t border-gray-200 my-7">
              {features[1].features.map((feature, index) => (
                <li key={index} className="flex space-x-3">
                  <CheckFillIcon />
                  <span className="text-base font-medium leading-tight text-gray-900">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
            <p className="font-light lg:text-xl">
              {features[1].subdescription}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
