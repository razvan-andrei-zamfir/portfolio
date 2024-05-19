function Footer() {
  return (
    <footer className="bg-gray-800 rounded-lg shadow m-4 mx-auto my-auto sm:text-center">
      <div className="bg-gray-800 w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <div>
          <span className="sm:text-center text-gray-400">© 2024 </span>
          <a
            href="https://www.linkedin.com/in/razvan-andrei-zamfir"
            target="_blank"
            className="text-gray-200"
          >
            Razvan-Andrei Zamfir
          </a>
          <img
            src="/razvan-zamfir-favicon-color.png"
            className="h-8 ml-3 inline-block mr-2"
            alt="Site Logo"
          />
          <p className="text-white text-xl font-semibold inline-block align-middle">
            RZ
          </p>
        </div>

        <p className="text-gray-400">
          Website created using
          <a
            href="https://react.dev/"
            target="_blank"
            className="text-gray-200"
          >
            {" "}
            React
          </a>
          ,
          <a
            href="https://tailwindcss.com/"
            target="_blank"
            className="text-gray-200"
          >
            {" "}
            TailwindCSS
          </a>{" "}
          and
          <a
            href="https://vitejs.dev/"
            target="_blank"
            className="text-gray-200"
          >
            {" "}
            Vite
          </a>
          .
        </p>
      </div>
    </footer>
  );
}

export default Footer;
