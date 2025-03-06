import Link from 'next/link';
import { useRouter } from 'next/router';

export const Nav = () => {
  const router = useRouter();
  
  const isActive = (path) => router.pathname === path ? 'ativo' : '';

  return (
    <nav>
      <ul>
        <li className={isActive('/')}>
          <Link href="/">Cardápio</Link>
        </li>
        <li className={isActive('/pratos')}>
          <Link href="/pratos">Pratos</Link>
        </li>
        <li className={isActive('/novo-prato')}>
          <Link href="/novo-prato">Novo Prato</Link>
        </li>
        <li className={isActive('/novo-item')}>
          <Link href="/novo-item">Novo Item</Link>
        </li>
      </ul>
    </nav>
  );
};