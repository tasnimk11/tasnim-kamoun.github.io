import { Box, Container, IconButton } from "@mui/material";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { useTranslation } from "react-i18next";
import {
  toolbarPlugin,
  ToolbarSlot,
  TransformToolbarSlot,
} from "@react-pdf-viewer/toolbar";
import { useThemeMode } from "../contexts/ThemeModeContext";
import {
  RenderShowSearchPopoverProps,
  searchPlugin,
} from "@react-pdf-viewer/search";
import SearchIcon from "@mui/icons-material/Search";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import GetAppIcon from "@mui/icons-material/GetApp";
import {
  RenderZoomInProps,
  RenderZoomOutProps,
  zoomPlugin,
} from "@react-pdf-viewer/zoom";
import {
  fullScreenPlugin,
  RenderEnterFullScreenProps,
} from "@react-pdf-viewer/full-screen";
import { getFilePlugin, RenderDownloadProps } from "@react-pdf-viewer/get-file";

export const PdfViewer = () => {
  const { t } = useTranslation("global") as any;

  const path_to_cv = t("contact_page.path_to_cv");

  console.log("path_to_cv : ", path_to_cv);

  const toolbarPluginInstance = toolbarPlugin();
  const { renderDefaultToolbar, Toolbar } = toolbarPluginInstance;

  const searchPluginInstance = searchPlugin();
  const { ShowSearchPopover } = searchPluginInstance;

  const zoomPluginInstance = zoomPlugin();
  const { ZoomIn, ZoomOut } = zoomPluginInstance;

  const fullScreenPluginInstance = fullScreenPlugin();
  const { EnterFullScreen } = fullScreenPluginInstance;

  const getFilePluginInstance = getFilePlugin();
  const { Download } = getFilePluginInstance;

  const transform: TransformToolbarSlot = (slot: ToolbarSlot) => {
    return Object.assign({}, slot, {
      NumberOfPages: () => <></>, // Turn off number of pages
      SwitchTheme: () => <></>, // Turn off theme switch
      Open: () => <></>, // Turn off theme switch
      Zoom: () => <></>, // Turn off zoom menu
      GoToPreviousPage: () => <></>, // Turn off previous page
      GoToNextPage: () => <></>, // Turn off next page
      CurrentPageInput: () => <></>, // Turn off current page
      Print: () => <></>, // Turn off print
      ShowSearchPopover: () => (
        <ShowSearchPopover>
          {(props: RenderShowSearchPopoverProps) => (
            <IconButton onClick={props.onClick} size="small">
              <SearchIcon />
            </IconButton>
          )}
        </ShowSearchPopover>
      ),

      ZoomIn: () => (
        <ZoomIn>
          {(props: RenderZoomInProps) => (
            <IconButton onClick={props.onClick} size="small">
              <ZoomInIcon />
            </IconButton>
          )}
        </ZoomIn>
      ),

      ZoomOut: () => (
        <ZoomOut>
          {(props: RenderZoomOutProps) => (
            <IconButton onClick={props.onClick} size="small">
              <ZoomOutIcon />
            </IconButton>
          )}
        </ZoomOut>
      ),

      EnterFullScreen: () => (
        <EnterFullScreen>
          {(props: RenderEnterFullScreenProps) => (
            <IconButton onClick={props.onClick} size="small">
              <FullscreenIcon />
            </IconButton>
          )}
        </EnterFullScreen>
      ),

      Download: () => (
        <Download>
          {(props: RenderDownloadProps) => (
            <IconButton onClick={props.onClick} size="small">
              <GetAppIcon />
            </IconButton>
          )}
        </Download>
      ),
      // TODO : update search or search popover
      // TODO : take off more actions
    });
  };
  const { themeMode } = useThemeMode();

  return (
    <Container
      sx={{
        width: "700px",
        height: "400px",
        overflow: "hidden",
        border: "1px solid #ccc",
        // boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        // padding: "10px",
      }}
    >
      <Box
        sx={{
          backgroundColor: (theme) => theme.palette.background.default, // Use MUI's background color
          color: (theme) => theme.palette.text.primary, // Use MUI's text color
          fontFamily: (theme) => theme.typography.fontFamily, // Use MUI's font family
          fontSize: "10px", // Use MUI's font family
          borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
        }}
      >
        <Toolbar>{renderDefaultToolbar(transform)}</Toolbar>
      </Box>
      {/* Use a Worker to optimize PDF rendering */}
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <Viewer
          fileUrl={path_to_cv}
          plugins={[
            toolbarPluginInstance,
            searchPluginInstance,
            zoomPluginInstance,
            fullScreenPluginInstance,
            getFilePluginInstance,
          ]}
          theme={themeMode}
        />
      </Worker>
    </Container>
  );
};
