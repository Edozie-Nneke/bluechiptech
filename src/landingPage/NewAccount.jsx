import newAcct from '../css_module/newAcct.module.css';
import NavLinkBadge from '../components/NavLinkBadge';
import TopBar from '../components/TopBar';
import Content from '../components/Content';

function NewAccount() {
  return (
    <div className={newAcct.container}>
      <aside className={newAcct.side}>Side</aside>
      <section className={newAcct.main}>
        <TopBar />
        <Content />
      </section>
    </div>
  );
}

export default NewAccount;
