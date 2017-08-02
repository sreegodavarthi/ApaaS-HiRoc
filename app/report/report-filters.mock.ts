import { ReportFilter } from './report-filter';

export const MockFilters = {};
// let i: number = 15;

// export const MockFilters: ReportFilter[] = [{
//     "id": "RT1|001",
//     "columnName": "den.company_name",
//     "dataCategory": "Primitive",
//     "defaultValue": "",
//     "isSelected": true,
//     "isMasked": false,
//     "userInput": "",
//     "dataType": "string",
//     "justify": "",
//     "padCharacter": "space",
//     "dateFormat": "",
//     "isFilter": "N",
//     "groupingAttribute": "",
//     "sourceRecordType": "",
//     "fieldLength": 1,
//     "groupSequenceNumber": 1,
//     "display": {
//         "displayName": "Client Name",
//         "description": "Name of the client/prospect analyzed",
//         "isMandatory": true,
//         "isDisplayed": true
//     },
//     "elements": null
// }, {
//     "id": "RT1|002",
//     "columnName": "den.channel",
//     "dataCategory": "Primitive",
//     "defaultValue": "",
//     "isSelected": true,
//     "isMasked": false,
//     "userInput": "",
//     "dataType": "string",
//     "justify": "",
//     "padCharacter": "space",
//     "dateFormat": "",
//     "isFilter": "Y",
//     "groupingAttribute": "",
//     "sourceRecordType": "",
//     "fieldLength": 1,
//     "groupSequenceNumber": 1,
//     "display": {
//         "displayName": "Channel",
//         "description": "GCP Merchant channel category",
//         "isMandatory": true,
//         "isDisplayed": true
//     },
//     "elements": null
// }, {
//     "id": "RT1|003",
//     "columnName": "den.amex_corp_id",
//     "dataCategory": "Primitive",
//     "defaultValue": "",
//     "isSelected": true,
//     "isMasked": false,
//     "userInput": "",
//     "dataType": "string",
//     "justify": "",
//     "padCharacter": "space",
//     "dateFormat": "",
//     "isFilter": "N",
//     "groupingAttribute": "",
//     "sourceRecordType": "",
//     "fieldLength": 1,
//     "groupSequenceNumber": 1,
//     "display": {
//         "displayName": "CID",
//         "description": "ID to uniquely identify the client (CID)",
//         "isMandatory": true,
//         "isDisplayed": true
//     },
//     "elements": null
// }, {
//     "id": "RT1|004",
//     "columnName": "den.supplier_name",
//     "dataCategory": "Primitive",
//     "defaultValue": "",
//     "isSelected": true,
//     "isMasked": false,
//     "userInput": "",
//     "dataType": "string",
//     "justify": "",
//     "padCharacter": "space",
//     "dateFormat": "",
//     "isFilter": "N",
//     "groupingAttribute": "",
//     "sourceRecordType": "",
//     "fieldLength": 1,
//     "groupSequenceNumber": 1,
//     "display": {
//         "displayName": "Supplier Name",
//         "description": "Orig unaltered supplier name",
//         "isMandatory": true,
//         "isDisplayed": true
//     },
//     "elements": null
// }, {
//     "id": "RT1|005",
//     "columnName": "den.se10",
//     "dataCategory": "Primitive",
//     "defaultValue": "",
//     "isSelected": true,
//     "isMasked": false,
//     "userInput": "",
//     "dataType": "string",
//     "justify": "",
//     "padCharacter": "space",
//     "dateFormat": "",
//     "isFilter": "N",
//     "groupingAttribute": "",
//     "sourceRecordType": "",
//     "fieldLength": 1,
//     "groupSequenceNumber": 1,
//     "display": {
//         "displayName": "SE10",
//         "description": "Supplier ID's associated with business",
//         "isMandatory": true,
//         "isDisplayed": true
//     },
//     "elements": null
// }, {
//     "id": "RT1|006",
//     "columnName": "den.cap_se10",
//     "dataCategory": "Primitive",
//     "defaultValue": "",
//     "isSelected": true,
//     "isMasked": false,
//     "userInput": "",
//     "dataType": "string",
//     "justify": "",
//     "padCharacter": "space",
//     "dateFormat": "",
//     "isFilter": "DNE",
//     "groupingAttribute": "",
//     "sourceRecordType": "",
//     "fieldLength": 1,
//     "groupSequenceNumber": 1,
//     "display": {
//         "displayName": "Market TOC# (CAP)",
//         "description": "Market Top of Chain(Chain Affiliated Property)",
//         "isMandatory": true,
//         "isDisplayed": true
//     },
//     "elements": null
// }, {
//     "id": "RT1|007",
//     "columnName": "den.map_se10",
//     "dataCategory": "Primitive",
//     "defaultValue": "",
//     "isSelected": true,
//     "isMasked": false,
//     "userInput": "",
//     "dataType": "string",
//     "justify": "",
//     "padCharacter": "space",
//     "dateFormat": "",
//     "isFilter": "N",
//     "groupingAttribute": "",
//     "sourceRecordType": "",
//     "fieldLength": 1,
//     "groupSequenceNumber": 1,
//     "display": {
//         "displayName": "Brand TOC# (MAP)",
//         "description": "Brand Top of Chain(Master Affiliated Property)",
//         "isMandatory": true,
//         "isDisplayed": true
//     },
//     "elements": null
// }, {
//     "id": "RT1|008",
//     "columnName": "den.cap_name",
//     "dataCategory": "Primitive",
//     "defaultValue": "",
//     "isSelected": true,
//     "isMasked": false,
//     "userInput": "",
//     "dataType": "string",
//     "justify": "",
//     "padCharacter": "space",
//     "dateFormat": "",
//     "isFilter": "N",
//     "groupingAttribute": "",
//     "sourceRecordType": "",
//     "fieldLength": 1,
//     "groupSequenceNumber": 1,
//     "display": {
//         "displayName": "CAP name",
//         "description": "Chain Affiliated Property name",
//         "isMandatory": true,
//         "isDisplayed": true
//     },
//     "elements": null
// }, {
//     "id": "RT1|009",
//     "columnName": "den.map_name",
//     "dataCategory": "Primitive",
//     "defaultValue": "",
//     "isSelected": true,
//     "isMasked": false,
//     "userInput": "",
//     "dataType": "string",
//     "justify": "",
//     "padCharacter": "space",
//     "dateFormat": "",
//     "isFilter": "N",
//     "groupingAttribute": "",
//     "sourceRecordType": "",
//     "fieldLength": 1,
//     "groupSequenceNumber": 1,
//     "display": {
//         "displayName": "MAP name",
//         "description": "Master Affiliated Property name",
//         "isMandatory": true,
//         "isDisplayed": true
//     },
//     "elements": null
// }, {
//     "id": "RT1|010",
//     "columnName": "den.net_amount",
//     "dataCategory": "Primitive",
//     "defaultValue": "",
//     "isSelected": true,
//     "isMasked": false,
//     "userInput": "",
//     "dataType": "string",
//     "justify": "",
//     "padCharacter": "space",
//     "dateFormat": "",
//     "isFilter": "Y",
//     "groupingAttribute": "",
//     "sourceRecordType": "",
//     "fieldLength": 1,
//     "groupSequenceNumber": 1,
//     "display": {
//         "displayName": "Total Spend",
//         "description": "Invoice / Payment amount",
//         "isMandatory": true,
//         "isDisplayed": true
//     },
//     "elements": null
// }, {
//     "id": "RT1|011",
//     "columnName": "den.total_trx",
//     "dataCategory": "Primitive",
//     "defaultValue": "",
//     "isSelected": true,
//     "isMasked": false,
//     "userInput": "",
//     "dataType": "string",
//     "justify": "",
//     "padCharacter": "space",
//     "dateFormat": "",
//     "isFilter": "N",
//     "groupingAttribute": "",
//     "sourceRecordType": "",
//     "fieldLength": 1,
//     "groupSequenceNumber": 1,
//     "display": {
//         "displayName": "Total Transactions",
//         "description": "Payment count from the supplier",
//         "isMandatory": true,
//         "isDisplayed": true
//     },
//     "elements": null
// }, {
//     "id": "RT1|012",
//     "columnName": "den.do_not_grow",
//     "dataCategory": "Primitive",
//     "defaultValue": "",
//     "isSelected": true,
//     "isMasked": false,
//     "userInput": "",
//     "dataType": "string",
//     "justify": "",
//     "padCharacter": "space",
//     "dateFormat": "",
//     "isFilter": "N",
//     "groupingAttribute": "",
//     "sourceRecordType": "",
//     "fieldLength": 1,
//     "groupSequenceNumber": 1,
//     "display": {
//         "displayName": "Do Not Grow",
//         "description": "Risk Growth indicator",
//         "isMandatory": true,
//         "isDisplayed": true
//     },
//     "elements": null
// }, {
//     "id": "RT1|013",
//     "columnName": "den.dominant_payment_method",
//     "dataCategory": "Primitive",
//     "defaultValue": "",
//     "isSelected": true,
//     "isMasked": false,
//     "userInput": "",
//     "dataType": "string",
//     "justify": "",
//     "padCharacter": "space",
//     "dateFormat": "",
//     "isFilter": "N",
//     "groupingAttribute": "",
//     "sourceRecordType": "",
//     "fieldLength": 1,
//     "groupSequenceNumber": 1,
//     "display": {
//         "displayName": "Dominant Payment Method",
//         "description": "Dominant Payment Method",
//         "isMandatory": true,
//         "isDisplayed": true
//     },
//     "elements": null
// }, {
//     "id": "RT1|014",
//     "columnName": "den.dominant_payment_terms",
//     "dataCategory": "Primitive",
//     "defaultValue": "",
//     "isSelected": true,
//     "isMasked": false,
//     "userInput": "",
//     "dataType": "string",
//     "justify": "",
//     "padCharacter": "space",
//     "dateFormat": "",
//     "isFilter": "N",
//     "groupingAttribute": "",
//     "sourceRecordType": "",
//     "fieldLength": 1,
//     "groupSequenceNumber": 1,
//     "display": {
//         "displayName": "Dominant Payment Terms",
//         "description": "Dominant Payment Terms",
//         "isMandatory": true,
//         "isDisplayed": true
//     },
//     "elements": null
// }, {
//     "id": "RT1|015",
//     "columnName": "den.pmt_terms_mapped",
//     "dataCategory": "Primitive",
//     "defaultValue": "",
//     "isSelected": true,
//     "isMasked": false,
//     "userInput": "",
//     "dataType": "string",
//     "justify": "",
//     "padCharacter": "space",
//     "dateFormat": "",
//     "isFilter": "N",
//     "groupingAttribute": "",
//     "sourceRecordType": "",
//     "fieldLength": 1,
//     "groupSequenceNumber": 1,
//     "display": {
//         "displayName": "Payment Terms Mapped",
//         "description": "Mapped value to standardize Payment Terms",
//         "isMandatory": true,
//         "isDisplayed": true
//     },
//     "elements": null
// }, {
//     "id": "RT1|016",
//     "columnName": "den.ACH_meth",
//     "dataCategory": "Primitive",
//     "defaultValue": "",
//     "isSelected": true,
//     "isMasked": false,
//     "userInput": "",
//     "dataType": "string",
//     "justify": "",
//     "padCharacter": "space",
//     "dateFormat": "",
//     "isFilter": "N",
//     "groupingAttribute": "",
//     "sourceRecordType": "",
//     "fieldLength": 1,
//     "groupSequenceNumber": 1,
//     "display": {
//         "displayName": "Spend using ACH method",
//         "description": "Spend using ACH method",
//         "isMandatory": true,
//         "isDisplayed": true
//     },
//     "elements": null
// }, {
//     "id": "RT1|017",
//     "columnName": "den.check_meth",
//     "dataCategory": "Primitive",
//     "defaultValue": "",
//     "isSelected": true,
//     "isMasked": false,
//     "userInput": "",
//     "dataType": "string",
//     "justify": "",
//     "padCharacter": "space",
//     "dateFormat": "",
//     "isFilter": "N",
//     "groupingAttribute": "",
//     "sourceRecordType": "",
//     "fieldLength": 1,
//     "groupSequenceNumber": 1,
//     "display": {
//         "displayName": "Spend using Check method",
//         "description": "Spend using Check method",
//         "isMandatory": true,
//         "isDisplayed": true
//     },
//     "elements": null
// }, {
//     "id": "RT1|018",
//     "columnName": "den.EFT_meth",
//     "dataCategory": "Primitive",
//     "defaultValue": "",
//     "isSelected": true,
//     "isMasked": false,
//     "userInput": "",
//     "dataType": "string",
//     "justify": "",
//     "padCharacter": "space",
//     "dateFormat": "",
//     "isFilter": "N",
//     "groupingAttribute": "",
//     "sourceRecordType": "",
//     "fieldLength": 1,
//     "groupSequenceNumber": 1,
//     "display": {
//         "displayName": "Spend using EFT method",
//         "description": "Spend using EFT method",
//         "isMandatory": true,
//         "isDisplayed": true
//     },
//     "elements": null
// }, {
//     "id": "RT1|019",
//     "columnName": "den.wire_meth",
//     "dataCategory": "Primitive",
//     "defaultValue": "",
//     "isSelected": true,
//     "isMasked": false,
//     "userInput": "",
//     "dataType": "string",
//     "justify": "",
//     "padCharacter": "space",
//     "dateFormat": "",
//     "isFilter": "N",
//     "groupingAttribute": "",
//     "sourceRecordType": "",
//     "fieldLength": 1,
//     "groupSequenceNumber": 1,
//     "display": {
//         "displayName": "Spend using Wire method",
//         "description": "Spend using Wire method",
//         "isMandatory": true,
//         "isDisplayed": true
//     },
//     "elements": null
// }, {
//     "id": "RT1|020",
//     "columnName": "den.other_pay_method",
//     "dataCategory": "Primitive",
//     "defaultValue": "",
//     "isSelected": true,
//     "isMasked": false,
//     "userInput": "",
//     "dataType": "string",
//     "justify": "",
//     "padCharacter": "space",
//     "dateFormat": "",
//     "isFilter": "N",
//     "groupingAttribute": "",
//     "sourceRecordType": "",
//     "fieldLength": 1,
//     "groupSequenceNumber": 1,
//     "display": {
//         "displayName": "Spend using Other Pay method",
//         "description": "Spend using Other Pay method",
//         "isMandatory": true,
//         "isDisplayed": true
//     },
//     "elements": null
// }, {
//     "id": "RT1|021",
//     "columnName": "den.missing_pay_method",
//     "dataCategory": "Primitive",
//     "defaultValue": "",
//     "isSelected": true,
//     "isMasked": false,
//     "userInput": "",
//     "dataType": "string",
//     "justify": "",
//     "padCharacter": "space",
//     "dateFormat": "",
//     "isFilter": "N",
//     "groupingAttribute": "",
//     "sourceRecordType": "",
//     "fieldLength": 1,
//     "groupSequenceNumber": 1,
//     "display": {
//         "displayName": "Spend using Missing Pay method",
//         "description": "Spend using Missing Pay method",
//         "isMandatory": true,
//         "isDisplayed": true
//     },
//     "elements": null
// }, {
//     "id": "RT1|022",
//     "columnName": "den.data_source",
//     "dataCategory": "Primitive",
//     "defaultValue": "",
//     "isSelected": false,
//     "isMasked": false,
//     "userInput": "",
//     "dataType": "string",
//     "justify": "",
//     "padCharacter": "space",
//     "dateFormat": "",
//     "isFilter": "N",
//     "groupingAttribute": "",
//     "sourceRecordType": "",
//     "fieldLength": 1,
//     "groupSequenceNumber": 1,
//     "display": {
//         "displayName": "Data Source",
//         "description": "Source of data 'M' : MKB Golden Record, 'DNB':DNB Reference data",
//         "isMandatory": false,
//         "isDisplayed": true
//     },
//     "elements": null
// }];
// //     { id: 1, columnName: '', isVisible: true, name: 'Client Name', filterData: 'filter data 1', isMandatory: Math.random() > 0.8, isSet: Math.random() > 0.8, description: 'Name of the client/prospect analyzed' },
// //     { id: 2, columnName: '', isVisible: true, name: 'Channel', filterData: 'filter data 2', isMandatory: Math.random() > 0.8, isSet: Math.random() > 0.8, description: 'GCP Merchant channel category ' },
// //     { id: 3, columnName: '', isVisible: true, name: 'CID', filterData: 'filter data 3', isMandatory: Math.random() > 0.8, isSet: Math.random() > 0.8, description: 'ID to uniquely identify the client (CID)' },
// //     { id: 4, columnName: '', isVisible: true, name: 'Supplier Name', filterData: 'filter data 4', isMandatory: Math.random() > 0.8, isSet: Math.random() > 0.8, description: 'Original unaltered supplier name' },
// //     { id: 5, columnName: '', isVisible: true, name: 'SE10', filterData: 'filter data 5', isMandatory: Math.random() > 0.8, isSet: Math.random() > 0.8, description: "Supplier ID's associated with business" },
// //     //{ id: 6, columnName: '', isVisible: true, name: 'Market TOC# (CAP)', filterData: 'filter data 6', isMandatory: Math.random() > 0.8, isSet: Math.random() > 0.8, description: 'Market Top of Chain(Chain Affiliated Property)' },
// //     { id: 6, columnName: '', isVisible: true, name: 'Market TOC# (CAP)', filterData: 'filter data 6', isMandatory: Math.random() > 0.8, isSet: Math.random() > 0.8, description: 'Market Top of Chain' },    
// //     //{ id: 7, columnName: '', isVisible: true, name: 'Brand TOC# (MAP)', filterData: 'filter data 7', isMandatory: Math.random() > 0.8, isSet: Math.random() > 0.8, description: 'Brand Top of Chain(Master Affiliated Property)' },
// //     { id: 7, columnName: '', isVisible: true, name: 'Brand TOC# (MAP)', filterData: 'filter data 7', isMandatory: Math.random() > 0.8, isSet: Math.random() > 0.8, description: 'Brand Top of Chain' },    
// //     { id: 8, columnName: '', isVisible: true, name: 'CAP name', filterData: 'filter data 8', isMandatory: Math.random() > 0.8, isSet: Math.random() > 0.8, description: 'Chain Affiliated Property name' },
// //     { id: 9, columnName: '', isVisible: true, name: 'MAP name', filterData: 'filter data 9', isMandatory: Math.random() > 0.8, isSet: Math.random() > 0.8, description: 'Master Affiliated Property name' },
// //     { id: 10, columnName: '', isVisible: true, name: 'Total Spend', filterData: 'filter data 10', isMandatory: Math.random() > 0.8, isSet: Math.random() > 0.8, description: 'Invoice / Payment amount' },
// //     { id: 11, columnName: '', isVisible: true, name: 'Total Transactions', filterData: 'filter data 11', isMandatory: Math.random() > 0.8, isSet: Math.random() > 0.8, description: 'Payment count from the supplier' },
// //     { id: 12, columnName: '', isVisible: true, name: 'Do Not Grow', filterData: 'filter data 12', isMandatory: Math.random() > 0.8, isSet: Math.random() > 0.8, description: 'Risk Growth indicator' },
// //     { id: 13, columnName: '', isVisible: true, name: 'Dominant Payment Method', filterData: 'filter data 13', isMandatory: Math.random() > 0.8, isSet: Math.random() > 0.8, description: 'Dominant Payment Method' },
// //     { id: 14, columnName: '', isVisible: true, name: 'Dominant Payment Terms', filterData: 'filter data 14', isMandatory: Math.random() > 0.8, isSet: Math.random() > 0.8, description: 'Dominant Payment Terms' },
// //     { id: 15, columnName: '', isVisible: true, name: 'Payment Terms Mapped', filterData: 'filter data ' + i, isMandatory: Math.random() > 0.8, isSet: Math.random() > 0.8, description: 'Dominant Payment Terms' },
// //     { id: i++, columnName: '', isVisible: true, name: 'Spend using ACH method', filterData: 'filter data ' + i, isMandatory: Math.random() > 0.8, isSet: Math.random() > 0.8, description: 'Spend using ACH method' },
// //     { id: i++, columnName: '', isVisible: true, name: 'Spend using Check method', filterData: 'filter data ' + i, isMandatory: Math.random() > 0.8, isSet: Math.random() > 0.8, description: 'Spend using Check method' },
// //     { id: i++, columnName: '', isVisible: true, name: 'Spend using EFT method', filterData: 'filter data ' + i, isMandatory: Math.random() > 0.8, isSet: Math.random() > 0.8, description: 'Spend using EFT method' },
// //     { id: i++, columnName: '', isVisible: true, name: 'Spend using Wire method', filterData: 'filter data ' + i, isMandatory: Math.random() > 0.8, isSet: Math.random() > 0.8, description: 'Spend using Wire method' },
// //     { id: i++, columnName: '', isVisible: true, name: 'Spend using Other Pay method', filterData: 'filter data ' + i, isMandatory: Math.random() > 0.8, isSet: Math.random() > 0.8, description: 'Spend using Other Pay method' },
// //     { id: i++, columnName: '', isVisible: true, name: 'Spend using Missing Pay method', filterData: 'filter data ' + i, isMandatory: Math.random() > 0.8, isSet: Math.random() > 0.8, description: 'Spend using Missing Pay method' },
// //     //{ id: i++, columnName: '', isVisible: true, name: 'SpenData Source', filterData: 'filter data ' + i, isMandatory: Math.random() > 0.8, isSet: Math.random() > 0.8, description: 'Source of data \'M\' : MKB Golden Record, \'DNB\':DNB Reference data' },
// //     { id: i++, columnName: '', isVisible: true, name: 'SpenData Source', filterData: 'filter data ' + i, isMandatory: Math.random() > 0.8, isSet: Math.random() > 0.8, description: 'Source of data'},
// // ]