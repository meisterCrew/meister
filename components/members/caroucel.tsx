import { Carousel } from "@mantine/carousel";
import array from "../../members.json";
import { Button, CSSObject, Popover, Text } from "@mantine/core";

export default function MembersCaroucel() {
  const styles: CSSObject = { color: "Background", margin:10 };
  const rolestyles: CSSObject = { color: "Background", margin:10,  };

  return (
    <div>
      {array.map((x) => {
        return (
          <div>
            <Text sx={{ color: "ButtonShadow" }} size={40} weight="bolder">
              {x.name}
            </Text>
            <Carousel
              sx={{ maxWidth: 320, backgroundColor: "GrayText" }}
              mx="auto"
              withIndicators
              height={200}
              dragFree
              slideGap="md"
              align="start"
            >
              {x.members.map((x) => {
                return (
                  <Carousel.Slide>
                    <Text sx={styles}>{x.name}</Text>
                    <Text sx={rolestyles}>{x.role}</Text>
                    <Text sx={rolestyles}>{x.belong}</Text>
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
