import * as React from "react";
import { useDispatch } from "react-redux";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import Edit from "@mui/icons-material/Edit";
import Add from "@mui/icons-material/Add";
import Delete from "@mui/icons-material/Delete";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { fetchDeleteTask } from "../../../redux/tasks/tasksOperations";
import TaskListContext from "../Context/TaskListContext";
import { fetchDeleteTaskList } from "../../../redux/taskList/taskListOperations";
import useModal from "../../hooks/useModal";
import Modal from "../Modal";
import CreateNewTask from "../../../components/CreateNewTask";

export default function BasicMenu({ name, taskId, handleAddTaskList }) {
  const { isOpen, openModal, closeModal } = useModal();

  const handleAddTask = () => {
    openModal();
  };

  const handlCloseModal = () => {
    closeModal();
  };

  const { taskListData, taskListNameData, child_id } =
    React.useContext(TaskListContext);
  console.log("taskListData", taskListData);
  console.log("taskListNameData", taskListNameData);
  console.log("child_id", child_id);

  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleAdd = () => {
    handleAddTaskList();
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleEdit = () => {
    handleAddTask();
    setAnchorEl(null);
  };

  const handleDelete = () => {
    if (taskListData && !taskId) {
      dispatch(fetchDeleteTaskList(taskListData));
      setAnchorEl(null);
    }
    if (taskId && taskListData) {
      dispatch(fetchDeleteTask(taskId));
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
        edge="end"
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
        {name && (
          <MenuItem onClick={handleEdit}>
            <Edit />
            Edit
          </MenuItem>
        )}
        {!name && (
          <MenuItem onClick={handleAdd}>
            <Add />
            Add new list
          </MenuItem>
        )}
        <MenuItem onClick={handleDelete}>
          <Delete />
          Delete
        </MenuItem>
      </Menu>
      {isOpen && (
        <Modal closeModal={handlCloseModal}>
          <CreateNewTask
            closeModal={handlCloseModal}
            actionName={"Edit Task"}
            taskId={taskId}
            ListName={taskListNameData}
            childId={child_id}
          />
        </Modal>
      )}
    </div>
  );
}
