# CSS animation playground vs 2

A simple website where I play around with CSS animation.

This repository and website is part of a school assignment where I'm learning Node.js and Gulp.

## Q&A:

Answers to questions (in Swedish) which is a part of the assignment.

### Vad är automatiseringsprocessens syfte?
 
 Syftet med en autmatiserad arbetsprocess är att underlätta för utvecklare och automatisera arbete som annars skulle behöva göras manuellt. 

 I en automatiserad arbetsprocess går det att tydligt skilja på den källkod som man arbetar i och den källkod som sedan publiceras. I arbetsfiler är det bra för en utvecklare att kunna kommentera noga, stycka upp sina filer för att lättare hitta saker o.s.v. När filer publiceras däremot behöver en utvecklare ta hänsyn till prestanda, färre förfrågningar mot en server, storleken på filerna o.s.v. Med autmatiserande uppgifter ("tasks") görs det möjligt för en utvecklare att jobba i sina arbetsfiler och låta publiceringsfilerna skapas automatiskt. Detta sparar mycket jobb.

### Vilka paket och verktyg har använts? Varför valdes dessa?

 Grunden för automatiseringsprocessen har byggts med hjälp av **Node.js**, **npm** och **Gulp**. Jag har valt verktyg grundat på den teori som funnits för momentet och har inte efterforskat några egna paket eller verktyg i det här skedet.

 **De verktyg och paket som använts är dessa:**
 
 - [Browsersync](https://browsersync.io/docs/gulp) har använts som "livereload" för att automatiskt kunna ladda om webbläsaren när koden ändras. Detta för att underlätta utvecklingsarbetet.
 - [gulp-concat](https://www.npmjs.com/package/gulp-concat) har använts för att slå samman CSS- och JavaScript filer till en fil per språk. Detta för att så få förfrågningar till servern som möjligt ska behöva göras.
 - [gulp-terser](https://www.npmjs.com/package/gulp-terser) har använts för att minifiera JavaScript-filer. Detta för att filerna ska ta upp så lite utrymme som möjligt.
 - [gulp-cssnano](https://www.npmjs.com/package/gulp-cssnano) har använts för att minifiera CSS-filer. Detta för att filerna ska ta upp så lite utrymme som möjligt.
 - [gulp-sourcemaps](https://www.npmjs.com/package/gulp-sourcemaps) har använts för att kunna kartlägga sammanslagna CSS- och JavaScript-filer. Detta för att lättare kunna felsöka koden.
 - [gulp-imagemin (vs 7.1.0)](https://www.npmjs.com/package/gulp-imagemin) har använts för att komprimera de bilder som finns på webbplatsen. Detta för att bilderna ska ta mindre utrymme och arbetet inte ska behöva göras manuellt.

### Hur startar man upp systemet som har skapats och de tasks som ingår?

 För att starta upp projektet behöver nedanstående steg följas. De förutsätter att Node.js och npm finns installerat på datorn.

 1. Öppna en terminal/kommandoprompt 
 1. Om Gulp inte finns installerat globalt på datorn installera detta med `npm install gulp-cli -g`
 1. Flytta dig till den plats där "repositoryt" ska hamna och klona "repositoryt med `git clone https://github.com/sofiewallin/css-animation-vs2.git`
 1. Gå in i det klonade "repositoryt"
 1. Installera paket med `npm install`
 1. Starta Gulp med `gulp`
 1. Klart

### Har något extra lagts till?

 Inte annat än de paket som inte var obligatoriska för uppgiften och som listas ovan. 
