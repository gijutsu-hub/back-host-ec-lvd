import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";

const Careers = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    document.title = "Careers | Elevator Consulting";
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-consulting-light via-white to-consulting-subtle">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 sm:pt-40 pb-16 sm:pb-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-brand text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-consulting-dark mb-6 sm:mb-8 animate-elegant-fade-up">
            CAREERS
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-consulting-medium max-w-3xl mx-auto leading-relaxed animate-elegant-fade-up animate-delay-200">
            Join Elevator Consulting as a Sales Engineer — own the technical sale and share directly in the deals you close.
          </p>
        </div>
      </section>

      {/* Job Listings Section */}
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full">
            <CollapsibleTrigger className="w-full group">
              <div className="bg-white/80 backdrop-blur-xl border border-consulting-subtle/30 rounded-2xl p-6 sm:p-8 shadow-premium hover:shadow-premium-lg transition-all duration-500 hover:scale-[1.02]">
                <div className="flex items-center justify-between">
                  <h3 className="font-brand text-xl sm:text-2xl md:text-3xl font-semibold text-consulting-dark text-left">
                    Sales Engineer — Technical Sales & Deal Enablement
                  </h3>
                  <ChevronDown
                    className={`h-6 w-6 sm:h-8 sm:w-8 text-consulting-medium transition-transform duration-500 flex-shrink-0 ml-4 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </div>
            </CollapsibleTrigger>

            <CollapsibleContent className="mt-6 animate-accordion-down">
              <div className="bg-white/80 backdrop-blur-xl border border-consulting-subtle/30 rounded-2xl p-6 sm:p-8 md:p-10 shadow-premium space-y-8">
                {/* Role Section */}
                <div className="space-y-4">
                  <h4 className="font-brand text-xl sm:text-2xl font-semibold text-consulting-dark">
                    ROLE
                  </h4>
                  <div className="h-px bg-gradient-to-r from-consulting-subtle via-consulting-medium/20 to-consulting-subtle"></div>
                  <div className="text-consulting-medium space-y-3 text-base sm:text-lg leading-relaxed">
                    <p>
                      Sales Engineer responsible for owning the technical sales cycle: discovery, demos, solution fit, proposals and closing deals with clients and partners.
                    </p>
                    <p>
                      You will work closely with our engineering and product teams to craft tailored technical solutions and present them to customers and stakeholders.
                    </p>
                    <p>
                      This is a performance-driven commercial role: there is no fixed salary up-front. Instead, when you directly close a deal, you receive <strong>10% commission of the net deal value</strong>.
                    </p>
                    <p>
                      Strong candidates will be considered for long-term engagement or employment with negotiated compensation after demonstrated impact.
                    </p>
                  </div>
                </div>

                {/* What's Expected Section */}
                <div className="space-y-4">
                  <h4 className="font-brand text-xl sm:text-2xl font-semibold text-consulting-dark">
                    WHAT'S EXPECTED
                  </h4>
                  <div className="h-px bg-gradient-to-r from-consulting-subtle via-consulting-medium/20 to-consulting-subtle"></div>
                  <div className="text-consulting-medium space-y-3 text-base sm:text-lg leading-relaxed">
                    <p>
                      Act as the technical lead during presales and the early customer lifecycle: conduct discovery calls, deliver product/solution demonstrations, prepare technical proposals and support contract negotiation.
                    </p>
                    <div className="pl-4 sm:pl-6 space-y-2">
                      <p className="font-semibold">KPIs:</p>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Number of qualified opportunities created</li>
                        <li>Deals closed (attributed to you)</li>
                        <li>Pipeline value and win rate</li>
                        <li>Demo-to-proposal conversion</li>
                      </ul>
                    </div>
                    <p>Be proactive in outreach, solution design, and driving deals across the finish line.</p>
                  </div>
                </div>

                {/* What You'll Need to Do Section */}
                <div className="space-y-4">
                  <h4 className="font-brand text-xl sm:text-2xl font-semibold text-consulting-dark">
                    RESPONSIBILITIES
                  </h4>
                  <div className="h-px bg-gradient-to-r from-consulting-subtle via-consulting-medium/20 to-consulting-subtle"></div>
                  <div className="text-consulting-medium space-y-3 text-base sm:text-lg leading-relaxed">
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Lead discovery calls and technical qualification with prospects.</li>
                      <li>Deliver polished demos and technical presentations for decision-makers.</li>
                      <li>Create solution proposals and coordinate with engineering for scoping.</li>
                      <li>Own the handoff to delivery teams and ensure client expectations are set.</li>
                      <li>Support contract negotiation and be present during commercial discussions.</li>
                    </ul>

                    <div className="bg-consulting-subtle/30 border border-consulting-medium/20 rounded-xl p-4 sm:p-6 mt-4">
                      <p className="font-semibold text-consulting-dark mb-2">Application Requirements:</p>
                      <p className="mb-2">Please include a concise resume or LinkedIn link</p>
                      <p className="mb-2">Provide a brief technical sales pitch (1 minute max) — either a short video or a written 2–3 paragraph pitch describing how you'd position our offering to a target customer</p>
                      <p className="mb-2">Email the materials to: <span className="font-semibold">careers@netbytelabs.com</span></p>
                    </div>
                  </div>
                </div>

                {/* Compensation Section */}
                <div className="space-y-4">
                  <h4 className="font-brand text-xl sm:text-2xl font-semibold text-consulting-dark">
                    COMPENSATION
                  </h4>
                  <div className="h-px bg-gradient-to-r from-consulting-subtle via-consulting-medium/20 to-consulting-subtle"></div>
                  <div className="text-consulting-medium space-y-3 text-base sm:text-lg leading-relaxed">
                    <p>
                      <strong>No fixed base salary up-front.</strong> This role is structured as a performance-first commercial position: when you directly close a deal (i.e., are the primary closer and are recorded in the deal attribution), you will receive <strong>10% commission of the net deal value</strong>.
                    </p>
                    <p>
                      Commission is paid after the customer has been invoiced and the payment is received (standard net terms). We will provide a transparent attribution process and clear documentation for every compensated deal.
                    </p>
                    <p>
                      High-performers who consistently close deals will be eligible for longer-term compensation packages, including retainer or salaried roles with quota/commission structures — to be negotiated based on results.
                    </p>
                  </div>
                </div>

                {/* What You'll Get Section */}
                <div className="space-y-4">
                  <h4 className="font-brand text-xl sm:text-2xl font-semibold text-consulting-dark">
                    WHAT YOU'LL GET
                  </h4>
                  <div className="h-px bg-gradient-to-r from-consulting-subtle via-consulting-medium/20 to-consulting-subtle"></div>
                  <div className="text-consulting-medium space-y-3 text-base sm:text-lg leading-relaxed">
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Direct commercial upside via a clear 10% commission on deals you close.</li>
                      <li>Opportunity to work with senior engineers and shape technical proposals.</li>
                      <li>Potential for long-term engagement and improved compensation after proven performance.</li>
                      <li>Certificate of achievement and strong references for successful contributors.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </section>

      {/* Apply Section */}
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          {!showSuccess ? (
            <>
              <a
                href="mailto:careers@netbytelabs.com"
                className="inline-block"
                onClick={() => setShowSuccess(true)}
              >
                <Button
                  size="lg"
                  className="bg-black text-white px-8 sm:px-12 py-6 sm:py-8 text-lg sm:text-xl font-semibold rounded-2xl relative overflow-hidden group hover:scale-105 transition-all duration-500 shine-button-glossy shadow-premium hover:shadow-premium-lg"
                >
                  <span className="relative z-10">Apply Now</span>
                </Button>
              </a>
              
              <p className="text-consulting-medium text-base sm:text-lg">
                In case the button doesn't work:<br />
                <a
                  href="mailto:careers@netbytelabs.com"
                  className="font-semibold text-consulting-dark hover:text-consulting-medium transition-colors duration-300 hover-glow"
                >
                  careers@netbytelabs.com
                </a>
              </p>
            </>
          ) : (
            <div className="bg-white/80 backdrop-blur-xl border border-consulting-subtle/30 rounded-2xl p-8 sm:p-12 shadow-premium animate-elegant-fade-up">
              <div className="text-6xl mb-6">😊</div>
              <h3 className="font-brand text-2xl sm:text-3xl font-semibold text-consulting-dark mb-4">
                Success!
              </h3>
              <p className="text-lg sm:text-xl text-consulting-medium mb-8 leading-relaxed">
                We're excited to see your application! You'll get a mail from us in the next few days.
              </p>
              
              <Link to="/">
                <Button
                  size="lg"
                  className="bg-black text-white px-8 py-4 text-base sm:text-lg font-semibold rounded-xl relative overflow-hidden group hover:scale-105 transition-all duration-500 shine-button-glossy shadow-premium hover:shadow-premium-lg mb-6"
                >
                  <span className="relative z-10">Back to Homepage</span>
                </Button>
              </Link>
              
              <div className="pt-6 border-t border-consulting-subtle/30">
                <p className="text-consulting-medium text-sm sm:text-base mb-2">
                  Button didn't work?
                </p>
                <p className="text-consulting-medium text-sm sm:text-base">
                  Here's the mail ID:{" "}
                  <a
                    href="mailto:careers@netbytelabs.com"
                    className="font-semibold text-consulting-dark hover:text-consulting-medium transition-colors duration-300 hover-glow"
                  >
                    careers@netbytelabs.com
                  </a>
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
