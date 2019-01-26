define({ "api": [
  {
    "type": "GET",
    "url": "/v1/xlink-deliver-base/shipBillRest/getCivilShipBillInfo/{shipBillId}",
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
    "url": "/v1/xlink-deliver-base/shipBillRest/getShipBillInfo/{shipBillId}",
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
    "url": "/v1/xlink-deliver-base/shipBillRest/listCivilSaleRentShipBill",
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
    "url": "/v1/xlink-deliver-base/shipBillRest/listCivilShipBillDevices/{shipBillId}",
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
    "url": "/v1/xlink-deliver-base/shipBillRest/listSaleRentShipBill",
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
    "url": "/v1/xlink-deliver-base/shipBillRest/listShipBillDevices",
    "title": "查询商用售租订单设备明细",
    "name": "listShipBillDevices",
    "group": "ShipBillRestController",
    "description": "<p>查询商用售租订单设备明细</p>",
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
