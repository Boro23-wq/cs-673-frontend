import { SearchIcon } from './Icons'

export const CustomSearch = ({
  handleSearch,
  searchFor
}: {
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void
  searchFor: string
}) => {
  return (
    <form className="mb-6">
      <label
        htmlFor="search"
        className="text-sm font-medium text-gray-900 sr-only">
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <SearchIcon />
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-3.5 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
          placeholder={`Search ${searchFor}`}
          onChange={handleSearch}
          required
        />
        <button
          type="submit"
          className="text-white absolute right-2.5 bottom-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">
          Search
        </button>
      </div>
    </form>
  )
}
