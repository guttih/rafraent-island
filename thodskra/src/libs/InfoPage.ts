

const PageRoutes = [
    {   path: "/heimilisfong",                          method: "get",      description: `Sækir öll heimilisföng`                                   },
    {   path: "/heimilisfong",                          method: "post",     description: `Bætir við heimilisfangi`                                  },
    {   path: "/heimilisfong/:id",                      method: "get",      description: `Sækir heimilisfang út frá auðkenni heimilisfangs`         },
    {   path: "/heimilisfong/:id",                      method: "delete",   description: `Eyðir heimilisfang út frá auðkenni heimilisfangs`         },
    {   path: "/heimilisfong/einstaklingur/:kennitala", method: "get",      description: `Sækir heimilisfang einstaklings út frá kennitölu hans`    },
    {   path: "/einstaklingar",                         method: "get",      description: `Sækir lista af einstaklingum.  Hægt er að gefa tvo parametra með þessari aðgerð, "from" sækir alla sem fæðast eftir ákveðinn tíma og "to" sem sækir alla til ákveðins tíma.  Tími er gefinn á þessu formi "yyyy-MM-dd hh:mm:ss"`   },
    {   path: "/einstaklingar",                         method: "post",     description: `Vista einstakling, Bæta nýjum við eða breyta einstakling sem þegar var til`   },
    {   path: "/einstaklingar/:kennitala",              method: "delete",   description: `Eyðir einstakling`   },
    {   path: "/einstaklingar/nanar/:kennitala",        method: "get",      description: `Sækir nánari upplýsingar um ákveðinn einstakling, þar á meðal maka, börn og heimili`   },
    {   path: "/einstaklingar",                         method: "post",     description: `Vistar upplýsingar um einstakling.`   },
    {   path: "/einstaklingar/born/:kennitala",         method: "get",      description: `Sækir börn einstaklings`   },
    {   path: "/einstaklingar/foreldrar/:kennitala",    method: "get",      description: `Sækir foreldra einstaklings.`   },
    {   path: "/foreldrar",               method: "get",      description: `Sækir alla einstaklinga sem eiga börn.  Hægt er að gefa tvo parametra með þessari aðgerð, "from" sækir alla sem fæðast eftir ákveðinn tíma og "to" sem sækir alla til ákveðins tíma.  Tími er gefinn á þessu formi "yyyy-MM-dd hh:mm:ss`   },
    {   path: "/born",                    method: "get",      description: `Sækir alla einstaklinga sem eiga foreldra. Hægt er að gefa tvo parametra með þessari aðgerð, "from" sækir alla sem fæðast eftir ákveðinn tíma og "to" sem sækir alla til ákveðins tíma.  Tími er gefinn á þessu formi "yyyy-MM-dd hh:mm:ss`}

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