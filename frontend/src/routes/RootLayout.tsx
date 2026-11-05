import { Link, Outlet } from 'react-router-dom';

// Layout raiz provisório: navegação simples apenas para testar as rotas.
// O Header/Footer definitivos serão criados em outra tarefa.
export function RootLayout() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link> | <Link to="/cursos">Cursos</Link> |{' '}
        <Link to="/login">Login</Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}
