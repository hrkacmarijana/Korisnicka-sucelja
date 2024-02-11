import React from "react";
import Link from "next/link";
import "./donations.modules.css";

import image1 from "public/dnt1.jpg";
import image2 from "public/dnt2.jpg";
import image3 from "public/dnt3.jpg";
import image5 from "public/donation.png";
import Image from "next/image";

let imageRatio = image1.width / image1.height;

export default function Donations() {
  return (
    <>
      <div className="section bg-purple-200">
        <h1>Donations</h1>
        <p>
          Our donations page is a testament to the power of compassion and
          collective action. Its a space where each gesture of generosity
          ripples outward, creating a profound impact on the lives of animals in
          need. Here, we invite you to be part of something greater than
          yourself – a movement dedicated to kindness, empathy, and the welfare
          of our furry companions.
        </p>
        <div className="image-container">
          <Image src={image1} alt="image1" fill={true} priority />
        </div>
        <p>
          Every donation, regardless of its size, plays a crucial role in
          supporting our mission. Whether you choose to contribute a little or a
          lot, your generosity fuels our efforts to rescue, rehabilitate, and
          rehome animals. Its the lifeline that sustains our shelter, allowing
          us to provide essential care, medical treatment, and love to animals
          who have experienced hardship and neglect.
        </p>
        <div className="image-container">
          <Image src={image2} alt="image2" fill={true} priority />
        </div>
        <p>
          By donating to our cause, you become a beacon of hope for animals in
          search of a second chance. Your support enables us to continue our
          vital work, ensuring that every animal that comes through our doors
          receives the care and compassion they deserve. Together, we can make a
          tangible difference in the lives of these deserving creatures,
          offering them a brighter future filled with love and happiness.
        </p>
        <div className="image-container">
          <Image src={image3} alt="image3" fill={true} priority />
        </div>
        <p>
          Join us in our mission to create a world where every animal is
          cherished and valued. Your contribution, no matter how small, helps
          pave the way for a better tomorrow for animals in need. Thank you for
          considering donating to our cause and for being a vital part of our
          journey towards a more compassionate and inclusive society.
        </p>
        <div className="image-container">
          <Image src={image5} alt="image4" fill={true} priority />
        </div>

        <div className="">
          <form
            className="form-container"
            action="/submit-donation"
            method="post"
          >
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" name="name" required />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" name="email" required />
            </div>
            <div className="form-group">
              <label>Donation Amount</label>
              <input type="number" name="amount" min="1" required />
            </div>
            <div className="form-group">
              <label>Message (optional)</label>
              <textarea name="message" rows={2}></textarea>
            </div>
            <div className="button-container">
              <Link
                href="/"
                className="button bg-purple-600 text-white  hover:bg-purple-800"
              >
                DONATE
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
