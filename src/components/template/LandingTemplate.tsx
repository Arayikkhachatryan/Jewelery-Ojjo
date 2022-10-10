import { FC, memo, ReactNode } from "react";
import {
  LandingFooter,
  LandingFooterWrapper,
  LandingHeader,
  LandingHeaderCenter,
  LandingHeaderLeft,
  LandingHeaderRight,
  LandingTemplateWrapper,
} from "./LandingTemplate.styled";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as SearchIcon } from "../../assets/search.svg";
import { ReactComponent as AccountIcon } from "../../assets/account.svg";
import { ReactComponent as FavoritesIcon } from "../../assets/heart.svg";
import { ReactComponent as TelephoneIcon } from "../../assets/telephone.svg";
import { ReactComponent as MailIcon } from "../../assets/mail.svg";
import { ReactComponent as FacebookIcon } from "../../assets/facebook.svg";
import { ReactComponent as YoutubeIcon } from "../../assets/youtube.svg";
import { ReactComponent as TelegramIcon } from "../../assets/telegram.svg";
import { ReactComponent as VkIcon } from "../../assets/vk.svg";
import { ReactComponent as EtsyIcon } from "../../assets/etsy.svg";
import Text from "components/common/Text";

type LandingTemplateProps = {
  children: ReactNode;
};

const LandingTemplate: FC<LandingTemplateProps> = ({ children }) => {
  return (
    <LandingTemplateWrapper>
      <LandingHeader>
        <div>
          <LandingHeaderLeft>
            <button>Counterparties</button>
            <button>For designers</button>
            <button>Jobs</button>
          </LandingHeaderLeft>
          <LandingHeaderCenter>
            <Logo />
          </LandingHeaderCenter>
          <LandingHeaderRight>
            <button className="header-search">
              <SearchIcon />
              <button>Search</button>
            </button>
            <button>Login/Register</button>
            <div className="header-icons">
              <AccountIcon />
              <FavoritesIcon />
            </div>
          </LandingHeaderRight>
        </div>
      </LandingHeader>
      <main>{children}</main>
      <LandingFooter>
        <LandingFooterWrapper>
          <div className="footer">
            <div className="footer-column">
              <Text type="mode2" className="footer-column-title">
                Links
              </Text>
              <Text>Delivery</Text>
              <Text>Payment</Text>
              <Text>Actions</Text>
              <Text>Policy & Privacy</Text>
            </div>
            <div className="footer-column">
              <Text type="mode2" className="footer-column-title">
                Payment
              </Text>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ullamcorper justo, nec, pellentesque.
              </Text>
              <div className="footer-column-cards">
                <img src="/images/visa.png" alt="" />
                <img src="/images/mastercard.png" alt="" />
              </div>
            </div>
            <div className="footer-column">
              <Text type="mode2" className="footer-column-title">
                Contacts
              </Text>
              <div className="footer-column-contacts">
                <TelephoneIcon />
                <Text>(555) 555-1234</Text>
              </div>
              <div className="footer-column-contacts">
                <TelephoneIcon />
                <Text>(555) 555-1234</Text>
              </div>
              <div className="footer-column-contacts">
                <MailIcon />
                <Text>ojjo@ojjo.ru</Text>
              </div>
            </div>
            <div className="footer-column">
              <Text type="mode2" className="footer-column-title">
                Social Networks
              </Text>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ullamcorper justo, nec, pellentesque.
              </Text>
              <div className="footer-column-socials">
                <YoutubeIcon />
                <VkIcon />
                <FacebookIcon />
                <TelegramIcon />
                <EtsyIcon />
              </div>
            </div>
          </div>
          <div className="footer-row">
            <Text>(c) 2020 OJJO jewelry</Text>
            <Text>Public Offer Agreement</Text>
            <Text>Counterparties</Text>
            <Text>Made by Figma.com</Text>
          </div>
        </LandingFooterWrapper>
      </LandingFooter>
    </LandingTemplateWrapper>
  );
};

export default memo(LandingTemplate);
