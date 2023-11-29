/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
let users = new Map();
users.set("Enric", 12345)
users.set("Erik", 12345)
users.set("Pau", 12345)
users.set("Isaac", 12345)
users.set("Pol", 12345)
users.set("Claudia", 12345)
users.set("Alejandro", 12345)

let button = document.getElementById("send")
button.addEventListener("click", function() {
        checkLogin();
    });

function checkLogin() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('pwd').value;
    console.log(password)
    console.log(username)
    if (users.has(username)) {
        if (users.get(username) == password) {
            alert("Login successful!");
        } else {
            alert("Incorrect username or password. Please try again.");
        }
    } else {
        alert("Incorrect username or password. Please try again.");
    }
}
