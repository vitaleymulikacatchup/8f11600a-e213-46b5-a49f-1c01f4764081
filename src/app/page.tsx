"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutFloatingInline from '@/components/navigation/NavbarLayoutFloatingInline';
import TokenBillboardHero from '@/components/sections/layouts/hero/TokenBillboardHero';
import SplitAbout from '@/components/sections/layouts/about/SplitAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import BigNumberTokenomics from '@/components/sections/layouts/tokenomics/BigNumberTokenomics';
import FooterLogoEmphasis from '@/components/footer/FooterLogoEmphasis';

export default function Home() {
  return (
    <SiteThemeProvider theme={{
      styleVariant: 'funAndTrendy',
      colorTemplate: 1,
      textAnimation: 'slide',
    }}>{/* Navbar */}
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline 
          logoSrc="/images/logo.svg" 
          logoAlt="NovaFlow Logo" 
          navItems={[
            { name: '#hero', id: 'hero' },
            { name: '#about', id: 'about' },
            { name: '#how-to-buy', id: 'how-to-buy' },
            { name: '#tokenomics', id: 'tokenomics' },
            { name: '#footer', id: 'footer' },
          ]}
          buttonText="Get Started"
        />
      </div>
      {/* Sections */}
      <div id="hero" data-section="hero">
        <TokenBillboardHero 
          title="Welcome to NovaFlow"
          subtitle="Your SaaS solution for productivity."
          contractAddress="0xABC..."
          copyButtonText="Copy Address"
          copiedText="Address Copied!"
        />
      </div>
      <div id="about" data-section="about">
        <SplitAbout 
          description="We provide premium solutions to cater to your SaaS needs with a touch of simplicity and modernity."
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy">
        <HowToBuy2D variant="reveal" />
      </div>
      <div id="tokenomics" data-section="tokenomics">
        <BigNumberTokenomics 
          title="Tokenomics Overview"
          description="Understanding the value of your investment."
          kpiItems={[
            { value: "1M", description: "Total Supply", longDescription: "Maximum number of tokens. Limited supply ensures value." },
            { value: "200K", description: "Circulating Supply", longDescription: "Number of tokens currently available." },
            { value: "200K", description: "Market Capitalization", longDescription: "Value of all tokens in circulation." }
          ]}
        />
      </div>
      <div id="footer" data-section="footer">
        <FooterLogoEmphasis 
          logoSrc="/images/logo.svg"
          logoAlt="NovaFlow Logo"
          logoText="NovaFlow"
          columns={[
            { items: [{ label: 'Privacy Policy', onClick: () => {} }] },
            { items: [{ label: 'Terms of Service', onClick: () => {} }] },
            { items: [{ label: 'Contact Us', onClick: () => {} }] }
          ]}
          copyrightText="© 2023 NovaFlow. All rights reserved."
          onPrivacyClick={() => {}}
        />
      </div>
    </SiteThemeProvider>
  );
}