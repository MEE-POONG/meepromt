export const navData = [
    { name: { EN: "home", TH: "หน้าแรก" }, pathLink: "/", headMenu: [] },
    {
        name: { EN: "news", TH: "ข่าวสาร" }, pathLink: "/news", headMenu: [
            { name: { EN: "activities", TH: "กิจกรรมองค์กร" }, pathLink: "/inter-activity", headLink: '/news' },
        ]
    },
    {
        name: { EN: "about us", TH: "เกี่ยวกับเรา" }, pathLink: "/about", headMenu: [
            { name: { EN: "team", TH: "ทีมงาน" }, pathLink: "/teams", headLink: '/about' },
            { name: { EN: "other services", TH: "บริการด้านอื่น" }, pathLink: "/other-services", headLink: '/about' },
        ]
    },
    { name: { EN: "our work", TH: "ผลงาน" }, pathLink: "/ourwork", headMenu: [] },
    { name: { EN: "contact", TH: "ติดต่อเรา" }, pathLink: "/contact", headMenu: [] },
];
// { name: { EN: "Home", TH: "หน้าแรก" }, pathLink: "/", headMenu: false },
// { name: { EN: "News", TH: "ข่าวสาร" }, pathLink: "/news", headMenu: true },
// { name: { EN: "About us", TH: "เกี่ยวกับเรา" }, pathLink: "/about", headMenu: true },
// { name: { EN: "Workings", TH: "ผลงาน" }, pathLink: "/workings", headMenu: false },
// { name: { EN: "Contact", TH: "ติดต่อเรา" }, pathLink: "/contact", headMenu: false },
// ];
// export const navListData = [
// { name: { EN: "Me Prompt Tecnology", TH: "มีพร้อมเทคโนโลยี" }, pathLink: "/meprompt", headLink: '/about' },
// { name: { EN: "Team", TH: "ทีมงาน" }, pathLink: "/team", headLink: '/about' },
// { name: { EN: "Other Services", TH: "บริการด้านอื่น" }, pathLink: "/other-services", headLink: '/about' },
// { name: { EN: "Activities", TH: "กิจกรรมองค์กร" }, pathLink: "/inter-activity", headLink: '/news' },
// { name: { EN: "Blogs", TH: "บทความ" }, pathLink: "/blog", headLink: '/news' },
// ];