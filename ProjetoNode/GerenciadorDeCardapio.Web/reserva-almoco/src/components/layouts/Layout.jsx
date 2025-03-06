import Nav from './Nav';

export const Layout = ({ children }) => {
  return (
    <div className="principal">
      <Nav />
      <main>{children}</main>
    </div>
  );
};