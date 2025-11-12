export async function GET(reuqest: Request) {
  try {
    // const result = await fetch("https://api.d-id.com/talks", {
    //   method: "POST",
    //   headers: {
    //     accept: "application/json",
    //     "content-type": "application/json",
    //     authorization: `Basic ${process.env.DID_API_KEY}`,
    //   },
    //   body: JSON.stringify({
    //     source_url:
    //       "https://res.cloudinary.com/dfyyjr85v/image/upload/v1762764045/WhatsApp_Image_2025-11-10_at_14.09.29_rd50c2.jpg",
    //     script: {
    //       type: "text",
    //       input: "Making videos is easy with D-ID",
    //     },
    //   }),
    // });

    const result = await fetch(
      "https://api.d-id.com/talks/tlk_9_HEpsXS0IIOsiGfjmZRH",
      {
        headers: {
          accept: "application/json",
          "content-type": "application/json",
          authorization: `Basic ${process.env.DID_API_KEY}`,
        },
      }
    );

    const json = await result.json();
    console.log(json);

    return new Response(null, { status: 404 });
  } catch (error) {}
}
