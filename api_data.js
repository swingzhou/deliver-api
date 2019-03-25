define({ "api": [
  {
    "type": "POST",
    "url": "/v1/xlink-deliver-rest/expressDeliverRest/listExpressDeliver",
    "title": "分页查询快递发货列表",
    "name": "listExpressDeliver",
    "group": "ExpressDeliverRestController",
    "description": "<p>分页查询快递发货列表</p>",
    "permission": [
      {
        "name": "userOnly"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>页码，从1开始</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "query",
            "description": "<p>查询对象</p>"
          },
          {
            "group": "Parameter",
            "type": "long",
            "optional": false,
            "field": "query.createDateEnd",
            "description": "<p>创建日期结束点</p>"
          },
          {
            "group": "Parameter",
            "type": "long",
            "optional": false,
            "field": "query.createDateStart",
            "description": "<p>创建日期起始点</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "query.queryFieldName",
            "description": "<p>查询字段名</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "query.queryValue",
            "description": "<p>查询值</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "query.ids",
            "description": "<p>快递发货标识数组</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "query.status",
            "description": "<p>状态 待打单PENDING_PRINT/已打单PRINTED</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "size",
            "description": "<p>页面大小</p>"
          },
          {
            "group": "Parameter",
            "type": "array(object)",
            "optional": true,
            "field": "sort",
            "description": "<p>排序对象</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"page\": 1,\n  \"query\": {\n    \"createDateEnd\": 0,\n    \"createDateStart\": 0,\n    \"queryFieldName\": \"string\",\n    \"queryValue\": \"string\",\n    \"status\": \"PENDING_PRINT\"\n  },\n  \"size\": 10,\n  \"sort\": [\n    {\n      \"additionalProp3\": \"string\"\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "code",
            "description": "<p>返回编码</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "data.count",
            "description": "<p>总数</p>"
          },
          {
            "group": "Success 200",
            "type": "array(object)",
            "optional": false,
            "field": "data.list",
            "description": "<p>数据列表</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.acceptRegion",
            "description": "<p>收货地区</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.addressDetail",
            "description": "<p>详细地址</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.consignee",
            "description": "<p>收货人</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.contactNum",
            "description": "<p>联系方式</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.customId",
            "description": "<p>客户标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.customName",
            "description": "<p>客户名称</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.customType",
            "description": "<p>客户类型 大客户BIG_CUSTOM/经销商DEALER</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.expressCompany",
            "description": "<p>快递公司</p>"
          },
          {
            "group": "Success 200",
            "type": "array(object)",
            "optional": false,
            "field": "data.list.expressDeliverProducts",
            "description": "<p>快递发货产品信息</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "data.list.expressDeliverProducts.num",
            "description": "<p>数量</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.expressDeliverProducts.productId",
            "description": "<p>产品标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.expressDeliverProducts.productName",
            "description": "<p>产品名称</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.expressDeliverProducts.productPn",
            "description": "<p>产品料号</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.expressId",
            "description": "<p>快递单号</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.id",
            "description": "<p>快递发货标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.orderId",
            "description": "<p>订单号</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.orderType",
            "description": "<p>订单类型 直租订单DIRECT_RENT/商用售租订单COMMERCIAL_SALE_RENT/民用售租订单CIVIL_SALE_RENT/续租订单RERENT/换机订单CHANGE/租约调整订单LEASE_ADJUST/换机工单CHANGE_WORK_ORDER/退租申请单THROW_LEASE/租约服务订单LEASE_SERVICE</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.status",
            "description": "<p>状态 待打单PENDING_PRINT/已打单PRINTED</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "responseTime",
            "description": "<p>返回响应时间</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>响应状态</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: ",
          "content": "{\n  \"code\": \"string\",\n  \"data\": {\n    \"count\": 0,\n    \"list\": [\n      {\n        \"acceptRegion\": \"string\",\n        \"addressDetail\": \"string\",\n        \"consignee\": \"string\",\n        \"contactNum\": \"string\",\n        \"customId\": \"string\",\n        \"customName\": \"string\",\n        \"customType\": \"BIG_CUSTOM\",\n        \"expressCompany\": \"string\",\n        \"expressDeliverProducts\": [\n          {\n            \"num\": 0,\n            \"productId\": \"string\",\n            \"productName\": \"string\",\n            \"productPn\": \"string\"\n          }\n        ],\n        \"expressId\": \"string\",\n        \"id\": \"string\",\n        \"orderId\": \"string\",\n        \"orderType\": \"DIRECT_RENT\",\n        \"status\": \"PENDING_PRINT\"\n      }\n    ]\n  },\n  \"msg\": \"string\",\n  \"responseTime\": \"2019-01-26T07:33:23.490Z\",\n  \"status\": \"string\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "错误码详情": [
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "10000001",
            "description": "<p>空参数</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "10000003",
            "description": "<p>查询字段为空</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20307002",
            "description": "<p>获取发货产品列表失败</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20307003",
            "description": "<p>获取快递发货列表失败</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "000000",
            "description": "<p>请求成功</p>"
          }
        ],
        "错误格式说明": [
          {
            "group": "errorFormat",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>接口返回的错误信息</p>"
          },
          {
            "group": "errorFormat",
            "type": "string",
            "optional": false,
            "field": "code",
            "description": "<p>错误码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"responseTime\": \"2019-01-02T09:47:15.032+0000\",\n    \"code\": \"20107007\",\n    \"status\": \"200\",\n    \"msg\": \"fail to add account period\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/cn/xlink/cloud/deliver/rest/controller/ExpressDeliverRestController.java",
    "groupTitle": "ExpressDeliverRestController",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Access-Token",
            "description": "<p>xlink平台颁发的凭证</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n\"Access-Token\":\"访问凭证\",\n\"Content-Type\":\"application/json\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/v1/xlink-deliver-rest/expressDeliverRest/printExpressBill",
    "title": "快递发货打印",
    "name": "printExpressBill",
    "group": "ExpressDeliverRestController",
    "description": "<p>快递发货打印</p>",
    "permission": [
      {
        "name": "userOnly"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "array(object)",
            "optional": false,
            "field": "no-name",
            "description": "<p>打印数组对象</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "orderNo",
            "description": "<p>订单号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "receiverProvince",
            "description": "<p>收货省</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "receiverCity",
            "description": "<p>收货市</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "receiverDistrict",
            "description": "<p>收货区</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "receiverAddress",
            "description": "<p>详细地址</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "receiverName",
            "description": "<p>收货人姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "receiverMobile",
            "description": "<p>收货人手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "cpCode",
            "description": "<p>物流公司编码</p>"
          },
          {
            "group": "Parameter",
            "type": "array(object)",
            "optional": false,
            "field": "items",
            "description": "<p>详情</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "items.productPn",
            "description": "<p>产品料号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "items.qty",
            "description": "<p>数量</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "items.itemName",
            "description": "<p>名称</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "[\n  {\n    \"orderNo\": \"string\",\n    \"receiverProvince\": \"string\",\n    \"receiverCity\": \"string\",\n    \"receiverDistrict\": \"string\",\n    \"receiverAddress\": \"string\",\n    \"receiverName\": \"string\",\n    \"receiverMobile\": \"string\",\n    \"cpCode\": \"string\",\n    \"items\": [\n      {\n        \"productPn\": \"string\",\n        \"qty\": \"string\",\n        \"itemName\": \"string\"\n      }\n    ]\n  }\n]",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "code",
            "description": "<p>返回编码</p>"
          },
          {
            "group": "Success 200",
            "type": "array(object)",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.cpCode",
            "description": "<p>物流公司编码</p>"
          },
          {
            "group": "Success 200",
            "type": "array(object)",
            "optional": false,
            "field": "data.items",
            "description": "<p>详情</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.items.productPn",
            "description": "<p>产品料号</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.items.qty",
            "description": "<p>数量</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.items.itemName",
            "description": "<p>产品名称</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.memberName",
            "description": "<p>沁园饮水旗舰店</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.msg",
            "description": "<p>etw打印信息</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.orderNo",
            "description": "<p>订单号</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.receiverAddress",
            "description": "<p>收货详细地址</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.receiverCity",
            "description": "<p>收货城市</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.receiverDistrict",
            "description": "<p>收货区</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.receiverMobile",
            "description": "<p>收货人手机</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.receiverName",
            "description": "<p>收货人姓名</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.receiverProvince",
            "description": "<p>收货省</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.shortAddress",
            "description": "<p>短地址码</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "data.success",
            "description": "<p>打印是否成功，需要先根据这个进行判断，成功的才有物流单号</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.waybillCode",
            "description": "<p>物流单号</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "responseTime",
            "description": "<p>返回响应时间</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>响应状态</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: ",
          "content": "{\n  \"code\": \"string\",\n  \"data\": [\n    {\n      \"cpCode\": \"string\",\n      \"items\": [\n        {\n          \"productPn\": \"string\",\n          \"qty\": \"string\",\n          \"itemName\": \"string\"\n        }\n      ],\n      \"memberName\": \"string\",\n      \"msg\": \"string\",\n      \"orderNo\": \"string\",\n      \"receiverAddress\": \"string\",\n      \"receiverCity\": \"string\",\n      \"receiverDistrict\": \"string\",\n      \"receiverMobile\": \"string\",\n      \"receiverName\": \"string\",\n      \"receiverProvince\": \"string\",\n      \"shortAddress\": \"string\",\n      \"success\": true,\n      \"waybillCode\": \"string\"\n    }\n  ],\n  \"msg\": \"string\",\n  \"responseTime\": \"2019-02-26T03:16:43.437Z\",\n  \"status\": \"string\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/cn/xlink/cloud/deliver/rest/controller/ExpressDeliverRestController.java",
    "groupTitle": "ExpressDeliverRestController",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Access-Token",
            "description": "<p>xlink平台颁发的凭证</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n\"Access-Token\":\"访问凭证\",\n\"Content-Type\":\"application/json\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "错误格式说明": [
          {
            "group": "errorFormat",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>接口返回的错误信息</p>"
          },
          {
            "group": "errorFormat",
            "type": "string",
            "optional": false,
            "field": "code",
            "description": "<p>错误码</p>"
          }
        ],
        "错误码详情": [
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "000000",
            "description": "<p>请求成功</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"responseTime\": \"2019-01-02T09:47:15.032+0000\",\n    \"code\": \"20107007\",\n    \"status\": \"200\",\n    \"msg\": \"fail to add account period\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/v1/xlink-deliver-rest/shipBillRest/addCivilSaleRentShipInfo",
    "title": "添加民用售租出货信息",
    "name": "addCivilSaleRentShipInfo",
    "group": "ShipBillRestController",
    "description": "<p>添加民用售租出货信息</p>",
    "permission": [
      {
        "name": "userOnly"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "batNum",
            "description": "<p>批号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "deviceSn",
            "description": "<p>设备sn</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "productOrderId",
            "description": "<p>产品订单号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "productPn",
            "description": "<p>产品料号</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"batNum\": \"string\",\n  \"deviceSn\": \"string\",\n  \"productOrderId\": \"string\",\n  \"productPn\": \"string\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "code",
            "description": "<p>返回编码</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "responseTime",
            "description": "<p>返回响应时间</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>响应状态</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: ",
          "content": "{\n  \"code\": \"string\",\n  \"msg\": \"string\",\n  \"responseTime\": \"2019-02-13T07:09:38.091Z\",\n  \"status\": \"string\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/cn/xlink/cloud/deliver/rest/controller/ShipBillRestController.java",
    "groupTitle": "ShipBillRestController",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Access-Token",
            "description": "<p>xlink平台颁发的凭证</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n\"Access-Token\":\"访问凭证\",\n\"Content-Type\":\"application/json\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "错误格式说明": [
          {
            "group": "errorFormat",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>接口返回的错误信息</p>"
          },
          {
            "group": "errorFormat",
            "type": "string",
            "optional": false,
            "field": "code",
            "description": "<p>错误码</p>"
          }
        ],
        "错误码详情": [
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "000000",
            "description": "<p>请求成功</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"responseTime\": \"2019-01-02T09:47:15.032+0000\",\n    \"code\": \"20107007\",\n    \"status\": \"200\",\n    \"msg\": \"fail to add account period\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/v1/xlink-deliver-rest/shipBillRest/addCommercialSaleRentShipInfo",
    "title": "添加商用售租出货信息",
    "name": "addCommercialSaleRentShipInfo",
    "group": "ShipBillRestController",
    "description": "<p>添加商用售租出货信息</p>",
    "permission": [
      {
        "name": "userOnly"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "array(object)",
            "optional": false,
            "field": "deviceInfos",
            "description": "<p>设备信息</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "deviceInfos.batNum",
            "description": "<p>批号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "deviceInfos.deviceSn",
            "description": "<p>设备sn</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "deviceInfos.productPn",
            "description": "<p>产品料号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "productOrderId",
            "description": "<p>产品订单号</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"deviceInfos\": [\n    {\n      \"batNum\": \"string\",\n      \"deviceSn\": \"string\",\n      \"productPn\": \"string\"\n    }\n  ],\n  \"productOrderId\": \"string\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "code",
            "description": "<p>返回编码</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "responseTime",
            "description": "<p>返回响应时间</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>响应状态</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: ",
          "content": "{\n  \"code\": \"string\",\n  \"msg\": \"string\",\n  \"responseTime\": \"2019-02-13T07:07:21.828Z\",\n  \"status\": \"string\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/cn/xlink/cloud/deliver/rest/controller/ShipBillRestController.java",
    "groupTitle": "ShipBillRestController",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Access-Token",
            "description": "<p>xlink平台颁发的凭证</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n\"Access-Token\":\"访问凭证\",\n\"Content-Type\":\"application/json\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "错误格式说明": [
          {
            "group": "errorFormat",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>接口返回的错误信息</p>"
          },
          {
            "group": "errorFormat",
            "type": "string",
            "optional": false,
            "field": "code",
            "description": "<p>错误码</p>"
          }
        ],
        "错误码详情": [
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "000000",
            "description": "<p>请求成功</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"responseTime\": \"2019-01-02T09:47:15.032+0000\",\n    \"code\": \"20107007\",\n    \"status\": \"200\",\n    \"msg\": \"fail to add account period\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/v1/xlink-deliver-rest/shipBillRest/exportCommercialSaleRentShip",
    "title": "导出商用售租出货数据",
    "name": "exportCommercialSaleRentShip",
    "group": "ShipBillRestController",
    "description": "<p>导出商用售租出货数据</p>",
    "permission": [
      {
        "name": "userOnly"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "array(object)",
            "optional": true,
            "field": "columns",
            "description": "<p>列信息数组</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "columns.code",
            "description": "<p>列编码（英文）</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "columns.name",
            "description": "<p>列名称（中文）</p>"
          },
          {
            "group": "Parameter",
            "type": "array(string)",
            "optional": false,
            "field": "ids",
            "description": "<p>设备标识数组</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response: ",
          "content": "HTTP/1.1 200 OK \n{\n   \"ids\": [\n     \"string\"\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "错误码详情": [
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "10000001",
            "description": "<p>空参数</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20210001",
            "description": "<p>id为空</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20210016",
            "description": "<p>查询经销商信息失败</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "000000",
            "description": "<p>请求成功</p>"
          }
        ],
        "错误格式说明": [
          {
            "group": "errorFormat",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>接口返回的错误信息</p>"
          },
          {
            "group": "errorFormat",
            "type": "string",
            "optional": false,
            "field": "code",
            "description": "<p>错误码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"responseTime\": \"2019-01-02T09:47:15.032+0000\",\n    \"code\": \"20107007\",\n    \"status\": \"200\",\n    \"msg\": \"fail to add account period\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/cn/xlink/cloud/deliver/rest/controller/ShipBillRestController.java",
    "groupTitle": "ShipBillRestController",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Access-Token",
            "description": "<p>xlink平台颁发的凭证</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n\"Access-Token\":\"访问凭证\",\n\"Content-Type\":\"application/json\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/v1/xlink-deliver-rest/shipBillRest/exportSaleRentShipBill",
    "title": "导出民用售租出货数据",
    "name": "exportSaleRentShipBill",
    "group": "ShipBillRestController",
    "description": "<p>导出民用售租出货数据</p>",
    "permission": [
      {
        "name": "userOnly"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "array(object)",
            "optional": true,
            "field": "columns",
            "description": "<p>列信息数组</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "columns.code",
            "description": "<p>列编码（英文）</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "columns.name",
            "description": "<p>列名称（中文）</p>"
          },
          {
            "group": "Parameter",
            "type": "array(string)",
            "optional": false,
            "field": "ids",
            "description": "<p>设备标识数组</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response: ",
          "content": "HTTP/1.1 200 OK \n{\n   \"ids\": [\n     \"string\"\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "错误码详情": [
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "10000001",
            "description": "<p>空参数</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20210001",
            "description": "<p>id为空</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20210016",
            "description": "<p>查询经销商信息失败</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "000000",
            "description": "<p>请求成功</p>"
          }
        ],
        "错误格式说明": [
          {
            "group": "errorFormat",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>接口返回的错误信息</p>"
          },
          {
            "group": "errorFormat",
            "type": "string",
            "optional": false,
            "field": "code",
            "description": "<p>错误码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"responseTime\": \"2019-01-02T09:47:15.032+0000\",\n    \"code\": \"20107007\",\n    \"status\": \"200\",\n    \"msg\": \"fail to add account period\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/cn/xlink/cloud/deliver/rest/controller/ShipBillRestController.java",
    "groupTitle": "ShipBillRestController",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Access-Token",
            "description": "<p>xlink平台颁发的凭证</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n\"Access-Token\":\"访问凭证\",\n\"Content-Type\":\"application/json\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/v1/xlink-deliver-rest/shipBillRest/getCivilShipBillInfo/{shipBillId}",
    "title": "获取民用售租出货单详情",
    "name": "getCivilShipBillInfo",
    "group": "ShipBillRestController",
    "description": "<p>获取民用售租出货单详情</p>",
    "permission": [
      {
        "name": "userOnly"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "shipBillId",
            "description": "<p>出货单标识</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "code",
            "description": "<p>返回编码</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.acceptRegion",
            "description": "<p>收货地区</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.addressDetail",
            "description": "<p>详细地址</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.billType",
            "description": "<p>出货单类型 直租出货单DIRECT_RENT/商用售租出货单COMMERCIAL_SALE_RENT/民用售租出货单CIVIL_SALE_RENT/</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.consignee",
            "description": "<p>收货人</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.dealerCode",
            "description": "<p>经销商编码</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.dealerId",
            "description": "<p>经销商标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.dealerName",
            "description": "<p>经销商名称</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "data.deliverDate",
            "description": "<p>计划出货日</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "data.finishDate",
            "description": "<p>完成时间</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.id",
            "description": "<p>出货单标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.orderId",
            "description": "<p>订单标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.contactNum",
            "description": "<p>联系方式</p>"
          },
          {
            "group": "Success 200",
            "type": "array(object)",
            "optional": false,
            "field": "data.saleRentShipBillProducts",
            "description": "<p>订单产品信息</p>"
          },
          {
            "group": "Success 200",
            "type": "decimal(string)",
            "optional": false,
            "field": "data.saleRentShipBillProducts.amount",
            "description": "<p>金额(含税)</p>"
          },
          {
            "group": "Success 200",
            "type": "decimal(string)",
            "optional": false,
            "field": "data.saleRentShipBillProducts.noTaxAmount",
            "description": "<p>金额(未税)</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "data.saleRentShipBillProducts.number",
            "description": "<p>数量</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.saleRentShipBillProducts.productId",
            "description": "<p>产品标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.saleRentShipBillProducts.productName",
            "description": "<p>产品名称</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.saleRentShipBillProducts.productPn",
            "description": "<p>产品料号</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.saleRentShipBillProducts.spec",
            "description": "<p>产品规格</p>"
          },
          {
            "group": "Success 200",
            "type": "decimal(string)",
            "optional": false,
            "field": "data.saleRentShipBillProducts.tax",
            "description": "<p>税额</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.saleRentShipBillProducts.unit",
            "description": "<p>单位 台TAI</p>"
          },
          {
            "group": "Success 200",
            "type": "decimal(string)",
            "optional": false,
            "field": "data.saleRentShipBillProducts.unitPrice",
            "description": "<p>单价</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.status",
            "description": "<p>出货单状态 出货中SHIPPING/已完成FINISHED</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "responseTime",
            "description": "<p>返回响应时间</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>响应状态</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: ",
          "content": "{\n  \"code\": \"string\",\n  \"data\": {\n    \"acceptRegion\": \"string\",\n    \"addressDetail\": \"string\",\n    \"billType\": \"DIRECT_RENT\",\n    \"consignee\": \"string\",\n    \"dealerCode\": \"string\",\n    \"dealerId\": \"string\",\n    \"dealerName\": \"string\",\n    \"deliverDate\": 0,\n    \"finishDate\": 0,\n    \"id\": \"string\",\n    \"orderId\": \"string\",\n    \"saleRentShipBillProducts\": [\n      {\n        \"amount\": 0,\n        \"noTaxAmount\": 0,\n        \"number\": 0,\n        \"productId\": \"string\",\n        \"productName\": \"string\",\n        \"productPn\": \"string\",\n        \"spec\": \"string\",\n        \"tax\": 0,\n        \"unit\": \"TAI\",\n        \"unitPrice\": 0\n      }\n    ],\n    \"status\": \"SHIPPING\"\n  },\n  \"msg\": \"string\",\n  \"responseTime\": \"2019-01-22T09:45:44.252Z\",\n  \"status\": \"string\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "错误码详情": [
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20303003",
            "description": "<p>出货单标识为空</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20303004",
            "description": "<p>获取出货单失败</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20101006",
            "description": "<p>获取订单信息失败</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20101005",
            "description": "<p>order not exist</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20303001",
            "description": "<p>ship bill is empty</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "000000",
            "description": "<p>请求成功</p>"
          }
        ],
        "错误格式说明": [
          {
            "group": "errorFormat",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>接口返回的错误信息</p>"
          },
          {
            "group": "errorFormat",
            "type": "string",
            "optional": false,
            "field": "code",
            "description": "<p>错误码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"responseTime\": \"2019-01-02T09:47:15.032+0000\",\n    \"code\": \"20107007\",\n    \"status\": \"200\",\n    \"msg\": \"fail to add account period\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/cn/xlink/cloud/deliver/rest/controller/ShipBillRestController.java",
    "groupTitle": "ShipBillRestController",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Access-Token",
            "description": "<p>xlink平台颁发的凭证</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n\"Access-Token\":\"访问凭证\",\n\"Content-Type\":\"application/json\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/v1/xlink-deliver-rest/shipBillRest/getDRShipBillInfo/{shipBillId}?shipBillId=${shipBillId}",
    "title": "查询直租出货单详情",
    "name": "getDRShipBillInfo",
    "group": "ShipBillRestController",
    "description": "<p>查询直租出货单详情</p>",
    "permission": [
      {
        "name": "userOnly"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "shipBillId",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "code",
            "description": "<p>返回编码</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.acceptRegion",
            "description": "<p>收货区</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.addressDetail",
            "description": "<p>收货地址</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.consignee",
            "description": "<p>收货人</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.contactNum",
            "description": "<p>联系方式</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "data.createDate",
            "description": "<p>创建日期</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.customCode",
            "description": "<p>客户编码</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.customId",
            "description": "<p>客户标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.customName",
            "description": "<p>客户名称</p>"
          },
          {
            "group": "Success 200",
            "type": "array(object)",
            "optional": false,
            "field": "data.drShipBillProductVos",
            "description": "<p>产品信息</p>"
          },
          {
            "group": "Success 200",
            "type": "decimal(string)",
            "optional": false,
            "field": "data.drShipBillProductVos.amount",
            "description": "<p>总金额</p>"
          },
          {
            "group": "Success 200",
            "type": "decimal(string)",
            "optional": false,
            "field": "data.drShipBillProductVos.noTaxAmount",
            "description": "<p>未含税金额</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "data.drShipBillProductVos.number",
            "description": "<p>数量</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.drShipBillProductVos.productId",
            "description": "<p>产品标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.drShipBillProductVos.productModel",
            "description": "<p>产品型号</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.drShipBillProductVos.productName",
            "description": "<p>产品名称</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.drShipBillProductVos.productPn",
            "description": "<p>产品料号</p>"
          },
          {
            "group": "Success 200",
            "type": "decimal(string)",
            "optional": false,
            "field": "data.drShipBillProductVos.rentPrice",
            "description": "<p>租金</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.drShipBillProductVos.spec",
            "description": "<p>规格</p>"
          },
          {
            "group": "Success 200",
            "type": "decimal(string)",
            "optional": false,
            "field": "data.drShipBillProductVos.tax",
            "description": "<p>税额</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.drShipBillProductVos.unit",
            "description": "<p>单位</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "data.finishDate",
            "description": "<p>完成日期</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.id",
            "description": "<p>出货单标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.orderId",
            "description": "<p>订单标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.shipBillStatus",
            "description": "<p>出货单状态，见查询出货单列表接口</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.shipBillType",
            "description": "<p>出货单类型，见查询出货单列表接口</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "responseTime",
            "description": "<p>返回响应时间</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>响应状态</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: ",
          "content": "{\n  \"code\": \"string\",\n  \"data\": {\n    \"acceptRegion\": \"string\",\n    \"addressDetail\": \"string\",\n    \"consignee\": \"string\",\n    \"contactNum\": \"string\",\n    \"createDate\": 0,\n    \"customCode\": \"string\",\n    \"customId\": \"string\",\n    \"customName\": \"string\",\n    \"drShipBillProductVos\": [\n      {\n        \"amount\": 0,\n        \"noTaxAmount\": 0,\n        \"number\": 0,\n        \"productId\": \"string\",\n        \"productModel\": \"string\",\n        \"productName\": \"string\",\n        \"productPn\": \"string\",\n        \"rentPrice\": 0,\n        \"spec\": \"string\",\n        \"tax\": 0,\n        \"unit\": \"string\",\n        \"unitPrice\": 0\n      }\n    ],\n    \"finishDate\": 0,\n    \"id\": \"string\",\n    \"orderId\": \"string\",\n    \"shipBillStatus\": \"SHIPPING\",\n    \"shipBillType\": \"DIRECT_RENT\"\n  },\n  \"msg\": \"string\",\n  \"responseTime\": \"2019-03-25T02:19:59.926Z\",\n  \"status\": \"string\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/cn/xlink/cloud/deliver/rest/controller/ShipBillRestController.java",
    "groupTitle": "ShipBillRestController",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Access-Token",
            "description": "<p>xlink平台颁发的凭证</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n\"Access-Token\":\"访问凭证\",\n\"Content-Type\":\"application/json\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "错误格式说明": [
          {
            "group": "errorFormat",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>接口返回的错误信息</p>"
          },
          {
            "group": "errorFormat",
            "type": "string",
            "optional": false,
            "field": "code",
            "description": "<p>错误码</p>"
          }
        ],
        "错误码详情": [
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "000000",
            "description": "<p>请求成功</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"responseTime\": \"2019-01-02T09:47:15.032+0000\",\n    \"code\": \"20107007\",\n    \"status\": \"200\",\n    \"msg\": \"fail to add account period\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/v1/xlink-deliver-rest/shipBillRest/getShipBillInfo/{shipBillId}",
    "title": "获取商用售租出货单详情",
    "name": "getShipBillInfo",
    "group": "ShipBillRestController",
    "description": "<p>获取商用售租出货单详情</p>",
    "permission": [
      {
        "name": "userOnly"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "shipBillId",
            "description": "<p>出货单标识</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "code",
            "description": "<p>返回编码</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.acceptRegion",
            "description": "<p>收货地区</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.addressDetail",
            "description": "<p>详细地址</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.billType",
            "description": "<p>出货单类型 直租出货单DIRECT_RENT/商用售租出货单COMMERCIAL_SALE_RENT/民用售租出货单CIVIL_SALE_RENT/</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.consignee",
            "description": "<p>收货人</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.rentPeriod",
            "description": "<p>租期</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.dealerCode",
            "description": "<p>经销商编码</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.dealerId",
            "description": "<p>经销商标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.dealerName",
            "description": "<p>经销商名称</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "data.deliverDate",
            "description": "<p>计划出货日</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "data.finishDate",
            "description": "<p>完成时间</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.id",
            "description": "<p>出货单标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.orderId",
            "description": "<p>订单标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.contactNum",
            "description": "<p>联系方式</p>"
          },
          {
            "group": "Success 200",
            "type": "array(object)",
            "optional": false,
            "field": "data.saleRentShipBillProducts",
            "description": "<p>订单产品信息</p>"
          },
          {
            "group": "Success 200",
            "type": "decimal(string)",
            "optional": false,
            "field": "data.saleRentShipBillProducts.amount",
            "description": "<p>金额(含税)</p>"
          },
          {
            "group": "Success 200",
            "type": "decimal(string)",
            "optional": false,
            "field": "data.saleRentShipBillProducts.noTaxAmount",
            "description": "<p>金额(未税)</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "data.saleRentShipBillProducts.number",
            "description": "<p>数量</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.saleRentShipBillProducts.productId",
            "description": "<p>产品标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.saleRentShipBillProducts.productName",
            "description": "<p>产品名称</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.saleRentShipBillProducts.productPn",
            "description": "<p>产品料号</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.saleRentShipBillProducts.spec",
            "description": "<p>产品规格</p>"
          },
          {
            "group": "Success 200",
            "type": "decimal(string)",
            "optional": false,
            "field": "data.saleRentShipBillProducts.tax",
            "description": "<p>税额</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.saleRentShipBillProducts.unit",
            "description": "<p>单位 台TAI</p>"
          },
          {
            "group": "Success 200",
            "type": "decimal(string)",
            "optional": false,
            "field": "data.saleRentShipBillProducts.unitPrice",
            "description": "<p>单价</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.status",
            "description": "<p>出货单状态 出货中SHIPPING/已完成FINISHED</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "responseTime",
            "description": "<p>返回响应时间</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>响应状态</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: ",
          "content": "{\n  \"code\": \"string\",\n  \"data\": {\n    \"acceptRegion\": \"string\",\n    \"addressDetail\": \"string\",\n    \"billType\": \"DIRECT_RENT\",\n    \"consignee\": \"string\",\n    \"dealerCode\": \"string\",\n    \"dealerId\": \"string\",\n    \"dealerName\": \"string\",\n    \"deliverDate\": 0,\n    \"finishDate\": 0,\n    \"id\": \"string\",\n    \"orderId\": \"string\",\n    \"saleRentShipBillProducts\": [\n      {\n        \"amount\": 0,\n        \"noTaxAmount\": 0,\n        \"number\": 0,\n        \"productId\": \"string\",\n        \"productName\": \"string\",\n        \"productPn\": \"string\",\n        \"spec\": \"string\",\n        \"tax\": 0,\n        \"unit\": \"TAI\",\n        \"unitPrice\": 0\n      }\n    ],\n    \"status\": \"SHIPPING\"\n  },\n  \"msg\": \"string\",\n  \"responseTime\": \"2019-01-22T09:45:44.252Z\",\n  \"status\": \"string\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "错误码详情": [
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20303003",
            "description": "<p>出货单标识为空</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20303004",
            "description": "<p>获取出货单失败</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20101006",
            "description": "<p>获取订单信息失败</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20101005",
            "description": "<p>order not exist</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20303001",
            "description": "<p>ship bill is empty</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "000000",
            "description": "<p>请求成功</p>"
          }
        ],
        "错误格式说明": [
          {
            "group": "errorFormat",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>接口返回的错误信息</p>"
          },
          {
            "group": "errorFormat",
            "type": "string",
            "optional": false,
            "field": "code",
            "description": "<p>错误码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"responseTime\": \"2019-01-02T09:47:15.032+0000\",\n    \"code\": \"20107007\",\n    \"status\": \"200\",\n    \"msg\": \"fail to add account period\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/cn/xlink/cloud/deliver/rest/controller/ShipBillRestController.java",
    "groupTitle": "ShipBillRestController",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Access-Token",
            "description": "<p>xlink平台颁发的凭证</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n\"Access-Token\":\"访问凭证\",\n\"Content-Type\":\"application/json\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/v1/xlink-deliver-rest/shipBillRest/listCivilSaleRentShipBill",
    "title": "分页查询民用售租出货单列表",
    "name": "listCivilSaleRentShipBill",
    "group": "ShipBillRestController",
    "description": "<p>分页查询民用售租出货单列表</p>",
    "permission": [
      {
        "name": "userOnly"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>页码，从1开始</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "size",
            "description": "<p>页面大小</p>"
          },
          {
            "group": "Parameter",
            "type": "array(object)",
            "optional": true,
            "field": "sort",
            "description": "<p>排序对象</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "query",
            "description": "<p>查询对象</p>"
          },
          {
            "group": "Parameter",
            "type": "long",
            "optional": true,
            "field": "query.createDateEnd",
            "description": "<p>创建日期起始点</p>"
          },
          {
            "group": "Parameter",
            "type": "long",
            "optional": true,
            "field": "query.createDateStart",
            "description": "<p>创建日期结束点</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "query.queryFieldName",
            "description": "<p>查询字段名称 单据编号id/来源单号orderId/客户名称customName/产品名称productName/产品料号productPn</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "query.queryValue",
            "description": "<p>查询字段值</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"page\": 1,\n  \"size\": 10,\n  \"sort\": [\n    {\n      \"additionalProp1\": \"string\"\n    }\n  ],\n  \"query\": {\n    \"createDateEnd\": 0,\n    \"createDateStart\": 0,\n    \"queryFieldName\": \"string\",\n    \"queryValue\": \"string\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "code",
            "description": "<p>返回编码</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "data.count",
            "description": "<p>总数</p>"
          },
          {
            "group": "Success 200",
            "type": "array(object)",
            "optional": false,
            "field": "data.list",
            "description": "<p>返回数据列表</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.billType",
            "description": "<p>单据类型 直租出货单DIRECT_RENT/商用售租出货单COMMERCIAL_SALE_RENT/民用售租出货单CIVIL_SALE_RENT/</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.dealerId",
            "description": "<p>经销商标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.dealerName",
            "description": "<p>经销商名称</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "data.list.finishDate",
            "description": "<p>完成日期</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.id",
            "description": "<p>出货单标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.orderId",
            "description": "<p>订单标识</p>"
          },
          {
            "group": "Success 200",
            "type": "array(object)",
            "optional": false,
            "field": "data.list.saleRentShipBillProducts",
            "description": "<p>出货单产品详情</p>"
          },
          {
            "group": "Success 200",
            "type": "decimal(string)",
            "optional": false,
            "field": "data.list.saleRentShipBillProducts.amount",
            "description": "<p>金额</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "data.list.saleRentShipBillProducts.number",
            "description": "<p>数量</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.saleRentShipBillProducts.productId",
            "description": "<p>产品标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.saleRentShipBillProducts.productName",
            "description": "<p>产品名称</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.saleRentShipBillProducts.productPn",
            "description": "<p>产品料号</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.saleRentShipBillProducts.spec",
            "description": "<p>产品规格</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.saleRentShipBillProducts.unit",
            "description": "<p>单位 台TAI</p>"
          },
          {
            "group": "Success 200",
            "type": "decimal(string)",
            "optional": false,
            "field": "data.list.saleRentShipBillProducts.unitPrice",
            "description": "<p>单价</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "responseTime",
            "description": "<p>返回响应时间</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>响应状态</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: ",
          "content": "{\n  \"code\": \"string\",\n  \"data\": {\n    \"count\": 0,\n    \"list\": [\n      {\n        \"billType\": \"DIRECT_RENT\",\n        \"dealerId\": \"string\",\n        \"dealerName\": \"string\",\n        \"finishDate\": 0,\n        \"id\": \"string\",\n        \"orderId\": \"string\",\n        \"saleRentShipBillProducts\": [\n          {\n            \"amount\": 0,\n            \"number\": 0,\n            \"productId\": \"string\",\n            \"productName\": \"string\",\n            \"productPn\": \"string\",\n            \"spec\": \"string\",\n            \"unit\": \"TAI\",\n            \"unitPrice\": 0\n          }\n        ]\n      }\n    ],\n  },\n  \"msg\": \"string\",\n  \"responseTime\": \"2019-01-22T09:37:27.512Z\",\n  \"status\": \"string\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "错误码详情": [
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "10000001",
            "description": "<p>空参数</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "10000003",
            "description": "<p>查询字段为空</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20304001",
            "description": "<p>获取出货单详情列表失败</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20303002",
            "description": "<p>获取出货单列表失败</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "000000",
            "description": "<p>请求成功</p>"
          }
        ],
        "错误格式说明": [
          {
            "group": "errorFormat",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>接口返回的错误信息</p>"
          },
          {
            "group": "errorFormat",
            "type": "string",
            "optional": false,
            "field": "code",
            "description": "<p>错误码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"responseTime\": \"2019-01-02T09:47:15.032+0000\",\n    \"code\": \"20107007\",\n    \"status\": \"200\",\n    \"msg\": \"fail to add account period\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/cn/xlink/cloud/deliver/rest/controller/ShipBillRestController.java",
    "groupTitle": "ShipBillRestController",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Access-Token",
            "description": "<p>xlink平台颁发的凭证</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n\"Access-Token\":\"访问凭证\",\n\"Content-Type\":\"application/json\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/v1/xlink-deliver-rest/shipBillRest/listCivilShipBillDevices/{shipBillId}",
    "title": "查询民用售租订单设备明细",
    "name": "listCivilShipBillDevices",
    "group": "ShipBillRestController",
    "description": "<p>查询民用售租订单设备明细</p>",
    "permission": [
      {
        "name": "userOnly"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "query.shipBillId",
            "description": "<p>出货单标识</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "code",
            "description": "<p>返回编码</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "data.count",
            "description": "<p>总数</p>"
          },
          {
            "group": "Success 200",
            "type": "array(object)",
            "optional": false,
            "field": "data.list",
            "description": "<p>数据列表</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.deviceId",
            "description": "<p>设备标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.deviceSn",
            "description": "<p>设备sn</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.productName",
            "description": "<p>产品名称</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "responseTime",
            "description": "<p>返回响应时间</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>响应状态</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: ",
          "content": "{\n  \"code\": \"string\",\n  \"data\": {\n    \"count\": 0,\n    \"list\": [\n      {\n        \"deviceId\": \"string\",\n        \"deviceSn\": \"string\",\n        \"productName\": \"string\"\n      }\n    ],\n  },\n  \"msg\": \"string\",\n  \"responseTime\": \"2019-01-22T09:57:00.109Z\",\n  \"status\": \"string\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "错误码详情": [
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "10000001",
            "description": "<p>空参数</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20303003",
            "description": "<p>出货单标识为空</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20304001",
            "description": "<p>获取出货单详情列表失败</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20305001",
            "description": "<p>获取出货设备列表失败</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "000000",
            "description": "<p>请求成功</p>"
          }
        ],
        "错误格式说明": [
          {
            "group": "errorFormat",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>接口返回的错误信息</p>"
          },
          {
            "group": "errorFormat",
            "type": "string",
            "optional": false,
            "field": "code",
            "description": "<p>错误码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"responseTime\": \"2019-01-02T09:47:15.032+0000\",\n    \"code\": \"20107007\",\n    \"status\": \"200\",\n    \"msg\": \"fail to add account period\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/cn/xlink/cloud/deliver/rest/controller/ShipBillRestController.java",
    "groupTitle": "ShipBillRestController",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Access-Token",
            "description": "<p>xlink平台颁发的凭证</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n\"Access-Token\":\"访问凭证\",\n\"Content-Type\":\"application/json\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/v1/xlink-deliver-rest/shipBillRest/listDRShipBill",
    "title": "分页查询直租出货单列表",
    "name": "listDRShipBill",
    "group": "ShipBillRestController",
    "description": "<p>分页查询直租出货单列表</p>",
    "permission": [
      {
        "name": "userOnly"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>页码，从1开始</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "size",
            "description": "<p>页面大小</p>"
          },
          {
            "group": "Parameter",
            "type": "array(object)",
            "optional": false,
            "field": "sort",
            "description": "<p>排序对象</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "query",
            "description": "<p>查询对象</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "query.queryFieldName",
            "description": "<p>查询字段名</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "query.queryValue",
            "description": "<p>查询值</p>"
          },
          {
            "group": "Parameter",
            "type": "long",
            "optional": false,
            "field": "query.createDateStart",
            "description": "<p>创建日期起始点</p>"
          },
          {
            "group": "Parameter",
            "type": "long",
            "optional": false,
            "field": "query.createDateEnd",
            "description": "<p>创建日期结束点</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "query.shipBillStatus",
            "description": "<p>出货单状态 SHIPPING出货中/FINISHED已完成</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"page\": 0,\n  \"size\": 0,\n  \"sort\": [\n    {\n      \"additionalProp1\": \"string\",\n      \"additionalProp2\": \"string\",\n      \"additionalProp3\": \"string\"\n    }\n  ],\n  \"filter\": [\n    \"string\"\n  ],\n  \"query\": {\n    \"queryFieldName\": \"string\",\n    \"queryValue\": \"string\",\n    \"createDateStart\": 0,\n    \"createDateEnd\": 0,\n    \"shipBillStatus\": \"SHIPPING\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "code",
            "description": "<p>返回编码</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "data.count",
            "description": "<p>总数</p>"
          },
          {
            "group": "Success 200",
            "type": "array(object)",
            "optional": false,
            "field": "data.list",
            "description": "<p>数据列表</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.billType",
            "description": "<p>出货单类型 DIRECT_RENT直租出货单/COMMERCIAL_SALE_RENT商用售租出货单/CIVIL_SALE_RENT民用售租出货单</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "data.list.createDate",
            "description": "<p>创建日期</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.customCode",
            "description": "<p>客户编码</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.customName",
            "description": "<p>客户名称</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "data.list.finishDate",
            "description": "<p>完成日期</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.id",
            "description": "<p>出货单标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.orderId",
            "description": "<p>订单标识</p>"
          },
          {
            "group": "Success 200",
            "type": "array(object)",
            "optional": false,
            "field": "data.list.saleRentShipBillProducts",
            "description": "<p>产品信息</p>"
          },
          {
            "group": "Success 200",
            "type": "decimal(string)",
            "optional": false,
            "field": "data.list.saleRentShipBillProducts.amount",
            "description": "<p>总金额</p>"
          },
          {
            "group": "Success 200",
            "type": "decimal(string)",
            "optional": false,
            "field": "data.list.saleRentShipBillProducts.noTaxAmount",
            "description": "<p>未含税金额</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "data.list.saleRentShipBillProducts.number",
            "description": "<p>数量</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.saleRentShipBillProducts.productId",
            "description": "<p>产品标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.saleRentShipBillProducts.productModel",
            "description": "<p>产品型号</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.saleRentShipBillProducts.productName",
            "description": "<p>产品名称</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.saleRentShipBillProducts.productPn",
            "description": "<p>产品料号</p>"
          },
          {
            "group": "Success 200",
            "type": "decimal(string)",
            "optional": false,
            "field": "data.list.saleRentShipBillProducts.rentPrice",
            "description": "<p>租金</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.saleRentShipBillProducts.spec",
            "description": "<p>规格</p>"
          },
          {
            "group": "Success 200",
            "type": "decimal(string)",
            "optional": false,
            "field": "data.list.saleRentShipBillProducts.tax",
            "description": "<p>税额</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.saleRentShipBillProducts.unit",
            "description": "<p>单位</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "responseTime",
            "description": "<p>返回响应时间</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>响应状态</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: ",
          "content": "{\n  \"code\": \"string\",\n  \"data\": {\n    \"count\": 0,\n    \"current_page\": 0,\n    \"list\": [\n      {\n        \"billType\": \"DIRECT_RENT\",\n        \"createDate\": 0,\n        \"customCode\": \"string\",\n        \"customName\": \"string\",\n        \"finishDate\": 0,\n        \"id\": \"string\",\n        \"orderId\": \"string\",\n        \"saleRentShipBillProducts\": [\n          {\n            \"amount\": 0,\n            \"noTaxAmount\": 0,\n            \"number\": 0,\n            \"productId\": \"string\",\n            \"productModel\": \"string\",\n            \"productName\": \"string\",\n            \"productPn\": \"string\",\n            \"rentPrice\": 0,\n            \"spec\": \"string\",\n            \"tax\": 0,\n            \"unit\": \"string\",\n            \"unitPrice\": 0\n          }\n        ]\n      }\n    ],\n    \"per_page\": 0\n  },\n  \"msg\": \"string\",\n  \"responseTime\": \"2019-03-25T02:15:27.472Z\",\n  \"status\": \"string\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/cn/xlink/cloud/deliver/rest/controller/ShipBillRestController.java",
    "groupTitle": "ShipBillRestController",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Access-Token",
            "description": "<p>xlink平台颁发的凭证</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n\"Access-Token\":\"访问凭证\",\n\"Content-Type\":\"application/json\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "错误格式说明": [
          {
            "group": "errorFormat",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>接口返回的错误信息</p>"
          },
          {
            "group": "errorFormat",
            "type": "string",
            "optional": false,
            "field": "code",
            "description": "<p>错误码</p>"
          }
        ],
        "错误码详情": [
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "000000",
            "description": "<p>请求成功</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"responseTime\": \"2019-01-02T09:47:15.032+0000\",\n    \"code\": \"20107007\",\n    \"status\": \"200\",\n    \"msg\": \"fail to add account period\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/v1/xlink-deliver-rest/shipBillRest/listSaleRentShipBill",
    "title": "分页查询商用售租出货单列表",
    "name": "listSaleRentShipBill",
    "group": "ShipBillRestController",
    "description": "<p>分页查询商用售租出货单列表</p>",
    "permission": [
      {
        "name": "userOnly"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>页码，从1开始</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "size",
            "description": "<p>页面大小</p>"
          },
          {
            "group": "Parameter",
            "type": "array(object)",
            "optional": true,
            "field": "sort",
            "description": "<p>排序对象</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "query",
            "description": "<p>查询对象</p>"
          },
          {
            "group": "Parameter",
            "type": "long",
            "optional": true,
            "field": "query.createDateEnd",
            "description": "<p>创建日期起始点</p>"
          },
          {
            "group": "Parameter",
            "type": "long",
            "optional": true,
            "field": "query.createDateStart",
            "description": "<p>创建日期结束点</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "query.queryFieldName",
            "description": "<p>查询字段名称 单据编号id/来源单号orderId/客户名称customName/产品名称productName/产品料号productPn</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "query.queryValue",
            "description": "<p>查询字段值</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"page\": 1,\n  \"size\": 10,\n  \"sort\": [\n    {\n      \"additionalProp1\": \"string\"\n    }\n  ],\n  \"query\": {\n    \"createDateEnd\": 0,\n    \"createDateStart\": 0,\n    \"queryFieldName\": \"string\",\n    \"queryValue\": \"string\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "code",
            "description": "<p>返回编码</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "data.count",
            "description": "<p>总数</p>"
          },
          {
            "group": "Success 200",
            "type": "array(object)",
            "optional": false,
            "field": "data.list",
            "description": "<p>返回数据列表</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.billType",
            "description": "<p>单据类型 直租出货单DIRECT_RENT/商用售租出货单COMMERCIAL_SALE_RENT/民用售租出货单CIVIL_SALE_RENT/</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.dealerId",
            "description": "<p>经销商标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.dealerName",
            "description": "<p>经销商名称</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "data.list.finishDate",
            "description": "<p>完成日期</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.id",
            "description": "<p>出货单标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.orderId",
            "description": "<p>订单标识</p>"
          },
          {
            "group": "Success 200",
            "type": "array(object)",
            "optional": false,
            "field": "data.list.saleRentShipBillProducts",
            "description": "<p>出货单产品详情</p>"
          },
          {
            "group": "Success 200",
            "type": "decimal(string)",
            "optional": false,
            "field": "data.list.saleRentShipBillProducts.amount",
            "description": "<p>金额</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "data.list.saleRentShipBillProducts.number",
            "description": "<p>数量</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.saleRentShipBillProducts.productId",
            "description": "<p>产品标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.saleRentShipBillProducts.productName",
            "description": "<p>产品名称</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.saleRentShipBillProducts.productPn",
            "description": "<p>产品料号</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.saleRentShipBillProducts.spec",
            "description": "<p>产品规格</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.saleRentShipBillProducts.unit",
            "description": "<p>单位 台TAI</p>"
          },
          {
            "group": "Success 200",
            "type": "decimal(string)",
            "optional": false,
            "field": "data.list.saleRentShipBillProducts.unitPrice",
            "description": "<p>单价</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "responseTime",
            "description": "<p>返回响应时间</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>响应状态</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: ",
          "content": "{\n  \"code\": \"string\",\n  \"data\": {\n    \"count\": 0,\n    \"list\": [\n      {\n        \"billType\": \"DIRECT_RENT\",\n        \"dealerId\": \"string\",\n        \"dealerName\": \"string\",\n        \"finishDate\": 0,\n        \"id\": \"string\",\n        \"orderId\": \"string\",\n        \"saleRentShipBillProducts\": [\n          {\n            \"amount\": 0,\n            \"number\": 0,\n            \"productId\": \"string\",\n            \"productName\": \"string\",\n            \"productPn\": \"string\",\n            \"spec\": \"string\",\n            \"unit\": \"TAI\",\n            \"unitPrice\": 0\n          }\n        ]\n      }\n    ],\n  },\n  \"msg\": \"string\",\n  \"responseTime\": \"2019-01-22T09:37:27.512Z\",\n  \"status\": \"string\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "错误码详情": [
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "10000001",
            "description": "<p>空参数</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "10000003",
            "description": "<p>查询字段为空</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20304001",
            "description": "<p>获取出货单详情列表失败</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20303002",
            "description": "<p>获取出货单列表失败</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "000000",
            "description": "<p>请求成功</p>"
          }
        ],
        "错误格式说明": [
          {
            "group": "errorFormat",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>接口返回的错误信息</p>"
          },
          {
            "group": "errorFormat",
            "type": "string",
            "optional": false,
            "field": "code",
            "description": "<p>错误码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"responseTime\": \"2019-01-02T09:47:15.032+0000\",\n    \"code\": \"20107007\",\n    \"status\": \"200\",\n    \"msg\": \"fail to add account period\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/cn/xlink/cloud/deliver/rest/controller/ShipBillRestController.java",
    "groupTitle": "ShipBillRestController",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Access-Token",
            "description": "<p>xlink平台颁发的凭证</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n\"Access-Token\":\"访问凭证\",\n\"Content-Type\":\"application/json\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/v1/xlink-deliver-rest/shipBillRest/listShipBillDevices",
    "title": "查询商用售租订单设备明细, 适用于直租订单",
    "name": "listShipBillDevices",
    "group": "ShipBillRestController",
    "description": "<p>查询商用售租订单设备明细, 适用于直租订单</p>",
    "permission": [
      {
        "name": "userOnly"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>页码，从1开始</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "size",
            "description": "<p>页面大小</p>"
          },
          {
            "group": "Parameter",
            "type": "array(object)",
            "optional": true,
            "field": "sort",
            "description": "<p>排序对象</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "query",
            "description": "<p>查询对象</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "query.deviceSn",
            "description": "<p>设备sn</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "query.productName",
            "description": "<p>产品名称</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "query.productId",
            "description": "<p>产品id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "query.shipBillId",
            "description": "<p>出货单标识</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"page\": 1,\n  \"size\": 10,\n  \"sort\": [\n    {\n      \"additionalProp1\": \"string\"\n    }\n  ],\n  \"query\": {\n    \"deviceSn\": \"string\",\n    \"productName\": \"string\",\n    \"shipBillId\": \"string\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "code",
            "description": "<p>返回编码</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "data.count",
            "description": "<p>总数</p>"
          },
          {
            "group": "Success 200",
            "type": "array(object)",
            "optional": false,
            "field": "data.list",
            "description": "<p>数据列表</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.deviceId",
            "description": "<p>设备标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.deviceSn",
            "description": "<p>设备sn</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.productName",
            "description": "<p>产品名称</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "responseTime",
            "description": "<p>返回响应时间</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>响应状态</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: ",
          "content": "{\n  \"code\": \"string\",\n  \"data\": {\n    \"count\": 0,\n    \"list\": [\n      {\n        \"deviceId\": \"string\",\n        \"deviceSn\": \"string\",\n        \"productName\": \"string\"\n      }\n    ],\n  },\n  \"msg\": \"string\",\n  \"responseTime\": \"2019-01-22T09:57:00.109Z\",\n  \"status\": \"string\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "错误码详情": [
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "10000001",
            "description": "<p>空参数</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20303003",
            "description": "<p>出货单标识为空</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20304001",
            "description": "<p>获取出货单详情列表失败</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20305001",
            "description": "<p>获取出货设备列表失败</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "000000",
            "description": "<p>请求成功</p>"
          }
        ],
        "错误格式说明": [
          {
            "group": "errorFormat",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>接口返回的错误信息</p>"
          },
          {
            "group": "errorFormat",
            "type": "string",
            "optional": false,
            "field": "code",
            "description": "<p>错误码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"responseTime\": \"2019-01-02T09:47:15.032+0000\",\n    \"code\": \"20107007\",\n    \"status\": \"200\",\n    \"msg\": \"fail to add account period\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/cn/xlink/cloud/deliver/rest/controller/ShipBillRestController.java",
    "groupTitle": "ShipBillRestController",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Access-Token",
            "description": "<p>xlink平台颁发的凭证</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n\"Access-Token\":\"访问凭证\",\n\"Content-Type\":\"application/json\"\n}",
          "type": "json"
        }
      ]
    }
  }
] });
