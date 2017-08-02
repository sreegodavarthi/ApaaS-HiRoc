export class ReportFilter {
    id: string;
    columnName: string;
    dataCategory: string;
    defaultValue: string;
    isSelected: string; // TODO: Change type back to boolean when you figure out how to map GET request json values from string to boolean
    isMasked: boolean;
    userInput: string;
    dataType: string;
    showRangeDiv : boolean;
    showPrimitiveDiv : boolean;
    justify: string;
    padCharacter: string;
    dateFormat: string;
    isFilter: string;
    groupingAttribute: string;
    sourceRecordType: string;
    fieldLength: number;
    groupSequenceNumber: number;
    display: {
        displayName: string,
        description: string;
        isMandatory: string;// TODO: Change type back to boolean when you figure out how to map GET request json values from string to boolean
        isDisplayed: boolean;
    }
    elements: ReportFilter[];
    
    constructor() {
        this.id  = "wtf";
    }
}

export class ReportFilterData {
    adsId: string;
    jsonElement: {
        metadata: {
            id: string;
            nickname: string;
            dataCategory: string;
            fileFormat: string;
            fileTemplate: string;
            fileName: string;
            createdOn: string;
            lastDelivered: string;
            status: string;
            settings: string;
            eMail: string;
        }
        elements: ReportFilter[];
    }
}
