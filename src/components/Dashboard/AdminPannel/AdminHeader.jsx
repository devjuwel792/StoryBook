const AdminHeader = ({ title, subtitle }) => {
  return (
    <div className="flex items-center justify-between px-6 py-7 bg-[#F9FAFB]">
      <div>
        <h1 className="text-stone-900 text-3xl font-semibold">{title}</h1>
        <p className="text-stone-900 text-3xl font-semibold mt-1">{subtitle}</p>
      </div>
    </div>
  );
};

export default AdminHeader;
