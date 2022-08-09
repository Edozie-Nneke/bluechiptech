import navLinkBadge from '../css_module/navLinkBadge.module.css';
import CheckIcon from '@mui/icons-material/Check';
import { useState } from 'react';

export default function NavLinkBadge() {
  const [isVisted, setIsVisted] = useState(true);
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={navLinkBadge.container}>
      <div
        className={
          isActive
            ? `${navLinkBadge.number_active}`
            : isVisted
            ? `${navLinkBadge.number_visited}`
            : `${navLinkBadge.number}`
        }
      >
        {isActive ? 3 : isVisted ? <CheckIcon /> : 3}
      </div>
      <div className={navLinkBadge.linkWrapper}>Account Service Required</div>
    </div>
  );
}
