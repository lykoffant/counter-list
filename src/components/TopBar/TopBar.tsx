import cn from 'classnames';

import styles from './TopBar.module.css';

import { I_TopBarProps } from './TopBar.props';

import { Logo } from '../Logo/Logo';
import { RepoLink } from '../RepoLink/RepoLink';

function TopBar({ className, ...props }: I_TopBarProps) {
  return (
    <header className={cn(className, styles['root'])} {...props}>
      <nav className={styles['nav']}>
        <Logo />
        <RepoLink />
      </nav>
    </header>
  );
}

export { TopBar };
