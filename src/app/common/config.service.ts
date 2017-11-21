/*
 * Copyright IBM Corp. 2017
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations under the License.
*/
import { Injectable } from '@angular/core';
const serverConfig = require('./dxconfig/serverConfig.json');
const servicesConfig = require('./dxconfig/servicesConfig.json');

@Injectable()
export class ConfigService {

	public configJSON: any;

	public servicesConfig: any;

	public static loggerOptions: any;

	private sessionId: number;

	constructor() {
		this.configJSON = serverConfig;
		ConfigService.loggerOptions = this.configJSON.logger;
		this.servicesConfig = servicesConfig;
	}

	getSessionId(): number{
		let numOfDigits = 8;
		if (!this.sessionId){
			this.sessionId = Math.floor(Math.pow(10, numOfDigits-1) + Math.random() * 9 * Math.pow(10, numOfDigits-1));
		}
		return this.sessionId;
	};
}
