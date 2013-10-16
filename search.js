angular.module('search', ['templates-partials']);

function FilterNarrow($scope, $rootScope, $window) {
  // 设置一个ng_handler供search_nav回掉
  ng_handler = function (url) {
    if (is_goto == 'True')  {
      $window.location = url;
      return;
    }
    $rootScope.$broadcast('do search', mode);
  }
}

function SearchResultCtrl($scope, $http,$timeout){
  //已开通店铺的10家供应商列表
  $scope.provider_list = [
      {code:'T12347', name:'上海百营钢铁集团有限公司'},
      {code:'T24543', name:'上海鞍钢钢材加工有限公司'},
      {code:'T09121', name:'无锡中彩新材料股份有限公司'},
      {code:'T21306', name:'杭州申江新型材料科技有限公司'},
      {code:'T11481', name:'江苏江南冷轧薄板有限公司'},
      {code:'T08439', name:'无锡新大中薄板有限公司'},
      {code:'T60000', name:'包钢'},
      {code:'T24010', name:'韶钢'},
      {code:'T24473', name:'沙钢'},
      {code:'T02217', name:'钢贸'}
  ];



  $scope.$on('do search', function(event, mode){
    $scope.mode = mode;
    $scope.page = 0;
    $scope.perform_search();
  });

  $scope.result = [];
  $scope.warehouses = [];
  $scope.warehouse_info = '';

  $scope.display_mode = 'list';
  $scope.mode = mode;  //package

  $scope.fields = [
      {text: '牌号', field: 'shop_sign'},
      {text: '厚/直径', field: 'act_thick'},
      {text: '宽/壁厚', field: 'act_width'},
      {text: '件重', field: 'per_weight2'},
      {text: '件数', field: 'pieces'},
      {text: '重量', field: '_weight'},
      {text: '价格', field: 'discounted_price'},
      {text: '上架日期', field: 'put_date'},
      {text: '产地', field: 'manufacturer'}
  ];
  $scope.sort_field = '';
  $scope.sort_method = '';

  $scope.page = 0;
  $scope.pages = [];
  $scope.total_pages = 20;
  $scope.page_size = 10;

  $scope.check_css = function(v, truevalue, falsevalue) {
    return v ? truevalue : falsevalue;
  };

  $scope.sort = function (field)  {
    if (field != $scope.sort_field) {
      $scope.sort_field = field;
      $scope.sort_method = 'desc';
    }
    else {
      var method = $scope.sort_method != 'desc' ? 'desc' : 'asc';
      $scope.sort_method = method;
    }
    $scope.page = 0;
    $scope.perform_search();
  };

  $scope.map_init = function(){
      RMap.Init();
      $scope.map_update();
  };

  $scope.map_update = function(){
    if (!RMap || !RMap.map) return;
    RMap.Update($scope.warehouses);
  };

  $scope.perform_search = function()  {
    $scope.search_status = 0;
    var params = {
      search: current_url.replace('?', '&').split('&').slice(1).join('__'),
      shop: shop_search,
      query: query,
      mode: mode,
      page: $scope.page,
      sort: $scope.sort_field+' '+$scope.sort_method
    };
      $http.get('/api/general_search', { params: params }).success(function(result)  {
          $scope.search_status = 1;
          $scope.result = result.result;
          $scope.total_pages = Math.ceil((result.meta[1][1])/$scope.page_size);
          $scope.input_page = $scope.page + 1;
          var start = $scope.page;
          var end = $scope.total_pages > 9 ? 9 : $scope.total_pages;
          var pages_min = $scope.pages.length == 0 ? 0 : $scope.pages[0].page;
          var pages_max = $scope.pages.length == 0 ? 0 : $scope.pages[$scope.pages.length-1].page;

          if ($scope.page==$scope.total_pages-1)
              start = $scope.total_pages-end;
          if($scope.page < pages_min && $scope.page != 0)
              start = $scope.page+1-end;
          if($scope.page < pages_min || $scope.page > pages_max || $scope.pages.length == 0 || $scope.page==0 || $scope.page==$scope.total_pages-1){
              $scope.pages = [];
              for (var i = start; i < start + end; i++) {
                  if (i < $scope.total_pages)
                      $scope.pages.push({ text: i+1, page: i })
              }
          }
          $scope.warehouses = result.warehouses;
          $scope.warehouse_info = result.warehouse_info;
          $scope.map_update();
    });
  };
  $scope.user_cart = user_cart;
  $scope.is_add = function(pack_id){
    for (var i=0;i<$scope.user_cart.length;i++){
       if (pack_id == $scope.user_cart[i]){
          return true;
       }
    }
    return false;
  }

$scope.paging = function (page) {
    if ($scope.page == page) return;
    $scope.page = page;
    $scope.perform_search();
};

  $scope.mouseOverOut = function(mode, pack)  {
      //包装成地图需要的仓库数据
      var warehouse = {
          'code': pack['warehouse_code'],
          'name': pack['warehouse_name'],
          'weight': pack['_weight'],
          'lng': pack['ws_longitude'],
          'lat': pack['ws_latitude']
      }

      if (mode == "Over"){
          pack.currclass='div_current';
          RMap.MouseOverOut(warehouse, 1);
      }
      else if(mode == "Out"){
          pack.currclass='';
          RMap.MouseOverOut(warehouse, 0);
      }
  };
  $scope.getStarS = function(star_nm) {
    var res = [];
    for (var i=0;i<star_nm;i++) {
      res.push(i);
    }
    return res;
  }
  $scope.getStarH = function(star_nm) {
    var res = [];
    for (var i=0;i<(5-star_nm);i++) {
      res.push(i);
    }
    return res;
  }

  $scope.addToCart = function(packId, weight, price, productTypeId, prodTypeDesc,provider_code){
      addToCart(packId, weight, price, productTypeId, prodTypeDesc,provider_code);
      $timeout(function(){$scope.user_cart = user_cart;},500);
  }

  $scope.addToPlan = function(packId, weight, price, productTypeId, prodTypeDesc, provider_code) {
      baoStarUtility.addToPlan(packId, weight, price, productTypeId, prodTypeDesc, provider_code);
  }

  $scope.perform_search();
}


console.log("load search.js success");
