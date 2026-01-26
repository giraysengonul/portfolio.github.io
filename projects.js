// projects.js
 function generateId(length = 8) {
  return 'proj-' + Math.random().toString(36).substr(2, length);
}
const projects = [
    /*Excel*/
    {
  id: generateId(),
  category: 'excel',
  title: 'NYC Bus Delay Analysis',
  shortDesc: 'An Excel-based data analysis project to uncover root causes of bus breakdowns and delays in New York City.',
  longDesc: 'Hired by the New York Division of Transportation, this project investigates patterns behind frequent delays and mechanical issues in the city’s bus fleet. Using Excel tools like Power Query, PivotTables, and analytical functions, it answers key questions about delay reasons, geographical and company-based variations, and weekday trends.',
  highlights: [
    'Root-cause analysis of delays using PivotTables',
    'Power Query for transforming and filtering raw operational data',
    'Comparative delay breakdown by company and borough',
    'Weekday correlation analysis for delay frequency',
    'Interactive visualizations using charts and slicers'
  ],
  link: 'https://github.com/giraysengonul/Excel-Data-Analysis-Projects/tree/main/Bus_Breakdown_and_Delays_NYC%20Project',
  image: 'https://cdn-icons-png.flaticon.com/512/732/732220.png',
  alt: 'Excel NYC Bus Delay Analysis'
},
 {
  id: generateId(),
  category: 'excel',
  title: 'U.S. Debt Tracker Project - Data Analysis',
  shortDesc: 'An Excel-based financial analysis project examining historical U.S. debt trends and forecasting future growth.',
  longDesc: 'This project was developed for a Washington D.C.-based debt agency, aiming to analyze and predict trends in public and governmental debt. Using advanced Excel functions like TREND, LINEST, and Power Query, it provides insights into yearly debt percentage increases, seasonal fluctuations, and future projections.',
  highlights: [
    'Historical debt trend analysis',
    'Regression modeling with LINEST',
    'Interactive dashboards & charts',
    'Forecasting future debt growth',
    'Power Query for advanced data manipulation'
  ],
  link: 'https://github.com/giraysengonul/Excel-Data-Analysis-Projects/tree/main/US%20Debt%20Tracker%20Project%20-%20Data%20Analysis',
  image: 'https://cdn-icons-png.flaticon.com/512/732/732220.png',
  alt: 'Excel Debt Analysis Project'
},

{
  id: generateId(),
  category: 'excel',
  title: 'LAPD Crime Statistics Dashboard',
  shortDesc: 'An interactive Excel dashboard analyzing crime data reported by the LAPD from 2020 to present.',
  longDesc: 'This project explores crime statistics reported by the Los Angeles Police Department from 2020 onwards. Using advanced Excel tools like Power Query, Pivot Tables, and dynamic charts, the dashboard enables users to filter and visualize data by year, gender, and crime type. The analysis reveals trends, totals, and demographic patterns in reported crimes, with a focus on clarity and interactivity.',
  highlights: [
    'Power Query for data cleaning and transformation',
    'Pivot Tables and dynamic charting',
    'Interactive filters by year and gender',
    'Visual summary of crime categories and trends',
    'Excel-based dashboard with professional layout'
  ],
  link: 'https://github.com/giraysengonul/Excel-Data-Analysis-Projects/tree/main/Lapd-Crime-Statistics-Dashboard',
  image: 'https://github.com/giraysengonul/Excel-Data-Analysis-Projects/blob/main/Lapd-Crime-Statistics-Dashboard/assets/Lapd-Crime-Statistics-Dashboard-Screenshot.png?raw=true',
  alt: 'LAPD Crime Excel Dashboard'
},

{
  id: generateId(),
  category: 'excel',
  title: 'Monthly Vehicle Crash Report Automation',
  shortDesc: 'An Excel VBA macro project automating monthly vehicle crash reports for efficient data analysis.',
  longDesc: 'This project automates the monthly reporting process for vehicle crash data using Excel VBA macros. It provides insights on crash times over a 24-hour period, unique accident addresses, total injured and deceased counts, and ranks contributing factors from highest to lowest. The automation reduces manual work and ensures consistent, timely reports for the client.',
  highlights: [
    'Automated report generation via VBA macros',
    'Analysis of crash times over 24 hours',
    'Identification of unique accident locations',
    'Summary of total injured and dead',
    'Ranking of contributing factors from highest to lowest'
  ],
  link: 'https://github.com/giraysengonul/Excel-Data-Analysis-Projects/tree/main/Vehicle%20Crash%20Report%20Project',
   image: 'https://cdn-icons-png.flaticon.com/512/732/732220.png',
  alt: 'Vehicle Crash Report VBA Macro'
},

{
  id: generateId(),
  category: 'excel',
  title: 'Coffee Shop Sales Project – Data Analysis',
  shortDesc: 'An Excel-based sales analysis project revealing key business insights for a coffee shop.',
  longDesc: 'This project focuses on analyzing a coffee shop’s sales data using Microsoft Excel. By leveraging pivot tables, charts, and formulas, it answers important business questions such as sales trends over time, busiest days of the week, and product performance. The project aims to support data-driven decisions for sales and inventory management using visual and structured reporting.',
  highlights: [
    'Analyzed sales trends across time periods',
    'Identified busiest days of the week and possible reasons',
    'Ranked products based on quantity sold and revenue generated',
    'Used pivot tables and charts for interactive reporting',
    'Cleaned and structured raw sales data for better insights'
  ],
  link: 'https://github.com/giraysengonul/Excel-Data-Analysis-Projects/tree/main/Coffee-Shop-Sales-Project-Data-Analysis',
  image: 'https://github.com/giraysengonul/Excel-Data-Analysis-Projects/blob/main/Coffee-Shop-Sales-Project-Data-Analysis/assets/Page1.png?raw=true',
  alt: 'Coffee Shop Sales Excel Dashboard'
},
{
  id: generateId(),
  category: 'excel',
  title: 'Hollywood Data Analysis Project',
  shortDesc: 'An Excel-based data analysis project exploring profitability and trends in the Hollywood film industry.',
  longDesc: 'This project focuses on analyzing Hollywood movie data using Microsoft Excel. By leveraging pivot tables, charts, and dashboards, it uncovers insights into profitability, film production trends, and audience/critic ratings. The analysis aims to reveal how different factors such as studio, genre, and release year influence financial and audience outcomes, providing a structured and visual approach to understanding the film industry.',
  highlights: [
    'Analyzed profitability by lead studio and genre',
    'Explored film production trends across studios, genres, and years',
    'Compared Rotten Tomatoes critic vs. audience ratings with worldwide gross',
    'Built interactive dashboards with pivot tables and charts',
    'Structured raw data for clear and actionable insights'
  ],
  link: 'https://github.com/giraysengonul/Excel-Data-Analysis-Projects/tree/main/Hollywood-Data-Analysis-Project',
  image: 'https://github.com/giraysengonul/Excel-Data-Analysis-Projects/blob/main/Hollywood-Data-Analysis-Project/assets/Page1.png?raw=true',
  alt: 'Hollywood Data Analysis Excel Dashboard'
},

{
  id: generateId(),
  category: 'excel',
  title: 'Sales and Profit - Data Analysis Project',
  shortDesc: 'An Excel-based dashboard analyzing sales and profit performance with interactive slicers.',
  longDesc: 'This project focuses on analyzing sales and profit data using Microsoft Excel. By building pivot tables, charts, and an interactive dashboard, it provides insights into overall sales performance, profitability, customer distribution, and regional trends. The dashboard also includes dynamic slicers for category, year, and month to allow flexible and detailed exploration of the dataset.',
  highlights: [
    'Calculated Total Sales and Total Profit',
    'Analyzed profit trends by year',
    'Explored sales by sub-category and category',
    'Measured customer count by year',
    'Visualized sales by state',
    'Identified top 5 customers by profit',
    'Created interactive slicers for category, year, and month'
  ],
  link: 'https://github.com/giraysengonul/Excel-Data-Analysis-Projects/tree/main/Sales%20and%20Profit%20-%20Data%20Analysis',
  image: 'https://github.com/giraysengonul/Excel-Data-Analysis-Projects/blob/main/Sales%20and%20Profit%20-%20Data%20Analysis/assets/Page0.png?raw=true',
  alt: 'Sales and Profit Excel Dashboard'
},
{
  id: generateId(),
  category: "excel",
  title: "Purchase & Shipping – Data Analysis Project",
  shortDesc: "An Excel dashboard analyzing purchase behavior, product performance, seasonality, and shipping insights with interactive slicers.",
  longDesc: "This Excel-based data analysis project explores purchasing and shipping patterns across multiple product categories. The dashboard visualizes key metrics such as purchase trends by month and season, size distribution, color-based quantity, category performance, payment method usage, and customer buying behavior. It includes yearly and monthly slicers for fully interactive exploration, enabling users to analyze seasonal trends, product performance, and total purchase activity in depth.",
  highlights: [
    "Analyzed purchase trends by product and month",
    "Calculated Year-on-Year Variance %",
    "Measured Diversity % across product categories",
    "Built frequency count for customer purchase behavior",
    "Visualized quantity purchased by season",
    "Displayed purchase % by size and quantity by color",
    "Summarized category performance: Accessories, Footwear, Outerwear, Total Items",
    "Created payment method percentage breakdown",
    "Integrated yearly and monthly slicers for interactive analysis"
  ],
  tools: ["Microsoft Excel", "Pivot Tables", "Pivot Charts", "Slicers", "Excel Formulas"],
  link: "https://github.com/giraysengonul/Excel-Data-Analysis-Projects/tree/main/Purchase%26Shipping-Analysis-Project",
  image: "https://github.com/giraysengonul/Excel-Data-Analysis-Projects/raw/main/Purchase%26Shipping-Analysis-Project/assets/Page0.png",
  alt: "Purchase and Shipping Excel Dashboard"
},



   /*PowerBI*/
  {
  id: generateId(),
  category: 'powerbi',
  title: 'HR Analytics Dashboard – Attrition Insight',
  shortDesc: 'Interactive Power BI dashboard analyzing employee attrition patterns.',
  longDesc: `This project presents an interactive Power BI dashboard developed to analyze employee attrition patterns using a cleaned and standardized HR dataset. The analysis explores how attrition varies across different demographic, educational, and job-related dimensions, supporting strategic HR insights and workforce planning.`,
  highlights: [
    'Cleaned, standardized, and transformed employee data using Power Query',
    'Explored attrition dynamics using descriptive analytics and visual trends',
    'Built intuitive Power BI visuals to present insights interactively',
    'Focused on business questions relevant to retention and talent strategy',
    'Attrition by Salary Range',
    'Attrition by Education Level',
    'Attrition by Job Role',
    'Attrition by Years at Company',
    'Job Satisfaction vs. Attrition Trends'
  ],
  tools: ['Power BI Desktop', 'DAX', 'Power Query', 'GitHub'],
  link: 'https://github.com/giraysengonul/PowerBI-Data-Analysis-Projects/tree/main/HR-Analytics-Projects',
  image: 'https://github.com/giraysengonul/PowerBI-Data-Analysis-Projects/blob/main/HR-Analytics-Projects/images/HRAnalytics-1.png?raw=true', 
  alt: 'HR Analytics Attrition Insight Dashboard'
},
{
  id: generateId(),
  category: 'powerbi',
  title: 'Data Professional Survey Breakdown',
  shortDesc: 'Power BI dashboard analyzing survey data from data professionals.',
  longDesc: `This project features an interactive Power BI dashboard based on a global survey of data professionals. It visualizes key insights such as salary by job title and gender, favorite programming languages, work-life balance satisfaction, and respondent demographics. The goal is to highlight trends and inform strategic career or hiring decisions in the data field.`,
  highlights: [
    'Visualized average salary by job title and gender',
    'Analyzed favorite programming languages among data professionals',
    'Mapped survey participant distribution by country',
    'Compared salary satisfaction and work-life balance perception',
    'Calculated average age and response counts per category',
    'Interactive visuals for filtering insights dynamically'
  ],
  tools: ['Power BI Desktop', 'DAX', 'Power Query'],
  link: 'https://github.com/giraysengonul/PowerBI-Data-Analysis-Projects/tree/main/Data-Professional-Survey-Project',
  image: 'https://github.com/giraysengonul/PowerBI-Data-Analysis-Projects/blob/main/Data-Professional-Survey-Project/assets/image1.png?raw=true', 
  alt: 'Data Professional Survey Breakdown Dashboard'
},
{
  id: generateId(),
  category: 'powerbi',
  title: 'Toy Store KPI Dashboard',
  shortDesc: 'Power BI dashboard visualizing sales, inventory, and profitability KPIs of toy stores.',
  longDesc: `This Power BI project presents a dynamic dashboard designed to analyze the key performance indicators of toy stores across multiple locations. It provides insights into product category profitability, seasonal sales trends, inventory value, and out-of-stock losses. The dashboard enables data-driven decisions by combining visual storytelling with interactive filtering options.`,
  highlights: [
    'Identified most and least profitable product categories',
    'Compared profit trends across different store locations',
    'Analyzed seasonal patterns in sales data over time',
    'Detected potential lost sales due to out-of-stock products',
    'Calculated total inventory value and estimated stock duration',
    'Interactive filters for category, location, and time range'
  ],
  tools: ['Power BI Desktop', 'DAX', 'Power Query'],
  link: 'https://github.com/giraysengonul/PowerBI-Data-Analysis-Projects/tree/main/Toy-Store-KPI-Project',
  image: 'https://github.com/giraysengonul/PowerBI-Data-Analysis-Projects/blob/main/Toy-Store-KPI-Project/images/Page1.png?raw=true', 
  alt: 'Toy Store KPI Dashboard'
},
{
  id: generateId(),
  category: 'powerbi',
  title: 'Adidas Sales Analysis Dashboard',
  shortDesc: 'Power BI dashboard analyzing Adidas sales, profitability, pricing, and product demand.',
  longDesc: `This Power BI project provides an in-depth analysis of Adidas sales data across key performance metrics such as total sales, profit, sales volume, pricing, and margins. The dashboard enables stakeholders to monitor performance trends over time, evaluate profitability across dimensions, and assess pricing strategy effectiveness. It is designed to support data-driven business decisions through interactive and visually engaging insights.`,
  highlights: [
    'Visualized total sales performance over time',
    'Analyzed total profit across regions and categories',
    'Evaluated sales volume to identify high-demand products',
    'Calculated average price per unit to assess pricing strategy',
    'Measured average margin to understand profitability',
    'Interactive dashboard with filters by product, region, and time'
  ],
  tools: ['Power BI Desktop', 'DAX', 'Power Query'],
  link: 'https://github.com/giraysengonul/PowerBI-Data-Analysis-Projects/tree/main/Adidas-Sales-Analysis-Project',
  image: 'https://github.com/giraysengonul/PowerBI-Data-Analysis-Projects/blob/main/Adidas-Sales-Analysis-Project/assets/Page1.png?raw=true',
  alt: 'Adidas Sales Analysis Power BI Dashboard'
},

{
  id: generateId(),
  category: "powerbi",
  title: "Fruit Sales Data Analysis",
  shortDesc: "Power BI dashboard analyzing fruit sales and inventory performance across multiple customer and product dimensions.",
  longDesc: "This Power BI project delivers an interactive analysis of fruit sales and inventory data. It explores customer purchasing behavior, product performance, pricing, and demographic factors influencing sales. The dashboard helps stakeholders gain actionable insights by visualizing key metrics like total sales, discounts, unit prices, and product-wise sales volume. Designed with a focus on simplicity and depth, it supports data-driven decisions through dynamic filtering and clear visuals.",
  highlights: [
    "Identified customers with the highest quantity purchases",
    "Visualized quantity, total amount, and unit price by product name and category",
    "Compared unit prices across different product categories",
    "Analyzed sales amount by customer gender and birth year",
    "Highlighted top 3 most sold and least sold products",
    "Highlighted top 3 most expensive products based on unit price",
    "KPI Cards: Total Sales, Total Discount Given, Total Quantity Sold"
  ],
  tools: ["Power BI Desktop", "DAX", "Power Query"],
  link: "https://github.com/giraysengonul/PowerBI-Data-Analysis-Projects/tree/main/Fruit-Sales-Data-Analysis",
  image: "https://github.com/giraysengonul/PowerBI-Data-Analysis-Projects/blob/main/Fruit-Sales-Data-Analysis/assets/Page1.png?raw=true",
  alt: "Fruit Sales Data Analysis Power BI Dashboard"
},

{
  id: generateId(),
  category: "powerbi",
  title: "ESG Risk Analysis (S&P 500 Companies)",
  shortDesc: "Power BI dashboard analyzing Environmental, Social, and Governance (ESG) risks across S&P 500 companies with sector, industry, and controversy insights.",
  longDesc: "This Power BI project provides a detailed analysis of ESG (Environmental, Social, and Governance) risks for S&P 500 companies. The dashboard allows users to explore sector and industry-level risk exposure, company-specific ESG risk scores, and controversy levels. It categorizes risks into different severity levels, helping stakeholders better understand sustainability performance, compliance challenges, and potential investment risks. The visualizations are designed to simplify complex ESG data and support informed decision-making.",
  highlights: [
    "Analyzed ESG risk scores across sectors and industries",
    "Visualized Environmental, Social, and Governance breakdowns for each company",
    "Highlighted controversy levels to assess company reputation risk",
    "Categorized companies based on ESG risk levels (Negligible → Severe)",
    "Displayed ESG risk distribution across S&P 500 companies",
    "Provided interactive filtering for sector, industry, and company-level insights"
  ],
  tools: ["Power BI Desktop", "DAX", "Power Query"],
  link: "https://github.com/giraysengonul/PowerBI-Data-Analysis-Projects/tree/main/ESG-Risk-Analysis-Project",
  image: "https://github.com/giraysengonul/PowerBI-Data-Analysis-Projects/blob/main/ESG-Risk-Analysis-Project/assets/Page1.png?raw=true",
  alt: "ESG Risk Analysis Power BI Dashboard"
},

{
  id: generateId(),
  category: "powerbi",
  title: "Amazon Prime Movies and TV Shows – Data Analysis",
  shortDesc: "Power BI dashboard analyzing Amazon Prime’s Movies and TV Shows dataset with insights on titles, ratings, genres, and release trends.",
  longDesc: "This Power BI project analyzes Amazon Prime’s Movies and TV Shows dataset. The dashboard provides insights into total titles by country, movies vs. TV shows distribution, release year trends, ratings, genres, and directors. It includes summary metrics such as total shows, total ratings, and key contributors. The dashboard is designed to help users explore Amazon Prime content from multiple perspectives and understand viewing trends across regions and genres.",
  highlights: [
    "Visualized total shows by country",
    "Analyzed Movies vs. TV Shows distribution",
    "Displayed release year trends for Amazon Prime titles",
    "Explored ratings and genres by total shows",
    "Summarized total titles, ratings, and directors",
    "Provided interactive filtering for deeper content insights"
  ],
  tools: ["Power BI Desktop", "DAX", "Power Query"],
  link: "https://github.com/giraysengonul/PowerBI-Data-Analysis-Projects/tree/main/Amazon-Prime-Analysis-Project",
  image: "https://github.com/giraysengonul/PowerBI-Data-Analysis-Projects/blob/main/Amazon-Prime-Analysis-Project/assets/Page1.png?raw=true",
  alt: "Amazon Prime Movies and TV Shows Power BI Dashboard"
},
{
  id: generateId(),
  category: "powerbi",
  title: "YouTube Video Performance – Power BI Dashboard",
  shortDesc:
    "A Power BI dashboard analyzing YouTube video performance with custom KPIs, engagement metrics, upload trends, and content insights.",
  longDesc:
    "This Power BI project analyzes YouTube video performance using a dataset containing views, likes, comments, duration, captions, definitions, and upload dates. The dashboard includes custom KPIs such as Views Per Day, Average Engagement %, Like/Comment Ratio, and a unique Viral Score metric. Visuals include donut charts, scatter plots, area charts, and channel-level comparisons. Designed with a clean black & white theme, this dashboard provides deep insights into upload behavior, audience engagement, content quality, and performance trends across channels.",
  highlights: [
    "Connected and cleaned YouTube dataset using Power Query",
    "Created custom KPIs: Views Per Day, Average Engagement %, Viral Score, Like/Comment Ratio",
    "Designed donut charts for video definition (HD/SD) and caption usage",
    "Built area chart showing uploads over time",
    "Created channel comparison visuals using Views Per Day metric",
    "Added scatter plot to analyze Duration vs Engagement %",
    "Used minimalistic black & white dashboard design with custom icons and fonts"
  ],
  tools: ["Power BI Desktop", "Power Query", "DAX"],
  link: "https://github.com/giraysengonul/PowerBI-Data-Analysis-Projects/tree/main/Youtube-Data-Analysis-Project",
  image:
    "https://github.com/giraysengonul/PowerBI-Data-Analysis-Projects/raw/main/Youtube-Data-Analysis-Project/assets/youtube_dashboard.png",
  alt: "YouTube Data Analysis Power BI Dashboard"
},

{
  id: generateId(),
  category: "powerbi",
  title: "E-Commerce Sales Dashboard",
  shortDesc: "Power BI dashboard analyzing product performance, regional sales, and monthly sales & profit trends.",
  longDesc: "This project presents an interactive E-Commerce Sales Dashboard built using Power BI. The dashboard focuses on analyzing sales performance across products, regions, and time. It highlights top 5 best-selling and worst-selling products, total sales by region, and monthly sales and profit trends. The goal of this project is to support data-driven decision-making by providing clear insights into product performance, regional demand, and profitability dynamics.",
  highlights: [
    "Identified top 5 best-selling and worst-selling products",
    "Analyzed total sales distribution by region",
    "Visualized monthly sales trends and seasonality",
    "Compared total sales and profit on a monthly basis",
    "Built interactive visuals for performance monitoring"
  ],
  tools: ["Power BI Desktop", "DAX", "Data Modeling"],
  link: "https://github.com/giraysengonul/PowerBI-Data-Analysis-Projects/tree/main/Ecommerce-Sales-Projects",
  image: "https://github.com/giraysengonul/PowerBI-Data-Analysis-Projects/raw/main/Ecommerce-Sales-Projects/assets/Page0.png",
  alt: "E-Commerce Sales Power BI Dashboard"
},





  /*tableau*/
  {
  id: generateId(),
  category: 'tableau',
  title: 'Sales Data Analysis',
  shortDesc: 'An interactive dashboard that analyzes monthly sales performance and trends.',
  longDesc: 'A Tableau dashboard that visualizes monthly sales trends, product performance, and region-based insights. Helps decision makers understand sales drivers.',
  highlights: [
    'Monthly performance breakdown',
    'Trend analysis over time',
    'Interactive filters by region/product',
    'Visual storytelling with Tableau'
  ],
  link: 'https://public.tableau.com/views/ChurnRateDashboard_17472294245260/ChurnRateDashboard?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link',
  image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAA/1BMVEX///8AQoEAKnYAKHUAN3wALXf3+PoAOHwAL3gAPn8AQIAAMnoANXu+xtUAOn0wh5qYpr7a3+f/cxFKW47/iQCKmrb/kBBwhKj/onb/dh3/cQXpGzL/j1T/okz/jgD+t5x6ja7nAA3oABeirsT0oKPoACP/plb/qmH63N1Bh50ofpa0vc9CVIpFZJRWZZQAJHTO3uOwy9Jil6rM0t5WmKfh6+5heaEuVYuvucx1qLX/gQDL3OHp7/IAHHGIkbBKaJYeTIb+4tT/nD0AdI7/tnr/lSX/1ML/2swxSYQAFW//kFj/pXukxMyCrrr/tpb+18r/gTr1q67rQlAAAGvvd38wcZh5AAAHHElEQVR4nO2ai1rbNgBG41t8jZOQhgzo1oDHNghJ2hmcdJjFXbcOtrZb177/s0yKr5HkYA+WQPuf7wPLtizJx5IsyWk0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOBz4uJi2yV4RJyebrsEj4h2e9sleERAVg0gqwaQVc6rV6/SYPiC0m4vN2F69AKvx4yfnvySBi9O24Tzc/r/9Hl69PXp6+2U7AHyZPfrNNi8fE5ot+n/y2Z69PQEY4mUgqwYts+CrBzIqgFk1QCyasDLYtw8MFnNRRAE28qckxWGq/sPTdbUdKebzvS7hN3d35LQr6sRfkw4OTlJg5suo4imLEnapjN98k3M7u5uEmJq2AnPpssoYiuyvk8gNSsJMTXrfCuyBqbkjNZF2IqsFK7PYqnRZwWDwV373oFu2V+GrCvXvbpjcQbuY6pZb968+X3lQA1ZiiQpdyzO45L1dH//q5UDkJXDydrZgawyIKsG1WV1u91b0vpcZZ23k9W9wkrpEk5WtlJ6ffbzLYl+9rIKa/BLOFmXl34cOJvcg6zWcBHNgk44upGvhoLzRJbq+f1gHC2GviiBNbL8/mI8Hnih+CxlPljMZoHXGF7JNy32nOd1sqbTITv5qUwWCycr4x5k+ZKhm5ZpqlpkSXpfEIPIklRbN0ksXYsEukpl+ZHmmqbpOtNhSe6eYbs0YceOJMlmZc1sdZoea96o6k1+aiuyvKklEaz4r1RWGkcypx4XoUxWZ2rSy+h1aiS8t0Cz0hiSQNbYzI/RTAp3Uirrj52dP8Vnziaiu6P9foohSUZhl43ZmpJCupoWaZourZFlObIbaQa9+SlXt0pkeQpNUbNVWSV5zAQpD20aQ9Yj2XCry7oghOft58ttGvX9/k7MHiEJ7j9LToYtn9CbDOiGzeRGM1LoE8t2NK6S0fNGQB2GfbtcljWe0wfZDUgcS60mK6TPQRmS22l2NJLLnIvhU5tyn96wH6hVZTWLXwffplGf7e9xZLL8sx5hMpnQzTWTiSaV4DIROw4pYipo5JTKUtO216cXsA1RLGtIqqqS3KrnkLbGxViQiqqk9TQwq8p6STlvv3z37t3b7FPq+/2EpaWETNb1GYHIohtW1lTNoIryPYOJSPp0c5zuVJHViMzCFYX74GVpxfcFqcEa2wc0lWJVriwr5pz5LPHXs4S/9/aepuHVGXVJn9XJIbZUL9/li5uXsJKsucO/MYSyfOJHnfutJf7Mkhy2HbZIm5azTqe2rP/Qwd/pbdgl7VXLiutVkbW8hKkjQlkkNTriSBC9aWnblLK9+5L1vw0d6LsyP+upYlnDoixaZqOKLFqnLbeAPWBiEFnmItsTyVo8Pll9nZFVqWYRWdZsWITpA5ay8u5PJKt4LNTEsg4PDleu4WRNzeTL01nvPpthmayVZmgUO5oYcTNUJVM0tsqh3Z+Z7Y3rybp8kck6WrmGl5Ve1hN38AXWj+DJ2bzf7VSRRRxU7+BZq3yM/FFVkcW+zCm3ylKqrySsl0VKaEXpDmlut8syyWCD/QIiHjrIluQO15aNDC7cLC0qi50bBIWcSZW2bEEim5PVIo/LTTvZKrLGZFois/dUPiiVC0s7/MobjWGkOZLBhcEmTEqU9WokbIma9eZkNWZkEO1K824Ydn3ybPMaVCyyS95aJErX90y3IDdDLKtpkPGCFvikb2letIYG+zIkh+lMw5ktc29ZAlndaTbB8DXB1IHCyWI/WNyfrFA16SzZ0DTNNqVSWZJJoxiqRdVy7+ySiXSXLmiYtqwosmbrOi+r4dMYlqPR3EmIk9UYkHGrE/XnnTFxZUaiO2BlcdyfrEY4M6x87mgIZdl5DEsb8+ObsiWarqrnSasCWQ0/no8laU/5lhqQns/UHfJILVu8ynOfsqamecsPXEYzxVZVXVdtTVmIlvS7gaY5y6mlrcxE68uli3/NIUmaLv/pjhKxr7qYvk7S1pe5O4HARouUznEcWzOZYdq3CccHxx/i0IfVCMkkj7y+s/mesAQFovE4ui3OxajT6fc7o/KPH91Rx/O8zkj8i/J1a/CtTjAeL4bz8t+idz2Sed9rlQ0zwtbcm/NlOzqOOTg4iANH/6xGkJxsKSEOOCabxjbYyqeww6MYIisOHDKyXEVeQtfMliiikcfG2YqsHxKODo7TIFOqmIYsyVn4AdD8KMsft5U528H719erL9UaHfxG2OZT42T1eg9b1jaBrBpAVg0gqwZFWbTrJLJaK50oZOUcHmcrpX36pas3mfToNlsVvdLv+jvRz4dPnz6lwX7yLZX+z2UNhqJZ6RdPSH+gMOr15nS7dpEWxHAdPCgHsmoAWTWArBpwE2lQTjMMH8RSDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAevwLT1PTGoI/NFgAAAAASUVORK5CYII=',
  alt: 'Product Performance'
},

{
  id: generateId(),
  category: 'tableau',
  title: 'Call Center KPI Dashboard',
  shortDesc: 'An interactive Tableau dashboard designed to track employee performance and call metrics.',
  longDesc: 'This dashboard was developed for a Help Desk manager who wanted to better understand monthly performance across their call center. The manager had a vague idea of the metrics needed, so we iteratively built an insightful and flexible dashboard. It includes key performance indicators such as call volume, resolution rate, average handle time, and individual agent performance. The dashboard allows dynamic filtering and supports decision-making through visual insights.',
  highlights: [
    'Dynamic visualization of key call metrics',
    'Agent-level performance tracking',
    'Monthly call volume and resolution trends',
    'Average handle time (AHT), First Call Resolution (FCR) rates',
    'Built-in interactivity with filters for agents, teams, and time periods'
  ],
  link: 'https://public.tableau.com/views/CallCenterKPIDashboard_17497308230560/Dashboard1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link',
  image: 'data:image/png;base64,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',
  alt: 'Call Center KPI Dashboard preview'
},

{
  id: generateId(),
  category: 'tableau',
  title: 'COVID-19 Data Analysis & Tableau Dashboard',
  shortDesc: 'An interactive Tableau dashboard showing global COVID-19 trends and key metrics.',
  longDesc: 'This project showcases the analysis of global COVID-19 data using SQL and Tableau. I performed data cleaning and aggregation with SQL to extract key insights, then visualized the results using Tableau. The dashboard presents metrics such as total cases, total deaths, death percentage, population infection rate, and country-wise comparisons, allowing users to explore the pandemic’s impact through an interactive and informative interface.',
  highlights: [
    'SQL-based data cleaning and transformation',
    'Calculation of total cases, deaths, and death percentage',
    'Population-level infection rates by country',
    'Interactive Tableau dashboard for visual storytelling',
    'Real-world data from "Our World in Data"'
  ],
  link: 'https://public.tableau.com/views/CovidDashboard_17537804135470/Dashboard?:language=en-US&:sid=&:redirect=auth&publish=yes&showOnboarding=true&:display_count=n&:origin=viz_share_link',
  image: 'data:image/png;base64,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',
  alt: 'COVID-19 Tableau Dashboard Preview'
},
{
  id: generateId(),
  category: "tableau",
  title: "Video Game Sales KPI Dashboard",
  shortDesc: "An interactive Tableau dashboard analyzing global video game sales trends and performance metrics.",
  longDesc: "This project presents an interactive Tableau dashboard built to analyze and visualize global video game sales data. The dataset includes 16,598 records of games with attributes such as name, platform, genre, publisher, release year, and regional sales figures. After cleaning and preparing the data, various visualizations were created to explore sales trends over time, platform performance, genre popularity, and regional market differences. The dashboard features KPI indicators, area charts, bar charts, and bubble charts, enabling users to interactively filter and compare insights by different categories.",
  highlights: [
    "Data cleaning and preparation for analysis",
    "KPI indicators for top-selling games, platforms, and publishers",
    "Area chart showing global sales trends over years",
    "Horizontal bar chart comparing genre-based sales",
    "Bubble chart visualizing platform-wise sales volume",
    "Regional sales analysis (NA, EU, JP, Others)",
    "Interactive filters for deeper exploration"
  ],
  link: "https://public.tableau.com/views/VideoGameSalesKPIDashboard/Dashboard1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
  image: 'data:image/png;base64,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',
  alt: "Video Game Sales KPI Dashboard Preview"
},

{
  id: generateId(),
  category: "tableau",
  title: "IBM HR Analytics Employee Attrition & Performance Dashboard",
  shortDesc: "An interactive Tableau dashboard exploring factors influencing employee attrition and performance.",
  longDesc: "This project presents an interactive Tableau dashboard built using the fictional IBM HR Analytics Employee Attrition & Performance dataset. The goal is to identify key factors influencing employee attrition and to provide actionable insights for HR decision-making. The dataset includes employee demographics, job satisfaction, performance ratings, and work-life balance indicators. Visualizations include comparisons of monthly income by education and attrition status, distance from home by job role, and breakdowns of satisfaction metrics. The dashboard uses interactive filters, bar charts, and KPI visuals to enable deeper exploration of workforce trends.",
  highlights: [
    "Data cleaning and preparation for HR analytics",
    "KPI indicators for attrition rate and key performance metrics",
    "Comparison of monthly income by education level and attrition status",
    "Distance from home by job role and attrition analysis",
    "Breakdown of satisfaction metrics (Job, Environment, Relationship)",
    "Interactive filters for department, job role, and performance rating",
    "Visual storytelling for HR decision-making"
  ],
  link: "https://public.tableau.com/views/IBMHRDashboard_17551735597630/Dashboard1?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
  image: 'data:image/png;base64,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',
  alt: "IBM HR Analytics Dashboard Preview"
},
{
  id: generateId(),
  category: "tableau",
  title: "Tripadvisor Hotel Analytics Dashboard",
  shortDesc: "An interactive Tableau dashboard analyzing hotel and user data from Tripadvisor.",
  longDesc: "This project showcases an interactive Tableau dashboard built to analyze hotel and user data from Tripadvisor. The goal is to uncover insights about hotel distribution, traveler behavior, and service preferences. The dataset covers hotel details such as number of rooms, star ratings, and additional services, as well as user information including travel type, continent, reviews, and length of stay. Visualizations include average number of rooms, average scores, user review activity, hotel counts by stars and services, traveler type breakdown, and the top 10 hotels by total rooms. Interactive filters and charts provide a deeper understanding of tourism and hospitality trends.",
  highlights: [
    "Analyzed average number of rooms and hotel star ratings",
    "Calculated average scores and user review activity",
    "Hotel distribution by additional services and stars",
    "Traveler type and period of stay breakdown",
    "Top 10 hotels by total rooms",
    "Interactive dashboard for tourism and hospitality insights",
    "Visual storytelling with charts, KPIs, and filters"
  ],
  link: "https://public.tableau.com/views/TripadvisorDashboard_17556798449210/Dashboard1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
  image: 'data:image/png;base64,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',
  alt: "Tripadvisor Hotel Analytics Dashboard Preview"
},
{
  id: generateId(),
  category: "tableau",
  title: "Amazon Sales Analysis – India",
  shortDesc: "An interactive Tableau dashboard analyzing Amazon India sales performance across categories and channels.",
  longDesc: "This project presents an interactive Tableau dashboard built to analyze Amazon India sales data. The goal is to explore sales distribution across product categories, sales channels, and order statuses, while uncovering insights into B2B sales and overall e-commerce performance. The dataset includes information on quantities, order status, courier status, categories, sales channels, and total transaction amounts. Visualizations include breakdowns of quantities by status and category, courier performance, sales channel comparisons, B2B sales trends, and aggregated KPIs such as total quantity, total amount, product counts, and categories. Interactive filters and charts make it easier to explore business insights and sales dynamics.",
  highlights: [
    "Analyzed sales quantities by order status and product category",
    "Examined courier status performance across categories",
    "Sales distribution by channel (B2B vs. online)",
    "KPIs for total quantity, total sales amount, and product variety",
    "Breakdown of product categories and sizes",
    "Interactive Tableau dashboard with filters and charts",
    "Business insights for e-commerce and logistics performance"
  ],
  link: "https://public.tableau.com/views/AmazonSalesAnalysisIndia_17561314275110/Dashboard1?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
  image: 'data:image/png;base64,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',
  alt: "Amazon Sales Analysis – India Dashboard Preview"
},




  /*Pandas*/
{
  id: generateId(),
  category: "pandas",
  title: "UFood Marketing Campaign Optimization",
  shortDesc: "Analyzes customer and campaign data to uncover insights, segment users, and optimize marketing strategy using Pandas.",
  longDesc: "This case study simulates a real-world data analyst scenario for UFood, Brazil’s leading food delivery platform. Using Python and Pandas, the project explores customer behavior, campaign interactions, and purchasing preferences. The analysis involves deep segmentation, behavioral clustering, and visual storytelling to identify valuable business opportunities and propose data-driven actions to improve marketing ROI and customer engagement.",
  highlights: [
    "Exploratory data analysis of customer and campaign performance",
    "Customer segmentation based on behavior, frequency, and purchase patterns",
    "Identified high-value customer groups and churn risks",
    "Recommended targeted marketing actions based on insights",
    "Visualizations created for both business and technical audiences"
  ],
  link: "https://github.com/giraysengonul/Pandas-Data-Analysis-Projects/tree/main/UFood-Marketting-Analyst-Project",
  image: "data:image/png;base64,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", 
  alt: "UFood Marketing Analysis Dashboard"
},

{
  id: generateId(),
  category: "pandas",
  title: "Genre Analysis in Movie Industry",
  shortDesc: "Analyzes movie genres by profitability, budget, popularity, and ratings using Pandas.",
  longDesc: "This exploratory data analysis project investigates the characteristics of movie genres using Python and Pandas. By examining budget, revenue, popularity, and ratings, it addresses key questions and hypotheses about what makes a genre successful. The dataset is enriched with profit and vote metrics to guide data-driven insights in the entertainment industry.",
  highlights: [
    "Genre-wise aggregation of budget, revenue, and profit",
    "Statistical comparisons based on popularity and voting average",
    "Validation of hypotheses with visual exploration",
    "Data cleaning, grouping, and exploratory insights with Pandas"
  ],
  link: "https://github.com/giraysengonul/Pandas-Data-Analysis-Projects/tree/main/Movie-Genre-Data-Analysis",
  image: "data:image/png;base64,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", 
  alt: "Movie Genre Analysis Dashboard"
},

{
  id: generateId(),
  category: "pandas",
  title: "Uber Ride Analysis – NYC",
  shortDesc: "Analyzes Uber pickup data to uncover temporal and spatial trends in New York City using Python, Pandas, and Folium.",
  longDesc: "This exploratory data analysis project examines Uber pickup data in New York City to uncover insights about user behavior across time and location. Using Python libraries such as Pandas and Folium, the project explores peak activity by hour, weekday, and month, while mapping high-density pickup zones through interactive heatmaps. The notebook highlights behavioral trends such as early weekend starts, weekday rush hours, and fleet distributions.",
  highlights: [
    "Cleaned and transformed Uber ride data with Pandas",
    "Identified peak hours and busiest weekdays using time-series analysis",
    "Mapped high-demand areas in NYC with Folium HeatMaps",
    "Analyzed base fleet activity and user behavior patterns",
    "Visualized 5 key dashboards including monthly trends, hourly rush, and geographic demand"
  ],
  link: "https://github.com/giraysengonul/Pandas-Data-Analysis-Projects/tree/main/Uber-Data-Analysis",
   image: "data:image/png;base64,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", 
  alt: "Uber Data Analysis Dashboard"
},

{
  id: generateId(),
  category: "pandas",
  title: "Bitcoin Price Analysis – Time Series Visualization",
  shortDesc: "Analyzes Bitcoin historical price data from 2013 to 2017 using Python, Pandas, and Plotly to identify trends and volatility.",
  longDesc: "This project explores historical Bitcoin OHLC price data using time series analysis and interactive visualizations. By leveraging Python, Pandas, and Plotly, it reveals long-term price trends, daily changes, and market behaviors. Key insights include annual and monthly performance, candlestick charts, log vs linear scale comparisons, and advanced visuals using Cufflinks. The analysis enhances understanding of cryptocurrency volatility and investor sentiment across time.",
  highlights: [
    "Analyzed Bitcoin OHLC data from 2013–2017 with Pandas",
    "Explored price trends using time-series visualizations",
    "Compared logarithmic and linear scale performance",
    "Built candlestick charts to represent market dynamics",
    "Developed interactive dashboards with Plotly and Cufflinks"
  ],
  link: "https://github.com/giraysengonul/Pandas-Data-Analysis-Projects/tree/main/Bitcoin-Data-Analysis",
   image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWEAAACPCAMAAAAcGJqjAAAAyVBMVEX///8TB1QAAEgAAE4RA1MAAEmxrsMAAEsAAFO8usv19PcAAE0HAFD/ygDnBIjV0+BjX4cQAFMAAEFqZY2Sjqvu7fIAAEQeFlhIQXfNy9l8eJoIAFXl4+xuapGhnrXmAIG4tsT/4o3/2F3/3XUzLWTrO573t9j+9vr2rNNua4opIGLe3eZUUHhcV4Gsqb5GQXCGg6EcElovKGQ/OG+Yla88N2oZEVbEwtFQSnt5d5P/6qowKmP/11Z2cpb/5pmIhp8AADr84vD1p9HTtONsAAALYUlEQVR4nO2cfX/iuBHHsWwjsNSCATvhIXTvjl67PAUCOdhLub32/b+o2pZGtiUTA4k2n6bz+2sNWj18JY9GoyGNBgqFQqFQKBQKhUKhUCgUCoVCoVAoFAqFQqFQqM+mSOmje/JJFYxbYyHa/ui+fE4FrVCKIGErClqeI4SE7QgJ2xYSfquGX0DDyu+R8Fu1iolQb1X5PRJ+q7quBOj2K79Hwm8VErYtJGxbSNi2kLBtIWHbQsK2hYRt61MTjr5KbT6wE5+a8MRlbiq6+8BOfG7C4zDrOr//wE4gYdtCwraFhG0LCdsWEn5nHboPUl3xgU542IcCD0H6jISvVLPnSvXEBzrhNhRgLhK+RU3iADDxgUEYCngtJHyLDMKrXvmeDgm/UQbhaCKz0iYiL+29CAfD6cNquTpNO68UWqxPSZn+fhhcWOtw310tu6Mvi+qvo8Omv0y+X8vvzxMe7rPerV/rXarDprt8fH5c9gfDC/P2DMK6biXcYXepfptlT4tTSKnrcpdROt+f4beeUZ+5nLvU512RSzAKs1rcpigx4NljKAI30chJKk3KM8IeDxVd6Lokq4/5bD5NGz1DONp4vuidT8ebSfbZ/LesKVLs62TjZBVy0cdj8zUAIHuE4yy5jXvpCPo9FkI7XujTdVVDLuFQtRO6vVU60q9MpMgBYZo9sm/pwzQuVMqN5IPJseeq7x3up7NUTXgQ00LvWJzOXxDyrKlegfC+MIq0j5zQTf1CtkeYyG4kb+CWOSWF8YNRfhSH5UJuK6l/JfZdXxEWX31NZu1IvFJ5WkZ84G65vrTRKsLRPSkXdPzZpBFxUbJA+CH2tIKOF48+nLDHGm3G9Z45/lEr3teHmSAh68aRVxHmq0b0xPTyfnG0bT/Uv3f81cIzCFdU5LjbxcT1NMKbvIc5aVJhnH40YX4Qr2DIE0OXd01bcUXAYeJ8Z//Fi5v31YTvG0/aCs2K53lgB5IDzlrOHtnLnaMRDgoVeaogn7e5RvggV3DICGXU97PBhHxyPeHffwL9/h6EHWeb9NlzyXzVXT2z3OCRQaHwNFY4GH1JSr5Q5qVDvvOqCIe7U/oPz6UxIbltdNWLEbXyD4lz7HYfW346V/BpTnilVnBI+XO3u9ySFDmHkorwTsw1b40Ow05n2Ow/UxryWS1gk/C//gL6+X0IJ30N/ZPwvxaDMSwZj+Qe1kQNiLujTloy6GxoMiRPtqURTsql7OjDdNFpb1pqFcawonJu8aqdbUaT6Qz+b5FwU01t4m1k/zs6rNL1D4MEwpOeHEzuzi0G894Ft1EG4Z/fm3AyHp6/vtE9DDRfcY0TAHHnOfbFPH9/DcKpTejLfTzaQUE6FZ8MgVtIpqq+4FToERAew9SSbr6lNQs2HAh/IaUWZJWDejP8IwiHrZJLo9ZXD5bDAoryp6L3GbyoHdIkHLLc4wvmYXnS5P7oeLREIN+rgPDUh7kp+QSd3GsAwlN6wZgrZZ+w55cTkRUPdpKfALfQLe8bC+XPGoQ9UvT21xJUOBb/j4Fx2Zf7dITFDoSf5VRwzbWZKipAeC1aZvXemS77hI1OtYHHXPb+ToIkU62kAmoQLlc6kRu/x7Ia97IUf9HqAxcMCC/gdYr1Uze8BYpw05ct6H2slXXCHjNiBrCl+8JMLHqS+FY/TQdgTw3CcbnoS1hsaynxEONU++CWCIORcI1kdDVqIAym3aNV5/PXZJ2w/gI28jUmtw25PHKrkavvVhPW3wtYcjSds2gMvI36DtApQRiAmyOJwJQpb01ZLE7Ianom0lQl64TpwPgKxukKpBt2tj5p/QzCvrY6IahNU5M/ic+tzMakfKbbwWI3Q1HyuJ4T3sOmmNZM4+2o+mcupqz7wxXnykiaBbdbHIzHzMjhkFQT1psGdy/bVGEC2XezV3JrE4QDudjDJ7MgTLsiHNyVzv7J0W5XFb8yZRD+4xfQH9lzO5Y/AeX8JsJ+xVzL5cAfsyd5MvZa5gkUlmMd4VGRMAyJ7o36wJwIwpHcICsMGXhnhbhERw+vcDKriyY3GpfEJe5mUvN3IwwRrllW4yuEgwvX8MWE5ftST1ieMIqxtY6jx4h47wL3uJawMehrCVdsvbIK/pw9SS/V4+b2Ed2yhtuvEF5WWYmqOyXYfovx4ahLtHiTd8EJxDph8sX8Ttphvsye1DZlvnOLWwgPX7HDjyXCW2mH52bBvWElUg1XPb8YIbwkuGadMDODIx3Y7MVt9uC8L9G8xUqA8eamLxHdlVbt43lfoq/7ElDDujtnhXhehYt5ZgzWCMvtrCjYRaQjp/xh80SqyF1DOArP+sMd2GMF4a/gDxuWLJjp/nBBk/boCeLP8hj5iirumkHVV1BXn+lcw7wqN1RsgupM92R0FqKaVxHOz3RGB8EHk4TBFLjGpRZYmkrCKYWmIxuJ6/yJiowU+SdQ3pi3dj4uAb0PHTmHEEI0TrlrqOM6whuIS+ivD2xtQBiWtEP01aTycs4QThayNOK1e10FYen/MkH4178r/SPr5dXRS6LNMixhdeaClRU65eEoIFcS7lCvupiKQ4P3APFRpi3igwrMnyUMvb6FsHyWa/jXv/0VdCNhfldaISMVvTnoRVlpbwrym4rrCKs5DMclC7VW3IBwHrwrhczyOxdFODIGK03MLVbivQmXbi7ymwaen1WX6pJilS+ZaJlfaFxJWA2Ke4U9bG/ecUSw2r1i+GS4zU9vQPjw50o7OonDi0ev3uksEHY4h8yNw5PC1ssHr/YVh83BFjfHBe/+SsINFUMIfWi5s/Q9df2mzhgbsMSef5SLMchuCHXCA+r6x2KrazE50qf/UMJheuvNevP+fvrQIqrztOhIqoE6IXGTgvsuy9whvr2NcEdlq3gsvv8+nY62cXaFLBHnp7gn1SEet0bT6ff7Hsuu6TXCieHxOCGn9TAKgmDShHwYUhv+sU44fArFZLuMFrKc2GPp7drlCzZMCjJxGRHvq/MlagkXroGSlhml4ojAlvJ0kxNe5CY3aTkpyMW/BmEpXyIQPrbn+qRHWiSGlcLrf5hnnbB7Wuv5UulYn8r+UTSvyjDZwKnrasLFDJ280Vm0ViktoENFclBImlrOz7BYnVcoWB9ds0/4odGMtbhfSHb6/hDtfC0rjMf7ZDu5lXBj0zMaTV4bGTIrxnqGxDVabqurP0m4M66YCIf3Lsi+/BGEG4sdKQw3ZK2KqFdyTmCFkXIyS2l9db1Uee6lJ54NwuLzYqj08FSEElKeegsHkpVzi9G0ycovTgYnu0VmFrKSyh+ezolbhhz6d5fcc1xAWOlmwkkzR+K7ab4oZ2Q8qo5HLfoulPHJo9hBTqyVShH2W+JZJ0zl58UhB/u7mKVmNrGvsSPSgg8kK+eWzWf7MaaZPU5LPoq2xjwrWThxHB44YXCrzVm8PZcHXVYt4X//558g0e+bCKdpTaf77Xh+3LTPp9xG0/58PN7uvk1hDgKZkB+UHyNtbEH1n5MNDt92Y+JvC0n1Z/7ubGewdGiP3T2oO86qglF7cGzFvTjukdm39oV5+rWEdd1K+PMomOgT/KqQsG0hYdtCwraFhG2rlnB0GIKyZyR8pep/dfun/I1oTG7Kl0DCtYTfmFWFhHXCq5gKxSKrzCDMGPyYHwlfIoNwewoSAA3C6u9NdF89lSNhqat/T3epkLAUErYte4RlVqx+Uf5/J3uEx/NM29rErk8ua4QbAegdevm/LHuEUUJI2LaQsG0hYdtCwraFhG0LCdsWErYtJGxbSNi2kLBt1RJuwj0dqfhdH6petYT1u2bUlbr6N6GoK4WEbQsJ21aTyJ+AhkjYjppU/ox5TD+6K59UKnvcSAtHoVAoFAqFQqFQKBQKhUKhUCgUCoVCoVAoFAqF+hz6L2JcBXZHnfn1AAAAAElFTkSuQmCC", 
  alt: "Bitcoin Price Analysis Dashboard"
},

{
  id: generateId(),
  category: "pandas",
  title: "Amazon Product Reviews Analysis",
  shortDesc: "Analyzes Amazon product reviews using Pandas to explore user behavior, review patterns, and sentiment trends.",
  longDesc: "This project investigates a real-world dataset of Amazon product reviews using Python and Pandas. The goal is to extract insights on customer behavior, identify high-engagement users, and perform sentiment analysis. The analysis explores product popularity, user frequency patterns, verbosity differences, and emotional tones within the reviews. Results are communicated through visual storytelling to support data-driven business understanding.",
  highlights: [
    "Exploratory analysis of Amazon product reviews and user activity",
    "Identified users who are most likely to respond to product recommendations",
    "Ranked products by number of reviews to detect top-performing items",
    "Compared frequent vs. non-frequent reviewers by behavior and verbosity",
    "Performed sentiment analysis to detect overall customer satisfaction"
  ],
  link: "https://github.com/giraysengonul/Pandas-Data-Analysis-Projects/tree/main/Amazon-Customers-Data-Analysis",
   image: "data:image/png;base64,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", 
  alt: "Amazon Product Review Analysis Dashboard"
},

{
  id: generateId(),
  category: "pandas",
  title: "Airbnb Listing Analysis Project",
  shortDesc: "Analyzes Airbnb listings across multiple cities using Python and Pandas to uncover pricing trends, value, and seasonality.",
  longDesc: "This project explores a real-world Airbnb dataset using Python and Pandas to uncover insights into the short-term rental market. The analysis identifies major differences between cities, investigates which features influence listing prices the most, detects seasonality in reviews, and compares overall value for travelers. Visualizations and structured exploration were used to support data-driven conclusions.",
  highlights: [
    "Compared listing performance across multiple cities",
    "Identified attributes most strongly influencing price",
    "Detected seasonal trends in review data",
    "Compared cost-effectiveness between cities",
    "Cleaned and explored real-world Airbnb dataset using Pandas"
  ],
  link: "https://github.com/giraysengonul/Pandas-Data-Analysis-Projects/tree/main/Airbnb-Listing-Analysis-Project",
   image: "data:image/png;base64,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", 
  alt: "Airbnb Listing Analysis Dashboard"
},




/*Python*/
{
  id: generateId(),
  category: 'python',
  title: 'Crypto Price Scraper',
  shortDesc: 'A Python script that scrapes real-time Bitcoin price data from CoinMarketCap and logs it into a CSV file.',
  longDesc: 'This project utilizes Python and BeautifulSoup to extract the latest Bitcoin price from CoinMarketCap. The collected data is stored in a CSV file for further analysis. The script is designed with scalability in mind, allowing expansion to multiple cryptocurrencies in future updates.',
  highlights: [
    'Web scraping using BeautifulSoup',
    'Data extraction from CoinMarketCap',
    'Automated CSV logging with Pandas',
    'Error handling and request optimization'
  ],
  link: 'https://github.com/giraysengonul/Python-Projects/tree/main/Automated-Web-Scraper(Bitcoin)',
  image: 'https://cdn-icons-png.flaticon.com/512/5968/5968350.png',
  alt: 'Python Crypto Price Scraper Project'
},
{
  id: generateId(),
  category: "python",
  title: "Most Used Word Finder",
  shortDesc: "A Python script that analyzes a given text file to find and rank the most frequently used words.",
  longDesc: "This project leverages Python and its built-in libraries to perform frequency analysis on any text file. The script reads the content, cleans and tokenizes the text, removes common stopwords, and outputs a ranked list of the most-used words. It is modular and easily adaptable for larger-scale NLP tasks in the future.",
  highlights: [
    "Text parsing and word frequency analysis",
    "Stopword removal and case normalization",
    "Customizable text preprocessing steps",
    "Terminal output and optional CSV export"
  ],
  link: "https://github.com/giraysengonul/Python-Projects/tree/main/Most-Used-Word-Finding-Project",
  image: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
  alt: "Python Most Used Word Finder Project"
},

/*SQL*/

{
  id: generateId(),
  category: 'sql',
  title: 'World Life Expectancy Data Cleaning & Analysis',
  shortDesc: 'Cleans and analyzes global life expectancy data using advanced MySQL queries.',
  longDesc: 'This project involves comprehensive data cleaning to remove duplicates and fill missing values in the world life expectancy dataset. It also performs exploratory data analysis (EDA) using advanced SQL features such as window functions, conditional logic, and aggregations to extract meaningful insights about life expectancy, GDP, BMI, and development status across countries.',
  highlights: [
    'Data cleaning with window functions (ROW_NUMBER)',
    'Imputation of missing values using neighboring years',
    'Exploratory Data Analysis (EDA) using SQL aggregation and window functions',
    'Insights on life expectancy correlations with GDP, BMI, and country status'
  ],
  link: 'https://github.com/giraysengonul/SQL-Data-Analysis-Projects/tree/main/World-Life-Expectancy-Project',
  image: 'https://www.commvault.com/wp-content/uploads/2019/08/sql-server_logo.jpg',
  alt: 'World Life Expectancy Project'
},

{
  id: generateId(),
  category: 'sql',
  title: 'COVID-19 Data Exploration & Analysis with SQL',
  shortDesc: 'Explores and analyzes global COVID-19 data using structured SQL queries and aggregations.',
  longDesc: 'This project provides a detailed SQL-based analysis of the COVID-19 pandemic using global datasets on cases, deaths, and vaccinations. It covers data exploration, percentage calculations, continent-level summaries, and vaccination trends using advanced SQL features. Key techniques include joins, window functions, CTEs, temporary tables, and view creation for scalable analysis and visualization.',
  highlights: [
   "Exploratory analysis on total cases, deaths, and infection rates",
    "Calculated death and infection percentages relative to population",
    "Ranked countries and continents by cases and deaths",
    "Tracked vaccination progress using window functions",
    "Created reusable views and temporary tables for further visualization"
  ],
  link: 'https://github.com/giraysengonul/SQL-Data-Analysis-Projects/tree/main/Covid-Portfolio-Project',
  image: 'https://www.commvault.com/wp-content/uploads/2019/08/sql-server_logo.jpg',
  alt: 'COVID-19 SQL Data Analysis Project'
},

{
  id: generateId(),
  category: 'sql',
  title: 'Restaurant Order Analysis ',
  shortDesc: 'Analyzes restaurant menu and order data using structured SQL queries to uncover business insights.',
  longDesc: 'This project presents a SQL-based analysis of a restaurant\'s menu and customer order data. The goal was to explore menu structure, order patterns, customer behavior, and revenue distribution. The analysis was divided into three stages: menu exploration, order breakdown, and combined insights using JOIN operations. Key findings include the most and least ordered dishes, average prices per category, and the top-spending customer orders.',
  highlights: [
    "Explored menu items and categorized dish counts",
    "Calculated average prices and identified most/least expensive items",
    "Analyzed order frequency, volume, and time span",
    "Identified top-spending orders and customer preferences",
    "Joined tables to perform advanced category-wise breakdowns"
  ],
  link: 'https://github.com/giraysengonul/SQL-Data-Analysis-Projects/tree/main/Restaurant-Order-Analysis',
  image: 'https://www.commvault.com/wp-content/uploads/2019/08/sql-server_logo.jpg',
  alt: 'Restaurant Order Analysis'
},


{
  id: generateId(),
  category: "sql",
  title: "Nashville Housing Data Cleaning & Analysis",
  shortDesc: "Cleansed and analyzed Nashville housing sales data using Microsoft SQL Server to prepare for insightful data analysis.",
  longDesc: "This project involved comprehensive data cleaning and preliminary analysis of Nashville housing sales data using Microsoft SQL Server. Key tasks included date format standardization, filling missing address data, splitting address fields, converting categorical values, removing duplicate records, and dropping unnecessary columns. The cleaned dataset enabled initial exploratory analysis on sales trends, vacant land sales, and price-location relationships, providing a solid foundation for further in-depth analysis.",
  highlights: [
    "Standardized sale date format for consistency",
    "Imputed missing property addresses using related records",
    "Split address field into separate street and city columns",
    "Normalized categorical data for vacant land sales",
    "Removed duplicate entries to ensure data integrity",
    "Performed initial data exploration on sales and pricing trends"
  ],
  link: "https://github.com/giraysengonul/SQL-Data-Analysis-Projects/tree/main/Nashville-Housing-Data-Analysis-Project",
  image: 'https://www.commvault.com/wp-content/uploads/2019/08/sql-server_logo.jpg',
  alt: "Nashville Housing Data SQL Project"
}




];

