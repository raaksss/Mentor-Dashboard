import { CgInsights } from "react-icons/cg";
import { RiFeedbackLine } from "react-icons/ri";
import MenuItem from './MenuItem';

const TeacherMenu = () => {
  return (
    <>
      <MenuItem
        icon={ CgInsights } 
        label='Student Insights'
        address='/dashboard/add-class'
      />
      <MenuItem
        icon={RiFeedbackLine}
        label='Feedback'
        address='/dashboard/feedback'
      />
    </>
  );
};

export default TeacherMenu;