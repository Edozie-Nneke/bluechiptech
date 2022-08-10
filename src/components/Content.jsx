import content from '../css_module/content.module.css';
import NavLinkBadge from './NavLinkBadge';

export default function Content() {
  return (
    <div className={content.content}>
      <header>
        <h3>New Account(Individual)</h3>
        <span>DRAFT</span>
        <span>RESTRICTED</span>
      </header>

      <nav>
        <NavLinkBadge />
        <NavLinkBadge />
        <NavLinkBadge />
        <NavLinkBadge />
        <NavLinkBadge />
        <NavLinkBadge />
      </nav>

      <section></section>
    </div>
  );
}
