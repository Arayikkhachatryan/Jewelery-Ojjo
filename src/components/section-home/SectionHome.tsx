import Text from "components/common/Text";
import Title from "components/common/Title";
import { SectionHomeWrapper } from "./SectionHome.styled";

const SectionHome = () => {
  return (
    <SectionHomeWrapper className="main">
      <div className="main-img">
        <img src="/images/background_header.png" alt="" />
        <div className="main-img-title">
          <Title type="mode1">Long, expensive, rich!</Title>
          <button>
            <Text type="mode1" fw={500}>
              Products
            </Text>
          </button>
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
    </SectionHomeWrapper>
  );
};

export default SectionHome;
