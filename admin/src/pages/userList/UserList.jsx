import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { getUsers } from "../../context/userContext/apiCalls";
import { UserContext } from "../../context/userContext/UserContext";
import { useEffect } from "react";
import { deleteUser } from "../../context/userContext/apiCalls";

export default function UserList() {
  const [data, setData] = useState();

  const { users, dispatch } = useContext(UserContext);

  useEffect(() => {
    getUsers(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteUser(id, dispatch);
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 230 },
    {
      field: "username",
      headerName: "USERNAME",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.avatar} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 150 },
    // {
    //   field: "password",
    //   headerName: "PASSWORD",
    //   width: 150,
    // },
    {
      field: "profilePic",
      headerName: "PROFILE_PIC",
      width: 180,
      renderCell: (params) => {
        return (
          <div className="userListUser1">
            <img className="userListImg1" src={params.row.profilePic} alt="" />
            {/* {params.row.username} */}
          </div>
        );
      },
    },
    {
      field: "isAdmin",
      headerName: "ISADMIN",
      width: 140,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link
              to={{ pathname: "/user/" + params.row._id, state: params.row }}
            >
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={users}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
        getRowId={(r) => r._id}
      />
    </div>
  );
}
