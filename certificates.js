
 function generateId(length = 8) {
  return 'proj-' + Math.random().toString(36).substr(2, length);
}

const certificates = [
  {
    id: generateId(),
    title: "Advanced MySQL for Data Analysis Certificate",
    description:
      "Learned to query databases efficiently, perform data extraction and manipulation, and apply SQL skills to real-world analytics projects.",
    image:
      "https://drive.google.com/thumbnail?id=10IeF_XPEwVs7IzuZqXq759XmkgJl_N3h",
    link:
      "https://www.analystbuilder.com/achievements/verify/LU1AUNABDR?r=ZkFvQXEy50af79AiWHM4fimdd",
  },
  {
    id: generateId(),
    title: "MySQL for Data Analytics Certificates",
    description:
      "Learned to query databases efficiently, perform data extraction and manipulation, and apply SQL skills to real-world analytics projects.",
    image:
      "https://drive.google.com/thumbnail?id=16HjEfVhRCCOq0sAnVYuaX4arLAtPjd5a",
    link:
      "https://www.analystbuilder.com/achievements/verify/1VD05N7AO5?r=OCqu1cZhfCUPYHKsQOqgQf9g6",
  },
  {
    id: generateId(),
    title: "Tableau for Data Visualization",
    description:
      "Built visual dashboards and interactive charts to explore data insights using Tableau.",
    image:
      "https://drive.google.com/thumbnail?id=1Rcfo7BmFoLEvXgLv9XcK9Jr4RTPTlvi7",
    link:
      "https://www.analystbuilder.com/achievements/verify/59JUCU1W77?r=LrxKi2LG5D3Do9cNYLjl9va3x",
  },

   {
    id: generateId(),
    title: "Data Analytics Bootcamp Certificate",
    description:
      "Completed an intensive Data Analyst Bootcamp covering data cleaning, analysis, visualization, and reporting with Python, SQL, and Power BI.",
    image:
      "https://drive.google.com/thumbnail?id=157MH3D9i7dKfkfbg5W1CWF5YkQd4oi2j",
    link:
      "https://drive.google.com/file/d/12GSDhacTcBW1fiWf0Q3yp9gE1oT1Pk32/view?usp=sharing",
  },
{
  id: generateId(),
  title: "Microsoft Power BI Desktop for Business Intelligence Certificate",
  description:
    "Gained skills in creating interactive reports and dashboards, data modeling, and business intelligence using Microsoft Power BI Desktop.",
  image:
    "https://drive.google.com/thumbnail?id=13856cW3yHlBF-UNHZoEnOX51zvmI2n21",
  link:
    "https://www.analystbuilder.com/achievements/verify/JCYFXWKCRA?r=0WenXrjPfCiHD634Th0o1Fv0J",
},
{
  id: generateId(),
  title: "Excel for Data Analytics Certificate",
  description:
    "Demonstrated proficiency in Excel for data analysis, including advanced functions, PivotTables, Power Query, and data visualization techniques for business decision making.",
  image:
    "https://drive.google.com/thumbnail?id=1GplBBkI6vsYtV646JTeM3n9ZxnxWtw-Y",
  link:
    "https://www.analystbuilder.com/achievements/verify/5X9SCAPPWX?r=urhgWZRWU7VJf9H2PcRDJdn3B"
},
{
  id: generateId(),
  title: "Python Programming for Beginners Certificate",
  description:
    "Gained foundational knowledge in Python programming, including variables, control flow, functions, loops, and basic data structures. Built hands-on coding skills for problem-solving and scripting tasks.",
  image:
     "https://drive.google.com/thumbnail?id=1mfZwghyN9N2FYPZwKO8vgI-VsrzgIG9e",
  link:
     "https://www.analystbuilder.com/achievements/verify/Y00CZ2QPY5?r=YvDwPmoFzwFAbB8Z28HZRQx4K",
},

{
  id: generateId(),
  title: "Pandas for Data Analysis Certificate",
  description:
    "Developed hands-on skills in data manipulation using Pandas, including filtering, grouping, aggregation, and time series operations. Gained experience in real-world data cleaning and exploratory analysis, supporting insights through practical scripting.",
  image:
    "https://drive.google.com/thumbnail?id=1Tj-Q1NbZAXTnK5nsCmfIXNhYx8OB3lYk",
  link:
    "https://www.analystbuilder.com/achievements/verify/8UP6W5PDTH?r=EnrPTR22NDwMODC2vZWzfgoKH"
},

{
  id: generateId(),
  title: "MySQL Interview Crash Course Certificate",
  description:
    "Completed a focused training on MySQL fundamentals tailored for technical interviews. Covered query writing, filtering, joins, subqueries, and real-world problem solving using SQL best practices.",
  image:
    "https://drive.google.com/thumbnail?id=1IPN6DcvJXuyYMcYY6bwVBT2ORknYDvNX",
  link:
    "https://www.analystbuilder.com/achievements/verify/Y69G38S60C?r=DXJeBIXWnZaOYO5QTIVN8Ag0b"
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
