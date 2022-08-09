import newAcct from '../css_module/newAcct.module.css';
import { Button } from '../components/Button';

function NewAccount() {
  return (
    <div className={newAcct.container}>
      <Button />
    </div>
  );
}

export default NewAccount;
