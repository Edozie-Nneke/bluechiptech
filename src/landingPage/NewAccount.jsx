import newAcct from '../css_module/newAcct.module.css';
import NavLinkBadge from '../components/NavLinkBadge';
import image1 from '../assests/image1.jpg';
import DehazeIcon from '@mui/icons-material/Dehaze';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function NewAccount() {
  return (
    <div className={newAcct.container}>
      <aside className={newAcct.side}>Side</aside>
      <section className={newAcct.main}>
        <div className={newAcct.topbar}>
          <div className={newAcct.topbarLeft}>
            <DehazeIcon className={newAcct.topbarIcons1} />
          </div>
          <div className={newAcct.topbarRight}>
            <HelpOutlineIcon className={newAcct.topbarIcons1} />
            <NotificationsNoneIcon className={newAcct.topbarIcons1} />

            <div className={newAcct.topbarRight_profile}>
              <img src={image1} alt='' />
              <div className={newAcct.profileNameWrapper}>
                <p className={newAcct.profileName}>David Tomiwa</p>
                <p className={newAcct.profileDesc}>CSO</p>
              </div>
            </div>
            <KeyboardArrowDownIcon className={newAcct.topbarIcons} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default NewAccount;
