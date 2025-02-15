import { jsx, jsxs, Fragment as Fragment$1 } from "react/jsx-runtime";
import { RemixServer, Link as Link$1, useLocation, useNavigate, useNavigation, useLoaderData, useFetcher, Meta, Links, Outlet, ScrollRestoration, Scripts, useRouteError, useActionData, Form } from "@remix-run/react";
import * as isbotModule from "isbot";
import { renderToReadableStream } from "react-dom/server";
import { createCookieSessionStorage, json } from "@remix-run/cloudflare";
import { createContext, useContext, forwardRef, useRef, useEffect, useState, memo, Fragment, useCallback, useId, Suspense, lazy, useMemo, Children, useSyncExternalStore } from "react";
import { useReducedMotion, AnimatePresence, usePresence, useSpring } from "framer-motion";
import { useMDXComponents, MDXProvider } from "@mdx-js/react";
import nodemailer from "nodemailer";
async function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  const body = await renderToReadableStream(
    /* @__PURE__ */ jsx(RemixServer, { context: remixContext, url: request.url }),
    {
      // If you wish to abort the rendering process, you can pass a signal here.
      // Please refer to the templates for example son how to configure this.
      // signal: controller.signal,
      onError(error2) {
        console.error(error2);
        responseStatusCode = 500;
      }
    }
  );
  if (isBotRequest(request.headers.get("user-agent"))) {
    await body.allReady;
  }
  responseHeaders.set("Content-Type", "text/html");
  return new Response(body, {
    headers: responseHeaders,
    status: responseStatusCode
  });
}
function isBotRequest(userAgent) {
  if (!userAgent) {
    return false;
  }
  if ("isbot" in isbotModule && typeof isbotModule.isbot === "function") {
    return isbotModule.isbot(userAgent);
  }
  if ("default" in isbotModule && typeof isbotModule.default === "function") {
    return isbotModule.default(userAgent);
  }
  return false;
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest
}, Symbol.toStringTag, { value: "Module" }));
const GothamBoldItalic = "/assets/gotham-bold-italic-C_msAlmW.woff2";
const GothamBold = "/assets/gotham-bold-D1kvQ7KV.woff2";
const GothamBookItalic = "/assets/gotham-book-italic-Bm2IEtSK.woff2";
const GothamBook = "/assets/gotham-book-Bnaws0Ef.woff2";
const GothamMediumItalic = "/assets/gotham-medium-italic-Dok430ou.woff2";
const GothamMedium = "/assets/gotham-medium-0VT3RO8I.woff2";
const IPAGothic = "/assets/ipa-gothic-DimHCOud.woff2";
const media = {
  desktop: 2080,
  laptop: 1680,
  tablet: 1040,
  mobile: 696,
  mobileS: 400
};
const numToPx = (num) => `${num}px`;
const pxToRem = (px) => `${px / 16}rem`;
const msToNum = (msString) => Number(msString.replace("ms", ""));
const numToMs = (num) => `${num}ms`;
function cssProps(props, style = {}) {
  let result = {};
  const keys = Object.keys(props);
  for (const key of keys) {
    let value2 = props[key];
    if (typeof value2 === "number" && key === "delay") {
      value2 = numToMs(value2);
    }
    if (typeof value2 === "number" && key !== "opacity") {
      value2 = numToPx(value2);
    }
    if (typeof value2 === "number" && key === "opacity") {
      value2 = `${value2 * 100}%`;
    }
    result[`--${key}`] = value2;
  }
  return { ...result, ...style };
}
function classes(...classes2) {
  return classes2.filter(Boolean).join(" ");
}
const baseTokens = {
  black: "oklch(0% 0 0)",
  white: "oklch(100% 0 0)",
  bezierFastoutSlowin: "cubic-bezier(0.4, 0.0, 0.2, 1)",
  durationXS: "200ms",
  durationS: "300ms",
  durationM: "400ms",
  durationL: "600ms",
  durationXL: "800ms",
  systemFontStack: "system-ui, -apple-system, BlinkMacSystemFont, San Francisco, Roboto, Segoe UI, Ubuntu, Helvetica Neue, sans-serif",
  fontStack: `Gotham, var(--systemFontStack)`,
  monoFontStack: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
  japaneseFontStack: "IPA Gothic, ヒラギノ角ゴ Pro W3, Hiragino Kaku Gothic Pro, Hiragino Sans, Osaka, メイリオ, Meiryo, Segoe UI, sans-serif",
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
  fontSizeH0: pxToRem(140),
  fontSizeH1: pxToRem(100),
  fontSizeH2: pxToRem(58),
  fontSizeH3: pxToRem(38),
  fontSizeH4: pxToRem(28),
  fontSizeH5: pxToRem(24),
  fontSizeBodyXL: pxToRem(22),
  fontSizeBodyL: pxToRem(20),
  fontSizeBodyM: pxToRem(18),
  fontSizeBodyS: pxToRem(16),
  fontSizeBodyXS: pxToRem(14),
  lineHeightTitle: "1.1",
  lineHeightBody: "1.6",
  maxWidthS: "540px",
  maxWidthM: "720px",
  maxWidthL: "1096px",
  maxWidthXL: "1680px",
  spaceOuter: "64px",
  spaceXS: "4px",
  spaceS: "8px",
  spaceM: "16px",
  spaceL: "24px",
  spaceXL: "32px",
  space2XL: "48px",
  space3XL: "64px",
  space4XL: "96px",
  space5XL: "128px",
  zIndex0: 0,
  zIndex1: 4,
  zIndex2: 8,
  zIndex3: 16,
  zIndex4: 32,
  zIndex5: 64
};
const tokensDesktop = {
  fontSizeH0: pxToRem(120),
  fontSizeH1: pxToRem(80)
};
const tokensLaptop = {
  maxWidthS: "480px",
  maxWidthM: "640px",
  maxWidthL: "1000px",
  maxWidthXL: "1100px",
  spaceOuter: "48px",
  fontSizeH0: pxToRem(100),
  fontSizeH1: pxToRem(70),
  fontSizeH2: pxToRem(50),
  fontSizeH3: pxToRem(36),
  fontSizeH4: pxToRem(26),
  fontSizeH5: pxToRem(22)
};
const tokensTablet = {
  fontSizeH0: pxToRem(80),
  fontSizeH1: pxToRem(60),
  fontSizeH2: pxToRem(48),
  fontSizeH3: pxToRem(32),
  fontSizeH4: pxToRem(24),
  fontSizeH5: pxToRem(20)
};
const tokensMobile = {
  spaceOuter: "24px",
  fontSizeH0: pxToRem(56),
  fontSizeH1: pxToRem(40),
  fontSizeH2: pxToRem(34),
  fontSizeH3: pxToRem(28),
  fontSizeH4: pxToRem(22),
  fontSizeH5: pxToRem(18),
  fontSizeBodyL: pxToRem(17),
  fontSizeBodyM: pxToRem(16),
  fontSizeBodyS: pxToRem(14)
};
const tokensMobileSmall = {
  spaceOuter: "16px",
  fontSizeH0: pxToRem(42),
  fontSizeH1: pxToRem(38),
  fontSizeH2: pxToRem(28),
  fontSizeH3: pxToRem(24),
  fontSizeH4: pxToRem(20)
};
const dark = {
  background: "oklch(17.76% 0 0)",
  backgroundLight: "oklch(21.78% 0 0)",
  primary: "oklch(84.42% 0.19 202.24)",
  accent: "oklch(84.42% 0.19 202.24)",
  error: "oklch(65.91% 0.249 13.76)",
  text: "var(--white)",
  textTitle: "var(--text)",
  textBody: "color-mix(in lab, var(--text) 80%, transparent)",
  textLight: "color-mix(in lab, var(--text) 60%, transparent)"
};
const light = {
  background: "oklch(96.12% 0 0)",
  backgroundLight: "var(--white)",
  primary: "var(--black)",
  accent: "oklch(84.42% 0.19 202.24)",
  error: "oklch(63.17% 0.259 25.41)",
  text: "var(--black)",
  textTitle: "color-mix(in lab, var(--text) 90%, transparent)",
  textBody: "color-mix(in lab, var(--text) 75%, transparent)",
  textLight: "color-mix(in lab, var(--text) 55%, transparent)"
};
const tokens = {
  base: baseTokens,
  desktop: tokensDesktop,
  laptop: tokensLaptop,
  tablet: tokensTablet,
  mobile: tokensMobile,
  mobileS: tokensMobileSmall
};
const themes = { dark, light };
const ThemeContext = createContext({});
const ThemeProvider = ({
  theme = "dark",
  children,
  className,
  as: Component = "div",
  toggleTheme,
  ...rest
}) => {
  const parentTheme = useTheme();
  const isRootProvider = !parentTheme.theme;
  return /* @__PURE__ */ jsxs(
    ThemeContext.Provider,
    {
      value: {
        theme,
        toggleTheme: toggleTheme || parentTheme.toggleTheme
      },
      children: [
        isRootProvider && children,
        !isRootProvider && /* @__PURE__ */ jsx(Component, { className: classes(className), "data-theme": theme, ...rest, children })
      ]
    }
  );
};
function useTheme() {
  const currentTheme = useContext(ThemeContext);
  return currentTheme;
}
function squish(styles2) {
  return styles2.replace(/\s\s+/g, " ");
}
function createThemeProperties(theme) {
  return squish(
    Object.keys(theme).map((key) => `--${key}: ${theme[key]};`).join("\n\n")
  );
}
function createMediaTokenProperties() {
  return squish(
    Object.keys(media).map((key) => {
      return `
        @media (max-width: ${media[key]}px) {
          :root {
            ${createThemeProperties(tokens[key])}
          }
        }
      `;
    }).join("\n")
  );
}
const layerStyles = squish(`
  @layer theme, base, components, layout;
`);
const tokenStyles = squish(`
  :root {
    ${createThemeProperties(tokens.base)}
  }

  ${createMediaTokenProperties()}

  [data-theme='dark'] {
    ${createThemeProperties(themes.dark)}
  }

  [data-theme='light'] {
    ${createThemeProperties(themes.light)}
  }
`);
const fontStyles = squish(`
  @font-face {
    font-family: Gotham;
    font-weight: 400;
    src: url(${GothamBook}) format('woff2');
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 400;
    src: url(${GothamBookItalic}) format('woff2');
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 500;
    src: url(${GothamMedium}) format('woff2');
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 500;
    src: url(${GothamMediumItalic}) format('woff2');
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 700;
    src: url(${GothamBold}) format('woff2');
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 700;
    src: url(${GothamBoldItalic}) format('woff2');
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: IPA Gothic;
    font-weight: 400;
    src: url(${IPAGothic}) format('woff2');
    font-display: swap;
    font-style: normal;
  }
`);
const themeStyles = squish(`
  ${layerStyles}

  @layer theme {
    ${tokenStyles}
    ${fontStyles}
  }
`);
const notFoundPoster = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wgARCABAAEADAREAAhEBAxEB/8QAGwAAAgIDAQAAAAAAAAAAAAAABAYDBQABBwL/xAAYAQADAQEAAAAAAAAAAAAAAAABAgMABP/aAAwDAQACEAMQAAAA5V08yLHoDDYNgxJHRa8hFEklbmS9AoObTssxD6/KwqJ6VRg4APobRBbZj3O5QslX1GlT21TtokddVIHubc7rotmtg0vhhlBMtofQzWMe2qits4MULqvSbGlenLMibq3QhVZWsVXV6BHLM8lcqXKySlWe0besFLm6rgBirP8A/8QAJBAAAgICAgMBAAIDAAAAAAAAAgMAAQQFERIGITETFDIgIiP/2gAIAQEAAT8A2eWY49zPdbGl/hgl1dVzUt74dVEIqmWVzea2qximxTa3lUpdyllF4pFXyIxDptepoEF+NVcDD7B6mev+UsqqbTRf9ruVqxD7UHXK5jEgu+BmMpY8EU1D080NXUwMcWBVjD3YY43XaZO9pz+OZ1F+P2D7HA0LuIxWPLmbUixw4mHtmoZzRTxzzCl8Uwo/OY0vsE2du08c2Fc0DLmXjJbj9g4mH+aFl2nkmTTWlQwoDSD5cwfGGtP2MzPHLQn+sDVuSfYJh5TxDofMHHbkDdDN1rWJu7uovCY0vVQNI66/rMLZoAuPU2mWgkWVwtoi2WHqIpLq7DxMNqkD7nkmekyuvU0P4tZ7qGKgD0NTHYX6fZsmM/iX7v5GtMX37v7NLmECq7XLyLeF0E3K2U/3PGkXXu5lF/pP/8QAGxEAAwEBAAMAAAAAAAAAAAAAAAECERASICH/2gAIAQIBAT8AbG/WRiejXMFJhKKrCZQ5MMF2xs0Q0Io0pb2R8rrrBUJmjrDdMPEuBJokS0uCVghDKXIof0tYIR//xAAbEQADAQEBAQEAAAAAAAAAAAAAAQIREhAgMf/aAAgBAwEBPwCCV8MsRCwXumlkoVCo00Q0OWRJEHJhhnnJKwz5Xzpp0I06Js0ejbQrIKYxEswuNOcI/CvP/9k=";
const notFoundVideo = "/assets/notfound-Cfa33_DP.mp4";
const flatlinePoster = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAASCAYAAABB7B6eAAAACXBIWXMAAAsRAAALEQF/ZF+RAAACnElEQVQ4y1VU4ZrbIAyzwc3dbft2P/f+T7lrAniS7dBb+xHaAJYly+ifX58uoqLa8GzSMHc1jC69dTGM1rCigm1Llk+ZPuScQy6Ohf9ribsLv/fH62mP3jHFafwnkMYCp46HdZWjmzwsQQCBoENsXPI1sB/jEoImyB0+fiGefRwHssLBJTFL8olgwEbwJj8Ok7eHBRiPngD4e/ZKJkdbZLd2eGK5gsHv93cZeH/NJWM66OYiZekYhzUE7wFymMWhc1hIyoTcybzJ1FkAmT3Z8L99fvyM4E+gfF0Th7ER2ZBBQ4YEMowHmHBEwngM7LnsiKR8aQAgpGhBMDhrEwye2NTPiaULS0PGGEWc2ZFR0ues+ZZ2CCNYe8jqGmbQqJ1vgGtOsTd7IBKlaXghyIiMMyipUjJuvAq0N0gTMiIY5IHHxAAkkKzhHJkTiEXveGe3rfSWJAb1zVqQJgGeI8kzU+rudEW5hsUOcLquSSTcshxi9DKznjNt1mqjxCEPoAGAwaJrnBXuWiVd2sVzoT6tMmbt7LzYNF7Fosak5tkWZbpVTBZkXBHo1VgsLIcU41U2Z3KUy87BjgTAymylFhSPSIzSpXXKetmWEnOOVlAB6tkrlI1MjPoy+6Tsm16MVDjrUiCRqd41k2g+BsvMpZyke7agXsG1Cnb3gNyWjH7IgCKvfYa+4DxVy3XZyemkPGteskTStdj/c5RWwBepuKe2a5g9xqq5uvlmay+becjQ6pJj0/Z2A2z77PtSv7Gk5lOzZxIsS89vApQYmaWyZ+JwAtUNy4Pq+8ZULdvyhq2iuGq1RlqYgBtA9AaSLUn7JpVX+qt0avLS+XaTfjeus5sna5DRwt7qL/3y3t61kapFywO7e7PPfFv4/k3zcPwDeTTjchlA+6QAAAAASUVORK5CYII=";
const flatlineVideo = "/assets/flatline-DaiGY3H4.mp4";
const icon$2 = "_icon_1tdl1_2";
const styles$z = {
  icon: icon$2
};
const sprites = "/assets/icons-DGlJMztt.svg";
const Icon = forwardRef(({ icon: icon2, className, size, ...rest }, ref) => {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      "aria-hidden": true,
      ref,
      className: classes(styles$z.icon, className),
      width: size || 24,
      height: size || 24,
      ...rest,
      children: /* @__PURE__ */ jsx("use", { href: `${sprites}#${icon2}` })
    }
  );
});
const text$5 = "_text_13dm1_2";
const styles$y = {
  text: text$5
};
const Text = ({
  children,
  size = "m",
  as: Component = "span",
  align = "auto",
  weight = "auto",
  secondary,
  className,
  ...rest
}) => {
  return /* @__PURE__ */ jsx(
    Component,
    {
      className: classes(styles$y.text, className),
      "data-align": align,
      "data-size": size,
      "data-weight": weight,
      "data-secondary": secondary,
      ...rest,
      children
    }
  );
};
const loader$6 = "_loader_1o1zt_2";
const text$4 = "_text_1o1zt_17";
const span = "_span_1o1zt_43";
const styles$x = {
  loader: loader$6,
  text: text$4,
  span
};
const Loader = forwardRef(
  ({ className, style, width = 32, height = 4, text: text2 = "Loading...", center, ...rest }, ref) => {
    const reduceMotion = useReducedMotion();
    if (reduceMotion) {
      return /* @__PURE__ */ jsx(Text, { className: classes(styles$x.text, className), weight: "medium", ...rest, children: text2 });
    }
    return /* @__PURE__ */ jsx(
      "div",
      {
        ref,
        className: classes(styles$x.loader, className),
        "data-center": center,
        style: cssProps({ width, height }, style),
        ...rest,
        children: /* @__PURE__ */ jsx("div", { className: styles$x.span })
      }
    );
  }
);
const Transition = ({ children, in: show, unmount, initial = true, ...props }) => {
  const enterTimeout = useRef();
  const exitTimeout = useRef();
  useEffect(() => {
    if (show) {
      clearTimeout(exitTimeout.current);
    } else {
      clearTimeout(enterTimeout.current);
    }
  }, [show]);
  return /* @__PURE__ */ jsx(AnimatePresence, { children: (show || !unmount) && /* @__PURE__ */ jsx(
    TransitionContent,
    {
      enterTimeout,
      exitTimeout,
      in: show,
      initial,
      ...props,
      children
    }
  ) });
};
const TransitionContent = ({
  children,
  timeout = 0,
  enterTimeout,
  exitTimeout,
  onEnter,
  onEntered,
  onExit,
  onExited,
  initial,
  nodeRef: defaultNodeRef,
  in: show
}) => {
  const [status, setStatus] = useState(initial ? "exited" : "entered");
  const [isPresent, safeToRemove] = usePresence();
  const [hasEntered, setHasEntered] = useState(initial ? false : true);
  const splitTimeout = typeof timeout === "object";
  const internalNodeRef = useRef(null);
  const nodeRef = defaultNodeRef || internalNodeRef;
  const visible = hasEntered && show ? isPresent : false;
  useEffect(() => {
    var _a;
    if (hasEntered || !show) return;
    const actualTimeout = splitTimeout ? timeout.enter : timeout;
    clearTimeout(enterTimeout.current);
    clearTimeout(exitTimeout.current);
    setHasEntered(true);
    setStatus("entering");
    onEnter == null ? void 0 : onEnter();
    (_a = nodeRef.current) == null ? void 0 : _a.offsetHeight;
    enterTimeout.current = setTimeout(() => {
      setStatus("entered");
      onEntered == null ? void 0 : onEntered();
    }, actualTimeout);
  }, [onEnter, onEntered, timeout, status, show]);
  useEffect(() => {
    var _a;
    if (isPresent && show) return;
    const actualTimeout = splitTimeout ? timeout.exit : timeout;
    clearTimeout(enterTimeout.current);
    clearTimeout(exitTimeout.current);
    setStatus("exiting");
    onExit == null ? void 0 : onExit();
    (_a = nodeRef.current) == null ? void 0 : _a.offsetHeight;
    exitTimeout.current = setTimeout(() => {
      setStatus("exited");
      safeToRemove == null ? void 0 : safeToRemove();
      onExited == null ? void 0 : onExited();
    }, actualTimeout);
  }, [isPresent, onExit, safeToRemove, timeout, onExited, show]);
  return children({ visible, status, nodeRef });
};
const button$6 = "_button_1l2e3_2";
const text$3 = "_text_1l2e3_132";
const loader$5 = "_loader_1l2e3_145";
const icon$1 = "_icon_1l2e3_158";
const styles$w = {
  button: button$6,
  text: text$3,
  loader: loader$5,
  icon: icon$1
};
function isExternalLink(href) {
  return href == null ? void 0 : href.includes("://");
}
const Button = forwardRef(({ href, ...rest }, ref) => {
  if (isExternalLink(href) || !href) {
    return /* @__PURE__ */ jsx(ButtonContent, { href, ref, ...rest });
  }
  return /* @__PURE__ */ jsx(
    ButtonContent,
    {
      unstable_viewTransition: true,
      as: Link$1,
      prefetch: "intent",
      to: href,
      ref,
      ...rest
    }
  );
});
const ButtonContent = forwardRef(
  ({
    className,
    as,
    secondary,
    loading,
    loadingText = "loading",
    icon: icon2,
    iconEnd,
    iconHoverShift,
    iconOnly,
    children,
    rel,
    target,
    href,
    disabled,
    ...rest
  }, ref) => {
    const isExternal = isExternalLink(href);
    const defaultComponent = href ? "a" : "button";
    const Component = as || defaultComponent;
    return /* @__PURE__ */ jsxs(
      Component,
      {
        className: classes(styles$w.button, className),
        "data-loading": loading,
        "data-icon-only": iconOnly,
        "data-secondary": secondary,
        "data-icon": icon2,
        href,
        rel: rel || isExternal ? "noopener noreferrer" : void 0,
        target: target || isExternal ? "_blank" : void 0,
        disabled,
        ref,
        ...rest,
        children: [
          !!icon2 && /* @__PURE__ */ jsx(
            Icon,
            {
              className: styles$w.icon,
              "data-start": !iconOnly,
              "data-shift": iconHoverShift,
              icon: icon2
            }
          ),
          !!children && /* @__PURE__ */ jsx("span", { className: styles$w.text, children }),
          !!iconEnd && /* @__PURE__ */ jsx(
            Icon,
            {
              className: styles$w.icon,
              "data-end": !iconOnly,
              "data-shift": iconHoverShift,
              icon: iconEnd
            }
          ),
          /* @__PURE__ */ jsx(Transition, { unmount: true, in: loading, children: ({ visible, nodeRef }) => /* @__PURE__ */ jsx(
            Loader,
            {
              ref: nodeRef,
              className: styles$w.loader,
              size: 32,
              text: loadingText,
              "data-visible": visible
            }
          ) })
        ]
      }
    );
  }
);
const hidden = "_hidden_1mhmf_2";
const styles$v = {
  hidden
};
const VisuallyHidden = forwardRef(
  ({ className, showOnFocus, as: Component = "span", children, visible, ...rest }, ref) => {
    return /* @__PURE__ */ jsx(
      Component,
      {
        className: classes(styles$v.hidden, className),
        "data-hidden": !visible && !showOnFocus,
        "data-show-on-focus": showOnFocus,
        ref,
        ...rest,
        children
      }
    );
  }
);
async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
const text$2 = "_text_1v07c_2";
const glyph = "_glyph_1v07c_9";
const value = "_value_1v07c_16";
const styles$u = {
  text: text$2,
  glyph,
  value
};
const glyphs = [
  "ਅ",
  "ਆ",
  "ਇ",
  "ਈ",
  "ਉ",
  "ਊ",
  "ਏ",
  "ਐ",
  "ਓ",
  "ਔ",
  "ਕ",
  "ਖ",
  "ਗ",
  "ਘ",
  "ਙ",
  "ਚ",
  "ਛ",
  "ਜ",
  "ਝ",
  "ਞ",
  "ਟ",
  "ਠ",
  "ਡ",
  "ਢ",
  "ਣ",
  "ਤ",
  "ਥ",
  "ਦ",
  "ਧ",
  "ਨ",
  "ਪ",
  "ਫ",
  "ਬ",
  "ਭ",
  "ਮ",
  "ਯ",
  "ਰ",
  "ਲ",
  "ਵ",
  "ਸ਼",
  "ਸ",
  "ਹ",
  "ਖ਼",
  "ਗ਼",
  "ਜ਼",
  "ੜ",
  "ਫ਼",
  "੦",
  "੧",
  "੨",
  "੩",
  "੪",
  "੫",
  "੬",
  "੭",
  "੮",
  "੯",
  "ੰ",
  "ੱ",
  "ਂ"
];
const CharType = {
  Glyph: "glyph",
  Value: "value"
};
function shuffle(content2, output, position) {
  return content2.map((value2, index2) => {
    if (index2 < position) {
      return { type: CharType.Value, value: value2 };
    }
    if (position % 1 < 0.5) {
      const rand = Math.floor(Math.random() * glyphs.length);
      return { type: CharType.Glyph, value: glyphs[rand] };
    }
    return { type: CharType.Glyph, value: output[index2].value };
  });
}
const DecoderText = memo(
  ({ text: text2, start = true, delay: startDelay = 0, className, ...rest }) => {
    const output = useRef([{ type: CharType.Glyph, value: "" }]);
    const container2 = useRef();
    const reduceMotion = useReducedMotion();
    const decoderSpring = useSpring(0, { stiffness: 8, damping: 5 });
    useEffect(() => {
      const containerInstance = container2.current;
      const content2 = text2.split("");
      const renderOutput = () => {
        const characterMap = output.current.map((item2) => {
          return `<span class="${styles$u[item2.type]}">${item2.value}</span>`;
        });
        containerInstance.innerHTML = characterMap.join("");
      };
      const unsubscribeSpring = decoderSpring.on("change", (value2) => {
        output.current = shuffle(content2, output.current, value2);
        renderOutput();
      });
      const startSpring = async () => {
        await delay(startDelay);
        decoderSpring.set(content2.length);
      };
      if (start && true && !reduceMotion) {
        startSpring();
      }
      if (reduceMotion) {
        output.current = content2.map((value2, index2) => ({
          type: CharType.Value,
          value: content2[index2]
        }));
        renderOutput();
      }
      return () => {
        unsubscribeSpring == null ? void 0 : unsubscribeSpring();
      };
    }, [decoderSpring, reduceMotion, start, startDelay, text2]);
    return /* @__PURE__ */ jsxs("span", { className: classes(styles$u.text, className), ...rest, children: [
      /* @__PURE__ */ jsx(VisuallyHidden, { className: styles$u.label, children: text2 }),
      /* @__PURE__ */ jsx("span", { "aria-hidden": true, className: styles$u.content, ref: container2 })
    ] });
  }
);
const heading$2 = "_heading_e2qtd_2";
const styles$t = {
  heading: heading$2
};
const Heading = ({
  children,
  level = 1,
  as,
  align = "auto",
  weight = "medium",
  className,
  ...rest
}) => {
  const clampedLevel = Math.min(Math.max(level, 0), 5);
  const Component = as || `h${Math.max(clampedLevel, 1)}`;
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(
    Component,
    {
      className: classes(styles$t.heading, className),
      "data-align": align,
      "data-weight": weight,
      "data-level": clampedLevel,
      ...rest,
      children
    }
  ) });
};
const page = "_page_memxv_2";
const videoContainer = "_videoContainer_memxv_22";
const video$1 = "_video_memxv_22";
const credit = "_credit_memxv_78";
const details$3 = "_details_memxv_102";
const text$1 = "_text_memxv_115";
const title$9 = "_title_memxv_122";
const titleFlatline = "_titleFlatline_memxv_123";
const subheading = "_subheading_memxv_155";
const description$7 = "_description_memxv_185";
const button$5 = "_button_memxv_204";
const styles$s = {
  page,
  videoContainer,
  video: video$1,
  credit,
  details: details$3,
  text: text$1,
  title: title$9,
  titleFlatline,
  subheading,
  description: description$7,
  button: button$5
};
function useHasMounted() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return mounted;
}
function useInterval(callback, delay2, reset) {
  const savedCallback = useRef();
  useEffect(() => {
    savedCallback.current = callback;
  });
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    {
      let id = setInterval(tick, delay2);
      return () => clearInterval(id);
    }
  }, [delay2, reset]);
}
function useInViewport(elementRef, unobserveOnIntersect, options2 = {}, shouldObserve = true) {
  const [intersect, setIntersect] = useState(false);
  const [isUnobserved, setIsUnobserved] = useState(false);
  useEffect(() => {
    if (!(elementRef == null ? void 0 : elementRef.current)) return;
    const observer = new IntersectionObserver(([entry2]) => {
      const { isIntersecting, target } = entry2;
      setIntersect(isIntersecting);
      if (isIntersecting && unobserveOnIntersect) {
        observer.unobserve(target);
        setIsUnobserved(true);
      }
    }, options2);
    if (!isUnobserved && shouldObserve) {
      observer.observe(elementRef.current);
    }
    return () => observer.disconnect();
  }, [elementRef, unobserveOnIntersect, options2, isUnobserved, shouldObserve]);
  return intersect;
}
function useParallax(multiplier, onChange) {
  const reduceMotion = useReducedMotion();
  useEffect(() => {
    let ticking = false;
    let animationFrame = null;
    const animate = () => {
      const { innerHeight } = window;
      const offsetValue = Math.max(0, window.scrollY) * multiplier;
      const clampedOffsetValue = Math.max(
        -innerHeight,
        Math.min(innerHeight, offsetValue)
      );
      onChange(clampedOffsetValue);
      ticking = false;
    };
    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        animationFrame = requestAnimationFrame(animate);
      }
    };
    if (!reduceMotion) {
      window.addEventListener("scroll", handleScroll);
      handleScroll();
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrame);
    };
  }, [multiplier, onChange, reduceMotion]);
}
function usePrevious(value2) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value2;
  }, [value2]);
  return ref.current;
}
function useScrollToHash() {
  const scrollTimeout = useRef();
  const location = useLocation();
  const navigate = useNavigate();
  const reduceMotion = useReducedMotion();
  const scrollToHash = useCallback(
    (hash, onDone) => {
      const id = hash.split("#")[1];
      const targetElement = document.getElementById(id);
      targetElement.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
      const handleScroll = () => {
        clearTimeout(scrollTimeout.current);
        scrollTimeout.current = setTimeout(() => {
          window.removeEventListener("scroll", handleScroll);
          if (window.location.pathname === location.pathname) {
            onDone == null ? void 0 : onDone();
            navigate(`${location.pathname}#${id}`, { scroll: false });
          }
        }, 50);
      };
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
        clearTimeout(scrollTimeout.current);
      };
    },
    [navigate, reduceMotion, location.pathname]
  );
  return scrollToHash;
}
function useWindowSize() {
  const dimensions = useRef(() => ({ w: 1280, h: 800 }));
  const createRuler = useCallback(() => {
    let ruler = document.createElement("div");
    ruler.style.position = "fixed";
    ruler.style.height = "100vh";
    ruler.style.width = 0;
    ruler.style.top = 0;
    document.documentElement.appendChild(ruler);
    dimensions.current.w = window.innerWidth;
    dimensions.current.h = ruler.offsetHeight;
    document.documentElement.removeChild(ruler);
    ruler = null;
  }, []);
  const getHeight = useCallback(() => {
    const isIOS = navigator == null ? void 0 : navigator.userAgent.match(/iphone|ipod|ipad/i);
    if (isIOS) {
      createRuler();
      return dimensions.current.h;
    }
    return window.innerHeight;
  }, [createRuler]);
  const getSize = useCallback(() => {
    return {
      width: window.innerWidth,
      height: getHeight()
    };
  }, [getHeight]);
  const [windowSize, setWindowSize] = useState(dimensions.current);
  useEffect(() => {
    const handleResize = () => {
      setWindowSize(getSize());
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [getSize]);
  return windowSize;
}
async function loadImageFromSrcSet({ src, srcSet, sizes }) {
  return new Promise((resolve, reject) => {
    try {
      if (!src && !srcSet) {
        throw new Error("No image src or srcSet provided");
      }
      let tempImage = new Image();
      if (src) {
        tempImage.src = src;
      }
      if (srcSet) {
        tempImage.srcset = srcSet;
      }
      if (sizes) {
        tempImage.sizes = sizes;
      }
      const onLoad = () => {
        tempImage.removeEventListener("load", onLoad);
        const source = tempImage.currentSrc;
        tempImage = null;
        resolve(source);
      };
      tempImage.addEventListener("load", onLoad);
    } catch (error2) {
      reject(`Error loading ${srcSet}: ${error2}`);
    }
  });
}
async function generateImage(width = 1, height = 1) {
  return new Promise((resolve) => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = width;
    canvas.height = height;
    ctx.fillStyle = "rgba(0, 0, 0, 0)";
    ctx.fillRect(0, 0, width, height);
    canvas.toBlob(async (blob) => {
      if (!blob) throw new Error("Video thumbnail failed to load");
      const image2 = URL.createObjectURL(blob);
      canvas.remove();
      resolve(image2);
    });
  });
}
async function resolveSrcFromSrcSet({ srcSet, sizes }) {
  const sources = await Promise.all(
    srcSet.split(", ").map(async (srcString) => {
      const [src, width] = srcString.split(" ");
      const size = Number(width.replace("w", ""));
      const image2 = await generateImage(size);
      return { src, image: image2, width };
    })
  );
  const fakeSrcSet = sources.map(({ image: image2, width }) => `${image2} ${width}`).join(", ");
  const fakeSrc = await loadImageFromSrcSet({ srcSet: fakeSrcSet, sizes });
  const output = sources.find((src) => src.image === fakeSrc);
  return output.src;
}
const image$3 = "_image_4szht_2";
const elementWrapper = "_elementWrapper_4szht_49";
const placeholder = "_placeholder_4szht_71";
const element = "_element_4szht_49";
const button$4 = "_button_4szht_104";
const styles$r = {
  image: image$3,
  elementWrapper,
  placeholder,
  element,
  button: button$4
};
const Image$1 = ({
  className,
  style,
  reveal,
  delay: delay2 = 0,
  raised,
  src: baseSrc,
  srcSet,
  placeholder: placeholder2,
  ...rest
}) => {
  const [loaded, setLoaded] = useState(false);
  const { theme } = useTheme();
  const containerRef = useRef();
  const src = baseSrc || srcSet.split(" ")[0];
  const inViewport = useInViewport(containerRef, !getIsVideo(src));
  const onLoad = useCallback(() => {
    setLoaded(true);
  }, []);
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: classes(styles$r.image, className),
      "data-visible": inViewport || loaded,
      "data-reveal": reveal,
      "data-raised": raised,
      "data-theme": theme,
      style: cssProps({ delay: numToMs(delay2) }, style),
      ref: containerRef,
      children: /* @__PURE__ */ jsx(
        ImageElements,
        {
          delay: delay2,
          onLoad,
          loaded,
          inViewport,
          reveal,
          src,
          srcSet,
          placeholder: placeholder2,
          ...rest
        }
      )
    }
  );
};
const ImageElements = ({
  onLoad,
  loaded,
  inViewport,
  srcSet,
  placeholder: placeholder2,
  delay: delay2,
  src,
  alt,
  play = true,
  restartOnPause,
  reveal,
  sizes,
  width,
  height,
  noPauseButton,
  cover,
  ...rest
}) => {
  const reduceMotion = useReducedMotion();
  const [showPlaceholder, setShowPlaceholder] = useState(true);
  const [playing, setPlaying] = useState(!reduceMotion);
  const [videoSrc, setVideoSrc] = useState();
  const [videoInteracted, setVideoInteracted] = useState(false);
  const placeholderRef = useRef();
  const videoRef = useRef();
  const isVideo = getIsVideo(src);
  const showFullRes = inViewport;
  const hasMounted = useHasMounted();
  useEffect(() => {
    const resolveVideoSrc = async () => {
      const resolvedVideoSrc = await resolveSrcFromSrcSet({ srcSet, sizes });
      setVideoSrc(resolvedVideoSrc);
    };
    if (isVideo && srcSet) {
      resolveVideoSrc();
    } else if (isVideo) {
      setVideoSrc(src);
    }
  }, [isVideo, sizes, src, srcSet]);
  useEffect(() => {
    if (!videoRef.current || !videoSrc) return;
    const playVideo = () => {
      setPlaying(true);
      videoRef.current.play();
    };
    const pauseVideo = () => {
      setPlaying(false);
      videoRef.current.pause();
    };
    if (!play) {
      pauseVideo();
      if (restartOnPause) {
        videoRef.current.currentTime = 0;
      }
    }
    if (videoInteracted) return;
    if (!inViewport) {
      pauseVideo();
    } else if (inViewport && !reduceMotion && play) {
      playVideo();
    }
  }, [inViewport, play, reduceMotion, restartOnPause, videoInteracted, videoSrc]);
  const togglePlaying = (event) => {
    event.preventDefault();
    setVideoInteracted(true);
    if (videoRef.current.paused) {
      setPlaying(true);
      videoRef.current.play();
    } else {
      setPlaying(false);
      videoRef.current.pause();
    }
  };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: styles$r.elementWrapper,
      "data-reveal": reveal,
      "data-visible": inViewport || loaded,
      style: cssProps({ delay: numToMs(delay2 + 1e3) }),
      children: [
        isVideo && hasMounted && /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(
            "video",
            {
              muted: true,
              loop: true,
              playsInline: true,
              className: styles$r.element,
              "data-loaded": loaded,
              "data-cover": cover,
              autoPlay: !reduceMotion,
              onLoadStart: onLoad,
              src: videoSrc,
              "aria-label": alt,
              ref: videoRef,
              ...rest
            }
          ),
          !noPauseButton && /* @__PURE__ */ jsxs(Button, { className: styles$r.button, onClick: togglePlaying, children: [
            /* @__PURE__ */ jsx(Icon, { icon: playing ? "pause" : "play" }),
            playing ? "Pause" : "Play"
          ] })
        ] }),
        !isVideo && /* @__PURE__ */ jsx(
          "img",
          {
            className: styles$r.element,
            "data-loaded": loaded,
            "data-cover": cover,
            onLoad,
            decoding: "async",
            src: showFullRes ? src : void 0,
            srcSet: showFullRes ? srcSet : void 0,
            width,
            height,
            alt,
            sizes,
            ...rest
          }
        ),
        showPlaceholder && /* @__PURE__ */ jsx(
          "img",
          {
            "aria-hidden": true,
            className: styles$r.placeholder,
            "data-loaded": loaded,
            "data-cover": cover,
            style: cssProps({ delay: numToMs(delay2) }),
            ref: placeholderRef,
            src: placeholder2,
            width,
            height,
            onTransitionEnd: () => setShowPlaceholder(false),
            decoding: "async",
            loading: "lazy",
            alt: "",
            role: "presentation"
          }
        )
      ]
    }
  );
};
function getIsVideo(src) {
  return typeof src === "string" && src.includes(".mp4");
}
const flatlineSkull = "/assets/error-flatline-eK98OAAk.svg";
function Error$1({ error: error2 }) {
  const flatlined = !error2.status;
  const getMessage = () => {
    switch (error2.status) {
      case 404:
        return {
          summary: "Error: redacted",
          message: "This page could not be found. It either doesn’t exist or was deleted. Or perhaps you don’t exist and this webpage couldn’t find you."
        };
      case 405:
        return {
          summary: "Error: method denied",
          message: error2.data
        };
      default:
        return {
          summary: "Error: anomaly",
          message: error2.statusText || error2.data || error2.toString()
        };
    }
  };
  const { summary: summary2, message } = getMessage();
  return /* @__PURE__ */ jsxs("section", { className: styles$s.page, children: [
    flatlined && /* @__PURE__ */ jsx(
      "style",
      {
        dangerouslySetInnerHTML: {
          __html: `
            [data-theme='dark'] {
              --primary: oklch(69.27% 0.242 25.41);
              --accent: oklch(69.27% 0.242 25.41);
            }
            [data-theme='light'] {
              --primary: oklch(56.29% 0.182 26.5);
              --accent: oklch(56.29% 0.182 26.5);
            }
          `
        }
      }
    ),
    /* @__PURE__ */ jsx(Transition, { in: true, children: ({ visible }) => /* @__PURE__ */ jsxs(Fragment$1, { children: [
      /* @__PURE__ */ jsx("div", { className: styles$s.details, children: /* @__PURE__ */ jsxs("div", { className: styles$s.text, children: [
        !flatlined && /* @__PURE__ */ jsx(
          Heading,
          {
            className: styles$s.title,
            "data-visible": visible,
            level: 0,
            weight: "bold",
            children: error2.status
          }
        ),
        flatlined && /* @__PURE__ */ jsxs(
          Heading,
          {
            className: styles$s.titleFlatline,
            "data-visible": visible,
            level: 2,
            as: "h1",
            children: [
              /* @__PURE__ */ jsx("svg", { width: "60", height: "80", viewBox: "0 0 60 80", children: /* @__PURE__ */ jsx("use", { href: `${flatlineSkull}#skull` }) }),
              /* @__PURE__ */ jsx(DecoderText, { text: "Flatlined", start: visible, delay: 300 })
            ]
          }
        ),
        !flatlined && /* @__PURE__ */ jsx(
          Heading,
          {
            "aria-hidden": true,
            className: styles$s.subheading,
            "data-visible": visible,
            as: "h2",
            level: 4,
            children: /* @__PURE__ */ jsx(DecoderText, { text: summary2, start: visible, delay: 300 })
          }
        ),
        /* @__PURE__ */ jsx(Text, { className: styles$s.description, "data-visible": visible, as: "p", children: message }),
        flatlined ? /* @__PURE__ */ jsx(
          Button,
          {
            secondary: true,
            iconHoverShift: true,
            className: styles$s.button,
            "data-visible": visible,
            href: "https://www.youtube.com/watch?v=EuQzHGcsjlA",
            icon: "chevron-right",
            children: "Emotional support"
          }
        ) : /* @__PURE__ */ jsx(
          Button,
          {
            secondary: true,
            iconHoverShift: true,
            className: styles$s.button,
            "data-visible": visible,
            href: "/",
            icon: "chevron-right",
            children: "Back to homepage"
          }
        )
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: styles$s.videoContainer, "data-visible": visible, children: [
        /* @__PURE__ */ jsx(
          Image$1,
          {
            reveal: true,
            cover: true,
            noPauseButton: true,
            delay: 600,
            className: styles$s.video,
            src: flatlined ? flatlineVideo : notFoundVideo,
            placeholder: flatlined ? flatlinePoster : notFoundPoster
          }
        ),
        flatlined ? /* @__PURE__ */ jsx(
          "a",
          {
            className: styles$s.credit,
            "data-visible": visible,
            href: "https://www.imdb.com/title/tt0318871/",
            target: "_blank",
            rel: "noopener noreferrer",
            children: "Animation from Berserk (1997)"
          }
        ) : /* @__PURE__ */ jsx(
          "a",
          {
            className: styles$s.credit,
            "data-visible": visible,
            href: "https://www.imdb.com/title/tt0113568/",
            target: "_blank",
            rel: "noopener noreferrer",
            children: "Animation from Ghost in the Shell (1995)"
          }
        )
      ] })
    ] }) })
  ] });
}
const monogram = "_monogram_1mxlb_2";
const highlight = "_highlight_1mxlb_7";
const styles$q = {
  monogram,
  highlight
};
const Monogram = forwardRef(({ highlight: highlight2, className, ...props }, ref) => {
  const id = useId();
  const clipId = `${id}monogram-clip`;
  return (
    // <svg
    //   aria-hidden
    //   className={classes(styles.monogram, className)}
    //   width="48"
    //   height="29"
    //   viewBox="0 0 48 29"
    //   ref={ref}
    //   {...props}
    // >
    //   <defs>
    //     <clipPath id={clipId}>
    //       <path d="M0 0h6.5a6 6 0 0 1 5.2 3.1L19.4 17l4-9L19 0h6.5a6 6 0 0 1 5.2 3.1L39.5 19 35 29 24.5 10 16 29 0 0Zm46.7 2.8A2 2 0 0 0 45 0h-7l5.5 10 3.2-7.2Z" />
    //     </clipPath>
    //   </defs>
    //   <rect clipPath={`url(#${clipId})`} width="100%" height="100%" />
    //   {highlight && (
    //     <g clipPath={`url(#${clipId})`}>
    //       <rect className={styles.highlight} width="100%" height="100%" />
    //     </g>
    //   )}
    // </svg>
    /* @__PURE__ */ jsxs(
      "svg",
      {
        "aria-hidden": true,
        className: classes(styles$q.monogram, className),
        width: "40",
        height: "40",
        viewBox: "0 0 140 140",
        ref,
        ...props,
        children: [
          /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("clipPath", { id: clipId, children: [
            /* @__PURE__ */ jsx("path", { d: "M96.583 0.583992V37.32C96.583 38.6853 96.8817 39.6667 97.479 40.264C98.1617 40.8613 99.6123 41.16 101.831 41.16H111.303V53.32H95.047C90.183 53.32 86.2577 52.808 83.271 51.784C80.3697 50.76 78.1937 48.968 76.743 46.408C75.3777 43.7627 74.4817 40.9467 74.055 37.96C73.7137 34.9733 73.543 30.9627 73.543 25.928C73.543 20.808 73.7137 16.9253 74.055 14.28C74.4817 11.6347 75.3777 9.16 76.743 6.856C78.1937 4.55199 80.3697 2.93066 83.271 1.992C86.2577 1.05333 90.183 0.583992 95.047 0.583992H96.583ZM116.423 41.16H117.959C121.628 41.16 124.444 41.2453 126.407 41.416C128.455 41.5013 130.418 41.8853 132.295 42.568C134.172 43.1653 135.452 43.8907 136.135 44.744C136.903 45.5973 137.586 47.0907 138.183 49.224C138.866 51.272 139.25 53.4907 139.335 55.88C139.42 58.2693 139.463 61.6827 139.463 66.12C139.463 70.5573 139.42 74.0987 139.335 76.744C139.25 79.304 138.866 81.7787 138.183 84.168C137.586 86.472 136.903 88.0933 136.135 89.032C135.452 89.9707 134.172 90.824 132.295 91.592C130.418 92.2747 128.455 92.7013 126.407 92.872C124.444 92.9573 121.628 93 117.959 93H116.423V41.16ZM75.335 64.456H91.463C92.6577 64.456 93.383 64.6267 93.639 64.968C93.895 65.3093 94.023 66.0347 94.023 67.144V77.128C94.023 78.4933 94.1937 79.4747 94.535 80.072C94.9617 80.584 95.943 80.84 97.479 80.84H111.303V93H92.487C86.2577 93 81.5217 91.9333 78.279 89.8C75.1217 87.6667 73.543 83.9547 73.543 78.664V67.144C73.543 65.352 74.1403 64.456 75.335 64.456ZM101.703 0.455994H117.959C124.188 0.455994 128.882 1.52266 132.039 3.656C135.282 5.78933 136.903 9.50133 136.903 14.792V26.312C136.903 28.104 136.306 29 135.111 29H118.983C117.788 29 117.063 28.8293 116.807 28.488C116.551 28.1467 116.423 27.4213 116.423 26.312V16.328C116.423 14.9627 116.21 14.024 115.783 13.512C115.442 12.9147 114.503 12.616 112.967 12.616H101.703V0.455994Z", fill: "white" }),
            /* @__PURE__ */ jsx("path", { d: "M20.568 93H7.128C4.22666 93 2.30666 92.5307 1.368 91.592C0.514664 90.6533 0.0879974 88.6907 0.0879974 85.704V5.576C0.0879974 4.04 0.514664 2.80266 1.368 1.864C2.22133 0.925329 3.33066 0.455994 4.696 0.455994H20.568V93ZM25.688 0.455994H41.944C50.0507 0.455994 55.4267 2.37599 58.072 6.216C60.8027 9.97066 62.168 17.5653 62.168 29C62.168 36.5947 61.3147 42.5253 59.608 46.792C57.9867 51.0587 55.8107 53.9173 53.08 55.368C50.3493 56.7333 46.6373 57.416 41.944 57.416H25.688V45.256H35.16C37.3787 45.256 38.7867 44.9573 39.384 44.36C40.0667 43.7627 40.408 42.824 40.408 41.544V16.456C40.408 15.0907 40.0667 14.1093 39.384 13.512C38.7867 12.9147 37.3787 12.616 35.16 12.616H25.688V0.455994Z", fill: "white" })
          ] }) }),
          /* @__PURE__ */ jsx("rect", { clipPath: `url(#${clipId})`, width: "100%", height: "100%" }),
          highlight2 && /* @__PURE__ */ jsx("g", { clipPath: `url(#${clipId})`, children: /* @__PURE__ */ jsx("rect", { className: styles$q.highlight, width: "100%", height: "100%" }) })
        ]
      }
    )
  );
});
const toggle$1 = "_toggle_1lvbt_2";
const inner = "_inner_1lvbt_17";
const icon = "_icon_1lvbt_25";
const styles$p = {
  toggle: toggle$1,
  inner,
  icon
};
const NavToggle = ({ menuOpen, ...rest }) => {
  return /* @__PURE__ */ jsx(
    Button,
    {
      iconOnly: true,
      className: styles$p.toggle,
      "aria-label": "Menu",
      "aria-expanded": menuOpen,
      ...rest,
      children: /* @__PURE__ */ jsxs("div", { className: styles$p.inner, children: [
        /* @__PURE__ */ jsx(Icon, { className: styles$p.icon, "data-menu": true, "data-open": menuOpen, icon: "menu" }),
        /* @__PURE__ */ jsx(
          Icon,
          {
            className: styles$p.icon,
            "data-close": true,
            "data-open": menuOpen,
            icon: "close"
          }
        )
      ] })
    }
  );
};
const toggle = "_toggle_1phd7_2";
const circle = "_circle_1phd7_29";
const mask = "_mask_1phd7_54";
const path = "_path_1phd7_72";
const styles$o = {
  toggle,
  circle,
  mask,
  path
};
const ThemeToggle = ({ isMobile, ...rest }) => {
  const id = useId();
  const { toggleTheme } = useTheme();
  const maskId = `${id}theme-toggle-mask`;
  return /* @__PURE__ */ jsx(
    Button,
    {
      iconOnly: true,
      className: styles$o.toggle,
      "data-mobile": isMobile,
      "aria-label": "Toggle theme",
      onClick: () => toggleTheme(),
      ...rest,
      children: /* @__PURE__ */ jsxs("svg", { "aria-hidden": true, className: styles$o.svg, width: "38", height: "38", viewBox: "0 0 38 38", children: [
        /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("mask", { id: maskId, children: [
          /* @__PURE__ */ jsx("circle", { className: styles$o.circle, "data-mask": true, cx: "19", cy: "19", r: "13" }),
          /* @__PURE__ */ jsx("circle", { className: styles$o.mask, cx: "25", cy: "14", r: "9" })
        ] }) }),
        /* @__PURE__ */ jsx(
          "path",
          {
            className: styles$o.path,
            d: "M19 3v7M19 35v-7M32.856 11l-6.062 3.5M5.144 27l6.062-3.5M5.144 11l6.062 3.5M32.856 27l-6.062-3.5"
          }
        ),
        /* @__PURE__ */ jsx(
          "circle",
          {
            className: styles$o.circle,
            mask: `url(#${maskId})`,
            cx: "19",
            cy: "19",
            r: "12"
          }
        )
      ] })
    }
  );
};
const name$2 = "Prateek Arora";
const role = "Developer";
const disciplines = [
  "Designer",
  "Prototyper",
  "Creative",
  "Illustrator",
  "YouTuber"
];
const url$1 = "https://prateek-arora.com/";
const bluesky = "prateek-arora.com";
const figma = "@PiratedSardar";
const github = "the-pirated-sardar";
const repo = "https://github.com/the_pirated_sardar/portfolio-2025_1";
const ascii = " _____  \n|  __ \\ \n| |__) |\n|  ___/ \n| |     \n|_|     \n";
const config = {
  name: name$2,
  role,
  disciplines,
  url: url$1,
  bluesky,
  figma,
  github,
  repo,
  ascii
};
const navLinks = [
  {
    label: "Projects",
    pathname: "/#project-1"
  },
  {
    label: "Details",
    pathname: "/#details"
  },
  {
    label: "Articles",
    pathname: "/articles"
  },
  {
    label: "Tech Stack",
    pathname: "/tech-stack"
  },
  {
    label: "Resume",
    pathname: "/contact"
  }
];
const socialLinks = [
  {
    label: "Bluesky",
    url: `https://bsky.app/profile/${config.bluesky}`,
    icon: "bluesky"
  },
  {
    label: "Figma",
    url: `https://www.figma.com/${config.figma}`,
    icon: "figma"
  },
  {
    label: "Github",
    url: `https://github.com/${config.github}`,
    icon: "github"
  }
];
const navbar = "_navbar_zzi78_2";
const logo = "_logo_zzi78_27";
const nav = "_nav_zzi78_2";
const navList = "_navList_zzi78_51";
const navLink = "_navLink_zzi78_59";
const navIcons = "_navIcons_zzi78_102";
const navIconLink = "_navIconLink_zzi78_126";
const navIcon = "_navIcon_zzi78_102";
const mobileNav = "_mobileNav_zzi78_147";
const mobileNavLink = "_mobileNavLink_zzi78_177";
const styles$n = {
  navbar,
  logo,
  nav,
  navList,
  navLink,
  navIcons,
  navIconLink,
  navIcon,
  mobileNav,
  mobileNavLink
};
const Navbar = () => {
  const [current, setCurrent] = useState();
  const [menuOpen, setMenuOpen] = useState(false);
  const [target, setTarget] = useState();
  const { theme } = useTheme();
  const location = useLocation();
  const windowSize = useWindowSize();
  const headerRef = useRef();
  const isMobile = windowSize.width <= media.mobile || windowSize.height <= 696;
  const scrollToHash = useScrollToHash();
  useEffect(() => {
    setCurrent(`${location.pathname}${location.hash}`);
  }, [location]);
  useEffect(() => {
    if (!target || location.pathname !== "/") return;
    setCurrent(`${location.pathname}${target}`);
    scrollToHash(target, () => setTarget(null));
  }, [location.pathname, scrollToHash, target]);
  useEffect(() => {
    const navItems = document.querySelectorAll("[data-navbar-item]");
    const inverseTheme = theme === "dark" ? "light" : "dark";
    const { innerHeight } = window;
    let inverseMeasurements = [];
    let navItemMeasurements = [];
    const isOverlap = (rect1, rect2, scrollY) => {
      return !(rect1.bottom - scrollY < rect2.top || rect1.top - scrollY > rect2.bottom);
    };
    const resetNavTheme = () => {
      for (const measurement of navItemMeasurements) {
        measurement.element.dataset.theme = "";
      }
    };
    const handleInversion = () => {
      const invertedElements = document.querySelectorAll(
        `[data-theme='${inverseTheme}'][data-invert]`
      );
      if (!invertedElements) return;
      inverseMeasurements = Array.from(invertedElements).map((item2) => ({
        element: item2,
        top: item2.offsetTop,
        bottom: item2.offsetTop + item2.offsetHeight
      }));
      const { scrollY } = window;
      resetNavTheme();
      for (const inverseMeasurement of inverseMeasurements) {
        if (inverseMeasurement.top - scrollY > innerHeight || inverseMeasurement.bottom - scrollY < 0) {
          continue;
        }
        for (const measurement of navItemMeasurements) {
          if (isOverlap(inverseMeasurement, measurement, scrollY)) {
            measurement.element.dataset.theme = inverseTheme;
          } else {
            measurement.element.dataset.theme = "";
          }
        }
      }
    };
    if (theme === "light") {
      navItemMeasurements = Array.from(navItems).map((item2) => {
        const rect = item2.getBoundingClientRect();
        return {
          element: item2,
          top: rect.top,
          bottom: rect.bottom
        };
      });
      document.addEventListener("scroll", handleInversion);
      handleInversion();
    }
    return () => {
      document.removeEventListener("scroll", handleInversion);
      resetNavTheme();
    };
  }, [theme, windowSize, location.key]);
  const getCurrent = (url2 = "") => {
    const nonTrailing = (current == null ? void 0 : current.endsWith("/")) ? current == null ? void 0 : current.slice(0, -1) : current;
    if (url2 === nonTrailing) {
      return "page";
    }
    return "";
  };
  const handleNavItemClick = (event) => {
    const hash = event.currentTarget.href.split("#")[1];
    setTarget(null);
    if (hash && location.pathname === "/") {
      setTarget(`#${hash}`);
      event.preventDefault();
    }
  };
  const handleMobileNavClick = (event) => {
    handleNavItemClick(event);
    if (menuOpen) setMenuOpen(false);
  };
  return /* @__PURE__ */ jsxs("header", { className: styles$n.navbar, ref: headerRef, children: [
    /* @__PURE__ */ jsx(
      Link$1,
      {
        unstable_viewTransition: true,
        prefetch: "intent",
        to: location.pathname === "/" ? "/#intro" : "/",
        "data-navbar-item": true,
        className: styles$n.logo,
        "aria-label": `${config.name}, ${config.role}`,
        onClick: handleMobileNavClick,
        children: /* @__PURE__ */ jsx(Monogram, { highlight: true })
      }
    ),
    /* @__PURE__ */ jsx(NavToggle, { onClick: () => setMenuOpen(!menuOpen), menuOpen }),
    /* @__PURE__ */ jsxs("nav", { className: styles$n.nav, children: [
      /* @__PURE__ */ jsx("div", { className: styles$n.navList, children: navLinks.map(({ label: label2, pathname }) => /* @__PURE__ */ jsx(
        Link$1,
        {
          unstable_viewTransition: true,
          prefetch: "intent",
          to: pathname,
          "data-navbar-item": true,
          className: styles$n.navLink,
          "aria-current": getCurrent(pathname),
          onClick: handleNavItemClick,
          children: label2
        },
        label2
      )) }),
      /* @__PURE__ */ jsx(NavbarIcons, { desktop: true })
    ] }),
    /* @__PURE__ */ jsx(Transition, { unmount: true, in: menuOpen, timeout: msToNum(tokens.base.durationL), children: ({ visible, nodeRef }) => /* @__PURE__ */ jsxs("nav", { className: styles$n.mobileNav, "data-visible": visible, ref: nodeRef, children: [
      navLinks.map(({ label: label2, pathname }, index2) => /* @__PURE__ */ jsx(
        Link$1,
        {
          unstable_viewTransition: true,
          prefetch: "intent",
          to: pathname,
          className: styles$n.mobileNavLink,
          "data-visible": visible,
          "aria-current": getCurrent(pathname),
          onClick: handleMobileNavClick,
          style: cssProps({
            transitionDelay: numToMs(
              Number(msToNum(tokens.base.durationS)) + index2 * 50
            )
          }),
          children: label2
        },
        label2
      )),
      /* @__PURE__ */ jsx(NavbarIcons, {}),
      /* @__PURE__ */ jsx(ThemeToggle, { isMobile: true })
    ] }) }),
    !isMobile && /* @__PURE__ */ jsx(ThemeToggle, { "data-navbar-item": true })
  ] });
};
const NavbarIcons = ({ desktop }) => /* @__PURE__ */ jsx("div", { className: styles$n.navIcons, children: socialLinks.map(({ label: label2, url: url2, icon: icon2 }) => /* @__PURE__ */ jsx(
  "a",
  {
    "data-navbar-item": desktop || void 0,
    className: styles$n.navIconLink,
    "aria-label": label2,
    href: url2,
    target: "_blank",
    rel: "noopener noreferrer",
    children: /* @__PURE__ */ jsx(Icon, { className: styles$n.navIcon, icon: icon2 })
  },
  label2
)) });
const progress = "_progress_3typo_2";
const styles$m = {
  progress
};
function Progress() {
  const [animationComplete, setAnimationComplete] = useState(false);
  const [visible, setVisible] = useState(false);
  const { state } = useNavigation();
  const progressRef = useRef();
  const timeout = useRef(0);
  useEffect(() => {
    clearTimeout(timeout.current);
    if (state !== "idle") {
      timeout.current = setTimeout(() => {
        setVisible(true);
      }, 500);
    } else if (animationComplete) {
      timeout.current = setTimeout(() => {
        setVisible(false);
      }, 300);
    }
  }, [state, animationComplete]);
  useEffect(() => {
    if (!progressRef.current) return;
    const controller = new AbortController();
    if (state !== "idle") {
      return setAnimationComplete(false);
    }
    Promise.all(
      progressRef.current.getAnimations({ subtree: true }).map((animation) => animation.finished)
    ).then(() => {
      if (controller.signal.aborted) return;
      setAnimationComplete(true);
    });
    return () => {
      controller.abort();
    };
  }, [state]);
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: styles$m.progress,
      "data-status": state,
      "data-visible": visible,
      "data-complete": animationComplete,
      ref: progressRef
    }
  );
}
const container$1 = "_container_j3vhn_2";
const skip = "_skip_j3vhn_12";
const styles$l = {
  container: container$1,
  skip
};
const links$1 = () => [
  {
    rel: "preload",
    href: GothamMedium,
    as: "font",
    type: "font/woff2",
    crossOrigin: ""
  },
  {
    rel: "preload",
    href: GothamBook,
    as: "font",
    type: "font/woff2",
    crossOrigin: ""
  },
  { rel: "manifest", href: "/manifest.json" },
  { rel: "icon", href: "/favicon.ico" },
  { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
  { rel: "shortcut_icon", href: "/shortcut.png", type: "image/png", sizes: "64x64" },
  { rel: "apple-touch-icon", href: "/icon-256.png", sizes: "256x256" },
  { rel: "author", href: "/humans.txt", type: "text/plain" }
];
const loader$4 = async ({ request, context }) => {
  const { url: url2 } = request;
  const { pathname } = new URL(url2);
  const pathnameSliced = pathname.endsWith("/") ? pathname.slice(0, -1) : url2;
  const canonicalUrl = `${config.url}${pathnameSliced}`;
  const { getSession, commitSession } = createCookieSessionStorage({
    cookie: {
      name: "__session",
      httpOnly: true,
      maxAge: 604800,
      path: "/",
      sameSite: "lax",
      secrets: [context.cloudflare.env.SESSION_SECRET || " "],
      secure: true
    }
  });
  const session = await getSession(request.headers.get("Cookie"));
  const theme = session.get("theme") || "dark";
  return json(
    { canonicalUrl, theme },
    {
      headers: {
        "Set-Cookie": await commitSession(session)
      }
    }
  );
};
function App() {
  var _a;
  let { canonicalUrl, theme } = useLoaderData();
  const fetcher = useFetcher();
  const { state } = useNavigation();
  if ((_a = fetcher.formData) == null ? void 0 : _a.has("theme")) {
    theme = fetcher.formData.get("theme");
  }
  function toggleTheme(newTheme) {
    fetcher.submit(
      { theme: newTheme ? newTheme : theme === "dark" ? "light" : "dark" },
      { action: "/api/set-theme", method: "post" }
    );
  }
  useEffect(() => {
    console.info(
      `${config.ascii}
`,
      `Taking a peek huh? Check out the source code: ${config.repo}

`
    );
  }, []);
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxs("head", { children: [
      /* @__PURE__ */ jsx("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      /* @__PURE__ */ jsx("meta", { name: "theme-color", content: theme === "dark" ? "#111" : "#F2F2F2" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "color-scheme",
          content: theme === "light" ? "light dark" : "dark light"
        }
      ),
      /* @__PURE__ */ jsx("style", { dangerouslySetInnerHTML: { __html: themeStyles } }),
      /* @__PURE__ */ jsx(Meta, {}),
      /* @__PURE__ */ jsx(Links, {}),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: canonicalUrl })
    ] }),
    /* @__PURE__ */ jsxs("body", { "data-theme": theme, children: [
      /* @__PURE__ */ jsxs(ThemeProvider, { theme, toggleTheme, children: [
        /* @__PURE__ */ jsx(Progress, {}),
        /* @__PURE__ */ jsx(VisuallyHidden, { showOnFocus: true, as: "a", className: styles$l.skip, href: "#main-content", children: "Skip to main content" }),
        /* @__PURE__ */ jsx(Navbar, {}),
        /* @__PURE__ */ jsx(
          "main",
          {
            id: "main-content",
            className: styles$l.container,
            tabIndex: -1,
            "data-loading": state === "loading",
            children: /* @__PURE__ */ jsx(Outlet, {})
          }
        )
      ] }),
      /* @__PURE__ */ jsx(ScrollRestoration, {}),
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function ErrorBoundary$1() {
  const error2 = useRouteError();
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxs("head", { children: [
      /* @__PURE__ */ jsx("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      /* @__PURE__ */ jsx("meta", { name: "theme-color", content: "#111" }),
      /* @__PURE__ */ jsx("meta", { name: "color-scheme", content: "dark light" }),
      /* @__PURE__ */ jsx("style", { dangerouslySetInnerHTML: { __html: themeStyles } }),
      /* @__PURE__ */ jsx(Meta, {}),
      /* @__PURE__ */ jsx(Links, {})
    ] }),
    /* @__PURE__ */ jsxs("body", { "data-theme": "dark", children: [
      /* @__PURE__ */ jsx(Error$1, { error: error2 }),
      /* @__PURE__ */ jsx(ScrollRestoration, {}),
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary: ErrorBoundary$1,
  default: App,
  links: links$1,
  loader: loader$4
}, Symbol.toStringTag, { value: "Module" }));
const volkiharBackgroundLarge = "/assets/volkihar-background-large-BNfdj2Th.jpg";
const volkiharBackgroundPlaceholder = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAQDAwQDAwQEBAQFBQQFBwsHBwYGBw4KCggLEA4RERAOEA8SFBoWEhMYEw8QFh8XGBsbHR0dERYgIh8cIhocHRz/2wBDAQUFBQcGBw0HBw0cEhASHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBz/wgARCAASACADAREAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAABQYHBAj/xAAXAQADAQAAAAAAAAAAAAAAAAABAwQC/9oADAMBAAIQAxAAAADgoimUKoj8SefaKhpIho2XuieIyPIHOkiuVz//xAAhEAABAwMEAwAAAAAAAAAAAAACAAEDBAUGERIhIhMVNf/aAAgBAQABPwCmqSgPVlh2YyUbbN6K9BdreTETOshtoHObi2ijh1VIRU/LKw3ySOdgM+i9RS3eDyAXZRKBQcSrD/nEv//EABsRAAIDAQEBAAAAAAAAAAAAAAABAgMREBIx/9oACAECAQE/AE8K7DdROPEQk0Z66in4f//EABkRAAMBAQEAAAAAAAAAAAAAAAABEQISIP/aAAgBAwEBPwCGkQTKI3y0WeNn/9k=";
const volkiharBackground = "/assets/volkihar-background-BwfMx1oT.jpg";
const volkiharBannerLarge = "/assets/volkihar-banner-large-B7psY5Jh.jpg";
const volkiharBannerPlaceholder = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKCgr/2wBDAQICAgICAgUDAwUKBwYHCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgr/wgARCAAGAAsDAREAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABgn/xAAVAQEBAAAAAAAAAAAAAAAAAAADAv/aAAwDAQACEAMQAAAAjGoF0n//xAAbEAABBQEBAAAAAAAAAAAAAAAEAAIDBRIhQv/aAAgBAQABPwACaqKAmjJrtOzxyIoAnTvdn0v/xAAXEQEBAQEAAAAAAAAAAAAAAAABAAIT/9oACAECAQE/ANq6uBf/xAAYEQADAQEAAAAAAAAAAAAAAAAAARICA//aAAgBAwEBPwDipyy2f//Z";
const volkiharBanner = "/assets/volkihar-banner-C736rbFi.jpg";
const volkiharBookLarge = "/assets/volkihar-book-large-BpE5vkX8.png";
const volkiharBookPlaceholder = "/assets/volkihar-book-placeholder-tOpZR4Vi.png";
const volkiharBook = "/assets/volkihar-book-B73D4Zfh.png";
const volkiharEnderalLarge = "/assets/volkihar-enderal-large-T2LUjM5-.jpg";
const volkiharEnderalLogoLarge = "/assets/volkihar-enderal-logo-large-BbiR1dg4.png";
const volkiharEnderalLogoPlaceholder = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAUCAYAAACAl21KAAADd0lEQVR4AV2R5WLlSA6Fj4psXwony3+33/+FFocnyY2pUNL4Nnd/ZqjvVEn091Pvwl1wHR/9P9/dDa4Mvfe6w8aa6mCsCeu8DBU0zNMMESwqeHlZ1+fe9/N0fo7YsA9/2YWTvx7e/eOvV51xpyp8b5y9987cb5I7R9t1u1fhaxY5AAQI1+B9fXmba3drmSOLu0iebm+vKpcbG8Jtt0l2XXcNozvD6lOpwXkXAjcdgo8RFSImC5sMY5Ou2rYVwQ37/SlruquRHo3F4+mwf7LBnYJ3OzLU9yw+xaRERmPmqWllBtUqtfQeOTPVIx/FrdN6x1Yeb2+Ofw0h/EmJrrrgjvv9fvDB9wp1cU30ch7TEiOZSFlEy7LEVkSzUS3jNDe3mW+cdfepykOX67Hvw1Xw/nDY7067w3DCxhKC1tqWaVnJuRwLp0gwqyW5gmJSY6KD0p2I3ip0xyw9LhjTe++OwYcjyIRamX0I3hrHIJ0JCLAYTIMXUGcde1db3QGuq6WabG2NqfRbep9y6Y21exD1MUYuKTG31uErROHIwDHDuVybqczJW3LWurqu2Z+3tqpICH0IBOrXmNs4zmFOiXKuKopZRGcQogoaNpywjs66lgqvZol7Y8mycppjLNt7IgLV0iimLMuWsgWPzPIior8Q8CqgCWqjY+jPqeQg3nlr7dU4rkipPHmfEogqVDM2am3xIqmNz5v0dwh+E8jrRQLh6IzqL4B1rXBYeE01+J0r9c0QzU1k8c4aVU0CvInwS078CxFedZMQ2dFbTQt8c2C8kINTMZ5ZkHM9F0OjIRpBWLBRWlug+F22UFX9TUTPF8lxGNZspxqeY7MPf+40Ntdsa7AeIKKOFTsiHFW1Z1ZWlVGBH1n034bwPzL6qyOauEulPJf2vzE1exCCbYVrP6AzxnLjzho6ADgaY3pjIAS6iP6jgv+q6I8K++r2vHySYMN8ujnsCpfUisCurBgBjKJ6huLtciVDb86bSaHr/c2hYOPT2Avu04u/AwjD0BicCGZWomdSPSmZCpVZBHNlWbxFy4lbOZeGr3D4igW27Y1JtfLZmEsTzEFELulJWEerVLiZ+owsAd9i8BWX5V0d90mh6/sWs/zGor8RzBmECGgOgfjyH77DfroZc5P3hXe9VQhaE8tQIZACOjfVV4KeucrselSOLJcx+Mgf1w6YAeGPsC8AAAAASUVORK5CYII=";
const volkiharEnderalLogo = "/assets/volkihar-enderal-logo-Bg2oXoo9.png";
const volkiharEnderalPlaceholder = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAUFBQUFBQUGBgUICAcICAsKCQkKCxEMDQwNDBEaEBMQEBMQGhcbFhUWGxcpIBwcICkvJyUnLzkzMzlHREddXX0BBQUFBQUFBQYGBQgIBwgICwoJCQoLEQwNDA0MERoQExAQExAaFxsWFRYbFykgHBwgKS8nJScvOTMzOUdER11dff/CABEIAC0AUAMBIgACEQEDEQH/xAAaAAACAwEBAAAAAAAAAAAAAAAEBgMFBwIA/9oACAEBAAAAAMJZbuyjQM+A4heWNiZG9ZyFMrhm+Xhm3yXJ88Wa5hMhPeBVqrCqDCiST6sQT1fJzIQXEMNLD//EABgBAAMBAQAAAAAAAAAAAAAAAAIEBQMB/9oACAECEAAAAFp69VgsYlR3QV2Of//EABcBAAMBAAAAAAAAAAAAAAAAAAMEBQL/2gAIAQMQAAAAtNklKNsUZ07BzKZ//8QAIBAAAgICAwEBAQEAAAAAAAAAAAECAwQRBRIhIjETBv/aAAgBAQABPwDGyW2jFirEijCUyHFbX4X8NuD+TmuNlX2+TJqlGT8HEZJlL6tGHmqvW2Y3MVw19GFy9VrS2UVRya9pHNcL/SMvk5fh3VKXyX4zg34WR0SRVaO6URZdif6cJmSd0NyOCyqf4R7SX4cplY3WXqOanTY560ZlMG5aMmnTY4FR1UkOowrJUzTMTn7aK0lIzP8ASW2JruX8pOxvcizK7su1JFukyN+iGWRyIsrtjs/qun6XWev0nPwdnpKzws9JG2RskiF0xZE9E7ZMnNnZ7E/CZ//EAB4RAAICAgIDAAAAAAAAAAAAAAECAAMEIRESEDFB/9oACAECAQE/AHJ+S17h6iZTduGlVgYeFXtLq9HUsxXezUx6SgAgWCWbEWvcC8RjxP/EABwRAAMBAQADAQAAAAAAAAAAAAABAgMRBBIhIv/aAAgBAwEBPwCEjOc2XhLn8muTljXDrMu9JuYn6zfSaZp8YtWZ+Q0X5PUVr1jfsf/Z";
const volkiharEnderal = "/assets/volkihar-enderal-BTf8JKtt.jpg";
const volkiharSlide1Large = "/assets/volkihar-slide-1-large-CkekFT3C.jpg";
const volkiharSlide1 = "/assets/volkihar-slide-1-BJOjWYAS.jpg";
const volkiharSlide2Large = "/assets/volkihar-slide-2-large-BzyjkLqK.jpg";
const volkiharSlide2 = "/assets/volkihar-slide-2-1Kh0pCzp.jpg";
const volkiharSlide3Large = "/assets/volkihar-slide-3-large-C_8CrUhH.jpg";
const volkiharSlide3 = "/assets/volkihar-slide-3-Dkb5mX5r.jpg";
const volkiharSlidePlaceholder = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAQDAwMDAgQDAwMEBAQFBgoGBgUFBgwICQcKDgwPDg4MDQ0PERYTDxAVEQ0NExoTFRcYGRkZDxIbHRsYHRYYGRj/2wBDAQQEBAYFBgsGBgsYEA0QGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBj/wgARCAAJABADAREAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABgj/xAAWAQEBAQAAAAAAAAAAAAAAAAADBAL/2gAMAwEAAhADEAAAAJ5jtNMbsaRuB//EACAQAAEDAgcAAAAAAAAAAAAAAAEAAwUCEgQGESI0NYH/2gAIAQEAAT8AkYIR+CtNeoTrIafFdu1Zl4PqkuvpX//EABcRAQEBAQAAAAAAAAAAAAAAAAIAATL/2gAIAQIBAT8AOxeRh3t//8QAGBEBAQADAAAAAAAAAAAAAAAAAAIDERL/2gAIAQMBAT8A40qWRT//2Q==";
const link$1 = "_link_1h1qj_2";
const styles$k = {
  link: link$1
};
const VALID_EXT = ["txt", "png", "jpg"];
function isAnchor(href) {
  const isValidExtension = VALID_EXT.includes(href == null ? void 0 : href.split(".").pop());
  return (href == null ? void 0 : href.includes("://")) || (href == null ? void 0 : href[0]) === "#" || isValidExtension;
}
const Link = forwardRef(
  ({ rel, target, children, secondary, className, href, ...rest }, ref) => {
    const isExternal = href == null ? void 0 : href.includes("://");
    const relValue = rel || (isExternal ? "noreferrer noopener" : void 0);
    const targetValue = target || (isExternal ? "_blank" : void 0);
    const linkProps = {
      className: classes(styles$k.link, className),
      ["data-secondary"]: secondary,
      rel: relValue,
      href,
      target: targetValue,
      ref,
      ...rest
    };
    if (isAnchor(href)) {
      return /* @__PURE__ */ jsx("a", { ...linkProps, href, children });
    }
    return /* @__PURE__ */ jsx(Link$1, { unstable_viewTransition: true, prefetch: "intent", ...linkProps, to: href, children });
  }
);
const footer = "_footer_gmxrz_2";
const link = "_link_gmxrz_16";
const date$1 = "_date_gmxrz_20";
const styles$j = {
  footer,
  link,
  date: date$1
};
const Footer = ({ className }) => /* @__PURE__ */ jsx("footer", { className: classes(styles$j.footer, className), children: /* @__PURE__ */ jsxs(Text, { size: "s", align: "center", children: [
  /* @__PURE__ */ jsx("span", { className: styles$j.date, children: `© ${(/* @__PURE__ */ new Date()).getFullYear()} ${config.name}.` }),
  /* @__PURE__ */ jsx(Link, { secondary: true, className: styles$j.link, href: "/humans.txt", target: "_self", children: "Crafted by yours truly" })
] }) });
const section$2 = "_section_cvvm4_2";
const styles$i = {
  section: section$2
};
const Section = forwardRef(
  ({ as: Component = "div", children, className, ...rest }, ref) => /* @__PURE__ */ jsx(Component, { className: classes(styles$i.section, className), ref, ...rest, children })
);
const project = "_project_7xwsz_20";
const section$1 = "_section_7xwsz_29";
const sectionInner = "_sectionInner_7xwsz_44";
const sectionBackground = "_sectionBackground_7xwsz_89";
const backgroundImage = "_backgroundImage_7xwsz_138";
const backgroundImageElement = "_backgroundImageElement_7xwsz_157";
const backgroundScrim = "_backgroundScrim_7xwsz_176";
const header$2 = "_header_7xwsz_192";
const headerContent = "_headerContent_7xwsz_212";
const details$2 = "_details_7xwsz_250";
const title$8 = "_title_7xwsz_262";
const description$6 = "_description_7xwsz_272";
const linkButton = "_linkButton_7xwsz_282";
const meta$a = "_meta_7xwsz_292";
const metaItem = "_metaItem_7xwsz_307";
const image$2 = "_image_7xwsz_327";
const sectionContent = "_sectionContent_7xwsz_335";
const sectionHeading = "_sectionHeading_7xwsz_358";
const sectionText = "_sectionText_7xwsz_362";
const textRow = "_textRow_7xwsz_369";
const sectionColumns = "_sectionColumns_7xwsz_425";
const styles$h = {
  project,
  section: section$1,
  sectionInner,
  sectionBackground,
  backgroundImage,
  backgroundImageElement,
  backgroundScrim,
  header: header$2,
  headerContent,
  details: details$2,
  title: title$8,
  description: description$6,
  linkButton,
  meta: meta$a,
  metaItem,
  image: image$2,
  sectionContent,
  sectionHeading,
  sectionText,
  textRow,
  sectionColumns
};
const initDelay = 300;
function ProjectHeader({
  title: title2,
  description: description2,
  linkLabel = "Visit website",
  url: url2,
  roles: roles2,
  className
}) {
  return /* @__PURE__ */ jsx(Section, { className: classes(styles$h.header, className), as: "section", children: /* @__PURE__ */ jsxs(
    "div",
    {
      className: styles$h.headerContent,
      style: cssProps({ initDelay: numToMs(initDelay) }),
      children: [
        /* @__PURE__ */ jsxs("div", { className: styles$h.details, children: [
          /* @__PURE__ */ jsx(Heading, { className: styles$h.title, level: 2, as: "h1", children: title2 }),
          /* @__PURE__ */ jsx(Text, { className: styles$h.description, size: "xl", as: "p", children: description2 }),
          !!url2 && /* @__PURE__ */ jsx(
            Button,
            {
              secondary: true,
              iconHoverShift: true,
              className: styles$h.linkButton,
              icon: "chevron-right",
              href: url2,
              children: linkLabel
            }
          )
        ] }),
        !!(roles2 == null ? void 0 : roles2.length) && /* @__PURE__ */ jsx("ul", { className: styles$h.meta, children: roles2 == null ? void 0 : roles2.map((role2, index2) => /* @__PURE__ */ jsx(
          "li",
          {
            className: styles$h.metaItem,
            style: cssProps({ delay: numToMs(initDelay + 300 + index2 * 140) }),
            children: /* @__PURE__ */ jsx(Text, { secondary: true, children: role2 })
          },
          role2
        )) })
      ]
    }
  ) });
}
const ProjectContainer = ({ className, ...rest }) => /* @__PURE__ */ jsx("article", { className: classes(styles$h.project, className), ...rest });
const ProjectSection = forwardRef(
  ({
    className,
    light: light2,
    padding = "both",
    fullHeight,
    backgroundOverlayOpacity = 0.9,
    backgroundElement,
    children,
    ...rest
  }, ref) => /* @__PURE__ */ jsxs(
    "section",
    {
      className: classes(styles$h.section, className),
      "data-light": light2,
      "data-full-height": fullHeight,
      ref,
      ...rest,
      children: [
        !!backgroundElement && /* @__PURE__ */ jsx(
          "div",
          {
            className: styles$h.sectionBackground,
            style: cssProps({ opacity: backgroundOverlayOpacity }),
            children: backgroundElement
          }
        ),
        /* @__PURE__ */ jsx(Section, { className: styles$h.sectionInner, "data-padding": padding, children })
      ]
    }
  )
);
const ProjectBackground = ({ opacity = 0.7, className, ...rest }) => {
  const imageRef = useRef();
  useParallax(0.6, (value2) => {
    if (!imageRef.current) return;
    imageRef.current.style.setProperty("--offset", `${value2}px`);
  });
  return /* @__PURE__ */ jsx(Transition, { in: true, timeout: msToNum(tokens.base.durationM), children: ({ visible, nodeRef }) => /* @__PURE__ */ jsxs(
    "div",
    {
      className: classes(styles$h.backgroundImage, className),
      "data-visible": visible,
      ref: nodeRef,
      children: [
        /* @__PURE__ */ jsx("div", { className: styles$h.backgroundImageElement, ref: imageRef, children: /* @__PURE__ */ jsx(Image$1, { cover: true, alt: "", role: "presentation", ...rest }) }),
        /* @__PURE__ */ jsx("div", { className: styles$h.backgroundScrim, style: cssProps({ opacity }) })
      ]
    }
  ) });
};
const ProjectImage = ({ className, alt, ...rest }) => /* @__PURE__ */ jsx("div", { className: classes(styles$h.image, className), children: /* @__PURE__ */ jsx(Image$1, { reveal: true, alt, delay: 300, ...rest }) });
const ProjectSectionContent = ({ className, width = "l", ...rest }) => /* @__PURE__ */ jsx(
  "div",
  {
    className: classes(styles$h.sectionContent, className),
    "data-width": width,
    ...rest
  }
);
const ProjectSectionHeading = ({ className, level = 3, as = "h2", ...rest }) => /* @__PURE__ */ jsx(
  Heading,
  {
    className: classes(styles$h.sectionHeading, className),
    as,
    level,
    align: "auto",
    ...rest
  }
);
const ProjectSectionText = ({ className, ...rest }) => /* @__PURE__ */ jsx(Text, { className: classes(styles$h.sectionText, className), size: "l", as: "p", ...rest });
const ProjectTextRow = ({
  center,
  stretch,
  justify = "center",
  width = "m",
  noMargin,
  className,
  centerMobile,
  ...rest
}) => /* @__PURE__ */ jsx(
  "div",
  {
    className: classes(styles$h.textRow, className),
    "data-center": center,
    "data-stretch": stretch,
    "data-center-mobile": centerMobile,
    "data-no-margin": noMargin,
    "data-width": width,
    "data-justify": justify,
    ...rest
  }
);
const ProjectSectionColumns = ({ className, centered, ...rest }) => /* @__PURE__ */ jsx(
  ProjectSectionContent,
  {
    className: classes(styles$h.sectionColumns, className),
    "data-centered": centered,
    ...rest
  }
);
const { name: name$1, url, twitter } = config;
const defaultOgImage = `${url}/social-image.png`;
function baseMeta({
  title: title2,
  description: description2,
  prefix = name$1,
  ogImage = defaultOgImage
}) {
  const titleText = [prefix, title2].filter(Boolean).join(" | ");
  return [
    { title: titleText },
    { name: "description", content: description2 },
    { name: "author", content: name$1 },
    { property: "og:image", content: ogImage },
    { property: "og:image:alt", content: "Banner for the site" },
    { property: "og:image:width", content: "1280" },
    { property: "og:image:height", content: "800" },
    { property: "og:title", content: titleText },
    { property: "og:site_name", content: name$1 },
    { property: "og:type", content: "website" },
    { property: "og:url", content: url },
    { property: "og:description", content: description2 },
    { property: "twitter:card", content: "summary_large_image" },
    { property: "twitter:description", content: description2 },
    { property: "twitter:title", content: titleText },
    { property: "twitter:site", content: url },
    { property: "twitter:creator", content: twitter },
    { property: "twitter:image", content: ogImage }
  ];
}
function VolkiharLogo() {
  return /* @__PURE__ */ jsxs("svg", { width: "532", height: "344", viewBox: "0 0 532 344", children: [
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M294.971 81.133c22.724 29.428 35.373 45.546 37.95 48.354 5.486 5.982 8.123 9.267 19.709 16.895 6.486 4.394 14.942 7.61 25.37 9.651V159h-54.38L261 77.977V159C191.123 68.072 153.683 20.04 148.683 14.903c-5-5.136-12.56-8.026-22.683-8.668V0l69.584.14V6c-4.38 0-7.994.587-10.845 1.762-4.275 1.761-4.42 5.768-3.412 7.141 1.4 2.138 23.229 30.34 65.487 84.609v-70.08c0-11.449-6.327-16.432-11.333-20.102-3.337-2.447-9.281-3.557-17.832-3.33V.14H289V6c-5.556-.235-13.818.235-19.896 3.33-4.052 2.063-6.753 6.857-8.103 14.382v13.29a24524.908 24524.908 0 0 0 25.533 33.194c23.526-29.352 36.705-45.71 39.538-49.074 4.481-5.32 2.935-11.023-1.577-13.119-3.007-1.397-7.648-2.178-13.922-2.342V0H373v5.661c-7.55 0-13.964 1.666-18.393 3.891-2.954 1.483-6.835 4.828-11.644 10.035l-47.992 61.546z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M18.3 254.75L6.05 224.1c-1.1-2.8-1.85-3.35-3.6-3.85-.75-.2-1.6-.2-1.9-.2-.3 0-.4-.15-.4-.35 0-.3.5-.35 1.3-.35 2.4 0 5.1.15 5.7.15.5 0 2.65-.15 4.55-.15.9 0 1.35.1 1.35.35 0 .25-.15.35-.5.35-.55 0-1.45.05-1.9.25-.55.25-.65.65-.65 1 0 .45.45 1.8 1 3.2l10.2 26.55c2.9-6.7 9.6-24.15 10.7-27.75.25-.75.45-1.45.45-1.9 0-.4-.15-.9-.65-1.15-.6-.2-1.35-.2-1.9-.2-.3 0-.55-.05-.55-.3 0-.3.3-.4 1.1-.4 2 0 4.3.15 4.9.15.3 0 2.45-.15 3.9-.15.55 0 .85.1.85.35 0 .25-.2.35-.6.35-.35 0-1.45 0-2.4.6-.65.45-1.4 1.3-2.75 4.7-.55 1.4-3.05 7.4-5.6 13.55-3.05 7.3-5.3 12.7-6.45 15.15-1.4 3-1.6 3.8-2.1 3.8-.6 0-.85-.7-1.8-3.1zM61 257.7c-12.25 0-17.25-9.1-17.25-16.7 0-6.65 5.15-16.6 17.5-16.6 9.9 0 17.45 5.9 17.45 15.95 0 9.55-7.05 17.35-17.7 17.35zm1.25-1.7C65.6 256 74 254.3 74 241.6c0-10.05-6.2-15.65-13.05-15.65-6.95 0-12.55 4.3-12.55 13.75 0 9.8 5.45 16.3 13.85 16.3zm33.6-18.7v7.6c0 5.75.2 8.65 1.05 9.45.8.7 1.8 1 5.25 1 2.2 0 4.2 0 5.3-1.4.5-.75.85-1.75.95-2.5.05-.4.15-.6.4-.6.2 0 .3.15.3.65s-.3 3.35-.6 4.5c-.3 1-.25 1.25-2.65 1.25-3.4 0-7.15-.25-12.15-.25-1.65 0-2.65.15-4.4.15-.5 0-.8-.1-.8-.4 0-.15.15-.3.55-.3s.8 0 1.2-.1c.85-.15 1.15-1.15 1.3-2.35.3-1.9.2-5.35.2-9.2v-7.5c0-6.6 0-7.7-.1-9.05-.1-1.4-.3-2.3-2-2.5-.3-.05-.85-.05-1.25-.05-.35 0-.55-.15-.55-.35 0-.25.25-.35.75-.35 2.1 0 5.1.15 5.2.15.7 0 3.75-.15 5.15-.15.5 0 .65.15.65.35 0 .2-.25.35-.55.35-.35 0-.85.05-1.35.1-1.4.2-1.7 1-1.8 2.45-.1 1.35-.05 2.45-.05 9.05zm29.2 0v2.35c2.3-2.05 7.75-7.25 10-9.7 2.4-2.65 2.6-2.9 2.6-3.45 0-.35-.2-.6-.8-.8-.35-.1-.55-.2-.55-.4 0-.15.1-.3.5-.3.3 0 1.8.15 3.4.15 1.5 0 4.25-.15 4.9-.15.7 0 .8.1.8.3 0 .2-.15.35-.55.4-.8.05-1.85.25-2.45.5-1.2.4-1.85.95-4.45 3.3-3.65 3.3-8 7.55-10.2 9.55 2.7 2.8 10.8 10.8 12.9 12.7 3.5 3.2 5.2 4.1 7.2 4.55.55.1.3.05 1.15.15.45.05.7.15.7.4 0 .2-.25.3-.8.3h-3.25c-3.9 0-4.9-.45-6.9-1.85-2.25-1.6-10.25-9.8-14.2-14.45v3.95c0 3.85-.05 7.35.2 9.15.2 1.45.4 2 1.7 2.3.65.15 1.7.2 1.9.2.45.05.55.15.55.35 0 .2-.2.35-.7.35-2.55 0-5.45-.15-5.7-.15-.15 0-3.1.15-4.5.15-.45 0-.8-.1-.8-.35 0-.2.2-.35.65-.35.25 0 .8-.05 1.2-.15.85-.2 1-1.2 1.15-2.4.25-1.8.25-5.35.25-9.1v-7.5c0-6.6 0-7.8-.1-9.15-.1-1.35-.4-2.1-1.45-2.3-.5-.1-.85-.1-1.15-.15-.35-.05-.55-.15-.55-.35 0-.25.2-.35.75-.35 1.55 0 4.4.15 4.55.15.2 0 3.1-.15 4.5-.15.5 0 .75.1.75.35 0 .2-.15.3-.55.35-.3.05-.55.05-.9.1-1.45.2-1.6.95-1.7 2.4-.1 1.35-.05 2.5-.05 9.1zm33.3 7.5v-7.5c0-6.6 0-7.8-.1-9.15-.1-1.35-.4-2.1-1.45-2.3-.5-.1-.85-.1-1.15-.15-.35-.05-.55-.15-.55-.35 0-.25.2-.35.75-.35 1.55 0 4.4.15 4.55.15.2 0 3.1-.15 4.5-.15.5 0 .75.1.75.35 0 .2-.15.3-.55.35-.3.05-.55.05-.9.1-1.45.2-1.6.95-1.7 2.4-.1 1.35-.05 2.5-.05 9.1v7.5c0 3.85-.05 7.35.2 9.15.2 1.45.4 2 1.7 2.3.65.15 1.7.2 1.9.2.45.05.55.15.55.35 0 .2-.2.35-.7.35-2.55 0-5.45-.15-5.7-.15-.15 0-3.1.15-4.5.15-.45 0-.8-.1-.8-.35 0-.2.2-.35.65-.35.25 0 .8-.05 1.2-.15.85-.2 1-1.2 1.15-2.4.25-1.8.25-5.35.25-9.1zm27-6.4h18.1c.15 0 .3 0 .3-.25v-.9c0-6.6 0-7.75-.1-9.1-.1-1.35-.3-2.05-1.95-2.35-.35-.05-.85-.1-1.25-.1-.35 0-.6-.15-.6-.35 0-.3.25-.35.7-.35 2.1 0 5.05.15 5.25.15.2 0 3-.15 4.5-.15.5 0 .8.05.8.35 0 .15-.15.35-.55.35-.3 0-.7.05-1 .1-1.35.2-1.55 1-1.65 2.4-.05 1.35-.05 2.5-.05 9.1v7.5c0 4.1 0 7.35.2 9.15.15 1.2.4 2.2 1.7 2.35.65.1 1.3.15 1.75.15.4 0 .65.15.65.35 0 .25-.25.35-.75.35-2.5 0-5.4-.15-5.65-.15-.2 0-3.1.15-4.45.15-.5 0-.75-.1-.75-.4 0-.15.15-.3.55-.3s.75 0 1.15-.1c.85-.15 1.1-1.25 1.25-2.4.25-1.8.25-4.95.25-9v-4.45c0-.2-.15-.3-.3-.3H185.3c-.15 0-.25.05-.25.3v4.45c0 4.05 0 7.3.25 9.1.15 1.1.4 2.1 1.7 2.25.65.1 1.4.15 1.8.15.35 0 .6.15.6.35 0 .2-.2.35-.65.35-2.55 0-5.5-.15-5.75-.15-.15 0-3.2.15-4.5.15-.5 0-.8-.1-.8-.35 0-.15.1-.35.55-.35.4 0 .8-.05 1.2-.15.9-.2 1.1-1.15 1.25-2.25.3-1.8.25-5.15.25-9.25v-7.4c0-6.6 0-7.9-.1-9.25-.1-1.3-.45-2.25-1.9-2.4-.45-.05-.95-.1-1.35-.1-.35 0-.55-.15-.55-.3 0-.3.25-.35.75-.35 2.15 0 4.55.15 5.2.15.2 0 3.1-.15 4.5-.15.5 0 .75.1.75.35 0 .2-.2.3-.5.3s-.45 0-1 .1c-1.25.2-1.55 1.05-1.65 2.45-.05 1.35-.05 2.45-.05 9.05v.9c0 .25.15.25.3.25zm52.2 6.55h-9.1c-.25 0-.4.15-.5.4l-2.2 6.25c-.5 1.4-.85 2.75-.85 3.55 0 .9.55 1.3 1.65 1.3h.35c.45 0 .6.15.6.35 0 .25-.4.35-.75.35-1.1 0-3.4-.15-3.95-.15-.5 0-2.7.15-4.8.15-.55 0-.8-.1-.8-.35 0-.2.2-.35.6-.35.25 0 .7 0 1-.05 2.15-.2 3-1.85 3.85-3.95l10-26.35c.55-1.45.7-1.7 1.05-1.7.25 0 .45.2 1 1.6.7 1.65 7.5 19.1 10.15 25.35 1.65 3.95 3.1 4.6 3.8 4.85.65.25 1.35.25 1.7.25.35 0 .6.1.6.35 0 .25-.2.35-.75.35-.5 0-4.25 0-7.6-.1-.95-.05-1.25-.1-1.25-.35 0-.15.15-.3.35-.35.2-.1.5-.35.2-1.1l-3.95-10.05c-.1-.15-.2-.25-.4-.25zm-8.6-1.75h8c.2 0 .2-.15.15-.3l-3.95-11.05c-.25-.7-.3-.7-.55 0l-3.75 11.05c-.1.2 0 .3.1.3zm31.15 1.6v-7.5c0-6.6 0-7.8-.1-9.15-.1-1.35-.45-2.1-2-2.4-.3-.05-.8-.1-1.2-.1-.35 0-.55-.1-.55-.3 0-.2.15-.35.6-.35 2.15 0 5.2.15 5.3.15.45 0 3.85-.15 5.25-.15 2.8 0 5.85.25 8.2 1.9.95.7 3 2.7 3 6.1 0 2.75-1.35 6.25-5.3 9.45 3.65 4.5 6.65 8.2 9.2 10.85 2.4 2.45 3.9 2.85 5.3 3.05.35.05 1.4.1 1.55.1.4 0 .55.15.55.35 0 .25-.2.35-.9.35h-3.5c-2.35 0-3.45-.15-4.55-.6-2.1-.9-3.6-3.15-6.2-6.5-1.95-2.4-3.95-5.1-4.8-6.15-.2-.2-.3-.3-.6-.3l-5.15-.05c-.2 0-.25.05-.25.25v.7c0 4 0 7.65.25 9.45.15 1.2.3 2.2 1.95 2.4.5.05 1.05.1 1.45.1.45 0 .65.15.65.3 0 .25-.2.4-.7.4-2.6 0-5.4-.15-5.6-.15-.8 0-3 .15-4.35.15-.5 0-.7-.1-.7-.4 0-.15.3-.3.6-.3.35 0 .7 0 1.1-.1.85-.15 1.15-.7 1.3-1.9.25-1.8.2-5.9.2-9.65zm3.85-17.55v13.6c0 .25.05.5.25.6.65.35 2.65.65 4.45.65 1.05 0 2.3-.05 3.35-.75 1.5-.95 2.5-3.15 2.5-6.35 0-5.45-2.9-8.45-7.35-8.45-1.25 0-2.3.1-2.9.25-.15.05-.3.2-.3.45zm56.85 6.6v3.2c1.55-1.5 8.35-8.65 11.4-11.8 3-3.1 3.2-3.6 3.2-4.2 0-.4-.25-.8-.65-.95-.35-.15-.45-.25-.45-.45s.3-.3.75-.3c1.45 0 1.3.15 3 .15 1.55 0 4.5-.15 5.3-.15.7 0 .85.15.85.35 0 .2-.1.3-.55.35-.95.1-1.85.3-2.55.6-1.25.5-2.2 1.1-5.2 4-4.4 4.25-10.1 9.9-11.4 11.35 3.15 3.45 12.25 12.7 14.6 14.9 4.1 3.85 5.85 4.95 8.25 5.4.45.1.95.15 1.45.15.4 0 .7.1.7.35 0 .25-.2.35-.75.35h-3.7c-4.35 0-5.5-.55-7.85-2.4-3-2.35-12-12-16.4-17.25v5.15c0 4.8 0 8.75.25 10.85.15 1.45.45 2.55 1.95 2.75.7.1 1.7.2 2 .2.45 0 .6.2.6.35 0 .25-.2.35-.75.35-2.75 0-5.9-.15-6.15-.15s-3.2.15-4.7.15c-.55 0-.8-.05-.8-.35 0-.15.1-.35.55-.35.3 0 .85-.05 1.3-.15 1-.2 1.3-1.35 1.5-2.8.25-2.1.25-6.05.25-10.85v-8.8c0-7.8 0-9.2-.1-10.8-.1-1.7-.6-2.55-1.7-2.8-.55-.15-1.45-.2-1.8-.2-.4 0-.55-.1-.55-.3 0-.3.25-.4.8-.4 1.65 0 5 .15 5.25.15s3.4-.15 4.9-.15c.55 0 .8.1.8.35 0 .2-.1.3-.55.35-.55.05-.6.05-1.1.1-1.35.15-1.75 1.15-1.85 2.9-.1 1.6-.1 3-.1 10.8zm34.15 17.05c0-23.85.05-16.15 0-24.45 0-1.55.15-2.05.55-2.05.35 0 1.2 1 1.55 1.35.45.5 7.4 7.6 14.4 14.75 3.9 3.8 8.9 8.95 10.2 10.15l-.55-20.8c-.05-2.7-.35-3.6-1.7-3.95-.85-.15-1.6-.2-1.95-.2-.5 0-.6-.2-.6-.4 0-.25.4-.3.9-.3 2.15 0 4.25.15 4.7.15.5 0 2.05-.15 4-.15.55 0 .7.05.7.3 0 .2-.15.35-.45.4-.3.05-.7.05-1.25.15-1.15.25-1.5.75-1.5 3.75l-.1 25.1c0 2.5-.1 2.75-.45 2.75s-.85-.35-3.3-2.65c-.2-.1-7.15-7-11.5-11.25-5.2-5.4-10.2-10.6-11.45-11.9l.65 19.55c.1 3.45.4 4.75 1.65 5.05.8.2 1.65.2 2.05.2.4 0 .6.15.6.35 0 .25-.25.35-.8.35-2.7 0-4.5-.15-4.85-.15-.35 0-2.2.15-4.35.15-.45 0-.75-.05-.75-.35 0-.2.2-.35.7-.35.35 0 .9 0 1.55-.2 1.1-.35 1.35-1.7 1.35-5.35zm46.3-6.1v-7.5c0-6.6 0-7.8-.1-9.15-.1-1.35-.4-2.1-1.45-2.3-.5-.1-.85-.1-1.15-.15-.35-.05-.55-.15-.55-.35 0-.25.2-.35.75-.35 1.55 0 4.4.15 4.55.15.2 0 3.1-.15 4.5-.15.5 0 .75.1.75.35 0 .2-.15.3-.55.35-.3.05-.55.05-.9.1-1.45.2-1.6.95-1.7 2.4-.1 1.35-.05 2.5-.05 9.1v7.5c0 3.85-.05 7.35.2 9.15.2 1.45.4 2 1.7 2.3.65.15 1.7.2 1.9.2.45.05.55.15.55.35 0 .2-.2.35-.7.35-2.55 0-5.45-.15-5.7-.15-.15 0-3.1.15-4.5.15-.45 0-.8-.1-.8-.35 0-.2.2-.35.65-.35.25 0 .8-.05 1.2-.15.85-.2 1-1.2 1.15-2.4.25-1.8.25-5.35.25-9.1zm46.95 4.15v4.5c0 2-.05 2.05-.6 2.35-2.75 1.4-6.75 1.9-9.2 1.9-3.25 0-9.55-.25-14.65-4.5-2.7-2.25-5.4-6.45-5.4-12.15 0-6.8 3.45-11.65 7.55-14.1 3.85-2.25 8.1-2.55 11.15-2.55 3.2 0 5.35.4 7.15.7.8.15 2.75.4 3.8.45.4 0 .4.2.4.4 0 .6-.35 2.1-.35 6.5 0 .7-.05.9-.4.9-.25 0-.3-.3-.35-.6 0-.45-.2-2-.95-3.1-1.15-1.65-4.75-3.5-10.35-3.5-2.7 0-5.85.1-9.2 2.65-2.55 1.95-4.2 5.75-4.2 10.7 0 5.95 3.25 10.35 4.55 11.6 3.3 3.2 7 4.65 11.35 4.65 1.4 0 3.6-.25 4.75-.85.5-.3.85-.8.85-1.5v-7.2c0-3.3-.25-3.95-2-4.2-.3-.05-.8-.1-1.2-.1-.4 0-.6-.2-.6-.35 0-.25.2-.35.75-.35 2 0 4.9.1 5.1.1.2 0 3.15-.1 4.5-.1.5 0 .7.1.7.35 0 .15-.15.35-.6.35-.35 0-.45 0-.85.05-1.2.15-1.5 1.05-1.6 2.5-.1 1.45-.1 2.7-.1 4.5zm20.6-10.55h18.1c.15 0 .3 0 .3-.25v-.9c0-6.6 0-7.75-.1-9.1-.1-1.35-.3-2.05-1.95-2.35-.35-.05-.85-.1-1.25-.1-.35 0-.6-.15-.6-.35 0-.3.25-.35.7-.35 2.1 0 5.05.15 5.25.15.2 0 3-.15 4.5-.15.5 0 .8.05.8.35 0 .15-.15.35-.55.35-.3 0-.7.05-1 .1-1.35.2-1.55 1-1.65 2.4-.05 1.35-.05 2.5-.05 9.1v7.5c0 4.1 0 7.35.2 9.15.15 1.2.4 2.2 1.7 2.35.65.1 1.3.15 1.75.15.4 0 .65.15.65.35 0 .25-.25.35-.75.35-2.5 0-5.4-.15-5.65-.15-.2 0-3.1.15-4.45.15-.5 0-.75-.1-.75-.4 0-.15.15-.3.55-.3s.75 0 1.15-.1c.85-.15 1.1-1.25 1.25-2.4.25-1.8.25-4.95.25-9v-4.45c0-.2-.15-.3-.3-.3h-18.15c-.15 0-.25.05-.25.3v4.45c0 4.05 0 7.3.25 9.1.15 1.1.4 2.1 1.7 2.25.65.1 1.4.15 1.8.15.35 0 .6.15.6.35 0 .2-.2.35-.65.35-2.55 0-5.5-.15-5.75-.15-.15 0-3.2.15-4.5.15-.5 0-.8-.1-.8-.35 0-.15.1-.35.55-.35.4 0 .8-.05 1.2-.15.9-.2 1.1-1.15 1.25-2.25.3-1.8.25-5.15.25-9.25v-7.4c0-6.6 0-7.9-.1-9.25-.1-1.3-.45-2.25-1.9-2.4-.45-.05-.95-.1-1.35-.1-.35 0-.55-.15-.55-.3 0-.3.25-.35.75-.35 2.15 0 4.55.15 5.2.15.2 0 3.1-.15 4.5-.15.5 0 .75.1.75.35 0 .2-.2.3-.5.3s-.45 0-1 .1c-1.25.2-1.55 1.05-1.65 2.45-.05 1.35-.05 2.45-.05 9.05v.9c0 .25.15.25.3.25zm50.65-11.45v17.85c0 3.85.05 7.4.25 9.25.15 1.2.25 1.9 1.5 2.2.6.15 1.55.2 1.95.2.4 0 .6.15.6.3 0 .25-.15.4-.65.4-2.55 0-5.5-.15-5.7-.15-.2 0-3.15.15-4.45.15-.55 0-.75-.1-.75-.35 0-.15.15-.35.55-.35s.7 0 1.1-.05c.95-.15 1.1-.75 1.3-2.45.2-1.8.2-5.4.2-9.15v-17.85c-1.65 0-4.3 0-6.3.05-3.2.05-3.9.55-4.6 1.6-.45.7-.65 1.3-.75 1.55-.15.35-.25.4-.45.4s-.25-.2-.25-.45c-.05-.3.7-3.6 1-4.95.15-.6.3-.8.45-.8.35 0 1.3.45 2.2.55 1.75.2 3.15.25 3.2.25h16.4c1.4 0 2.9-.1 3.6-.25.65-.15.8-.2.95-.2.2 0 .3.25.3.45 0 1.4-.1 4.7-.1 5.1 0 .45-.2.6-.35.6-.25 0-.35-.2-.35-.6 0-.15 0-.2-.05-.7-.2-2-.85-2.5-5.9-2.55-1.9 0-3.45-.05-4.9-.05z",
        fill: "var(--primary)",
        fillRule: "nonzero"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M228.5 342.162h75.55",
        stroke: "var(--primary)",
        strokeWidth: "2",
        strokeLinecap: "square"
      }
    )
  ] });
}
const textSection = "_textSection_1uaiw_1";
const logoContainer = "_logoContainer_1uaiw_7";
const armor = "_armor_1uaiw_21";
const styles$g = {
  textSection,
  logoContainer,
  armor
};
const Carousel = lazy(
  () => import("./index-8DeU8WTC.js").then((module) => ({ default: module.Carousel }))
);
const Armor = lazy(() => import("./armor-CBXyP4sD.js").then((module) => ({ default: module.Armor })));
const title$7 = "Volkihar Knight";
const description$5 = "A lore-friendly armor mod for The Elder Scrolls V: Skyrim. Released on PC and Xbox One with over one million downloads across both platforms.";
const roles$3 = ["3D Modelling", "Texturing", "Graphic Design"];
const meta$9 = () => {
  return baseMeta({ title: title$7, description: description$5, prefix: "Projects" });
};
function VolkiharKnight() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "style",
      {
        dangerouslySetInnerHTML: {
          __html: `
            [data-theme='dark'] {
              --primary: oklch(87.71% 0.084 85.29);
              --accent: oklch(87.71% 0.084 85.29);
            }
            [data-theme='light'] {
              --primary: oklch(52.25% 0.121 81.53);
              --accent: oklch(52.25% 0.121 81.53);
            }
          `
        }
      }
    ),
    /* @__PURE__ */ jsxs(ProjectContainer, { children: [
      /* @__PURE__ */ jsx(
        ProjectBackground,
        {
          srcSet: `${volkiharBackground} 1280w, ${volkiharBackgroundLarge} 1920w`,
          width: 1280,
          height: 720,
          placeholder: volkiharBackgroundPlaceholder,
          opacity: 0.5
        }
      ),
      /* @__PURE__ */ jsx(
        ProjectHeader,
        {
          title: title$7,
          description: description$5,
          linkLabel: "Get the mod",
          url: "https://www.nexusmods.com/skyrimspecialedition/mods/4806/",
          roles: roles$3
        }
      ),
      /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsx(ProjectSectionContent, { children: /* @__PURE__ */ jsx(
        ProjectImage,
        {
          srcSet: `${volkiharBanner} 800w, ${volkiharBannerLarge} 1100w`,
          width: 800,
          height: 436,
          placeholder: volkiharBannerPlaceholder,
          alt: "A dark elf wearing the Volkihar Knight armor with the logo overlaid on the image.",
          sizes: `(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`
        }
      ) }) }),
      /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsx(ProjectSectionContent, { children: /* @__PURE__ */ jsx(
        Image$1,
        {
          srcSet: `${volkiharBook} 490w, ${volkiharBookLarge} 960w`,
          width: 480,
          height: 300,
          placeholder: volkiharBookPlaceholder,
          alt: "A book containing a sketch depicting the logo and armor",
          sizes: `(max-width: ${media.mobile}px) 90vw, (max-width: ${media.tablet}px) 80vw, 70vw`
        }
      ) }) }),
      /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsxs(ProjectSectionColumns, { children: [
        /* @__PURE__ */ jsx("div", { className: styles$g.armor, children: /* @__PURE__ */ jsx(Suspense, { children: /* @__PURE__ */ jsx(Armor, { alt: "3D model of the Volkihar Knight armor" }) }) }),
        /* @__PURE__ */ jsxs("div", { className: styles$g.textSection, children: [
          /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "Armor design" }),
          /* @__PURE__ */ jsx(ProjectSectionText, { children: "As a player I noticed there weren’t any heavy armor options for the Volkihar faction. This kinda sucks when you’ve specialised in heavy armor and decide to join the faction and discover they all wear light armor." }),
          /* @__PURE__ */ jsx(ProjectSectionText, { children: "My solution was to create a mod that combines meshes from the Volkihar faction armor with heavy plate armor. The mod builds upon textures and meshes from the base game, so it unifies with Skyrim’s overall aesthetic. I combined and modified the meshes in 3DS Max. To establish a cohesive design across the set, I edited existing textures, and designed custom textures in Photoshop." })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsxs(ProjectSectionContent, { children: [
        /* @__PURE__ */ jsx("div", { className: styles$g.logoContainer, children: /* @__PURE__ */ jsx(
          VolkiharLogo,
          {
            role: "img",
            "aria-label": "The Volkihar Knight logo, a monogram using the letters 'V' and 'K"
          }
        ) }),
        /* @__PURE__ */ jsxs(ProjectTextRow, { center: true, noMargin: true, children: [
          /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "Identity design" }),
          /* @__PURE__ */ jsx(ProjectSectionText, { children: "The monogram uses custom designed typography to get the right balance of weight and angularity. I combined this with Trajan for the text, which is also used for Skyrim’s game title wordmark." })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsx(ProjectSectionContent, { children: /* @__PURE__ */ jsx(Suspense, { children: /* @__PURE__ */ jsx(
        Carousel,
        {
          placeholder: volkiharSlidePlaceholder,
          images: [
            {
              srcSet: `${volkiharSlide1} 960w, ${volkiharSlide1Large} 1920w`,
              sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 1096px`,
              alt: "A female character wearing the black coloured armor set."
            },
            {
              srcSet: `${volkiharSlide2} 960w, ${volkiharSlide2Large} 1920w`,
              sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 1096px`,
              alt: "A close up of the custom gauntlets design."
            },
            {
              srcSet: `${volkiharSlide3} 960w, ${volkiharSlide3Large} 1920w`,
              sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 1096px`,
              alt: "A female character wielding a sword and wearing the red coloured armor."
            }
          ],
          width: 1920,
          height: 1080
        }
      ) }) }) }),
      /* @__PURE__ */ jsx(
        ProjectSection,
        {
          backgroundElement: /* @__PURE__ */ jsx(
            Image$1,
            {
              srcSet: `${volkiharEnderal} 1280w, ${volkiharEnderalLarge} 1920w`,
              width: 1280,
              height: 720,
              placeholder: volkiharEnderalPlaceholder,
              alt: "A promotional image from Enderal showing several characters in the game overlooking a distant city.",
              sizes: `100vw`
            }
          ),
          children: /* @__PURE__ */ jsx(ProjectSectionContent, { children: /* @__PURE__ */ jsxs(ProjectTextRow, { center: true, centerMobile: true, noMargin: true, children: [
            /* @__PURE__ */ jsx(
              Image$1,
              {
                srcSet: `${volkiharEnderalLogo} 180w, ${volkiharEnderalLogoLarge} 360w`,
                width: 180,
                height: 200,
                placeholder: volkiharEnderalLogoPlaceholder,
                alt: "The Enderal game logo",
                sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 220px`,
                style: { maxWidth: 220, width: "100%", marginBottom: 30 }
              }
            ),
            /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "Featured in Enderal" }),
            /* @__PURE__ */ jsx(ProjectSectionText, { children: "I was super stoked to have my work featured in the major standalone mod Enderal, which won best fan creation at the game awards in 2016. Within the game my armor design can be found being used for the Wandering Mage armor set." }),
            /* @__PURE__ */ jsx(
              Button,
              {
                secondary: true,
                iconHoverShift: true,
                icon: "chevron-right",
                href: "https://store.steampowered.com/app/933480/Enderal_Forgotten_Stories/",
                children: "View on Steam"
              }
            )
          ] }) })
        }
      )
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: VolkiharKnight,
  meta: meta$9
}, Symbol.toStringTag, { value: "Module" }));
const frontmatter$2 = {
  "title": "The Creative Itch",
  "abstract": "A multifaceted need to do more, in more walks of life than just one",
  "date": "2024-06-03",
  "banner": "/static/articles/creative-itch/banner.webp",
  "featured": true
};
function _createMdxContent$2(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    em: "em",
    h2: "h2",
    hr: "hr",
    img: "img",
    p: "p",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxs(Fragment$1, {
    children: [jsx(_components.h2, {
      id: "a-multifaceted-need-to-do-more-in-more-walks-of-life-than-just-one",
      children: "A multifaceted need to do more, in more walks of life than just one"
    }), "\n", jsx(_components.p, {
      children: "I’ve long thought about what I want my answer to be in the future when people inevitably ask me “Who are you,” “What do you do,” or something similar. For the last five years I have envisioned myself being some version of a ‘programming professional.’ But my goal state has been morphing into something different altogether. Surprisingly enough, it is rooted in my past. Perhaps, everyone’s goal is. Let me explain."
    }), "\n", jsx(_components.p, {
      children: "Let’s assume I want to answer the questions I posed above with ‘Cloud Architect’. Well, that can’t be right because that term didn’t even exist when I was born. So how can I be something that did not exist for majority of my life? It might become a part of who I am, but that singular term cannot possibly encompass all that I am."
    }), "\n", jsx(_components.p, {
      children: "So I went back to the drawing board. Who I am must be who I have always been. At least in some capacity. Also, it must be someone I strive to be. I might have been a stubborn child, but that is not who I want to be. So…"
    }), "\n", jsxs(_components.blockquote, {
      children: ["\n", jsx(_components.p, {
        children: "My present existence must be dictated by the past I’ve experienced and the future goal state I strive for."
      }), "\n"]
    }), "\n", jsx(_components.p, {
      children: "After a thorough introspective phase, I believe I have settled on a term. Actually, settled is a very underwhelming word. More accurately, I have realized who I am. Creative."
    }), "\n", jsx(_components.p, {
      children: "“Who is Prateek?”"
    }), "\n", jsx(_components.p, {
      children: "“Prateek is a Creative.”"
    }), "\n", jsx(_components.p, {
      children: "That word manages to pack over 2 decades worth of my existence, and hopefully many more to follow."
    }), "\n", jsx(_components.p, {
      children: "In the past, as a creative, I have learnt to draw, play drums, self-teach video editing, act in plays, dance with groups, fall in love with programming, and build a social network of some truly amazing & inspiring people."
    }), "\n", jsx(_components.p, {
      children: "In the future, as a creative, I hope to contribute to the computing world, help educate those who crave it, equip those who have the hunger to make something meaningful with the right tools, and reach millions & perhaps even billions to make the world a slightly better place at the very least."
    }), "\n", jsx(_components.p, {
      children: "As a creative, I’m currently supporting my future self. I’m already trying to build towards that goal state. Making YouTube videos, applying for computing positions, connecting with those that give a damn about the world at large. It is all a multi-targeted approach for the same objective. It’s just that my objective happens to not fit into a single achievement, or any for that matter. It contains a lot of ideal states, which will work in tandem to help me feel a certain way. Fulfilled."
    }), "\n", jsx(_components.p, {
      children: "And how do I plan to do all of this? By being a creative."
    }), "\n", jsx(_components.hr, {}), "\n", jsx(_components.p, {
      children: "P.S.: There is some creative work the past me did that the current me would like to share. If nothing else, the future me might be able to look back on this and feel inspired. So everything is addressed to him, Prateek from the future. This is as close to time travel I can give you, man. For now, at least."
    }), "\n", jsx(_components.hr, {}), "\n", jsx(_components.h2, {
      id: "the-artistic-flare-you-started-growing-when-you-were-11",
      children: "The artistic flare you started growing when you were 11"
    }), "\n", jsxs(_components.p, {
      children: [jsx(_components.img, {
        src: "/static/articles/creative-itch/art.webp",
        alt: "The Heart on Flames Art (by Prateek Singh Arora, a.k.a. The Pirated Sardar)",
        width: "750",
        height: "750"
      }), "\n", jsx(_components.em, {
        children: "The Heart on Flames (by Prateek Singh Arora, a.k.a. The Pirated Sardar). Dec 2017."
      })]
    }), "\n", jsx(_components.hr, {}), "\n", jsx(_components.h2, {
      id: "the-first-video-you-ever-publicly-released-you-might-cringe-when-you-watch-it-and-i-hope-you-do-that-just-means-youre-much-better",
      children: "The first video you ever publicly released. You might cringe when you watch it, and I hope you do. That just means you’re much better."
    }), "\n", jsxs(_components.p, {
      children: [jsx(_components.a, {
        href: "https://youtu.be/dI6BoLOHfnw",
        children: jsx(_components.img, {
          src: "/static/articles/creative-itch/YT-1.webp",
          alt: "Anker MagGo 622 Battery Review: The Best Budget Option? by @PiratedSardar",
          width: "1280",
          height: "720"
        })
      }), "\n", jsx(_components.em, {
        children: "Anker MagGo 622 Battery Review: The Best Budget Option?"
      })]
    }), "\n", jsx(_components.hr, {}), "\n", jsx(_components.h2, {
      id: "the-last-2-years-of-high-school-when-you-got-into-photography-big-time-just-so-you-know-i-spent-a-lot-of-time-digging-through-the-folders-because-a-lot-of-the-portraits-are-of-people-you-dont-want-on-here-also-i-slightly-edited-the-first",
      children: "The Last 2 years of high school when you got into photography big-time. Just so you know, I spent a lot of time digging through the folders, because a lot of the portraits are of people you don’t want on here. Also I slightly edited the first."
    }), "\n", jsxs(_components.p, {
      children: [jsx(_components.img, {
        src: "/static/articles/creative-itch/photo-1.webp",
        alt: "My sister (by Prateek Singh Arora, a.k.a. The Pirated Sardar)",
        width: "1456",
        height: "971"
      }), "\n", jsx(_components.em, {
        children: "The “adorable” sister (by Prateek Singh Arora, a.k.a. The Pirated Sardar). Shot on Canon 550D. Nov 2018."
      })]
    }), "\n", jsxs(_components.p, {
      children: [jsx(_components.img, {
        src: "/static/articles/creative-itch/photo-2.webp",
        alt: "My grandfather (by Prateek Singh Arora, a.k.a. The Pirated Sardar)",
        width: "1456",
        height: "971"
      }), "\n", jsx(_components.em, {
        children: "The GRAND grandfather (by Prateek Singh Arora, a.k.a. The Pirated Sardar). Shot on Canon 550D. June 2019."
      })]
    }), "\n", jsx(_components.hr, {}), "\n", jsx(_components.h2, {
      id: "the-weight-you-lost-sitting-at-home-in-the-middle-of-the-pandemic-with-old-dumbbells-that-didnt-cross-15-kgs-35lbs",
      children: "The weight you lost. Sitting at home, in the middle of the pandemic. With old dumbbells that didn’t cross 15 kgs (~35lbs)."
    }), "\n", jsxs(_components.p, {
      children: [jsx(_components.img, {
        src: "/static/articles/creative-itch/me-1.webp",
        alt: "Man kinda dancing",
        width: "1456",
        height: "1092"
      }), "\n", jsx(_components.em, {
        children: "October 2019. Shot on iPhone XS."
      })]
    }), "\n", jsxs(_components.p, {
      children: [jsx(_components.img, {
        src: "/static/articles/creative-itch/me-2.webp",
        alt: "Gym selfie",
        width: "1170",
        height: "1391"
      }), "\n", jsx(_components.em, {
        children: "July 2022. Shot on iPhone 13 Pro."
      })]
    }), "\n", jsx(_components.hr, {}), "\n", jsx(_components.h2, {
      id: "one-of-the-earlier-videos-you-created-not-the-best-but-i-still-like-the-audio-video-sync",
      children: "One of the earlier videos you created. Not the best, but I still like the audio-video sync."
    }), "\n", jsxs(_components.p, {
      children: [jsx(_components.a, {
        href: "https://youtu.be/QvzaGsjFk18",
        children: jsx(_components.img, {
          src: "/static/articles/creative-itch/YT-2.jpg",
          alt: "One Of The Earlier Videos by @PiratedSardar",
          width: "3840",
          height: "1832"
        })
      }), "\n", jsx(_components.em, {
        children: "One Of The Earlier Videos by @PiratedSardar"
      })]
    }), "\n", jsx(_components.hr, {}), "\n", jsx(_components.h2, {
      id: "some-more-stills-you-took-over-the-years",
      children: "Some more stills you took over the years."
    }), "\n", jsxs(_components.p, {
      children: [jsx(_components.img, {
        src: "/static/articles/creative-itch/pic-1.webp",
        alt: "Spider Outside Window (by Prateek Singh Arora, a.k.a. The Pirated Sardar)",
        width: "1456",
        height: "1092"
      }), "\n", jsx(_components.em, {
        children: "The Spider Outside The First Window Away From Home (by Prateek Singh Arora, a.k.a. The Pirated Sardar). Shot on iPhone XS. Oct 2019."
      })]
    }), "\n", jsxs(_components.p, {
      children: [jsx(_components.img, {
        src: "/static/articles/creative-itch/pic-2.webp",
        alt: "A friend's eye (by Prateek Singh Arora, a.k.a. The Pirated Sardar)",
        width: "1456",
        height: "1092"
      }), "\n", jsx(_components.em, {
        children: "The One Who Couldn’t Stay Still (by Prateek Singh Arora, a.k.a. The Pirated Sardar). Shot on iPhone XS. Oct 2019."
      })]
    }), "\n", jsxs(_components.p, {
      children: [jsx(_components.img, {
        src: "/static/articles/creative-itch/pic-3.webp",
        alt: "Silhouette of a man (by Prateek Singh Arora, a.k.a. The Pirated Sardar)",
        width: "1456",
        height: "1941"
      }), "\n", jsx(_components.em, {
        children: "The Silhouette in The Cold (by Prateek Singh Arora, a.k.a. The Pirated Sardar). Shot on iPhone 13 Pro. Jan 2022."
      })]
    }), "\n", jsxs(_components.p, {
      children: [jsx(_components.img, {
        src: "/static/articles/creative-itch/pic-4.webp",
        alt: "Man laughing (by Prateek Singh Arora, a.k.a. The Pirated Sardar)",
        width: "1456",
        height: "1941"
      }), "\n", jsx(_components.em, {
        children: "Happy Life (by Prateek Singh Arora, a.k.a. The Pirated Sardar). Shot on iPhone 15 Pro Max. Jan 2024"
      })]
    }), "\n", jsxs(_components.p, {
      children: [jsx(_components.img, {
        src: "/static/articles/creative-itch/pic-5.webp",
        alt: "A flower (by Prateek Singh Arora, a.k.a. The Pirated Sardar)",
        width: "1456",
        height: "1941"
      }), "\n", jsx(_components.em, {
        children: "The Colour That Caught My Eye (by Prateek Singh Arora, a.k.a. The Pirated Sardar). Shot on iPhone 13 Pro. Oct 2023."
      })]
    }), "\n", jsx(_components.p, {
      children: jsx(_components.a, {
        href: "https://open.substack.com/pub/piratedsardar/p/the-creative-itch?r=3cyy6a&utm_campaign=post&utm_medium=web&showWelcomeOnShare=false",
        children: "Click here to read the original on Substack"
      })
    })]
  });
}
function MDXContent$2(props = {}) {
  const { wrapper: MDXLayout } = {
    ...useMDXComponents(),
    ...props.components
  };
  return MDXLayout ? jsx(MDXLayout, {
    ...props,
    children: jsx(_createMdxContent$2, {
      ...props
    })
  }) : _createMdxContent$2(props);
}
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: MDXContent$2,
  frontmatter: frontmatter$2
}, Symbol.toStringTag, { value: "Module" }));
const frontmatter$1 = {
  "title": "The Power Of Stories",
  "abstract": "... and feeling fulfilled, creatively and otherwise",
  "date": "2024-06-09",
  "banner": "/static/articles/power-stories/banner.webp"
};
function _createMdxContent$1(props) {
  const _components = {
    a: "a",
    h2: "h2",
    h3: "h3",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    ul: "ul",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxs(Fragment$1, {
    children: [jsx(_components.h2, {
      id: "feeling-fulfilled-creatively-and-otherwise",
      children: "Feeling fulfilled, creatively and otherwise"
    }), "\n", jsx(_components.p, {
      children: "I caught myself practically skipping today. I noticed it while I was going up the stairs to my part-time job. It was a slow day so I got to reflect on why I was feeling so revved."
    }), "\n", jsx(_components.p, {
      children: "There a few factors:"
    }), "\n", jsxs(_components.ol, {
      children: ["\n", jsxs(_components.li, {
        children: ["\n", jsx(_components.p, {
          children: "People around me are living their best life. One of my friends achieved a new professional milestone this past week, and 2 others have their parents visiting. My relationship is going great, and family back home is doing awesomely."
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsx(_components.p, {
          children: "My mind feels clutter-free, and I am able to focus on things that I really need to do. I keep procrastinating and put things off that eventually start to cause passive anxiety. An example would be applying to extend my SIN. Yesterday I finally did it. It wasn’t on my daily to-do but I had a pocket of free time and I just went for it. The rush of dopamine was unreal."
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsx(_components.p, {
          children: "I feel like I’m finally on the trajectory I need to be on. What I want to talk about for the rest of the post falls under this category."
        }), "\n"]
      }), "\n"]
    }), "\n", jsx(_components.h2, {
      id: "what-is-the-trajectory",
      children: "What is “The Trajectory”?"
    }), "\n", jsx(_components.p, {
      children: "The bulk of what I’ve been feeling comes from gaining a sense of purpose, and working towards it. I can’t even describe it properly, at least not in words. It would be like trying to describe a color. I can try, but showing you is going to be exponentially more effective. It is just going to take time before you can see it. I have an intuition that this mindset is going to solidify more and more. A mindset of growth."
    }), "\n", jsx(_components.p, {
      children: "The trajectory itself is not solidified, nor should it ever be. I have a goal state, and I’m working towards getting there. But my future self might have a different goal. The target is constantly moving, I just know it is going to be vaguely in that direction, so I’ve started to move."
    }), "\n", jsx(_components.p, {
      children: "As I’m writing this I almost feel like I’m just compiling a list of buzz words. But trust me, if you could access my thoughts, you’d understand the clarity of the words I’m sharing and the lack of filter as I write them."
    }), "\n", jsx(_components.p, {
      children: "All of this to say, I feel thoroughly fulfilled. In more ways than one. But most importantly, creatively. I see the world through a different lens. Everywhere I look I perceive a different story. And every single one is worth sharing."
    }), "\n", jsx(_components.h2, {
      id: "some-stories",
      children: "Some Stories"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: ["\n", jsx(_components.h3, {
          id: "the-blind-man",
          children: "The Blind Man"
        }), "\n"]
      }), "\n"]
    }), "\n", jsx(_components.p, {
      children: "A blind man frequents the cafe I work at. I sat down with him recently and told him how I came across a blind YouTuber who explained how to help blind people properly. I shared with the expectation of him offering insight into what his preferences are, and how he would like me to help him. To my surprise he didn’t know about the things I was talking about. He told me that even when one is blind, they have to apply for things and wait in line. A line that was too expensive for him to even consider joining and waiting."
    }), "\n", jsx(_components.p, {
      children: "That is a story I hope I will remember every time I meet someone who has to navigate through the world through constant challenge."
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: ["\n", jsx(_components.h3, {
          id: "the-misunderstood-woman",
          children: "The Misunderstood Woman"
        }), "\n"]
      }), "\n"]
    }), "\n", jsx(_components.p, {
      children: "Earlier today, a woman came in and was on the phone. She was next in line to order, but nobody was behind her. She was laughing and having fun, but not being insensitive to anyone around her. She walked up and I saw a hint of dread flash past her face. She shook it off and started talking to one of the baristas. She couldn’t decide what she wanted and got a little stuck. Asked quite a few questions than the normal person would, but again she wasn’t holding anyone up, and we had nothing better to do. She settled on an order and ordered, followed by “I’m sorry, I didn’t mean to be so difficult.” And then she said her name for the order. Karen. It dawned on her that just because her name is a stereotype and was less than ideal while ordering coffee, she would be made fun of. So she has to try to diffuse all the potential threads we could have pulled on after she left. I felt bad, so I decided to go to hand her drink where she was sitting rather than call her to the hand-off area. Just so she might be put at ease and walk away thinking “these people aren’t going to use my name against me.”"
    }), "\n", jsx(_components.p, {
      children: "Or I just cooked up the whole thing in my head. Who knows? The point is there is a story everywhere you look. You just need to be open to possibilities and people."
    }), "\n", jsx(_components.h2, {
      id: "how-stories-are-changing-me",
      children: "How Stories Are Changing Me"
    }), "\n", jsx(_components.p, {
      children: "As I am open to more possibilities, I can feel my ability to tell stories improving. Being critical of how narratives in the real world play out, and where a natural stopping point would be is important. The stopping point though, is about a short story that exists within a larger one of the person themself. And then the scale can be increased: person, group, community, city, state, country, continent, world, universe. Each and every story is intertwined. You just need to be willing to widen your lens enough."
    }), "\n", jsx(_components.p, {
      children: "I’ve started recording videos to journal lately, as some ideas are better shown than simply written. It also helps me practice talking into a camera and I can critique my conversational style without the pressure of having to recreate the “perfect shot,” because this is just for me. In the last few weeks alone I have seen an improvement, and it is a process that may as well keep going till I’m dead."
    }), "\n", jsx(_components.p, {
      children: "As I was proofreading the previous paragraph, I realized something. I said I don’t have to pressure myself to optimize the shot I take for those journal video entries, because it is just for me. Maybe I should try to live up to that for YouTube videos as well. Perfect is great, but it is also fiction. It is going to be an ever-evading target that seems just outside of reach. Funnily enough, I paused a podcast moments ago at a frame that perfectly encapsulates how that would look:"
    }), "\n", jsx(_components.p, {
      children: jsx(_components.img, {
        src: "/static/articles/power-stories/peter.jpeg",
        alt: "Peter McKinnon on Jon Youshaei’s channel (posted Jan 29, 2023)",
        width: "1456",
        height: "826"
      })
    }), "\n", jsx(_components.p, {
      children: "Wrapping up though, life is great. People around me are great. The world is starting to make just enough sense for me to know what needs to be done. In the short term that would be applying for internships, not messing my course up, and build the YouTube channel into what I want. All of that through looking at every story with a lens that is appropriately wide or narrow enough."
    }), "\n", jsx(_components.p, {
      children: jsx(_components.a, {
        href: "https://open.substack.com/pub/piratedsardar/p/the-power-of-stories?r=3cyy6a&utm_campaign=post&utm_medium=web&showWelcomeOnShare=false",
        children: "Click here to read the original on Substack"
      })
    })]
  });
}
function MDXContent$1(props = {}) {
  const { wrapper: MDXLayout } = {
    ...useMDXComponents(),
    ...props.components
  };
  return MDXLayout ? jsx(MDXLayout, {
    ...props,
    children: jsx(_createMdxContent$1, {
      ...props
    })
  }) : _createMdxContent$1(props);
}
const route3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: MDXContent$1,
  frontmatter: frontmatter$1
}, Symbol.toStringTag, { value: "Module" }));
const backgroundSprLarge$1 = "/assets/spr-background-large-nYeU3Kau.jpg";
const backgroundSprPlaceholder = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wgARCAAQABgDAREAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAwQFCP/EABgBAQADAQAAAAAAAAAAAAAAAAMBAgQF/9oADAMBAAIQAxAAAADJ1+YyYzk2GgjwSltH/8QAHxAAAAUFAQEAAAAAAAAAAAAAAAECAwQFERITMSFh/9oACAEBAAE/AI8S7dyCqdm19D8TT0NzNasS4DqSkiVJN70x/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAIBEgMRE//aAAgBAgEBPwCxOQVtlTmKtT//xAAaEQACAgMAAAAAAAAAAAAAAAAAAQMSAgQR/9oACAEDAQE/AM5uMWzxmE1hw2QtVMjiof/Z";
const imageSprBackgroundVolcanismLarge = "/assets/spr-background-volcanism-large-t0jgu3IX.jpg";
const imageSprBackgroundVolcanismPlaceholder = "/assets/spr-background-volcanism-placeholder-BMmyN9Lv.jpg";
const imageSprBackgroundVolcanism = "/assets/spr-background-volcanism-bmTr0iXr.jpg";
const backgroundSpr = "/assets/spr-background-BYcr6wKu.jpg";
const imageSprComponentsDarkLarge = "/assets/spr-components-dark-large-DDLZMiq_.png";
const imageSprComponentsDarkPlaceholder = "/assets/spr-components-dark-placeholder-CS7TACCT.png";
const imageSprComponentsDark = "/assets/spr-components-dark-C4JG7Pbq.png";
const imageSprComponentsLightLarge = "/assets/spr-components-light-large-DsBvVT1Z.png";
const imageSprComponentsLightPlaceholder = "/assets/spr-components-light-placeholder-CszPt9Ak.png";
const imageSprComponentsLight = "/assets/spr-components-light-B7eB4kK-.png";
const imageSprDesignSystemDarkLarge = "/assets/spr-design-system-dark-large-Dqc1QDG6.png";
const imageSprDesignSystemDarkPlaceholder = "/assets/spr-design-system-dark-placeholder-BnG6UVwD.png";
const imageSprDesignSystemDark = "/assets/spr-design-system-dark-m_r7zp6p.png";
const imageSprDesignSystemLightLarge = "/assets/spr-design-system-light-large-DpW3ORXR.png";
const imageSprDesignSystemLightPlaceholder = "/assets/spr-design-system-light-placeholder-rqb9V2TD.png";
const imageSprDesignSystemLight = "/assets/spr-design-system-light-BDN1DcyF.png";
const imageSprLessonBuilderDarkLarge = "/assets/spr-lesson-builder-dark-large-DZ47e5rw.jpg";
const imageSprLessonBuilderDarkPlaceholder = "/assets/spr-lesson-builder-dark-placeholder-BYjrS8rr.jpg";
const imageSprLessonBuilderDark = "/assets/spr-lesson-builder-dark-CleNpN1U.jpg";
const imageSprLessonBuilderLightLarge$1 = "/assets/spr-lesson-builder-light-large-BcyuLqHy.jpg";
const imageSprLessonBuilderLightPlaceholder = "/assets/spr-lesson-builder-light-placeholder-Dq8oUDzc.jpg";
const imageSprLessonBuilderLight = "/assets/spr-lesson-builder-light-UMmbA8fJ.jpg";
const videoSprMotionLarge = "/assets/spr-motion-large-3xc88jM5.mp4";
const videoSprMotionPlaceholder = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQIBAQICAgICAgICAwUDAwMDAwYEBAMFBwYHBwcGBwcICQsJCAgKCAcHCg0KCgsMDAwMBwkODw0MDgsMDAz/2wBDAQICAgMDAwYDAwYMCAcIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wgARCAAUACADAREAAhEBAxEB/8QAGQAAAwADAAAAAAAAAAAAAAAABAUGAQcJ/8QAGgEAAgMBAQAAAAAAAAAAAAAAAwUBBAYCAP/aAAwDAQACEAMQAAAA5g6JXYZPaa7bIz7iw8vkipxO215vYnFgU8PrMw2YrP/EACIQAAICAgICAgMAAAAAAAAAAAECAwUABAYRIVESExQxQf/aAAgBAQABPwCPY2b2D7piSW/fecY4hVGgeTZmQS5zCy16a0KazBwD/MquaI+l8HTKeaJ6gkessrCRvmizMB67w1bPtF3YtkahfAyKdoKvpT14yTckadvOfkP7zgmlHZXiRygspOf/xAAfEQACAwEAAQUAAAAAAAAAAAAAAgEDEQQSBSEiQVH/2gAIAQIBAT8AvvltaTo7bZsxDmtfx+RW/wBjxsYTxx5aRX7YImEn6KenUq9mMf/EAB4RAAEEAgMBAAAAAAAAAAAAAAIAAQMEERIFECIx/9oACAEDAQE/AK1dh8iqtCEYdj+q1EG2BUseFEWr5TX301dFN6ypZNkyz1yUpBG7iv/Z";
const videoSprMotion = "/assets/spr-motion-DNnC5DgY.mp4";
const imageSprSchema1DarkLarge = "/assets/spr-schema-1-dark-large-CeSqw0xT.png";
const imageSprSchema1DarkPlaceholder = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAhCAIAAACN57ZmAAABeUlEQVR4AWJU1rZkAhRHHjgS2DAQ48jO//+bW4u5WHB6Qw23uBEDCapaqypJStBu7XNakWEHsmrv9cPe17Pbz/l88HsRSdAiCZCYECA8vPdcdRO4Qn8DSp/zOadbhmtULlCzgO2t8Hrvkrp+7goZwtTweN4ramJ/7n2655LnCcqD8Oc4NqJGMSKgb9UJIGyGBOxupwnne3RaqU1IItCez+n+wGinz1FTqyovD899sXuCzzndPU/geKj9jQI4XmtD4vQ7iPdLKrWSSgKQeWTn5TmlrLUq5EchBx2VPb5506iVStWqlLVGDNmKOGO4KvbtIFXFQGoTEypFrgVfpwGqilultq/fqtza6bYqWoVJQk53ztmQcOtaKwF6uUKAyVd7+uBeV0LI5ZWGymUz3FCQ4d09KP4eRXl52n0H1R3tbu//lKeKwBa6/fr6nNNE+6q8mcEct3r6o53Mvba/87x576n5E74VUvw3/i9voyQof8O8bggC4W+Y158Azxk6hkhW1QQAAAAASUVORK5CYII=";
const imageSprSchema1Dark = "/assets/spr-schema-1-dark-DrL_5NQ4.png";
const imageSprSchema1LightLarge = "/assets/spr-schema-1-light-large-CkTsXpYP.png";
const imageSprSchema1LightPlaceholder = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAhCAIAAACN57ZmAAABMUlEQVR4AXyRga7dIAxD7dDvvtL97j3wqCMjtEnvCKWUOk5JuNaS1LGqSO6I/yiZHzPnBKDgfXQA2gxGAU2kD0lcbMs2qpdB9nfW+Tkbv3v/wI8TlpdcN3SqT0XWXgD/uYczjNUuOYq8dO10RBXa/vC0rokr8nrrTN/mfPOm94IZn89nK3w7tYCmdee12kPGz9NbeaVuFEhaa2X6io6tSPcRdGE/t2rs2DkyqZh4+ncmvrIkhMxjzrln+o506c/iXnNqXUiq7tzcrNkzn8ISFJpCEECIQKV9foDmYWgFrK43xsKHD0JLB0WpnYTm0vG2pZDHmXX8UuGWM2dg/O7pjTHgb9ARRnfUdgqe9fV/EXWsqpzkMq1LrQwwkJaa8f1+aYahwU3ny3iIvwH9HQwMTnUAjevehnsmuFYAAAAASUVORK5CYII=";
const imageSprSchema1Light = "/assets/spr-schema-1-light-B5dEN2xi.png";
const imageSprSchema2DarkLarge = "/assets/spr-schema-2-dark-large-WIGUIqzX.png";
const imageSprSchema2DarkPlaceholder = "/assets/spr-schema-2-dark-placeholder-BVZ4WW8t.png";
const imageSprSchema2Dark = "/assets/spr-schema-2-dark-DYmNi06o.png";
const imageSprSchema2LightLarge = "/assets/spr-schema-2-light-large-h4BJSsho.png";
const imageSprSchema2LightPlaceholder = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAhCAIAAACN57ZmAAABAElEQVR4AYyTgYrEMAhEVfPf/e7e0cxlHTqIALePrEgyGjVb33sDeJ7nOFa4exReWBHndxS/xX3fP8XxT6QJ6gAoE5Mpn06XIrgbRWYea40FYBeMO7aXpatCEdIRE9IJ5mbvIyBGfQRgevkWACRqlUH77seOfgtOtAaU2l869oIi6mh5FMqh2QozvMsCxfsM6YX8OZd271lBt7O6CB7bDbHhvj8GKjpap4oIzWbmY5vmdWt4RkkboRd76sn8LIO/4GVpZpqOb99mEvEPtvo/gI6syMyQjlI5RAGBwv4jvPhW1z+LjrLkdV2cbjaG9GNHp6MMfVaj04n2Dd/xt+GiDgBUWvviH6BKngAAAABJRU5ErkJggg==";
const imageSprSchema2Light = "/assets/spr-schema-2-light-B53tZDTp.png";
const imageSprStoryboarderDarkLarge = "/assets/spr-storyboarder-dark-large-CILuJaRq.png";
const imageSprStoryboarderDarkPlaceholder = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAUCAMAAADbT899AAABp1BMVEUYIS0eJzMcJTAaIy8hKjYfKTUxOUMmLjkiKzczPEgnMDsdJjI8Q0wkLDhiaHFOVV0vN0ItNkIjLDh5foZESkozO0YqNkU3PkInMT4fLDp9golzeYBxd31GTVdASFE2P0suOUcrMz4lLTklLDUhKjSIjJGPkpB/hIx9gYV8gYJ3e4GGiHtmbHJfZnBOV2FKUVxFTFZES1VQVlJNUlE3PkcxOUUtNT4wNzwqMjsnLzcjKzMfJzGipZ2GiomSlIh2fIVtdoBwdXtpb3dnbXVVY3JhZm1YXmZna2NUWmFBT19dYVw6SFcxOkcqNkQvNj8lMD0qMTianZePlJaLkJaCiI+TlY15g42YmoqLjomCh4lueYZyeoSDhoB7f39ncHt2eXhrcXiChXdia3Vzd3R9gXNscXJaY2xtcWtpbWlvc2ZVXGVSV1snQVpWXFlIUFlKUFcwPEo/RUY7QUYiM0U1PD8zOz4qMT0iLjyhpJiWmJGIi356fXd5fHBzd2teY2srTGtNW2pjZ15bX15gZF1HTVM1RFMqPE86Qk4lOk5KUE1CSE0gMEAyOT5Z62yvAAACBUlEQVQoz1WOZXfiUBRFHwkhBoEECKS4uxdvgeIOU/dO3d3G3Wd+9Ly0i7Xa8+mst/e794KPJz94Pc4R0mchOOouJUta+R44+XU9sEsxTPI0GIYR+J0q2bXy4PqvIED+XKBpGiMoVkuSViAIBIfjuF3BKcRwdtgJqGPEgCUtli6As2wyktTKVLKHaGFX6e8F4V7PdkktCwhKJTcplZGYORY1maLRiNh/Xlh5nu+xrI0CkDeDU8aXtQ+1GsOEQmXYQ+FWq9P5ftHT26XANn4eXHJPu/xTRoPfbzB4XK7Z4la1Wv3U6lgHUhqo5Mcb7omJF5M+r3dsTK2enZme8ZRKy8vrexGLHkNAX368PfdKFERuMKo9nrFiaWV+fmUrDAUU9K/i+28WFgqraz6v2lhmgpVKkAmtF9UGJmyhJChI6TTt9zubm2/XJl1L/vJe/agZVirrTIU5iiZxGgUZaMTbXxsHG4tut2+3rjyLmeVys+nMZCYpeALA8cw/3aUm8WV78fXc6m7z3Cwfl7GqpFaWopwICgBHOB3ZYfoqcRAoFAL7p98gt+EKBXyXiBxgEhpB8o60pv0uENhpxP9ATkklCIKgEMPQoobms7rE58PDxqlG18/ghPh3lMeKOoc6TSL++/I2kx3NHgnIg4Dkhumbm9t0NgdXjvhoxaORzzkcjlwern6KwX+M/FwerB/Y+wAAAABJRU5ErkJggg==";
const imageSprStoryboarderDark = "/assets/spr-storyboarder-dark-BuwX6fEO.png";
const imageSprStoryboarderLightLarge = "/assets/spr-storyboarder-light-large-Cs7Lwjrs.png";
const imageSprStoryboarderLightPlaceholder = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAUCAMAAADbT899AAABEVBMVEXz9PT19fby8vLy8vTx8vT29/jw8fPv8PHz9Pbx8/Xt7/H19e309PHt7u/q7O3s7e7l5uj19fTo6+708+vi4uP189/6+vr4+Pnr7/P19fLx8fH29vD19OXh4eDu8fXq6uzo6evm6Orr6ujn5+jx8Obt7Obk5OXg4uXn5uLn7fPq7fDm6/Dm6ezv7uXy8OHy8N3e3d3V2Nv5+fb09PP29evl5+rd4+n29efi5Of08uP39/bq8PXi7PPh6fDu7u7c5u7v7+zx8Ovg5uvu7erz8ujY4ejm5uXd4eTW3ePq6eHf3t3Z6fXC3fT4+PPo7PDx8e3f5+3q6OXd3uDt7N/Y3N/Q1tva2tjIzdCl0fTT5fPa3uJN/EehAAAB4ElEQVQoz12Q53LiQAyAZXuzaxtcsM0FTHEvdAi9EwgtvV7u7v0f5NYwmcnk+7Mr6dNII/hzfzflmYsfMKBEnc/Pj70G939nOYzYnxBZfe103kca3M2mZcRxLMcixCL6cAkIi1Y/ika2AtNyGSd5FmGCMTqXEcZiVXP6jiUBL9CI9ppEUiSRIA6AZsq5XKWqabIiAQMsISYdqtieLUuY43lBKOcqlVqtpsmyQgVzsSCmuXDDkqHKhAo8rc/my+d5rSqJkGFXbrBZrdzd7e+24SmE43CuMl8ut9t1vSqKMEk/NRq+7wcxFUqqLBFMco/Pg+3hMKhXMYZJXvebzbEfvJRu6QzbUhT5sbYeHD46e0fCCK4KerPVajUbwUsYhqoXqqrq1NeDf533yBYRFR56xWw2O7653rjuzgsNw4jUer0/2kd9mQgC/Loq9IrF4lDXrzdBHBvtdvt15Gia5diyiE7CQyGlpyi63zge41KpZHiyJIrJ1QSgwuUkk88X0gX9Ztx8ezvG8c6zJHpRxAnA80CFCyaTKDpdpdVqBK6liPSezImzcMEwmW7ha9cn0+QAmDPAfQmZfKo3HBaHqXQaAGj/dyH5QDedSsjTeoZhqHJagENwSQWgUCOhC98QBET+A7EgPbhEF+2BAAAAAElFTkSuQmCC";
const imageSprStoryboarderLight = "/assets/spr-storyboarder-light-DqGEXS8o.png";
const container = "_container_vdycn_2";
const options = "_options_vdycn_6";
const button$3 = "_button_vdycn_26";
const indicator = "_indicator_vdycn_67";
const styles$f = {
  container,
  options,
  button: button$3,
  indicator
};
const SegmentedControlContext = createContext({});
const SegmentedControl = ({
  children,
  currentIndex,
  onChange,
  label: label2,
  ...props
}) => {
  const id = useId();
  const labelId = `${id}segmented-control-label`;
  const optionRefs = useRef([]);
  const [indicator2, setIndicator] = useState();
  const handleKeyDown = (event) => {
    const { length } = optionRefs.current;
    const prevIndex = (currentIndex - 1 + length) % length;
    const nextIndex = (currentIndex + 1) % length;
    if (["ArrowLeft", "ArrowUp"].includes(event.key)) {
      onChange(prevIndex);
      optionRefs.current[prevIndex].current.focus();
    } else if (["ArrowRight", "ArrowDown"].includes(event.key)) {
      onChange(nextIndex);
      optionRefs.current[nextIndex].current.focus();
    }
  };
  const registerOption = useCallback((optionRef) => {
    optionRefs.current = [...optionRefs.current, optionRef];
  }, []);
  const unRegisterOption = useCallback((optionRef) => {
    optionRefs.current = optionRefs.current.filter((ref) => ref !== optionRef);
  }, []);
  useEffect(() => {
    var _a;
    const currentOption = (_a = optionRefs.current[currentIndex]) == null ? void 0 : _a.current;
    const resizeObserver = new ResizeObserver(() => {
      const rect = currentOption == null ? void 0 : currentOption.getBoundingClientRect();
      const left = currentOption == null ? void 0 : currentOption.offsetLeft;
      setIndicator({ width: rect == null ? void 0 : rect.width, left });
    });
    resizeObserver.observe(currentOption);
    return () => {
      resizeObserver.disconnect();
    };
  }, [currentIndex]);
  return /* @__PURE__ */ jsx(
    SegmentedControlContext.Provider,
    {
      value: { optionRefs, currentIndex, onChange, registerOption, unRegisterOption },
      children: /* @__PURE__ */ jsxs(
        "div",
        {
          className: styles$f.container,
          role: "radiogroup",
          tabIndex: "0",
          "aria-labelledby": labelId,
          onKeyDown: handleKeyDown,
          ...props,
          children: [
            /* @__PURE__ */ jsx(VisuallyHidden, { as: "label", id: labelId, children: label2 }),
            /* @__PURE__ */ jsxs("div", { className: styles$f.options, children: [
              !!indicator2 && /* @__PURE__ */ jsx(
                "div",
                {
                  className: styles$f.indicator,
                  "data-last": currentIndex === optionRefs.current.length - 1,
                  style: cssProps(indicator2)
                }
              ),
              children
            ] })
          ]
        }
      )
    }
  );
};
const SegmentedControlOption = ({ children, ...props }) => {
  const { optionRefs, currentIndex, onChange, registerOption, unRegisterOption } = useContext(SegmentedControlContext);
  const optionRef = useRef();
  const index2 = optionRefs.current.indexOf(optionRef);
  const isSelected = currentIndex === index2;
  useEffect(() => {
    registerOption(optionRef);
    return () => {
      unRegisterOption(optionRef);
    };
  }, [registerOption, unRegisterOption]);
  return /* @__PURE__ */ jsx(
    "button",
    {
      className: styles$f.button,
      tabIndex: isSelected ? 0 : -1,
      role: "radio",
      "aria-checked": isSelected,
      onClick: () => onChange(index2),
      ref: optionRef,
      ...props,
      children
    }
  );
};
const video = "_video_so4tl_1";
const sidebarImages$1 = "_sidebarImages_so4tl_13";
const sidebarImage$1 = "_sidebarImage_so4tl_13";
const styles$e = {
  video,
  sidebarImages: sidebarImages$1,
  sidebarImage: sidebarImage$1
};
const Earth = lazy(() => import("./earth-Bvngp15o.js").then((module) => ({ default: module.Earth })));
const EarthSection = lazy(
  () => import("./earth-Bvngp15o.js").then((module) => ({ default: module.EarthSection }))
);
const title$6 = "Designing the future of education";
const description$4 = "I worked as the design lead on a major iteration of Smart Sparrow’s product. We took the platform in a bold new direction, focusing on becoming the best tool for learning designers.";
const roles$2 = [
  "Art Direction",
  "UX and UI Design",
  "Front End Development",
  "Motion Design"
];
const meta$8 = () => {
  return baseMeta({ title: title$6, description: description$4, prefix: "Projects" });
};
const SmartSparrow = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";
  const themes2 = ["dark", "light"];
  const handleThemeChange = (index2) => {
    toggleTheme(themes2[index2]);
  };
  return /* @__PURE__ */ jsxs(Fragment$1, { children: [
    /* @__PURE__ */ jsxs(ProjectContainer, { children: [
      /* @__PURE__ */ jsx(
        ProjectBackground,
        {
          opacity: isDark ? 0.5 : 0.8,
          src: backgroundSpr,
          srcSet: `${backgroundSpr} 1080w, ${backgroundSprLarge$1} 2160w`,
          placeholder: backgroundSprPlaceholder
        }
      ),
      /* @__PURE__ */ jsx(
        ProjectHeader,
        {
          title: title$6,
          description: description$4,
          url: "https://www.smartsparrow.com/",
          roles: roles$2
        }
      ),
      /* @__PURE__ */ jsx(ProjectSection, { padding: "top", children: /* @__PURE__ */ jsx(ProjectSectionContent, { children: /* @__PURE__ */ jsx(
        ProjectImage,
        {
          raised: true,
          srcSet: isDark ? `${imageSprLessonBuilderDark} 1280w, ${imageSprLessonBuilderDarkLarge} 2560w` : `${imageSprLessonBuilderLight} 1280w, ${imageSprLessonBuilderLightLarge$1} 2560w`,
          width: 1280,
          height: 800,
          placeholder: isDark ? imageSprLessonBuilderDarkPlaceholder : imageSprLessonBuilderLightPlaceholder,
          sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`,
          alt: "The aero lesson builder app dragging an audio component into a screen about plant cells."
        },
        theme
      ) }) }),
      /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsxs(ProjectTextRow, { children: [
        /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "The problem" }),
        /* @__PURE__ */ jsx(ProjectSectionText, { children: "In 2017, Smart Sparrow began a project to build an entirely new platform to from the ground up to serve as the most powerful tool for educators to create online learning experiences. The old platform was built in Flash, and there were a number of user experience problems to solve in the process of moving the platform to Javascript. The primary goals for the project were reducing barriers to collaboration, and making the platform both easier for new users, but with plenty of room to scale for advanced users." })
      ] }) }),
      /* @__PURE__ */ jsx(ProjectSection, { light: isDark, children: /* @__PURE__ */ jsxs(ProjectSectionContent, { children: [
        /* @__PURE__ */ jsx(
          Image$1,
          {
            srcSet: isDark ? `${imageSprComponentsDark} 1024w, ${imageSprComponentsDarkLarge} 2048w` : `${imageSprComponentsLight} 1024w, ${imageSprComponentsLightLarge} 2048w`,
            width: 1024,
            hright: 800,
            placeholder: isDark ? imageSprComponentsDarkPlaceholder : imageSprComponentsLightPlaceholder,
            alt: `A set of ${theme} themed components for the aero design system`,
            sizes: "100vw"
          },
          theme
        ),
        /* @__PURE__ */ jsx(ProjectTextRow, { children: /* @__PURE__ */ jsxs(
          SegmentedControl,
          {
            currentIndex: themes2.indexOf(theme),
            onChange: handleThemeChange,
            children: [
              /* @__PURE__ */ jsx(SegmentedControlOption, { children: "Dark theme" }),
              /* @__PURE__ */ jsx(SegmentedControlOption, { children: "Light theme" })
            ]
          }
        ) }),
        /* @__PURE__ */ jsxs(ProjectTextRow, { children: [
          /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "The aero design system" }),
          /* @__PURE__ */ jsx(ProjectSectionText, { children: "To streamline the design process across designers and engineers for such a large project, it was important to lay the foundations with a strong, flexible design system that could evolve during the product’s development cycle. This would inform both the aesthetics and user experience across the product itself as well as the website and marketing material." })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsxs(ProjectSectionContent, { children: [
        /* @__PURE__ */ jsx(
          Image$1,
          {
            raised: true,
            srcSet: isDark ? `${imageSprDesignSystemDark} 1280w, ${imageSprDesignSystemDarkLarge} 2560w` : `${imageSprDesignSystemLight} 1280w, ${imageSprDesignSystemLightLarge} 2560w`,
            width: 1280,
            height: 800,
            placeholder: isDark ? imageSprDesignSystemDarkPlaceholder : imageSprDesignSystemLightPlaceholder,
            alt: "The homepage of the aero design system docs website linking to principles and components.",
            sizes: "100vw"
          },
          theme
        ),
        /* @__PURE__ */ jsxs(ProjectTextRow, { children: [
          /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "Design system docs" }),
          /* @__PURE__ */ jsx(ProjectSectionText, { children: "A design system is useless if no one knows how to use it, so we put together a comprehensive documentation website to cover principles, ux, accessibility, and component guidelines for designers and engineers working with the system." })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(ThemeProvider, { theme: "dark", "data-invert": true, children: /* @__PURE__ */ jsx(
        ProjectSection,
        {
          backgroundOverlayOpacity: 0.5,
          backgroundElement: /* @__PURE__ */ jsx(
            Image$1,
            {
              srcSet: `${imageSprBackgroundVolcanism} 1280w, ${imageSprBackgroundVolcanismLarge} 2560w`,
              width: 1280,
              height: 900,
              placeholder: imageSprBackgroundVolcanismPlaceholder,
              alt: "A dramatic ocean scene with lava forming a new land mass.",
              sizes: "100vw"
            }
          ),
          children: /* @__PURE__ */ jsxs(ProjectSectionColumns, { width: "full", children: [
            /* @__PURE__ */ jsx(ProjectSectionContent, { width: "full", children: /* @__PURE__ */ jsxs(ProjectTextRow, { width: "s", children: [
              /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "Motion design" }),
              /* @__PURE__ */ jsx(ProjectSectionText, { children: "Animation was a core principle in making the authoring experience a more understandable process. Elements animate in ways that indicate the cause and effect of each interaction to improve the fluidity of the overall experience." })
            ] }) }),
            /* @__PURE__ */ jsx(
              Image$1,
              {
                raised: true,
                className: styles$e.video,
                srcSet: `${videoSprMotion} 1280w, ${videoSprMotionLarge} 2560w`,
                width: 1280,
                height: 800,
                placeholder: videoSprMotionPlaceholder,
                alt: "A learning designer building and deploying an interactive lesson on volcanism using the app.",
                sizes: `(max-width: ${media.mobile}px) 100vw, 50vw`
              }
            )
          ] })
        }
      ) }),
      /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsxs(ProjectSectionContent, { children: [
        /* @__PURE__ */ jsxs(ProjectTextRow, { children: [
          /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "Encouraging adaptivity" }),
          /* @__PURE__ */ jsx(ProjectSectionText, { children: "A major part of solving for collaboration was being able to visualize the learner experience in the editor. This was especially beneficial for subject matter experts and instructors need to review and give feedback on the higher level structure without having to dig through all of the adaptivity scenarios screen by screen." })
        ] }),
        /* @__PURE__ */ jsx(
          Image$1,
          {
            raised: true,
            srcSet: isDark ? `${imageSprStoryboarderDark} 1280w, ${imageSprStoryboarderDarkLarge} 2560w` : `${imageSprStoryboarderLight} 1280w, ${imageSprStoryboarderLightLarge} 2560w`,
            width: 1280,
            height: 800,
            placeholder: isDark ? imageSprStoryboarderDarkPlaceholder : imageSprStoryboarderLightPlaceholder,
            alt: "A drag and drop storyboard style editor for creating an adaptive lesson.",
            sizes: `(max-width: ${media.mobile}px) 100vw, 80vw`
          },
          theme
        )
      ] }) }),
      /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsxs(ProjectSectionColumns, { children: [
        /* @__PURE__ */ jsx(ProjectSectionContent, { children: /* @__PURE__ */ jsxs(ProjectTextRow, { children: [
          /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "An extensible plugin ecosystem usable by everyone" }),
          /* @__PURE__ */ jsx(ProjectSectionText, { children: "The most powerful aspect of the platform is the ability to create custom plugins for any content, whether it be a degree, course, lesson, screen, or interactive component. Out of the box these can be made configurable with minimal effort from developers. Learning designers can then edit everything using a common configuration interface." })
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: styles$e.sidebarImages, children: [
          /* @__PURE__ */ jsx(
            Image$1,
            {
              className: styles$e.sidebarImage,
              srcSet: isDark ? `${imageSprSchema2Dark} 260w, ${imageSprSchema2DarkLarge} 520w` : `${imageSprSchema2Light} 260w, ${imageSprSchema2LightLarge} 520w`,
              width: 260,
              height: 660,
              placeholder: isDark ? imageSprSchema2DarkPlaceholder : imageSprSchema2LightPlaceholder,
              alt: "Configuration options for a component.",
              sizes: `(max-width: ${media.mobile}px) 50vw, 25vw`
            }
          ),
          /* @__PURE__ */ jsx(
            Image$1,
            {
              className: styles$e.sidebarImage,
              srcSet: isDark ? `${imageSprSchema1Dark} 260w, ${imageSprSchema1DarkLarge} 520w` : `${imageSprSchema1Light} 260w, ${imageSprSchema1LightLarge} 520w`,
              width: 260,
              height: 660,
              placeholder: isDark ? imageSprSchema1DarkPlaceholder : imageSprSchema1LightPlaceholder,
              alt: "Configuration options for text.",
              sizes: `(max-width: ${media.mobile}px) 50vw, 25vw`
            }
          )
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(ThemeProvider, { theme: "dark", "data-invert": true, children: /* @__PURE__ */ jsx(Suspense, { children: /* @__PURE__ */ jsxs(
        Earth,
        {
          className: styles$e.earth,
          hideMeshes: useMemo(
            () => ["Atmosphere", "EarthPartial", "Chunk", "EarthFull"],
            []
          ),
          position: useMemo(() => [0, 0, 0], []),
          labels: useMemo(
            () => [
              {
                position: [0.54, 0.19, 0.18],
                text: "Pacific ring of fire",
                hidden: true
              },
              {
                position: [0.47, -0.38, 0.04],
                text: "Ruapehu",
                hidden: true
              },
              {
                position: [0.22, 0.44, -0.35],
                text: "St. Helens",
                hidden: true
              },
              {
                position: [0.16, -0.06, 0.58],
                text: "Krakatoa",
                hidden: true
              },
              {
                position: [0.11, 0.2, -0.56],
                text: "Parícutin",
                hidden: true
              },
              {
                position: [0.52, 0.2, -0.23],
                text: "Kīlauea",
                hidden: true
              },
              {
                position: [-0.24, 0.75, 0.24],
                text: "Mantle",
                delay: 800,
                hidden: true
              },
              {
                position: [-0.24, 0.55, 0.24],
                text: "Outer core",
                delay: 800,
                hidden: true
              },
              {
                position: [-0.24, 0.35, 0.24],
                text: "Inner core",
                delay: 800,
                hidden: true
              }
            ],
            []
          ),
          scale: 0.6,
          children: [
            /* @__PURE__ */ jsx(
              EarthSection,
              {
                scrim: true,
                animations: ["0:loop"],
                camera: [0, 0, 1.5],
                meshes: ["Atmosphere", "EarthFull"],
                children: /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsx(ProjectSectionContent, { children: /* @__PURE__ */ jsxs(ProjectTextRow, { center: true, children: [
                  /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "Next-generation learning experiences" }),
                  /* @__PURE__ */ jsx(ProjectSectionText, { children: "The flexibility of the product allowed for developers to create engaging interactive experiences as highly configurable plugins that could then be used and manipulated by learning designers." })
                ] }) }) })
              }
            ),
            /* @__PURE__ */ jsx(
              EarthSection,
              {
                animations: ["0:loop"],
                camera: [0, 0, 2.4],
                meshes: ["Atmosphere", "EarthFull"]
              }
            ),
            /* @__PURE__ */ jsx(
              EarthSection,
              {
                animations: ["0:loop"],
                camera: [1.14, -1.39, 0.94],
                meshes: ["Atmosphere", "EarthFull"],
                children: /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsx(ProjectSectionContent, { width: "xl", children: /* @__PURE__ */ jsxs(ProjectTextRow, { justify: "end", width: "s", children: [
                  /* @__PURE__ */ jsx(ProjectSectionHeading, { level: 4, as: "h3", children: "Bringing 3D into learning" }),
                  /* @__PURE__ */ jsx(ProjectSectionText, { children: "One really cool example is the 3D screen plugin. Learning designers can load any model into it and then configure camera positions to animate to for each section." })
                ] }) }) })
              }
            ),
            /* @__PURE__ */ jsx(
              EarthSection,
              {
                animations: ["0:loop"],
                camera: [1.17, 0.69, -1.47],
                meshes: ["Atmosphere", "EarthFull"],
                labels: [
                  "Pacific ring of fire",
                  "Ruapehu",
                  "St. Helens",
                  "Krakatoa",
                  "Parícutin",
                  "Kīlauea"
                ],
                children: /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsx(ProjectSectionContent, { width: "xl", children: /* @__PURE__ */ jsxs(ProjectTextRow, { justify: "start", width: "s", children: [
                  /* @__PURE__ */ jsx(ProjectSectionHeading, { level: 4, as: "h3", children: "Interactivity" }),
                  /* @__PURE__ */ jsx(ProjectSectionText, { children: "Learners can then be directed to specific parts of the model and shown labels. They’re also able to click and drag to orbit around and freely explore at any time." })
                ] }) }) })
              }
            ),
            /* @__PURE__ */ jsx(
              EarthSection,
              {
                animations: ["0:loop"],
                camera: [1.81, 0.51, 0.43],
                meshes: ["Atmosphere", "EarthFull"],
                labels: [
                  "Pacific ring of fire",
                  "Ruapehu",
                  "St. Helens",
                  "Krakatoa",
                  "Parícutin",
                  "Kīlauea"
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              EarthSection,
              {
                animations: ["0:loop"],
                camera: [0.37, 1.02, 1.84],
                meshes: ["EarthPartial", "Chunk"],
                labels: ["Mantle", "Outer core", "Inner core"],
                children: /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsx(ProjectSectionContent, { width: "xl", children: /* @__PURE__ */ jsxs(ProjectTextRow, { justify: "end", width: "s", children: [
                  /* @__PURE__ */ jsx(ProjectSectionHeading, { level: 4, as: "h3", children: "Animation" }),
                  /* @__PURE__ */ jsx(ProjectSectionText, { children: "Learning designers can pick an animation included in the model to play or loop for any section without having to use any complex animation tools." })
                ] }) }) })
              }
            ),
            /* @__PURE__ */ jsx(
              EarthSection,
              {
                scrimReverse: true,
                animations: ["0:loop"],
                camera: [0.37, 1.02, 1.84],
                meshes: ["Atmosphere", "EarthFull"]
              }
            )
          ]
        }
      ) }) }),
      /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsx(ProjectSectionContent, { children: /* @__PURE__ */ jsxs(ProjectTextRow, { center: true, centerMobile: true, noMargin: true, children: [
        /* @__PURE__ */ jsxs(
          "svg",
          {
            width: "141",
            height: "43",
            viewBox: "0 0 141 43",
            fill: "currentColor",
            style: { marginBottom: "2em" },
            children: [
              /* @__PURE__ */ jsx("path", { d: "M87.92 30.05a.3.3 0 0 0-.34-.18l-.04.02c-.42.08-.74.06-.97-.1-.32-.2-.47-.69-.47-1.47V21.3c0-2.75-1.66-4.14-4.94-4.14-2.93 0-5.23 1.37-5.23 3.12 0 .9.55 1.55 1.37 1.64a1.7 1.7 0 0 0 1.42-.56c.72-.75.63-1.64-.25-2.6a3.52 3.52 0 0 1 2.48-.85c1.7 0 2.43 1 2.43 3.33v1.78c-.4.12-.77.24-1.45.4a18.9 18.9 0 0 0-4.7 1.52 3.19 3.19 0 0 0-1.78 2.99c0 1.46.98 3.17 3.73 3.17 1.54 0 2.92-.72 4.33-2.26.12 1.6.74 2.2 2.24 2.2.72 0 1.3-.16 1.98-.49a.4.4 0 0 0 .2-.49Zm-4.54-2.15c-.33.46-1.42 1.83-2.78 1.83-1.84 0-2.23-1.27-2.23-2.34 0-1.75 1.37-2.57 5.01-3.46v3.97Zm35.23 3.25c-3.9 0-6.83-3-6.83-7 0-3.9 3.06-7.09 6.83-7.09 3.81 0 6.8 3.06 6.8 6.98 0 4.4-3.53 7.11-6.8 7.11Zm-.15-13.34c-1.68 0-3.61.72-3.61 6.28 0 4.25 1.27 6.31 3.88 6.31 2.5 0 3.61-1.94 3.61-6.3 0-4.23-1.27-6.29-3.88-6.29Zm-60.06-.5c0 3.24-.8 5.02-4.94 5.02h-2.2v-9.78h2.29c4.28 0 4.85 2.4 4.85 4.76Zm-7.14 11.01v-5.09h1.99c2.96 0 5.22-.61 6.7-1.83a5.06 5.06 0 0 0 1.88-4.03c0-4.65-4.55-5.63-8.37-5.63h.01-7.74a.32.32 0 0 0-.32.31v.03-.01c0 .16.1.3.25.36.69.25 2.56-.1 2.56 1.88v14.01c0 1.02-.46 1.74-2.55 1.94a.31.31 0 0 0-.3.3v.06c0 .17.15.3.33.3h8.27c.18 0 .32-.13.32-.3v-.05a.3.3 0 0 0-.3-.3c-2.27-.19-2.73-.88-2.73-1.95v-5.08 5.08ZM68.1 17.06c-3.6 0-6.53 3.21-6.53 7.17 0 4 2.75 6.9 6.53 6.9 3.18 0 4.73-1.87 5.62-3.28a.31.31 0 0 0-.09-.42l-.04-.03a.32.32 0 0 0-.44.07c-1.17 1.44-2.19 2.28-3.96 2.28-2.23 0-4.62-1.52-4.62-5.79v-.71h9.15c.03 0 .05-.02.05-.05v-.07a5.72 5.72 0 0 0-1.4-4.42 5.67 5.67 0 0 0-4.27-1.65Zm-3.47 5.29c.3-2.92 1.45-4.52 3.26-4.52.91 0 1.58.25 2.06.76.65.7.93 1.96.82 3.76h-6.14Zm41.39.15c-2.5-.69-3.48-1.39-3.48-2.5 0-1.26 1.01-2.17 2.4-2.17 1.65 0 2.36.77 4.1 3.64l.01.03.03.03h.25c.18 0 .32-.14.32-.32v-4.1c0-.03-.02-.05-.02-.05h-.34c-.1 0-.19.04-.25.11l-.55.66a6.64 6.64 0 0 0-2.98-.77c-2.87 0-4.88 1.75-4.88 4.25 0 2.36 1.58 3.24 4.31 3.97 2.66.71 3.6 1.46 3.6 2.85 0 1.54-1.51 2.23-2.59 2.23-2 0-2.84-.73-4.76-4.13l-.02-.04-.02-.02h-.26a.32.32 0 0 0-.32.31v4.6c0 .03.02.06.05.06h.32c.09 0 .17-.04.23-.1l.87-.86c1.03.63 2.56.96 3.56.96 1.5 0 2.72-.47 3.55-1.36a4.54 4.54 0 0 0 1.15-3.14c0-2.14-1.16-3.26-4.28-4.14Zm-15.14 6.78c0 .7-.18.94-1.33 1.01a.32.32 0 0 0-.3.31c0 .18.15.31.32.31h5.66a.3.3 0 0 0 .31-.3c0-.17-.13-.3-.3-.31-1.3-.07-1.65-.28-1.65-1.02v-8.2c.94-1.52 1.6-2.32 2.74-2.56-.06.2-.1.42-.1.6 0 1 .7 1.7 1.72 1.7.99 0 1.68-.7 1.68-1.7 0-.93-.6-2.03-2.28-2.03-1.37 0-2.69.78-3.82 2.64v-2.1a.39.39 0 0 0-.4-.39l-3.56.1a.3.3 0 0 0-.3.3v.05c0 .16.1.3.26.31 1.19.17 1.35.73 1.35 1.3v9.98Zm39.15-12.05c.08 0 .16.04.22.1.06.05.1.13.1.22v2.33s1.17-2.74 4.94-2.74h.04c2.35 0 3.7 1.48 3.7 4.06v8.06c0 .71.18.95 1.32 1.02.17 0 .3.14.3.31 0 .17-.14.31-.32.31h-5.08a.32.32 0 0 1-.03-.63c.92-.08 1.07-.3 1.07-1v-7.29c0-2.4-.7-3.33-2.47-3.33-1.2 0-2.19 1.03-2.8 1.9 0 0-.31.38-.65 1.12l.03 7.6c0 .7.15.92 1.05 1a.32.32 0 0 1-.03.63h-5.06a.32.32 0 0 1-.31-.31c0-.17.13-.3.3-.31 1.14-.08 1.32-.3 1.32-1.02v-9.95c0-.58-.16-1.14-1.36-1.31a.31.31 0 0 1-.26-.31v-.05c0-.17.13-.3.3-.31l3.68-.1Z" }),
              /* @__PURE__ */ jsx(
                "path",
                {
                  fillRule: "evenodd",
                  d: "M35.47 30.82c6.24-11.43 4.15-22.73-4.81-27.77C20.76-2.5 7.84.52 2.28 12.46c-3.84 8.2-2.1 22.48 6.82 27.6 8.92 5.1 20.9.81 26.37-9.23Zm-3.02-12.15c.3-2.3-.24-5.1-2-6.95l-.02-.02c-3.38-3.76-8.06-4-11.02-3.92a16.61 16.61 0 0 0-7.55 2.14c-1.68.86-3.2 2.35-3.81 3.08-.4.47-1.06 1.44-.7 2.31.29.73 1.4.68 1.81.37.22-.16.45-.37.7-.6l.72-.64c2.53-2.07 4.78-3.37 10-3.37 5.23 0 8.06 3.22 8.06 6.09 0 2.87-1.38 4.82-3.97 6.09a10.54 10.54 0 0 1-4.4 1.18c.13-2.78.2-5.41.2-5.41 0-.33.02-.65.03-.96.07-1.55.12-2.72-1.01-2.94-1.36-.27-3.86 0-3.9 1.52-.06-.23.25 12.51.31 12.77l.02.29c.03.32.15.6.35.83a1.38 1.38 0 0 0 .98.41c.28 0 .68-.05 1.09-.16.5-.15 1.02-.39 1.31-.77.15-.2.27-.38.34-.72.04-.24.13-1.72.15-2.15 2.75-.02 5.54-.53 7.67-1.8 2.68-1.62 4.29-4.04 4.64-6.67ZM18.23 32.41a2.12 2.12 0 0 1 1.69 1.99c0 .52-.22.99-.63 1.32-.35.28-.8.43-1.3.43h-.01c-.23 0-.46-.03-.69-.1-.39-.1-.7-.29-.9-.52-.19-.22-.31-.5-.37-.83-.08-.5.05-1.04.36-1.48a1.9 1.9 0 0 1 1.53-.84c.1 0 .22 0 .32.03Z"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "Project outcomes" }),
        /* @__PURE__ */ jsxs(ProjectSectionText, { children: [
          "Ultimately the project was successful after Smart Sparrow and the aero platform were",
          " ",
          /* @__PURE__ */ jsx(Link, { href: "https://www.prnewswire.com/news-releases/pearson-acquires-interactive-learning-technology-from-smart-sparrow-300987673.html", children: "acquired by Pearson in 2020" }),
          " ",
          "to become a foundation for their next generation learning platform."
        ] })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
const route4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: SmartSparrow,
  meta: meta$8
}, Symbol.toStringTag, { value: "Module" }));
const backgroundSprLarge = "/assets/oswald-bg-CnYjWCRb.jpg";
const sprTexturePlaceholder = "/assets/oswald-bg-dark-t9dcZlUz.jpg";
const imageSprLessonBuilderLightLarge = "/assets/oswald-bg-light-lACxjUqO.jpg";
lazy(() => import("./earth-CkVJQTtH.js").then((module) => ({ default: module.Earth })));
lazy(
  () => import("./earth-CkVJQTtH.js").then((module) => ({ default: module.EarthSection }))
);
const title$5 = "Bettering Web Accessibility";
const description$3 = "I worked as a Full Stack and iOS developer at Oswald Labs. My team built using the Oswald Labs Platform, globally recognized for accessible learning.";
const roles$1 = [
  "UX and UI Design",
  "Full Stack Development",
  "iOS Development"
];
const meta$7 = () => {
  return baseMeta({ title: title$5, description: description$3, prefix: "Projects" });
};
const ShravanApp = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";
  return /* @__PURE__ */ jsxs(Fragment$1, { children: [
    /* @__PURE__ */ jsxs(ProjectContainer, { children: [
      /* @__PURE__ */ jsx(
        ProjectBackground,
        {
          opacity: isDark ? 0.5 : 0.8,
          src: backgroundSpr,
          srcSet: `${backgroundSpr} 1080w, ${backgroundSprLarge} 2160w`,
          placeholder: backgroundSprPlaceholder
        }
      ),
      /* @__PURE__ */ jsx(
        ProjectHeader,
        {
          title: title$5,
          description: description$3,
          url: "https://oswaldlabs.com/",
          roles: roles$1
        }
      ),
      /* @__PURE__ */ jsx(ProjectSection, { padding: "top", children: /* @__PURE__ */ jsx(ProjectSectionContent, { children: /* @__PURE__ */ jsx(
        ProjectImage,
        {
          raised: true,
          srcSet: isDark ? `${sprTexturePlaceholder} 1280w, ${sprTexturePlaceholder} 2560w` : `${imageSprLessonBuilderLightLarge} 1280w, ${imageSprLessonBuilderLightLarge} 2560w`,
          width: 1280,
          height: 800,
          placeholder: isDark ? imageSprLessonBuilderDarkPlaceholder : imageSprLessonBuilderLightPlaceholder,
          sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`,
          alt: "The aero lesson builder app dragging an audio component into a screen about plant cells."
        },
        theme
      ) }) }),
      /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsxs(ProjectTextRow, { children: [
        /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "The problem" }),
        /* @__PURE__ */ jsx(ProjectSectionText, { children: "Oswald Labs identified a significant challenge: many digital platforms are not accessible to individuals with disabilities, such as visual impairments or dyslexia. This inaccessibility limits these users' ability to effectively engage with web content, mobile applications, and other digital services. To address this issue, Oswald Labs developed a suite of tools aimed at enhancing digital accessibility across various platforms. Their offerings include Agastya for websites and apps, Shravan for smartphones, and Valmiki for web browsers, each designed to break barriers and promote universal access." })
      ] }) }),
      /* @__PURE__ */ jsx(ProjectSection, { light: isDark, children: /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "More information coming soon..." }) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
const route5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ShravanApp,
  meta: meta$7
}, Symbol.toStringTag, { value: "Module" }));
const frontmatter = {
  "title": "The Day I Do Not Shower and Get a Lot Done",
  "abstract": "Same day every single week, but only until September probably",
  "date": "2024-07-07",
  "banner": "/static/hello-world-banner.jpg"
};
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    hr: "hr",
    img: "img",
    p: "p",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxs(Fragment$1, {
    children: [jsx(_components.h2, {
      id: "hello",
      children: "Hello"
    }), "\n", jsx(_components.p, {
      children: "Remember the feeling when you knocked a bunch of things off your to-do list? Maybe you had to make a dentist’s appointment, call about a charge on your card, or something else. Things that loomed over your head and need your undivided attention to get done, causing passive anxiety and making everyday life that much harder."
    }), "\n", jsx(_components.p, {
      children: "I have a dedicated day every week when I knock these out. Friday. I don’t have work, it’s a designated rest-day from the gym, and even though I have a lecture, I skip it. And my grades are fine, don’t worry about it."
    }), "\n", jsx(_components.p, {
      children: "A couple semesters ago I was holding down essentially three jobs: shift supervisor at IDP, manager at Peer Education, and barista at the cafe I still work at. Plus full-time studies. And some more stuff I’ll get into in a minute. It got to the point where I was home only for nine hours, to have dinner and sleep, 7 days a week. I had bad weeks, as you can imagine and eventually I did burn out. Which is okay, because I never intended it to be sustainable anyway."
    }), "\n", jsx(_components.p, {
      children: "Living through that experience taught me something very valuable about myself. Allow me to take you on a detour to explain."
    }), "\n", jsx(_components.h2, {
      id: "the-fraud",
      children: "The Fraud"
    }), "\n", jsx(_components.p, {
      children: "In September 2022, I was desperately looking for a new rental. I had been doing that for 3 months. Starting June 1st, I had essentially been homeless. The rental term for the house I was living in ended, and no one seemed to want to lease to students. At least not the international ones. Racism? Skepticism? Something else that ends in an ‘ism’? I’ll never know. But whatever it was, it was harrowing."
    }), "\n", jsx(_components.p, {
      children: "I don’t use that word lightly. It originates from a mind that remembers the uncertainty of where I’d be sleeping 18 hours after waking up. One that remembers not being able to take a shower when I needed it, only when I could. One that did not associate any place with the word ‘home’ in the hemisphere it lived in. (All of this was happening in Canada, but I have always had a home in India, where my mom and sister live right now.)"
    }), "\n", jsx(_components.p, {
      children: "For three months, I couch surfed, bunked with friends, and even slept on a carpeted floor a couple times. The back seats of my car became my closet and the rest of my stuff was scattered all over the city in my friends’ houses."
    }), "\n", jsx(_components.p, {
      children: "And the month following those three, I lived with my girlfriend in an Airbnb, which was diametrically opposite to both our workplaces and classes. But it was all we could find. Four other rooms in that Airbnb housed strangers, the neighbourhood included some stray druggies, and it was a slight step-up from not having a place altogether."
    }), "\n", jsx(_components.p, {
      children: "The four months of misery seemed to be coming to an end when we finally signed an agreement for the apartment I’m sitting in while I type this."
    }), "\n", jsx(_components.p, {
      children: "BUT!"
    }), "\n", jsx(_components.p, {
      children: "I burnt through money during that period. Like you wouldn’t believe. The first 3 months I wasn’t studying, but working 3 jobs. The last month, I started studying full-time along with those part-times, while living in an Airbnb 50 minutes away from all the places I needed to be at. Like I said though, I’d spent a lot of money, and had to make up for it somehow. So I powered through."
    }), "\n", jsx(_components.p, {
      children: "On October 1st, I moved into a new place. Just had to get some things set up, like opening a utilities account, changing my mailing address, and getting the internet activated. All the hardship was coming to an end."
    }), "\n", jsx(_components.p, {
      children: "Or so I thought."
    }), "\n", jsx(_components.p, {
      children: "The internet guy came the day after me moved. While activating my account, they notified me that there is already a Telus account active in my name. Someone else had internet set up in their house under my credit. Starting that point, I was caught up in an identity fraud case."
    }), "\n", jsx(_components.p, {
      children: "Three days after the activation, my internet was cut off. Because they were “investigating”. Two weeks without internet doesn’t sound so bad, but trust me it was brutal. I couldn’t do assignments at home, couldn’t unwind while having dinner and I had to ration the cellular data I had."
    }), "\n", jsx(_components.p, {
      children: "I stood outside for 2 hours during one of my Peer Education shifts to talk to the Telus people, begging them to clear this up so I can have working internet at my place. But the fraud department couldn’t be contacted. Only they could contact me."
    }), "\n", jsx(_components.p, {
      children: "Finally, I gave up, got the internet set up in my girlfriend’s name, and paid cancellation fees because I didn’t see the contract term through. I probably could have gotten out of it. But I just couldn’t deal with another series of phone calls and drama. I was tapped out."
    }), "\n", jsx(_components.h2, {
      id: "why-i-just-depressed-you",
      children: "Why I Just Depressed You"
    }), "\n", jsx(_components.p, {
      children: "I know it’s intense. Trust me, it’s still fresh in my mind, even though it was two years ago."
    }), "\n", jsx(_components.p, {
      children: "But it’s worth documenting. I’ve journaled and written parts of it down, but never in depth. Even this wasn’t all of it; I just didn’t want to ruin your mood. More so than I already did."
    }), "\n", jsx(_components.p, {
      children: "Coming back to the original point. I had a backlog of things that needed to be done once that year ended. Seven months worth of pile-up probably took me another seven to fully clear out. All because I figured out how to get extended bouts of time when I wasn’t disturbed, needed elsewhere, or had something pressing to attend to."
    }), "\n", jsx(_components.p, {
      children: "Now I try to build my weekly schedule in a way where I have one day free. I should be able to do whatever I need to keep functioning optimally the other 6 days. Fridays I deal with rebooking tickets, Costco hauls, calling the CRA, and whatever else comes up. I have no set schedule on Friday. As the title suggests, I don’t even shower most Fridays. The only objective is to clear as many things as I can from my to-do in order of priority."
    }), "\n", jsx(_components.p, {
      children: "And the stuff that’s left? There’s always another Friday just six days later."
    }), "\n", jsx(_components.p, {
      children: "(I should mention though, I have an assignment due every Friday, which I usually start on that day. It does eat up a couple hours, but this day is the closest to my ideal free day this semester)"
    }), "\n", jsx(_components.p, {
      children: "And I’m sure it will change next semester. Work and school schedule will be different, and I might not even get to have a whole day like Friday. That’s okay. Two half days work too. Or four quarter days. You get the idea."
    }), "\n", jsx(_components.p, {
      children: "Which leads me to the message I have for you. Figure out what’s looming over your head, make time to do it and actually get it done. You might not need a whole day; an hour might just do it. Or you need 3 consecutive days every month. Whatever your ideal time block is, figure it out. Then realistically figure out a chunk of time that is to close to it and you can afford to assign to something like this."
    }), "\n", jsx(_components.hr, {}), "\n", jsx(_components.p, {
      children: "June 28th 2024—a Friday—was the day I took this picture:"
    }), "\n", jsx(_components.p, {
      children: jsx(_components.img, {
        src: "/static/articles/no-shower/list.webp",
        alt: "Grocery list",
        width: "1290",
        height: "1290"
      })
    })]
  });
}
function MDXContent(props = {}) {
  const { wrapper: MDXLayout } = {
    ...useMDXComponents(),
    ...props.components
  };
  return MDXLayout ? jsx(MDXLayout, {
    ...props,
    children: jsx(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
const route6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: MDXContent,
  frontmatter
}, Symbol.toStringTag, { value: "Module" }));
const __variableDynamicImportRuntimeHelper = (glob, path2, segs) => {
  const v = glob[path2];
  if (v) {
    return typeof v === "function" ? v() : Promise.resolve(v);
  }
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(
      reject.bind(
        null,
        new Error(
          "Unknown variable dynamic import: " + path2 + (path2.split("/").length !== segs ? ". Note that variables only represent file names one level deep." : "")
        )
      )
    );
  });
};
function formatTimecode(time) {
  const hours = time / 1e3 / 60 / 60;
  const h = Math.floor(hours);
  const m = Math.floor((hours - h) * 60);
  const s = Math.floor(((hours - h) * 60 - m) * 60);
  const c = Math.floor((((hours - h) * 60 - m) * 60 - s) * 1e3 / 10);
  return `${zeroPrefix(h)}:${zeroPrefix(m)}:${zeroPrefix(s)}:${zeroPrefix(c)}`;
}
function zeroPrefix(value2) {
  return value2 < 10 ? `0${value2}` : `${value2}`;
}
function readingTime(text2) {
  const wpm = 225;
  const words = text2.trim().split(/\s+/).length;
  const time = words / wpm;
  return time * 1e3 * 60;
}
async function getPosts() {
  const modules = /* @__PURE__ */ Object.assign({ "../articles.creative-itch.mdx": route2, "../articles.no-shower.mdx": route6, "../articles.power-stories.mdx": route3 });
  const build = await Promise.resolve().then(() => serverBuild);
  const posts = await Promise.all(
    Object.entries(modules).map(async ([file, post2]) => {
      let id = file.replace("../", "routes/").replace(/\.mdx$/, "");
      let slug = build.routes[id].path;
      if (slug === void 0) throw new Error(`No route for ${id}`);
      const text2 = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../articles.creative-itch.mdx": () => import("./articles.creative-itch-DmpMF9s8.js"), "../articles.no-shower.mdx": () => import("./articles.no-shower-B_e-9GAU.js"), "../articles.power-stories.mdx": () => import("./articles.power-stories-BLzVAdFC.js") }), `../articles.${slug}.mdx`, 2);
      const readTime = readingTime(text2.default);
      const timecode2 = formatTimecode(readTime);
      return {
        slug,
        timecode: timecode2,
        frontmatter: post2.frontmatter
      };
    })
  );
  return sortBy(posts, (post2) => post2.frontmatter.date, "desc");
}
function sortBy(arr, key, dir = "asc") {
  return arr.sort((a, b) => {
    const res = compare(key(a), key(b));
    return dir === "asc" ? res : -res;
  });
}
function compare(a, b) {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
}
const divider = "_divider_ucnqf_2";
const line$1 = "_line_ucnqf_8";
const notch = "_notch_ucnqf_30";
const styles$d = {
  divider,
  line: line$1,
  notch
};
const Divider = ({
  lineWidth,
  lineHeight,
  notchWidth,
  notchHeight,
  collapseDelay,
  collapsed,
  className,
  style,
  ...rest
}) => /* @__PURE__ */ jsxs(
  "div",
  {
    className: classes(styles$d.divider, className),
    style: cssProps(
      {
        lineWidth,
        lineHeight,
        notchWidth,
        notchHeight,
        collapseDelay: numToMs(collapseDelay)
      },
      style
    ),
    ...rest,
    children: [
      /* @__PURE__ */ jsx("div", { className: styles$d.line, "data-collapsed": collapsed }),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: styles$d.notch,
          "data-collapsed": collapsed,
          style: cssProps({ collapseDelay: numToMs(collapseDelay + 160) })
        }
      )
    ]
  }
);
Divider.defaultProps = {
  lineWidth: "100%",
  lineHeight: "2px",
  notchWidth: "90px",
  notchHeight: "10px",
  collapsed: false,
  collapseDelay: 0
};
function formatDate(date2) {
  return new Date(date2).toLocaleDateString("default", {
    year: "numeric",
    month: "long",
    day: "2-digit"
  });
}
const articles = "_articles_nr520_3";
const grid$1 = "_grid_nr520_15";
const header$1 = "_header_nr520_53";
const heading$1 = "_heading_nr520_71";
const list$2 = "_list_nr520_76";
const skeleton = "_skeleton_nr520_85";
const skeletonBone = "_skeletonBone_nr520_94";
const post$1 = "_post_nr520_98";
const postLabel = "_postLabel_nr520_148";
const postTag = "_postTag_nr520_149";
const postLink = "_postLink_nr520_223";
const postDate = "_postDate_nr520_280";
const postImage = "_postImage_nr520_290";
const postDetails = "_postDetails_nr520_340";
const postFooter = "_postFooter_nr520_356";
const timecode$1 = "_timecode_nr520_370";
const barcode = "_barcode_nr520_383";
const styles$c = {
  articles,
  grid: grid$1,
  header: header$1,
  heading: heading$1,
  list: list$2,
  skeleton,
  skeletonBone,
  post: post$1,
  postLabel,
  postTag,
  postLink,
  postDate,
  postImage,
  postDetails,
  postFooter,
  timecode: timecode$1,
  barcode
};
function ArticlesPost({ slug, frontmatter: frontmatter2, timecode: timecode2, index: index2 }) {
  const [hovered, setHovered] = useState(false);
  const [dateTime, setDateTime] = useState(null);
  const reduceMotion = useReducedMotion();
  const { title: title2, abstract, date: date2, featured, banner: banner2 } = frontmatter2;
  useEffect(() => {
    setDateTime(formatDate(date2));
  }, [date2, dateTime]);
  const handleMouseEnter = () => {
    setHovered(true);
  };
  const handleMouseLeave = () => {
    setHovered(false);
  };
  return /* @__PURE__ */ jsxs(
    "article",
    {
      className: styles$c.post,
      "data-featured": !!featured,
      style: index2 !== void 0 ? cssProps({ delay: index2 * 100 + 200 }) : void 0,
      children: [
        featured && /* @__PURE__ */ jsx(Text, { className: styles$c.postLabel, size: "s", children: "Featured" }),
        featured && !!banner2 && /* @__PURE__ */ jsx("div", { className: styles$c.postImage, children: /* @__PURE__ */ jsx(
          Image$1,
          {
            noPauseButton: true,
            play: !reduceMotion ? hovered : void 0,
            src: banner2,
            placeholder: `${banner2.split(".")[0]}-placeholder.jpg`,
            alt: "",
            role: "presentation"
          }
        ) }),
        /* @__PURE__ */ jsx(
          Link$1,
          {
            unstable_viewTransition: true,
            prefetch: "intent",
            to: `/articles/${slug}`,
            className: styles$c.postLink,
            onMouseEnter: handleMouseEnter,
            onMouseLeave: handleMouseLeave,
            children: /* @__PURE__ */ jsxs("div", { className: styles$c.postDetails, children: [
              /* @__PURE__ */ jsxs("div", { "aria-hidden": true, className: styles$c.postDate, children: [
                /* @__PURE__ */ jsx(Divider, { notchWidth: "64px", notchHeight: "8px" }),
                dateTime
              ] }),
              /* @__PURE__ */ jsx(Heading, { as: "h2", level: featured ? 2 : 4, children: title2 }),
              /* @__PURE__ */ jsx(Text, { size: featured ? "l" : "s", as: "p", children: abstract }),
              /* @__PURE__ */ jsxs("div", { className: styles$c.postFooter, children: [
                /* @__PURE__ */ jsx(Button, { secondary: true, iconHoverShift: true, icon: "chevron-right", as: "div", children: "Read article" }),
                /* @__PURE__ */ jsx(Text, { className: styles$c.timecode, size: "s", children: timecode2 })
              ] })
            ] })
          }
        ),
        featured && /* @__PURE__ */ jsx(Text, { "aria-hidden": true, className: styles$c.postTag, size: "s", children: "477" })
      ]
    }
  );
}
function SkeletonPost({ index: index2 }) {
  return /* @__PURE__ */ jsx(
    "article",
    {
      "aria-hidden": "true",
      className: classes(styles$c.post, styles$c.skeleton),
      "data-featured": "false",
      style: index2 !== void 0 ? cssProps({ delay: index2 * 100 + 200 }) : void 0,
      children: /* @__PURE__ */ jsx("div", { className: styles$c.postLink, children: /* @__PURE__ */ jsxs("div", { className: styles$c.postDetails, children: [
        /* @__PURE__ */ jsxs("div", { "aria-hidden": true, className: styles$c.postDate, children: [
          /* @__PURE__ */ jsx(Divider, { notchWidth: "64px", notchHeight: "8px" }),
          "Coming soon..."
        ] }),
        /* @__PURE__ */ jsx(
          Heading,
          {
            className: styles$c.skeletonBone,
            as: "h2",
            level: 4,
            style: { height: 24, width: "70%" }
          }
        ),
        /* @__PURE__ */ jsx(
          Text,
          {
            className: styles$c.skeletonBone,
            size: "s",
            as: "p",
            style: { height: 90, width: "100%" }
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: styles$c.postFooter, children: [
          /* @__PURE__ */ jsx(Button, { secondary: true, iconHoverShift: true, icon: "chevron-right", as: "div", children: "Read more" }),
          /* @__PURE__ */ jsx(Text, { className: styles$c.timecode, size: "s", children: "00:00:00:00" })
        ] })
      ] }) })
    }
  );
}
function Articles$1() {
  const { posts, featured } = useLoaderData();
  const { width } = useWindowSize();
  const singleColumnWidth = 1190;
  const isSingleColumn = width <= singleColumnWidth;
  const postsHeader = /* @__PURE__ */ jsxs("header", { className: styles$c.header, children: [
    /* @__PURE__ */ jsx(Heading, { className: styles$c.heading, level: 5, as: "h1", children: /* @__PURE__ */ jsx(DecoderText, { text: "Latest articles" }) }),
    /* @__PURE__ */ jsx(Barcode, { className: styles$c.barcode })
  ] });
  const postList = /* @__PURE__ */ jsxs("div", { className: styles$c.list, children: [
    !isSingleColumn && postsHeader,
    posts.map(({ slug, ...post2 }, index2) => /* @__PURE__ */ jsx(ArticlesPost, { slug, index: index2, ...post2 }, slug)),
    Array(2).fill().map((skeleton2, index2) => /* @__PURE__ */ jsx(SkeletonPost, { index: index2 }, index2))
  ] });
  const featuredPost = /* @__PURE__ */ jsx(ArticlesPost, { ...featured });
  return /* @__PURE__ */ jsxs("article", { className: styles$c.articles, children: [
    /* @__PURE__ */ jsxs(Section, { className: styles$c.content, children: [
      !isSingleColumn && /* @__PURE__ */ jsxs("div", { className: styles$c.grid, children: [
        postList,
        featuredPost
      ] }),
      isSingleColumn && /* @__PURE__ */ jsxs("div", { className: styles$c.grid, children: [
        postsHeader,
        featuredPost,
        postList
      ] })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
function Barcode({ className }) {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      className,
      width: "153",
      height: "20",
      fill: "currentColor",
      viewBox: "0 0 153 20",
      children: /* @__PURE__ */ jsx(
        "path",
        {
          fillOpacity: ".6",
          d: "M153 0v20h-2V0h2Zm-4 0v20h-4V0h4Zm-6 0v20h-2V0h2Zm-4 4v3h-2V4h2Zm-5 0V0h3v4h-3Zm-2 0h2v6h-2V4Zm0 0h-2V0h2v4Zm-4-4v4h-4v5h-2v4h-5V9h3V6h-5V0h13Zm-11 13v3h-2v-3h2Zm-4-13v6h-2v4h2v4h-2v2h2v4h-4V0h4Zm-6 4V0h-2v4h2Zm-1 6V7h-4V4h-2V0h-2v4h-2V0H86v4h-2v3h-2v2h-2v4h6v3h-2v4h6v-4h-2v-3h-2V9h-2V7h4V4h3v9h2v7h7v-4h-5v-3h-2V9h2V7h3v3h2v4h6v-4ZM74 7v3h-2v2h2v8h-4V0h8v5h-3V4h-3v3h2Zm28 13h4v-4h-4v4Zm28-6v-4h-2v6h2v4h2v-6h-2Zm9 2v-6h-2v6h-2v4h4v-4Zm-12 4v-4h-4v4h4ZM0 20h2V0H0v20Zm4 0h4V0H4v20Zm6 0h2V0h-2v20Zm5 0h7V0h-7v20Zm12 0h-3V0h3v20Zm5 0h3v-4h5v-6h-5V6h7V3h3V0h-7v3h-3V0h-3v20ZM52 3v3h-3v3h-4V6h1V3h6Zm23 13h6v4h-6v-4Zm-29-6v3h3v-3h3v3h-2v6h-3v-3h-2v-3h-2v-3h3Zm8 6v3h-2v-3h2Zm3 0v3h2v-3h2v-3h-2v3h-2Zm0 0v-6h-3v6h3Zm4-7V6h2V0h-2v6h-2v3h2Zm5-3v3h-2V6h2Zm2 0h-2V3h2v3Zm-9-3V0h-2v3h2Z"
        }
      )
    }
  );
}
async function loader$3() {
  const allPosts = await getPosts();
  const featured = allPosts.filter((post2) => post2.frontmatter.featured)[0];
  const posts = allPosts.filter((post2) => (featured == null ? void 0 : featured.slug) !== post2.slug);
  return json({ posts, featured });
}
function meta$6() {
  return baseMeta({
    title: "Articles",
    description: "A collection of technical design and development articles. May contain incoherent ramblings."
  });
}
const route7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Articles$1,
  loader: loader$3,
  meta: meta$6
}, Symbol.toStringTag, { value: "Module" }));
const sliceAnnotationLarge = "/assets/slice-annotation-large-BMgELH_L.png";
const sliceAnnotationPlaceholder = "/assets/slice-annotation-placeholder-CCGEuhhx.png";
const sliceAnnotation = "/assets/slice-annotation-BYMGWVwS.png";
const sliceAppLarge = "/assets/slice-app-large-CHKPTcWm.jpg";
const sliceAppPlaceholder = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAUFBQUFBQUGBgUICAcICAsKCQkKCxEMDQwNDBEaEBMQEBMQGhcbFhUWGxcpIBwcICkvJyUnLzkzMzlHREddXX0BBQUFBQUFBQYGBQgIBwgICwoJCQoLEQwNDA0MERoQExAQExAaFxsWFRYbFykgHBwgKS8nJScvOTMzOUdER11dff/CABEIACgAQAMBIgACEQEDEQH/xAAcAAADAQACAwAAAAAAAAAAAAAFBgcEAAMBAgj/2gAIAQEAAAAAjRqhuHBeLxDmu2U7Mhq+j56ZK9RMKSA1Qw3Q3DEA6NEaOPh4aJ7Pf//EABkBAAIDAQAAAAAAAAAAAAAAAAMEAAECBf/aAAgBAhAAAADUKVZpm+W+0H//xAAXAQEAAwAAAAAAAAAAAAAAAAAEAQMF/9oACAEDEAAAAIm28qUMwtNbf//EACIQAAICAQQDAAMAAAAAAAAAAAECAAMEBRESIQYiMRUyQv/aAAgBAQABPwBDvMGgWMJpeii4L6ynxhWUeks8ZVR+ku0ZK9/WHAQH5PxqN/MqbuaQQXWePKhCTGrq4D5M0VKpmpWopaPkjlKbwdpWZplvF1mg5wUJ3KNUAQe0zdU3B9pn5nMnuNaS0ot2iGYLEMJpWQyhe5VmsE+zKzid+5dklie4LN4lm0T7MBd2E09SAs5ELMmw9xnO8Ro1nET/xAAaEQEAAwEBAQAAAAAAAAAAAAAAAQIDERMx/9oACAECAQE/AHFKdeKFM4lXPiYV+skNH//EABwRAAIDAAMBAAAAAAAAAAAAAAABAgMREhMxMv/aAAgBAwEBPwAwhDkdJFaxVaiqrBVaQ+kVeEEimK0//9k=";
const sliceApp = "/assets/slice-app-PoRtkkeP.jpg";
const sliceBackgroundBarLarge = "/assets/slice-background-bar-large-CYHGpgXa.jpg";
const sliceBackgroundBarPlaceholder = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAQDAwMDAgQDAwMEBAQFBgoGBgUFBgwICQcKDgwPDg4MDQ0PERYTDxAVEQ0NExoTFRcYGRkZDxIbHRsYHRYYGRj/2wBDAQQEBAYFBgsGBgsYEA0QGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBj/wgARCABPACwDAREAAhEBAxEB/8QAGwAAAwEAAwEAAAAAAAAAAAAAAwQFBgECBwD/xAAaAQADAQEBAQAAAAAAAAAAAAABAgMEAAUG/9oADAMBAAIQAxAAAACL730G0hIYHn2inTiJuWej6JekpwuKs/PCbTUcCmk/VsmXNU7HXvJrcyi1OPoOeOfoZLtArotzTXRjDo0RuvTlkL+lXXNdmkdqD4GBTo9CS/T0Ku5zIB5kaXJd0HLVjyYgaJp/SAGNhvMtLmorOawzjfTLNjKfPrTg6FXa3//EACQQAAICAgICAgIDAAAAAAAAAAECAAMEBRESEyEGFCIjMUFR/9oACAEBAAE/AKdw5vDFppvkYFIRnm7NWdUWHuZyHFuJEr27BCnaPkeRy0ov5lGe9R9NMDam/wDWzTYak5WOXUTLwLMe8ggxFPSY1h6w2mam5vsiaahMnA/P/J8l1lVbsygRk6sRMfHISfWZj6E0+vs8oYiYWeMDD4J49TcbUZbkAxMMOvaUETW4yXOOZjYVNGP29TbZbclUMr7vby0xlAxxK6yJrrWrePsm8HXmXP5nJMC9PcXOKL1iY/MxcXgTIBUROe0ChljUDsZV1ESxAssQWQ47f0IK3URi3aWJ0E8rAyq6YFCX/wAyzVVePmPrK+5gzPIse8Ayi3s0xdj9aH5AWTj3DtiTP//EABsRAAMAAwEBAAAAAAAAAAAAAAABAhAREiAh/9oACAECAQE/AOSoI+COcuRyKtCfikUQxZqhzsmdG8NjZK8M0LGjZVCoTz0MSF45NDOhUMWGjg5P/8QAHBEAAwADAQEBAAAAAAAAAAAAAAECAxESEBME/9oACAEDAQE/AOSpEiUcmvNDR1oVeNGikWSJHQ2VXiWjo0V4kPyijQpOT5jbFLZOE+Y1oTQ/zCxaKtI+pdnY2jLRkodaPodEvaMxRSFAsR//2Q==";
const sliceBackgroundBar = "/assets/slice-background-bar-DUyfyeHo.jpg";
const sliceBackgroundLarge = "/assets/slice-background-large-Dnpu52lB.jpg";
const sliceBackgroundPlaceholder = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAUFBQUFBQUGBgUICAcICAsKCQkKCxEMDQwNDBEaEBMQEBMQGhcbFhUWGxcpIBwcICkvJyUnLzkzMzlHREddXX0BBQUFBQUFBQYGBQgIBwgICwoJCQoLEQwNDA0MERoQExAQExAaFxsWFRYbFykgHBwgKS8nJScvOTMzOUdER11dff/CABEIABQAIAMBIgACEQEDEQH/xAAZAAACAwEAAAAAAAAAAAAAAAADBQABBAL/2gAIAQEAAAAAS2TWvNO0h95v/8QAFgEBAQEAAAAAAAAAAAAAAAAAAwIF/9oACAECEAAAANmVL//EABcBAAMBAAAAAAAAAAAAAAAAAAADBAX/2gAIAQMQAAAA22Fn/8QAHRAAAgIDAAMAAAAAAAAAAAAAAAECAwQRIRMiMf/aAAgBAQABPwDHxpTWydTgylbZPSSHmeJ6Qr42x2yPOoi3N6Ll7lXwrIcfD//EABgRAAIDAAAAAAAAAAAAAAAAAAABECFB/9oACAECAQE/ALjBn//EABoRAQADAAMAAAAAAAAAAAAAAAEAAhEDMTP/2gAIAQMBAT8AB3ZbjXLEOiU82f/Z";
const sliceBackground = "/assets/slice-background-5195om16.jpg";
const sliceIrlPlaceholder = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAZAC8DAREAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAwUGBAf/xAAZAQACAwEAAAAAAAAAAAAAAAACAwABBAX/2gAMAwEAAhADEAAAAImPTmugcIlNVBYmLYBaoxqLJulrSRXpRD1QZLJLrcbz7c2RoclzMNV9Qy6HLRlergJJ/8QAIRAAAQQCAQUBAAAAAAAAAAAAAQACAwQFERIGFCEzNBD/2gAIAQEAAT8Au3JXxb2u9c5/ErGQRzxK9juTzxCsUJIhvSrVnyu0QrJAr6UMQdKsW9sTAFXqG3KNNUvTTJIfITunmwP8BT2TIodmQALBYl8zQ5ypUYakPJWsu1hLQu8E35U97V098jVP85Vz2lVV/8QAGxEAAwADAQEAAAAAAAAAAAAAAAECAxAREjH/2gAIAQIBAT8AWpRQmI4JDfBvpKFO7oheiMJ45plmAn4M/8QAHBEAAwACAwEAAAAAAAAAAAAAAAECEBEDEiAh/9oACAEDAQE/AGzeJWxz4RI6N5hFfCrO2YOUYj//2Q==";
const sliceIrl = "/assets/slice-irl-Bok-9coc.jpg";
const sliceSidebarAnnotationsLarge = "/assets/slice-sidebar-annotations-large-CrYJmPog.png";
const sliceSidebarAnnotationsPlaceholder = "/assets/slice-sidebar-annotations-placeholder-Bewc5d-7.png";
const sliceSidebarAnnotations = "/assets/slice-sidebar-annotations-CisIo7UR.png";
const sliceSidebarLayersLarge = "/assets/slice-sidebar-layers-large-CqnA6hBc.png";
const sliceSidebarLayersPlaceholder = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAA8CAMAAABCfyqQAAAAxlBMVEUwMDMxMTQ2NjkzMzY4ODs0NDc8PD5CQkU6Oj01NTg/P0I+PkA9PUBEREdFRUdBQUNAQENJSUwyLzBHSEtMTE9HR0k3NDU0MjRIRUU2MC5FRklFQkM8ODhPT1E5Nzc9Vl9RUVRCPDw/ZnM+TVRASk9BRko9QUVFQEBCP0A8OTtFmbJCgpVEdoVAWmM6Rkw2QUZFpsJFjaNFh5s9anhEYms9X2tFVFo4TFRHTVE0O0AzNztJn7hJlKpBfI4/eYtCbnw+Ulo6UVogc3mqAAACmElEQVQ4y+WUW3PaMBCFJVuWZEuWpRiDAwFSKARyvzRNm97//5/qWdmTDAzJQ197XhB8Wu3u2R2YKkmqVKp04yaEL58/Xd59u709v/91xSpFqkiqbEJN8P77+fndj8WcGVOQDFRUypWr5dXi8uLi4ufD1ZIJLaO01tIW3q+vl/PHxcPicf50wxJQY22E8ZH1avl7Pv/zdH3zleVCeuQsEGwov1+vPkJAzxlLtHd13ZTeeFUHHMpxXdertX5OOUvMeHB6Oh04NQ6nOIQwgGqvE4K2xNfQqErV0+k0OOVc6ZQVOedMWFeHMFa+UM10MGhU15kUOSJzYXxVeSul9XCqkALSWogk4yyjXqgTaklK/AYlCcGUcaJkQn895VCa5Qk9y3meSCSxxHMgBhHGkaAwKA+FdEVE2AmHTFhVVt5YjRoIQj0jaAALK0WEO+Jpoo1BwgMsVoRCkxwJCe6Hoq+864Hti/oCOYQAX3SIpaSDOFoFZVm8wHZMQDVaw/d4AbhnXXmj2XazqWiAfaORZRCsHG43bRucg31WJGkHY6YM8OSsbVv43kNOFeYCylPAD5NJO1Hee0POQ4DJCzwjCHkZh91H4tzBxrlx3ShDFqcpQa3xDKoFbSfYZaeMJJqhOyEllpONELqhVXVYPWsl1gFtIGeMzGZbW6mKVkFqSbHwCq1QQTzFG0VVFEBCgEZInmYEc0CFtUYMQU0VEyVIoVZV2HWC1iDpC2R8NJxJpUplYT6wiJEZIGdHR8cjQNc48gCF9Cnpk+DxzLgwCGWBoDhWNAqhWrDj4YmpSlgAa1+9xc0YORpuZb/wcSr9yBAJjUa4Ct8I7Qw70rhjrwu2t417q9ez/1H8HUR6k71D+380/hbMif5D5IGcfwHADy8o/7eiGAAAAABJRU5ErkJggg==";
const sliceSidebarLayers = "/assets/slice-sidebar-layers-jDBpAmZU.png";
const sliceSlidesLarge = "/assets/slice-slides-large--yrOgN_x.jpg";
const sliceSlidesPlaceholder = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAoAEADAREAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAgQBAwUG/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAEDAgQF/9oADAMBAAIQAxAAAACwM4raZJhGZEsVgO5z2cq+7o358vKdkuGjLcN1R62nHXpwk85e7UptZbSwpDtSdLuzznc4LFgNZ9qtGNSPLXijGpyLGXSYDZvKP//EACMQAAEEAgEEAwEAAAAAAAAAAAIAAQMEBREGEiExQQcTFiL/2gAIAQEAAT8Al+P5kfEWCX69r8Q6bgqHgRGvwJqfihwvpQcQOyWlyHkX1kUMSr2p5LjGW0EdmZmcUVe7Ht++kOVmhMg9qPMWzsOqEz25iaQVXnOLLNEw9tq7Rglum5l7VPGUndi23ZNbp1R02n0mydawDg2tujwTHIUu/KhxAQG5Eq0taqbvpVmqT22kZm6lkMLKM5yMgp2I/G2UeKszuocDJE/Up2mh/l3QxyTA6Ku/WTEsfG0dkVaz9UZnidSWoJwYgdmUOTrxhpHm4RV7kFQi0qWcrE3Q3tTuDy+fKoUOsxNnX//EAB0RAQEBAQABBQAAAAAAAAAAAAEAEgIQAxEhMEH/2gAIAQIBAT8A+ss2SS/LUMcLYS3PVlvZsxHYE+p5JPiOGeGw2PJ1Pd//xAAeEQADAQEAAgMBAAAAAAAAAAAAAQIRAwQSEyExEP/aAAgBAwEBPwAXKs09GejM/k82yubRw8fftlQlJWI+j40z40UvVFLY0h0pLu0P2ZjFZrY4poapI5+QmsLuWiqWnuRjNSFRdaiebI1fpUNsXNkcaL41+ky8LrD/2Q==";
const sliceSlides = "/assets/slice-slides-me7j0Hig.jpg";
const columns = "_columns_sh3b4_1";
const grid = "_grid_sh3b4_5";
const gridImage = "_gridImage_sh3b4_16";
const gridBackground = "_gridBackground_sh3b4_28";
const gridForeground = "_gridForeground_sh3b4_41";
const gridText = "_gridText_sh3b4_57";
const sidebarImages = "_sidebarImages_sh3b4_69";
const sidebarImage = "_sidebarImage_sh3b4_69";
const styles$b = {
  columns,
  grid,
  gridImage,
  gridBackground,
  gridForeground,
  gridText,
  sidebarImages,
  sidebarImage
};
const title$4 = "Biomedical image collaboration";
const description$2 = "This project involved designing a better way for biomedical educators and learners to annotate digital slides together.";
const roles = ["User Research", "UX Design", "Interface Design"];
const meta$5 = () => {
  return baseMeta({ title: title$4, description: description$2, prefix: "Projects" });
};
const Slice = () => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(ProjectContainer, { className: styles$b.slice, children: [
      /* @__PURE__ */ jsx(
        ProjectBackground,
        {
          src: sliceBackground,
          srcSet: `${sliceBackground} 1280w, ${sliceBackgroundLarge} 2560w`,
          width: 1280,
          height: 800,
          placeholder: sliceBackgroundPlaceholder,
          opacity: 0.8
        }
      ),
      /* @__PURE__ */ jsx(
        ProjectHeader,
        {
          title: title$4,
          description: description$2,
          url: "https://www.best.edu.au/s/q2yjjvl7?data=8%404!9%4020303!10%40-15087&version=1",
          roles
        }
      ),
      /* @__PURE__ */ jsx(ProjectSection, { padding: "top", children: /* @__PURE__ */ jsx(ProjectSectionContent, { children: /* @__PURE__ */ jsx(
        ProjectImage,
        {
          srcSet: `${sliceApp} 800w, ${sliceAppLarge} 1920w`,
          width: 800,
          height: 500,
          placeholder: sliceAppPlaceholder,
          alt: "The Slice web application showing a selected user annotation.",
          sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`
        }
      ) }) }),
      /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsxs(ProjectSectionColumns, { centered: true, className: styles$b.columns, children: [
        /* @__PURE__ */ jsxs("div", { className: styles$b.imagesText, children: [
          /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "Bringing it together" }),
          /* @__PURE__ */ jsx(ProjectSectionText, { children: "Teachers needed a better way to create collaborative group activities by annotating slides on Slice. Before starting this project, a layer could only be annotated by a single user, making it difficult for learners to work together." }),
          /* @__PURE__ */ jsx(ProjectSectionText, { children: "Our solution was to allow users to be invited to a layer, where they can see others’ annotations and make their own." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: styles$b.sidebarImages, children: [
          /* @__PURE__ */ jsx(
            Image$1,
            {
              className: styles$b.sidebarImage,
              srcSet: `${sliceSidebarLayers} 350w, ${sliceSidebarLayersLarge} 700w`,
              width: 350,
              height: 750,
              placeholder: sliceSidebarLayersPlaceholder,
              alt: "The layers sidebar design, now with user profiles.",
              sizes: `(max-width: ${media.mobile}px) 200px, 343px`
            }
          ),
          /* @__PURE__ */ jsx(
            Image$1,
            {
              className: styles$b.sidebarImage,
              srcSet: `${sliceSidebarAnnotations} 350w, ${sliceSidebarAnnotationsLarge} 700w`,
              width: 350,
              height: 750,
              placeholder: sliceSidebarAnnotationsPlaceholder,
              alt: "Multiple user annotations on a shared layer.",
              sizes: `(max-width: ${media.mobile}px) 200px, 343px`
            }
          )
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(ProjectSection, { light: true, children: /* @__PURE__ */ jsxs(ProjectSectionContent, { children: [
        /* @__PURE__ */ jsxs(ProjectTextRow, { children: [
          /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "Improving the experience" }),
          /* @__PURE__ */ jsx(ProjectSectionText, { children: "A problem we heard about often form users was that it was difficult to find images they had previously seen or worked on. To solve this we added a new tab that lists all previously annotated slides. In addition, we added the ability to favorite slides, so if users find an interesting slide they want to annotate later, they can easily save it to their account." })
        ] }),
        /* @__PURE__ */ jsx(
          Image$1,
          {
            srcSet: `${sliceSlides} 800w, ${sliceSlidesLarge} 1920w`,
            width: 800,
            height: 500,
            placeholder: sliceSlidesPlaceholder,
            alt: "The new My Slides tab in slice, showing annotated and favorited slides.",
            sizes: `(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`
          }
        )
      ] }) }),
      /* @__PURE__ */ jsx(ProjectSection, { padding: "top", children: /* @__PURE__ */ jsxs(ProjectSectionContent, { className: styles$b.grid, children: [
        /* @__PURE__ */ jsxs("div", { className: styles$b.gridImage, children: [
          /* @__PURE__ */ jsx("div", { className: styles$b.gridBackground, children: /* @__PURE__ */ jsx(
            Image$1,
            {
              srcSet: `${sliceBackgroundBar} 440w, ${sliceBackgroundBarLarge} 880w`,
              width: 440,
              height: 790,
              placeholder: sliceBackgroundBarPlaceholder,
              alt: "",
              role: "presentation",
              sizes: `(max-width: ${media.mobile}px) 312px, (max-width: ${media.tablet}px) 408px, 514px`
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: styles$b.gridForeground, children: /* @__PURE__ */ jsx(
            Image$1,
            {
              srcSet: `${sliceAnnotation} 440w, ${sliceAnnotationLarge} 880w`,
              width: 440,
              height: 340,
              placeholder: sliceAnnotationPlaceholder,
              alt: "An annotation preview popover with statistics for shape perimeter and area.",
              sizes: `(max-width: ${media.mobile}px) 584px, (max-width: ${media.tablet}px) 747px, 556px`
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: styles$b.gridText, children: [
          /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "Meaningful details" }),
          /* @__PURE__ */ jsx(ProjectSectionText, { children: "Marking and annotating areas on high resolution biomedical images is the core experience of the app, and it was easy to get lost or lose sense of scale when zooming in on details. Adding measurements for the perimeter and area of an annotation both helped to communicate the overall scale of the image and how large the annotated feature is in comparison." })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsxs(ProjectSectionContent, { children: [
        /* @__PURE__ */ jsxs(ProjectTextRow, { children: [
          /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "Project outcomes" }),
          /* @__PURE__ */ jsx(ProjectSectionText, { children: "Real-time collaborative annotation facilitated better collaboration between learners, and was much easier to run group exercises with the new shared layers feature. Learners gave feedback that is was enjoyable to work together and see what others were doing, and liked how interactive and easy to use the application was." })
        ] }),
        /* @__PURE__ */ jsx(
          Image$1,
          {
            src: sliceIrl,
            width: 940,
            height: 500,
            placeholder: sliceIrlPlaceholder,
            alt: "Students at the University of New South Wales using the new collaborative annotation features"
          }
        )
      ] }) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
const route8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Slice,
  meta: meta$5
}, Symbol.toStringTag, { value: "Module" }));
async function action$1({ request, context }) {
  const formData = await request.formData();
  const theme = formData.get("theme");
  const { getSession, commitSession } = createCookieSessionStorage({
    cookie: {
      name: "__session",
      httpOnly: true,
      maxAge: 604800,
      path: "/",
      sameSite: "lax",
      secrets: [context.cloudflare.env.SESSION_SECRET || " "],
      secure: true
    }
  });
  const session = await getSession(request.headers.get("Cookie"));
  session.set("theme", theme);
  return json(
    { status: "success" },
    {
      headers: {
        "Set-Cookie": await commitSession(session)
      }
    }
  );
}
const route9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$1
}, Symbol.toStringTag, { value: "Module" }));
const techBackgroundPlaceholder = "/assets/uses-background-placeholder-ppC4yTdE.jpg";
const techBackground = "/assets/tech-gym-bro-LzhGF8AR.gif";
const list$1 = "_list_1ecfb_2";
const item = "_item_1ecfb_15";
const styles$a = {
  list: list$1,
  item
};
const List = ({ ordered, children, className, ...rest }) => {
  const Element = ordered ? "ol" : "ul";
  return /* @__PURE__ */ jsx(Element, { className: classes(styles$a.list, className), ...rest, children });
};
const ListItem = ({ children, ...rest }) => {
  return /* @__PURE__ */ jsx("li", { className: styles$a.item, ...rest, children });
};
const table = "_table_1ajow_2";
const row$1 = "_row_1ajow_7";
const headCell = "_headCell_1ajow_21";
const cell = "_cell_1ajow_26";
const styles$9 = {
  table,
  row: row$1,
  headCell,
  cell
};
const Table = ({ children }) => /* @__PURE__ */ jsx("table", { className: styles$9.table, children });
const TableRow = ({ children }) => /* @__PURE__ */ jsx("tr", { className: styles$9.row, children });
const TableBody = ({ children }) => /* @__PURE__ */ jsx("tbody", { className: styles$9.body, children });
const TableHeadCell = ({ children }) => /* @__PURE__ */ jsx("th", { className: styles$9.headCell, children });
const TableCell = ({ children }) => /* @__PURE__ */ jsx("td", { className: styles$9.cell, children });
const section = "_section_7vfxj_5";
const styles$8 = {
  section
};
const meta$4 = () => {
  return baseMeta({
    title: "Tech Stack",
    description: "A list of hardware and software I use to do my thing"
  });
};
const TechStack = () => {
  return /* @__PURE__ */ jsxs(Fragment$1, { children: [
    /* @__PURE__ */ jsxs(ProjectContainer, { className: styles$8.TechStack, children: [
      /* @__PURE__ */ jsx(
        ProjectBackground,
        {
          src: techBackground,
          placeholder: techBackgroundPlaceholder,
          opacity: 0.7
        }
      ),
      /* @__PURE__ */ jsx(
        ProjectHeader,
        {
          title: "Tech Stack",
          description: "A farily comprehensive list of tools, apps, hardware, and more that I use on a daily basis to design, code and create things. And yes, the background GIF was generated by Sora."
        }
      ),
      /* @__PURE__ */ jsx(ProjectSection, { padding: "none", className: styles$8.section, children: /* @__PURE__ */ jsx(ProjectSectionContent, { children: /* @__PURE__ */ jsxs(ProjectTextRow, { width: "m", children: [
        /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "Design" }),
        /* @__PURE__ */ jsx(ProjectSectionText, { as: "div", children: /* @__PURE__ */ jsxs(List, { children: [
          /* @__PURE__ */ jsxs(ListItem, { children: [
            /* @__PURE__ */ jsx(Link, { href: "https://www.figma.com", children: "Figma" }),
            " has been my primary tool for UI design for a while. The first time I used it for a university course to create a prototype and I was in AWE exploring the potential it housed. The prototype is ",
            /* @__PURE__ */ jsx(Link, { href: "https://youtu.be/b8dYC4TXDLQ", children: "showcased" }),
            " on my ",
            /* @__PURE__ */ jsx(Link, { href: "https://www.youtube.com/@PiratedSardar", children: "YouTube channel" }),
            "."
          ] }),
          /* @__PURE__ */ jsxs(ListItem, { children: [
            "I've dabbled with",
            " ",
            /* @__PURE__ */ jsx(Link, { href: "https://www.adobe.com/ca/products/aftereffects.html", children: "Adobe After Effects" }),
            " ",
            "to create motion graphics. My university has a free license for machines on campus, but I'd like to find a cheaper/free alternative by the time I graduate."
          ] }),
          /* @__PURE__ */ jsxs(ListItem, { children: [
            "I'm learning to use ",
            /* @__PURE__ */ jsx(Link, { href: "https://www.blender.org/", children: "Blender" }),
            " ",
            "for 3D modelling. While my university has licenses for more expensive tools like 3DS and Maya, the simplicity Blender offers is alluring. Plus I think it's better even though it's free."
          ] })
        ] }) })
      ] }) }) }),
      /* @__PURE__ */ jsx(ProjectSection, { padding: "none", className: styles$8.section, children: /* @__PURE__ */ jsx(ProjectSectionContent, { children: /* @__PURE__ */ jsxs(ProjectTextRow, { width: "m", children: [
        /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "Development" }),
        /* @__PURE__ */ jsx(ProjectSectionText, { as: "div", children: /* @__PURE__ */ jsxs(List, { children: [
          /* @__PURE__ */ jsxs(ListItem, { children: [
            "I use ",
            /* @__PURE__ */ jsx(Link, { href: "https://code.visualstudio.com/", children: "Visual Studio Code" }),
            " as my primary text editor. In dark theme, of course."
          ] }),
          /* @__PURE__ */ jsxs(ListItem, { children: [
            "I have recently started using ",
            /* @__PURE__ */ jsx(Link, { href: "https://www.cursor.com/", children: "Cursor AI" }),
            " and",
            " ",
            /* @__PURE__ */ jsx(Link, { href: "https://codeium.com/windsurf", children: "Windsurf Editors" }),
            " in addition to VS Code to integrate AI into some parts of development."
          ] }),
          /* @__PURE__ */ jsxs(ListItem, { children: [
            "My browser of choice for development and general use is",
            " ",
            /* @__PURE__ */ jsx(Link, { href: "https://thebrowser.company/", children: "Arc by The Browser Company." }),
            " ",
            "However, I still use",
            " ",
            /* @__PURE__ */ jsx(Link, { href: "https://sindresorhus.com/velja", children: "Velja" }),
            " for niche web directing between Chrome, Safari, and Firefox."
          ] }),
          /* @__PURE__ */ jsxs(ListItem, { children: [
            /* @__PURE__ */ jsx(Link, { href: "https://reactjs.org/", children: "React" }),
            " is my front end Javascript library of choice. As I'm primarily a software developer, the component-centric model took a little while to grasp, but if you're reading this, I probably figured it out."
          ] }),
          /* @__PURE__ */ jsxs(ListItem, { children: [
            "For 3D effects and image shaders I use",
            " ",
            /* @__PURE__ */ jsx(Link, { href: "https://threejs.org/", children: "Three.js" }),
            ". I'm still getting used to it, but you can do some truly powerful stuff with it."
          ] }),
          /* @__PURE__ */ jsxs(ListItem, { children: [
            "For CSS I have used a range of pre-processors and css-in-js solutions like styled-components, but these days I’m using vanilla CSS with",
            " ",
            /* @__PURE__ */ jsx(Link, { href: "https://postcss.org/", children: "PostCSS" }),
            " to get upcoming CSS features today."
          ] }),
          /* @__PURE__ */ jsxs(ListItem, { children: [
            "I have used ",
            /* @__PURE__ */ jsx(Link, { href: "https://getbootstrap.com/", children: "Bootstrap" }),
            " ",
            "and ",
            /* @__PURE__ */ jsx(Link, { href: "https://tailwindcss.com/", children: "Tailwind" }),
            " for a",
            " ",
            /* @__PURE__ */ jsx(Link, { href: "https://the-pirated-sardar.github.io/portfolio-2024", children: "static version" }),
            " ",
            "of my portfolio website in the past, but it was time to get more custom, so I moved on."
          ] }),
          /* @__PURE__ */ jsxs(ListItem, { children: [
            "For Javascript animations I use",
            " ",
            /* @__PURE__ */ jsx(Link, { href: "https://www.framer.com/motion/", children: "Framer Motion" }),
            ". It's a great way to add a little oomph on top of React and Three.js with spring animations."
          ] })
        ] }) })
      ] }) }) }),
      /* @__PURE__ */ jsx(ProjectSection, { padding: "none", className: styles$8.section, children: /* @__PURE__ */ jsx(ProjectSectionContent, { children: /* @__PURE__ */ jsxs(ProjectTextRow, { width: "m", children: [
        /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "Creativity and Video Creation" }),
        /* @__PURE__ */ jsx(ProjectSectionText, { as: "div", children: /* @__PURE__ */ jsxs(List, { children: [
          /* @__PURE__ */ jsxs(ListItem, { children: [
            "I exclusively use ",
            /* @__PURE__ */ jsx(Link, { href: "https://www.blackmagicdesign.com/ca/products/davinciresolve", children: "DaVinci Resolve" }),
            " for editing videos. It offers an extensive range of professional grade editing features for free, which have been a godsend."
          ] }),
          /* @__PURE__ */ jsxs(ListItem, { children: [
            "I use ",
            /* @__PURE__ */ jsx(Link, { href: "https://www.canva.com/", children: "Canva" }),
            " for designing thumbnails and some light prototyping visualization. I intend to start using",
            " ",
            /* @__PURE__ */ jsx(Link, { href: "https://www.adobe.com/ca/products/photoshop.html", children: "PhotoShop" }),
            " ",
            "at some point though."
          ] }),
          /* @__PURE__ */ jsxs(ListItem, { children: [
            "I use ",
            /* @__PURE__ */ jsx(Link, { href: "https://www.audacityteam.org/", children: "Audacity" }),
            " for audio capturing and treatment. Free, open source, and timeless."
          ] }),
          /* @__PURE__ */ jsxs(ListItem, { children: [
            "I almost exclusively create longform videos in my free time to publish on",
            " ",
            /* @__PURE__ */ jsx(Link, { href: "https://www.youtube.com/@PiratedSardar", children: "YouTube" }),
            ",",
            " ",
            "but I have reuploaded some YT shorts on TikTok. Most of the content is my take on technology."
          ] }),
          /* @__PURE__ */ jsxs(ListItem, { children: [
            "I write (infrequently) on",
            " ",
            /* @__PURE__ */ jsx(Link, { href: "https://piratedsardar.substack.com/publish/home", children: "Substack" })
          ] })
        ] }) })
      ] }) }) }),
      /* @__PURE__ */ jsx(ProjectSection, { padding: "none", className: styles$8.section, children: /* @__PURE__ */ jsx(ProjectSectionContent, { children: /* @__PURE__ */ jsxs(ProjectTextRow, { stretch: true, width: "m", children: [
        /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "System" }),
        /* @__PURE__ */ jsx(Table, { children: /* @__PURE__ */ jsxs(TableBody, { children: [
          /* @__PURE__ */ jsxs(TableRow, { children: [
            /* @__PURE__ */ jsx(TableHeadCell, { children: "Primary Machine" }),
            /* @__PURE__ */ jsx(TableCell, { children: 'MacBook Pro M1 (14")' })
          ] }),
          /* @__PURE__ */ jsxs(TableRow, { children: [
            /* @__PURE__ */ jsx(TableHeadCell, { children: "Operating system" }),
            /* @__PURE__ */ jsx(TableCell, { children: "macOS" })
          ] }),
          /* @__PURE__ */ jsxs(TableRow, { children: [
            /* @__PURE__ */ jsx(TableHeadCell, { children: "Browser" }),
            /* @__PURE__ */ jsx(TableCell, { children: "Arc Browser" })
          ] }),
          /* @__PURE__ */ jsxs(TableRow, { children: [
            /* @__PURE__ */ jsx(TableHeadCell, { children: "Monitor" }),
            /* @__PURE__ */ jsx(TableCell, { children: "2160p IPS 60Hz LG 27UP650 (x2)" })
          ] }),
          /* @__PURE__ */ jsxs(TableRow, { children: [
            /* @__PURE__ */ jsx(TableHeadCell, { children: "Keyboard" }),
            /* @__PURE__ */ jsx(TableCell, { children: "Apple Magic Keyboard w/ Num Pad" })
          ] }),
          /* @__PURE__ */ jsxs(TableRow, { children: [
            /* @__PURE__ */ jsx(TableHeadCell, { children: "Mouse" }),
            /* @__PURE__ */ jsx(TableCell, { children: "Logitech MX Master 3 (& Apple Magic Trackpad)" })
          ] }),
          /* @__PURE__ */ jsxs(TableRow, { children: [
            /* @__PURE__ */ jsx(TableHeadCell, { children: 'On-the-go "computer"' }),
            /* @__PURE__ */ jsx(TableCell, { children: "iPad Air M2" })
          ] }),
          /* @__PURE__ */ jsxs(TableRow, { children: [
            /* @__PURE__ */ jsx(TableHeadCell, { children: "Headphones" }),
            /* @__PURE__ */ jsx(TableCell, { children: "Apple Airpods Pro 2 & Soundcore Space One" })
          ] })
        ] }) })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
const route10 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: TechStack,
  meta: meta$4
}, Symbol.toStringTag, { value: "Module" }));
const clamp = (number, boundOne, boundTwo) => {
  if (!boundTwo) {
    return Math.max(number, boundOne) === boundOne ? number : boundOne;
  } else if (Math.min(number, boundOne) === number) {
    return boundOne;
  } else if (Math.max(number, boundTwo) === number) {
    return boundTwo;
  }
  return number;
};
const post = "_post_kr7uo_20";
const header = "_header_kr7uo_44";
const headerText = "_headerText_kr7uo_55";
const date = "_date_kr7uo_79";
const dateText = "_dateText_kr7uo_91";
const titleWordWrapper = "_titleWordWrapper_kr7uo_118";
const titleWord = "_titleWord_kr7uo_118";
const banner = "_banner_kr7uo_138";
const bannerImage = "_bannerImage_kr7uo_190";
const bannerImageBlur = "_bannerImageBlur_kr7uo_191";
const details$1 = "_details_kr7uo_202";
const arrow = "_arrow_kr7uo_209";
const timecode = "_timecode_kr7uo_233";
const wrapper = "_wrapper_kr7uo_254";
const content$2 = "_content_kr7uo_266";
const styles$7 = {
  post,
  header,
  headerText,
  date,
  dateText,
  titleWordWrapper,
  titleWord,
  banner,
  bannerImage,
  bannerImageBlur,
  details: details$1,
  arrow,
  timecode,
  wrapper,
  content: content$2
};
const Post = ({ children, title: title2, date: date2, banner: banner2, timecode: timecode2 }) => {
  const scrollToHash = useScrollToHash();
  const imageRef = useRef();
  const [dateTime, setDateTime] = useState(null);
  useEffect(() => {
    setDateTime(formatDate(date2));
  }, [date2, dateTime]);
  useParallax(4e-3, (value2) => {
    if (!imageRef.current) return;
    imageRef.current.style.setProperty("--blurOpacity", clamp(value2, 0, 1));
  });
  const handleScrollIndicatorClick = (event) => {
    event.preventDefault();
    scrollToHash(event.currentTarget.href);
  };
  const placeholder2 = `${banner2 == null ? void 0 : banner2.split(".")[0]}-placeholder.jpg`;
  return /* @__PURE__ */ jsxs("article", { className: styles$7.post, children: [
    /* @__PURE__ */ jsxs(Section, { children: [
      banner2 && /* @__PURE__ */ jsxs("div", { className: styles$7.banner, ref: imageRef, children: [
        /* @__PURE__ */ jsx("div", { className: styles$7.bannerImage, children: /* @__PURE__ */ jsx(Image$1, { role: "presentation", src: banner2, placeholder: placeholder2, alt: "" }) }),
        /* @__PURE__ */ jsx("div", { className: styles$7.bannerImageBlur, children: /* @__PURE__ */ jsx(
          Image$1,
          {
            role: "presentation",
            src: placeholder2,
            placeholder: placeholder2,
            alt: ""
          }
        ) })
      ] }),
      /* @__PURE__ */ jsx("header", { className: styles$7.header, children: /* @__PURE__ */ jsxs("div", { className: styles$7.headerText, children: [
        /* @__PURE__ */ jsx(Transition, { in: true, timeout: msToNum(tokens.base.durationM), children: ({ visible, nodeRef }) => /* @__PURE__ */ jsxs("div", { className: styles$7.date, ref: nodeRef, children: [
          /* @__PURE__ */ jsx(Divider, { notchWidth: "64px", notchHeight: "8px", collapsed: !visible }),
          /* @__PURE__ */ jsx(Text, { className: styles$7.dateText, "data-visible": visible, children: dateTime })
        ] }) }),
        /* @__PURE__ */ jsx(Heading, { level: 2, as: "h1", className: styles$7.title, "aria-label": title2, children: title2.split(" ").map((word2, index2) => /* @__PURE__ */ jsx("span", { className: styles$7.titleWordWrapper, children: /* @__PURE__ */ jsxs(
          "span",
          {
            className: styles$7.titleWord,
            style: cssProps({ delay: numToMs(index2 * 100 + 100) }),
            children: [
              word2,
              index2 !== title2.split(" ").length - 1 ? " " : ""
            ]
          }
        ) }, `${word2}-${index2}`)) }),
        /* @__PURE__ */ jsxs("div", { className: styles$7.details, children: [
          /* @__PURE__ */ jsx(
            Link$1,
            {
              to: "#postContent",
              className: styles$7.arrow,
              "aria-label": "Scroll to post content",
              onClick: handleScrollIndicatorClick,
              children: /* @__PURE__ */ jsx(
                "svg",
                {
                  "aria-hidden": true,
                  stroke: "currentColor",
                  width: "43",
                  height: "15",
                  viewBox: "0 0 43 15",
                  children: /* @__PURE__ */ jsx("path", { d: "M1 1l20.5 12L42 1", strokeWidth: "2", fill: "none" })
                }
              )
            }
          ),
          /* @__PURE__ */ jsx("div", { className: styles$7.timecode, children: timecode2 })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx(Section, { className: styles$7.wrapper, id: "postContent", tabIndex: -1, children: /* @__PURE__ */ jsx(Text, { as: "div", size: "l", className: styles$7.content, children }) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
const code$1 = "_code_113ft_2";
const actions = "_actions_113ft_159";
const copyIcon = "_copyIcon_113ft_176";
const lang = "_lang_113ft_198";
const styles$6 = {
  code: code$1,
  actions,
  copyIcon,
  lang
};
const Code = (props) => {
  var _a;
  const [copied, setCopied] = useState(false);
  const { theme } = useTheme();
  const elementRef = useRef();
  const copyTimeout = useRef();
  const lang2 = (_a = props.className) == null ? void 0 : _a.split("-")[1];
  const handleCopy = () => {
    clearTimeout(copyTimeout);
    navigator.clipboard.writeText(elementRef.current.textContent);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2e3);
  };
  return /* @__PURE__ */ jsxs("div", { className: styles$6.code, "data-theme": theme, children: [
    !!lang2 && /* @__PURE__ */ jsx(Text, { secondary: true, size: "s", className: styles$6.lang, children: lang2 }),
    /* @__PURE__ */ jsx("pre", { ref: elementRef, ...props }),
    /* @__PURE__ */ jsx("div", { className: styles$6.actions, children: /* @__PURE__ */ jsx(Button, { iconOnly: true, onClick: handleCopy, "aria-label": "Copy", children: /* @__PURE__ */ jsxs("span", { className: styles$6.copyIcon, children: [
      /* @__PURE__ */ jsx(Transition, { in: !copied, children: ({ visible, nodeRef }) => /* @__PURE__ */ jsx(Icon, { ref: nodeRef, icon: "copy", "data-visible": visible }) }),
      /* @__PURE__ */ jsx(Transition, { in: copied, children: ({ visible, nodeRef }) => /* @__PURE__ */ jsx(Icon, { ref: nodeRef, icon: "check", "data-visible": visible }) })
    ] }) }) })
  ] });
};
const heading = "_heading_69uyj_2";
const paragraph = "_paragraph_69uyj_14";
const list = "_list_69uyj_14";
const image$1 = "_image_69uyj_14";
const headingLink = "_headingLink_69uyj_19";
const code = "_code_69uyj_72";
const pre = "_pre_69uyj_90";
const hr = "_hr_69uyj_106";
const blockquote = "_blockquote_69uyj_120";
const strong = "_strong_69uyj_139";
const embed = "_embed_69uyj_143";
const styles$5 = {
  heading,
  paragraph,
  list,
  image: image$1,
  headingLink,
  code,
  pre,
  hr,
  blockquote,
  strong,
  embed
};
const PostHeadingLink = ({ id }) => {
  return /* @__PURE__ */ jsx(Link$1, { className: styles$5.headingLink, to: `#${id}`, "aria-label": "Link to heading", children: /* @__PURE__ */ jsx(Icon, { icon: "link" }) });
};
const PostH1 = ({ children, id, ...rest }) => /* @__PURE__ */ jsxs(Heading, { className: styles$5.heading, id, level: 2, as: "h1", ...rest, children: [
  /* @__PURE__ */ jsx(PostHeadingLink, { id }),
  children
] });
const PostH2 = ({ children, id, ...rest }) => /* @__PURE__ */ jsxs(Heading, { className: styles$5.heading, id, level: 3, as: "h2", ...rest, children: [
  /* @__PURE__ */ jsx(PostHeadingLink, { id }),
  children
] });
const PostH3 = ({ children, id, ...rest }) => /* @__PURE__ */ jsxs(Heading, { className: styles$5.heading, id, level: 4, as: "h3", ...rest, children: [
  /* @__PURE__ */ jsx(PostHeadingLink, { id }),
  children
] });
const PostH4 = ({ children, id, ...rest }) => /* @__PURE__ */ jsxs(Heading, { className: styles$5.heading, id, level: 5, as: "h4", ...rest, children: [
  /* @__PURE__ */ jsx(PostHeadingLink, { id }),
  children
] });
const PostParagraph = ({ children, ...rest }) => {
  const hasSingleChild = Children.count(children) === 1;
  const firstChild = Children.toArray(children)[0];
  if (hasSingleChild && firstChild.type === PostImage) {
    return children;
  }
  return /* @__PURE__ */ jsx(Text, { className: styles$5.paragraph, size: "l", as: "p", ...rest, children });
};
const PostLink = ({ ...props }) => /* @__PURE__ */ jsx(Link, { ...props });
const PostUl = (props) => {
  return /* @__PURE__ */ jsx(List, { className: styles$5.list, ...props });
};
const PostOl = (props) => {
  return /* @__PURE__ */ jsx(List, { className: styles$5.list, ordered: true, ...props });
};
const PostLi = ({ children, ...props }) => {
  return /* @__PURE__ */ jsx(ListItem, { ...props, children });
};
const PostCode = ({ children, ...rest }) => /* @__PURE__ */ jsx("code", { className: styles$5.code, ...rest, children });
const PostPre = (props) => {
  return /* @__PURE__ */ jsx("div", { className: styles$5.pre, children: /* @__PURE__ */ jsx(Code, { ...props }) });
};
const PostBlockquote = (props) => {
  return /* @__PURE__ */ jsx("blockquote", { className: styles$5.blockquote, ...props });
};
const PostHr = (props) => {
  return /* @__PURE__ */ jsx("hr", { className: styles$5.hr, ...props });
};
const PostStrong = (props) => {
  return /* @__PURE__ */ jsx("strong", { className: styles$5.strong, ...props });
};
const PostImage = ({ src, alt, width, height, ...rest }) => {
  return /* @__PURE__ */ jsx(
    "img",
    {
      className: styles$5.image,
      src,
      loading: "lazy",
      alt,
      width,
      height,
      ...rest
    }
  );
};
const Embed = ({ src }) => {
  return /* @__PURE__ */ jsx("div", { className: styles$5.embed, children: /* @__PURE__ */ jsx("iframe", { src, loading: "lazy", title: "Embed" }) });
};
const postMarkdown = {
  h1: PostH1,
  h2: PostH2,
  h3: PostH3,
  h4: PostH4,
  p: PostParagraph,
  a: PostLink,
  ul: PostUl,
  ol: PostOl,
  li: PostLi,
  pre: PostPre,
  code: PostCode,
  blockquote: PostBlockquote,
  hr: PostHr,
  img: PostImage,
  strong: PostStrong,
  Embed
};
async function loader$2({ request }) {
  const slug = request.url.split("/").at(-1);
  const module = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../articles.creative-itch.mdx": () => Promise.resolve().then(() => route2), "../articles.no-shower.mdx": () => Promise.resolve().then(() => route6), "../articles.power-stories.mdx": () => Promise.resolve().then(() => route3) }), `../articles.${slug}.mdx`, 2);
  const text2 = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../articles.creative-itch.mdx": () => import("./articles.creative-itch-DmpMF9s8.js"), "../articles.no-shower.mdx": () => import("./articles.no-shower-B_e-9GAU.js"), "../articles.power-stories.mdx": () => import("./articles.power-stories-BLzVAdFC.js") }), `../articles.${slug}.mdx`, 2);
  const readTime = readingTime(text2.default);
  const ogImage = `${config.url}/static/${slug}-og.jpg`;
  return json({
    ogImage,
    frontmatter: module.frontmatter,
    timecode: formatTimecode(readTime)
  });
}
function meta$3({ data }) {
  const { title: title2, abstract } = data.frontmatter;
  return baseMeta({ title: title2, description: abstract, prefix: "", ogImage: data.ogImage });
}
function Articles() {
  const { frontmatter: frontmatter2, timecode: timecode2 } = useLoaderData();
  return /* @__PURE__ */ jsx(MDXProvider, { components: postMarkdown, children: /* @__PURE__ */ jsx(Post, { ...frontmatter2, timecode: timecode2, children: /* @__PURE__ */ jsx(Outlet, {}) }) });
}
const route11 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Articles,
  loader: loader$2,
  meta: meta$3
}, Symbol.toStringTag, { value: "Module" }));
const contact = "_contact_mbmbl_1";
const form = "_form_mbmbl_18";
const title$3 = "_title_mbmbl_30";
const input = "_input_mbmbl_98";
const button$2 = "_button_mbmbl_144";
const inputWrapper = "_inputWrapper_mbmbl_333";
const label = "_label_mbmbl_359";
const error = "_error_mbmbl_392";
const success = "_success_mbmbl_397";
const styles$4 = {
  contact,
  form,
  title: title$3,
  input,
  button: button$2,
  inputWrapper,
  label,
  error,
  success
};
const meta$2 = () => ({
  title: "Contact",
  description: "Send me a message if you’re interested in discussing a project or just want to say hi."
});
const MAX_EMAIL_LENGTH = 512;
const MAX_MESSAGE_LENGTH = 4096;
async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email") || "";
  const message = formData.get("message") || "";
  const errors = {};
  if (!email.includes("@") || email.length > MAX_EMAIL_LENGTH) {
    errors.email = "Please enter a valid email address.";
  }
  if (!message || message.length > MAX_MESSAGE_LENGTH) {
    errors.message = "Message must not exceed 4096 characters.";
  }
  if (Object.keys(errors).length > 0) {
    return { errors };
  }
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "lolliji2255@gmail.com",
      pass: "your-app-password"
      // Replace with your app-specific password
    }
  });
  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <lolliji2255@gmail.com>`,
      to: "lolliji2255@gmail.com",
      subject: `New Message from ${email}`,
      text: message
    });
    return { success: true };
  } catch (error2) {
    console.error("Error sending email:", error2);
    return { errors: { general: "Failed to send your message. Please try again later." } };
  }
}
const Contact = () => {
  const actionData = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return /* @__PURE__ */ jsx(Section, { className: styles$4.contact, children: /* @__PURE__ */ jsxs(Form, { method: "post", className: styles$4.form, children: [
    /* @__PURE__ */ jsx("h3", { className: styles$4.title, children: "Say hello" }),
    /* @__PURE__ */ jsxs("div", { className: styles$4.inputWrapper, children: [
      /* @__PURE__ */ jsx(
        "input",
        {
          id: "email",
          name: "email",
          type: "email",
          maxLength: MAX_EMAIL_LENGTH,
          required: true,
          placeholder: " ",
          className: styles$4.input
        }
      ),
      /* @__PURE__ */ jsx("label", { htmlFor: "email", className: styles$4.label, children: "Your email" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: styles$4.inputWrapper, children: [
      /* @__PURE__ */ jsx(
        "textarea",
        {
          id: "message",
          name: "message",
          maxLength: MAX_MESSAGE_LENGTH,
          required: true,
          placeholder: " ",
          className: styles$4.input
        }
      ),
      /* @__PURE__ */ jsx("label", { htmlFor: "message", className: styles$4.label, children: "Your message" })
    ] }),
    (actionData == null ? void 0 : actionData.errors) && /* @__PURE__ */ jsxs("div", { className: styles$4.error, children: [
      actionData.errors.email && /* @__PURE__ */ jsx("p", { children: actionData.errors.email }),
      actionData.errors.message && /* @__PURE__ */ jsx("p", { children: actionData.errors.message })
    ] }),
    /* @__PURE__ */ jsx("button", { type: "submit", className: styles$4.button, disabled: isSubmitting, children: isSubmitting ? "Sending..." : "Send Message" }),
    (actionData == null ? void 0 : actionData.success) && /* @__PURE__ */ jsx("p", { className: styles$4.success, children: "Message sent! I’ll get back to you soon." })
  ] }) });
};
const route12 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action,
  default: Contact,
  meta: meta$2
}, Symbol.toStringTag, { value: "Module" }));
const gamestackTexture2Placeholder = "/assets/scholar-logo-D0WgUf5N.jpg";
const sliceTexturePlaceholder = "/assets/pacman-full-BXiDcpV1.jpg";
function subscribe() {
  return () => {
  };
}
function useHydrated() {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );
}
const intro = "_intro_x8c4c_1";
const text = "_text_x8c4c_9";
const name = "_name_x8c4c_36";
const title$2 = "_title_x8c4c_74";
const row = "_row_x8c4c_78";
const word = "_word_x8c4c_107";
const line = "_line_x8c4c_183";
const scrollIndicator = "_scrollIndicator_x8c4c_232";
const mobileScrollIndicator = "_mobileScrollIndicator_x8c4c_299";
const styles$3 = {
  intro,
  text,
  name,
  title: title$2,
  row,
  word,
  line,
  scrollIndicator,
  mobileScrollIndicator
};
const DisplacementSphere = lazy(
  () => import("./displacement-sphere-CiK7Z9tq.js").then((module) => ({ default: module.DisplacementSphere }))
);
function Intro({ id, sectionRef, scrollIndicatorHidden, ...rest }) {
  const { theme } = useTheme();
  const { disciplines: disciplines2 } = config;
  const [disciplineIndex, setDisciplineIndex] = useState(0);
  const prevTheme = usePrevious(theme);
  const introLabel = [disciplines2.slice(0, -1).join(", "), disciplines2.slice(-1)[0]].join(
    ", and "
  );
  const currentDiscipline = disciplines2.find((item2, index2) => index2 === disciplineIndex);
  const titleId = `${id}-title`;
  const scrollToHash = useScrollToHash();
  const isHydrated = useHydrated();
  useInterval(
    () => {
      const index2 = (disciplineIndex + 1) % disciplines2.length;
      setDisciplineIndex(index2);
    },
    5e3,
    theme
  );
  useEffect(() => {
    if (prevTheme && prevTheme !== theme) {
      setDisciplineIndex(0);
    }
  }, [theme, prevTheme]);
  const handleScrollClick = (event) => {
    event.preventDefault();
    scrollToHash(event.currentTarget.href);
  };
  return /* @__PURE__ */ jsx(
    Section,
    {
      className: styles$3.intro,
      as: "section",
      ref: sectionRef,
      id,
      "aria-labelledby": titleId,
      tabIndex: -1,
      ...rest,
      children: /* @__PURE__ */ jsx(Transition, { in: true, timeout: 3e3, children: ({ visible, status }) => /* @__PURE__ */ jsxs(Fragment$1, { children: [
        isHydrated && /* @__PURE__ */ jsx(Suspense, { children: /* @__PURE__ */ jsx(DisplacementSphere, {}) }),
        /* @__PURE__ */ jsxs("header", { className: styles$3.text, children: [
          /* @__PURE__ */ jsx("h1", { className: styles$3.name, "data-visible": visible, id: titleId, children: /* @__PURE__ */ jsx(DecoderText, { text: config.name, delay: 500 }) }),
          /* @__PURE__ */ jsxs(Heading, { level: 0, as: "h2", className: styles$3.title, children: [
            /* @__PURE__ */ jsx(VisuallyHidden, { className: styles$3.label, children: `${config.role} + ${introLabel}` }),
            /* @__PURE__ */ jsxs("span", { "aria-hidden": true, className: styles$3.row, children: [
              /* @__PURE__ */ jsx(
                "span",
                {
                  className: styles$3.word,
                  "data-status": status,
                  style: cssProps({ delay: tokens.base.durationXS }),
                  children: config.role
                }
              ),
              /* @__PURE__ */ jsx("span", { className: styles$3.line, "data-status": status })
            ] }),
            /* @__PURE__ */ jsx("div", { className: styles$3.row, children: disciplines2.map((item2) => /* @__PURE__ */ jsx(
              Transition,
              {
                unmount: true,
                in: item2 === currentDiscipline,
                timeout: { enter: 3e3, exit: 2e3 },
                children: ({ status: status2, nodeRef }) => /* @__PURE__ */ jsx(
                  "span",
                  {
                    "aria-hidden": true,
                    ref: nodeRef,
                    className: styles$3.word,
                    "data-plus": true,
                    "data-status": status2,
                    style: cssProps({ delay: tokens.base.durationL }),
                    children: item2
                  }
                )
              },
              item2
            )) })
          ] })
        ] }),
        /* @__PURE__ */ jsx(
          Link$1,
          {
            to: "/#project-1",
            className: styles$3.scrollIndicator,
            "data-status": status,
            "data-hidden": scrollIndicatorHidden,
            onClick: handleScrollClick,
            children: /* @__PURE__ */ jsx(VisuallyHidden, { children: "Scroll to projects" })
          }
        ),
        /* @__PURE__ */ jsxs(
          Link$1,
          {
            to: "/#project-1",
            className: styles$3.mobileScrollIndicator,
            "data-status": status,
            "data-hidden": scrollIndicatorHidden,
            onClick: handleScrollClick,
            children: [
              /* @__PURE__ */ jsx(VisuallyHidden, { children: "Scroll to projects" }),
              /* @__PURE__ */ jsx(
                "svg",
                {
                  "aria-hidden": true,
                  stroke: "currentColor",
                  width: "43",
                  height: "15",
                  viewBox: "0 0 43 15",
                  children: /* @__PURE__ */ jsx("path", { d: "M1 1l20.5 12L42 1", strokeWidth: "2", fill: "none" })
                }
              )
            ]
          }
        )
      ] }) }, theme)
    }
  );
}
const profileImgLarge = "/assets/profile-large-RqFLPuTM.jpg";
const profileImgPlaceholder = "/assets/profile-placeholder-DOgU6wR2.jpg";
const katakana = "/assets/katakana-CdkTGrSh.svg";
const profile = "_profile_s38cy_1";
const content$1 = "_content_s38cy_37";
const column = "_column_s38cy_50";
const title$1 = "_title_s38cy_59";
const description$1 = "_description_s38cy_70";
const tag = "_tag_s38cy_80";
const tagText = "_tagText_s38cy_93";
const image = "_image_s38cy_114";
const svg$1 = "_svg_s38cy_119";
const button$1 = "_button_s38cy_135";
const styles$2 = {
  profile,
  content: content$1,
  column,
  title: title$1,
  description: description$1,
  tag,
  tagText,
  image,
  svg: svg$1,
  button: button$1
};
const ProfileText = ({ visible, titleId }) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Heading, { className: styles$2.title, "data-visible": visible, level: 3, id: titleId, children: /* @__PURE__ */ jsx(DecoderText, { text: "Hi there", start: visible, delay: 500 }) }),
  /* @__PURE__ */ jsxs(Text, { className: styles$2.description, "data-visible": visible, size: "l", as: "p", children: [
    "I'm Prateek, currently an undergraduate Computing Science student at ",
    " ",
    /* @__PURE__ */ jsx(Link, { href: "https://www.sfu.ca/fas/computing.html", children: "Simon Fraser University" }),
    ". I have a variety of experience across multiple domains, like software/app development, UI/UX design, automation logistics, and prototyping."
  ] }),
  /* @__PURE__ */ jsx(Text, { className: styles$2.description, "data-visible": visible, size: "l", as: "p", children: "As someone with a computing background, I have been able to will ideas into existence through the power of binary." }),
  /* @__PURE__ */ jsx(Text, { className: styles$2.description, "data-visible": visible, size: "l", as: "p", children: "I am a Creative, who is driven by the need to help the masses better understand the world and themselves. My creative edge is what dictates my sense of purpose, just as it did for those who have made strides in any industry." }),
  /* @__PURE__ */ jsxs(Text, { className: styles$2.description, "data-visible": visible, size: "l", as: "p", children: [
    "If you’re interested in the tools and software I use check out my ",
    /* @__PURE__ */ jsx(Link, { href: "/uses", children: "uses page" }),
    "."
  ] })
] });
const Profile = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;
  return /* @__PURE__ */ jsx(
    Section,
    {
      className: styles$2.profile,
      onFocus: () => setFocused(true),
      onBlur: () => setFocused(false),
      as: "section",
      id,
      ref: sectionRef,
      "aria-labelledby": titleId,
      tabIndex: -1,
      children: /* @__PURE__ */ jsx(Transition, { in: visible || focused, timeout: 0, children: ({ visible: visible2, nodeRef }) => /* @__PURE__ */ jsxs("div", { className: styles$2.content, ref: nodeRef, children: [
        /* @__PURE__ */ jsxs("div", { className: styles$2.column, children: [
          /* @__PURE__ */ jsx(ProfileText, { visible: visible2, titleId }),
          /* @__PURE__ */ jsx(
            Button,
            {
              secondary: true,
              className: styles$2.button,
              "data-visible": visible2,
              href: "mailto:lolliji225@gmail.com?subject=From Your Portfolio Website: ",
              icon: "send",
              children: "Send me an email"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: styles$2.column, children: [
          /* @__PURE__ */ jsxs("div", { className: styles$2.tag, "aria-hidden": true, children: [
            /* @__PURE__ */ jsx(
              Divider,
              {
                notchWidth: "64px",
                notchHeight: "8px",
                collapsed: !visible2,
                collapseDelay: 1e3
              }
            ),
            /* @__PURE__ */ jsx("div", { className: styles$2.tagText, "data-visible": visible2, children: "About me" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: styles$2.image, children: [
            /* @__PURE__ */ jsx(
              Image$1,
              {
                reveal: true,
                delay: 100,
                placeholder: profileImgPlaceholder,
                srcSet: `${profileImgLarge} 480w, ${profileImgLarge} 960w`,
                width: 960,
                height: 1280,
                sizes: `(max-width: ${media.mobile}px) 100vw, 480px`,
                alt: "Me smiling like a goofball at the Qwilr office in Sydney"
              }
            ),
            /* @__PURE__ */ jsx("svg", { className: styles$2.svg, "data-visible": visible2, viewBox: "0 0 136 766", children: /* @__PURE__ */ jsx("use", { href: `${katakana}#profile-leet` }) })
          ] })
        ] })
      ] }) })
    }
  );
};
const iphone11 = "/assets/iphone-11-DGIHa_Ph.glb";
const macbookPro = "/assets/macbook-pro-DZn-FKKF.glb";
const ModelAnimationType = {
  SpringUp: "spring-up",
  LaptopOpen: "laptop-open"
};
const deviceModels = {
  phone: {
    url: iphone11,
    width: 374,
    height: 512,
    position: { x: 0, y: 0, z: 0 },
    animation: ModelAnimationType.SpringUp
  },
  laptop: {
    url: macbookPro,
    width: 1280,
    height: 800,
    position: { x: 0, y: 0, z: 0 },
    animation: ModelAnimationType.LaptopOpen
  }
};
const summary = "_summary_1cfqm_1";
const content = "_content_1cfqm_35";
const details = "_details_1cfqm_65";
const preview = "_preview_1cfqm_78";
const model = "_model_1cfqm_88";
const loader$1 = "_loader_1cfqm_142";
const svg = "_svg_1cfqm_151";
const index = "_index_1cfqm_192";
const indexNumber = "_indexNumber_1cfqm_201";
const title = "_title_1cfqm_222";
const description = "_description_1cfqm_241";
const button = "_button_1cfqm_260";
const styles$1 = {
  summary,
  content,
  details,
  preview,
  model,
  loader: loader$1,
  svg,
  index,
  indexNumber,
  title,
  description,
  button
};
const Model = lazy(
  () => import("./index-Dy6lhkl7.js").then((module) => ({ default: module.Model }))
);
function ProjectSummary({
  id,
  visible: sectionVisible,
  sectionRef,
  index: index2,
  title: title2,
  description: description2,
  model: model2,
  buttonText,
  buttonLink,
  alternate,
  ...rest
}) {
  const [focused, setFocused] = useState(false);
  const [modelLoaded, setModelLoaded] = useState(false);
  const { theme } = useTheme();
  const { width } = useWindowSize();
  const isHydrated = useHydrated();
  const titleId = `${id}-title`;
  const isMobile = width <= media.tablet;
  const svgOpacity = theme === "light" ? 0.7 : 1;
  const indexText = index2 < 10 ? `0${index2}` : index2;
  const phoneSizes = `(max-width: ${media.tablet}px) 30vw, 20vw`;
  const laptopSizes = `(max-width: ${media.tablet}px) 80vw, 40vw`;
  function handleModelLoad() {
    setModelLoaded(true);
  }
  function renderKatakana(device, visible) {
    return /* @__PURE__ */ jsx(
      "svg",
      {
        type: "project",
        "data-visible": visible && modelLoaded,
        "data-light": theme === "light",
        style: cssProps({ opacity: svgOpacity }),
        className: styles$1.svg,
        "data-device": device,
        viewBox: "0 0 751 136",
        children: /* @__PURE__ */ jsx("use", { href: `${katakana}#projects-leet` })
      }
    );
  }
  function renderDetails(visible) {
    return /* @__PURE__ */ jsxs("div", { className: styles$1.details, children: [
      /* @__PURE__ */ jsxs("div", { "aria-hidden": true, className: styles$1.index, children: [
        /* @__PURE__ */ jsx(
          Divider,
          {
            notchWidth: "64px",
            notchHeight: "8px",
            collapsed: !visible,
            collapseDelay: 1e3
          }
        ),
        /* @__PURE__ */ jsx("span", { className: styles$1.indexNumber, "data-visible": visible, children: indexText })
      ] }),
      /* @__PURE__ */ jsx(
        Heading,
        {
          level: 3,
          as: "h2",
          className: styles$1.title,
          "data-visible": visible,
          id: titleId,
          children: title2
        }
      ),
      /* @__PURE__ */ jsx(Text, { className: styles$1.description, "data-visible": visible, as: "p", children: description2 }),
      /* @__PURE__ */ jsx("div", { className: styles$1.button, "data-visible": visible, children: /* @__PURE__ */ jsx(Button, { iconHoverShift: true, href: buttonLink, iconEnd: "arrow-right", children: buttonText }) })
    ] });
  }
  function renderPreview(visible) {
    return /* @__PURE__ */ jsxs("div", { className: styles$1.preview, children: [
      model2.type === "laptop" && /* @__PURE__ */ jsxs(Fragment$1, { children: [
        renderKatakana("laptop", visible),
        /* @__PURE__ */ jsxs("div", { className: styles$1.model, "data-device": "laptop", children: [
          !modelLoaded && /* @__PURE__ */ jsx(Loader, { center: true, className: styles$1.loader, "data-visible": visible }),
          isHydrated && visible && /* @__PURE__ */ jsx(Suspense, { children: /* @__PURE__ */ jsx(
            Model,
            {
              alt: model2.alt,
              cameraPosition: { x: 0, y: 0, z: 8 },
              showDelay: 700,
              onLoad: handleModelLoad,
              show: visible,
              models: [
                {
                  ...deviceModels.laptop,
                  texture: {
                    ...model2.textures[0],
                    sizes: laptopSizes
                  }
                }
              ]
            }
          ) })
        ] })
      ] }),
      model2.type === "phone" && /* @__PURE__ */ jsxs(Fragment$1, { children: [
        renderKatakana("phone", visible),
        /* @__PURE__ */ jsxs("div", { className: styles$1.model, "data-device": "phone", children: [
          !modelLoaded && /* @__PURE__ */ jsx(Loader, { center: true, className: styles$1.loader, "data-visible": visible }),
          isHydrated && visible && /* @__PURE__ */ jsx(Suspense, { children: /* @__PURE__ */ jsx(
            Model,
            {
              alt: model2.alt,
              cameraPosition: { x: 0, y: 0, z: 11.5 },
              showDelay: 300,
              onLoad: handleModelLoad,
              show: visible,
              models: [
                {
                  ...deviceModels.phone,
                  position: { x: -0.6, y: 1.1, z: 0 },
                  texture: {
                    ...model2.textures[0],
                    sizes: phoneSizes
                  }
                },
                {
                  ...deviceModels.phone,
                  position: { x: 0.6, y: -0.5, z: 0.3 },
                  texture: {
                    ...model2.textures[1],
                    sizes: phoneSizes
                  }
                }
              ]
            }
          ) })
        ] })
      ] })
    ] });
  }
  return /* @__PURE__ */ jsx(
    Section,
    {
      className: styles$1.summary,
      "data-alternate": alternate,
      "data-first": index2 === 1,
      onFocus: () => setFocused(true),
      onBlur: () => setFocused(false),
      as: "section",
      "aria-labelledby": titleId,
      ref: sectionRef,
      id,
      tabIndex: -1,
      ...rest,
      children: /* @__PURE__ */ jsx("div", { className: styles$1.content, children: /* @__PURE__ */ jsx(Transition, { in: sectionVisible || focused, children: ({ visible }) => /* @__PURE__ */ jsxs(Fragment$1, { children: [
        !alternate && !isMobile && /* @__PURE__ */ jsxs(Fragment$1, { children: [
          renderDetails(visible),
          renderPreview(visible)
        ] }),
        (alternate || isMobile) && /* @__PURE__ */ jsxs(Fragment$1, { children: [
          renderPreview(visible),
          renderDetails(visible)
        ] })
      ] }) }) })
    }
  );
}
const home = "_home_1e7fe_1";
const styles = {
  home
};
const links = () => {
  return [
    {
      rel: "prefetch",
      href: "/draco/draco_wasm_wrapper.js",
      as: "script",
      type: "text/javascript",
      importance: "low"
    },
    {
      rel: "prefetch",
      href: "/draco/draco_decoder.wasm",
      as: "fetch",
      type: "application/wasm",
      importance: "low"
    }
  ];
};
const meta$1 = () => {
  return baseMeta({
    title: "Designer + Developer",
    description: `Design portfolio of ${config.name} — a product designer working on web & mobile apps with a focus on motion, experience design, and accessibility.`
  });
};
const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro2 = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const details2 = useRef();
  useEffect(() => {
    const sections = [intro2, projectOne, projectTwo, projectThree, details2];
    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry2) => {
          if (entry2.isIntersecting) {
            const section2 = entry2.target;
            observer.unobserve(section2);
            if (visibleSections.includes(section2)) return;
            setVisibleSections((prevSections) => [...prevSections, section2]);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
    );
    const indicatorObserver = new IntersectionObserver(
      ([entry2]) => {
        setScrollIndicatorHidden(!entry2.isIntersecting);
      },
      { rootMargin: "-100% 0px 0px 0px" }
    );
    sections.forEach((section2) => {
      sectionObserver.observe(section2.current);
    });
    indicatorObserver.observe(intro2.current);
    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);
  return /* @__PURE__ */ jsxs("div", { className: styles.home, children: [
    /* @__PURE__ */ jsx(
      Intro,
      {
        id: "intro",
        sectionRef: intro2,
        scrollIndicatorHidden
      }
    ),
    /* @__PURE__ */ jsx(
      ProjectSummary,
      {
        id: "project-1",
        sectionRef: projectOne,
        visible: visibleSections.includes(projectOne.current),
        index: 1,
        title: "Bettering Web Accessibility",
        description: "Designing a platform to help the visiually impaired navigate the virtual space better",
        buttonText: "View project",
        buttonLink: "/projects/shravan-app",
        model: {
          type: "laptop",
          alt: "Oswald Labs, Shravan showcase",
          textures: [
            {
              srcSet: `${sprTexturePlaceholder} 1280w, ${sprTexturePlaceholder} 2560w`,
              placeholder: sprTexturePlaceholder
            }
          ]
        }
      }
    ),
    /* @__PURE__ */ jsx(
      ProjectSummary,
      {
        id: "project-2",
        alternate: true,
        sectionRef: projectTwo,
        visible: visibleSections.includes(projectTwo.current),
        index: 2,
        title: "AI Appication for Research Retrieval",
        description: "Development for an AI powered platform to expedite reasearch",
        buttonText: "View GitHub repo",
        buttonLink: "https://github.com/the-pirated-sardar/scholar-sprint",
        model: {
          type: "phone",
          alt: "App logo",
          textures: [
            {
              srcSet: `${gamestackTexture2Placeholder} 375w, ${gamestackTexture2Placeholder} 750w`,
              placeholder: gamestackTexture2Placeholder
            },
            {
              srcSet: `${gamestackTexture2Placeholder} 375w, ${gamestackTexture2Placeholder} 750w`,
              placeholder: gamestackTexture2Placeholder
            }
          ]
        }
      }
    ),
    /* @__PURE__ */ jsx(
      ProjectSummary,
      {
        id: "project-3",
        sectionRef: projectThree,
        visible: visibleSections.includes(projectThree.current),
        index: 3,
        title: "Artificial Intelligence in PacMan",
        description: "Using AI algorithms to optimize PacMan maze solving",
        buttonText: "View GitHub repo",
        buttonLink: "https://github.com/the-pirated-sardar/pacman-AI",
        model: {
          type: "laptop",
          alt: "PacMan going through a virtual maze",
          textures: [
            {
              srcSet: `${sliceTexturePlaceholder} 800w, ${sliceTexturePlaceholder} 1920w`,
              placeholder: sliceTexturePlaceholder
            }
          ]
        }
      }
    ),
    /* @__PURE__ */ jsx(
      Profile,
      {
        sectionRef: details2,
        visible: visibleSections.includes(details2.current),
        id: "details"
      }
    ),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
const route15 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Home,
  links,
  meta: meta$1
}, Symbol.toStringTag, { value: "Module" }));
async function loader() {
  throw new Response(null, { status: 404, statusText: "Not found" });
}
const meta = () => {
  return [{ title: "404 | Redacted" }];
};
function ErrorBoundary() {
  const error2 = useRouteError();
  return /* @__PURE__ */ jsx(Error$1, { error: error2 });
}
const route14 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  loader,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-DRMvJPrs.js", "imports": ["/assets/jsx-runtime-BMrMXMSG.js", "/assets/components-Dta19ZtI.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/root-zYZQycep.js", "imports": ["/assets/jsx-runtime-BMrMXMSG.js", "/assets/components-Dta19ZtI.js", "/assets/image-cK7Yol7S.js", "/assets/error-DaBnVUir.js", "/assets/visually-hidden-CreUTIVu.js", "/assets/style-CdyozSHa.js", "/assets/useScrollToHash-BH8nWTg6.js", "/assets/useWindowSize-DlOz3mXe.js", "/assets/config-YH5w3qyB.js", "/assets/decoder-text-CtFIuefh.js", "/assets/use-spring-2oVTzKD3.js", "/assets/index-C7rQJm6-.js"], "css": ["/assets/root-AirrcxGX.css", "/assets/image-MLIZ5YGx.css", "/assets/error-BT7XG2_u.css", "/assets/decoder-text-9RaPT1ab.css", "/assets/visually-hidden-BpS8kiyk.css"] }, "routes/projects.volkihar-knight": { "id": "routes/projects.volkihar-knight", "parentId": "root", "path": "projects/volkihar-knight", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route-D9v8x3bI.js", "imports": ["/assets/preload-helper-D7HrI6pR.js", "/assets/jsx-runtime-BMrMXMSG.js", "/assets/image-cK7Yol7S.js", "/assets/meta-DJqpMUuV.js", "/assets/project-DSBsmGGT.js", "/assets/style-CdyozSHa.js", "/assets/components-Dta19ZtI.js", "/assets/config-YH5w3qyB.js", "/assets/section-WIR9c-n7.js", "/assets/useParallax-De53biP0.js"], "css": ["/assets/route-TU9yO5A9.css", "/assets/image-MLIZ5YGx.css", "/assets/meta-O_oOCUsK.css", "/assets/project-C8oXv4p4.css", "/assets/section-wHvjtrwc.css"] }, "routes/articles.creative-itch": { "id": "routes/articles.creative-itch", "parentId": "routes/articles", "path": "creative-itch", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/articles.creative-itch-C-SC1SgZ.js", "imports": ["/assets/jsx-runtime-BMrMXMSG.js", "/assets/index-CGtxawJD.js"], "css": [] }, "routes/articles.power-stories": { "id": "routes/articles.power-stories", "parentId": "routes/articles", "path": "power-stories", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/articles.power-stories-CppKVRj8.js", "imports": ["/assets/jsx-runtime-BMrMXMSG.js", "/assets/index-CGtxawJD.js"], "css": [] }, "routes/projects.smart-sparrow": { "id": "routes/projects.smart-sparrow", "parentId": "root", "path": "projects/smart-sparrow", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route-DpXs0Yys.js", "imports": ["/assets/preload-helper-D7HrI6pR.js", "/assets/jsx-runtime-BMrMXMSG.js", "/assets/spr-lesson-builder-light-placeholder-I19Gw9Ui.js", "/assets/meta-DJqpMUuV.js", "/assets/image-cK7Yol7S.js", "/assets/visually-hidden-CreUTIVu.js", "/assets/style-CdyozSHa.js", "/assets/project-DSBsmGGT.js", "/assets/components-Dta19ZtI.js", "/assets/config-YH5w3qyB.js", "/assets/section-WIR9c-n7.js", "/assets/useParallax-De53biP0.js"], "css": ["/assets/route-CwDSZRuz.css", "/assets/meta-O_oOCUsK.css", "/assets/image-MLIZ5YGx.css", "/assets/visually-hidden-BpS8kiyk.css", "/assets/project-C8oXv4p4.css", "/assets/section-wHvjtrwc.css"] }, "routes/projects.shravan-app": { "id": "routes/projects.shravan-app", "parentId": "root", "path": "projects/shravan-app", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route-Db0DWHtN.js", "imports": ["/assets/preload-helper-D7HrI6pR.js", "/assets/jsx-runtime-BMrMXMSG.js", "/assets/spr-lesson-builder-light-placeholder-I19Gw9Ui.js", "/assets/oswald-bg-dark-C-sRVmnq.js", "/assets/meta-DJqpMUuV.js", "/assets/image-cK7Yol7S.js", "/assets/project-DSBsmGGT.js", "/assets/style-CdyozSHa.js", "/assets/components-Dta19ZtI.js", "/assets/config-YH5w3qyB.js", "/assets/section-WIR9c-n7.js", "/assets/useParallax-De53biP0.js"], "css": ["/assets/meta-O_oOCUsK.css", "/assets/image-MLIZ5YGx.css", "/assets/project-C8oXv4p4.css", "/assets/section-wHvjtrwc.css"] }, "routes/articles.no-shower": { "id": "routes/articles.no-shower", "parentId": "routes/articles", "path": "no-shower", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/articles.no-shower-DNdQV02-.js", "imports": ["/assets/jsx-runtime-BMrMXMSG.js", "/assets/index-CGtxawJD.js"], "css": [] }, "routes/articles_._index": { "id": "routes/articles_._index", "parentId": "root", "path": "articles", "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route-GiR3Ht8s.js", "imports": ["/assets/meta-DJqpMUuV.js", "/assets/jsx-runtime-BMrMXMSG.js", "/assets/image-cK7Yol7S.js", "/assets/decoder-text-CtFIuefh.js", "/assets/divider-VR2YzdTk.js", "/assets/section-WIR9c-n7.js", "/assets/useWindowSize-DlOz3mXe.js", "/assets/date-DvyCAN0s.js", "/assets/style-CdyozSHa.js", "/assets/components-Dta19ZtI.js", "/assets/config-YH5w3qyB.js", "/assets/visually-hidden-CreUTIVu.js", "/assets/use-spring-2oVTzKD3.js", "/assets/index-C7rQJm6-.js"], "css": ["/assets/route-2ahMLohn.css", "/assets/meta-O_oOCUsK.css", "/assets/image-MLIZ5YGx.css", "/assets/decoder-text-9RaPT1ab.css", "/assets/visually-hidden-BpS8kiyk.css", "/assets/divider-RCNywGVV.css", "/assets/section-wHvjtrwc.css"] }, "routes/projects.slice": { "id": "routes/projects.slice", "parentId": "root", "path": "projects/slice", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route-BfjMskk5.js", "imports": ["/assets/jsx-runtime-BMrMXMSG.js", "/assets/meta-DJqpMUuV.js", "/assets/image-cK7Yol7S.js", "/assets/project-DSBsmGGT.js", "/assets/style-CdyozSHa.js", "/assets/components-Dta19ZtI.js", "/assets/config-YH5w3qyB.js", "/assets/section-WIR9c-n7.js", "/assets/useParallax-De53biP0.js"], "css": ["/assets/route-DBxCm94u.css", "/assets/meta-O_oOCUsK.css", "/assets/image-MLIZ5YGx.css", "/assets/project-C8oXv4p4.css", "/assets/section-wHvjtrwc.css"] }, "routes/api.set-theme": { "id": "routes/api.set-theme", "parentId": "root", "path": "api/set-theme", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/api.set-theme-l0sNRNKZ.js", "imports": [], "css": [] }, "routes/tech-stack": { "id": "routes/tech-stack", "parentId": "root", "path": "tech-stack", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route-TVhXb3iX.js", "imports": ["/assets/jsx-runtime-BMrMXMSG.js", "/assets/meta-DJqpMUuV.js", "/assets/list-27LvJ9Zq.js", "/assets/project-DSBsmGGT.js", "/assets/style-CdyozSHa.js", "/assets/components-Dta19ZtI.js", "/assets/image-cK7Yol7S.js", "/assets/config-YH5w3qyB.js", "/assets/section-WIR9c-n7.js", "/assets/useParallax-De53biP0.js"], "css": ["/assets/route-D3qy7m5X.css", "/assets/meta-O_oOCUsK.css", "/assets/image-MLIZ5YGx.css", "/assets/list-A5E2UkK_.css", "/assets/project-C8oXv4p4.css", "/assets/section-wHvjtrwc.css"] }, "routes/articles": { "id": "routes/articles", "parentId": "root", "path": "articles", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route-DVd2c7q5.js", "imports": ["/assets/jsx-runtime-BMrMXMSG.js", "/assets/divider-VR2YzdTk.js", "/assets/meta-DJqpMUuV.js", "/assets/image-cK7Yol7S.js", "/assets/section-WIR9c-n7.js", "/assets/useParallax-De53biP0.js", "/assets/useScrollToHash-BH8nWTg6.js", "/assets/clamp-e7DugykH.js", "/assets/date-DvyCAN0s.js", "/assets/style-CdyozSHa.js", "/assets/components-Dta19ZtI.js", "/assets/list-27LvJ9Zq.js", "/assets/index-CGtxawJD.js", "/assets/config-YH5w3qyB.js"], "css": ["/assets/route-C-22_ukK.css", "/assets/divider-RCNywGVV.css", "/assets/meta-O_oOCUsK.css", "/assets/image-MLIZ5YGx.css", "/assets/section-wHvjtrwc.css", "/assets/list-A5E2UkK_.css"] }, "routes/contact": { "id": "routes/contact", "parentId": "root", "path": "contact", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route-CkHdKlZL.js", "imports": ["/assets/jsx-runtime-BMrMXMSG.js", "/assets/section-WIR9c-n7.js", "/assets/components-Dta19ZtI.js", "/assets/style-CdyozSHa.js"], "css": ["/assets/route-DGB5JDKo.css", "/assets/section-wHvjtrwc.css"] }, "routes/home": { "id": "routes/home", "parentId": "root", "path": "home", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route-CnC8cOHn.js", "imports": ["/assets/route-B_CwCvKb.js", "/assets/jsx-runtime-BMrMXMSG.js", "/assets/oswald-bg-dark-C-sRVmnq.js", "/assets/meta-DJqpMUuV.js", "/assets/style-CdyozSHa.js", "/assets/components-Dta19ZtI.js", "/assets/image-cK7Yol7S.js", "/assets/config-YH5w3qyB.js", "/assets/preload-helper-D7HrI6pR.js", "/assets/decoder-text-CtFIuefh.js", "/assets/visually-hidden-CreUTIVu.js", "/assets/use-spring-2oVTzKD3.js", "/assets/index-C7rQJm6-.js", "/assets/section-WIR9c-n7.js", "/assets/useScrollToHash-BH8nWTg6.js", "/assets/divider-VR2YzdTk.js", "/assets/useWindowSize-DlOz3mXe.js"], "css": ["/assets/route-B21ryf_9.css", "/assets/meta-O_oOCUsK.css", "/assets/image-MLIZ5YGx.css", "/assets/decoder-text-9RaPT1ab.css", "/assets/visually-hidden-BpS8kiyk.css", "/assets/section-wHvjtrwc.css", "/assets/divider-RCNywGVV.css"] }, "routes/$": { "id": "routes/$", "parentId": "root", "path": "*", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/_-ZfJ_y8or.js", "imports": ["/assets/jsx-runtime-BMrMXMSG.js", "/assets/error-DaBnVUir.js", "/assets/components-Dta19ZtI.js", "/assets/image-cK7Yol7S.js", "/assets/style-CdyozSHa.js", "/assets/decoder-text-CtFIuefh.js", "/assets/visually-hidden-CreUTIVu.js", "/assets/use-spring-2oVTzKD3.js", "/assets/index-C7rQJm6-.js"], "css": ["/assets/error-BT7XG2_u.css", "/assets/image-MLIZ5YGx.css", "/assets/decoder-text-9RaPT1ab.css", "/assets/visually-hidden-BpS8kiyk.css"] }, "routes/home/route": { "id": "routes/home/route", "parentId": "root", "path": "/", "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route-CnC8cOHn.js", "imports": ["/assets/route-B_CwCvKb.js", "/assets/jsx-runtime-BMrMXMSG.js", "/assets/oswald-bg-dark-C-sRVmnq.js", "/assets/meta-DJqpMUuV.js", "/assets/style-CdyozSHa.js", "/assets/components-Dta19ZtI.js", "/assets/image-cK7Yol7S.js", "/assets/config-YH5w3qyB.js", "/assets/preload-helper-D7HrI6pR.js", "/assets/decoder-text-CtFIuefh.js", "/assets/visually-hidden-CreUTIVu.js", "/assets/use-spring-2oVTzKD3.js", "/assets/index-C7rQJm6-.js", "/assets/section-WIR9c-n7.js", "/assets/useScrollToHash-BH8nWTg6.js", "/assets/divider-VR2YzdTk.js", "/assets/useWindowSize-DlOz3mXe.js"], "css": ["/assets/route-B21ryf_9.css", "/assets/meta-O_oOCUsK.css", "/assets/image-MLIZ5YGx.css", "/assets/decoder-text-9RaPT1ab.css", "/assets/visually-hidden-BpS8kiyk.css", "/assets/section-wHvjtrwc.css", "/assets/divider-RCNywGVV.css"] } }, "url": "/assets/manifest-e2dcc5cd.js", "version": "e2dcc5cd" };
const mode = "production";
const assetsBuildDirectory = "build/client";
const basename = "/";
const future = { "v3_fetcherPersist": false, "v3_relativeSplatPath": false, "v3_throwAbortReason": false, "v3_routeConfig": false, "v3_singleFetch": false, "v3_lazyRouteDiscovery": false, "unstable_optimizeDeps": false };
const isSpaMode = false;
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/projects.volkihar-knight": {
    id: "routes/projects.volkihar-knight",
    parentId: "root",
    path: "projects/volkihar-knight",
    index: void 0,
    caseSensitive: void 0,
    module: route1
  },
  "routes/articles.creative-itch": {
    id: "routes/articles.creative-itch",
    parentId: "routes/articles",
    path: "creative-itch",
    index: void 0,
    caseSensitive: void 0,
    module: route2
  },
  "routes/articles.power-stories": {
    id: "routes/articles.power-stories",
    parentId: "routes/articles",
    path: "power-stories",
    index: void 0,
    caseSensitive: void 0,
    module: route3
  },
  "routes/projects.smart-sparrow": {
    id: "routes/projects.smart-sparrow",
    parentId: "root",
    path: "projects/smart-sparrow",
    index: void 0,
    caseSensitive: void 0,
    module: route4
  },
  "routes/projects.shravan-app": {
    id: "routes/projects.shravan-app",
    parentId: "root",
    path: "projects/shravan-app",
    index: void 0,
    caseSensitive: void 0,
    module: route5
  },
  "routes/articles.no-shower": {
    id: "routes/articles.no-shower",
    parentId: "routes/articles",
    path: "no-shower",
    index: void 0,
    caseSensitive: void 0,
    module: route6
  },
  "routes/articles_._index": {
    id: "routes/articles_._index",
    parentId: "root",
    path: "articles",
    index: true,
    caseSensitive: void 0,
    module: route7
  },
  "routes/projects.slice": {
    id: "routes/projects.slice",
    parentId: "root",
    path: "projects/slice",
    index: void 0,
    caseSensitive: void 0,
    module: route8
  },
  "routes/api.set-theme": {
    id: "routes/api.set-theme",
    parentId: "root",
    path: "api/set-theme",
    index: void 0,
    caseSensitive: void 0,
    module: route9
  },
  "routes/tech-stack": {
    id: "routes/tech-stack",
    parentId: "root",
    path: "tech-stack",
    index: void 0,
    caseSensitive: void 0,
    module: route10
  },
  "routes/articles": {
    id: "routes/articles",
    parentId: "root",
    path: "articles",
    index: void 0,
    caseSensitive: void 0,
    module: route11
  },
  "routes/contact": {
    id: "routes/contact",
    parentId: "root",
    path: "contact",
    index: void 0,
    caseSensitive: void 0,
    module: route12
  },
  "routes/home": {
    id: "routes/home",
    parentId: "root",
    path: "home",
    index: void 0,
    caseSensitive: void 0,
    module: route15
  },
  "routes/$": {
    id: "routes/$",
    parentId: "root",
    path: "*",
    index: void 0,
    caseSensitive: void 0,
    module: route14
  },
  "routes/home/route": {
    id: "routes/home/route",
    parentId: "root",
    path: "/",
    index: true,
    caseSensitive: void 0,
    module: route15
  }
};
const serverBuild = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  assets: serverManifest,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  mode,
  publicPath,
  routes
}, Symbol.toStringTag, { value: "Module" }));
export {
  Loader as L,
  ModelAnimationType as M,
  Section as S,
  Transition as T,
  classes as a,
  useWindowSize as b,
  cssProps as c,
  numToPx as d,
  media as e,
  clamp as f,
  useTheme as g,
  mode as h,
  assetsBuildDirectory as i,
  basename as j,
  future as k,
  isSpaMode as l,
  msToNum as m,
  numToMs as n,
  entry as o,
  publicPath as p,
  routes as q,
  resolveSrcFromSrcSet as r,
  serverManifest as s,
  tokens as t,
  useInViewport as u
};
