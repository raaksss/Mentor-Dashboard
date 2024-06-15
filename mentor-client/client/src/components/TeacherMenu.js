import { GrTableAdd } from 'react-icons/gr';
import { SiGoogleclassroom } from 'react-icons/si';
import MenuItem from './MenuItem';

const TeacherMenu = () => {
  return (
    <>
      <MenuItem
        icon={GrTableAdd}
        label='Student Insights'
        address='/dashboard/add-class'
      />
      <MenuItem
        icon={SiGoogleclassroom}
        label='Feedback'
        address='/dashboard/my-class'
      />
    </>
  );
};

export default TeacherMenu;