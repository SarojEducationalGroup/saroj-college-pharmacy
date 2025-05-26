const placedStudents = [
  {
    name: "Vandana Chauhan",
    company: "Eclat Health Solutions",
    logo:  '/placed-student/2.png',
    salary: "₹6.75 LPA",
    bgColor: "bg-blue-800",
  },
  {
    name: "Harsh",
    company: "Medigreen Pharmaceuticals",
    logo: '/placed-student/3.png',
    salary: "₹4.00 LPA",
    bgColor: "bg-neutral-900",
  },
  {
    name: "Sneha Reddy",
    company: "Max Healthcare",
    logo: '/placed-student/1.png',
    salary: "₹12.00 LPA",
    bgColor: "bg-emerald-700",
  },
];

export default function PlacedStudents() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Students Placed with Top Packages
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {placedStudents.map((student, index) => (
            <div
              key={index}
              className={`${student.bgColor} rounded-xl p-6 text-white flex flex-col justify-between h-full`}
            >
              <div>
                <h3 className="text-2xl font-semibold leading-tight">
                  {student.name}
                </h3>
                <p className="text-sm text-gray-200 mb-3">
                  - Placed in {student.company}
                </p>
              </div>

              <div className="flex items-center justify-between mt-6">
                <img
                  src={student.logo}
                  alt={student.company}
                  className="w-28 bg-white p-2 rounded-md"
                />
                <div className="text-right">
                  <p className="text-3xl font-bold">{student.salary}</p>
                  <p className="text-sm text-gray-200">Salary Package</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
