import implementiingTDD from "../assets/certificate_photos/implementing_tdd.png";
import understandingTypescript from "../assets/certificate_photos/understanding_typescript.jpg";
import skillsoft from "../assets/organizations/Skillsoft_logo.png";
import udemy from "../assets/organizations/Udemy_logo.svg";
import codeWithMosh from "../assets/organizations/code_with_mosh.jpeg";

const certificates: Certificate[] = [
    {
        name: "Build Apps Using React: Introducing React for Web Applications",
        organization: "Skillsoft",
        organizationImage: skillsoft,
        issueDate: new Date(2023, 11, 1),
        credentialUrl:
            "https://skillsoft.digitalbadges-eu.skillsoft.com/31b7aaa2-14cc-4623-9b38-accf5bf0e476",
        credentialId: "6545857",
    },
    {
        name: "Test Driven Development: Implementing TDD",
        organization: "Skillsoft",
        organizationImage: skillsoft,
        issueDate: new Date(2023, 7, 1),
        credentialUrl:
            "https://skillsoft.digitalbadges-eu.skillsoft.com/f575f2c7-c7fd-4b1b-9247-28460fe19f12",
        credentialId: "5269447",
        image: implementiingTDD,
    },
    {
        name: "Understanding Typescipt",
        organization: "Udemy",
        organizationImage: udemy,
        issueDate: new Date(2023, 10, 1),
        credentialUrl:
            "https://www.ude.my/UC-8d65f57b-b460-4e2c-b399-7229dcc27ccd",
        credentialId: "UC-8d65f57b-b460-4e2c-b399-7229dcc27ccd",
        image: understandingTypescript,
    },
    {
        name: "Build Apps Using React: Local Machine & Online Playgrounds",
        organization: "Skillsoft",
        organizationImage: skillsoft,
        issueDate: new Date(2023, 11, 1),
        credentialUrl:
            "https://skillsoft.digitalbadges-eu.skillsoft.com/32b96dbe-7c1b-4c34-bff1-87d3fd4757e2",
        credentialId: "6599801",
    },
    {
        name: "Build Apps Using React: Introducing React for Web Applications",
        organization: "Skillsoft",
        organizationImage: skillsoft,
        issueDate: new Date(2023, 11, 1),
        credentialUrl:
            "https://skillsoft.digitalbadges-eu.skillsoft.com/31b7aaa2-14cc-4623-9b38-accf5bf0e476",
        credentialId: "6545857",
    },
    {
        name: "Build Apps Using React: Props & State",
        organization: "Skillsoft",
        organizationImage: skillsoft,
        issueDate: new Date(2023, 11, 1),
        credentialUrl:
            "https://skillsoft.digitalbadges-eu.skillsoft.com/51582778-4d0e-4d5d-b80b-870323e0ac99",
        credentialId: "6706295",
    },
    {
        name: "React 18 for Beginners",
        organization: "Code With Mosh",
        organizationImage: codeWithMosh,
        issueDate: new Date(2024, 1, 1),
        credentialId: "cert_g4pqzykw",
    },
];

export default certificates;
