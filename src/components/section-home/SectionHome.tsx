import BlackSection from "components/common/BlackSection";
import Button from "components/common/Button";
import Text from "components/common/Text";
import Title from "components/common/Title";
import {
  SectionCategoriesWrapper,
  SectionHomeWrapper,
} from "./SectionHome.styled";

const SectionHome = () => {
  return (
    <SectionHomeWrapper className="main">
      <div className="main-img">
        <img src="/images/background_header.png" alt="" />
        <div className="main-img-title">
          <Title type="mode1">Long, expensive, rich!</Title>
          <Button>
            <Text type="mode1" fw={500}>
              Products
            </Text>
          </Button>
          <div className="main-img-sponsers">
            <img src="/images/fine-coco.png" alt="fine coco" />
            <img src="/images/fine-coco.png" alt="fine coco" />
            <img src="/images/fine-coco.png" alt="fine coco" />
            <img src="/images/fine-coco.png" alt="fine coco" />
            <img src="/images/fine-coco.png" alt="fine coco" />
            <img src="/images/fine-coco.png" alt="fine coco" />
          </div>
        </div>
      </div>
      <SectionCategoriesWrapper className="categories">
        <div className="categories-title">
          <Text type="mode3">Go to events</Text>
          <Title fw={700}>The real beauty is here!</Title>
        </div>
        <div className="categories-filters">
          <Button>
            <Text>Wedding</Text>
          </Button>
          <div>
            <Button mode="mode2">
              <Text>Man</Text>
            </Button>
          </div>
          <div>
            <Button mode="mode2">
              <Text>Woman</Text>
            </Button>
          </div>
          <div>
            <Button mode="mode2">
              <Text>Partner</Text>
            </Button>
          </div>
          <div>
            <Button mode="mode2">
              <Text>Collections</Text>
            </Button>
          </div>
          <div>
            <Button mode="mode2">
              <Text>Rare</Text>
            </Button>
          </div>
        </div>
        <div className="categories-cards">
          <div className="categories-cards-item">
            <img src="/images/Rectangle 5.png" alt="" />
            <Text type="mode4">Rings</Text>
          </div>
          <div className="categories-cards-item">
            <img src="/images/Rectangle 5.png" alt="" />
            <Text type="mode4">Rings</Text>
          </div>
          <div className="categories-cards-item">
            <img src="/images/Rectangle 5.png" alt="" />
            <Text type="mode4">Rings</Text>
          </div>
          <div className="categories-cards-item">
            <img src="/images/Rectangle 5.png" alt="" />
            <Text type="mode4">Rings</Text>
          </div>
          <div className="categories-cards-item">
            <img src="/images/Rectangle 5.png" alt="" />
            <Text type="mode4">Rings</Text>
          </div>
          <div className="categories-cards-item">
            <img src="/images/Rectangle 5.png" alt="" />
            <Text type="mode4">Rings</Text>
          </div>
        </div>
      </SectionCategoriesWrapper>
      <BlackSection>
        <div>
          <Text type="mode3">Don't know what to choose?</Text>
          <Title fw={700}>Visit our showrooms</Title>
          <Text type="mode2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut duis
            tortor vitae pellentesque egestas quam pulvinar. Pellentesque
            porttitor velit sit pellentesque. Suspendisse donec pretium id
            dignissim. Dignissim ultrices eget orci viverra. Egestas quis et ut
            ultrices imperdiet lectus nulla tempus. Pharetra lorem sem purus
            nisi libero viverra ipsum.
          </Text>
          <Button mode="mode1">
            <Text>Our Showrooms</Text>
          </Button>
        </div>
      </BlackSection>
    </SectionHomeWrapper>
  );
};

export default SectionHome;
