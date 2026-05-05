import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Wood Fired Pizza Oven.",
};

export default function TermsOfServicePage() {
  return (
    <>
      <section className="hero" id="terms-hero">
        <h1 className="animate-in">Terms of <span>Service</span></h1>
      </section>

      <div className="article-layout">
        <main className="article-main">
          <div className="article" id="terms-content">
            <h2>Welcome to Wood Fired Pizza Oven</h2>
            <p>
              These terms and conditions outline the rules and regulations for the use of Wood Fired Pizza Oven&apos;s Website, located at wood-fired-pizza-oven.us.
            </p>
            <p>
              By accessing this website we assume you accept these terms and conditions. Do not continue to use Wood Fired Pizza Oven if you do not agree to take all of the terms and conditions stated on this page.
            </p>

            <h2>License</h2>
            <p>
              Unless otherwise stated, Wood Fired Pizza Oven and/or its licensors own the intellectual property rights for all material on Wood Fired Pizza Oven. All intellectual property rights are reserved. You may access this from Wood Fired Pizza Oven for your own personal use subjected to restrictions set in these terms and conditions.
            </p>
            <p>You must not:</p>
            <ul>
              <li>Republish material from Wood Fired Pizza Oven</li>
              <li>Sell, rent or sub-license material from Wood Fired Pizza Oven</li>
              <li>Reproduce, duplicate or copy material from Wood Fired Pizza Oven</li>
              <li>Redistribute content from Wood Fired Pizza Oven</li>
            </ul>

            <h2>User Comments</h2>
            <p>
              Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. Wood Fired Pizza Oven does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of Wood Fired Pizza Oven, its agents and/or affiliates. Comments reflect the views and opinions of the person who post their views and opinions.
            </p>
            <p>
              Wood Fired Pizza Oven reserves the right to monitor all Comments and to remove any Comments which can be considered inappropriate, offensive or causes breach of these Terms and Conditions.
            </p>

            <h2>Hyperlinking to our Content</h2>
            <p>
              The following organizations may link to our Website without prior written approval:
            </p>
            <ul>
              <li>Government agencies;</li>
              <li>Search engines;</li>
              <li>News organizations;</li>
              <li>Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses.</li>
            </ul>
            <p>
              These organizations may link to our home page, to publications or to other Website information so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products and/or services; and (c) fits within the context of the linking party&apos;s site.
            </p>
          </div>
        </main>
      </div>
    </>
  );
}
