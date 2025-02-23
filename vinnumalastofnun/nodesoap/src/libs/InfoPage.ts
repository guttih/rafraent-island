

const PageRoutes = [
    {   path: "/aaetladurfaedingardagur",            method: "get",      description: `Sækir alla áætlaða fæðingadaga barna`        },
    {   path: "/aaetladurfaedingardagur/:kennitala", method: "get",      description: `Sækir áætlaðann fæðimngardag barns út frá kennitölu foreldris`},
    {   path: "/faedingarorlofstekjur",              method: "get",      description: `Sækir tekjur einstaklinga vegna fæðingarorlofs`},
    {   path: "/faedingarorlofstekjur/:kennitala",   method: "get",      description: `Sækir tekjur einstaklings vegna fæðingarorlofs út frá kenitölu hans`},
];

export const MakePage = (title: String, description:String):String => {
    let styles = `
    <style>
        .center          {margin: auto;width: 50%;padding: 10px;}
        .container       {padding-top: 40px; padding-right: 40px; max-width:800px}
        .title           {padding-bottom: 10px; font-size: 24px; }
        .description     {padding-bottom: 15px;font-size: 18px;padding-left: 10px;font-style: italic;}
        .td-get          {color: green;font-weight: bold;}
        .td-post         {color:orange;}
        .td-delete       {color:red;}
        td,th            {text-align: left;padding-left: 10px;padding-bottom: 5px;border-bottom: 1px solid gray}
        th               {border-bottom: 2px solid gray}
    </style>
`
    let html = `
    <html>
        <head>${styles}</head>
        <body>
            <div class="container center">
                <div class="title">${title}</div>
                <div class="description">${description}</div>
                ${makeTable(PageRoutes)}
            </div>
        </body>
    </html>
    `;
    return html;
}

const makeHref = (path:string, method:string):String => {
    return method ==="get" && !path.includes(':')? `<a href="${path}">${path}</a>`:path;
}

const makeTable = (routes: any):String => {
    
    let head = `
  <table class="table">
    <thead class="head">
        <tr>
        <th>Slóð</th>
        <th>Aðgerð</th>
        <th>Lýsing</th>
        </tr>
    </thead>
    
    `;
    let body='<tbody>';
    routes.forEach(element => {
        body+=`\n<tr> <td class="td-path"> ${makeHref(element.path, element.method)} </td> <td class="td-method"> <span class="td-${element.method}">${element.method}</span> </td> <td class="td-description"> ${element.description} </td> </tr>`;
    });
    body+='</body>';

    let footer = `
</table>`;
    return `${head}${body}${footer}`;
}