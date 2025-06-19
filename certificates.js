const certificates = [
  {
    id: 1,
    title: "Advanced MySQL for Data Analysis Certificate",
    description:
      "Learned to query databases efficiently, perform data extraction and manipulation, and apply SQL skills to real-world analytics projects.",
    image:
      "https://drive.google.com/thumbnail?id=10IeF_XPEwVs7IzuZqXq759XmkgJl_N3h",
    link:
      "https://www.analystbuilder.com/achievements/verify/LU1AUNABDR?r=ZkFvQXEy50af79AiWHM4fimdd",
  },
  {
    id: 2,
    title: "MySQL for Data Analytics Certificates",
    description:
      "Learned to query databases efficiently, perform data extraction and manipulation, and apply SQL skills to real-world analytics projects.",
    image:
      "https://drive.google.com/thumbnail?id=16HjEfVhRCCOq0sAnVYuaX4arLAtPjd5a",
    link:
      "https://www.analystbuilder.com/achievements/verify/1VD05N7AO5?r=OCqu1cZhfCUPYHKsQOqgQf9g6",
  },
  {
    id: 3,
    title: "Tableau for Data Visualization",
    description:
      "Built visual dashboards and interactive charts to explore data insights using Tableau.",
    image:
      "https://drive.google.com/thumbnail?id=1Rcfo7BmFoLEvXgLv9XcK9Jr4RTPTlvi7",
    link:
      "https://www.analystbuilder.com/achievements/verify/59JUCU1W77?r=LrxKi2LG5D3Do9cNYLjl9va3x",
  },

   {
    id: 4,
    title: "Data Analytics Bootcamp Certificate",
    description:
      "Completed an intensive Data Analyst Bootcamp covering data cleaning, analysis, visualization, and reporting with Python, SQL, and Power BI.",
    image:
      "https://drive.google.com/thumbnail?id=157MH3D9i7dKfkfbg5W1CWF5YkQd4oi2j",
    link:
      "https://drive.google.com/file/d/12GSDhacTcBW1fiWf0Q3yp9gE1oT1Pk32/view?usp=sharing",
  },
{
  id: 5,
  title: "Microsoft Power BI Desktop for Business Intelligence Certificate",
  description:
    "Gained skills in creating interactive reports and dashboards, data modeling, and business intelligence using Microsoft Power BI Desktop.",
  image:
    "https://drive.google.com/thumbnail?id=13856cW3yHlBF-UNHZoEnOX51zvmI2n21",
  link:
    "https://www.analystbuilder.com/achievements/verify/JCYFXWKCRA?r=0WenXrjPfCiHD634Th0o1Fv0J",
},
{
  id: 6,
  title: "Excel for Data Analytics Certificate",
  description:
    "Demonstrated proficiency in Excel for data analysis, including advanced functions, PivotTables, Power Query, and data visualization techniques for business decision making.",
  image:
    "https://drive.google.com/thumbnail?id=1GplBBkI6vsYtV646JTeM3n9ZxnxWtw-Y",
  link:
    "https://www.analystbuilder.com/achievements/verify/5X9SCAPPWX?r=urhgWZRWU7VJf9H2PcRDJdn3B"
}

];


function renderCertificates() {
  const container = document.getElementById("certificateSlider");

  certificates.forEach(cert => {
    const card = document.createElement("div");
    card.classList.add("certificate-card");

    card.innerHTML = `
      <a href="${cert.link}" target="_blank">
        <img src="${cert.image}" alt="${cert.title}">
      </a>
      <h3>${cert.title}</h3>
      <p>${cert.description}</p>
      <button onclick="window.open('${cert.link}', '_blank')">View Certificate</button>
    `;

    container.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", renderCertificates);
