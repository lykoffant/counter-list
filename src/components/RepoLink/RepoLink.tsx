import cn from 'classnames';

import Icon from 'react-icons-kit';
import { github } from 'react-icons-kit/fa/github';

import styles from './RepoLink.module.css';

import { I_RepoLinkProps } from './RepoLink.props';

function RepoLink({ className, ...props }: I_RepoLinkProps) {
  return (
    <a
      className={cn(className, styles['root'])}
      href='https://github.com/lykoffant/counter-list'
      {...props}
    >
      <Icon size={32} icon={github} />
    </a>
  );
}

export { RepoLink };
