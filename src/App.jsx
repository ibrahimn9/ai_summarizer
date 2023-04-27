import { useState, useEffect } from "react";
import { Stack, Box } from "@mui/material";
import { logo, linkIcon, copy, loader, tick } from "./assets/index";
import { summarizeAPI } from "./SummarizeAPI";
import { BiLoaderAlt } from "react-icons/bi";

const App = () => {
  const [articleUrl, setArticleUrl] = useState("");
  const [summary, setSummary] = useState("");
  const [toggle, setToggle] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setToggle(true);
    setSummary("");
    setIsLoading(true);
    const { summary } = await summarizeAPI(articleUrl);
    setIsLoading(false);
    setSummary(summary);
  };

  return (
    <Box
      sx={{
        width: "100%",
        background:
          "radial-gradient(circle, rgba(2, 0, 36, 0) 0, #fafafa 100%)",
        backgroundImage:
          "radial-gradient(at 97% 21%, hsla(38, 60%, 74%, 1) 0px, transparent 40%)",
        height: "auto",
        pb: 8,
      }}
    >
      <Stack
        direction={"row"}
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          px: { xs: 2, md: 10, lg: 20 },
          py: 2,
          height: 50,
        }}
        className="nav-bar"
      >
        <Box>
          <img src={logo} />
        </Box>
        <a
          href="https://github.com/ibrahimn9/ai_summarizer.git"
          target="_blank"
        >
          <button>GitHub</button>
        </a>
      </Stack>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          mt: 2,
          textAlign: "center",
        }}
        className="hero"
      >
        <h1>Summarize Articles with</h1>
        <h1 style={{ color: "rgb(252,99,54)" }}>OpenAI GPT-4</h1>
        <p>
          Simplify your reading with Sumz, an open-source article summarizer
          that transforms lengthy articles into clear and concise summaries
        </p>
        <form onSubmit={handleSubmit}>
          <img src={linkIcon} alt="link-icon" />
          <input
            type="url"
            placeholder="Enter a URL"
            value={articleUrl}
            onChange={(e) => setArticleUrl(e.target.value)}
          />
          <button
            type="submit"
            style={{ display: "flex", alignItems: "center" }}
          >
            {!toggle || !isLoading ? "⏎" : <BiLoaderAlt className="loading" />}
          </button>
        </form>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {summary && (
            <Box
              sx={{
                width: "50%",
                background: "rgb(182,161,21)",
                background: "rgb(199,199,199,0.2)",
                textAlign: "left",
                mt: 4,
                borderRadius: "10px",
                boxShadow: "5px 5px 10px grey",
                py: 2,
                px: 4,
              }}
            >
              <p style={{ padding: 0, color: "black" }}>
                <h3>
                  Article <span style={{ color: "blue" }}>Summary</span>:
                </h3>
                {summary}
              </p>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default App;
