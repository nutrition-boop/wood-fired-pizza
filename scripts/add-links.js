const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '../content/blog');

const replacements = [
  {
    file: 'can-you-use-charcoal-in-a-wood-fired-pizza-oven.md',
    search: 'burn very hot. Keep an infrared thermometer handy',
    replace: 'burn very hot. (Curious about exact numbers? See [how hot wood fired pizza ovens get](/blog/how-hot-do-wood-fired-pizza-ovens-get)). Keep an infrared thermometer handy'
  },
  {
    file: 'how-does-a-wood-fired-pizza-oven-work.md',
    search: 'At these extreme temperatures, a pizza cooks in **60 to 90 seconds**.',
    replace: 'At these extreme temperatures, a pizza cooks in **60 to 90 seconds** (check out our guide on [how long a wood fired pizza takes to cook](/blog/how-long-does-a-wood-fired-pizza-take-to-cook) for different styles).'
  },
  {
    file: 'how-hot-do-wood-fired-pizza-ovens-get.md',
    search: 'A well-built, properly heated wood fired pizza oven reaches',
    replace: 'A well-built, properly heated wood fired pizza oven (especially when using the right wood, or a [mix of wood and charcoal](/blog/can-you-use-charcoal-in-a-wood-fired-pizza-oven)) reaches'
  },
  {
    file: 'how-long-does-a-wood-fired-pizza-take-to-cook.md',
    search: 'Other styles and situations take longer.',
    replace: 'Other styles and situations take longer. And if you\'re making something besides pizza, check out [what else you can cook in a wood fired oven](/blog/what-can-you-cook-in-a-wood-fired-pizza-oven).'
  },
  {
    file: 'how-to-build-a-backyard-wood-fired-pizza-oven.md',
    search: 'The dome shape is more efficient at reflecting heat and creates better airflow.',
    replace: 'The dome shape is more efficient at reflecting heat and creates better airflow (read more about [how a wood fired pizza oven works](/blog/how-does-a-wood-fired-pizza-oven-work)).'
  },
  {
    file: 'what-can-you-cook-in-a-wood-fired-pizza-oven.md',
    search: 'this is one of the most versatile cooking tools you can own.',
    replace: 'this is one of the most versatile cooking tools you can own — one major reason why many prefer it when comparing [wood fired vs gas or electric ovens](/blog/wood-fired-vs-gas-or-electric).'
  },
  {
    file: 'wood-fired-vs-gas-or-electric.md',
    search: 'Some people love the ritual of it — building the fire',
    replace: 'Some people love the ritual of it — whether that\'s [building your own backyard oven](/blog/how-to-build-a-backyard-wood-fired-pizza-oven) or just building the fire'
  }
];

replacements.forEach(item => {
  const filePath = path.join(dir, item.file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    if (content.includes(item.search)) {
      content = content.replace(item.search, item.replace);
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated ${item.file}`);
    } else {
      // Trying case-insensitive regex if exact match fails
      const regex = new RegExp(item.search.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');
      if (regex.test(content)) {
          content = content.replace(regex, item.replace);
          fs.writeFileSync(filePath, content, 'utf8');
          console.log(`Updated ${item.file} via regex`);
      } else {
          console.log(`Could not find target text in ${item.file}`);
      }
    }
  } else {
    console.log(`File not found: ${item.file}`);
  }
});
