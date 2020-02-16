import {postGetAllAction}                 from "./controller/PostGetAllAction";
import {postGetByIdAction}                from "./controller/PostGetByIdAction";
import {postSaveAction}                   from "./controller/PostSaveAction";

import {heimilisfangListAction}           from "./controller/HeimilisfangListAction";
import {heimilisfangGetByIdAction}        from "./controller/HeimilisfangGetByIdAction";
import {heimilisfangSaveAction}           from "./controller/HeimilisfangSaveAction";

import {einstaklingurListAction}          from "./controller/EinstaklingurListAction";
import {einstaklingurGetByIdAction}       from "./controller/EinstaklingurGetByIdAction";
import {einstaklingurSaveAction}          from "./controller/EinstaklingurSaveAction";
import {einstaklingurGetBornByForeldraId} from "./controller/EinstaklingurGetBornByForeldraId";
import {einstaklingurGetForeldrarByBarnId} from "./controller/EinstaklingurGetForeldrarByBarnId"



/**
 * All application routes.
 */
export const AppRoutes = [
    {   path: "/posts",                               method: "get",      action: postGetAllAction                  },
    {   path: "/posts/:id",                           method: "get",      action: postGetByIdAction                 },
    {   path: "/posts",                               method: "post",     action: postSaveAction                    },

    {   path: "/heimilisfang",                       method: "get",      action: heimilisfangListAction             },
    {   path: "/heimilisfang/:id",                    method: "get",      action: heimilisfangGetByIdAction         },
    {   path: "/heimilisfang",                        method: "post",     action: heimilisfangSaveAction            },

    {   path: "/einstaklingur",                       method: "get",      action: einstaklingurListAction           },
    {   path: "/einstaklingur/:kennitala",            method: "get",      action: einstaklingurGetByIdAction        },
    {   path: "/einstaklingur",                       method: "post",     action: einstaklingurSaveAction           },
    {   path: "/einstaklingur/born/:kennitala",       method: "get",      action: einstaklingurGetBornByForeldraId  },
    {   path: "/einstaklingur/foreldrar/:kennitala",  method: "get",      action: einstaklingurGetForeldrarByBarnId  }

    

];