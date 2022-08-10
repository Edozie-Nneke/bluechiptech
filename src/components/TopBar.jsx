import topbar from '../css_module/topbar.module.css';
import image1 from '../assests/image1.jpg';
import DehazeIcon from '@mui/icons-material/Dehaze';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function TopBar() {
  return (
    <div className={topbar.topbar}>
      <div className={topbar.topbarLeft}>
        <DehazeIcon className={topbar.topbarIcons1} />
      </div>
      <div className={topbar.topbarRight}>
        <HelpOutlineIcon className={topbar.topbarIcons1} />
        <NotificationsNoneIcon className={topbar.topbarIcons1} />

        <div className={topbar.topbarRight_profile}>
          <img src={image1} alt='' />
          <div className={topbar.profileNameWrapper}>
            <p className={topbar.profileName}>David Tomiwa</p>
            <p className={topbar.profileDesc}>CSO</p>
          </div>
        </div>
        <KeyboardArrowDownIcon className={topbar.topbarIcons} />
      </div>
    </div>
  );
}
