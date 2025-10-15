import React from "react";

function Class() {
  
  const classes = [
    {
      id: 1,
      subject: "Mathematics",
      teacher: "Mr. Silva",
      time: "08:30 AM - 10:30 AM",
      day: "Monday",
      color: "bg-blue-100",
    },
    {
      id: 2,
      subject: "OODP",
      teacher: "Mrs. Jayasinghe",
      time: "10:15 AM - 11:45 AM",
      day: "Tuesday",
      color: "bg-green-100",
    },
    {
      id: 3,
      subject: "OOP I",
      teacher: "Ms. Perera",
      time: "01:00 PM - 02:30 PM",
      day: "Wednesday",
      color: "bg-yellow-100",
    },
    
    {
      id: 4,
      subject: "English",
      teacher: "Ms. Perera",
      time: "01:00 PM - 02:30 PM",
      day: "Wednesday",
      color: "bg-yellow-100",
    },
    {
      id: 5,
      subject: "OODP I",
      teacher: "Mr. Jayasinghe",
      time: "02:45 PM - 04:15 PM",
      day: "Thursday",
      color: "bg-pink-100",
    },
    {
      id: 1,
      subject: "Mathematics",
      teacher: "Mr. Silva",
      time: "08:30 AM - 10:30 AM",
      day: "Monday",
      color: "bg-blue-100",
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800  mb-8">
          Class Schedule
        </h2>

        { }
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {classes.map((cls) => (
            <div
              key={cls.id}
              className={`p-6 rounded-2xl shadow-md ${cls.color} dark:bg-gray-600 transition transform hover:-translate-y-1 hover:shadow-lg`}
            >
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {cls.subject}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-1">
                <span className="font-medium">Teacher:</span> {cls.teacher}
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-1">
                <span className="font-medium">Day:</span> {cls.day}
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                <span className="font-medium">Time:</span> {cls.time}
              </p>

              {/* Action Buttons */}
              <div className="flex space-x-3">
                <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700">
                  Join Class
                </button>
                <button className="px-4 py-2 bg-gray-200 text-gray-800 text-sm rounded-lg hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Class;
