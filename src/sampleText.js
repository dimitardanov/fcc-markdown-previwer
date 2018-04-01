
const sampleText = `
# Headings

## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6


## Emphasis

_italic_

**bold**

**_bold italic_**

~~scratched~~


## Lists

### Ordered List

1. First item
2. Second item
  1. First subitem
  2. Second subitem
3. Third item
  * Unordered sublist item


### Unordered List

- Unordered list item
- Unordered list item

    Indented paragraph within list item


## Links

Link [google](https://www.google.com)


## Image

![Alt-text](https://upload.wikimedia.org/wikipedia/commons/4/48/Markdown-mark.svg "Logo Title Text 1")


## Code

\`single line of code\`


\`\`\`javascript
var str = 'JS code block';
alert(str);
\`\`\`


\`\`\`python
s = "Python syntax highlighting"
print s
\`\`\`


## Tables

| Col 1         | Col 2         | Col 3 |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |


## Blockquote

> To be or not to be that is the question

regular paragraph

> To be a victim of all life's worldly woes or not
> to be a coward and take death by his prophet hand.


## Horizontal Rule

---


`;

export default sampleText;
