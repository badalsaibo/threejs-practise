const BASE_PATH = "./public";

const server = Bun.serve({
  fetch(req: Request): Response | Promise<Response> {
    console.log(req);
    const url = new URL(req.url).pathname;
    if (url === "/") {
      console.log(url);

      return new Response(Bun.file("./public/index.html"));
    } else {
      console.log({ url });
      const filePath = BASE_PATH + url;
      console.log("fp", filePath);
      const file = Bun.file(filePath);
      return new Response(file);
    }
  },
  error() {
    return new Response(null, { status: 404 });
  },

  // Optional port number - the default value is 3000
  port: process.env.PORT || 3000,
});

console.log(`Listening on localhost: ${server.port}`);
