"use client";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="flex items-center">
        <h1 className="text-6xl font-bold text-gray-800 mr-4">Sorry</h1>
        <div className="h-12 w-px bg-gray-300 mx-4"></div>
        <p className="text-xl text-gray-600">Happened something error</p>
      </div>
    </div>
  );
};

export default ErrorPage;
