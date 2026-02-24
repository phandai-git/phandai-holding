export default function Home() {
  return (
    <main className="holding-root">
      <div className="holding-inner">
        <div className="logo">
          <svg
            width="64"
            height="64"
            viewBox="0 0 64 64"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polygon points="32,2 62,32 32,62 2,32" fill="#bf5520" />
            <polygon
              points="32,2 62,32 32,46 2,32"
              fill="#111320"
              opacity="0.9"
            />
            <polygon points="12,32 32,14 52,32 32,24" fill="#d9683a" />
            <polygon
              points="22,44 32,38 42,44 32,48"
              fill="#d9683a"
              opacity="0.5"
            />
          </svg>
          <div className="wordmark">
            Phand<span className="ai">.ai</span>
          </div>
        </div>
        <p className="font-serif font-bold text-4xl text-on-dark tracking-tight">
          Your business, always on.
        </p>
        <div className="hero">
          <h1 className="hero-heading mb-8">Coming Soon</h1>
          <p className="hero-sub">
            AI-powered chatbots built for the hustle.
            <br />
            We&apos;re putting the finishing touches on something sharp.
          </p>
        </div>

        <div className="waitlist">
          <div className="waitlist-inner">
            <input
              type="email"
              placeholder="your@email.com"
              className="waitlist-input"
            />
            <button className="waitlist-btn">Get Early Access</button>
          </div>
          <p className="waitlist-note">
            No spam. Just a heads-up when we launch.
          </p>
        </div>

        <div className="services">
          <div className="service-card">
            <div className="service-icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h3 className="service-title">AI Chatbots</h3>
            <p className="service-body">
              Custom-trained assistants that handle your customers around the
              clock — so you don&apos;t have to.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h3 className="service-title">WhatsApp Integration</h3>
            <p className="service-body">
              Meet your customers where they already are. Deploy intelligent
              agents directly into WhatsApp.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h3 className="service-title">Workflow Automations</h3>
            <p className="service-body">
              Eliminate the repetitive work. We automate your business processes
              so your team can focus on what actually matters.
            </p>
          </div>
        </div>

        <footer className="footer flex items-center">
          <span>
            &copy; {new Date().getFullYear()} Phandai. All rights reserved.
          </span>
          <span className="w-[6px] h-[6px] rounded-full bg-white opacity-[0.4] mt-[2px]">·</span>
          <a href="mailto:hello@phand.ai" className="footer-link">
            hello@phand.ai
          </a>
        </footer>
      </div>
    </main>
  );
}
