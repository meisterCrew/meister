import { Carousel } from "@mantine/carousel";
import css from "styled-jsx/css";
import array from "../../members.json";
import { Button, CSSObject, Popover, Text } from "@mantine/core";
const stylef = css`
  bu {
    margin-left: 100px;
    margin-top: 10px;
    color: "ButtonShadow";
  }
`;
export default function MembersCaroucel() {
  const styles: CSSObject = { color: "Background", margin: 10 };
  const rolestyles: CSSObject = { color: "Background", margin: 10 };
  return (
    <div>
      {array.map((x, i) => {
        return (
          <div key={i}>
            <bu>
              <Text
                key={i}
                size={40}
                weight="bolder"
                >
                {x.name}
              </Text>
            </bu>
            <Carousel
              key={i}
              sx={{ maxWidth: 320, backgroundColor: "GrayText" }}
              mx="auto"
              withIndicators
              height={200}
              dragFree
              slideGap="md"
              align="start"
            >
              {x.members.map((x, i) => {
                return (
                  <Carousel.Slide key={i}>
                    <Text key={i} sx={styles}>
                      {x.name}
                    </Text>
                    <Text key={i} sx={rolestyles}>
                      {x.role}
                    </Text>
                    <Text key={i} sx={rolestyles}>
                      {x.belong}
                    </Text>
                  </Carousel.Slide>
                );
              })}
            </Carousel>
          </div>
        );
      })}
    </div>
  );
}
