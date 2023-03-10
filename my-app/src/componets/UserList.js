import { useState } from "react";
import services from "../services/usersServices";
import AddNewUser from "./AddNewUser";
import DeleteUser from "./DelteUser";
import UserDetails from "./UserDetails";
import User from "./Users";

export default function UserList({ users,
  onSubmitCreateNewUser,
  onClickShowEdit,
}) {

  const [selectUser, setSelectUser] = useState(null);
  const [addNewUser, setNewUser] = useState(false)
  const [editUser, setEditUser] = useState(false)
  const [deleteUser, setDelteUser] = useState(false)

  const onInfoClick = async (userId) => {

    const user = await services.getOne(userId);
    setSelectUser(user)

  };

  const clickToAddNewUser = async (e) => {
    onSubmitCreateNewUser(e)
    setNewUser(true)

  };

  const clickToAddNewUser1 = async (e) => {

    setNewUser(true)

  };

  const onDeleteClick = async () => {
    setDelteUser(true)
  };

  const onEditClick = async (e) => {
    onClickShowEdit(e)
    setEditUser(true)
  };
  const onClose = () => {
    setSelectUser(null)
    setNewUser(false)
    setDelteUser(false)
   
  };

  return (
    <>
      {selectUser && <UserDetails {...selectUser} onClose={onClose} />}
      {addNewUser && <AddNewUser onClose={onClose} onSubmitCreateNewUser={clickToAddNewUser} />}
      {deleteUser && <DeleteUser onClose={onClose} />}
      {editUser && <AddNewUser onClose={onClose} onClickShowEdit={onEditClick}/>}
      <div className="table-wrapper">
        <table className="table">
          <thead>
            <tr>
              <th>
                Image
              </th>
              <th>
                First name<svg className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" aria-hidden="true" focusable="false" data-prefix="fas"
                  data-icon="arrow-down" role="img"
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <path fill="currentColor"
                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                  </path>
                </svg>
              </th>
              <th>
                Last name<svg className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                  role="img" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512">
                  <path fill="currentColor"
                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                  </path>
                </svg>
              </th>
              <th>
                Email<svg className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                  role="img" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512">
                  <path fill="currentColor"
                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                  </path>
                </svg>
              </th>
              <th>
                Phone<svg className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                  role="img" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512">
                  <path fill="currentColor"
                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                  </path>
                </svg>
              </th>
              <th>
                Created
                <svg className="icon active-icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" aria-hidden="true" focusable="false" data-prefix="fas"
                  data-icon="arrow-down" role="img"
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <path fill="currentColor"
                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                  </path>
                </svg>
              </th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>

            {users.map(u => <User key={u._id} {...u} onInfoClick={onInfoClick} onDeleteClick={onDeleteClick} onEditClick={onEditClick} />)}

          </tbody>
        </table>
      </div>
      <button className="btn-add btn" onClick={clickToAddNewUser1}>Add new user</button>
    </>

  );
};