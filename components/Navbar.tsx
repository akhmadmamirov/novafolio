interface NavbarProps {
  currentPage: string;
  setPageOnClick: (page: string) => void;
}

const NavBar: React.FC<NavbarProps> = ({ currentPage, setPageOnClick }) => {
  const buttons = [
    { label: "Feedback", page: "feedback" },
    { label: "Experience", page: "experience" },
  ];

  return (
    <nav>
      {buttons
        .filter(({ page }) => page !== currentPage)
        .map(({ label, page }) => (
          <button
            key={page}
            onClick={() => setPageOnClick(page)}
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-3 text-sm border border-blue-500 hover:border-transparent rounded"
          >
            {label}
          </button>
        ))}
    </nav>
  );
};

export default NavBar;