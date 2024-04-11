import * as React from "react";
import { useDispatch } from "react-redux";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import Edit from "@mui/icons-material/Edit";
import Add from "@mui/icons-material/Add";
import Delete from "@mui/icons-material/Delete";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { deleteTask } from "../../../redux/tasks/tasksSlice";
import { TaskListContext } from "../../../components/Main/Main";
import { TaskContext } from "../../../components/TaskEntrails/TaskEntrails";
import { deleteListTask } from "../../../redux/taskList/taskListSlice";

export default function BasicMenu({ ...props }) {
  // Компонент, использующий контекст
  const taskListData = React.useContext(TaskListContext);
  const taskData = React.useContext(TaskContext);
  // Используйте данные из контекста здесь

  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = () => {
    if (taskListData) {
      console.log("taskListData", taskListData);
      dispatch(deleteListTask(taskListData));
      setAnchorEl(null);
    }
    if (taskData) {
      console.log("taskData", taskData);
      dispatch(deleteTask(taskData));
      setAnchorEl(null);
    }
  };

  return (
    <div>
      <IconButton
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          <Edit />
          Edit
        </MenuItem>
        {!props.name && (
          <MenuItem onClick={handleClose}>
            <Add />
            Add new card
          </MenuItem>
        )}
        <MenuItem onClick={handleDelete}>
          <Delete />
          Delete
        </MenuItem>
      </Menu>
    </div>
  );
}
