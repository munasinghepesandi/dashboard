function Dashboard() {
  return (
    <div className="p-3 bg-gray-50">
      <h1 className="font-bold text-2xl">Dashboard</h1>
      <br />
      <div className="grid grid-cols-3 gap-3">
        <div className="h-[300px] bg-blue-300 rounded-3xl flex flex-col justify-center items-center font-bold text-2xl hover:scale-105 duration-200">
          <div>Active Lessons</div>
          <div className="text-3xl mt-2">4</div>
        </div>
        <div className="h-[300px] bg-gray-400 rounded-3xl flex flex-col justify-center items-center font-bold text-2xl hover:scale-105 duration-200">
          <div>Active Assignments</div>
          <div className="text-3xl mt-2">1</div>
        </div>
        <div className="h-[300px] bg-yellow-200 rounded-3xl flex flex-col justify-center items-center font-bold text-2xl hover:scale-105 duration-200">
          <div>Upcoming Exams</div>
          <div className="text-3xl mt-2">0</div>
        </div>
      </div>

    </div>
    

  );
}

export default Dashboard;
