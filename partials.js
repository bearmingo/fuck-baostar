angular.module('templates-partials', ['/static/partials/maptab/all.html', '/static/partials/maptab/blastfurnaces.html', '/static/partials/maptab/map_summary.html', '/static/partials/maptab/merchants.html', '/static/partials/maptab/singlerollings.html', '/static/partials/search/search_package_list.html', '/static/partials/search/search_package_map.html', '/static/partials/search/search_result.html', '/static/partials/search/search_shop_list.html', '/static/partials/search/search_shop_map.html']);
angular.module("/static/partials/maptab/all.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("/static/partials/maptab/all.html",
    "<dl class=\"{{ data.class }}\" ng-repeat=\"data in tabData\"  style=\"position: absolute; \">\n" +
    "    <a href=\"/search/all/?mode=shop&sfregion={{ data.code }}&sfregionName={{ data.title }}\" target=\"_self\">\n" +
    "        <dt style=\"margin-top:5px;font-size:14px;font-weight:bold\">{{ data.title }}</dt>\n" +
    "        <dd style=\"padding-top: 10px\">高炉钢厂：<strong class=\"red\">{{ data.BlastFurnace }}</strong> 处</dd>\n" +
    "        <dd>单 轧 厂：<strong class=\"red\">{{ data.SingleRolling }}</strong> 处</dd>\n" +
    "        <dd>贸 易 商：<strong class=\"red\">{{ data.Merchant }}</strong> 处</dd>\n" +
    "        <dd>总 库 存：<strong class=\"red\">{{ data.weight }}</strong>吨</dd>\n" +
    "    </a>\n" +
    "</dl>");
}]);

angular.module("/static/partials/maptab/blastfurnaces.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("/static/partials/maptab/blastfurnaces.html",
    "<div class=\"{{data.code}}\"  ng-repeat=\"data in tabData\" >\n" +
    "    <a href=\"/search/all/?mode=shop&sfbrand={{data.brand_code}}&sfbrandName={{data.brand_name}}\" target=\"_self\" title=\"{{ data.name }}\">\n" +
    "        <img ng-src=\"/static/img/logo/{{data.code}}.png\">\n" +
    "    </a>\n" +
    "</div>");
}]);

angular.module("/static/partials/maptab/map_summary.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("/static/partials/maptab/map_summary.html",
    "<div ng-controller=\"MapSummaryCtrl\" class=\"cont_right_w12 map_china_bg\">\n" +
    "    <div class=\"cont_right_top_tab\">\n" +
    "        <div class=\"tabTitle\">\n" +
    "            <ul>\n" +
    "                <li class=\"{{ tabCss(tab) }}\" ng-click=\"changeTab(tab.name)\" ng-repeat=\"tab in tabs\">\n" +
    "                    <label class=\"ticon0{{ $index + 1 }}\">{{ tab.title }}</label>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "        <div class=\"tabContent\">\n" +
    "            <ul>\n" +
    "                <li>\n" +
    "                    <div style=\"position: relative;\" ng-include=\"url\" onload=\"tabData=currTab.data\">\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("/static/partials/maptab/merchants.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("/static/partials/maptab/merchants.html",
    "<dl class=\"{{ data.class }}\" ng-repeat=\"data in tabData\" style=\"position: absolute;\">\n" +
    "    <a href=\"/search/all/?mode=shop&sfregion={{ data.code }}&sfregionName={{ data.title }}\" target=\"_self\" >\n" +
    "        <dt style=\"margin-top:5px;font-size:14px;font-weight:bold\">{{ data.title }}</dt>\n" +
    "        <dd style=\"padding-top: 10px\">贸 易 商：<strong class=\"red\">{{ data.Merchant }}</strong> 处</dd>\n" +
    "        <dd>总 库 存：<strong class=\"red\">{{ data.weight }}</strong>吨</dd>\n" +
    "    </a>\n" +
    "</dl>");
}]);

angular.module("/static/partials/maptab/singlerollings.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("/static/partials/maptab/singlerollings.html",
    "<div class=\"{{data.code}}\" ng-repeat=\"data in tabData\">\n" +
    "    <a href=\"/search/all/?mode=shop&sfbrand={{data.brand_code}}&sfbrandName={{data.brand_name}}\" target=\"_self\" >\n" +
    "        <img ng-src=\"/static/img/logo/{{ data.code }}.png\">\n" +
    "    </a>\n" +
    "</div>");
}]);

