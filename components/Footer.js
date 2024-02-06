import Link from "next/link";

const todaysDate = new Date();
const currentYear = todaysDate.getFullYear();

export default function Footer() {
  return (
    <div className="mt-[40px] px-[60px] text-[16px] md:mt-16 md:px-0 md:text-[18px] leading-7">
      Designed & Built with <Link href="https://xavierkhew.com/fun"><a className="animate-pulse">&#10084;&#65039;</a></Link>  by Xavier K.
      <br />
      in Subang Jaya &#169; {currentYear}
    </div>
  );
}
