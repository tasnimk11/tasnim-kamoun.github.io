import { Stack, Typography } from "@mui/material";
import AnimatedZigzagPath from "../components/AnimatedZigzagPath";
const CareerPage = () => {
  return (
    <Stack
      padding={3}
      spacing={3}
      sx={
        {
          // position: "relative", // Permet de superposer d'autres éléments au-dessus
          // width: "100%",
          // height: "100vh",
          // overflow: "hidden", // Empêche le débordement
        }
      }
    >
      <Typography
        variant="h5"
        fontWeight={900}
        sx={{
          background: "linear-gradient(to right, #6f403a, #ba6c62)",
          WebkitBackgroundClip: "text", // Ensures gradient is clipped to the text
          WebkitTextFillColor: "transparent", // Makes the background visible inside the text
          textFillColor: "transparent", // Ensures compatibility with non-WebKit browsers
        }}
      >
        My career path
      </Typography>

      <Typography
        mt={{ xs: 1, md: 3 }}
        variant="subtitle1"
        sx={{ color: (theme) => theme.palette.text.primary }}
      >
        Wanna find out more about my career ? follow the path downwards
      </Typography>
      <AnimatedZigzagPath />
      <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eum
        non officiis rerum error perspiciatis, ipsa dignissimos alias
        repellendus eius labore laborum repellat, ut voluptatum, debitis
        voluptas cumque nemo adipisci! Quibusdam inventore ducimus qui totam
        dolores tenetur, sunt ipsa tempore excepturi sapiente! Totam maxime
        delectus corporis. Illo quod, repudiandae rerum soluta, possimus nemo
        enim labore reprehenderit consectetur voluptas ab accusantium!
        Temporibus quas voluptatum, labore error itaque accusantium ea quod
        molestias incidunt! Nulla architecto iste magnam explicabo est magni
        totam provident quos ex expedita sunt, quis neque placeat voluptas,
        deserunt officia? Repudiandae architecto illum quo modi quod cupiditate
        officia ipsum, deleniti veniam illo, eligendi voluptatibus. Odio
        officiis ipsam quaerat esse provident fugiat, libero consectetur
        distinctio cupiditate cumque, nemo porro veniam excepturi. Repellendus
        optio repudiandae harum doloremque vitae nulla dolorem veniam dolores.
        Fuga consequatur nisi maiores, facere sapiente laudantium, et
        accusantium incidunt ipsum facilis odit corporis ex molestias. Quis
        alias saepe est. Officia suscipit beatae illo neque est libero maiores
        provident odit molestiae reiciendis sequi consectetur ducimus natus,
        eligendi commodi fuga, sint qui velit. Vero cupiditate, explicabo sit
        recusandae architecto a nobis! Quisquam nulla non cumque blanditiis
      </Typography>
    </Stack>
  );
};

export default CareerPage;
