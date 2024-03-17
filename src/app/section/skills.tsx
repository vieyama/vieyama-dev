import { Portofolio } from "@/utils/directusClient";

function splitArr(arr2: string[]) {
  var arr1 = arr2.splice(0, Math.floor(arr2.length / 2))
  return [arr1, arr2];
}

const Skills: React.FC<{ data: Portofolio }> = ({ data }) => {
  return (
    <div
      className="flex flex-col items-center justify-center h-auto p-5 bg-white md:p-16 dark:bg-gray-700"
    >
      <h2 className="mb-10 text-2xl font-semibold">Skills</h2>
      <div className="flex flex-col w-auto md:flex-row md:w-full justify-evenly">
        {splitArr(data?.Skills)?.map((item, key) => (
          <ul className="max-w-md space-y-1 list-disc list-inside" key={key}>
            {item.map((item, key) => (
              <li key={key}>{item}</li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Skills;
