import { Button, Table } from "antd";
import { useGetBlogs } from "../../../../react-query/query/blogs";
import { formatDate } from "../../../../lib/formatDate";
import { EditOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router";
import { useState } from "react";
const { Column } = Table;

const AdminBlogsView: React.FC = () => {
  const navigate = useNavigate();
  const { data: blogsList } = useGetBlogs();
  console.log(blogsList);

  const handleNavigateBlogCreate = () => {
    navigate("/dashboard/admin/blog-create");
  };

  const handleNavigateBlogEdit = (id: number) => {
    navigate(`/dashboard/admin/blog-update/${id}`);
  };

  const [expandedGeoRows, setExpandedGeoRows] = useState<Set<number>>(
    new Set()
  );
  const [expandedEngRows, setExpandedEngRows] = useState<Set<number>>(
    new Set()
  );

  const toggleGeoRowExpansion = (id: number) => {
    setExpandedGeoRows((prevExpandedRows) => {
      const newExpandedRows = new Set(prevExpandedRows);
      if (newExpandedRows.has(id)) {
        newExpandedRows.delete(id);
      } else {
        newExpandedRows.add(id);
      }
      return newExpandedRows;
    });
  };

  const toggleEngRowExpansion = (id: number) => {
    setExpandedEngRows((prevExpandedRows) => {
      const newExpandedRows = new Set(prevExpandedRows);
      if (newExpandedRows.has(id)) {
        newExpandedRows.delete(id);
      } else {
        newExpandedRows.add(id);
      }
      return newExpandedRows;
    });
  };

  return (
    <Table
      title={() => {
        return (
          <Button
            type="primary"
            icon={<PlusCircleOutlined />}
            onClick={handleNavigateBlogCreate}
          >
            Create Blog
          </Button>
        );
      }}
      bordered
      dataSource={blogsList}
      rowKey="id"
      scroll={{ x: true }}
    >
      <Column
        title="Edit"
        render={(_, row) => (
          <EditOutlined
            className="text-yellow-600"
            onClick={() => handleNavigateBlogEdit(row.id)}
          />
        )}
      />
      <Column title="User_id" dataIndex="user_id" />
      <Column
        title="Created at"
        dataIndex="created_at"
        render={(created_at) => formatDate(created_at)}
      />
      <Column title="Title Geo" dataIndex="title_ka" />
      <Column title="Title Eng" dataIndex="title_en" />
      <Column
        title="Description Geo"
        dataIndex="description_ka"
        render={(text, row) => (
          <div>
            {expandedGeoRows.has(row.id) ? text : text.slice(0, 100)}
            <Button
              onClick={() => toggleGeoRowExpansion(row.id)}
              className="block"
              color={expandedGeoRows.has(row.id) ? 'danger' : 'primary'}
              variant="text"
            >
              {expandedGeoRows.has(row.id) ? "Show less" : "See more"}
            </Button>
          </div>
        )}
      />

      <Column
        title="Description Eng"
        dataIndex="description_en"
        render={(text, row) => (
          <div>
            {expandedEngRows.has(row.id) ? text : text.slice(0, 100)}
            <Button
              onClick={() => toggleEngRowExpansion(row.id)}
              className="block"
              color={expandedEngRows.has(row.id) ? 'danger' : 'primary'}
              variant="text"
            >
              {expandedEngRows.has(row.id) ? "Show less" : "See more"}
            </Button>
          </div>
        )}
      />
    </Table>
  );
};

export default AdminBlogsView;
