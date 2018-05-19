var express = require("express");
var ssr = require("./ssr.js");
var fs = require("fs");

const app = express();
app.use(express.static("./"));

app.get("/", async (req, res, next) => {
  console.log("r");
  const { html, ttRenderMs } = await ssr(
    `${req.protocol}://${req.get("host")}/public/index.html`
  );
  // Add Server-Timing! See https://w3c.github.io/server-timing/.
  res.set(
    "Server-Timing",
    `Prerender;dur=${ttRenderMs};desc="Headless render time (ms)"`
  );
  return res.status(200).send(html); // Serve prerendered page as response.
});

app.get("/posts", function(req, res) {
  var data = [
    {
      title: "post title",
      content: "post content",
      summary: "post summary"
    }
  ];
  return res.json(data);
});

app.listen(8080, () => console.log("Server started. Press Ctrl+C to quit"));
