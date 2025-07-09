const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white dark:bg-zinc-900">
      <div className="flex flex-col items-center space-y-4">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-emerald-500"></div>
        <p className="text-lg font-medium text-zinc-700 dark:text-zinc-300">
          Loading...
        </p>
      </div>
    </div>
  );
};

export default Loading;