angular.module("/static/partials/search/search_package_list.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("/static/partials/search/search_package_list.html",
    "<div ng-switch =\"result.length\" >\n" +
    "    <div class=\"ofz p10\" ng-switch-when = \"0\" ng-switch=\"search_status\">\n" +
    "        <div style=\"text-align: center;\" ng-switch-when = \"0\">\n" +
    "            <img src=\"/static/img/loading_32.gif\">\n" +
    "            <span style=\"color:#f60;font-weight: bolder;font-size: 14px;\">数据加载中...</span>\n" +
    "        </div>\n" +
    "        <div style=\"text-align: center;\" ng-switch-when = \"1\">\n" +
    "            <img src=\"/static/img/caution_icon.png\" />\n" +
    "            <span style=\"color:#f60;font-weight: bolder;font-size: 14px;\">抱歉，未找到相关资源！</span>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"ofz p10 br_dashed_gray\" ng-repeat=\"pack in result\" >\n" +
    "        <a href=\"/package/{{ pack.provider_code }}/{{ pack.id }}\" target=\"_blank\" >\n" +
    "        <div class=\"fl\">\n" +
    "            <div class=\"ltimg\">\n" +
    "                <img class=\"h50\" ng-src=\"/static/img/package/{{ pack.pack_pic_name_s}}\" alt=\"包装样例\" />\n" +
    "                <span class=\"grade01\"></span>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        </a>\n" +
    "        <ul class=\"fl ml20 f13 lh180 w240\">\n" +
    "            <li><a href=\"javascript:void(0)\" onmouseover=\"show_shop_sign(this,'{{ pack.product_type_code }}','{{ pack.shop_sign }}')\">{{ pack.shop_sign }}</a> <a href=\"/package/{{ pack.provider_code }}/{{ pack.id }}\" target=\"_blank\" >{{ pack.product_name }}</a></li>\n" +
    "            <li>{{ pack.spec }} <strong style=\"color:#f60;margin-left:10px;\"> {{ pack._weight|number:3 }}吨</strong></li>\n" +
    "            <li ng-switch=\"pack.is_open\">\n" +
    "                <a href=\"/{{ pack.provider_code }}/search\" ng-switch-when=\"1\">{{ pack.provider_name }}</a>\n" +
    "                <span ng-switch-default>范达城</span>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "        <ul class=\"fl ml30\">\n" +
    "            <li class=\"mt5\"><span class=\"f20 fb orange\">&yen;{{ pack.discounted_price|number:2 }}</span></li>\n" +
    "            <li><del class=\"c_ccc\">&yen;{{ pack.price|number:2 }}</del></li>\n" +
    "\n" +
    "            <li class=\"mt5\" ng-switch=\"pack.can_bargaining\">\n" +
    "                <label class=\"yj_btn_b01\" ng-switch-when=\"Y\">可议</label>\n" +
    "                <label class=\"yj_btn_b02\" ng-switch-default>不议</label>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "        <div class=\"fl ml30 f14 fb h50 w80 tc c_666\" style=\"line-height: 30px;\">{{ pack.manufacturer }}<br/>{{ pack.storage_site }}</div>\n" +
    "        <ul class=\"fl ml30 w50\">\n" +
    "            <li class=\"mt5\">\n" +
    "                <a style=\"margin-right: 5px;float: right;\" href=\"/compare-price/{{pack.provider_code}}/{{pack.id}}/\" target=\"_blank\" title=\"比一比，瞧一瞧www.818717.com\">\n" +
    "                    <img src=\"/static/img/icon_b003.png\" width=\"40px\" height=\"16px\">\n" +
    "                </a>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "        <ul class=\"fl ml30 w80\">\n" +
    "            <li class=\"mt5\"><label class=\"zztk_state_c\">在库</label></li>\n" +
    "            <li class=\"tc mt10\"><label class=\"yj_btn_b02\" href=\"\">直销</label></li>\n" +
    "        </ul>\n" +
    "        <ul class=\"fl ml30 lh180 w170 tr\">\n" +
    "            <li class=\"mt10\" >\n" +
    "                <a class=\"cart_btn2\" ng-show=\"is_add(pack.id)\" data-cart=\"{{ pack.id }}\" href=\"javascript:void(0)\">已购</a>\n" +
    "                <a class=\"cart_btn2\" ng-show=\"!is_add(pack.id)\" ng-click=\"addToCart(pack.id,pack._weight, pack.discounted_price, pack.product_type_code ,pack.product_name, pack.provider_code)\" data-cart=\"{{ pack.id }}\" href=\"javascript:void(0)\">购买</a>\n" +
                     "<a class=\"cart_btn2\" ng-click=\"addToPlan(pack.id, pack._weight, pack.discounted_price, pack.product_type_code, pack.product_name, pack.provider_code);\" href=\"javascript:void(0)\" data-cart=\"{{ pack.id }}\">add to plan</a>" +
    "            </li>\n" +
    "        <li class=\"mt10\" >"+
    "            <label ng-repeat=\"star in getStarS(pack.star_level)\" class=\"icon_hn\"></label>"+
    "            <label ng-repeat=\"star in getStarH(pack.star_level)\" class=\"icon_hd\"></label>"+
    "        </li>"+
    "        </ul>\n" +
    
    "\n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("/static/partials/search/search_package_map.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("/static/partials/search/search_package_map.html",
    "<table width=\"100%\">\n" +
    "    <tr>\n" +
    "        <td width=\"350\" valign=\"top\">\n" +
    "            <div class=\"ltdr_list_area\" ng-switch = \"result.length\" >\n" +
    "                <div ng-switch-when = \"0\" ng-switch=\"search_status\">\n" +
    "                    <div class=\"ltdr_list ofz tc\" ng-switch-when = \"0\">\n" +
    "                        <img src=\"/static/img/loading_32.gif\">\n" +
    "                        <span style=\"color:#f60;font-weight: bolder;font-size: 14px;\">数据加载中...</span>\n" +
    "                    </div>\n" +
    "                    <div class=\"ltdr_list ofz tc\" ng-switch-when = \"1\">\n" +
    "                        <img src=\"/static/img/caution_icon.png\" />\n" +
    "                        <span style=\"color:#f60;font-weight: bolder;font-size: 14px;\">抱歉，未找到相关资源！</span>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div id=\"div_warehose\" style=\"background-color:#FCFAB0;color:#275397;line-height: 40px;\"><b>{{warehouse_info}}</b></div>\n" +
    "                <div  class=\"ltdr_list ofz\" ng-class=\"pack.currclass\" ng-mouseover=\"mouseOverOut('Over', pack)\" ng-mouseout=\"mouseOverOut('Out', pack)\" ng-repeat=\"pack in result\">\n" +
    "                    <label class=\"fl enum mt5 mr5\">{{ $index + 1 }}</label>\n" +
    "                    <div >\n" +
    "                        <label class=\" disib pt5\">\n" +
    "                            {{ pack.shop_sign }} <a href=\"/package/{{ pack.provider_code }}/{{ pack.id }}\" target=\"_blank\" >{{ pack.product_name }}</a> <span class=\"ml15\">{{ pack.manufacturer }}</span>\n" +
    "                        </label>\n" +
    "\n" +
    "                        <a  class=\"fr cart_btn2\"  ng-click=\"addToCart(pack.id,pack._weight, pack.discounted_price, pack.product_type_code ,pack.product_name, pack.provider_code)\" href=\"javascript:void(0)\">购买</a>\n" +
                             "<a class=\"fr cart_btn2\" ng-click=\"alert(pack);\" href=\"javascript:void(0);\">add to plan</a>" +
    "\n" +
    "                    </div>\n" +
    "                    <div class=\"clear\">\n" +
    "                        <a href=\"/package/{{ pack.provider_code }}/{{ pack.id }}\" target=\"_blank\" >\n" +
    "                        <div class=\"fl ltimg\">\n" +
    "                            <img style=\"width:50px; height: 50px\" ng-src=\"/static/img/package/{{ pack.pack_pic_name_s}}\" alt=\"包装样例\" />\n" +
    "                            <span class=\"grade01\"></span>\n" +
    "                        </div>\n" +
    "                        </a>\n" +
    "                        <dl class=\"fl ml10 lh150 c_666 w220\">\n" +
    "                            <dd class=\"mt5\">{{ pack.spec }} <span class=\"ml10\">{{ pack._weight|number:3 }}吨</span></dd>\n" +
    "                            <dd ng-switch=\"pack.can_bargaining\">\n" +
    "                                <span class=\"f18 fb orange\">&yen;{{ pack.discounted_price|number:2 }}</span> <del class=\"ml5 c_ccc\">&yen;{{ pack.price|number:2 }}</del>\n" +
    "\n" +
    "                                <label class=\"fr yj_btn_b01\" ng-switch-when=\"Y\">可议</label>\n" +
    "                                <label class=\"fr yj_btn_b02\" ng-switch-default>不议</label>\n" +
    "                            </dd>\n" +
    "                            <dd ng-switch=\"pack.is_open\">\n" +
    "                                <a class=\"a_red unl\" href=\"/{{ pack.provider_code }}/search\" ng-switch-when=\"1\">{{ pack.provider_name }}</a>\n" +
    "                                <span ng-switch-default>范达城</span>\n" +
    "                            </dd>\n" +
    "                        </dl>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </td>\n" +
    "        <td align='right'>\n" +
    "            <div id=\"div_map\" ng-init=\"map_init();\" style=\"width:600px;height: 600px;\" class=\"ltdr_list_area\"></div>\n" +
    "        </td>\n" +
    "    </tr>\n" +
    "</table>");
}]);