const projectsWrapper = document.getElementById('projectsWrapper');
const popup = document.getElementById('popup');
const overlay = document.getElementById('overlay');
const popupTitle = document.getElementById('popupTitle');
const popupDescription = document.getElementById('popupDescription');
const popupList = document.getElementById('popupList');
const popupLink = document.getElementById('popupLink');

function loadProjects(category) {
  projectsWrapper.innerHTML = ''; 

  const filtered = projects.filter(p => p.category === category);

  filtered.forEach(proj => {
    const card = document.createElement('div');
    card.className = 'project-card';

    card.innerHTML = `
      <img src="${proj.image}" alt="${proj.alt}" class="project-image" />
      <h3>${proj.title}</h3>
      <p class="project-description clamp-3">${proj.shortDesc}</p>
      <button class="project-button details" onclick="openPopup('${proj.id}')">📄 Project Details</button>
      <a href="${proj.link}" target="_blank" class="project-button link">🔗 Project Link</a>
    `;

    projectsWrapper.appendChild(card);
  });
}

function openPopup(projId) {
  const proj = projects.find(p => p.id === projId);
  if (!proj) return;

  popupTitle.textContent = proj.title;
  popupDescription.textContent = proj.longDesc;

  popupList.innerHTML = '';
  proj.highlights.forEach(item => {
    const li = document.createElement('li');
    li.textContent = '✔ ' + item;
    popupList.appendChild(li);
  });

  popupLink.href = proj.link;

  overlay.style.display = 'block';
  popup.style.display = 'block';
}

function closePopup() {
  popup.style.display = 'none';
  overlay.style.display = 'none';
}
