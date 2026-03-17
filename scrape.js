const fs = require('fs');
const https = require('https');
const path = require('path');

const urls = [
  'https://www.shubhstonex.com/index.html',
  'https://surajmarbles.com/',
  'https://rmmarbles.com/?srsltid=AfmBOoo2WnictyocHI_qwGxcIK43cP4Te-pwQy0leEw19MmBamiyuFEn'
];

async function fetchHTML(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

function extractImages(html, baseUrl) {
  const imgRegex = /<img[^>]+src="([^">]+)"/g;
  let matches;
  const images = [];
  while ((matches = imgRegex.exec(html)) !== null) {
    let src = matches[1];
    if (src.startsWith('//')) {
      src = 'https:' + src;
    } else if (src.startsWith('/')) {
      const urlObj = new URL(baseUrl);
      src = urlObj.origin + src;
    } else if (!src.startsWith('http')) {
      const urlObj = new URL(baseUrl);
      src = urlObj.origin + '/' + src;
    }
    
    // filter for jpg, png, webp and ignore tiny icons or logos
    if (src.match(/\.(jpg|jpeg|png|webp)/i) && !src.toLowerCase().includes('logo') && !src.toLowerCase().includes('icon')) {
      images.push(src);
    }
  }
  return [...new Set(images)]; // unique
}

async function scrape() {
  const allImages = [];
  for (const url of urls) {
    console.log(`Scraping ${url}...`);
    try {
      const html = await fetchHTML(url);
      const images = extractImages(html, url);
      console.log(`Found ${images.length} potential marble images.`);
      allImages.push(...images);
    } catch (e) {
      console.error(`Error scraping ${url}:`, e.message);
    }
  }
  
  // Just print the first 15 for us to pick from and download them programmatically
  console.log("Top matches to download:");
  for (let i = 0; i < Math.min(15, allImages.length); i++) {
    console.log(allImages[i]);
  }
}

scrape();