angular.module("/static/partials/search/search_result.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("/static/partials/search/search_result.html",
    "\n" +
    "<div class=\"wrap960\" ng-controller=\"SearchResultCtrl\">\n" +
    "    <div class=\"selresult_list\">\n" +
    "        <div class=\"fr\">\n" +
    "            <div class=\"baidumap_tab\">\n" +
    "                <ul>\n" +
    "                    <li ng-class=\"check_css(display_mode=='map','tabin','')\" ng-click=\"display_mode='map';\" title=\"切换模式\">地图模式</li>\n" +
    "                    <li ng-class=\"check_css(display_mode=='list','tabin','')\" ng-click=\"display_mode='list';\" title=\"切换模式\">列表模式</li>\n" +
    "                </ul>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <h3 class=\"selresult_list_top\">\n" +
    "            <label class=\"f16 fb\">搜索结果</label>\n" +
    "            <a ng-show=\"mode == 'package'\" href=\"javascript:void(0)\" \n" +
    "                ng-class=\"check_css(field.field==sort_field, sort_method, '')\" \n" +
    "                ng-repeat=\"field in fields\"\n" +
    "                ng-click=\"sort(field.field)\">\n" +
    "            {{ field.text }}\n" +
    "            </a>\n" +
    "        </h3>\n" +
    "        <div class=\"clear\"></div>\n" +
    "        <div class=\"selresult_list_area\" ng-include=\"'/static/partials/search/search_'+mode+'_'+display_mode+'.html'\"></div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"tr pager_red\">\n" +
    "        <a class=\"red\" ng-show=\"page > 0\" ng-click=\"paging(0);\" href=\"javascript:void(0)\">首页</a>\n" +
    "        <a class=\"red\" ng-show=\"page > 0\" ng-click=\"paging(page-1);\" href=\"javascript:void(0)\">上一页</a>\n" +
    "\n" +
    "        <a style=\"margin-left:2px;\" ng-repeat=\"p in pages|limitTo:10\" ng-click=\"paging(p.page)\" href=\"javascript:void(0)\"\n" +
    "            ng-class=\"check_css(p.page==page, 'active', '')\"> {{ p.text }}</a>\n" +
    "\n" +
    "        <a class=\"red\" ng-show=\"page<(total_pages-1)\" ng-click=\"paging(page+1);\" href=\"javascript:void(0)\">下一页</a>\n" +
    "        <a class=\"red\" ng-show=\"page<(total_pages-1)\" ng-click=\"paging(total_pages-1);\" href=\"javascript:void(0)\">末页</a>\n" +
    "\n" +
    "        <span ng-show=\"total_pages > 0\">\n" +
    "            <span class=\"ml10 mr10\">共 <strong>{{ total_pages }}</strong> 页</span>\n" +
    "            <span class=\"mr10\">到第<input type=\"text\" ng-model=\"input_page\" class=\"p0 w30\" size=\"2\" />页</span>\n" +
    "            <input type=\"button\" class=\"solid btn_orange white\" ng-click=\"paging(input_page-1);\" value=\"确定\" />\n" +
    "        </span>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("/static/partials/search/search_shop_list.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("/static/partials/search/search_shop_list.html",
    "<div ng-switch =\"result.length\" >\n" +
    "    <div class=\"ofz p10\" ng-switch-when = \"0\" ng-switch=\"search_status\">\n" +
    "        <div style=\"text-align: center;\" ng-switch-when = \"0\">\n" +
    "            <img src=\"/static/img/loading_32.gif\">\n" +
    "            <span style=\"color:#f60;font-weight: bolder;font-size: 14px;\">数据加载中...</span>\n" +
    "        </div>\n" +
    "        <div style=\"text-align: center;\" ng-switch-when = \"1\">\n" +
    "            <img src=\"/static/img/caution_icon.png\" />\n" +
    "            <span style=\"color:#f60;font-weight: bolder;font-size: 14px;\">抱歉，未找到相关资源！</span>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"ofz p10 br_dashed_gray\" ng-repeat=\"company in result\">\n" +
    "        <div class=\"fl w120\">\n" +
    "            <img src=\"/static/img/shop_log/{{ company.code }}.png\" alt=\"{{ company.name }}\" onError=\"$(this).attr('src','/static/img/shop_log/default.gif')\" style=\"width:120px;height: 40px;\">\n" +
    "\n" +
    "            <p class=\"tc f14 fb pt5\"><a href=\"/{{ company.code }}/search\">{{ company.short_name }}</a></p>\n" +
    "            <p class=\"tc\">\n" +
    "                <label class=\"icon_hn\" ng-repeat=\"_ in range(company.credit)\"></label>\n" +
    "            </p>\n" +
    "        </div>\n" +
    "        <ul class=\"mt30 ml20 fl f13 lh200 w210\">\n" +
    "            <li>联系方式：{{ company.phone }}</li>\n" +
    "            <li>上架：{{ company.total_weight|number:3 }}吨</li>\n" +
    "            <li>公司地址：{{ company.address }}</li>\n" +
    "        </ul>\n" +
    "        <div class=\"fl ofz\">\n" +
    "            <div class=\"selresult_dtl_col ml10 p10\" ng-repeat=\"pack in company.packs|limitTo:3\">\n" +
    "                <a href=\"/package/{{ pack.provider_code }}/{{ pack.id }}\" target=\"_blank\" >\n" +
    "                <img class=\"h80\" style=\"max-width:130px;\" src=\"/static/img/package/{{ pack.pack_pic_name_s }}\" alt=\"{{ pack.product_name }}\">\n" +
    "                </a>\n" +
    "                <dl>\n" +
    "                    <dt class=\"fb\"><a href=\"/package/{{ pack.provider_code }}/{{ pack.id }}\" target=\"_blank\" >{{ pack.product_name }}</a></dt>\n" +
    "                    <dd>重量：{{ pack.weight|number:3 }}吨</dd>\n" +
    "                    <dd>现价：￥{{ pack.discounted_price|number:2 }}元/吨</dd>\n" +
    "                </dl>\n" +
    "            </div>\n" +
    "            <p class=\"fr\" ng-if=\"company.packs.length > 4\" style=\"padding:128px 0 0 20px;\">\n" +
    "                <a class=\"a_red\" href=\"/{{ company.code }}/search\">更多 &gt;</a>\n" +
    "            </p>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("/static/partials/search/search_shop_map.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("/static/partials/search/search_shop_map.html",
    "<table>\n" +
    "    <tr>\n" +
    "        <td width=\"350\" valign=\"top\">\n" +
    "            <div class=\"ltdr_list_area\" ng-switch =\"result.length\">\n" +
    "                <div ng-switch-when = \"0\" ng-switch=\"search_status\">\n" +
    "                    <div class=\"ltdr_list ofz tc\" ng-switch-when = \"0\">\n" +
    "                        <img src=\"/static/img/loading_32.gif\">\n" +
    "                        <span style=\"color:#f60;font-weight: bolder;font-size: 14px;\">数据加载中...</span>\n" +
    "                    </div>\n" +
    "                    <div class=\"ltdr_list ofz tc\" ng-switch-when = \"1\">\n" +
    "                        <img src=\"/static/img/caution_icon.png\" />\n" +
    "                        <span style=\"color:#f60;font-weight: bolder;font-size: 14px;\">抱歉，未找到相关资源！</span>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"ltdr_list ofz\" ng-repeat=\"company in result\">\n" +
    "                    <label class=\"fl enum\">{{ $index + 1 }}</label>\n" +
    "                    <dl class=\"ml30 lh200 c_666\">\n" +
    "                        <dt class=\"fb red\"><a href=\"/{{ company.code }}/search\">{{ company.name }}</a></dt>\n" +
    "                        <dd>\n" +
    "                            <span class=\"red fb\">{{ company.phone }}</span>\n" +
    "                        </dd>\n" +
    "                        <dd>{{ company.address }}</dd>\n" +
    "                    </dl>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </td>\n" +
    "        <td align='right'>\n" +
    "            <div id=\"div_map\" ng-init=\"map_init();\" style=\"width:600px;height: 600px;\" class=\"ltdr_list_area\"></div>\n" +
    "        </td>\n" +
    "    </tr>\n" +
    "</table>\n" +
    "                ");
}]);


console.log("loading partial.js success");
