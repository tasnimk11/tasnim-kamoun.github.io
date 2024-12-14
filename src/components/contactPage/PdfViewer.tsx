import { Box, Container, IconButton, Stack } from "@mui/material";

import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { useTranslation } from "react-i18next";
import { toolbarPlugin, ToolbarSlot } from "@react-pdf-viewer/toolbar";
import { useThemeMode } from "../../contexts/ThemeModeContext";
import {
  RenderShowSearchPopoverProps,
  searchPlugin,
} from "@react-pdf-viewer/search";
import SearchIcon from "@mui/icons-material/Search";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import GetAppIcon from "@mui/icons-material/GetApp";
import {
  RenderZoomInProps,
  RenderZoomOutProps,
  zoomPlugin,
} from "@react-pdf-viewer/zoom";
import { getFilePlugin, RenderDownloadProps } from "@react-pdf-viewer/get-file";

export const PdfViewer = () => {
  const { themeMode } = useThemeMode();

  const { t } = useTranslation("global") as any;
  const path_to_cv = t("contact_page.path_to_cv");

  const toolbarPluginInstance = toolbarPlugin();
  const { Toolbar } = toolbarPluginInstance;

  const searchPluginInstance = searchPlugin();
  const zoomPluginInstance = zoomPlugin();

  const getFilePluginInstance = getFilePlugin();

  // Source : https://github.com/react-pdf-viewer/examples/blob/main/toolbar/CustomToolbarExample.tsx
  return (
    <Container
      sx={{
        width: "700px",
        height: "400px",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          backgroundColor: (theme) => theme.palette.background.default, // Use MUI's background color
          color: (theme) => theme.palette.text.primary,
          fontFamily: (theme) => theme.typography.fontFamily, // Use MUI's font family
          fontSize: "10px",
          borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
          marginBottom: 2,
        }}
      >
        <Toolbar>
          {(props: ToolbarSlot) => {
            const {
              ShowSearchPopover,
              EnterFullScreen,
              Download,
              ZoomIn,
              ZoomOut,
            } = props;
            //TODO : update Popoever search !
            //TODO : responsiveness
            return (
              <Stack direction={"row"} justifyContent={"space-between"}>
                <ShowSearchPopover>
                  {(props: RenderShowSearchPopoverProps) => (
                    <IconButton onClick={props.onClick} size="small">
                      <SearchIcon />
                    </IconButton>
                  )}
                </ShowSearchPopover>
                <Stack direction={"row"}>
                  <ZoomOut>
                    {(props: RenderZoomOutProps) => (
                      <IconButton onClick={props.onClick} size="small">
                        <ZoomOutIcon />
                      </IconButton>
                    )}
                  </ZoomOut>
                  <ZoomIn>
                    {(props: RenderZoomInProps) => (
                      <IconButton onClick={props.onClick} size="small">
                        <ZoomInIcon />
                      </IconButton>
                    )}
                  </ZoomIn>
                </Stack>
                <Stack direction={"row"}>
                  <Download>
                    {(props: RenderDownloadProps) => (
                      <IconButton onClick={props.onClick} size="small">
                        <GetAppIcon />
                      </IconButton>
                    )}
                  </Download>
                </Stack>
              </Stack>
            );
          }}
        </Toolbar>
      </Box>
      {/* Use a Worker to optimize PDF rendering */}
      <Box
        sx={{
          height: "calc(100% - 50px)", // Adjust height to fill the container minus toolbar
          overflow: "auto", // Enable scrolling only here
        }}
      >
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
          <Viewer
            fileUrl={path_to_cv}
            plugins={[
              toolbarPluginInstance,
              searchPluginInstance,
              zoomPluginInstance,
              getFilePluginInstance,
            ]}
            theme={themeMode}
          />
        </Worker>
      </Box>
    </Container>
  );
};
