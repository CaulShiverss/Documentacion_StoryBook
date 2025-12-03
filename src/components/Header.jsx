import Nav from "./Nav";

/**
 * Header component that displays the main title and navigation bar.
 *
 * @component
 * @returns {JSX.Element} The rendered header section with title and navigation.
 */

function Header() {

  return (
    <header className="bg-white shadow mb-6">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold">Películas</h1>
        <Nav />
      </div>
    </header>
  );
}
export default Header;
