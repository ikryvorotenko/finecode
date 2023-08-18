export default function Home() {
  return (
    <section className="w-full min-h-screen bg-white dark:bg-gray-900">
      <div className="container relative flex flex-col min-h-screen px-6 py-8 mx-auto">
        <section className="flex items-center flex-1">
          <div className="flex flex-col w-full gap-5 md:gap-10">
            <div>
              <h1 className="text-7xl font-extrabold text-center md:text-9xl">
                <span className="text-transparent bg-gradient-to-br bg-clip-text from-teal-500 via-indigo-500 to-sky-500 dark:from-teal-200 dark:via-indigo-300 dark:to-sky-500">
                  fine
                </span>

                <span className="text-transparent bg-gradient-to-tr bg-clip-text from-blue-500 via-pink-500 to-red-500 dark:from-sky-300 dark:via-pink-300 dark:to-red-500">
                  code
                </span>
              </h1>

              <p className="max-w-3xl mx-auto mt-6 text-lg text-center text-gray-700 dark:text-white md:text-2xl">
                Software development of{" "}
                <span className="text-transparent bg-gradient-to-br bg-clip-text from-teal-500 via-indigo-500 to-sky-400 dark:from-teal-800 dark:via-indigo-800 dark:to-sky-800">
                  fine
                </span>{" "}
                quality
              </p>
            </div>
          </div>
        </section>

        <footer className="flex flex-col items-center mt-12 sm:flex-row sm:justify-center">
          <div className="text-gray-700">2023</div>
          <a
            href="mailto:office@finecode.nl"
            className="px-4 text-gray-700 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
          >
            office@finecode.nl
          </a>
        </footer>
      </div>
    </section>
  );
}
