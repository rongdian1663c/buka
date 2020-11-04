import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

import Index from "@/components/index";
import RankPage from "@/components/novel/rank-page";
/*
import VipPage from "@/components/novel/vip-page";
import SubscibePage from "@/components/novel/subscibe-page";
import CommonPage from "@/components/novel/common-page";
import ClassifyPage from "@/components/novel/classify-page";
import ComicsDetailPage from "@/components/novel/comics-detail-page";
import HtmlPage from "@/components/novel/html-page";
import CommentPage from "@/components/novel/comment-page";
import AuthorPage from "@/components/novel/author-page";
import SearchPage from "@/components/novel/search-page";
*/

export default new Router({
    routes: [{
        path: "/",
        component: Index
        },
        {
         path: "/rank",
         component: RankPage
        }

    ]
});
