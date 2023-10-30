# [Tailwind CSS](https://tailwindcss.com/)

1. Node js download krna ha LTS Version

1. Tailwind CSS IntelliSense extension install krni ha

   ```bash
   npx tailwindcss init
   ```

1. ye command chalani ha terminal ma

1. Tailwind.config.js ki file ma content ka undar `"./dist/*.html"`
   src ka undar input.css ki file bnani ha

   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

1. dist ka undar ka index.html ki file bnainga

   ```bash
   npx tailwindcss -i ./src/input.css -o ./dist/style.css --watch
   ```

1. command chalani ha terminal ma
