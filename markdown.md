# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [aggregator_state.proto](#aggregator_state.proto)
    - [AggregatorState](#.AggregatorState)
    - [AggregatorState.Configs](#.AggregatorState.Configs)
    - [FulfillmentAgreement](#.FulfillmentAgreement)
    - [RoundResult](#.RoundResult)
  
- [fulfillment_manager.proto](#fulfillment_manager.proto)
    - [FulfillmentEntry](#.FulfillmentEntry)
    - [FulfillmentManagerAuth](#.FulfillmentManagerAuth)
    - [FulfillmentManagerState](#.FulfillmentManagerState)
    - [FulfillmentManagerState.Configs](#.FulfillmentManagerState.Configs)
  
- [instruction.proto](#instruction.proto)
    - [SwitchboardInstruction](#.SwitchboardInstruction)
    - [SwitchboardInstruction.GetAggregateInstruction](#.SwitchboardInstruction.GetAggregateInstruction)
    - [SwitchboardInstruction.HeartbeatInstruction](#.SwitchboardInstruction.HeartbeatInstruction)
    - [SwitchboardInstruction.InitInstruction](#.SwitchboardInstruction.InitInstruction)
    - [SwitchboardInstruction.ReachFulfillerAgreementInstruction](#.SwitchboardInstruction.ReachFulfillerAgreementInstruction)
    - [SwitchboardInstruction.RegisterAuthInstruction](#.SwitchboardInstruction.RegisterAuthInstruction)
    - [SwitchboardInstruction.RegisterJobInstruction](#.SwitchboardInstruction.RegisterJobInstruction)
    - [SwitchboardInstruction.SaveResultInstruction](#.SwitchboardInstruction.SaveResultInstruction)
    - [SwitchboardInstruction.SetAggregatorConfigsInstruction](#.SwitchboardInstruction.SetAggregatorConfigsInstruction)
    - [SwitchboardInstruction.SetFulfillmentManagerConfigsInstruction](#.SwitchboardInstruction.SetFulfillmentManagerConfigsInstruction)
    - [SwitchboardInstruction.UnregisterJobInstruction](#.SwitchboardInstruction.UnregisterJobInstruction)
    - [SwitchboardInstruction.UpdateAggregateInstruction](#.SwitchboardInstruction.UpdateAggregateInstruction)
  
- [job_schemas.proto](#job_schemas.proto)
    - [JobPosting](#.JobPosting)
    - [JobResult](#.JobResult)
    - [OracleJob](#.OracleJob)
    - [OracleJob.CcxtWsTask](#.OracleJob.CcxtWsTask)
    - [OracleJob.HttpTask](#.OracleJob.HttpTask)
    - [OracleJob.HttpTask.Header](#.OracleJob.HttpTask.Header)
    - [OracleJob.JsonParseTask](#.OracleJob.JsonParseTask)
    - [OracleJob.MeanTask](#.OracleJob.MeanTask)
    - [OracleJob.MedianTask](#.OracleJob.MedianTask)
    - [OracleJob.Task](#.OracleJob.Task)
    - [OracleJob.WebsocketTask](#.OracleJob.WebsocketTask)
  
    - [OracleJob.HttpTask.Method](#.OracleJob.HttpTask.Method)
  
- [switchboard_account_types.proto](#switchboard_account_types.proto)
    - [SwitchboardAccountType](#.SwitchboardAccountType)
  
- [Scalar Value Types](#scalar-value-types)



<a name="aggregator_state.proto"></a>
<p align="right"><a href="#top">Top</a></p>

## aggregator_state.proto



<a name=".AggregatorState"></a>

### AggregatorState
AggregatorState is the state representation of a data feed account.
Aggregators will be responsible for maintaining all state of data feeds
including which jobs should be fulfilled, how often, and the results of those
jobs.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| version | [uint32](#uint32) | optional | Aggregator version. |
| configs | [AggregatorState.Configs](#AggregatorState.Configs) | optional | Aggregator configs. |
| fulfillment_manager_pubkey | [bytes](#bytes) | optional | The Pubkey of the {@linkcode FulfillmentManagerState} account responsible for deciding which Switchboard nodes will fulfill aggregator update requests. |
| job_definition_pubkeys | [bytes](#bytes) | repeated | Represents a list of {@linkcode OracleJob} accounts that are passed to Switchboard nodes to be performed upon an update call. |
| agreement | [FulfillmentAgreement](#FulfillmentAgreement) | optional | Hold a list of pubkeys of the current fulfillers for this aggregator. |
| current_round_result | [RoundResult](#RoundResult) | optional | Holds metadata surrounding the current medians of the aggregator jobs as decided by the nodes listed in the {@linkcode FulfillerAgreement}. |
| last_round_result | [RoundResult](#RoundResult) | optional | Holds the aggregator results of the previous successful round. |






<a name=".AggregatorState.Configs"></a>

### AggregatorState.Configs
Seettings applied to this aggregator.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| locked | [bool](#bool) | optional | Upon locking an aggregator, the assigned fulfillment manager and job list become permanently immutable. |
| min_confirmations | [int32](#int32) | optional | Represents the number of results required for a new round to be accpeted as valid. |
| min_update_delay_seconds | [int64](#int64) | optional | The minimum amount of time required between update calls for this aggregator. |






<a name=".FulfillmentAgreement"></a>

### FulfillmentAgreement



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| node_pubkeys | [bytes](#bytes) | repeated |  |
| requested | [bool](#bool) | optional |  |






<a name=".RoundResult"></a>

### RoundResult



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| num_success | [int32](#int32) | optional |  |
| num_error | [int32](#int32) | optional |  |
| result | [double](#double) | optional |  |
| round_open_slot | [uint64](#uint64) | optional |  |
| round_open_timestamp | [int64](#int64) | optional |  |
| min_response | [double](#double) | optional |  |
| max_response | [double](#double) | optional |  |
| medians | [double](#double) | repeated |  |





 

 

 

 



<a name="fulfillment_manager.proto"></a>
<p align="right"><a href="#top">Top</a></p>

## fulfillment_manager.proto



<a name=".FulfillmentEntry"></a>

### FulfillmentEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| node_pubkey | [bytes](#bytes) | optional |  |
| lease_count | [int32](#int32) | optional | How many times the provided account may be used to fulfill requests. Setting this &lt;= 0 or leaving unset will specify unlimited lease count. |
| slot_expiration | [int32](#int32) | optional | The slot number where this lease is no longer valid. Setting this &lt;= 0 or leaving unset will signify this entry never expires. |






<a name=".FulfillmentManagerAuth"></a>

### FulfillmentManagerAuth



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| nominee_pubkey | [bytes](#bytes) | optional | The pubkey of the account nominated for auth. |
| fulfillment_manager_pubkey | [bytes](#bytes) | optional |  |
| authorize_heartbeat | [bool](#bool) | optional |  |
| authorize_usage | [bool](#bool) | optional |  |






<a name=".FulfillmentManagerState"></a>

### FulfillmentManagerState



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| version | [int32](#int32) | optional |  |
| configs | [FulfillmentManagerState.Configs](#FulfillmentManagerState.Configs) | optional |  |
| entries | [FulfillmentEntry](#FulfillmentEntry) | repeated |  |






<a name=".FulfillmentManagerState.Configs"></a>

### FulfillmentManagerState.Configs



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| heartbeat_auth_required | [bool](#bool) | optional | Whether anyone is allowed to add their node to this fulfillment maanger or not. |
| usage_auth_required | [bool](#bool) | optional | Whether an aggregator needs a fulfillment manager signature to use. |
| locked | [bool](#bool) | optional |  |





 

 

 

 



<a name="instruction.proto"></a>
<p align="right"><a href="#top">Top</a></p>

## instruction.proto



<a name=".SwitchboardInstruction"></a>

### SwitchboardInstruction



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| init_instruction | [SwitchboardInstruction.InitInstruction](#SwitchboardInstruction.InitInstruction) | optional |  |
| register_job_instruction | [SwitchboardInstruction.RegisterJobInstruction](#SwitchboardInstruction.RegisterJobInstruction) | optional | Agregator instructions |
| unregister_job_instruction | [SwitchboardInstruction.UnregisterJobInstruction](#SwitchboardInstruction.UnregisterJobInstruction) | optional |  |
| update_aggregate_instruction | [SwitchboardInstruction.UpdateAggregateInstruction](#SwitchboardInstruction.UpdateAggregateInstruction) | optional |  |
| get_aggregate_instruction | [SwitchboardInstruction.GetAggregateInstruction](#SwitchboardInstruction.GetAggregateInstruction) | optional |  |
| save_result_instruction | [SwitchboardInstruction.SaveResultInstruction](#SwitchboardInstruction.SaveResultInstruction) | optional |  |
| set_aggregator_configs_instruction | [SwitchboardInstruction.SetAggregatorConfigsInstruction](#SwitchboardInstruction.SetAggregatorConfigsInstruction) | optional |  |
| set_fulfillment_manager_configs_instruction | [SwitchboardInstruction.SetFulfillmentManagerConfigsInstruction](#SwitchboardInstruction.SetFulfillmentManagerConfigsInstruction) | optional |  |
| heartbeat_instruction | [SwitchboardInstruction.HeartbeatInstruction](#SwitchboardInstruction.HeartbeatInstruction) | optional |  |
| register_auth_instruction | [SwitchboardInstruction.RegisterAuthInstruction](#SwitchboardInstruction.RegisterAuthInstruction) | optional |  |
| reach_fulfiller_agreement_instruction | [SwitchboardInstruction.ReachFulfillerAgreementInstruction](#SwitchboardInstruction.ReachFulfillerAgreementInstruction) | optional |  |






<a name=".SwitchboardInstruction.GetAggregateInstruction"></a>

### SwitchboardInstruction.GetAggregateInstruction







<a name=".SwitchboardInstruction.HeartbeatInstruction"></a>

### SwitchboardInstruction.HeartbeatInstruction



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| lease_count | [int64](#int64) | optional | How many times the provided account may be used to fulfill requests. |
| slot_expiration | [int64](#int64) | optional | The slot number where this lease is no longer valid. |






<a name=".SwitchboardInstruction.InitInstruction"></a>

### SwitchboardInstruction.InitInstruction



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| type | [SwitchboardAccountType](#SwitchboardAccountType) | optional |  |






<a name=".SwitchboardInstruction.ReachFulfillerAgreementInstruction"></a>

### SwitchboardInstruction.ReachFulfillerAgreementInstruction







<a name=".SwitchboardInstruction.RegisterAuthInstruction"></a>

### SwitchboardInstruction.RegisterAuthInstruction



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| authorize_heartbeat | [bool](#bool) | optional |  |
| authorize_usage | [bool](#bool) | optional |  |






<a name=".SwitchboardInstruction.RegisterJobInstruction"></a>

### SwitchboardInstruction.RegisterJobInstruction



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| job | [OracleJob](#OracleJob) | optional |  |






<a name=".SwitchboardInstruction.SaveResultInstruction"></a>

### SwitchboardInstruction.SaveResultInstruction



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| node_idx | [uint32](#uint32) | optional |  |
| result | [double](#double) | optional |  |
| error | [bool](#bool) | optional |  |






<a name=".SwitchboardInstruction.SetAggregatorConfigsInstruction"></a>

### SwitchboardInstruction.SetAggregatorConfigsInstruction



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| min_confirmations | [int32](#int32) | optional |  |
| min_update_delay_seconds | [int64](#int64) | optional |  |
| fulfillment_manager_pubkey | [bytes](#bytes) | optional |  |
| lock | [bool](#bool) | optional |  |






<a name=".SwitchboardInstruction.SetFulfillmentManagerConfigsInstruction"></a>

### SwitchboardInstruction.SetFulfillmentManagerConfigsInstruction



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| heartbeat_auth_required | [bool](#bool) | optional | Whether anyone is allowed to add their node to this fulfillment maanger or not. |
| usage_auth_required | [bool](#bool) | optional | Whether an aggregator needs a fulfillment manager signature to use. |
| lock | [bool](#bool) | optional |  |






<a name=".SwitchboardInstruction.UnregisterJobInstruction"></a>

### SwitchboardInstruction.UnregisterJobInstruction



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| job_pubkey | [bytes](#bytes) | optional |  |






<a name=".SwitchboardInstruction.UpdateAggregateInstruction"></a>

### SwitchboardInstruction.UpdateAggregateInstruction






 

 

 

 



<a name="job_schemas.proto"></a>
<p align="right"><a href="#top">Top</a></p>

## job_schemas.proto



<a name=".JobPosting"></a>

### JobPosting



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| aggregator_state_pubkey | [bytes](#bytes) | optional |  |
| node_pubkeys | [bytes](#bytes) | repeated |  |
| slot | [uint64](#uint64) | optional |  |






<a name=".JobResult"></a>

### JobResult



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| node_pubkey | [bytes](#bytes) | optional | Off chain node key |
| result | [double](#double) | optional |  |
| error | [bool](#bool) | optional |  |
| slot | [uint64](#uint64) | optional |  |
| timestamp | [int64](#int64) | optional |  |






<a name=".OracleJob"></a>

### OracleJob



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| tasks | [OracleJob.Task](#OracleJob.Task) | repeated | The tasks that are run in order to produce a JobResult object for this OracleJob. |






<a name=".OracleJob.CcxtWsTask"></a>

### OracleJob.CcxtWsTask



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| exchange | [string](#string) | optional |  |
| pair | [string](#string) | optional |  |






<a name=".OracleJob.HttpTask"></a>

### OracleJob.HttpTask
The adapter will report the text body of a successful HTTP request to the specified url, 
or return an error if the response status code is greater than or equal to 400.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| url | [string](#string) | optional | A string containing the URL to direct this HTTP request to. |
| method | [OracleJob.HttpTask.Method](#OracleJob.HttpTask.Method) | optional | The type of HTTP request to make. |
| headers | [OracleJob.HttpTask.Header](#OracleJob.HttpTask.Header) | repeated | A list of headers to add to this HttpTask. |
| body | [string](#string) | optional | A stringified body (if any) to add to this HttpTask. |






<a name=".OracleJob.HttpTask.Header"></a>

### OracleJob.HttpTask.Header
An object that represents a header to add to an HTTP request.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) | optional |  |
| value | [string](#string) | optional |  |






<a name=".OracleJob.JsonParseTask"></a>

### OracleJob.JsonParseTask
The adapter walks the path specified and returns the value found at that result. If returning
JSON data from the HttpGet or HttpPost adapters, you must use this adapter to parse the 
response.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| path | [string](#string) | optional | JSONPath formatted path to the element. https://t.ly/uLtw https://www.npmjs.com/package/jsonpath |






<a name=".OracleJob.MeanTask"></a>

### OracleJob.MeanTask
TODO(mgild): implement


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| tasks | [OracleJob.Task](#OracleJob.Task) | repeated |  |






<a name=".OracleJob.MedianTask"></a>

### OracleJob.MedianTask



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| tasks | [OracleJob.Task](#OracleJob.Task) | repeated |  |






<a name=".OracleJob.Task"></a>

### OracleJob.Task



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| http_task | [OracleJob.HttpTask](#OracleJob.HttpTask) | optional |  |
| json_parse_task | [OracleJob.JsonParseTask](#OracleJob.JsonParseTask) | optional |  |
| median_task | [OracleJob.MedianTask](#OracleJob.MedianTask) | optional |  |
| mean_task | [OracleJob.MeanTask](#OracleJob.MeanTask) | optional |  |
| websocket_task | [OracleJob.WebsocketTask](#OracleJob.WebsocketTask) | optional |  |
| ccxt_ws_task | [OracleJob.CcxtWsTask](#OracleJob.CcxtWsTask) | optional |  |






<a name=".OracleJob.WebsocketTask"></a>

### OracleJob.WebsocketTask



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| url | [string](#string) | optional |  |
| subscription | [string](#string) | optional |  |
| max_data_age_seconds | [int32](#int32) | optional |  |
| filter | [string](#string) | optional | Incoming message JSONPath filter. |





 


<a name=".OracleJob.HttpTask.Method"></a>

### OracleJob.HttpTask.Method
An enumeration representing the types of HTTP requests available to make.

| Name | Number | Description |
| ---- | ------ | ----------- |
| METHOD_UNKOWN | 0 |  |
| METHOD_GET | 1 | Perform an HTTP &#39;GET&#39; request. |
| METHOD_POST | 2 | Perform an HTTP &#39;POST&#39; request. |


 

 

 



<a name="switchboard_account_types.proto"></a>
<p align="right"><a href="#top">Top</a></p>

## switchboard_account_types.proto


 


<a name=".SwitchboardAccountType"></a>

### SwitchboardAccountType


| Name | Number | Description |
| ---- | ------ | ----------- |
| TYPE_UNINITIALIZED | 0 |  |
| TYPE_AGGREGATOR | 1 |  |
| TYPE_FULFILLMENT_MANAGER | 2 |  |
| TYPE_JOB_DEFINITION | 3 | These accounts aren&#39;t inited used by users. |
| TYPE_FULFILLMENT_MANAGER_AUTH | 4 |  |


 

 

 



## Scalar Value Types

| .proto Type | Notes | C++ | Java | Python | Go | C# | PHP | Ruby |
| ----------- | ----- | --- | ---- | ------ | -- | -- | --- | ---- |
| <a name="double" /> double |  | double | double | float | float64 | double | float | Float |
| <a name="float" /> float |  | float | float | float | float32 | float | float | Float |
| <a name="int32" /> int32 | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint32 instead. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <a name="int64" /> int64 | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint64 instead. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <a name="uint32" /> uint32 | Uses variable-length encoding. | uint32 | int | int/long | uint32 | uint | integer | Bignum or Fixnum (as required) |
| <a name="uint64" /> uint64 | Uses variable-length encoding. | uint64 | long | int/long | uint64 | ulong | integer/string | Bignum or Fixnum (as required) |
| <a name="sint32" /> sint32 | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int32s. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <a name="sint64" /> sint64 | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int64s. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <a name="fixed32" /> fixed32 | Always four bytes. More efficient than uint32 if values are often greater than 2^28. | uint32 | int | int | uint32 | uint | integer | Bignum or Fixnum (as required) |
| <a name="fixed64" /> fixed64 | Always eight bytes. More efficient than uint64 if values are often greater than 2^56. | uint64 | long | int/long | uint64 | ulong | integer/string | Bignum |
| <a name="sfixed32" /> sfixed32 | Always four bytes. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <a name="sfixed64" /> sfixed64 | Always eight bytes. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <a name="bool" /> bool |  | bool | boolean | boolean | bool | bool | boolean | TrueClass/FalseClass |
| <a name="string" /> string | A string must always contain UTF-8 encoded or 7-bit ASCII text. | string | String | str/unicode | string | string | string | String (UTF-8) |
| <a name="bytes" /> bytes | May contain any arbitrary sequence of bytes. | string | ByteString | str | []byte | ByteString | string | String (ASCII-8BIT) |

