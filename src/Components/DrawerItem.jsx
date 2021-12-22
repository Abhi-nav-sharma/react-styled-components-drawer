const DrawerItem = ({ label, icon }) => {
  console.log(icon);
  return (
    <div style={{ display: "flex", gap: "5px", padding: "20px" }}>
      <div style={{ width: "40px" }}>
        <img src={icon} alt="icon" style={{ width: "40px" }} />
      </div>
      <div style={{ padding: "7px" }}>
        <h3 style={{ margin: 0 }}>{label}</h3>
      </div>
    </div>
  );
};

export default DrawerItem;
