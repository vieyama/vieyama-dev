import { Portofolio } from "@/utils/directusClient";

const Experiences: React.FC<{ data: Portofolio }> = ({ data }) => {
  return (
    <div
      className="flex flex-col items-center justify-center h-auto p-5 bg-orange-100 md:p-16 dark:bg-slate-700"
    >
      <h2 className="mb-10 text-2xl font-semibold">Experiences</h2>

      <ol className="relative border-l border-gray-200 dark:border-gray-700">
        {data?.Experiences?.map(item => (
          <li className="mb-10 ml-6" key={item.id}>
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <svg
                className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </span>
            <h3 className="flex items-center mb-1 ml-2 text-lg font-semibold">
              {item.Name}
              {item.Current ? <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">
                Latest
              </span> : null}
            </h3>
            <time className="block mb-2 ml-2 text-sm font-normal leading-none">
              {item.StartDate} {item.EndDate ? `- ${item.EndDate}` : ''}
            </time>
            <p className="mb-4 ml-2 text-base font-normal">
              {item.CompanyName}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Experiences;
