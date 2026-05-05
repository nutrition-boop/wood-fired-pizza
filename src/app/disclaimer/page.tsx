import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "Legal Disclaimer for Wood Fired Pizza Oven.",
};

export default function DisclaimerPage() {
  return (
    <>
      <section className="hero" id="disclaimer-hero">
        <h1 className="animate-in">Legal <span>Disclaimer</span></h1>
      </section>

      <div className="article-layout">
        <main className="article-main">
          <div className="article" id="disclaimer-content">
            <h2>General Information</h2>
            <p>
              The information provided by Wood Fired Pizza Oven (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) on wood-fired-pizza-oven.us (the &quot;Site&quot;) is for general informational purposes only. All information on the Site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.
            </p>
            <p>
              Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the site or reliance on any information provided on the site. Your use of the site and your reliance on any information on the site is solely at your own risk.
            </p>

            <h2>Safety Disclaimer</h2>
            <p>
              Building and operating a wood-fired pizza oven involves inherent risks, including but not limited to the risk of fire, burns, smoke inhalation, and structural collapse. The construction guides and cooking instructions provided on this site are for informational purposes only. You are solely responsible for ensuring your safety and the safety of others when building or operating an oven.
            </p>
            <p>
              Always check your local building codes, fire regulations, and HOA rules before starting construction. We strongly recommend consulting with professional masons or contractors for structural work.
            </p>

            <h2>External Links Disclaimer</h2>
            <p>
              The Site may contain (or you may be sent through the Site) links to other websites or content belonging to or originating from third parties or links to websites and features in banners or other advertising. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability or completeness by us.
            </p>
            <p>
              We do not warrant, endorse, guarantee, or assume responsibility for the accuracy or reliability of any information offered by third-party websites linked through the site or any website or feature linked in any banner or other advertising. We will not be a party to or in any way be responsible for monitoring any transaction between you and third-party providers of products or services.
            </p>

            <h2>Affiliate Disclaimer</h2>
            <p>
              The Site may contain links to affiliate websites, and we receive an affiliate commission for any purchases made by you on the affiliate website using such links. Our affiliates include Amazon Services LLC Associates Program and others.
            </p>
            <p>
              We only promote products we have investigated and truly feel deliver value to you. This does not affect the price you pay for any items.
            </p>
          </div>
        </main>
      </div>
    </>
  );
}
