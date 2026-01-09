export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-4 bg-white sticky top-0 z-50 shadow-sm">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-primary rounded-lg"></div>
        <span className="text-xl font-bold text-heading">CityStay</span>
      </div>
      <div className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
        <a href="#">Destinations</a>
        <a href="#">About</a>
        <a href="#">Support</a>
      </div>
      <div className="flex gap-4">
        <button className="px-5 py-2 text-sm font-semibold text-gray-700">Login</button>
        <button className="bg-primary text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition">Sign Up</button>
      </div>
    </nav>
  );
}