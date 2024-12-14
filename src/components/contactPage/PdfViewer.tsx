import {
  Box,
  Container,
  IconButton,
  Stack,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";

import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { useTranslation } from "react-i18next";
import { toolbarPlugin, ToolbarSlot } from "@react-pdf-viewer/toolbar";
import { useThemeMode } from "../../contexts/ThemeModeContext";
import { RenderSearchProps, searchPlugin } from "@react-pdf-viewer/search";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import SpellcheckIcon from "@mui/icons-material/Spellcheck";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import GetAppIcon from "@mui/icons-material/GetApp";
import TextFieldsIcon from "@mui/icons-material/TextFields";
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
  const { Search } = searchPluginInstance;

  const zoomPluginInstance = zoomPlugin();

  const getFilePluginInstance = getFilePlugin();

  // Source : https://github.com/react-pdf-viewer/examples/blob/main/toolbar/CustomToolbarExample.tsx
  return (
    <Container
      sx={{
        width: { xs: "100%", sm: "100%", md: "700px" },
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
            const { Download, ZoomIn, ZoomOut } = props;
            return (
              <Stack direction={"row"} justifyContent={"space-between"}>
                <Stack direction={"row"}>
                  <Search>
                    {(renderSearchProps: RenderSearchProps) => {
                      return (
                        <ToggleButtonGroup
                          size="small"
                          exclusive={false}
                          sx={{
                            display: "flex",
                            alignItems: "center",

                            "& .MuiToggleButtonGroup-grouped": {
                              border: 0,
                              borderRadius: (theme) => theme.shape.borderRadius,
                            },
                          }}
                        >
                          <TextField
                            sx={{
                              input: {
                                paddingX: 1,
                                paddingY: 0.7,
                                fontSize: 11,
                              },
                              width: "100px",
                            }}
                            placeholder="Enter to search"
                            value={renderSearchProps.keyword}
                            variant="outlined"
                            onChange={(e) => {
                              renderSearchProps.setKeyword(e.target.value);
                            }}
                            onKeyDown={(e) => {
                              if (
                                e.key === "Enter" &&
                                renderSearchProps.keyword
                              ) {
                                renderSearchProps.search();
                              }
                            }}
                            size="small"
                          />

                          <ToggleButton
                            value="matchCase"
                            selected={renderSearchProps.matchCase}
                            onChange={() =>
                              renderSearchProps.changeMatchCase(
                                !renderSearchProps.matchCase
                              )
                            }
                            sx={{ border: "none" }}
                            title="Match case"
                          >
                            <TextFieldsIcon fontSize="small" />
                          </ToggleButton>

                          <ToggleButton
                            value="wholeWords"
                            selected={renderSearchProps.wholeWords}
                            onChange={() =>
                              renderSearchProps.changeWholeWords(
                                !renderSearchProps.wholeWords
                              )
                            }
                            sx={{ border: "none" }}
                            title="Match whole word"
                          >
                            <SpellcheckIcon fontSize="small" />
                          </ToggleButton>

                          <ToggleButton
                            value="previousMatch"
                            onClick={renderSearchProps.jumpToPreviousMatch}
                            sx={{ border: "none" }}
                            title="Previous match"
                          >
                            <KeyboardArrowUpIcon fontSize="small" />
                          </ToggleButton>

                          <ToggleButton
                            value="nextMatch"
                            onClick={renderSearchProps.jumpToNextMatch}
                            sx={{ border: "none" }}
                            title="Next match"
                          >
                            <KeyboardArrowDownIcon fontSize="small" />
                          </ToggleButton>
                        </ToggleButtonGroup>
                      );
                    }}
                  </Search>
                </Stack>

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
