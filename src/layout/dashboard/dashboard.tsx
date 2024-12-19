import { Layout, Menu, MenuProps, theme } from "antd";
import { Link, Outlet, useLocation } from "react-router";
import { useLogOut } from "../../react-query/mutation/auth";
import { Button } from "antd";
const { Header, Content, Sider } = Layout;
const items1: MenuProps["items"] = [
  {
    key: `users`,
    label: `Users`,
    children: [
      {
        key: 0,
        label: <Link to="admin/users">Users</Link>,
      },
    ],
  },
  {
    key: `blogs`,
    label: `Blogs`,
    children: [
      {
        key: 1,
        label: <Link to="admin/blogs">Blogs</Link>,
      },
    ],
  },
];

const DashboardLayout: React.FC = () => {
  const { mutate: logOut } = useLogOut();
  const handleLogout = () => {
    logOut();
  };
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const location = useLocation()
  const selectedKey = location.pathname.includes("users") ? '0' : '1' 
  return (
    <Layout>
      <Header style={{ display: "flex", alignItems: "center",justifyContent:"flex-end" }}>
        <Button type="primary" onClick={handleLogout}>
          Log out
        </Button>
      </Header>
      <Content style={{ padding: "40px" }}>
        <Layout
          style={{
            padding: "24px 0",
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Sider style={{ background: colorBgContainer }} width={200}>
            <Menu
              mode="inline"
              defaultSelectedKeys={[`${selectedKey}`]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%" }}
              items={items1}
            />
          </Sider>
          <Content style={{ padding: "0 24px", minHeight: "80vh" }}>
            <Outlet />
          </Content>
        </Layout>
      </Content>
    </Layout>
  );
};
export default DashboardLayout;
