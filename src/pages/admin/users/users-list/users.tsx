import { Button, Table } from "antd";
import { useGetUsers } from "../../../../react-query/query/users";
import { formatDate } from "../../../../lib/formatDate";
import { EditOutlined, PlusCircleOutlined  } from "@ant-design/icons";
import { useNavigate } from "react-router";
const { Column } = Table;
const AdminUsersView: React.FC = () => {
  const { data: usersList } = useGetUsers();
  const navigate = useNavigate();
  const handleNavigateUserEdit = (id: string) => {
    navigate(`/dashboard/admin/user-update/${id}`);
  };
  const handleNavigateUserCraete = () => {
    navigate("/dashboard/admin/user-create");
  };
  return (
    <Table
      title={() => {
        return (
          <Button
            type="primary"
            icon={<PlusCircleOutlined />}
            onClick={handleNavigateUserCraete}
          >
            Create User
          </Button>
        );
      }}
      bordered
      dataSource={usersList}
      pagination={false}
      rowKey="id"
    >
      <Column title="Email" dataIndex="email" />
      <Column
        title="Phone"
        dataIndex="phone"
        render={(text) => (text ? text : "Not found")}
      />
      <Column
        title="Created at"
        dataIndex="created_at"
        render={(created_at) => formatDate(created_at)}
      />
      <Column
        title="Updated at"
        dataIndex="updated_at"
        render={(updated_at) => formatDate(updated_at)}
      />
      <Column
        title="Actions"
        render={(_, row) => (
          <EditOutlined
            className="text-yellow-600"
            onClick={() => handleNavigateUserEdit(row.id)}
          />
        )}
      />
    </Table>
  );
};
export default AdminUsersView;
