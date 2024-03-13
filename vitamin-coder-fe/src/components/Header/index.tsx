import Link from "next/link";

function Header() {
  return (
    <div className="wrapper-header">
      <img src="/logo.svg" alt="logo" width="600" height="400" />
      <Link href={"/"}>Đăng nhập</Link>
    </div>
  );
}

export default Header;
