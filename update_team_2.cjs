const fs = require('fs');

const path = '/Users/berk/Documents/GitHub/kartalimalat-site/pages/ekibimiz/+Page.tsx';
let content = fs.readFileSync(path, 'utf8');

const imports = `
// Team member images
import kazimImg from "../../assets/kazim-ince.jpg?format=webp";
import burakImg from "../../assets/burak sağlam.png?format=webp";
import elifImg from "../../assets/elif.png?format=webp";
import elifSenaImg from "../../assets/elifSena.png?format=webp";
import ercanImg from "../../assets/ercan.png?format=webp";
import fatihImg from "../../assets/fatih.png?format=webp";
import feyzullahImg from "../../assets/feyzullah.png?format=webp";
import izelImg from "../../assets/izel.png?format=webp";
import korayImg from "../../assets/koray çatal.png?format=webp";
import muhammedImg from "../../assets/muhammed kosif.png?format=webp";
import ozgeImg from "../../assets/ozge.png?format=webp";
import sofiaImg from "../../assets/sofia.jpeg?format=webp";
import yavuzImg from "../../assets/yavuz.png?format=webp";
`;

content = content.replace(/\/\/ Team member images\nimport kazimImg from "\.\.\/\.\.\/assets\/kazim-ince\.jpg\?format=webp";/, imports.trim());

content = content.replace(/name: "Ercan Karaosmanoğlu",\s*title: "Kalite Müdürü",\s*img: "",/, 'name: "Ercan Karaosmanoğlu",\n      title: "Kalite Müdürü",\n      img: ercanImg,');
content = content.replace(/name: "Kazım İnce",\s*title: "Satış Yöneticisi",\s*img: "",/, 'name: "Kazım İnce",\n      title: "Satış Yöneticisi",\n      img: kazimImg,');
content = content.replace(/name: "Feyzullah Gökteke",\s*title: "Tasarım Mühendisi",\s*img: "",/, 'name: "Feyzullah Gökteke",\n      title: "Tasarım Mühendisi",\n      img: feyzullahImg,');
content = content.replace(/name: "Koray Çatal",\s*title: "Proje Mühendisi",\s*img: "",/, 'name: "Koray Çatal",\n      title: "Proje Mühendisi",\n      img: korayImg,');
content = content.replace(/name: "Muhammed Furkan Kosif",\s*title: "Kalite Kontrol Mühendisi",\s*img: "",/, 'name: "Muhammed Furkan Kosif",\n      title: "Kalite Kontrol Mühendisi",\n      img: muhammedImg,');
content = content.replace(/name: "Mehmet Burak Sağlam",\s*title: "Kalite Kontrol Mühendisi",\s*img: "",/, 'name: "Mehmet Burak Sağlam",\n      title: "Kalite Kontrol Mühendisi",\n      img: burakImg,');

const newMembers = `    {
      id: 11,
      name: "Elif",
      title: "Ekip Üyesi",
      img: elifImg,
      socialMedias: {},
    },
    {
      id: 12,
      name: "Elif Sena",
      title: "Ekip Üyesi",
      img: elifSenaImg,
      socialMedias: {},
    },
    {
      id: 13,
      name: "Fatih",
      title: "Ekip Üyesi",
      img: fatihImg,
      socialMedias: {},
    },
    {
      id: 14,
      name: "İzel",
      title: "Ekip Üyesi",
      img: izelImg,
      socialMedias: {},
    },
    {
      id: 15,
      name: "Özge",
      title: "Ekip Üyesi",
      img: ozgeImg,
      socialMedias: {},
    },
    {
      id: 16,
      name: "Sofia",
      title: "Ekip Üyesi",
      img: sofiaImg,
      socialMedias: {},
    },
    {
      id: 17,
      name: "Yavuz",
      title: "Ekip Üyesi",
      img: yavuzImg,
      socialMedias: {},
    }
  ];`;

content = content.replace(/    \{\n      id: 10,[\s\S]*?\}\n  \];/, (match) => match.replace(/\}\n  \];/, '},\n' + newMembers));

fs.writeFileSync(path, content, 'utf8');
console.log('Update successful');
