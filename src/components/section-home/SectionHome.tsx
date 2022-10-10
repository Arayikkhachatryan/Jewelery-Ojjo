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
    </SectionHomeWrapper>
  );
};

export default SectionHome;
