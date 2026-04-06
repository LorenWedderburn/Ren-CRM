import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { FaBars, FaHome, FaPhone } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router";

// https://www.npmjs.com/package/react-pro-sidebar

function LeftSidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sidebar
      rootStyles={{
        height: "100vh",
        backgroundColor: "#615f5a",
        color: "#000",
      }}
      collapsed={collapsed}
    >
      <Menu
        menuItemStyles={{
          button: {
            padding: "10px 25px",
            "&:hover": {
              backgroundColor: "#4f576c",
            },
          },
        }}
      >
        <MenuItem
          rootStyles={{ fontSize: "24px", fontWeight: "bolder" }}
          icon={<FaBars />}
          onClick={() => setCollapsed(!collapsed)}
        >
          {!collapsed && <div>Sidebar</div>}
        </MenuItem>

        <MenuItem icon={<FaHome />} component={<Link to="/" />}>
          Home
        </MenuItem>

        <MenuItem icon={<FaPhone />} component={<Link to="contacts" />}>
          Contacts
        </MenuItem>
      </Menu>
    </Sidebar>
  );
}

export default LeftSidebar;
