const fs = require('fs');
const path = require('path');

/** helper para leer tu JSON */
function loadData() {
  const filePath = path.join(process.cwd(), 'public', 'assets', 'db', 'la_home.json');
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(fileContent);
}

const locales = ['es', 'en']; // usa los mismos de tu proyecto

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://latinadvisor.com.au',
  generateRobotsTxt: true,
  outDir: './out',
  i18n: {
    locales,
    defaultLocale: 'es',
  },

  additionalPaths: async () => {
    const data = loadData();

    const visas = data.data?.migration_processes?.au || [];
    const ciudades = data.data?.ciudades || [];

    const paths = [];

    visas.forEach((visa) => {
      locales.forEach((locale) => {
        paths.push({
          loc: `/${locale}/australia/migration/${visa.slug}`,
          lastmod: new Date().toISOString(),
        });
      });
    });

    ciudades.forEach((ciudad) => {
      locales.forEach((locale) => {
        paths.push({
          loc: `/${locale}/australia/${ciudad.slug}`,
          lastmod: new Date().toISOString(),
        });
      });
    });

    return paths;
  },
};