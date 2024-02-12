import { Metadata } from "next";
import "./styles.modules.css";
import image from "/public/thanks.jpg";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Thank you",
};

async function ThankYou() {
  return (
    <div className="thankyou bg-purple-200">
      <div className="text-section">
        <h1>Thank You for Your Support!</h1>
        <p>
          We want to extend our deepest gratitude for your recent donation to
          True Paw. Your generosity is truly making a difference in the lives of
          animals in need.
        </p>
        <p>
          Your donation enables us to provide essential care, support, and
          resources to animals who are looking for love and shelter. With your
          help, we can continue our mission of rescuing and caring for animals,
          ensuring they receive the love and attention they deserve.
        </p>
        <p>
          Your contribution serves as a beacon of hope for the animals we serve,
          allowing us to continue our vital work in the community. Every
          donation, no matter how big or small, helps us create a better world
          for animals in need.
        </p>
        <p>
          Thank you again for your kindness and support. We are honored to have
          you as a part of our community and grateful for your commitment to
          making a positive impact on the lives of animals.
          <br />
          <br />
        </p>
        <p className="last">
          Sincerely,
          <br />
          <br />
          True Paw Animal Shelter
        </p>
      </div>
      <div
        className="image-container
"
      >
        <Image src={image} alt="image" fill={true} priority />
      </div>
    </div>
  );
}

export default ThankYou;
