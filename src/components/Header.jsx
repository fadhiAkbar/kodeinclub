import { kodeinSch } from "../assets";

const Header = () => {
  return (
    <>
      {/* JUmbotron */}
      <div className="text-lg py-16 bg-blue-400 text-center text-white">
        <figure>
          <img
            src={kodeinSch}
            alt="KODEIN LOGO"
            className="w-full object-cover object-center"
          />
          <h1>Sekolah Developer Indonesia</h1>
        </figure>
      </div>
    </>
  );
};

export default Header;
