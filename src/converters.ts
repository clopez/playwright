/**
 * Copyright (c) Microsoft Corporation.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as types from './types';

export function headersObjectToArray(headers: { [key: string]: string }): types.HeadersArray {
  const result: types.HeadersArray = [];
  for (const name in headers) {
    if (!Object.is(headers[name], undefined))
      result.push({ name, value: headers[name] });
  }
  return result;
}

export function headersArrayToObject(headers: types.HeadersArray, lowerCase: boolean): { [key: string]: string } {
  const result: { [key: string]: string } = {};
  for (const { name, value } of headers)
    result[lowerCase ? name.toLowerCase() : name] = value;
  return result;
}
