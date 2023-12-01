import { test, expect,Response } from '@playwright/test';
import { generateGUID } from '../utils/generateGUID.ts';
import { baseUrl,randomNumberGenerator } from '../utils/randomNumberGenerator.ts';
import { log } from 'console';

test('Create new entity request is POSTED with correct Request in the body of the endpoint',async({request})=> {
    const randomProgramId = generateGUID();
    const randomNumber=randomNumberGenerator();
    const randomEntityName=`AutomationTestEntity${randomNumber}`;
    var entityId;
    var  entity = {
        "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "name": randomEntityName,
        "accountId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "programId": randomProgramId,
        "entityTypeId": "AutoDatasource",
        "tags": {
          "additionalProp1": "test1",
          "additionalProp2": "test2",
          "additionalProp3": "test3"
        },
        "active": true,
            "audit": {
              "createdBy": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
              "createdDateTime": "2023-05-23T12:51:52.867Z",
              "modifiedBy": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
              "modifiedDateTime": "2023-05-23T12:51:52.867Z"                
          }

        }
     const response= await request.post(baseUrl+randomProgramId,{
        data:entity,
        headers:{"ACCEPT":"application/json"}
    
    });
    var responseJson= await response.json();
    expect(response.status()).toBe(201);
    entityId=responseJson.id;
    console.log(entityId);
});