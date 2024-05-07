$('#editor').on('input propertychange', function(){
    let txt = $('#editor').val();
    txt=marked.parse(txt);
    $('#preview').html(txt);
})


const defaultText = `
# Header 1
## Sub Header 2
This is a [link](https://www.google.com).

This is \`\`inline code\`\` (use two backticks).

This below is block quote:
\`\`\`
$('#editor').on('input propertychange', function(){
    let txt = $('#editor').val();
    txt=marked.parse(txt);

    $('#preview').html(txt);
})
\`\`\`

This is a list:
* item 1
* item 2
* item 3

> This is a block quote.
> You can get this with prefacing your lines with \`\`>\`\`.

**Note:** Did you see how you can nest the inline code inside block quote?

You can insert an image too! ![star](https://cdn-icons-png.flaticon.com/512/660/660464.png)

`
$('#editor').text(defaultText);
let txt = $('#editor').val();
txt=marked.parse(txt);
$('#preview').html(txt);