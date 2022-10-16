import { Carousel } from "@mantine/carousel";
import array from "../../members.json";
import { Button, CSSObject, Popover, Text } from "@mantine/core";

export default function MembersCaroucel() {
  const styles: CSSObject = { color: "Background", margin: 10 };
  const rolestyles: CSSObject = { color: "Background", margin: 10 };

  <style>
    #bu1{
      margin-left: 130px;
      margin-top: 30px;
    }
  </style>
  return (
    <div>
      {array.map((x, i) => {
        return (
          <div key={i}>
            <Text
              key={i}
              sx={{ color: "ButtonShadow" }}
              size={40}
              weight="bolder"
            >
              {x.name}
            </Text>
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
                    <div id= "bu1">
                      <Text key={i} sx={styles}>
                        {x.name}
                      </Text>
                    </div>
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