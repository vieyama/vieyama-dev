
const Skills: React.FC<{}> = () => {
  return (
    <div
      className="flex flex-col items-center justify-center h-auto p-5 bg-white md:p-16 dark:bg-gray-700"
    >
      <h2 className="mb-10 text-2xl font-semibold">Skills</h2>
      <div className="flex flex-col w-auto md:flex-row md:w-full justify-evenly">
        <ul className="max-w-md space-y-1 list-disc list-inside">
          <li>HTML / CSS</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>ReactJS</li>
          <li>Angular</li>
          <li>NextJS</li>
          <li>NestJS</li>
          <li>NodeJS</li>
          <li>Redux</li>
          <li>Jotai</li>
          <li>WordPress</li>
          <li>Laravel</li>
        </ul>
        <ul className="max-w-md space-y-1 list-disc list-inside">
          <li>SCSS</li>
          <li>Ant Design</li>
          <li>Styled Components</li>
          <li>Tailwind CSS</li>
          <li>Chakra UI</li>
          <li>REST API</li>
          <li>GraphQL</li>
          <li>Jira</li>
          <li>Jest / React Testing Library</li>
          <li>GIT</li>
          <li>Docker</li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
