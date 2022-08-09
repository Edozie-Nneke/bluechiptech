import newAcct from '../css_module/newAcct.module.css';
// import Button from '../components/Button';
import NavLinkBadge from '../components/NavLinkBadge';

function NewAccount() {
  return (
    <div className={newAcct.container}>
      {/* <Button /> */}
      <NavLinkBadge />
    </div>
  );
}

export default NewAccount;
