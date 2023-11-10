import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const details = [
  { id: 1, name: "Yash", role: "Senior Developer" },

  { id: 2, name: "Vaibhav", role: "Backend Developer" },

  { id: 3, name: "Suresh", role: "Frontend Developer" },
];

const Developer = () => {
  const [developer, setDeveloper] = useState({});
  const { id } = useRouter().query;
  useEffect(() => {
    setDeveloper(details.find((detail) => detail.id === +id));
  }, [id]);
  console.log(developer);
  return (
    <>
      {developer ? (
        <h1>
          {developer.name} {developer.role}
        </h1>
      ) : (
        <h1>Developer doesn't exist.</h1>
      )}
    </>
  );
};

export default Developer;