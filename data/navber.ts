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
