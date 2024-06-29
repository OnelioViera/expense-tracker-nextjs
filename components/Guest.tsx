import { SignInButton } from "@clerk/nextjs";
import Image from 'next/image';

const Guest = () => {
  return (
    <div className="guest">
    <h1>Welcome</h1>
    <p>Please sign in to mange your transactions</p>
      <SignInButton />
      <p className="description">Screen Shot of Dashboard</p>
      
      <div className="image">
        <Image
          src="/images/img-01.png"
          width={400}
          height={400}
          alt="Picture of Exspense Tracker" />
        </div>
    </div>
  );
}

export default Guest;