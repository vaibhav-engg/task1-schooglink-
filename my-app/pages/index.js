import Students from "../components/students";

const data = [
  {
    id: 1,
    name: "suman vaibhav",
    age: 22,
    email: "suman@gmail.com",
  },
  {
    id: 2,
    name: "rajat",
    age: 27,
    email: "rajat@gmail.com",
  },
  {
    id: 3,
    name: "anurag Kumar",
    age: 20,
    email: "anurag@gmail.com",
  },
];

export default function Home() {
  return (
    <div>
      <Students data={data} />
    </div>
  );
}