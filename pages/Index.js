import Link from "next/link";

const details = [
  { id: 1, name: "Yash", role: "Senior Developer" },

  { id: 2, name: "Vaibhav", role: "Backend Developer" },

  { id: 3, name: "Suresh", role: "Frontend Developer" },
];

const AboutUs = () => {
  return (
    <div>
      {details.map((person) => {
        return (
          <h1 key={person.id}>
            <Link href={`/AboutUs/${person.id}`}>{person.name}</Link>
          </h1>
        );
      })}
    </div>
  );
};

export default AboutUs;