(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5405],
  {
    8312: function (e, t, i) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return i(1830);
        },
      ]);
    },
    4864: function (e, t) {
      "use strict";
      t.Z = {
        src: "/_next/static/media/arrow-right-gray.9037700f.svg",
        height: 24,
        width: 24,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    7837: function (e, t) {
      "use strict";
      t.Z = {
        src: "/_next/static/media/bullet.775fda1c.svg",
        height: 24,
        width: 24,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    3513: function (e, t) {
      "use strict";
      t.Z = {
        src: "/_next/static/media/logo-app-store-primary.1fbeae4f.svg",
        height: 45,
        width: 146,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    6752: function (e, t) {
      "use strict";
      t.Z = {
        src: "/_next/static/media/logo-google-play-primary.eba6171f.svg",
        height: 46,
        width: 153,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    4068: function (e, t) {
      "use strict";
      t.Z = {
        src: "/_next/static/media/qrcode.3026719f.svg",
        height: 194,
        width: 194,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    3610: function (e, t, i) {
      "use strict";
      i.d(t, {
        Z: function () {
          return m;
        },
      });
      var a = i(5893);
      i(7294);
      var s = i(5675),
        r = i.n(s),
        l = {
          src: "/_next/static/media/accordion-plus.92f9ba99.svg",
          height: 26,
          width: 24,
          blurWidth: 0,
          blurHeight: 0,
        },
        n = {
          src: "/_next/static/media/accordion-minus.f6bc4309.svg",
          height: 26,
          width: 24,
          blurWidth: 0,
          blurHeight: 0,
        },
        o = i(1526),
        c = i(3233),
        d = i(6260);
      let p = (e) => {
        let { title: t, description: i, selected: s, toggle: p } = e;
        return (0, a.jsxs)("div", {
          className:
            "border-b-[1px] border-[#EAECF0] py-[25px] last:border-b-0",
          children: [
            (0, a.jsxs)("div", {
              onClick: p,
              className: "flex justify-between gap-[24px] cursor-pointer",
              children: [
                (0, a.jsx)("p", {
                  className:
                    "font-[500] text-[1.6rem] leading-[24px] text-colorSecondary md:text-[1.8rem] md:leading-[28px]",
                  children: t,
                }),
                s
                  ? (0, a.jsx)(r(), {
                      src: n,
                      alt: "icon",
                      className:
                        "w-[24px] h-[24px] transition-all duration-300 ".concat(
                          s ? "rotate-180" : ""
                        ),
                    })
                  : (0, a.jsx)(r(), {
                      src: l,
                      alt: "icon",
                      className:
                        "w-[24px] h-[24px] transition-all duration-300 ".concat(
                          s ? "" : "rotate-[-180]"
                        ),
                    }),
              ],
            }),
            (0, a.jsx)(o.M, {
              initial: !1,
              children:
                s &&
                (0, a.jsx)(c.E.div, {
                  initial: { opacity: 0, height: 0 },
                  animate: { opacity: 1, height: "auto" },
                  exit: { height: 0, opacity: 0 },
                  transition: { duration: 0.5, ease: d.mZ },
                  layout: !0,
                  children: (0, a.jsx)("p", {
                    className:
                      "w-[95%] pt-[10px] pb-[15px] text-[1.4rem] leading-[24px] text-colorLightGray md:text-[1.6rem]",
                    dangerouslySetInnerHTML: { __html: i },
                  }),
                }),
            }),
          ],
        });
      };
      var m = p;
    },
    9185: function (e, t, i) {
      "use strict";
      var a = i(5893);
      i(7294);
      let s = (e) => {
        let { tag: t, title: i, description: s } = e;
        return (0, a.jsxs)("div", {
          className: "",
          children: [
            (0, a.jsx)("p", {
              className:
                "text-colorPrimary font-[500] text-[1rem] leading-[16px] tracking-[0.1px] uppercase md:text-[1.6rem] md:leading-[24px] md:tracking-[0.16px] mb-[4px] md:mb-[16px]",
              children: t,
            }),
            (0, a.jsx)("h2", {
              className:
                "text-colorSecondary font-[700] text-[2.2rem] leading-[32px] mb-[10px] md:w-[642px] md:font-[600] md:text-[3.2rem] md:leading-[42px] lg:text-[4rem] lg:leading-[52px] md:tracking-[0.4px] md:mb-[32px]",
              children: i,
            }),
            (0, a.jsx)("p", {
              className:
                "text-colorSecondary text-[1.6rem] leading-[24px] tracking-[0.16px] opacity-80 md:w-[626px] md:text-[2rem] md:leading-[26px] md:tracking-[0.24px] lg:leading-[34px] lg:text-[2.4rem]",
              children: s,
            }),
          ],
        });
      };
      t.Z = s;
    },
    8610: function (e, t, i) {
      "use strict";
      var a = i(5893),
        s = i(7294),
        r = i(1526),
        l = i(3233),
        n = i(5675),
        o = i.n(n),
        c = i(1266),
        d = i(4068);
      let p = (e) => {
        let { show: t = !1, close: i } = e;
        return (
          (0, s.useEffect)(() => {
            let e = (e) => {
              if ("Escape" !== e.key) return null;
              i();
            };
            return (
              document.body.addEventListener("keydown", e),
              () => {
                document.body.removeEventListener("keydown", e);
              }
            );
          }, []),
          (0, a.jsx)(r.M, {
            mode: "wait",
            children:
              t &&
              (0, a.jsx)(l.E.div, {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
                className:
                  "z-40 fixed left-0 overlay top-0 bottom-0 h-screen w-screen",
                children: (0, a.jsxs)(l.E.div, {
                  initial: { opacity: 0, scale: 0.7, y: 50 },
                  animate: {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    transition: {
                      duration: 0.4,
                      type: "spring",
                      stiffness: 200,
                    },
                  },
                  exit: { opacity: 0, scale: 0.7, y: 30 },
                  className:
                    "w-[280px] mt-[120px] sm:w-[330px] lg:w-[448px] sm:mt-[176px] 2xl:mt-[180px] min-h-[331px] lg:h-[421px] mx-auto bg-white rounded-[8px]",
                  children: [
                    (0, a.jsx)("div", {
                      className: "h-[80px] grid items-center px-[32px]",
                      children: (0, a.jsx)("div", {
                        onClick: i,
                        className:
                          "cursor-pointer justify-self-end flex justify-center items-center h-[32px] w-[32px] lg:h-[40px] lg:w-[40px] bg-colorLightGray2 rounded-full",
                        children: (0, a.jsx)(o(), {
                          src: c.Z,
                          alt: "Close Icon",
                          width: 13,
                          height: 13,
                        }),
                      }),
                    }),
                    (0, a.jsxs)("div", {
                      className:
                        "flex flex-col items-center gap-[24px] pt-[24px] pb-[32px] px-[48px]",
                      children: [
                        (0, a.jsx)(o(), {
                          src: d.Z,
                          alt: "Qr code",
                          width: 194,
                          height: 194,
                        }),
                        (0, a.jsx)("p", {
                          className:
                            "font-[500] text-colorSecondary text-[1.8rem] leading-[24px] text-center capitalize",
                          children: "Scan to download prestmit app",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
          })
        );
      };
      t.Z = p;
    },
    1582: function (e, t, i) {
      "use strict";
      i.d(t, {
        Z: function () {
          return d;
        },
      });
      var a = i(5893),
        s = i(7294),
        r = i(5675),
        l = i.n(r),
        n = {
          src: "/_next/static/media/vid-cover-img.c8b5c1fc.webp",
          height: 1797,
          width: 3504,
          blurDataURL:
            "data:image/webp;base64,UklGRl4AAABXRUJQVlA4WAoAAAAQAAAABwAAAwAAQUxQSAoAAAABB1DhiAhERP8DVlA4IC4AAACwAQCdASoIAAQAAkA4JZwAAvv1GLQAAP7zZdLw45mqxFGXq2iab9mnvBP0AAAA",
          blurWidth: 8,
          blurHeight: 4,
        },
        o = {
          src: "/_next/static/media/play.448bacbd.webp",
          height: 240,
          width: 240,
          blurDataURL:
            "data:image/webp;base64,UklGRsQAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSDcAAAABN6AmAAFGLREF9q0aERG4Qx2sIslqLIhkYEj/WQECkgJwcBfR/5jtNwNOhGshWUgBvgFn9mcAAFZQOCBmAAAAMAMAnQEqCAAIAAJAOCWwAnS6AS38QEDxBPADsvEDz5CTgAD8PIWqNd+BoAUWP7J84vHKg0TtSmYVBX/L/p6/NlmfeDPBvixv/ONd0vtT+X1f9CwG/4J6vZ9/ZHIJ2x5lihp3AAAA",
          blurWidth: 8,
          blurHeight: 8,
        };
      let c = (e) => {
        let { youtubeID: t, title: i, className: r } = e,
          [c, d] = (0, s.useState)(!1);
        return (0, a.jsx)(a.Fragment, {
          children: c
            ? (0, a.jsx)("iframe", {
                width: 560,
                height: 315,
                className:
                  "aspect-[16/9] h-full w-full p-0 rounded-[8px] border-0",
                src: "https://www.youtube.com/embed/".concat(
                  t,
                  "?&autoplay=1&rel=0"
                ),
                allow:
                  "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                allowFullScreen: !0,
                title: "Youtube Video",
              })
            : (0, a.jsxs)("div", {
                className:
                  "w-full h-full relative grid place-items-center group",
                children: [
                  (0, a.jsx)(l(), {
                    src: n,
                    alt: "",
                    className: "h-full w-full",
                  }),
                  (0, a.jsx)(l(), {
                    onClick: () => {
                      d(!0);
                    },
                    src: o,
                    alt: "Play",
                    className:
                      "border border-colorPrimary w-[32px] h-[32px] md:w-[80px] rounded-full md:h-[80px] absolute transform duration-500 group-hover:scale-110 cursor-pointer",
                  }),
                ],
              }),
        });
      };
      var d = c;
    },
    1830: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          default: function () {
            return em;
          },
        });
      var a = i(5893),
        s = i(7294),
        r = i(9008),
        l = i.n(r),
        n = i(4264),
        o = i(3233),
        c = i(5675),
        d = i.n(c),
        p = i(1664),
        m = i.n(p),
        x = i(5589),
        h = i(4864),
        A = i(82),
        u = i(4068),
        g = {
          src: "/_next/static/media/illustration-hero.45612882.svg",
          height: 140,
          width: 168,
          blurWidth: 0,
          blurHeight: 0,
        },
        w = {
          src: "/_next/static/media/hero-img.99cd9fb6.webp",
          height: 1984,
          width: 1856,
          blurDataURL:
            "data:image/webp;base64,UklGRloAAABXRUJQVlA4IE4AAADwAQCdASoHAAgAAkA4JZQCw7EegU+W9aAA/u5mEONO8J+yPfmhoVWfB4/8VxV9U469Qb9B5i1WSSZmRf+aHzMRkoxxwMjpiB2/AogAAAA=",
          blurWidth: 7,
          blurHeight: 8,
        },
        f = i(3513),
        b = i(6752),
        y = i(8610),
        v = i(9765);
      let j = new Date(),
        N = j.getMonth() > 7 ? j.getFullYear() : j.getFullYear() - 1,
        B = () => {
          let [e, t] = (0, s.useState)(!1);
          return (0, a.jsx)("section", {
            className: "pt-[128px] lg:pt-[214px] overflow-hidden",
            children: (0, a.jsxs)(o.E.div, {
              variants: (0, v.Jm)(1, 0),
              initial: "hidden",
              whileInView: "show",
              viewport: { once: !0, amount: 0.25 },
              className:
                "container light-gradient flex flex-col justify-between gap-[40px] md:gap-[100px] md:flex-row",
              children: [
                (0, a.jsxs)("div", {
                  className:
                    "flex flex-col md:pb-[50px] basis-[55%] md:basis-[50%]",
                  children: [
                    (0, a.jsxs)(o.E.div, {
                      variants: (0, v.wt)(1),
                      className:
                        "bg-[#F5F8FF] min-w-[255px] self-start flex items-center gap-[12px] text-[1.4rem] text-colorLightGray pt-[4px] pr-[10px] pb-[4px] pl-[4px] rounded-[16px]",
                      children: [
                        (0, a.jsx)("span", {
                          className:
                            "bg-white h-[24px]  flex items-center justify-center py-[2px] px-[10px] rounded-[16px]",
                          children: "Rated",
                        }),
                        (0, a.jsx)("span", {
                          children: "Best in User Experience ".concat(N),
                        }),
                        " ",
                        (0, a.jsx)(d(), {
                          src: h.Z,
                          alt: "Right Arrow",
                          className:
                            "w-[12px] h-[12px] md:w-[16px] md:h-[16px]",
                        }),
                      ],
                    }),
                    (0, a.jsx)(o.E.h1, {
                      variants: (0, v.wt)(1.1),
                      className:
                        "font-[500] text-colorSecondary text-[3.8rem] leading-[52px] lg:text-[5.4rem] lg:leading-[72px] mt-[10px]",
                      children: "Best Digital Trading Platform In Africa",
                    }),
                    (0, a.jsx)(o.E.p, {
                      variants: (0, v.wt)(1.2),
                      className:
                        "text-colorLightGray text-[1.6rem] leading-[24px] lg:text-[2rem] lg:leading-[30px] mt-[10px] mb-[20px] lg:mt-[24px] lg:mb-[48px]",
                      children:
                        "The all-in-one platform you need to buy and sell Crypto, Gift Cards, Airtime, and Utility Bills. You can pay or be paid in Naira, Cedis, Bitcoin, or USDT.",
                    }),
                    (0, a.jsxs)(o.E.div, {
                      variants: (0, v.wt)(1.3),
                      className: "flex items-center gap-[15px]",
                      children: [
                        (0, a.jsx)(m(), {
                          className: "hidden sm:block",
                          href: "https://web.prestmit.com/register",
                          children: (0, a.jsx)(x.Z, {
                            label: "Register now",
                            hasIcon: !0,
                            icon: A.Z,
                            iconStyle: "w-auto h-auto",
                            buttonClass:
                              "primary-btn justify-center items-center border border-transparent",
                          }),
                        }),
                        (0, a.jsx)("div", {
                          className: "hidden sm:block",
                          children: (0, a.jsx)(d(), {
                            src: u.Z,
                            alt: "QrCode",
                            className: "w-[54px] h-[54px] cursor-pointer",
                            onClick: () => {
                              t(!0);
                            },
                          }),
                        }),
                        (0, a.jsx)(y.Z, {
                          show: e,
                          close: () => {
                            t(!1);
                          },
                        }),
                        (0, a.jsx)(m(), {
                          className: "sm:hidden",
                          href: "https://apps.apple.com/ng/app/prestmit-gift-cards-coins/id1581960714",
                          target: "_blank",
                          children: (0, a.jsx)(d(), {
                            src: f.Z,
                            alt: "App Store",
                            className: "w-auto h-auto",
                          }),
                        }),
                        (0, a.jsx)(m(), {
                          className: "sm:hidden",
                          href: "https://play.google.com/store/apps/details?id=com.prestmit",
                          target: "_blank",
                          children: (0, a.jsx)(d(), {
                            src: b.Z,
                            alt: "Play Store",
                            className: "w-auto h-auto",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, a.jsxs)(o.E.div, {
                  className: "basis-[45%] relative md:basis-[50%]",
                  variants: v.cQ,
                  initial: "init",
                  animate: "visible",
                  children: [
                    (0, a.jsx)("div", {
                      children: (0, a.jsx)(d(), {
                        className:
                          "w-[56px] h-[auto] absolute left-[-50px] md:w-[90px] md:left-[-80px] lg:w-[160px] lg:left-[-140px] md:top-[-10px]",
                        src: g,
                        alt: "Hero Illustration",
                      }),
                    }),
                    (0, a.jsx)("div", {
                      children: (0, a.jsx)(d(), {
                        src: w,
                        alt: "Hero Image",
                        className: "w-[327px] md:w-[590px] md:h-auto lg:h-auto",
                      }),
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        C = (e) => {
          let { icon: t, title: i, description: s, alt: r } = e;
          return (0, a.jsxs)("div", {
            className:
              "sm:basis-[48%] md:basis-[30%] flex flex-col items-center justify-center bg-[#00000014] py-[32px] px-[15px] rounded-[8px]",
            children: [
              (0, a.jsx)(d(), { src: t, alt: r, width: 48, height: 48 }),
              (0, a.jsx)("p", {
                className:
                  "font-[500] text-[2rem] leading-[24px] lg:text-[2.4rem] lg:leading-[32px] text-white text-center mt-[25px] mb-[10px]",
                children: i,
              }),
              (0, a.jsx)("p", {
                className:
                  "text-[1.6rem] leading-[32px] text-[#CED2DB] text-center",
                dangerouslySetInnerHTML: { __html: s },
              }),
            ],
          });
        },
        k = [
          {
            icon: {
              src: "/_next/static/media/gift-cards.11867fbd.svg",
              height: 48,
              width: 48,
              blurWidth: 0,
              blurHeight: 0,
            },
            title: "Buy & Sell Gift Cards",
            description:
              "You can <a href=/buy-gift-card target=_blank>buy gift cards</a> or <a href=/sell-gift-card target=_blank>sell gift cards</a> on Prestmit. Browse our extensive gift card catalogue and enjoy the best rates and prices.",
            alt: "Gift Card",
          },
          {
            icon: {
              src: "/_next/static/media/cryptocurrencies.6031f99c.svg",
              height: 48,
              width: 48,
              blurWidth: 0,
              blurHeight: 0,
            },
            title: "Buy & Sell Cryptocurrencies",
            description:
              "You can easily buy and sell Bitcoin, Litecoin, Dogecoin, Ethereum, TRON, USDT, and more. All crypto transactions are automatic, safe and instant. ",
            alt: "Cryptocurrency",
          },
          {
            icon: {
              src: "/_next/static/media/bills.e77ec8a2.svg",
              height: 48,
              width: 48,
              blurWidth: 0,
              blurHeight: 0,
            },
            title: "Pay Bills, Buy & Sell Airtime",
            description:
              "You can buy cheap airtime (with up to 20% off), sell excess airtime for cash, and pay your utility bills, including electricity, internet, cable TV, etc.",
            alt: "Pay Bills",
          },
        ],
        E = () =>
          (0, a.jsx)("section", {
            className: "bg-colorSecondary py-[100px]",
            children: (0, a.jsxs)("div", {
              className: "container",
              children: [
                (0, a.jsx)("p", {
                  className:
                    "text-[1.6rem] font-[500] leading-[24px] text-center text-colorPrimary uppercase",
                  children: "what we offer",
                }),
                (0, a.jsx)("p", {
                  className:
                    "max-w-[334px] mx-auto text-[2.2rem] leading-[34px] font-[600] text-center text-white mt-[20px] mb-[80px] md:max-w-[454px] md:text-[3.2rem] md:leading-[44px]",
                  children: "Here Are The Goodies You Enjoy With Prestmit",
                }),
                (0, a.jsx)("div", {
                  className:
                    "flex flex-wrap gap-[30px] sm:justify-center sm:gap-x-[20px] sm:gap-y-[30px] md:gap-[20px] lg:justify-between lg:gap-[32px]",
                  children: k.map((e, t) =>
                    (0, a.jsx)(
                      C,
                      {
                        icon: e.icon,
                        title: e.title,
                        description: e.description,
                        alt: e.alt,
                      },
                      t
                    )
                  ),
                }),
              ],
            }),
          });
      var S = {
          src: "/_next/static/media/feature-sketch.91a969cf.svg",
          height: 153,
          width: 213,
          blurWidth: 0,
          blurHeight: 0,
        },
        W = {
          src: "/_next/static/media/ambassador.e352ec33.webp",
          height: 2616,
          width: 1732,
          blurDataURL:
            "data:image/webp;base64,UklGRngAAABXRUJQVlA4WAoAAAAQAAAABAAABwAAQUxQSBIAAAABD9D/iAgIBJIV8tcdIqL/oQFWUDggQAAAALABAJ0BKgUACAACQDgljAACnSJowgAA/vhFTX54h9VPT2t24WbbDvKekgm/pCz5/D/vqNfcanJr334RCjm0AAA=",
          blurWidth: 5,
          blurHeight: 8,
        },
        R = i(9185);
      let I = (e) => {
        let { img: t, title: i, description: s } = e;
        return (0, a.jsxs)("div", {
          className:
            "flex gap-[20px] border-b-[1px] border-colorLightGray3 pt-[30px] pb-[20px] last:pb-0 first:pt-0 md:pt-[42px] md:pb-[32px] md:border-b-[2px] last:border-b-0",
          children: [
            (0, a.jsx)("div", {
              className: "w-[18px] h-[18px] md:w-[24px] md:h-[24px]",
              children: (0, a.jsx)(d(), {
                src: t,
                alt: "Bullet point",
                className:
                  "w-auto h-auto translate-y-[2.5px] sm:translate-y-[3px]",
              }),
            }),
            (0, a.jsxs)("div", {
              className: "flex-1",
              children: [
                (0, a.jsx)("p", {
                  className:
                    "font-[500] text-colorSecondary text-[1.8rem] leading-[24px] md:text-[2rem] md:leading-[28px] lg:text-[2.4rem] lg:leading-[32px]",
                  children: i,
                }),
                (0, a.jsx)("p", {
                  className:
                    "2xl:w-[405px] text-colorLightGray text-[1.4rem] leading-[24px] mt-[8px] md:text-[1.65rem] md:leading-[28px] lg:text-[1.8rem] lg:leading-[32px]",
                  children: s,
                }),
              ],
            }),
          ],
        });
      };
      var U = i(7837);
      let D = [
          {
            img: U.Z,
            title: "Built With Simplicity",
            description:
              "From interface to transactions, everything on Prestmit is straightforward.",
          },
          {
            img: U.Z,
            title: "24/7 Support",
            description:
              "Our team is always available 24/7 to respond to all your questions.",
          },
          {
            img: U.Z,
            title: "Instant Payment",
            description:
              "Our withdrawal timeline is one of the fastest out there; your payment is processed within the same minute.",
          },
          {
            img: U.Z,
            title: "Multiple Payment Options",
            description:
              "You can pay or be paid in Naira, Cedis, or Cryptocurrencies (Bitcoin or USDT).",
          },
        ],
        _ = () =>
          (0, a.jsx)("section", {
            className: "py-[56px] md:pb-[159px] md:pt-[133px]",
            children: (0, a.jsxs)("div", {
              className: "container",
              children: [
                (0, a.jsx)("div", {
                  className: "md:pl-[30px]",
                  children: (0, a.jsx)(R.Z, {
                    tag: "why choose prestmit",
                    title: "And... Why Is Prestmit Special?",
                    description:
                      "Because it’s THE ONLY PLATFORM that provides you with everything you need to have a wonderful digital trading experience.",
                  }),
                }),
                (0, a.jsx)("div", {
                  className: "relative",
                  children: (0, a.jsx)(d(), {
                    src: S,
                    alt: "sketch",
                    className:
                      "w-[78px] h-[55.86px] md:w-[210.51px] md:h-[150.76px] absolute top-[-10px] left-[35px] lg:top-[40px] lg:left-[110px]",
                  }),
                }),
                (0, a.jsxs)("div", {
                  className:
                    "flex flex-col-reverse items-center gap-[40px] 2xl:gap-[100px] md:flex-row bg-colorLightGray2 py-[32px] px-[16px] md:py-[60px] md:px-[30px] 2xl:px-[113px] lg:py-[98px] mt-[28px] md:mt-[145px] rounded-[10px]",
                  children: [
                    (0, a.jsx)("div", {
                      className: "basis-[50%]",
                      children: (0, a.jsx)(d(), {
                        src: W,
                        alt: "Ambassador",
                        className: "w-auto h-auto",
                      }),
                    }),
                    (0, a.jsx)("div", {
                      className: "basis-[50%] flex flex-col",
                      children: D.map((e, t) =>
                        (0, a.jsx)(
                          I,
                          {
                            img: e.img,
                            title: e.title,
                            description: e.description,
                          },
                          t
                        )
                      ),
                    }),
                  ],
                }),
              ],
            }),
          });
      var P = {
        src: "/_next/static/media/wallet.6953abf4.webp",
        height: 1887,
        width: 2140,
        blurDataURL:
          "data:image/webp;base64,UklGRkAAAABXRUJQVlA4IDQAAACwAQCdASoIAAcAAkA4JZwCdAEOI+oAAP79RZoqPMXe9NDrfz34meXAbF7WyEn5gpAedAAA",
        blurWidth: 8,
        blurHeight: 7,
      };
      let G = (e) => {
        let { img: t, description: i } = e;
        return (0, a.jsxs)("div", {
          className: "flex gap-[12px] md:gap-[16px]",
          children: [
            (0, a.jsx)("div", {
              className: "w-[20px] h-[20px] md:w-[24px] md:h-[24px]",
              children: (0, a.jsx)(d(), {
                src: t,
                alt: "Bullet Point",
                className: "w-auto h-auto",
              }),
            }),
            (0, a.jsx)("p", {
              className:
                "flex-1 text-[1.4rem] leading-[24px] text-colorLightGray3 md:text-[1.6rem] lg:text-[1.8rem] lg:leading-[32px]",
              children: i,
            }),
          ],
        });
      };
      var H = {
        src: "/_next/static/media/bullet-round-checked.936066fb.svg",
        height: 25,
        width: 24,
        blurWidth: 0,
        blurHeight: 0,
      };
      let T = [
          {
            img: H,
            description:
              "2FA Security: You won’t have to worry about your security with the double padlock.",
          },
          {
            img: H,
            description:
              "Global Accessibility: Receive crypto payments from anywhere in the world seamlessly.",
          },
          {
            img: H,
            description:
              "Diverse Wallet Options: Support for Bitcoin, Ethereum, TRON, and up to 10 coins.",
          },
        ],
        L = () =>
          (0, a.jsx)("section", {
            className:
              "cryptoWalletSection flex items-center bg-colorSecondary relative pt-[45px] pb-[37px] lg:h-[850px]",
            children: (0, a.jsxs)("div", {
              className: "container grid grid-cols-2 cryptoWalletGrid",
              children: [
                (0, a.jsxs)("div", {
                  className: "lg:w-[535px]",
                  children: [
                    (0, a.jsx)("h2", {
                      className:
                        "font-[600] text-[2.2rem] text-colorLightGray2 leading-[32px] md:text-[3rem] lg:text-[4rem] lg:leading-[52px] lg:-w-[489px]",
                      children: "Get A Secure Crypto Wallet Address",
                    }),
                    (0, a.jsx)("p", {
                      className:
                        "text-[1.4rem] text-colorLightGray3 leading-[24px] mt-[16px] md:text-[1.6rem] lg:mt-[24px] lg:text-[1.8rem] lg:leading-[32px]",
                      children:
                        "On Prestmit, you can access highly secured Bitcoin, Tether (USDT), Dogecoin, Ethereum, TRON, and Litecoin wallets with unique addresses that can receive crypto anywhere.",
                    }),
                    (0, a.jsx)("div", {
                      className:
                        "flex flex-col gap-[16px] my-[24px] lg:my-[40px]",
                      children: T.map((e, t) =>
                        (0, a.jsx)(
                          G,
                          { img: e.img, description: e.description },
                          t
                        )
                      ),
                    }),
                    (0, a.jsx)(m(), {
                      className: "inline-flex",
                      href: "https://web.prestmit.com/register",
                      target: "_blank",
                      children: (0, a.jsx)(x.Z, {
                        label: "Sign up now",
                        hasIcon: !0,
                        icon: A.Z,
                        iconStyle: "w-auto h-auto",
                        buttonClass:
                          "primary-btn items-center justify-center border-[0px]",
                      }),
                    }),
                  ],
                }),
                (0, a.jsx)("div", {
                  className: "sm:flex sm:items-center",
                  children: (0, a.jsx)("div", {
                    className:
                      "absolute right-0 xl:w-[684px] cryptoWalletGridImgContainer",
                    children: (0, a.jsx)("div", {
                      children: (0, a.jsx)(d(), {
                        src: P,
                        alt: "Wallet",
                        className: "rounded-l-[12px] object-cover object-top",
                      }),
                    }),
                  }),
                }),
              ],
            }),
          });
      var Q = i(1582);
      let Z = () =>
        (0, a.jsx)("section", {
          className: "py-[40px] md:py-[100px]",
          children: (0, a.jsxs)("div", {
            className: "max-w-1168 flex flex-col gap-[32px] md:gap-[64px]",
            children: [
              (0, a.jsx)(R.Z, {
                tag: "GET TO KNOW MORE",
                title: "The Prestmit Lifestyle",
                description:
                  "Check the quick video below and picture yourself within the Prestmit ecosystem. I bet you will confirm it’s a good place to be in. ",
              }),
              (0, a.jsx)("div", {
                children: (0, a.jsx)(Q.Z, { youtubeID: "MtMW_jBC9DE" }),
              }),
            ],
          }),
        });
      var F = {
          src: "/_next/static/media/arrow-previous.e41091f6.svg",
          height: 49,
          width: 23,
          blurWidth: 0,
          blurHeight: 0,
        },
        O = {
          src: "/_next/static/media/arrow-next.f06b5af4.svg",
          height: 49,
          width: 24,
          blurWidth: 0,
          blurHeight: 0,
        },
        M = {
          src: "/_next/static/media/star.d468a880.svg",
          height: 25,
          width: 24,
          blurWidth: 0,
          blurHeight: 0,
        };
      let V = (e) => {
        let {
          avatar: t,
          username: i,
          reviewApp: s,
          reviewAppAlt: r,
          testimony: l,
        } = e;
        return (0, a.jsx)(a.Fragment, {
          children: (0, a.jsxs)("div", {
            className:
              "slider-item bg-white min-w-[335px] lg:min-w-[385px] flex flex-col gap-[12px] pl-[24px] pt-[24px] pb-[24px] pr-[24px] md:p-[24px] rounded-[8px] border border-[#E7EAEC] snap-start",
            children: [
              (0, a.jsxs)("div", {
                className: "flex justify-between",
                children: [
                  (0, a.jsx)("div", {
                    children: (0, a.jsx)(d(), {
                      src: t,
                      alt: "",
                      className: "w-auto h-auto",
                    }),
                  }),
                  (0, a.jsxs)("div", {
                    className: "flex gap-[4px]",
                    children: [
                      (0, a.jsx)(d(), {
                        src: M,
                        alt: "",
                        className: "w-[24px] h-[24px]",
                      }),
                      (0, a.jsx)(d(), {
                        src: M,
                        alt: "",
                        className: "w-[24px] h-[24px]",
                      }),
                      (0, a.jsx)(d(), {
                        src: M,
                        alt: "",
                        className: "w-[24px] h-[24px]",
                      }),
                      (0, a.jsx)(d(), {
                        src: M,
                        alt: "",
                        className: "w-[24px] h-[24px]",
                      }),
                      (0, a.jsx)(d(), {
                        src: M,
                        alt: "",
                        className: "w-[24px] h-[24px]",
                      }),
                    ],
                  }),
                ],
              }),
              (0, a.jsxs)("div", {
                className: "flex flex-col gap-[6px]",
                children: [
                  (0, a.jsx)("p", {
                    className:
                      "text-colorSecondary font-[700] text-[2rem] tracking-[0.44px] md:text-[2.2rem]",
                    children: i,
                  }),
                  (0, a.jsx)("div", {
                    children: (0, a.jsx)(d(), {
                      src: s,
                      alt: r,
                      className: "w-auto h-auto",
                    }),
                  }),
                ],
              }),
              (0, a.jsx)("p", {
                className:
                  "text-colorLightGray text-[1.4rem] leading-[28px] tracking-[0.32px] md:text-[1.6rem]",
                children: l,
              }),
            ],
          }),
        });
      };
      var J = {
          src: "/_next/static/media/avatar-m-1.efa685e9.svg",
          height: 64,
          width: 64,
          blurWidth: 0,
          blurHeight: 0,
        },
        Y = {
          src: "/_next/static/media/avatar-m-2.a6e400b4.svg",
          height: 63,
          width: 63,
          blurWidth: 0,
          blurHeight: 0,
        },
        q = {
          src: "/_next/static/media/logo-app-store.31d6c8fd.svg",
          height: 24,
          width: 24,
          blurWidth: 0,
          blurHeight: 0,
        },
        X = {
          src: "/_next/static/media/logo-google-play.a61f1cf7.svg",
          height: 23,
          width: 23,
          blurWidth: 0,
          blurHeight: 0,
        };
      let K = [
          {
            avatar: J,
            username: "DeeCross11",
            reviewApp: q,
            reviewAppAlt: "app store",
            testimony:
              "This app is an epitome of excellence. Their service is great and very fast. I traded my gift card and it was approved in few minutes. Withdrawals are also super fast. Their customers support are friendly and very helpful, ever ready to help out with any issues and they are available 24/7. They are the best.",
          },
          {
            avatar: {
              src: "/_next/static/media/avatar-f-1.35f0850a.svg",
              height: 64,
              width: 64,
              blurWidth: 0,
              blurHeight: 0,
            },
            username: "Dupe Salami",
            reviewApp: X,
            reviewAppAlt: "play store",
            testimony:
              "I was afraid of being disappointed at first because I'm a first-time user but I had to just give it a trial and wow I was amazed by how wonderful they put a smile on my face. It is easy, friendly and trustworthy. I could even monitor the rates as they go up and down and decide on the best time to trade.",
          },
          {
            avatar: Y,
            username: "Moses Esho",
            reviewApp: {
              src: "/_next/static/media/logo-trustpilot.77dd522d.svg",
              height: 18,
              width: 74,
              blurWidth: 0,
              blurHeight: 0,
            },
            reviewAppAlt: "trustpilot",
            testimony:
              "I really can say it is the best trading platform I ever tried. My first experience, I was scared but they have never let me down since my first usage. I recommend Prestmit to anyone who wants transparent and easy transaction for their cryptocurrencies. Also, the daily proverb from Tunde is usually funny.",
          },
          {
            avatar: Y,
            username: "Oladeru Olaitan Thomas",
            reviewApp: X,
            reviewAppAlt: "play store",
            testimony:
              "Absolutely flawless operation! I registered few moments ago, sent crypto from an external wallet and upon confirmation, got it withdrawn to my local bank accounts in minutes. The interface is superb, and everything very easy to understand. I hope it will continue like this.",
          },
          {
            avatar: J,
            username: "UsahJacob",
            reviewApp: q,
            reviewAppAlt: "app store",
            testimony:
              "Prestmit is an amazing trading app! Its user-friendly interface and comprehensive gift card info make transactions a breeze. Real-time deals saved me money, and the responsive customer support was excellent. My only suggestion: add offline access. Highly recommend!",
          },
          {
            avatar: Y,
            username: "Charles Oweikeme",
            reviewApp: X,
            reviewAppAlt: "play store",
            testimony:
              "Been using presmit for over a year. I am extremely impressed by the speed and reliability of their service. Their website is easy to use, and I am able to buy gift cards for my needs. The checkout process is fast and secure, and I receive the codes almost immediately. I recommend. ",
          },
        ],
        z = () => {
          let [e, t] = (0, s.useState)(0),
            [i, r] = (0, s.useState)(0),
            l = (0, s.useRef)(null),
            n = (0, s.useRef)(0),
            o = () => {
              let i = l.current.clientWidth;
              (l.current.scrollLeft = l.current.scrollLeft - i),
                e > 0 && t((e) => e - 1);
            },
            c = () => {
              let e = l.current.clientWidth;
              (l.current.scrollLeft = +l.current.scrollLeft + +e),
                null !== l.current &&
                  l.current.scrollLeft <= n.current &&
                  t((e) => e + 1);
            },
            p = (t) =>
              "prev" === t
                ? e <= 0
                : "next" === t &&
                  null !== l.current &&
                  l.current.offsetWidth * e >= n.current;
          return (
            (0, s.useEffect)(() => {
              let e = () => {
                r(window.innerWidth);
              };
              return (
                window.addEventListener("resize", e),
                () => {
                  window.removeEventListener("resize", e);
                }
              );
            }, []),
            (0, s.useEffect)(() => {
              l.current.scrollLeft = l.current.offsetWidth * e;
            }, [e, i]),
            (0, s.useEffect)(() => {
              n.current = l.current.scrollWidth - l.current.offsetWidth;
            }, [i]),
            (0, a.jsx)("section", {
              className: "bg-colorSecondary py-[64px] md:py-[100px]",
              children: (0, a.jsxs)("div", {
                className: "container flex flex-col gap-[30px] md:gap-[56px]",
                children: [
                  (0, a.jsxs)("div", {
                    className: "flex items-center justify-between gap-[20px]",
                    children: [
                      (0, a.jsxs)("div", {
                        className: "w-[300px] sm:w-auto lg:w-[642px]",
                        children: [
                          (0, a.jsx)("p", {
                            className:
                              "text-colorPrimary font-[500] text-[1rem] leading-[16px] md:text-[1.3rem] lg:text-[1.6rem] lg:leading-[24px] md:tracking-[0.16px] uppercase",
                            children: "Don't take our word for it",
                          }),
                          (0, a.jsx)("p", {
                            className:
                              "text-white font-[600] text-[2.2rem] leading-[34px] mt-[8px] lg:text-[4rem] lg:leading-[52px] md:tracking-[0.4px] md:mt-[16px]",
                            children:
                              "See what some of our customers have to say.",
                          }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className: "flex gap-[8px]",
                        children: [
                          (0, a.jsx)("button", {
                            className:
                              "w-[22.7px] h-[48px] opacity-80 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed transition-all ease-in-out duration-300",
                            onClick: o,
                            disabled: p("prev"),
                            children: (0, a.jsx)(d(), {
                              src: F,
                              alt: "previous",
                              className: "w-auto h-auto",
                            }),
                          }),
                          (0, a.jsx)("button", {
                            className:
                              "w-[22.7px] h-[48px] opacity-80 hover:opacity-100 disabled:opacity-30 disabled:cursor-not-allowed transition-all ease-in-out duration-300",
                            onClick: c,
                            disabled: p("next"),
                            children: (0, a.jsx)(d(), {
                              src: O,
                              alt: "next",
                              className: "w-auto h-auto",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsx)("div", {
                    className: "overflow-hidden",
                    children: (0, a.jsx)("div", {
                      ref: l,
                      className:
                        "flex gap-[24px] sm:gap-[24px] overflow-hidden scroll-smooth snap-x snap-mandatory",
                      children: K.map((e, t) => (0, a.jsx)(V, { ...e }, t)),
                    }),
                  }),
                ],
              }),
            })
          );
        };
      var $ = i(3610);
      let ee = [
          {
            title: "How Does Prestmit Work?",
            description:
              "We've built Prestmit with love to give you the simplest trading experience ever, so you will never find it difficult to use. From creating an account to carrying out any form of transaction, we have tooltips and guides in place within the app to help you. You will also receive notifications via email and SMS on transaction updates, so you're never in the dark. <p class=mt-[10px]>And if you need a specific guide on how certain features within the app work, <a class=underline href=https://help.prestmit.com/en/ target=_blank>our help centre</a> is where to check.</p>",
          },
          {
            title: "Is Prestmit Safe?",
            description:
              "Prestmit is equipped with modern security tools to help protect your account at all times. These include 2FA authentication and a decentralised security architecture that secures all components and layers within the platform.",
          },
          {
            title: "How Do I Register On Prestmit?",
            description:
              "You can <a class=underline href=https://web.prestmit.com/register target=_blank>register on the website</a>. However, if you prefer the mobile app, you can <a class=underline href=https://play.google.com/store/apps/details?id=com.prestmit target=_blank>download the Prestmit App on Android</a> and <a class=underline href=https://apps.apple.com/us/app/prestmit/id1581960714 target=_blank>click here to download the Prestmit App on iOS<a>. The registration process takes less than a minute.",
          },
          {
            title: "How Long Does Transaction Take?",
            description:
              "Using an average of general trade trends, most transactions on Prestmit only take minutes, and payments are instant once requested. However, the specific timing depends on the type and nature of the transaction; some transactions do take longer than others.",
          },
          {
            title: "How Do I Buy or Sell Gift Cards On Prestmit?",
            description:
              "We've prepared simple guides and videos to help you with this. You can <a class=underline href=https://help.prestmit.com/en/articles/6965167-how-to-sell-gift-cards-on-prestmit target=_blank>click here for the guide on selling gift cards</a> or <a class=underline href=https://help.prestmit.com/en/articles/6996522-how-can-i-buy-gift-card-on-prestmit target=_blank>click here for the guide on buying gift cards</a> on Prestmit. Our support team is always on seat if you have further questions.",
          },
          {
            title:
              "How Do I Buy or Sell Bitcoin (Cryptocurrencies) On Prestmit?",
            description:
              "We've prepared a simple guide and video to help you with this. You can <a class=underline href=https://help.prestmit.com/en/articles/6996652-how-do-i-sell-crypto-on-prestmit target=_blank>click here for the guide on selling cryptocurrencies on Prestmit</a>. Please note that you cannot buy cryptocurrencies on Prestmit at this moment.",
          },
          {
            title: "How Do I Buy or Sell Airtime On Prestmit?",
            description:
              "We've prepared simple guides and videos to help you with this. You can <a class=underline href=https://help.prestmit.com/en/articles/7241238-how-to-sell-airtime-on-prestmit target=_blank>click here for the guide on selling airtime</a> or <a class=underline href=https://help.prestmit.com/en/articles/7974414-about-buying-cheap-airtime-on-prestmit target=_blank>click here for the guide on buying 'cheap' airtime</a> (about 20% off) on Prestmit.",
          },
          {
            title: "What Are the Available Payment Options on Prestmit?",
            description:
              "We offer four payment methods for all transactions. You can pay with or be paid in Naira, Cedis, Bitcoin, and USDT.",
          },
        ],
        et = () => {
          let [e, t] = (0, s.useState)(null),
            i = (i) => {
              if (e === i) {
                t(null);
                return;
              }
              t(i);
            };
          return (0, a.jsx)("section", {
            className: "bg-colorLightGray2 py-[48px] md:py-[96px]",
            children: (0, a.jsxs)("div", {
              className: "max-w-[768px] mx-auto px-[30px] lg:px-[0]",
              children: [
                (0, a.jsx)("h3", {
                  className:
                    "text-colorSecondary font-[600] text-[2.4rem] leading-[32px] tracking-[0.24px] text-center md:text-[3.6rem] md:leading-[44px] md:tracking-[0px]",
                  children: "Frequently Asked Questions",
                }),
                (0, a.jsx)("p", {
                  className:
                    "text-[1.4rem] leading-[24px] text-colorLightGray text-center mt-[12px] mb-[32px] md:text-[2rem] md:leading-[30px] md:mt-[20px] md:mb-[64px]",
                  children:
                    "Our customer support is always available to provide answers to any of your questions but to begin with, here are some of our most asked questions.",
                }),
                (0, a.jsx)("div", {
                  children: ee.map((t, s) =>
                    (0, a.jsx)(
                      $.Z,
                      {
                        title: t.title,
                        description: t.description,
                        selected: s === e,
                        toggle: () => {
                          i(s);
                        },
                      },
                      s
                    )
                  ),
                }),
              ],
            }),
          });
        };
      var ei = {
          src: "/_next/static/media/logo-business-insider.9c5cada7.png",
          height: 112,
          width: 358,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAG1BMVEW5ubm9vb3Ozs7W1taurq6goKCzs7Pe3t7Gxsb8JFDLAAAACXBIWXMAACE4AAAhOAFFljFgAAAAH0lEQVR4nAXBgQEAMAiDMGjV/f/xEgTngDavSQBlnQ8CjgAxGoXi8QAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 3,
        },
        ea = {
          src: "/_next/static/media/logo-punch.51fc4fc9.png",
          height: 106,
          width: 248,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAG1BMVEUkJCQhISEnJycgICAiIiIeHh4iIiIeHh4eHh4N4YMMAAAACXRSTlNfVH8/j24oap0vUiF/AAAACXBIWXMAACE4AAAhOAFFljFgAAAAIElEQVR4nAXBhwEAAAjCsAKu/y82QQXYYq/r1s2EBM0DA+QAT7Lb9pwAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 3,
        },
        es = {
          src: "/_next/static/media/logo-tech-point.9fbc3c77.png",
          height: 115,
          width: 381,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAAD1BMVEUPDw8JCQkPDw8REREKCgrqQBwtAAAABXRSTlNVPUdqSKIZt7wAAAAJcEhZcwAAITgAACE4AUWWMWAAAAAZSURBVHicBcGBAQAABMCghv9vVuyNxJTWAwDSABRnLfDgAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 2,
        },
        er = {
          src: "/_next/static/media/logo-msn.8318b3e0.png",
          height: 104,
          width: 373,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAAFVBMVEUAAAAAAAAAAAAAAAAAAABMaXEAAAAtOhh2AAAAB3RSTlMaLGc+lgACytJtNAAAAAlwSFlzAAAhOAAAITgBRZYxYAAAABdJREFUeJxjYGViYWBkZGBlADGYmRnYAAF3ACqHqtSDAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 2,
        },
        el = {
          src: "/_next/static/media/logo-tech-times.c6248b9c.png",
          height: 98,
          width: 160,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAHlBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC3KG9qAAAACnRSTlNFaYRQeCRbMjifkKsM/wAAAAlwSFlzAAAhOAAAITgBRZYxYAAAACpJREFUeJwVxsERACAIA8ELCaD9N+y4rwVz3DQ7CbpimWNoLKUi/VZl8gAL3gCB0j7ZNwAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 5,
        },
        en = {
          src: "/_next/static/media/logo-bitcoin.a57b93dd.png",
          height: 83,
          width: 593,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAMAAADU3h9xAAAADFBMVEUFBQUCAgICAgIVFRUc/EDWAAAABHRSTlN7V2mRVWkKDgAAAAlwSFlzAAAhOAAAITgBRZYxYAAAABFJREFUeJxjYGZgYGRiZGQCAAA1AAuenZT7AAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 1,
        };
      let eo = () =>
        (0, a.jsx)("section", {
          className: "pt-[56px] md:pt-[80px]",
          children: (0, a.jsxs)("div", {
            className: "container text-center",
            children: [
              (0, a.jsx)("h3", {
                className:
                  "text-colorLightGray font-[600] text-[1.6rem] leading-[20px] mb-[40px] md:text-[2.4rem] md:leading-[24px]",
                children: "As featured on",
              }),
              (0, a.jsxs)("div", {
                className:
                  "flex flex-wrap justify-center items-center gap-[24px] lg:justify-between",
                children: [
                  (0, a.jsx)(m(), {
                    href: "https://news.bitcoin.com/prestmit-a-platform-for-nigerians-to-buy-sell-gift-cards-and-bitcoins/",
                    className: "w-[137px] h-[19px] md:w-[197px] md:h-[27px]",
                    target: "_blank",
                    rel: "nofollow",
                    children: (0, a.jsx)(d(), {
                      src: en,
                      alt: "Bitcoin.com",
                      className: "w-auto h-auto",
                    }),
                  }),
                  (0, a.jsx)(m(), {
                    href: "https://www.msn.com/en-us/money/smallbusiness/%E2%80%8B%E2%80%8Bhow-prestmit-is-making-crypto-trading-more-accessible-in-africa/ar-AA1jBi4j",
                    className: "w-[57px] h-[18px] md:w-[119px] md:h-[37px]",
                    target: "_blank",
                    rel: "nofollow",
                    children: (0, a.jsx)(d(), {
                      src: er,
                      alt: "MSN",
                      className: "w-auto h-auto",
                    }),
                  }),
                  (0, a.jsx)(m(), {
                    href: "https://africa.businessinsider.com/local/lifestyle/about-prestmit-best-crypto-and-gift-card-trading-platform-in-africa/xmcv00n",
                    className: "w-[57px] h-[18px] md:w-[119px] md:h-[37px]",
                    target: "_blank",
                    rel: "nofollow",
                    children: (0, a.jsx)(d(), {
                      src: ei,
                      alt: "Business Insider",
                      className: "w-auto h-auto",
                    }),
                  }),
                  (0, a.jsx)(m(), {
                    href: "https://punchng.com/prestmit-launches-new-app-to-promote-crypto-trading-in-nigeria/",
                    className: "w-[61px] h-[26px] md:w-[82px] md:h-[35px]",
                    target: "_blank",
                    rel: "nofollow",
                    children: (0, a.jsx)(d(), {
                      src: ea,
                      alt: "Punch",
                      className: "w-auto h-auto",
                    }),
                  }),
                  (0, a.jsx)(m(), {
                    href: "https://www.techtimes.com/articles/295638/20230828/why-prestmit-is-rated-the-best-digital-trading-platform-in-africa.htm",
                    className: "w-[32px] h-[19px] md:w-[53px] md:h-[32px]",
                    target: "_blank",
                    rel: "nofollow",
                    children: (0, a.jsx)(d(), {
                      src: el,
                      alt: "Techtimes",
                      className: "w-auto h-auto",
                    }),
                  }),
                  (0, a.jsx)(m(), {
                    href: "https://techpoint.africa/2022/10/25/why-bitcoin-is-unique-from-other-cryptocurrencies/",
                    className: "w-[83px] h-[25px] md:w-[126px] md:h-[38px]",
                    target: "_blank",
                    rel: "nofollow",
                    children: (0, a.jsx)(d(), {
                      src: es,
                      alt: "Techpoint",
                      className: "w-auto h-auto",
                    }),
                  }),
                ],
              }),
            ],
          }),
        });
      var ec = i(2196),
        ed = i(7476);
      let ep = () =>
        (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsxs)(l(), {
              children: [
                (0, a.jsx)("title", {
                  children:
                    "Best Crypto & Gift Card Exchange Platform In Africa | Prestmit",
                }),
                (0, a.jsx)("meta", {
                  name: "description",
                  content:
                    "Prestmit is the best digital trading platform in Africa. Buy and sell Crypto, Gift Cards, and Utility Bills. Pay or be paid in NGN, GHS, BTC, or USDT. Register now.",
                }),
                (0, a.jsx)("meta", {
                  property: "og:title",
                  content:
                    "Best Crypto & Gift Card Exchange Platform In Africa | Prestmit",
                }),
                (0, a.jsx)("meta", {
                  property: "og:description",
                  content:
                    "Prestmit is the best digital trading platform in Africa. Buy and sell Crypto, Gift Cards, and Utility Bills. Pay or be paid in NGN, GHS, BTC, or USDT. Register now.",
                }),
                (0, a.jsx)("meta", {
                  property: "og:image",
                  content:
                    "https://prestmit.com/blog/wp-content/uploads/2023/10/Links-1-scaled.jpg",
                }),
              ],
            }),
            (0, a.jsxs)("div", {
              children: [
                (0, a.jsx)(n.Z, {}),
                (0, a.jsx)(B, {}),
                (0, a.jsx)(E, {}),
                (0, a.jsx)(_, {}),
                (0, a.jsx)(L, {}),
                (0, a.jsx)(Z, {}),
                (0, a.jsx)(z, {}),
                (0, a.jsx)(et, {}),
                (0, a.jsx)(eo, {}),
                (0, a.jsx)(ec.Z, {}),
                (0, a.jsx)(ed.Z, {}),
              ],
            }),
          ],
        });
      function em() {
        return (0, a.jsx)(a.Fragment, { children: (0, a.jsx)(ep, {}) });
      }
    },
  },
  function (e) {
    e.O(0, [8703, 4264, 6357, 9774, 2888, 179], function () {
      return e((e.s = 8312));
    }),
      (_N_E = e.O());
  },
]);
