export default function About() {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          About Task Management System
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Our Task Management System is built to help teams and individuals stay
          organized, boost productivity, and never miss a deadline. Whether
          you're managing a small project or a large team, we make it easier to
          plan, prioritize, and execute tasks effectively.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
          <h3 className="text-xl font-semibold text-gray-800">
            🧠 Simple & Intuitive
          </h3>
          <p className="mt-2 text-gray-600">
            Designed with a user-friendly interface, it’s easy for anyone to
            create, track, and manage tasks without any learning curve.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
          <h3 className="text-xl font-semibold text-gray-800">
            🔔 Smart Reminders
          </h3>
          <p className="mt-2 text-gray-600">
            Stay on top of your deadlines with intelligent reminders and
            real-time updates that keep your tasks in check.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
          <h3 className="text-xl font-semibold text-gray-800">
            👥 Team Collaboration
          </h3>
          <p className="mt-2 text-gray-600">
            Collaborate seamlessly with your team. Assign tasks, leave comments,
            and track progress — all in one place.
          </p>
        </div>
      </div>
    </section>
  );
}
