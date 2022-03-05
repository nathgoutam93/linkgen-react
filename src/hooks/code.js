import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { useAdmin } from "../context/adminContext";
import StaticPage from "../components/staticPage";
import { format } from "prettier/standalone";
import htmlParser from "prettier/parser-html";

function useCode() {
  const { state } = useAdmin();
  const { imgSrc, profileName, about, links, appearance, socials } = state;
  const {
    background,
    backgroundColor,
    linkColor,
    linkStyle,
    linkFontColor,
    fontColor,
  } = appearance;

  const getCode = () => {
    const code = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
  
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@900&display=swap"
          rel="stylesheet"
        />
      </head>
      <style>
      *,
      *::after,
      *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      
      .page {
        min-height: 100vh;
        padding: 1rem;
        padding-top: 2.5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow-y: auto;
        overflow-x: hidden;
        background-image: url('${background}');
        background-color: ${backgroundColor};
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        font-family: 'Nunito';
        color: ${fontColor};
      }
  
      .img-container {
        width: 6rem;
        height: 6rem;
        display: flex;
        justify-content: center;
      }
  
      .img-container img {
        width: 6rem;
        height: 6rem;
        border-radius: 9999px;
        object-fit: cover;
      }
  
      .name {
        font-size: 1.125rem;
        line-height: 1.75rem;
        font-weight: 700;
      }
  
      .about {
        text-align: center;
        font-size: 1rem;
        line-height: 1.5rem;
        font-weight: 600;
      }
  
      .link-wrapper {
        padding: 1rem;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 1rem 0;
      }
  
      .link-container {
        background: ${linkStyle.filled ? linkColor : ""};
        border: ${linkStyle.filled ? "none" : `2px solid ${linkColor}`};
        color: ${linkFontColor};
        border-radius: ${linkStyle.rounded ? "1.5rem" : "0.375rem"};
        width: 100%;
        max-width: 56rem;
        min-height: 4rem;
        padding: 0.5rem;
        margin: 0.5rem 0;
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        font-family: Nunito;
      }

      .link-container:hover {
        transform: scaleX(1.05) scaleY(1.05);
        transition: 300ms transform cubic-bezier(0.4, 0, 0.2, 1);
      }
  
      .link-card {
        width: 100%;
        padding: 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
      }
      
      .link-title {
        font-size: 1.125rem;
        line-height: 1.75rem;
        font-weight: 600;
      }
      
      .link-description {
        font-size: 0.875rem;
        line-height: 1.25rem;
        font-weight: 300;
        max-width: 42rem;
        margin: 0.25rem;
      }
  
      .socials-container {
        width: 75%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
      }
      
      .social-icon{
        margin: 0.5rem;
        color: ${fontColor}
      }

      .social-icon:hover {
        transform: scaleX(1.1) scaleY(1.1);
        transition: 200ms transform cubic-bezier(0.4, 0, 0.2, 1);
      }
      
      </style>
      <body>
        ${renderToStaticMarkup(
          <StaticPage
            imgSrc={imgSrc}
            profileName={profileName}
            about={about}
            links={links}
            appearance={appearance}
            socials={socials}
          />,
        )}
        </body>
    </html>`;

    try {
      const formatted = format(code, {
        parser: "html",
        plugins: [htmlParser],
      });
      return formatted;
    } catch (error) {
      console.log(error);
    }
  };

  return { getCode };
}

export { useCode };
