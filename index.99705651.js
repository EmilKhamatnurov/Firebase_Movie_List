!function(){function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},i=t.parcelRequire3e8b;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var s=Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){r[e]=t},t.parcelRequire3e8b=i),i.register("aaO3d",function(t,n){e(t.exports,"add",function(){return l}),e(t.exports,"get",function(){return u}),e(t.exports,"deleteDocument",function(){return h}),e(t.exports,"updateCheckData",function(){return c}),e(t.exports,"getDate",function(){return d}),i("lmqRc");var r=i("a7hlc");i("1Nsm9");var s=i("dZnwr");// Initialize Firebase
let a=(0,s.initializeApp)({apiKey:"AIzaSyA5wEFjtpxp_RWvduGwMNniD3fHdj6HPDg",authDomain:"movies-76fc7.firebaseapp.com",projectId:"movies-76fc7",storageBucket:"movies-76fc7.appspot.com",messagingSenderId:"674579869220",appId:"1:674579869220:web:7604b99a6c5d4c7072f2b1"}),o=(0,r.getFirestore)(a);async function l(e){try{await (0,r.addDoc)((0,r.collection)(o,"movies"),{name:e.name,date:e.date,status:e.status});// console.log("Document written with ID: ", docRef.id); -- Сообщение о добавлении документа в коллекцию
}catch(e){// console.error("Error adding document: ", e); -- Сообщение об ошибке
}}async function u(){let e=(0,r.query)((0,r.collection)(o,"movies"),(0,r.orderBy)("date")),t=await (0,r.getDocs)(e);return t}async function h(e){console.log(e),await (0,r.deleteDoc)((0,r.doc)(o,"movies",`${e}`))}async function c(e,t){let n=(0,r.doc)(o,"movies",`${e}`);// Изменяем статус фильма
await (0,r.updateDoc)(n,{status:t})}function d(){return(0,r.serverTimestamp)()}}),i.register("lmqRc",function(t,n){e(t.exports,"addDoc",function(){return i("a7hlc").addDoc}),e(t.exports,"collection",function(){return i("a7hlc").collection}),e(t.exports,"deleteDoc",function(){return i("a7hlc").deleteDoc}),e(t.exports,"doc",function(){return i("a7hlc").doc}),e(t.exports,"getDocs",function(){return i("a7hlc").getDocs}),e(t.exports,"getFirestore",function(){return i("a7hlc").getFirestore}),e(t.exports,"orderBy",function(){return i("a7hlc").orderBy}),e(t.exports,"query",function(){return i("a7hlc").query}),e(t.exports,"serverTimestamp",function(){return i("a7hlc").serverTimestamp}),e(t.exports,"updateDoc",function(){return i("a7hlc").updateDoc}),i("a7hlc")}),i.register("a7hlc",function(t,n){e(t.exports,"collection",function(){return iE}),e(t.exports,"doc",function(){return i_}),e(t.exports,"getFirestore",function(){return iI}),e(t.exports,"query",function(){return i0}),e(t.exports,"orderBy",function(){return i4}),e(t.exports,"getDocs",function(){return ss}),e(t.exports,"updateDoc",function(){return sa}),e(t.exports,"deleteDoc",function(){return so}),e(t.exports,"addDoc",function(){return sl}),e(t.exports,"serverTimestamp",function(){return sh});var r,s,a=i("dZnwr"),o=i("lrvMc"),l=i("4Qo5T"),u=i("6zkFe"),h=i("fcjPQ");i("fW3Z9");let c="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Simple wrapper around a nullable UID. Mostly exists to make code more
 * readable.
 */class d{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}/**
     * Returns a key representing this user, suitable for inclusion in a
     * dictionary.
     */toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}/** A user with a null UID. */d.UNAUTHENTICATED=new d(null),// non-FirebaseAuth providers.
d.GOOGLE_CREDENTIALS=new d("google-credentials-uid"),d.FIRST_PARTY=new d("first-party-uid"),d.MOCK_USER=new d("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let f="10.3.1",p=new l.Logger("@firebase/firestore");// Helper methods are needed because variables can't be exported as read/write
function g(){return p.logLevel}function m(e,...t){if(p.logLevel<=l.LogLevel.DEBUG){let n=t.map(w);p.debug(`Firestore (${f}): ${e}`,...n)}}function y(e,...t){if(p.logLevel<=l.LogLevel.ERROR){let n=t.map(w);p.error(`Firestore (${f}): ${e}`,...n)}}/**
 * @internal
 */function v(e,...t){if(p.logLevel<=l.LogLevel.WARN){let n=t.map(w);p.warn(`Firestore (${f}): ${e}`,...n)}}/**
 * Converts an additional log parameter to a string representation.
 */function w(e){if("string"==typeof e)return e;try{/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//** Formats an object as a JSON string, suitable for logging. */return JSON.stringify(e)}catch(t){// Converting to JSON failed, just log the object directly
return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Unconditionally fails, throwing an Error with the given message.
 * Messages are stripped in production builds.
 *
 * Returns `never` and can be used in expressions:
 * @example
 * let futureVar = fail('not implemented yet');
 */function E(e="Unexpected state"){// Log the failure in addition to throw an exception, just in case the
// exception is swallowed.
let t=`FIRESTORE (${f}) INTERNAL ASSERTION FAILED: `+e;// NOTE: We don't use FirestoreError here because these are internal failures
// that cannot be handled by the user. (Also it would create a circular
// dependency between the error and assert modules which doesn't work.)
throw y(t),Error(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _={// Causes are copied from:
// https://github.com/grpc/grpc/blob/bceec94ea4fc5f0085d81235d8e1c06798dc341a/include/grpc%2B%2B/impl/codegen/status_code_enum.h
/** Not an error; returned on success. */OK:"ok",/** The operation was cancelled (typically by the caller). */CANCELLED:"cancelled",/** Unknown error or an error from a different error domain. */UNKNOWN:"unknown",/**
     * Client specified an invalid argument. Note that this differs from
     * FAILED_PRECONDITION. INVALID_ARGUMENT indicates arguments that are
     * problematic regardless of the state of the system (e.g., a malformed file
     * name).
     */INVALID_ARGUMENT:"invalid-argument",/**
     * Deadline expired before operation could complete. For operations that
     * change the state of the system, this error may be returned even if the
     * operation has completed successfully. For example, a successful response
     * from a server could have been delayed long enough for the deadline to
     * expire.
     */DEADLINE_EXCEEDED:"deadline-exceeded",/** Some requested entity (e.g., file or directory) was not found. */NOT_FOUND:"not-found",/**
     * Some entity that we attempted to create (e.g., file or directory) already
     * exists.
     */ALREADY_EXISTS:"already-exists",/**
     * The caller does not have permission to execute the specified operation.
     * PERMISSION_DENIED must not be used for rejections caused by exhausting
     * some resource (use RESOURCE_EXHAUSTED instead for those errors).
     * PERMISSION_DENIED must not be used if the caller can not be identified
     * (use UNAUTHENTICATED instead for those errors).
     */PERMISSION_DENIED:"permission-denied",/**
     * The request does not have valid authentication credentials for the
     * operation.
     */UNAUTHENTICATED:"unauthenticated",/**
     * Some resource has been exhausted, perhaps a per-user quota, or perhaps the
     * entire file system is out of space.
     */RESOURCE_EXHAUSTED:"resource-exhausted",/**
     * Operation was rejected because the system is not in a state required for
     * the operation's execution. For example, directory to be deleted may be
     * non-empty, an rmdir operation is applied to a non-directory, etc.
     *
     * A litmus test that may help a service implementor in deciding
     * between FAILED_PRECONDITION, ABORTED, and UNAVAILABLE:
     *  (a) Use UNAVAILABLE if the client can retry just the failing call.
     *  (b) Use ABORTED if the client should retry at a higher-level
     *      (e.g., restarting a read-modify-write sequence).
     *  (c) Use FAILED_PRECONDITION if the client should not retry until
     *      the system state has been explicitly fixed. E.g., if an "rmdir"
     *      fails because the directory is non-empty, FAILED_PRECONDITION
     *      should be returned since the client should not retry unless
     *      they have first fixed up the directory by deleting files from it.
     *  (d) Use FAILED_PRECONDITION if the client performs conditional
     *      REST Get/Update/Delete on a resource and the resource on the
     *      server does not match the condition. E.g., conflicting
     *      read-modify-write on the same resource.
     */FAILED_PRECONDITION:"failed-precondition",/**
     * The operation was aborted, typically due to a concurrency issue like
     * sequencer check failures, transaction aborts, etc.
     *
     * See litmus test above for deciding between FAILED_PRECONDITION, ABORTED,
     * and UNAVAILABLE.
     */ABORTED:"aborted",/**
     * Operation was attempted past the valid range. E.g., seeking or reading
     * past end of file.
     *
     * Unlike INVALID_ARGUMENT, this error indicates a problem that may be fixed
     * if the system state changes. For example, a 32-bit file system will
     * generate INVALID_ARGUMENT if asked to read at an offset that is not in the
     * range [0,2^32-1], but it will generate OUT_OF_RANGE if asked to read from
     * an offset past the current file size.
     *
     * There is a fair bit of overlap between FAILED_PRECONDITION and
     * OUT_OF_RANGE. We recommend using OUT_OF_RANGE (the more specific error)
     * when it applies so that callers who are iterating through a space can
     * easily look for an OUT_OF_RANGE error to detect when they are done.
     */OUT_OF_RANGE:"out-of-range",/** Operation is not implemented or not supported/enabled in this service. */UNIMPLEMENTED:"unimplemented",/**
     * Internal errors. Means some invariants expected by underlying System has
     * been broken. If you see one of these errors, Something is very broken.
     */INTERNAL:"internal",/**
     * The service is currently unavailable. This is a most likely a transient
     * condition and may be corrected by retrying with a backoff.
     *
     * See litmus test above for deciding between FAILED_PRECONDITION, ABORTED,
     * and UNAVAILABLE.
     */UNAVAILABLE:"unavailable",/** Unrecoverable data loss or corruption. */DATA_LOSS:"data-loss"};/** An error returned by a Firestore operation. */class b extends u.FirebaseError{/** @hideconstructor */constructor(/**
     * The backend error code associated with this error.
     */e,/**
     * A custom error description.
     */t){super(e,t),this.code=e,this.message=t,// class and so inheritance does not work correctly. We could alternatively
// do the same "back-door inheritance" trick that FirebaseError does.
this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}/**
 * A CredentialsProvider that always yields an empty token.
 * @internal
 */class C{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){// Fire with initial user.
e.enqueueRetryable(()=>t(d.UNAUTHENTICATED))}shutdown(){}}/**
 * A CredentialsProvider that always returns a constant token. Used for
 * emulator token mocking.
 */class S{constructor(e){this.token=e,/**
         * Stores the listener registered with setChangeListener()
         * This isn't actually necessary since the UID never changes, but we use this
         * to verify the listen contract is adhered to in tests.
         */this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class A{constructor(e){this.t=e,/** Tracks the current User. */this.currentUser=d.UNAUTHENTICATED,/**
         * Counter used to detect if the token changed while a getToken request was
         * outstanding.
         */this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i,r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve(),i=new T;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new T,e.enqueueRetryable(()=>r(this.currentUser))};let s=()=>{let t=i;e.enqueueRetryable(async()=>{await t.promise,await r(this.currentUser)})},a=e=>{m("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(e=>a(e)),// a chance to register itself with the component framework before we
// determine whether to start up in unauthenticated mode.
setTimeout(()=>{if(!this.auth){let e=this.t.getImmediate({optional:!0});e?a(e):(m("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new T)}},0),s()}getToken(){// Take note of the current value of the tokenCounter so that this method
// can fail (with an ABORTED error) if there is a token change while the
// request is outstanding.
let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>// outstanding so the response is potentially for a previous user (which
    // user, we can't be sure).
    this.i!==e?(m("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?("string"==typeof t.accessToken||E(),new I(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}// Auth.getUid() can return null even with a user logged in. It is because
// getUid() is synchronous, but the auth code populating Uid is asynchronous.
// This method should only be called in the AuthTokenListener callback
// to guarantee to get the actual user.
u(){let e=this.auth&&this.auth.getUid();return null===e||"string"==typeof e||E(),new d(e)}}/*
 * FirstPartyToken provides a fresh token each time its value
 * is requested, because if the token is too old, requests will be rejected.
 * Technically this may no longer be necessary since the SDK should gracefully
 * recover from unauthenticated errors (see b/33147818 for context), but it's
 * safer to keep the implementation as-is.
 */class D{constructor(e,t,n){this.l=e,this.h=t,this.P=n,this.type="FirstParty",this.user=d.FIRST_PARTY,this.I=new Map}/**
     * Gets an authorization token, using a provided factory function, or return
     * null.
     */T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);// Use array notation to prevent minification
let e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}/*
 * Provides user credentials required for the Firestore JavaScript SDK
 * to authenticate the user, using technique that is only available
 * to applications hosted by Google.
 */class N{constructor(e,t,n){this.l=e,this.h=t,this.P=n}getToken(){return Promise.resolve(new D(this.l,this.h,this.P))}start(e,t){// Fire with initial uid.
e.enqueueRetryable(()=>t(d.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class k{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class x{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){let n=e=>{null!=e.error&&m("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);let n=e.token!==this.R;return this.R=e.token,m("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>n(t))};let r=e=>{m("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.A.onInit(e=>r(e)),// a chance to register itself with the component framework.
setTimeout(()=>{if(!this.appCheck){let e=this.A.getImmediate({optional:!0});e?r(e):m("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?("string"==typeof e.token||E(),this.R=e.token,new k(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{static V(){// Alphanumeric characters
let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length,n="";for(;n.length<20;){let r=/**
 * Builds a CredentialsProvider depending on the type of
 * the credentials passed in.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Generates `nBytes` of random bytes.
 *
 * If `nBytes < 0` , an error will be thrown.
 */function(e){// Polyfills for IE and WebWorker by using `self` and `msCrypto` when `crypto` is not available.
let t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let t=0;t<e;t++)n[t]=Math.floor(256*Math.random());return n}(40);for(let i=0;i<r.length;++i)// be evenly mapped to indices of `chars` via a modulo operation.
n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function L(e,t){return e<t?-1:e>t?1:0}/** Helper to compare arrays using isEqual(). */function O(e,t,n){return e.length===t.length&&e.every((e,r)=>n(e,t[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */// The earliest date supported by Firestore timestamps (0001-01-01T00:00:00Z).
/**
 * A `Timestamp` represents a point in time independent of any time zone or
 * calendar, represented as seconds and fractions of seconds at nanosecond
 * resolution in UTC Epoch time.
 *
 * It is encoded using the Proleptic Gregorian Calendar which extends the
 * Gregorian calendar backwards to year one. It is encoded assuming all minutes
 * are 60 seconds long, i.e. leap seconds are "smeared" so that no leap second
 * table is needed for interpretation. Range is from 0001-01-01T00:00:00Z to
 * 9999-12-31T23:59:59.999999999Z.
 *
 * For examples and further specifications, refer to the
 * {@link https://github.com/google/protobuf/blob/master/src/google/protobuf/timestamp.proto | Timestamp definition}.
 */class M{/**
     * Creates a new timestamp.
     *
     * @param seconds - The number of seconds of UTC time since Unix epoch
     *     1970-01-01T00:00:00Z. Must be from 0001-01-01T00:00:00Z to
     *     9999-12-31T23:59:59Z inclusive.
     * @param nanoseconds - The non-negative fractions of a second at nanosecond
     *     resolution. Negative second values with fractions must still have
     *     non-negative nanoseconds values that count forward in time. Must be
     *     from 0 to 999,999,999 inclusive.
     */constructor(/**
     * The number of seconds of UTC time since Unix epoch 1970-01-01T00:00:00Z.
     */e,/**
     * The fractions of a second at nanosecond resolution.*
     */t){if(this.seconds=e,this.nanoseconds=t,t<0||t>=1e9)throw new b(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800||e>=253402300800)throw new b(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}/**
     * Creates a new timestamp with the current date, with millisecond precision.
     *
     * @returns a new timestamp representing the current date.
     */static now(){return M.fromMillis(Date.now())}/**
     * Creates a new timestamp from the given date.
     *
     * @param date - The date to initialize the `Timestamp` from.
     * @returns A new `Timestamp` representing the same point in time as the given
     *     date.
     */static fromDate(e){return M.fromMillis(e.getTime())}/**
     * Creates a new timestamp from the given number of milliseconds.
     *
     * @param milliseconds - Number of milliseconds since Unix epoch
     *     1970-01-01T00:00:00Z.
     * @returns A new `Timestamp` representing the same point in time as the given
     *     number of milliseconds.
     */static fromMillis(e){let t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new M(t,n)}/**
     * Converts a `Timestamp` to a JavaScript `Date` object. This conversion
     * causes a loss of precision since `Date` objects only support millisecond
     * precision.
     *
     * @returns JavaScript `Date` object representing the same point in time as
     *     this `Timestamp`, with millisecond precision.
     */toDate(){return new Date(this.toMillis())}/**
     * Converts a `Timestamp` to a numeric timestamp (in milliseconds since
     * epoch). This operation causes a loss of precision.
     *
     * @returns The point in time corresponding to this timestamp, represented as
     *     the number of milliseconds since Unix epoch 1970-01-01T00:00:00Z.
     */toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?L(this.nanoseconds,e.nanoseconds):L(this.seconds,e.seconds)}/**
     * Returns true if this `Timestamp` is equal to the provided one.
     *
     * @param other - The `Timestamp` to compare against.
     * @returns true if this `Timestamp` is equal to the provided one.
     */isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}/** Returns a textual representation of this `Timestamp`. */toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}/** Returns a JSON-serializable representation of this `Timestamp`. */toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}/**
     * Converts this object to a primitive string, which allows `Timestamp` objects
     * to be compared using the `>`, `<=`, `>=` and `>` operators.
     */valueOf(){// This method returns a string of the form <seconds>.<nanoseconds> where
// <seconds> is translated to have a non-negative value and both <seconds>
// and <nanoseconds> are left-padded with zeroes to be a consistent length.
// Strings with this format then have a lexiographical ordering that matches
// the expected ordering. The <seconds> translation is done to avoid having
// a leading negative sign (i.e. a leading '-' character) in its string
// representation, which would affect its lexiographical ordering.
let e=this.seconds- -62135596800;// Note: Up to 12 decimal digits are required to represent all valid
// 'seconds' values.
return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * A version of a document in Firestore. This corresponds to the version
 * timestamp, such as update_time or read_time.
 */class P{constructor(e){this.timestamp=e}static fromTimestamp(e){return new P(e)}static min(){return new P(new M(0,0))}static max(){return new P(new M(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}/** Returns a number representation of the version for use in spec tests. */toMicroseconds(){// Convert to microseconds.
return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Path represents an ordered sequence of string segments.
 */class F{constructor(e,t,n){void 0===t?t=0:t>e.length&&E(),void 0===n?n=e.length-t:n>e.length-t&&E(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===F.comparator(this,e)}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof F?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}/** The index of one past the last segment of the path. */limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let n=Math.min(e.length,t.length);for(let r=0;r<n;r++){let n=e.get(r),i=t.get(r);if(n<i)return -1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}/**
 * A slash-separated path for navigating resources (documents and collections)
 * within Firestore.
 *
 * @internal
 */class V extends F{construct(e,t,n){return new V(e,t,n)}canonicalString(){// NOTE: The client is ignorant of any path segments containing escape
// sequences (e.g. __id123__) and just passes them through raw (they exist
// for legacy reasons and should not be used frequently).
return this.toArray().join("/")}toString(){return this.canonicalString()}/**
     * Creates a resource path from the given slash-delimited string. If multiple
     * arguments are provided, all components are combined. Leading and trailing
     * slashes from all components are ignored.
     */static fromString(...e){// NOTE: The client is ignorant of any path segments containing escape
// sequences (e.g. __id123__) and just passes them through raw (they exist
// for legacy reasons and should not be used frequently).
let t=[];for(let n of e){if(n.indexOf("//")>=0)throw new b(_.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);// Strip leading and traling slashed.
t.push(...n.split("/").filter(e=>e.length>0))}return new V(t)}static emptyPath(){return new V([])}}let U=/^[_a-zA-Z][_a-zA-Z0-9]*$/;/**
 * A dot-separated path for navigating sub-objects within a document.
 * @internal
 */class B extends F{construct(e,t,n){return new B(e,t,n)}/**
     * Returns true if the string could be used as a segment in a field path
     * without escaping.
     */static isValidIdentifier(e){return U.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),B.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}/**
     * Returns true if this field references the key of a document.
     */isKeyField(){return 1===this.length&&"__name__"===this.get(0)}/**
     * The field designating the key of a document.
     */static keyField(){return new B(["__name__"])}/**
     * Parses a field string from the given server-formatted string.
     *
     * - Splitting the empty string is not allowed (for now at least).
     * - Empty segments within the string (e.g. if there are two consecutive
     *   separators) are not allowed.
     *
     * TODO(b/37244157): we should make this more strict. Right now, it allows
     * non-identifier path components, even if they aren't escaped.
     */static fromServerFormat(e){let t=[],n="",r=0,i=()=>{if(0===n.length)throw new b(_.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""},s=!1;for(;r<e.length;){let t=e[r];if("\\"===t){if(r+1===e.length)throw new b(_.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new b(_.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?s=!s:"."!==t||s?n+=t:i(),r++}if(i(),s)throw new b(_.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new B(t)}static emptyPath(){return new B([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @internal
 */class j{constructor(e){this.path=e}static fromPath(e){return new j(V.fromString(e))}static fromName(e){return new j(V.fromString(e).popFirst(5))}static empty(){return new j(V.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}/** Returns true if the document is in the specified collectionId. */hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}/** Returns the collection group (i.e. the name of the parent collection) for this key. */getCollectionGroup(){return this.path.get(this.path.length-2)}/** Returns the fully qualified path to the parent collection. */getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===V.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return V.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}/**
     * Creates and returns a new document key with the given segments.
     *
     * @param segments - The segments of the path to the document
     * @returns A new instance of DocumentKey
     */static fromSegments(e){return new j(new V(e.slice()))}}/**
 * Stores the latest read time, document and batch ID that were processed for an
 * index.
 */class q{constructor(/**
     * The latest read time version that has been indexed by Firestore for this
     * field index.
     */e,/**
     * The key of the last document that was indexed for this query. Use
     * `DocumentKey.empty()` if no document has been indexed.
     */t,/*
     * The largest mutation batch id that's been processed by Firestore.
     */n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}/** Returns an offset that sorts before all regular offsets. */static min(){return new q(P.min(),j.empty(),-1)}/** Returns an offset that sorts after all regular offsets. */static max(){return new q(P.max(),j.empty(),-1)}}/**
 * A base class representing a persistence transaction, encapsulating both the
 * transaction's sequence numbers as well as a list of onCommitted listeners.
 *
 * When you call Persistence.runTransaction(), it will create a transaction and
 * pass it to your callback. You then pass it to any method that operates
 * on persistence.
 */class ${constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Verifies the error thrown by a LocalStore operation. If a LocalStore
 * operation fails because the primary lease has been taken by another client,
 * we ignore the error (the persistence layer will immediately call
 * `applyPrimaryLease` to propagate the primary state change). All other errors
 * are re-thrown.
 *
 * @param err - An error returned by a LocalStore operation.
 * @returns A Promise that resolves after we recovered, or the original error.
 */async function z(e){if(e.code!==_.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==e.message)throw e;m("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * PersistencePromise is essentially a re-implementation of Promise except
 * it has a .next() method instead of .then() and .next() and .catch() callbacks
 * are executed synchronously when a PersistencePromise resolves rather than
 * asynchronously (Promise implementations use setImmediate() or similar).
 *
 * This is necessary to interoperate with IndexedDB which will automatically
 * commit transactions if control is returned to the event loop without
 * synchronously initiating another operation on the transaction.
 *
 * NOTE: .then() and .catch() only allow a single consumer, unlike normal
 * Promises.
 */class K{constructor(e){// NOTE: next/catchCallback will always point to our own wrapper functions,
// not the user's raw next() or catch() callbacks.
this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,// chaining.
this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&// value should be defined unless T is Void, but we can't express
// that in the type system.
this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&E(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new K((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{let t=e();return t instanceof K?t:K.resolve(t)}catch(e){return K.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):K.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):K.reject(t)}static resolve(e){return new K((t,n)=>{t(e)})}static reject(e){return new K((t,n)=>{n(e)})}static waitFor(// eslint-disable-next-line @typescript-eslint/no-explicit-any
e){return new K((t,n)=>{let r=0,i=0,s=!1;e.forEach(e=>{++r,e.next(()=>{++i,s&&i===r&&t()},e=>n(e))}),s=!0,i===r&&t()})}/**
     * Given an array of predicate functions that asynchronously evaluate to a
     * boolean, implements a short-circuiting `or` between the results. Predicates
     * will be evaluated until one of them returns `true`, then stop. The final
     * result will be whether any of them returned `true`.
     */static or(e){let t=K.resolve(!1);for(let n of e)t=t.next(e=>e?K.resolve(e):n());return t}static forEach(e,t){let n=[];return e.forEach((e,r)=>{n.push(t.call(this,e,r))}),this.waitFor(n)}/**
     * Concurrently map all array elements through asynchronous function.
     */static mapArray(e,t){return new K((n,r)=>{let i=e.length,s=Array(i),a=0;for(let o=0;o<i;o++){let l=o;t(e[l]).next(e=>{s[l]=e,++a===i&&n(s)},e=>r(e))}})}/**
     * An alternative to recursive PersistencePromise calls, that avoids
     * potential memory problems from unbounded chains of promises.
     *
     * The `action` will be called repeatedly while `condition` is true.
     */static doWhile(e,t){return new K((n,r)=>{let i=()=>{!0===e()?t().next(()=>{i()},r):n()};i()})}}/** Verifies whether `e` is an IndexedDbTransactionError. */function G(e){// Use name equality, as instanceof checks on errors don't work with errors
// that wrap other errors.
return"IndexedDbTransactionError"===e.name}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * `ListenSequence` is a monotonic sequence. It is initialized with a minimum value to
 * exceed. All subsequent calls to next will return increasing values. If provided with a
 * `SequenceNumberSyncer`, it will additionally bump its next value when told of a new value, as
 * well as write out sequence numbers that it produces via `next()`.
 */class H{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.oe(e),this._e=e=>t.writeSequenceNumber(e))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this._e&&this._e(e),e}}/** Returns whether the value represents -0. */function Q(e){// Detect if the value is -0.0. Based on polyfill from
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
return 0===e&&1/e==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W(e){let t=0;for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Y(e,t){for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function X(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}H.ae=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */// An immutable sorted map implementation, based on a Left-leaning Red-Black
// tree.
class J{constructor(e,t){this.comparator=e,this.root=t||ee.EMPTY}// Returns a copy of the map, with the specified key/value added or replaced.
insert(e,t){return new J(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ee.BLACK,null,null))}// Returns a copy of the map, with the specified key removed.
remove(e){return new J(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ee.BLACK,null,null))}// Returns the value of the node with the given key, or null.
get(e){let t=this.root;for(;!t.isEmpty();){let n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}// Returns the index of the element in this sorted map, or -1 if it doesn't
// exist.
indexOf(e){// Number of nodes that were pruned when descending right
let t=0,n=this.root;for(;!n.isEmpty();){let r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}// Node not found
return -1}isEmpty(){return this.root.isEmpty()}// Returns the total number of nodes in the map.
get size(){return this.root.size}// Returns the minimum key in the map.
minKey(){return this.root.minKey()}// Returns the maximum key in the map.
maxKey(){return this.root.maxKey()}// Traverses the map in key order and calls the specified action function
// for each key/value pair. If action returns true, traversal is aborted.
// Returns the first truthy value returned by action, or the last falsey
// value returned by action.
inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){let e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}// Traverses the map in reverse key order and calls the specified action
// function for each key/value pair. If action returns true, traversal is
// aborted.
// Returns the first truthy value returned by action, or the last falsey
// value returned by action.
reverseTraversal(e){return this.root.reverseTraversal(e)}// Returns an iterator over the SortedMap.
getIterator(){return new Z(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Z(this.root,e,this.comparator,!1)}getReverseIterator(){return new Z(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Z(this.root,e,this.comparator,!0)}}// end SortedMap
// An iterator over an LLRBNode.
class Z{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){// This node is exactly equal to our start key. Push it on the stack,
// but stop iterating;
this.nodeStack.push(e);break}// This node is greater than our start key, add it to the stack and move
// to the next one
this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}// end SortedMapIterator
// Represents a node in a Left-leaning Red-Black tree.
class ee{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:ee.RED,this.left=null!=r?r:ee.EMPTY,this.right=null!=i?i:ee.EMPTY,this.size=this.left.size+1+this.right.size}// Returns a copy of the current node, optionally replacing pieces of it.
copy(e,t,n,r,i){return new ee(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}// Traverses the tree in key order and calls the specified action function
// for each node. If action returns true, traversal is aborted.
// Returns the first truthy value returned by action, or the last falsey
// value returned by action.
inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}// Traverses the tree in reverse key order and calls the specified action
// function for each node. If action returns true, traversal is aborted.
// Returns the first truthy value returned by action, or the last falsey
// value returned by action.
reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}// Returns the minimum node in the tree.
min(){return this.left.isEmpty()?this:this.left.min()}// Returns the maximum key in the tree.
minKey(){return this.min().key}// Returns the maximum key in the tree.
maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}// Returns new tree, with the key/value added.
insert(e,t,n){let r=this,i=n(e,r.key);return(r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n))).fixUp()}removeMin(){if(this.left.isEmpty())return ee.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()}// Returns new tree, with the specified item removed.
remove(e,t){let n,r=this;if(0>t(e,r.key))r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return ee.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}// Returns new tree after performing any needed rotations.
fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}rotateLeft(){let e=this.copy(null,null,ee.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,ee.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}// For testing.
checkMaxDepth(){let e=this.check();return Math.pow(2,e)<=this.size+1}// In a balanced RB tree, the black-depth (number of black nodes) from root to
// leaves is equal on both sides.  This function verifies that or asserts.
check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw E();let e=this.left.check();if(e!==this.right.check())throw E();return e+(this.isRed()?0:1)}}// end LLRBNode
// Empty node is shared between all LLRB trees.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
ee.EMPTY=null,ee.RED=!0,ee.BLACK=!1,// end LLRBEmptyNode
ee.EMPTY=new class{constructor(){this.size=0}get key(){throw E()}get value(){throw E()}get color(){throw E()}get left(){throw E()}get right(){throw E()}// Returns a copy of the current node.
copy(e,t,n,r,i){return this}// Returns a copy of the tree, with the specified key/value added.
insert(e,t,n){return new ee(e,t)}// Returns a copy of the tree, with the specified key removed.
remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}// For testing.
checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * SortedSet is an immutable (copy-on-write) collection that holds elements
 * in order specified by the provided comparator.
 *
 * NOTE: if provided comparator returns 0 for two elements, we consider them to
 * be equal!
 */class et{constructor(e){this.comparator=e,this.data=new J(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}/** Iterates elements in order defined by "comparator" */forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}/** Iterates over `elem`s such that: range[0] &lt;= elem &lt; range[1]. */forEachInRange(e,t){let n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){let r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}/**
     * Iterates over `elem`s such that: start &lt;= elem until false is returned.
     */forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}/** Finds the least element greater than or equal to `elem`. */firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new en(this.data.getIterator())}getIteratorFrom(e){return new en(this.data.getIteratorFrom(e))}/** Inserts or updates an element */add(e){return this.copy(this.data.remove(e).insert(e,!0))}/** Deletes an element */delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;// Make sure `result` always refers to the larger one of the two sets.
return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof et)||this.size!==e.size)return!1;let t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){let e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new et(this.comparator);return t.data=e,t}}class en{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Provides a set of fields that can be used to partially patch a document.
 * FieldMask is used in conjunction with ObjectValue.
 * Examples:
 *   foo - Overwrites foo entirely with the provided value. If foo is not
 *         present in the companion ObjectValue, the field is deleted.
 *   foo.bar - Overwrites only the field bar of the object foo.
 *             If foo is not an object, foo is replaced with an object
 *             containing foo
 */class er{constructor(e){this.fields=e,// Sort the field mask to support `FieldMask.isEqual()` and assert below.
e.sort(B.comparator)}static empty(){return new er([])}/**
     * Returns a new FieldMask object that is the result of adding all the given
     * fields paths to this field mask.
     */unionWith(e){let t=new et(B.comparator);for(let e of this.fields)t=t.add(e);for(let n of e)t=t.add(n);return new er(t.toArray())}/**
     * Verifies that `fieldPath` is included by at least one field in this field
     * mask.
     *
     * This is an O(n) operation, where `n` is the size of the field mask.
     */covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return O(this.fields,e.fields,(e,t)=>e.isEqual(t))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * An error encountered while decoding base64 string.
 */class ei extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Immutable class that represents a "proto" byte string.
 *
 * Proto byte strings can either be Base64-encoded strings or Uint8Arrays when
 * sent on the wire. This class abstracts away this differentiation by holding
 * the proto byte string in a common class that must be converted into a string
 * before being sent as a proto.
 * @internal
 */class es{constructor(e){this.binaryString=e}static fromBase64String(e){let t=function(e){try{return atob(e)}catch(e){// Check that `DOMException` is defined before using it to avoid
// "ReferenceError: Property 'DOMException' doesn't exist" in react-native.
// (https://github.com/firebase/firebase-js-sdk/issues/7115)
throw"undefined"!=typeof DOMException&&e instanceof DOMException?new ei("Invalid base64 string: "+e):e}}(e);return new es(t)}static fromUint8Array(e){// TODO(indexing); Remove the copy of the byte string here as this method
// is frequently called during indexing.
let t=/**
 * Helper function to convert an Uint8array to a binary string.
 */function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new es(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return btoa(this.binaryString)}toUint8Array(){return function(e){let t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return L(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}es.EMPTY_BYTE_STRING=new es("");let ea=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);/**
 * Converts the possible Proto values for a timestamp value into a "seconds and
 * nanos" representation.
 */function eo(e){// The json interface (for the browser) will return an iso timestamp string,
// while the proto js library (for node) will return a
// google.protobuf.Timestamp instance.
if(e||E(),"string"==typeof e){// The date string can have higher precision (nanos) than the Date class
// (millis), so we do some custom parsing here.
// Parse the nanos right out of the string.
let t=0,n=ea.exec(e);if(n||E(),n[1]){// Pad the fraction out to 9 digits (nanos).
let e=n[1];t=Number(e=(e+"000000000").substr(0,9))}// Parse the date to get the seconds.
let r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:el(e.seconds),nanos:el(e.nanos)}}/**
 * Converts the possible Proto types for numbers into a JavaScript number.
 * Returns 0 if the value is not numeric.
 */function el(e){// TODO(bjornick): Handle int64 greater than 53 bits.
return"number"==typeof e?e:"string"==typeof e?Number(e):0}/** Converts the possible Proto types for Blobs into a ByteString. */function eu(e){return"string"==typeof e?es.fromBase64String(e):es.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Represents a locally-applied ServerTimestamp.
 *
 * Server Timestamps are backed by MapValues that contain an internal field
 * `__type__` with a value of `server_timestamp`. The previous value and local
 * write time are stored in its `__previous_value__` and `__local_write_time__`
 * fields respectively.
 *
 * Notes:
 * - ServerTimestampValue instances are created as the result of applying a
 *   transform. They can only exist in the local view of a document. Therefore
 *   they do not need to be parsed or serialized.
 * - When evaluated locally (e.g. for snapshot.data()), they by default
 *   evaluate to `null`. This behavior can be configured by passing custom
 *   FieldValueOptions to value().
 * - With respect to other ServerTimestampValues, they sort by their
 *   localWriteTime.
 */function eh(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}/**
 * Creates a new ServerTimestamp proto value (using the internal format).
 *//**
 * Returns the value of the field before this ServerTimestamp was set.
 *
 * Preserving the previous values allows the user to display the last resoled
 * value until the backend responds with the timestamp.
 */function ec(e){let t=e.mapValue.fields.__previous_value__;return eh(t)?ec(t):t}/**
 * Returns the local time at which this timestamp was first set.
 */function ed(e){let t=eo(e.mapValue.fields.__local_write_time__.timestampValue);return new M(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{/**
     * Constructs a DatabaseInfo using the provided host, databaseId and
     * persistenceKey.
     *
     * @param databaseId - The database to use.
     * @param appId - The Firebase App Id.
     * @param persistenceKey - A unique identifier for this Firestore's local
     * storage (used in conjunction with the databaseId).
     * @param host - The Firestore backend host to connect to.
     * @param ssl - Whether to use SSL when connecting.
     * @param forceLongPolling - Whether to use the forceLongPolling option
     * when using WebChannel as the network transport.
     * @param autoDetectLongPolling - Whether to use the detectBufferingProxy
     * option when using WebChannel as the network transport.
     * @param longPollingOptions Options that configure long-polling.
     * @param useFetchStreams Whether to use the Fetch API instead of
     * XMLHTTPRequest
     */constructor(e,t,n,r,i,s,a,o,l){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.longPollingOptions=o,this.useFetchStreams=l}}/** The default database name for a project. *//**
 * Represents the database ID a Firestore client is associated with.
 * @internal
 */class ep{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new ep("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof ep&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eg={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};/** Extracts the backend's type order for the provided value. */function em(e){return"nullValue"in e?0/* TypeOrder.NullValue */:"booleanValue"in e?1/* TypeOrder.BooleanValue */:"integerValue"in e||"doubleValue"in e?2/* TypeOrder.NumberValue */:"timestampValue"in e?3/* TypeOrder.TimestampValue */:"stringValue"in e?5/* TypeOrder.StringValue */:"bytesValue"in e?6/* TypeOrder.BlobValue */:"referenceValue"in e?7/* TypeOrder.RefValue */:"geoPointValue"in e?8/* TypeOrder.GeoPointValue */:"arrayValue"in e?9/* TypeOrder.ArrayValue */:"mapValue"in e?eh(e)?4/* TypeOrder.ServerTimestampValue */:eN(e)?9007199254740991/* TypeOrder.MaxValue */:10/* TypeOrder.ObjectValue */:E()}/** Tests `left` and `right` for equality based on the backend semantics. */function ey(e,t){if(e===t)return!0;let n=em(e);if(n!==em(t))return!1;switch(n){case 0/* TypeOrder.NullValue */:case 9007199254740991/* TypeOrder.MaxValue */:return!0;case 1/* TypeOrder.BooleanValue */:return e.booleanValue===t.booleanValue;case 4/* TypeOrder.ServerTimestampValue */:return ed(e).isEqual(ed(t));case 3/* TypeOrder.TimestampValue */:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;let n=eo(e.timestampValue),r=eo(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5/* TypeOrder.StringValue */:return e.stringValue===t.stringValue;case 6/* TypeOrder.BlobValue */:return eu(e.bytesValue).isEqual(eu(t.bytesValue));case 7/* TypeOrder.RefValue */:return e.referenceValue===t.referenceValue;case 8/* TypeOrder.GeoPointValue */:return el(e.geoPointValue.latitude)===el(t.geoPointValue.latitude)&&el(e.geoPointValue.longitude)===el(t.geoPointValue.longitude);case 2/* TypeOrder.NumberValue */:return function(e,t){if("integerValue"in e&&"integerValue"in t)return el(e.integerValue)===el(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){let n=el(e.doubleValue),r=el(t.doubleValue);return n===r?Q(n)===Q(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9/* TypeOrder.ArrayValue */:return O(e.arrayValue.values||[],t.arrayValue.values||[],ey);case 10/* TypeOrder.ObjectValue */:return function(e,t){let n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(W(n)!==W(r))return!1;for(let e in n)if(n.hasOwnProperty(e)&&(void 0===r[e]||!ey(n[e],r[e])))return!1;return!0}(e,t);default:return E()}}function ev(e,t){return void 0!==(e.values||[]).find(e=>ey(e,t))}function ew(e,t){if(e===t)return 0;let n=em(e),r=em(t);if(n!==r)return L(n,r);switch(n){case 0/* TypeOrder.NullValue */:case 9007199254740991/* TypeOrder.MaxValue */:return 0;case 1/* TypeOrder.BooleanValue */:return L(e.booleanValue,t.booleanValue);case 2/* TypeOrder.NumberValue */:return function(e,t){let n=el(e.integerValue||e.doubleValue),r=el(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3/* TypeOrder.TimestampValue */:return eE(e.timestampValue,t.timestampValue);case 4/* TypeOrder.ServerTimestampValue */:return eE(ed(e),ed(t));case 5/* TypeOrder.StringValue */:return L(e.stringValue,t.stringValue);case 6/* TypeOrder.BlobValue */:return function(e,t){let n=eu(e),r=eu(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7/* TypeOrder.RefValue */:return function(e,t){let n=e.split("/"),r=t.split("/");for(let e=0;e<n.length&&e<r.length;e++){let t=L(n[e],r[e]);if(0!==t)return t}return L(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8/* TypeOrder.GeoPointValue */:return function(e,t){let n=L(el(e.latitude),el(t.latitude));return 0!==n?n:L(el(e.longitude),el(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9/* TypeOrder.ArrayValue */:return function(e,t){let n=e.values||[],r=t.values||[];for(let e=0;e<n.length&&e<r.length;++e){let t=ew(n[e],r[e]);if(t)return t}return L(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10/* TypeOrder.ObjectValue */:return function(e,t){if(e===eg.mapValue&&t===eg.mapValue)return 0;if(e===eg.mapValue)return 1;if(t===eg.mapValue)return -1;let n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);// Even though MapValues are likely sorted correctly based on their insertion
// order (e.g. when received from the backend), local modifications can bring
// elements out of order. We need to re-sort the elements to ensure that
// canonical IDs are independent of insertion order.
r.sort(),s.sort();for(let e=0;e<r.length&&e<s.length;++e){let t=L(r[e],s[e]);if(0!==t)return t;let a=ew(n[r[e]],i[s[e]]);if(0!==a)return a}return L(r.length,s.length)}(e.mapValue,t.mapValue);default:throw E()}}function eE(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return L(e,t);let n=eo(e),r=eo(t),i=L(n.seconds,r.seconds);return 0!==i?i:L(n.nanos,r.nanos)}function e_(e){var t,n;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){let t=eo(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?eu(e.bytesValue).toBase64():"referenceValue"in e?(t=e.referenceValue,j.fromName(t).toString()):"geoPointValue"in e?(n=e.geoPointValue,`geo(${n.latitude},${n.longitude})`):"arrayValue"in e?function(e){let t="[",n=!0;for(let r of e.values||[])n?n=!1:t+=",",t+=e_(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){// Iteration order in JavaScript is not guaranteed. To ensure that we generate
// matching canonical IDs for identical maps, we need to sort the keys.
let t=Object.keys(e.fields||{}).sort(),n="{",r=!0;for(let i of t)r?r=!1:n+=",",n+=`${i}:${e_(e.fields[i])}`;return n+"}"}(e.mapValue):E()}function eb(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}/** Returns true if `value` is an IntegerValue . */function eT(e){return!!e&&"integerValue"in e}/** Returns true if `value` is a DoubleValue. *//** Returns true if `value` is an ArrayValue. */function eI(e){return!!e&&"arrayValue"in e}/** Returns true if `value` is a NullValue. */function eC(e){return!!e&&"nullValue"in e}/** Returns true if `value` is NaN. */function eS(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}/** Returns true if `value` is a MapValue. */function eA(e){return!!e&&"mapValue"in e}/** Creates a deep copy of `source`. */function eD(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){let t={mapValue:{fields:{}}};return Y(e.mapValue.fields,(e,n)=>t.mapValue.fields[e]=eD(n)),t}if(e.arrayValue){let t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=eD(e.arrayValue.values[n]);return t}return Object.assign({},e)}/** Returns true if the Value represents the canonical {@link #MAX_VALUE} . */function eN(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * An ObjectValue represents a MapValue in the Firestore Proto and offers the
 * ability to add and remove fields (via the ObjectValueBuilder).
 */class ek{constructor(e){this.value=e}static empty(){return new ek({mapValue:{}})}/**
     * Returns the value at the given path or null.
     *
     * @param path - the path to search
     * @returns The value at the path or null if the path is not set.
     */field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(!eA(t=(t.mapValue.fields||{})[e.get(n)]))return null;return(t=(t.mapValue.fields||{})[e.lastSegment()])||null}}/**
     * Sets the field to the provided value.
     *
     * @param path - The field path to set.
     * @param value - The value to set.
     */set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=eD(t)}/**
     * Sets the provided fields to the provided values.
     *
     * @param data - A map of fields to values (or null for deletes).
     */setAll(e){let t=B.emptyPath(),n={},r=[];e.forEach((e,i)=>{if(!t.isImmediateParentOf(i)){// Insert the accumulated changes at this parent location
let e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=eD(e):r.push(i.lastSegment())});let i=this.getFieldsMap(t);this.applyChanges(i,n,r)}/**
     * Removes the field at the specified path. If there is no field at the
     * specified path, nothing is changed.
     *
     * @param path - The field path to remove.
     */delete(e){let t=this.field(e.popLast());eA(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ey(this.value,e.value)}/**
     * Returns the map that contains the leaf element of `path`. If the parent
     * entry does not yet exist, or if it is not a map, a new map will be created.
     */getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];eA(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}/**
     * Modifies `fieldsMap` by adding, replacing or deleting the specified
     * entries.
     */applyChanges(e,t,n){for(let r of(Y(t,(t,n)=>e[t]=n),n))delete e[r]}clone(){return new ek(eD(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Represents a document in Firestore with a key, version, data and whether it
 * has local mutations applied to it.
 *
 * Documents can transition between states via `convertToFoundDocument()`,
 * `convertToNoDocument()` and `convertToUnknownDocument()`. If a document does
 * not transition to one of these states even after all mutations have been
 * applied, `isValidDocument()` returns false and the document should be removed
 * from all views.
 */class ex{constructor(e,t,n,r,i,s,a){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=a}/**
     * Creates a document with no known version or data, but which can serve as
     * base document for mutations.
     */static newInvalidDocument(e){return new ex(e,0/* DocumentType.INVALID */,/* version */P.min(),/* readTime */P.min(),/* createTime */P.min(),ek.empty(),0/* DocumentState.SYNCED */)}/**
     * Creates a new document that is known to exist with the given data at the
     * given version.
     */static newFoundDocument(e,t,n,r){return new ex(e,1/* DocumentType.FOUND_DOCUMENT */,/* version */t,/* readTime */P.min(),/* createTime */n,r,0/* DocumentState.SYNCED */)}/** Creates a new document that is known to not exist at the given version. */static newNoDocument(e,t){return new ex(e,2/* DocumentType.NO_DOCUMENT */,/* version */t,/* readTime */P.min(),/* createTime */P.min(),ek.empty(),0/* DocumentState.SYNCED */)}/**
     * Creates a new document that is known to exist at the given version but
     * whose data is not known (e.g. a document that was updated without a known
     * base document).
     */static newUnknownDocument(e,t){return new ex(e,3/* DocumentType.UNKNOWN_DOCUMENT */,/* version */t,/* readTime */P.min(),/* createTime */P.min(),ek.empty(),2/* DocumentState.HAS_COMMITTED_MUTATIONS */)}/**
     * Changes the document type to indicate that it exists and that its version
     * and data are known.
     */convertToFoundDocument(e,t){// If a document is switching state from being an invalid or deleted
// document to a valid (FOUND_DOCUMENT) document, either due to receiving an
// update from Watch or due to applying a local set mutation on top
// of a deleted document, our best guess about its createTime would be the
// version at which the document transitioned to a FOUND_DOCUMENT.
return this.createTime.isEqual(P.min())&&(2/* DocumentType.NO_DOCUMENT */===this.documentType||0/* DocumentType.INVALID */===this.documentType)&&(this.createTime=e),this.version=e,this.documentType=1/* DocumentType.FOUND_DOCUMENT */,this.data=t,this.documentState=0/* DocumentState.SYNCED */,this}/**
     * Changes the document type to indicate that it doesn't exist at the given
     * version.
     */convertToNoDocument(e){return this.version=e,this.documentType=2/* DocumentType.NO_DOCUMENT */,this.data=ek.empty(),this.documentState=0/* DocumentState.SYNCED */,this}/**
     * Changes the document type to indicate that it exists at a given version but
     * that its data is not known (e.g. a document that was updated without a known
     * base document).
     */convertToUnknownDocument(e){return this.version=e,this.documentType=3/* DocumentType.UNKNOWN_DOCUMENT */,this.data=ek.empty(),this.documentState=2/* DocumentState.HAS_COMMITTED_MUTATIONS */,this}setHasCommittedMutations(){return this.documentState=2/* DocumentState.HAS_COMMITTED_MUTATIONS */,this}setHasLocalMutations(){return this.documentState=1/* DocumentState.HAS_LOCAL_MUTATIONS */,this.version=P.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1/* DocumentState.HAS_LOCAL_MUTATIONS */===this.documentState}get hasCommittedMutations(){return 2/* DocumentState.HAS_COMMITTED_MUTATIONS */===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0/* DocumentType.INVALID */!==this.documentType}isFoundDocument(){return 1/* DocumentType.FOUND_DOCUMENT */===this.documentType}isNoDocument(){return 2/* DocumentType.NO_DOCUMENT */===this.documentType}isUnknownDocument(){return 3/* DocumentType.UNKNOWN_DOCUMENT */===this.documentType}isEqual(e){return e instanceof ex&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ex(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * Compares the value for field `field` in the provided documents. Throws if
 * the field does not exist in both documents.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Represents a bound of a query.
 *
 * The bound is specified with the given components representing a position and
 * whether it's just before or just after the position (relative to whatever the
 * query order is).
 *
 * The position represents a logical index position for a query. It's a prefix
 * of values for the (potentially implicit) order by clauses of a query.
 *
 * Bound provides a function to determine whether a document comes before or
 * after a bound. This is influenced by whether the position is just before or
 * just after the provided values.
 */class eR{constructor(e,t){this.position=e,this.inclusive=t}}function eL(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){let s=t[i],a=e.position[i];if(r=s.field.isKeyField()?j.comparator(j.fromName(a.referenceValue),n.key):ew(a,n.data.field(s.field)),"desc"/* Direction.DESCENDING */===s.dir&&(r*=-1),0!==r)break}return r}/**
 * Returns true if a document sorts after a bound using the provided sort
 * order.
 */function eO(e,t){if(null===e)return null===t;if(null===t||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!ey(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * An ordering on a field, in some Direction. Direction defaults to ASCENDING.
 */class eM{constructor(e,t="asc"/* Direction.ASCENDING */){this.field=e,this.dir=t}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eP{}class eF extends eP{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}/**
     * Creates a filter based on the provided arguments.
     */static create(e,t,n){return e.isKeyField()?"in"/* Operator.IN */===t||"not-in"/* Operator.NOT_IN */===t?this.createKeyFieldInFilter(e,t,n):new ej(e,t,n):"array-contains"/* Operator.ARRAY_CONTAINS */===t?new eK(e,n):"in"/* Operator.IN */===t?new eG(e,n):"not-in"/* Operator.NOT_IN */===t?new eH(e,n):"array-contains-any"/* Operator.ARRAY_CONTAINS_ANY */===t?new eQ(e,n):new eF(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"/* Operator.IN */===t?new eq(e,n):new e$(e,n)}matches(e){let t=e.data.field(this.field);// Types do not have to match in NOT_EQUAL filters.
return"!="/* Operator.NOT_EQUAL */===this.op?null!==t&&this.matchesComparison(ew(t,this.value)):null!==t&&em(this.value)===em(t)&&this.matchesComparison(ew(t,this.value));// Only compare types with matching backend order (such as double and int).
}matchesComparison(e){switch(this.op){case"<"/* Operator.LESS_THAN */:return e<0;case"<="/* Operator.LESS_THAN_OR_EQUAL */:return e<=0;case"=="/* Operator.EQUAL */:return 0===e;case"!="/* Operator.NOT_EQUAL */:return 0!==e;case">"/* Operator.GREATER_THAN */:return e>0;case">="/* Operator.GREATER_THAN_OR_EQUAL */:return e>=0;default:return E()}}isInequality(){return["<"/* Operator.LESS_THAN */,"<="/* Operator.LESS_THAN_OR_EQUAL */,">"/* Operator.GREATER_THAN */,">="/* Operator.GREATER_THAN_OR_EQUAL */,"!="/* Operator.NOT_EQUAL */,"not-in"/* Operator.NOT_IN */].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class eV extends eP{constructor(e,t){super(),this.filters=e,this.op=t,this.ce=null}/**
     * Creates a filter based on the provided arguments.
     */static create(e,t){return new eV(e,t)}matches(e){return eU(this)?void 0===this.filters.find(t=>!t.matches(e)):void 0!==this.filters.find(t=>t.matches(e))}getFlattenedFilters(){return null!==this.ce||(this.ce=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ce}// Returns a mutable copy of `this.filters`
getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){let e=this.le(e=>e.isInequality());return null!==e?e.field:null}// Performs a depth-first search to find and return the first FieldFilter in the composite filter
// that satisfies the predicate. Returns `null` if none of the FieldFilters satisfy the
// predicate.
le(e){for(let t of this.getFlattenedFilters())if(e(t))return t;return null}}function eU(e){return"and"/* CompositeOperator.AND */===e.op}/**
 * Returns true if this filter does not contain any composite filters. Returns false otherwise.
 */function eB(e){for(let t of e.filters)if(t instanceof eV)return!1;return!0}class ej extends eF{constructor(e,t,n){super(e,t,n),this.key=j.fromName(n.referenceValue)}matches(e){let t=j.comparator(e.key,this.key);return this.matchesComparison(t)}}/** Filter that matches on key fields within an array. */class eq extends eF{constructor(e,t){super(e,"in"/* Operator.IN */,t),this.keys=ez("in"/* Operator.IN */,t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}/** Filter that matches on key fields not present within an array. */class e$ extends eF{constructor(e,t){super(e,"not-in"/* Operator.NOT_IN */,t),this.keys=ez("not-in"/* Operator.NOT_IN */,t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function ez(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map(e=>j.fromName(e.referenceValue))}/** A Filter that implements the array-contains operator. */class eK extends eF{constructor(e,t){super(e,"array-contains"/* Operator.ARRAY_CONTAINS */,t)}matches(e){let t=e.data.field(this.field);return eI(t)&&ev(t.arrayValue,this.value)}}/** A Filter that implements the IN operator. */class eG extends eF{constructor(e,t){super(e,"in"/* Operator.IN */,t)}matches(e){let t=e.data.field(this.field);return null!==t&&ev(this.value.arrayValue,t)}}/** A Filter that implements the not-in operator. */class eH extends eF{constructor(e,t){super(e,"not-in"/* Operator.NOT_IN */,t)}matches(e){if(ev(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return null!==t&&!ev(this.value.arrayValue,t)}}/** A Filter that implements the array-contains-any operator. */class eQ extends eF{constructor(e,t){super(e,"array-contains-any"/* Operator.ARRAY_CONTAINS_ANY */,t)}matches(e){let t=e.data.field(this.field);return!(!eI(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>ev(this.value.arrayValue,e))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */// Visible for testing
class eW{constructor(e,t=null,n=[],r=[],i=null,s=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=a,this.he=null}}/**
 * Initializes a Target with a path and optional additional query constraints.
 * Path must currently be empty if this is a collection group query.
 *
 * NOTE: you should always construct `Target` from `Query.toTarget` instead of
 * using this factory method, because `Query` provides an implicit `orderBy`
 * property.
 */function eY(e,t=null,n=[],r=[],i=null,s=null,a=null){return new eW(e,t,n,r,i,s,a)}function eX(e){if(null===e.he){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:"+e.filters.map(e=>(function e(t){if(t instanceof eF)// the same description, such as the int 3 and the string "3". So we should
    // add the types in here somehow, too.
    return t.field.canonicalString()+t.op.toString()+e_(t.value);if(eB(t)&&eU(t))// In the new SDK versions, the developer may use an explicit AND filter.
    // To stay consistent with the old usages, we add a special case to ensure
    // the canonical ID for these two are the same. For example:
    // `col.whereEquals("a", 1).whereEquals("b", 2)` should have the same
    // canonical ID as `col.where(and(equals("a",1), equals("b",2)))`.
    return t.filters.map(t=>e(t)).join(",");{// filter instanceof CompositeFilter
    let n=t.filters.map(t=>e(t)).join(",");return`${t.op}(${n})`}})(e)).join(",")+"|ob:"+e.orderBy.map(e=>e.field.canonicalString()+e.dir).join(","),null==e.limit||(t+="|l:"+e.limit),e.startAt&&(t+="|lb:"+(e.startAt.inclusive?"b:":"a:")+e.startAt.position.map(e=>e_(e)).join(",")),e.endAt&&(t+="|ub:"+(e.endAt.inclusive?"a:":"b:")+e.endAt.position.map(e=>e_(e)).join(",")),e.he=t}return e.he}function eJ(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++){var n,r;if(n=e.orderBy[i],r=t.orderBy[i],!(n.dir===r.dir&&n.field.isEqual(r.field)))return!1}if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!function e(t,n){return t instanceof eF?n instanceof eF&&t.op===n.op&&t.field.isEqual(n.field)&&ey(t.value,n.value):t instanceof eV?n instanceof eV&&t.op===n.op&&t.filters.length===n.filters.length&&t.filters.reduce((t,r,i)=>t&&e(r,n.filters[i]),!0):void E()}(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!eO(e.startAt,t.startAt)&&eO(e.endAt,t.endAt)}function eZ(e){return j.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}/** Returns the number of segments of a perfect index for this target. *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Query encapsulates all the query attributes we support in the SDK. It can
 * be run against the LocalStore, as well as be converted to a `Target` to
 * query the RemoteStore results.
 *
 * Visible for testing.
 */class e0{/**
     * Initializes a Query with a path and optional additional query constraints.
     * Path must currently be empty if this is a collection group query.
     */constructor(e,t=null,n=[],r=[],i=null,s="F"/* LimitType.First */,a=null,o=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=a,this.endAt=o,this.Pe=null,// non-aggregate queries.
this.Ie=null,// aggregate queries. Unlike targets for non-aggregate queries,
// aggregate query targets do not contain normalized order-bys, they only
// contain explicit order-bys.
this.de=null,this.startAt,this.endAt}}/**
 * Helper to convert a collection group query into a collection query at a
 * specific path. This is used when executing collection group queries, since
 * we have to split the query into a set of collection queries at multiple
 * paths.
 *//**
 * Returns true if this query does not specify any query constraints that
 * could remove results.
 */function e1(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function e2(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function e9(e){for(let t of e.filters){let e=t.getFirstInequalityField();if(null!==e)return e}return null}/**
 * Creates a new Query for a collection group query that matches all documents
 * within the provided collection group.
 *//**
 * Returns whether the query matches a collection group rather than a specific
 * collection.
 */function e4(e){return null!==e.collectionGroup}/**
 * Returns the normalized order-by constraint that is used to execute the Query,
 * which can be different from the order-by constraints the user provided (e.g.
 * the SDK and backend always orders by `__name__`). The normalized order-by
 * includes implicit order-bys in addition to the explicit user provided
 * order-bys.
 */function e6(e){if(null===e.Pe){e.Pe=[];let t=e9(e),n=e2(e);if(null!==t&&null===n)// inequality filter field for it to be a valid query.
// Note that the default inequality field and key ordering is ascending.
t.isKeyField()||e.Pe.push(new eM(t)),e.Pe.push(new eM(B.keyField(),"asc"/* Direction.ASCENDING */));else{let t=!1;for(let n of e.explicitOrderBy)e.Pe.push(n),n.field.isKeyField()&&(t=!0);if(!t){// The order of the implicit key ordering always matches the last
// explicit order-by
let t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc"/* Direction.ASCENDING */;e.Pe.push(new eM(B.keyField(),t))}}}return e.Pe}/**
 * Converts this `Query` instance to its corresponding `Target` representation.
 */function e5(e){return e.Ie||(e.Ie=/**
 * Converts this `Query` instance to its corresponding `Target` representation,
 * for use within an aggregate query. Unlike targets for non-aggregate queries,
 * aggregate query targets do not contain normalized order-bys, they only
 * contain explicit order-bys.
 */function(e,t){if("F"/* LimitType.First */===e.limitType)return eY(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{// Flip the orderBy directions since we want the last results
t=t.map(e=>{let t="desc"/* Direction.DESCENDING */===e.dir?"asc"/* Direction.ASCENDING */:"desc"/* Direction.DESCENDING */;return new eM(e.field,t)});// We need to swap the cursors to match the now-flipped query ordering.
let n=e.endAt?new eR(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new eR(e.startAt.position,e.startAt.inclusive):null;// Now return as a LimitType.First query.
return eY(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}(e,e6(e))),e.Ie}function e3(e,t){t.getFirstInequalityField(),e9(e);let n=e.filters.concat([t]);return new e0(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function e7(e,t,n){return new e0(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function e8(e,t){return eJ(e5(e),e5(t))&&e.limitType===t.limitType}// TODO(b/29183165): This is used to get a unique string from a query to, for
// example, use as a dictionary key, but the implementation is subject to
// collisions. Make it collision-free.
function te(e){return`${eX(e5(e))}|lt:${e.limitType}`}function tt(e){var t;let n;return`Query(target=${n=(t=e5(e)).path.canonicalString(),null!==t.collectionGroup&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(e=>/** Returns a debug description for `filter`. */(function e(t){return t instanceof eF?`${t.field.canonicalString()} ${t.op} ${e_(t.value)}`:t instanceof eV?t.op.toString()+" {"+t.getFilters().map(e).join(" ,")+"}":"Filter"})(e)).join(", ")}]`),null==t.limit||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(e=>`${e.field.canonicalString()} (${e.dir})`).join(", ")}]`),t.startAt&&(n+=", startAt: "+(t.startAt.inclusive?"b:":"a:")+t.startAt.position.map(e=>e_(e)).join(",")),t.endAt&&(n+=", endAt: "+(t.endAt.inclusive?"a:":"b:")+t.endAt.position.map(e=>e_(e)).join(",")),`Target(${n})`}; limitType=${e.limitType})`}/** Returns whether `doc` matches the constraints of `query`. */function tn(e,t){return t.isFoundDocument()&&function(e,t){let n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):j.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){// We must use `queryNormalizedOrderBy()` to get the list of all orderBys (both implicit and explicit).
// Note that for OR queries, orderBy applies to all disjunction terms and implicit orderBys must
// be taken into account. For example, the query "a > 1 || b==1" has an implicit "orderBy a" due
// to the inequality, and is evaluated as "a > 1 orderBy a || b==1 orderBy a".
// A document with content of {b:1} matches the filters, but does not match the orderBy because
// it's missing the field 'a'.
for(let n of e6(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(let n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&(!e.startAt||!!/**
 * Returns true if a document sorts before a bound using the provided sort
 * order.
 */function(e,t,n){let r=eL(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,e6(e),t))&&(!e.endAt||!!function(e,t,n){let r=eL(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,e6(e),t))}/**
 * Returns a new comparator function that can be used to compare two documents
 * based on the Query's ordering constraint.
 */function tr(e){return(t,n)=>{let r=!1;for(let i of e6(e)){let e=function(e,t,n){let r=e.field.isKeyField()?j.comparator(t.key,n.key):function(e,t,n){let r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?ew(r,i):E()}(e.field,t,n);switch(e.dir){case"asc"/* Direction.ASCENDING */:return r;case"desc"/* Direction.DESCENDING */:return -1*r;default:return E()}}(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * A map implementation that uses objects as keys. Objects must have an
 * associated equals function and must be immutable. Entries in the map are
 * stored together with the key being produced from the mapKeyFn. This map
 * automatically handles collisions of keys.
 */class ti{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,/**
         * The inner map for a key/value pair. Due to the possibility of collisions we
         * keep a list of entries that we do a linear search through to find an actual
         * match. Note that collisions should be rare, so we still expect near
         * constant time lookups in practice.
         */this.inner={},/** The number of entries stored in the map */this.innerSize=0}/** Get a value for this key, or undefined if it does not exist. */get(e){let t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n){for(let[t,r]of n)if(this.equalsFn(t,e))return r}}has(e){return void 0!==this.get(e)}/** Put this key and value in the map. */set(e,t){let n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return void(r[n]=[e,t]);r.push([e,t]),this.innerSize++}/**
     * Remove this key from the map. Returns a boolean if anything was deleted.
     */delete(e){let t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Y(this.inner,(t,n)=>{for(let[t,r]of n)e(t,r)})}isEmpty(){return X(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ts=new J(j.comparator),ta=new J(j.comparator);function to(...e){let t=ta;for(let n of e)t=t.insert(n.key,n);return t}function tl(e){let t=ta;return e.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function tu(){return new ti(e=>e.toString(),(e,t)=>e.isEqual(t))}let th=new J(j.comparator),tc=new et(j.comparator);function td(...e){let t=tc;for(let n of e)t=t.add(n);return t}let tf=new et(L);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Returns an DoubleValue for `value` that is encoded based the serializer's
 * `useProto3Json` setting.
 */function tp(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Q(t)?"-0":t}}/**
 * Returns an IntegerValue for `value`.
 */function tg(e){return{integerValue:""+e}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//** Used to represent a field transform on a mutation. */class tm{constructor(){// Make sure that the structural type of `TransformOperation` is unique.
// See https://github.com/microsoft/TypeScript/issues/5451
this._=void 0}}/**
 * If this transform operation is not idempotent, returns the base value to
 * persist for this transform. If a base value is returned, the transform
 * operation is always applied to this base value, even if document has
 * already been updated.
 *
 * Base values provide consistent behavior for non-idempotent transforms and
 * allow us to return the same latency-compensated value even if the backend
 * has already applied the transform operation. The base value is null for
 * idempotent transforms, as they can be re-played even if the backend has
 * already applied them.
 *
 * @returns a base value to store along with the mutation, or null for
 * idempotent transforms.
 */function ty(e,t){return e instanceof tT?/** Returns true if `value` is either an IntegerValue or a DoubleValue. */eT(t)||t&&"doubleValue"in t?t:{integerValue:0}:null}/** Transforms a value into a server-generated timestamp. */class tv extends tm{}/** Transforms an array value via a union operation. */class tw extends tm{constructor(e){super(),this.elements=e}}function tE(e,t){let n=tC(t);for(let t of e.elements)n.some(e=>ey(e,t))||n.push(t);return{arrayValue:{values:n}}}/** Transforms an array value via a remove operation. */class t_ extends tm{constructor(e){super(),this.elements=e}}function tb(e,t){let n=tC(t);for(let t of e.elements)n=n.filter(e=>!ey(e,t));return{arrayValue:{values:n}}}/**
 * Implements the backend semantics for locally computed NUMERIC_ADD (increment)
 * transforms. Converts all field values to integers or doubles, but unlike the
 * backend does not cap integer values at 2^63. Instead, JavaScript number
 * arithmetic is used and precision loss can occur for values greater than 2^53.
 */class tT extends tm{constructor(e,t){super(),this.serializer=e,this.Te=t}}function tI(e){return el(e.integerValue||e.doubleValue)}function tC(e){return eI(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//** A field path and the TransformOperation to perform upon it. */class tS{constructor(e,t){this.field=e,this.transform=t}}/** The result of successfully applying a mutation to the backend. */class tA{constructor(/**
     * The version at which the mutation was committed:
     *
     * - For most operations, this is the updateTime in the WriteResult.
     * - For deletes, the commitTime of the WriteResponse (because deletes are
     *   not stored and have no updateTime).
     *
     * Note that these versions can be different: No-op writes will not change
     * the updateTime even though the commitTime advances.
     */e,/**
     * The resulting fields returned from the backend after a mutation
     * containing field transforms has been committed. Contains one FieldValue
     * for each FieldTransform that was in the mutation.
     *
     * Will be empty if the mutation did not contain any field transforms.
     */t){this.version=e,this.transformResults=t}}/**
 * Encodes a precondition for a mutation. This follows the model that the
 * backend accepts with the special case of an explicit "empty" precondition
 * (meaning no precondition).
 */class tD{constructor(e,t){this.updateTime=e,this.exists=t}/** Creates a new empty Precondition. */static none(){return new tD}/** Creates a new Precondition with an exists flag. */static exists(e){return new tD(void 0,e)}/** Creates a new Precondition based on a version a document exists at. */static updateTime(e){return new tD(e)}/** Returns whether this Precondition is empty. */get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}/** Returns true if the preconditions is valid for the given document. */function tN(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}/**
 * A mutation describes a self-contained change to a document. Mutations can
 * create, replace, delete, and update subsets of documents.
 *
 * Mutations not only act on the value of the document but also its version.
 *
 * For local mutations (mutations that haven't been committed yet), we preserve
 * the existing version for Set and Patch mutations. For Delete mutations, we
 * reset the version to 0.
 *
 * Here's the expected transition table.
 *
 * MUTATION           APPLIED TO            RESULTS IN
 *
 * SetMutation        Document(v3)          Document(v3)
 * SetMutation        NoDocument(v3)        Document(v0)
 * SetMutation        InvalidDocument(v0)   Document(v0)
 * PatchMutation      Document(v3)          Document(v3)
 * PatchMutation      NoDocument(v3)        NoDocument(v3)
 * PatchMutation      InvalidDocument(v0)   UnknownDocument(v3)
 * DeleteMutation     Document(v3)          NoDocument(v0)
 * DeleteMutation     NoDocument(v3)        NoDocument(v0)
 * DeleteMutation     InvalidDocument(v0)   NoDocument(v0)
 *
 * For acknowledged mutations, we use the updateTime of the WriteResponse as
 * the resulting version for Set and Patch mutations. As deletes have no
 * explicit update time, we use the commitTime of the WriteResponse for
 * Delete mutations.
 *
 * If a mutation is acknowledged by the backend but fails the precondition check
 * locally, we transition to an `UnknownDocument` and rely on Watch to send us
 * the updated version.
 *
 * Field transforms are used only with Patch and Set Mutations. We use the
 * `updateTransforms` message to store transforms, rather than the `transforms`s
 * messages.
 *
 * ## Subclassing Notes
 *
 * Every type of mutation needs to implement its own applyToRemoteDocument() and
 * applyToLocalView() to implement the actual behavior of applying the mutation
 * to some source document (see `setMutationApplyToRemoteDocument()` for an
 * example).
 */class tk{}/**
 * A utility method to calculate a `Mutation` representing the overlay from the
 * final state of the document, and a `FieldMask` representing the fields that
 * are mutated by the local mutations.
 */function tx(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;// mask is null when sets or deletes are applied to the current document.
if(null===t)return e.isNoDocument()?new tU(e.key,tD.none()):new tO(e.key,e.data,tD.none());{let n=e.data,r=ek.empty(),i=new et(B.comparator);for(let e of t.fields)if(!i.has(e)){let t=n.field(e);// If we are deleting a nested field, we take the immediate parent as
// the mask used to construct the resulting mutation.
// Justification: Nested fields can create parent fields implicitly. If
// only a leaf entry is deleted in later mutations, the parent field
// should still remain, but we may have lost this information.
// Consider mutation (foo.bar 1), then mutation (foo.bar delete()).
// This leaves the final result (foo, {}). Despite the fact that `doc`
// has the correct result, `foo` is not in `mask`, and the resulting
// mutation would miss `foo`.
null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),i=i.add(e)}return new tM(e.key,r,new er(i.toArray()),tD.none())}}/**
 * Applies this mutation to the given document for the purposes of computing
 * the new local view of a document. If the input document doesn't match the
 * expected state, the document is not modified.
 *
 * @param mutation - The mutation to apply.
 * @param document - The document to mutate. The input document can be an
 *     invalid document if the client has no knowledge of the pre-mutation state
 *     of the document.
 * @param previousMask - The fields that have been updated before applying this mutation.
 * @param localWriteTime - A timestamp indicating the local write time of the
 *     batch this mutation is a part of.
 * @returns A `FieldMask` representing the fields that are changed by applying this mutation.
 */function tR(e,t,n,r){return e instanceof tO?function(e,t,n,r){if(!tN(e.precondition,t))// caused a name collision).
return n;let i=e.value.clone(),s=tV(e.fieldTransforms,r,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null;// SetMutation overwrites all fields.
}(e,t,n,r):e instanceof tM?function(e,t,n,r){if(!tN(e.precondition,t))return n;let i=tV(e.fieldTransforms,r,t),s=t.data;return(s.setAll(tP(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n)?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))}(e,t,n,r):tN(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}function tL(e,t){var n,r;return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(n=e.fieldTransforms,r=t.fieldTransforms,!!(void 0===n&&void 0===r||!(!n||!r)&&O(n,r,(e,t)=>{var n,r;return e.field.isEqual(t.field)&&(n=e.transform,r=t.transform,n instanceof tw&&r instanceof tw||n instanceof t_&&r instanceof t_?O(n.elements,r.elements,ey):n instanceof tT&&r instanceof tT?ey(n.Te,r.Te):n instanceof tv&&r instanceof tv)})))&&(0/* MutationType.Set */===e.type?e.value.isEqual(t.value):1/* MutationType.Patch */!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}/**
 * A mutation that creates or replaces the document at the given key with the
 * object value contents.
 */class tO extends tk{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0/* MutationType.Set */}getFieldMask(){return null}}class tM extends tk{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1/* MutationType.Patch */}getFieldMask(){return this.fieldMask}}function tP(e){let t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){let r=e.data.field(n);t.set(n,r)}}),t}/**
 * Creates a list of "transform results" (a transform result is a field value
 * representing the result of applying a transform) for use after a mutation
 * containing transforms has been acknowledged by the server.
 *
 * @param fieldTransforms - The field transforms to apply the result to.
 * @param mutableDocument - The current state of the document after applying all
 * previous mutations.
 * @param serverTransformResults - The transform results received by the server.
 * @returns The transform results list.
 */function tF(e,t,n){var r;let i=new Map;e.length===n.length||E();for(let s=0;s<n.length;s++){let a=e[s],o=a.transform,l=t.data.field(a.field);i.set(a.field,(r=n[s],o instanceof tw?tE(o,l):o instanceof t_?tb(o,l):r))}return i}/**
 * Creates a list of "transform results" (a transform result is a field value
 * representing the result of applying a transform) for use when applying a
 * transform locally.
 *
 * @param fieldTransforms - The field transforms to apply the result to.
 * @param localWriteTime - The local time of the mutation (used to
 *     generate ServerTimestampValues).
 * @param mutableDocument - The document to apply transforms on.
 * @returns The transform results list.
 */function tV(e,t,n){let r=new Map;for(let i of e){let e=i.transform,s=n.data.field(i.field);r.set(i.field,e instanceof tv?function(e,t){let n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};// We should avoid storing deeply nested server timestamp map values
// because we never use the intermediate "previous values".
// For example:
// previous: 42L, add: t1, result: t1 -> 42L
// previous: t1,  add: t2, result: t2 -> 42L (NOT t2 -> t1 -> 42L)
// previous: t2,  add: t3, result: t3 -> 42L (NOT t3 -> t2 -> t1 -> 42L)
// `getPreviousValue` recursively traverses server timestamps to find the
// least recent Value.
return t&&eh(t)&&(t=ec(t)),t&&(n.fields.__previous_value__=t),{mapValue:n}}(t,s):e instanceof tw?tE(e,s):e instanceof t_?tb(e,s):function(e,t){// PORTING NOTE: Since JavaScript's integer arithmetic is limited to 53 bit
// precision and resolves overflows by reducing precision, we do not
// manually cap overflows at 2^63.
let n=ty(e,t),r=tI(n)+tI(e.Te);return eT(n)&&eT(e.Te)?tg(r):tp(e.serializer,r)}(e,s))}return r}/** A mutation that deletes the document at the given key. */class tU extends tk{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2/* MutationType.Delete */,this.fieldTransforms=[]}getFieldMask(){return null}}class tB extends tk{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3/* MutationType.Verify */,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * A batch of mutations that will be sent as one unit to the backend.
 */class tj{/**
     * @param batchId - The unique ID of this mutation batch.
     * @param localWriteTime - The original write time of this mutation.
     * @param baseMutations - Mutations that are used to populate the base
     * values when this mutation is applied locally. This can be used to locally
     * overwrite values that are persisted in the remote document cache. Base
     * mutations are never sent to the backend.
     * @param mutations - The user-provided mutations in this mutation batch.
     * User-provided mutations are applied both locally and remotely on the
     * backend.
     */constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}/**
     * Applies all the mutations in this MutationBatch to the specified document
     * to compute the state of the remote document
     *
     * @param document - The document to apply mutations to.
     * @param batchResult - The result of applying the MutationBatch to the
     * backend.
     */applyToRemoteDocument(e,t){let n=t.mutationResults;for(let t=0;t<this.mutations.length;t++){let i=this.mutations[t];if(i.key.isEqual(e.key)){var r;r=n[t],i instanceof tO?function(e,t,n){// Unlike setMutationApplyToLocalView, if we're applying a mutation to a
// remote document the server has accepted the mutation so the precondition
// must have held.
let r=e.value.clone(),i=tF(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(i,e,r):i instanceof tM?function(e,t,n){if(!tN(e.precondition,t))// matched on the backend. We therefore must not have the expected version
// of the document in our cache and convert to an UnknownDocument with a
// known updateTime.
return void t.convertToUnknownDocument(n.version);let r=tF(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(tP(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(i,e,r):function(e,t,n){// Unlike applyToLocalView, if we're applying a mutation to a remote
// document the server has accepted the mutation so the precondition must
// have held.
t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,r)}}}/**
     * Computes the local view of a document given all the mutations in this
     * batch.
     *
     * @param document - The document to apply mutations to.
     * @param mutatedFields - Fields that have been updated before applying this mutation batch.
     * @returns A `FieldMask` representing all the fields that are mutated.
     */applyToLocalView(e,t){// First, apply the base state. This allows us to apply non-idempotent
// transform against a consistent set of values.
for(let n of this.baseMutations)n.key.isEqual(e.key)&&(t=tR(n,e,t,this.localWriteTime));// Second, apply all user-provided mutations.
for(let n of this.mutations)n.key.isEqual(e.key)&&(t=tR(n,e,t,this.localWriteTime));return t}/**
     * Computes the local view for all provided documents given the mutations in
     * this batch. Returns a `DocumentKey` to `Mutation` map which can be used to
     * replace all the mutation applications.
     */applyToLocalDocumentSet(e,t){// TODO(mrschmidt): This implementation is O(n^2). If we apply the mutations
// directly (as done in `applyToLocalView()`), we can reduce the complexity
// to O(n).
let n=tu();return this.mutations.forEach(r=>{let i=e.get(r.key),s=i.overlayedDocument,a=this.applyToLocalView(s,i.mutatedFields);// Set mutatedFields to null if the document is only from local mutations.
// This creates a Set or Delete mutation, instead of trying to create a
// patch mutation as the overlay.
a=t.has(r.key)?null:a;let o=tx(s,a);null!==o&&n.set(r.key,o),s.isValidDocument()||s.convertToNoDocument(P.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),td())}isEqual(e){return this.batchId===e.batchId&&O(this.mutations,e.mutations,(e,t)=>tL(e,t))&&O(this.baseMutations,e.baseMutations,(e,t)=>tL(e,t))}}/** The result of applying a mutation batch to the backend. */class tq{constructor(e,t,n,/**
     * A pre-computed mapping from each mutated document to the resulting
     * version.
     */r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}/**
     * Creates a new MutationBatchResult for the given batch and results. There
     * must be one result for each mutation in the batch. This static factory
     * caches a document=&gt;version mapping (docVersions).
     */static from(e,t,n){e.mutations.length===n.length||E();let r=th,i=e.mutations;for(let e=0;e<i.length;e++)r=r.insert(i[e].key,n[e].version);return new tq(e,t,n,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Representation of an overlay computed by Firestore.
 *
 * Holds information about a mutation and the largest batch id in Firestore when
 * the mutation was created.
 */class t${constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tz{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * Determines whether an error code represents a permanent error when received
 * in response to a write operation.
 *
 * Write operations must be handled specially because as of b/119437764, ABORTED
 * errors on the write stream should be retried too (even though ABORTED errors
 * are not generally retryable).
 *
 * Note that during the initial handshake on the write stream an ABORTED error
 * signals that we should discard our stream token (i.e. it is permanent). This
 * means a handshake error should be classified with isPermanentError, above.
 *//**
 * Maps an error Code from GRPC status code number, like 0, 1, or 14. These
 * are not the same as HTTP status codes.
 *
 * @returns The Code equivalent to the given GRPC status code. Fails if there
 *     is no match.
 */function tK(e){if(void 0===e)// to send invalid proto messages) we may get an error with no GRPC code.
return y("GRPC error has no .code"),_.UNKNOWN;switch(e){case r.OK:return _.OK;case r.CANCELLED:return _.CANCELLED;case r.UNKNOWN:return _.UNKNOWN;case r.DEADLINE_EXCEEDED:return _.DEADLINE_EXCEEDED;case r.RESOURCE_EXHAUSTED:return _.RESOURCE_EXHAUSTED;case r.INTERNAL:return _.INTERNAL;case r.UNAVAILABLE:return _.UNAVAILABLE;case r.UNAUTHENTICATED:return _.UNAUTHENTICATED;case r.INVALID_ARGUMENT:return _.INVALID_ARGUMENT;case r.NOT_FOUND:return _.NOT_FOUND;case r.ALREADY_EXISTS:return _.ALREADY_EXISTS;case r.PERMISSION_DENIED:return _.PERMISSION_DENIED;case r.FAILED_PRECONDITION:return _.FAILED_PRECONDITION;case r.ABORTED:return _.ABORTED;case r.OUT_OF_RANGE:return _.OUT_OF_RANGE;case r.UNIMPLEMENTED:return _.UNIMPLEMENTED;case r.DATA_LOSS:return _.DATA_LOSS;default:return E()}}/**
 * Converts an HTTP response's error status to the equivalent error code.
 *
 * @param status - An HTTP error response status ("FAILED_PRECONDITION",
 * "UNKNOWN", etc.)
 * @returns The equivalent Code. Non-matching responses are mapped to
 *     Code.UNKNOWN.
 */(s=r||(r={}))[s.OK=0]="OK",s[s.CANCELLED=1]="CANCELLED",s[s.UNKNOWN=2]="UNKNOWN",s[s.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",s[s.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",s[s.NOT_FOUND=5]="NOT_FOUND",s[s.ALREADY_EXISTS=6]="ALREADY_EXISTS",s[s.PERMISSION_DENIED=7]="PERMISSION_DENIED",s[s.UNAUTHENTICATED=16]="UNAUTHENTICATED",s[s.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",s[s.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",s[s.ABORTED=10]="ABORTED",s[s.OUT_OF_RANGE=11]="OUT_OF_RANGE",s[s.UNIMPLEMENTED=12]="UNIMPLEMENTED",s[s.INTERNAL=13]="INTERNAL",s[s.UNAVAILABLE=14]="UNAVAILABLE",s[s.DATA_LOSS=15]="DATA_LOSS";/**
 * An instance of the Platform's 'TextDecoder' implementation.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tG=new h.Integer([4294967295,4294967295],0);// Hash a string using md5 hashing algorithm.
function tH(e){let t=(new TextEncoder).encode(e),n=new h.Md5;return n.update(t),new Uint8Array(n.digest())}// Interpret the 16 bytes array as two 64-bit unsigned integers, encoded using
// 2’s complement using little endian.
function tQ(e){let t=new DataView(e.buffer),n=t.getUint32(0,/* littleEndian= */!0),r=t.getUint32(4,/* littleEndian= */!0),i=t.getUint32(8,/* littleEndian= */!0),s=t.getUint32(12,/* littleEndian= */!0);return[new h.Integer([n,r],0),new h.Integer([i,s],0)]}class tW{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new tY(`Invalid padding: ${t}`);if(n<0||e.length>0&&0===this.hashCount)throw new tY(`Invalid hash count: ${n}`);if(0===e.length&&0!==t)throw new tY(`Invalid padding when bitmap length is 0: ${t}`);this.Ae=8*e.length-t,this.Re=(0,h.Integer).fromNumber(this.Ae)}// Calculate the ith hash value based on the hashed 64bit integers,
// and calculate its corresponding bit index in the bitmap to be checked.
Ve(e,t,n){// Calculate hashed value h(i) = h1 + (i * h2).
let r=e.add(t.multiply((0,h.Integer).fromNumber(n)));// Wrap if hash value overflow 64bit.
return 1===r.compare(tG)&&(r=new h.Integer([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Re).toNumber()}// Return whether the bit on the given index in the bitmap is set to 1.
me(e){return 0!=(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){// Empty bitmap should always return false on membership check.
if(0===this.Ae)return!1;let t=tH(e),[n,r]=tQ(t);for(let e=0;e<this.hashCount;e++){let t=this.Ve(n,r,e);if(!this.me(t))return!1}return!0}/** Create bloom filter for testing purposes only. */static create(e,t,n){let r=new Uint8Array(Math.ceil(e/8)),i=new tW(r,e%8==0?0:8-e%8,t);return n.forEach(e=>i.insert(e)),i}insert(e){if(0===this.Ae)return;let t=tH(e),[n,r]=tQ(t);for(let e=0;e<this.hashCount;e++){let t=this.Ve(n,r,e);this.fe(t)}}fe(e){this.bitmap[Math.floor(e/8)]|=1<<e%8}}class tY extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * An event from the RemoteStore. It is split into targetChanges (changes to the
 * state or the set of documents in our watched targets) and documentUpdates
 * (changes to the actual documents).
 */class tX{constructor(/**
     * The snapshot version this event brings us up to, or MIN if not set.
     */e,/**
     * A map from target to changes to the target. See TargetChange.
     */t,/**
     * A map of targets that is known to be inconsistent, and the purpose for
     * re-listening. Listens for these targets should be re-established without
     * resume tokens.
     */n,/**
     * A set of which documents have changed or been deleted, along with the
     * doc's new values (if not deleted).
     */r,/**
     * A set of which document updates are due only to limbo resolution targets.
     */i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}/**
     * HACK: Views require RemoteEvents in order to determine whether the view is
     * CURRENT, but secondary tabs don't receive remote events. So this method is
     * used to create a synthesized RemoteEvent that can be used to apply a
     * CURRENT status change to a View, for queries executed in a different tab.
     */// PORTING NOTE: Multi-tab only
static createSynthesizedRemoteEventForCurrentChange(e,t,n){let r=new Map;return r.set(e,tJ.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new tX(P.min(),r,new J(L),ts,td())}}/**
 * A TargetChange specifies the set of changes for a specific target as part of
 * a RemoteEvent. These changes track which documents are added, modified or
 * removed, as well as the target's resume token and whether the target is
 * marked CURRENT.
 * The actual changes *to* documents are not part of the TargetChange since
 * documents may be part of multiple targets.
 */class tJ{constructor(/**
     * An opaque, server-assigned token that allows watching a query to be resumed
     * after disconnecting without retransmitting all the data that matches the
     * query. The resume token essentially identifies a point in time from which
     * the server should resume sending results.
     */e,/**
     * The "current" (synced) status of this target. Note that "current"
     * has special meaning in the RPC protocol that implies that a target is
     * both up-to-date and consistent with the rest of the watch stream.
     */t,/**
     * The set of documents that were newly assigned to this target as part of
     * this remote event.
     */n,/**
     * The set of documents that were already assigned to this target but received
     * an update during this remote event.
     */r,/**
     * The set of documents that were removed from this target as part of this
     * remote event.
     */i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}/**
     * This method is used to create a synthesized TargetChanges that can be used to
     * apply a CURRENT status change to a View (for queries executed in a different
     * tab) or for new queries (to raise snapshots with correct CURRENT status).
     */static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new tJ(n,t,td(),td(),td())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Represents a changed document and a list of target ids to which this change
 * applies.
 *
 * If document has been deleted NoDocument will be provided.
 */class tZ{constructor(/** The new document applies to all of these targets. */e,/** The new document is removed from all of these targets. */t,/** The key of the document for this change. */n,/**
     * The new document or NoDocument if it was deleted. Is null if the
     * document went out of view without the server sending a new document.
     */r){this.ge=e,this.removedTargetIds=t,this.key=n,this.pe=r}}class t0{constructor(e,t){this.targetId=e,this.ye=t}}class t1{constructor(/** What kind of change occurred to the watch target. */e,/** The target IDs that were added/removed/set. */t,/**
     * An opaque, server-assigned token that allows watching a target to be
     * resumed after disconnecting without retransmitting all the data that
     * matches the target. The resume token essentially identifies a point in
     * time from which the server should resume sending results.
     */n=es.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}/** Tracks the internal state of a Watch target. */class t2{constructor(){/**
         * The number of pending responses (adds or removes) that we are waiting on.
         * We only consider targets active that have no pending responses.
         */this.we=0,/**
         * Keeps track of the document changes since the last raised snapshot.
         *
         * These changes are continuously updated as we receive document updates and
         * always reflect the current set of changes against the last issued snapshot.
         */this.Se=t6(),/** See public getters for explanations of these fields. */this.be=es.EMPTY_BYTE_STRING,this.De=!1,/**
         * Whether this target state should be included in the next snapshot. We
         * initialize to true so that newly-added targets are included in the next
         * RemoteEvent.
         */this.Ce=!0}/**
     * Whether this target has been marked 'current'.
     *
     * 'Current' has special meaning in the RPC protocol: It implies that the
     * Watch backend has sent us all changes up to the point at which the target
     * was added and that the target is consistent with the rest of the watch
     * stream.
     */get current(){return this.De}/** The last resume token sent to us for this target. */get resumeToken(){return this.be}/** Whether this target has pending target adds or target removes. */get ve(){return 0!==this.we}/** Whether we have modified any state that should trigger a snapshot. */get Fe(){return this.Ce}/**
     * Applies the resume token to the TargetChange, but only when it has a new
     * value. Empty resumeTokens are discarded.
     */Me(e){e.approximateByteSize()>0&&(this.Ce=!0,this.be=e)}/**
     * Creates a target change from the current set of changes.
     *
     * To reset the document changes after raising this snapshot, call
     * `clearPendingChanges()`.
     */xe(){let e=td(),t=td(),n=td();return this.Se.forEach((r,i)=>{switch(i){case 0/* ChangeType.Added */:e=e.add(r);break;case 2/* ChangeType.Modified */:t=t.add(r);break;case 1/* ChangeType.Removed */:n=n.add(r);break;default:E()}}),new tJ(this.be,this.De,e,t,n)}/**
     * Resets the document changes and sets `hasPendingChanges` to false.
     */Oe(){this.Ce=!1,this.Se=t6()}Ne(e,t){this.Ce=!0,this.Se=this.Se.insert(e,t)}Be(e){this.Ce=!0,this.Se=this.Se.remove(e)}Le(){this.we+=1}ke(){this.we-=1}qe(){this.Ce=!0,this.De=!0}}/**
 * A helper class to accumulate watch changes into a RemoteEvent.
 */class t9{constructor(e){this.Qe=e,/** The internal state of all tracked targets. */this.Ke=new Map,/** Keeps track of the documents to update since the last raised snapshot. */this.$e=ts,/** A mapping of document keys to their set of target IDs. */this.Ue=t4(),/**
         * A map of targets with existence filter mismatches. These targets are
         * known to be inconsistent and their listens needs to be re-established by
         * RemoteStore.
         */this.We=new J(L)}/**
     * Processes and adds the DocumentWatchChange to the current set of changes.
     */Ge(e){for(let t of e.ge)e.pe&&e.pe.isFoundDocument()?this.ze(t,e.pe):this.je(t,e.key,e.pe);for(let t of e.removedTargetIds)this.je(t,e.key,e.pe)}/** Processes and adds the WatchTargetChange to the current set of changes. */He(e){this.forEachTarget(e,t=>{let n=this.Je(t);switch(e.state){case 0/* WatchTargetChangeState.NoChange */:this.Ye(t)&&n.Me(e.resumeToken);break;case 1/* WatchTargetChangeState.Added */:// We need to decrement the number of pending acks needed from watch
// for this targetId.
n.ke(),n.ve||// We have a freshly added target, so we need to reset any state
// that we had previously. This can happen e.g. when remove and add
// back a target for existence filter mismatches.
n.Oe(),n.Me(e.resumeToken);break;case 2/* WatchTargetChangeState.Removed */:// We need to keep track of removed targets to we can post-filter and
// remove any target changes.
// We need to decrement the number of pending acks needed from watch
// for this targetId.
n.ke(),n.ve||this.removeTarget(t);break;case 3/* WatchTargetChangeState.Current */:this.Ye(t)&&(n.qe(),n.Me(e.resumeToken));break;case 4/* WatchTargetChangeState.Reset */:this.Ye(t)&&// Reset the target and synthesizes removes for all existing
// documents. The backend will re-add any documents that still
// match the target before it sends the next global snapshot.
(this.Ze(t),n.Me(e.resumeToken));break;default:E()}})}/**
     * Iterates over all targetIds that the watch change applies to: either the
     * targetIds explicitly listed in the change or the targetIds of all currently
     * active targets.
     */forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ke.forEach((e,n)=>{this.Ye(n)&&t(n)})}/**
     * Handles existence filters and synthesizes deletes for filter mismatches.
     * Targets that are invalidated by filter mismatches are added to
     * `pendingTargetResets`.
     */Xe(e){let t=e.targetId,n=e.ye.count,r=this.et(t);if(r){let i=r.target;if(eZ(i)){if(0===n){// The existence filter told us the document does not exist. We deduce
// that this document does not exist and apply a deleted document to
// our updates. Without applying this deleted document there might be
// another query that will raise this document as part of a snapshot
// until it is resolved, essentially exposing inconsistency between
// queries.
let e=new j(i.path);this.je(t,e,ex.newNoDocument(e,P.min()))}else 1===n||E()}else{let r=this.tt(t);// Existence filter mismatch. Mark the documents as being in limbo, and
// raise a snapshot with `isFromCache:true`.
if(r!==n){// Apply bloom filter to identify and mark removed documents.
let n=this.nt(e),i=n?this.rt(n,e,r):1/* BloomFilterApplicationStatus.Skipped */;0/* BloomFilterApplicationStatus.Success */!==i&&(// If bloom filter application fails, we reset the mapping and
// trigger re-run of the query.
this.Ze(t),this.We=this.We.insert(t,2/* BloomFilterApplicationStatus.FalsePositive */===i?"TargetPurposeExistenceFilterMismatchBloom"/* TargetPurpose.ExistenceFilterMismatchBloom */:"TargetPurposeExistenceFilterMismatch"/* TargetPurpose.ExistenceFilterMismatch */))}}}}/**
     * Parse the bloom filter from the "unchanged_names" field of an existence
     * filter.
     */nt(e){let t,n;let r=e.ye.unchangedNames;if(!r||!r.bits)return null;let{bits:{bitmap:i="",padding:s=0},hashCount:a=0}=r;try{t=eu(i).toUint8Array()}catch(e){if(e instanceof ei)return v("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw e}try{// BloomFilter throws error if the inputs are invalid.
n=new tW(t,s,a)}catch(e){return v(e instanceof tY?"BloomFilter error: ":"Applying bloom filter failed: ",e),null}return 0===n.Ae?null:n}/**
     * Apply bloom filter to remove the deleted documents, and return the
     * application status.
     */rt(e,t,n){return t.ye.count===n-this.ot(e,t.targetId)?0/* BloomFilterApplicationStatus.Success */:2/* BloomFilterApplicationStatus.FalsePositive */}/**
     * Filter out removed documents based on bloom filter membership result and
     * return number of documents removed.
     */ot(e,t){let n=this.Qe.getRemoteKeysForTarget(t),r=0;return n.forEach(n=>{let i=this.Qe.st(),s=`projects/${i.projectId}/databases/${i.database}/documents/${n.path.canonicalString()}`;e.mightContain(s)||(this.je(t,n,/*updatedDocument=*/null),r++)}),r}/**
     * Converts the currently accumulated state into a remote event at the
     * provided snapshot version. Resets the accumulated changes before returning.
     */_t(e){let t=new Map;this.Ke.forEach((n,r)=>{let i=this.et(r);if(i){if(n.current&&eZ(i.target)){// Document queries for document that don't exist can produce an empty
// result set. To update our local cache, we synthesize a document
// delete if we have not previously received the document. This
// resolves the limbo state of the document, removing it from
// limboDocumentRefs.
// TODO(dimond): Ideally we would have an explicit lookup target
// instead resulting in an explicit delete message and we could
// remove this special logic.
let t=new j(i.target.path);null!==this.$e.get(t)||this.ut(r,t)||this.je(r,t,ex.newNoDocument(t,e))}n.Fe&&(t.set(r,n.xe()),n.Oe())}});let n=td();// We extract the set of limbo-only document updates as the GC logic
// special-cases documents that do not appear in the target cache.
// TODO(gsoltis): Expand on this comment once GC is available in the JS
// client.
this.Ue.forEach((e,t)=>{let r=!0;t.forEachWhile(e=>{let t=this.et(e);return!t||"TargetPurposeLimboResolution"/* TargetPurpose.LimboResolution */===t.purpose||(r=!1,!1)}),r&&(n=n.add(e))}),this.$e.forEach((t,n)=>n.setReadTime(e));let r=new tX(e,t,this.We,this.$e,n);return this.$e=ts,this.Ue=t4(),this.We=new J(L),r}/**
     * Adds the provided document to the internal list of document updates and
     * its document key to the given target's mapping.
     */// Visible for testing.
ze(e,t){if(!this.Ye(e))return;let n=this.ut(e,t.key)?2/* ChangeType.Modified */:0/* ChangeType.Added */;this.Je(e).Ne(t.key,n),this.$e=this.$e.insert(t.key,t),this.Ue=this.Ue.insert(t.key,this.ct(t.key).add(e))}/**
     * Removes the provided document from the target mapping. If the
     * document no longer matches the target, but the document's state is still
     * known (e.g. we know that the document was deleted or we received the change
     * that caused the filter mismatch), the new document can be provided
     * to update the remote document cache.
     */// Visible for testing.
je(e,t,n){if(!this.Ye(e))return;let r=this.Je(e);this.ut(e,t)?r.Ne(t,1/* ChangeType.Removed */):// snapshot, so we can just ignore the change.
r.Be(t),this.Ue=this.Ue.insert(t,this.ct(t).delete(e)),n&&(this.$e=this.$e.insert(t,n))}removeTarget(e){this.Ke.delete(e)}/**
     * Returns the current count of documents in the target. This includes both
     * the number of documents that the LocalStore considers to be part of the
     * target as well as any accumulated changes.
     */tt(e){let t=this.Je(e).xe();return this.Qe.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}/**
     * Increment the number of acks needed from watch before we can consider the
     * server to be 'in-sync' with the client's active targets.
     */Le(e){this.Je(e).Le()}Je(e){let t=this.Ke.get(e);return t||(t=new t2,this.Ke.set(e,t)),t}ct(e){let t=this.Ue.get(e);return t||(t=new et(L),this.Ue=this.Ue.insert(e,t)),t}/**
     * Verifies that the user is still interested in this target (by calling
     * `getTargetDataForTarget()`) and that we are not waiting for pending ADDs
     * from watch.
     */Ye(e){let t=null!==this.et(e);return t||m("WatchChangeAggregator","Detected inactive target",e),t}/**
     * Returns the TargetData for an active target (i.e. a target that the user
     * is still interested in that has no outstanding target change requests).
     */et(e){let t=this.Ke.get(e);return t&&t.ve?null:this.Qe.lt(e)}/**
     * Resets the state of a Watch target to its initial state (e.g. sets
     * 'current' to false, clears the resume token and removes its target mapping
     * from all documents).
     */Ze(e){this.Ke.set(e,new t2),this.Qe.getRemoteKeysForTarget(e).forEach(t=>{this.je(e,t,/*updatedDocument=*/null)})}/**
     * Returns whether the LocalStore considers the document to be part of the
     * specified target.
     */ut(e,t){return this.Qe.getRemoteKeysForTarget(e).has(t)}}function t4(){return new J(j.comparator)}function t6(){return new J(j.comparator)}let t5={asc:"ASCENDING",desc:"DESCENDING"},t3={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},t7={and:"AND",or:"OR"};/**
 * This class generates JsonObject values for the Datastore API suitable for
 * sending to either GRPC stub methods or via the JSON/HTTP REST API.
 *
 * The serializer supports both Protobuf.js and Proto3 JSON formats. By
 * setting `useProto3Json` to true, the serializer will use the Proto3 JSON
 * format.
 *
 * For a description of the Proto3 JSON format check
 * https://developers.google.com/protocol-buffers/docs/proto3#json
 *
 * TODO(klimt): We can remove the databaseId argument if we keep the full
 * resource name in documents.
 */class t8{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}/**
 * Returns a value for a number (or null) that's appropriate to put into
 * a google.protobuf.Int32Value proto.
 * DO NOT USE THIS FOR ANYTHING ELSE.
 * This method cheats. It's typed as returning "number" because that's what
 * our generated proto interfaces say Int32Value must be. But GRPC actually
 * expects a { value: <number> } struct.
 */function ne(e,t){return e.useProto3Json||null==t?t:{value:t}}/**
 * Returns a number (or null) from a google.protobuf.Int32Value proto.
 *//**
 * Returns a value for a Date that's appropriate to put into a proto.
 */function nt(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}/**
 * Returns a value for bytes that's appropriate to put in a proto.
 *
 * Visible for testing.
 */function nn(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function nr(e){return e||E(),P.fromTimestamp(function(e){let t=eo(e);return new M(t.seconds,t.nanos)}(e))}function ni(e,t){return new V(["projects",e.projectId,"databases",e.database]).child("documents").child(t).canonicalString()}function ns(e){let t=V.fromString(e);return np(t)||E(),t}function na(e,t){return ni(e.databaseId,t.path)}function no(e,t){let n=ns(t);if(n.get(1)!==e.databaseId.projectId)throw new b(_.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new b(_.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new j(nh(n))}function nl(e,t){return ni(e.databaseId,t)}function nu(e){return new V(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function nh(e){return e.length>4&&"documents"===e.get(4)||E(),e.popFirst(5)}/** Creates a Document proto from key and fields (but no create/update time) */function nc(e,t,n){return{name:na(e,t),fields:n.value.mapValue.fields}}function nd(e){return{fieldPath:e.canonicalString()}}function nf(e){return B.fromServerFormat(e.fieldPath)}function np(e){// Resource names have at least 4 components (project ID, database ID)
return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * An immutable set of metadata that the local store tracks for each target.
 */class ng{constructor(/** The target being listened to. */e,/**
     * The target ID to which the target corresponds; Assigned by the
     * LocalStore for user listens and by the SyncEngine for limbo watches.
     */t,/** The purpose of the target. */n,/**
     * The sequence number of the last transaction during which this target data
     * was modified.
     */r,/** The latest snapshot version seen for this target. */i=P.min(),s=P.min(),a=es.EMPTY_BYTE_STRING,o=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=a,this.expectedCount=o}/** Creates a new target data instance with an updated sequence number. */withSequenceNumber(e){return new ng(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}/**
     * Creates a new target data instance with an updated resume token and
     * snapshot version.
     */withResumeToken(e,t){return new ng(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,/* expectedCount= */null)}/**
     * Creates a new target data instance with an updated expected count.
     */withExpectedCount(e){return new ng(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}/**
     * Creates a new target data instance with an updated last limbo free
     * snapshot version number.
     */withLastLimboFreeSnapshotVersion(e){return new ng(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//** Serializer for values stored in the LocalStore. */class nm{constructor(e){this.ht=e}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */// Note: This code is copied from the backend. Code that is not used by
// Firestore was removed.
/** Firestore index value writer.  */class ny{constructor(){}// The write methods below short-circuit writing terminators for values
// containing a (terminating) truncated value.
// As an example, consider the resulting encoding for:
// ["bar", [2, "foo"]] -> (STRING, "bar", TERM, ARRAY, NUMBER, 2, STRING, "foo", TERM, TERM, TERM)
// ["bar", [2, truncated("foo")]] -> (STRING, "bar", TERM, ARRAY, NUMBER, 2, STRING, "foo", TRUNC)
// ["bar", truncated(["foo"])] -> (STRING, "bar", TERM, ARRAY. STRING, "foo", TERM, TRUNC)
/** Writes an index value.  */dt(e,t){this.Tt(e,t),// (see go/firestore-storage-format#encodings).
t.Et()}Tt(e,t){if("nullValue"in e)this.At(t,5);else if("booleanValue"in e)this.At(t,10),t.Rt(e.booleanValue?1:0);else if("integerValue"in e)this.At(t,15),t.Rt(el(e.integerValue));else if("doubleValue"in e){let n=el(e.doubleValue);isNaN(n)?this.At(t,13):(this.At(t,15),Q(n)?t.Rt(0):t.Rt(n))}else if("timestampValue"in e){let n=e.timestampValue;this.At(t,20),"string"==typeof n?t.Vt(n):(t.Vt(`${n.seconds||""}`),t.Rt(n.nanos||0))}else if("stringValue"in e)this.ft(e.stringValue,t),this.gt(t);else if("bytesValue"in e)this.At(t,30),t.yt(eu(e.bytesValue)),this.gt(t);else if("referenceValue"in e)this.wt(e.referenceValue,t);else if("geoPointValue"in e){let n=e.geoPointValue;this.At(t,45),t.Rt(n.latitude||0),t.Rt(n.longitude||0)}else"mapValue"in e?eN(e)?this.At(t,Number.MAX_SAFE_INTEGER):(this.St(e.mapValue,t),this.gt(t)):"arrayValue"in e?(this.bt(e.arrayValue,t),this.gt(t)):E()}ft(e,t){this.At(t,25),this.Dt(e,t)}Dt(e,t){t.Vt(e)}St(e,t){let n=e.fields||{};for(let e of(this.At(t,55),Object.keys(n)))this.ft(e,t),this.Tt(n[e],t)}bt(e,t){let n=e.values||[];for(let e of(this.At(t,50),n))this.Tt(e,t)}wt(e,t){this.At(t,37),j.fromName(e).path.forEach(e=>{this.At(t,60),this.Dt(e,t)})}At(e,t){e.Rt(t)}gt(e){// While the SDK does not implement truncation, the truncation marker is
// used to terminate all variable length values (which are strings, bytes,
// references, arrays and maps).
e.Rt(2)}}ny.Ct=new ny;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * An in-memory implementation of IndexManager.
 */class nv{constructor(){this.an=new nw}addToCollectionParentIndex(e,t){return this.an.add(t),K.resolve()}getCollectionParents(e,t){return K.resolve(this.an.getEntries(t))}addFieldIndex(e,t){// Field indices are not supported with memory persistence.
return K.resolve()}deleteFieldIndex(e,t){// Field indices are not supported with memory persistence.
return K.resolve()}deleteAllFieldIndexes(e){// Field indices are not supported with memory persistence.
return K.resolve()}createTargetIndexes(e,t){// Field indices are not supported with memory persistence.
return K.resolve()}getDocumentsMatchingTarget(e,t){// Field indices are not supported with memory persistence.
return K.resolve(null)}getIndexType(e,t){// Field indices are not supported with memory persistence.
return K.resolve(0/* IndexType.NONE */)}getFieldIndexes(e,t){// Field indices are not supported with memory persistence.
return K.resolve([])}getNextCollectionGroupToUpdate(e){// Field indices are not supported with memory persistence.
return K.resolve(null)}getMinOffset(e,t){return K.resolve(q.min())}getMinOffsetFromCollectionGroup(e,t){return K.resolve(q.min())}updateCollectionGroup(e,t,n){// Field indices are not supported with memory persistence.
return K.resolve()}updateIndexEntries(e,t){// Field indices are not supported with memory persistence.
return K.resolve()}}/**
 * Internal implementation of the collection-parent index exposed by MemoryIndexManager.
 * Also used for in-memory caching by IndexedDbIndexManager and initial index population
 * in indexeddb_schema.ts
 */class nw{constructor(){this.index={}}// Returns false if the entry already existed.
add(e){let t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new et(V.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){let t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new et(V.comparator)).toArray()}}new Uint8Array(0);class nE{constructor(// threshold. Passing `COLLECTION_DISABLED` here will cause collection to always be skipped.
e,t,// us from collecting a huge number of sequence numbers if the cache has grown very large.
n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new nE(e,nE.DEFAULT_COLLECTION_PERCENTILE,nE.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//** A mutation queue for a specific user, backed by IndexedDB. */nE.DEFAULT_COLLECTION_PERCENTILE=10,nE.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,nE.DEFAULT=new nE(41943040,nE.DEFAULT_COLLECTION_PERCENTILE,nE.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),nE.DISABLED=new nE(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//** Offset to ensure non-overlapping target ids. *//**
 * Generates monotonically increasing target IDs for sending targets to the
 * watch stream.
 *
 * The client constructs two generators, one for the target cache, and one for
 * for the sync engine (to generate limbo documents targets). These
 * generators produce non-overlapping IDs (by using even and odd IDs
 * respectively).
 *
 * By separating the target ID space, the query cache can generate target IDs
 * that persist across client restarts, while sync engine can independently
 * generate in-memory target IDs that are transient and can be reused after a
 * restart.
 */class n_{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static Bn(){// The target cache generator must return '2' in its first call to `next()`
// as there is no differentiation in the protocol layer between an unset
// number and the number '0'. If we were to sent a target with target ID
// '0', the backend would consider it unset and replace it with its own ID.
return new n_(0)}static Ln(){// Sync engine assigns target IDs for limbo document detection.
return new n_(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * An in-memory buffer of entries to be written to a RemoteDocumentCache.
 * It can be used to batch up a set of changes to be written to the cache, but
 * additionally supports reading entries back with the `getEntry()` method,
 * falling back to the underlying RemoteDocumentCache if no entry is
 * buffered.
 *
 * Entries added to the cache *must* be read first. This is to facilitate
 * calculating the size delta of the pending changes.
 *
 * PORTING NOTE: This class was implemented then removed from other platforms.
 * If byte-counting ends up being needed on the other platforms, consider
 * porting this class as part of that implementation work.
 */class nb{constructor(){// A mapping of document key to the new cache entry that should be written.
this.changes=new ti(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}/**
     * Buffers a `RemoteDocumentCache.addEntry()` call.
     *
     * You can only modify documents that have already been retrieved via
     * `getEntry()/getEntries()` (enforced via IndexedDbs `apply()`).
     */addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}/**
     * Buffers a `RemoteDocumentCache.removeEntry()` call.
     *
     * You can only remove documents that have already been retrieved via
     * `getEntry()/getEntries()` (enforced via IndexedDbs `apply()`).
     */removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ex.newInvalidDocument(e).setReadTime(t))}/**
     * Looks up an entry in the cache. The buffered changes will first be checked,
     * and if no buffered change applies, this will forward to
     * `RemoteDocumentCache.getEntry()`.
     *
     * @param transaction - The transaction in which to perform any persistence
     *     operations.
     * @param documentKey - The key of the entry to look up.
     * @returns The cached document or an invalid document if we have nothing
     * cached.
     */getEntry(e,t){this.assertNotApplied();let n=this.changes.get(t);return void 0!==n?K.resolve(n):this.getFromCache(e,t)}/**
     * Looks up several entries in the cache, forwarding to
     * `RemoteDocumentCache.getEntry()`.
     *
     * @param transaction - The transaction in which to perform any persistence
     *     operations.
     * @param documentKeys - The keys of the entries to look up.
     * @returns A map of cached documents, indexed by key. If an entry cannot be
     *     found, the corresponding key will be mapped to an invalid document.
     */getEntries(e,t){return this.getAllFromCache(e,t)}/**
     * Applies buffered changes to the underlying RemoteDocumentCache, using
     * the provided transaction.
     */apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}/** Helper to assert this.changes is not null  */assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Schema Version for the Web client:
 * 1.  Initial version including Mutation Queue, Query Cache, and Remote
 *     Document Cache
 * 2.  Used to ensure a targetGlobal object exists and add targetCount to it. No
 *     longer required because migration 3 unconditionally clears it.
 * 3.  Dropped and re-created Query Cache to deal with cache corruption related
 *     to limbo resolution. Addresses
 *     https://github.com/firebase/firebase-ios-sdk/issues/1548
 * 4.  Multi-Tab Support.
 * 5.  Removal of held write acks.
 * 6.  Create document global for tracking document cache size.
 * 7.  Ensure every cached document has a sentinel row with a sequence number.
 * 8.  Add collection-parent index for Collection Group queries.
 * 9.  Change RemoteDocumentChanges store to be keyed by readTime rather than
 *     an auto-incrementing ID. This is required for Index-Free queries.
 * 10. Rewrite the canonical IDs to the explicit Protobuf-based format.
 * 11. Add bundles and named_queries for bundle support.
 * 12. Add document overlays.
 * 13. Rewrite the keys of the remote document cache to allow for efficient
 *     document lookup via `getAll()`.
 * 14. Add overlays.
 * 15. Add indexing support.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Represents a local view (overlay) of a document, and the fields that are
 * locally mutated.
 */class nT{constructor(e,/**
     * The fields that are locally mutated by patch mutations.
     *
     * If the overlayed	document is from set or delete mutations, this is `null`.
     * If there is no overlay (mutation) for the document, this is an empty `FieldMask`.
     */t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * A readonly view of the local state of all documents we're tracking (i.e. we
 * have a cached version in remoteDocumentCache or local mutations for the
 * document). The view is computed by applying the mutations in the
 * MutationQueue to the RemoteDocumentCache.
 */class nI{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}/**
     * Get the local view of the document identified by `key`.
     *
     * @returns Local view of the document or null if we don't have any cached
     * state for it.
     */getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(n=r,this.remoteDocumentCache.getEntry(e,t))).next(e=>(null!==n&&tR(n.mutation,e,er.empty(),M.now()),e))}/**
     * Gets the local view of the documents identified by `keys`.
     *
     * If we don't have cached state for a document in `keys`, a NoDocument will
     * be stored for that key in the resulting set.
     */getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.getLocalViewOfDocuments(e,t,td()).next(()=>t))}/**
     * Similar to `getDocuments`, but creates the local view from the given
     * `baseDocs` without retrieving documents from the local store.
     *
     * @param transaction - The transaction this operation is scoped to.
     * @param docs - The documents to apply local mutations to get the local views.
     * @param existenceStateChanged - The set of document keys whose existence state
     *   is changed. This is useful to determine if some documents overlay needs
     *   to be recalculated.
     */getLocalViewOfDocuments(e,t,n=td()){let r=tu();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,n).next(e=>{let t=to();return e.forEach((e,n)=>{t=t.insert(e,n.overlayedDocument)}),t}))}/**
     * Gets the overlayed documents for the given document map, which will include
     * the local view of those documents and a `FieldMask` indicating which fields
     * are mutated locally, `null` if overlay is a Set or Delete mutation.
     */getOverlayedDocuments(e,t){let n=tu();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,td()))}/**
     * Fetches the overlays for {@code docs} and adds them to provided overlay map
     * if the map does not already contain an entry for the given document key.
     */populateOverlays(e,t,n){let r=[];return n.forEach(e=>{t.has(e)||r.push(e)}),this.documentOverlayCache.getOverlays(e,r).next(e=>{e.forEach((e,n)=>{t.set(e,n)})})}/**
     * Computes the local view for the given documents.
     *
     * @param docs - The documents to compute views for. It also has the base
     *   version of the documents.
     * @param overlays - The overlays that need to be applied to the given base
     *   version of the documents.
     * @param existenceStateChanged - A set of documents whose existence states
     *   might have changed. This is used to determine if we need to re-calculate
     *   overlays from mutation queues.
     * @return A map represents the local documents view.
     */computeViews(e,t,n,r){let i=ts,s=tu(),a=tu();return t.forEach((e,t)=>{let a=n.get(t.key);// Recalculate an overlay if the document's existence state changed due to
// a remote event *and* the overlay is a PatchMutation. This is because
// document existence state can change if some patch mutation's
// preconditions are met.
// NOTE: we recalculate when `overlay` is undefined as well, because there
// might be a patch mutation whose precondition does not match before the
// change (hence overlay is undefined), but would now match.
r.has(t.key)&&(void 0===a||a.mutation instanceof tM)?i=i.insert(t.key,t):void 0!==a?(s.set(t.key,a.mutation.getFieldMask()),tR(a.mutation,t,a.mutation.getFieldMask(),M.now())):// Using EMPTY to indicate there is no overlay for the document.
s.set(t.key,er.empty())}),this.recalculateAndSaveOverlays(e,i).next(e=>(e.forEach((e,t)=>s.set(e,t)),t.forEach((e,t)=>{var n;return a.set(e,new nT(t,null!==(n=s.get(e))&&void 0!==n?n:null))}),a))}recalculateAndSaveOverlays(e,t){let n=tu(),r=new J((e,t)=>e-t),i=td();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>{for(let i of e)i.keys().forEach(e=>{let s=t.get(e);if(null===s)return;let a=n.get(e)||er.empty();a=i.applyToLocalView(s,a),n.set(e,a);let o=(r.get(i.batchId)||td()).add(e);r=r.insert(i.batchId,o)})}).next(()=>{let s=[],a=r.getReverseIterator();// Iterate in descending order of batch IDs, and skip documents that are
// already saved.
for(;a.hasNext();){let r=a.getNext(),o=r.key,l=r.value,u=tu();l.forEach(e=>{if(!i.has(e)){let r=tx(t.get(e),n.get(e));null!==r&&u.set(e,r),i=i.add(e)}}),s.push(this.documentOverlayCache.saveOverlays(e,o,u))}return K.waitFor(s)}).next(()=>n)}/**
     * Recalculates overlays by reading the documents from remote document cache
     * first, and saves them after they are calculated.
     */recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.recalculateAndSaveOverlays(e,t))}/**
     * Performs a query against the local view of all documents.
     *
     * @param transaction - The persistence transaction.
     * @param query - The query to match documents against.
     * @param offset - Read time and key to start scanning by (exclusive).
     * @param context - A optional tracker to keep a record of important details
     *   during database local query execution.
     */getDocumentsMatchingQuery(e,t,n,r){/**
 * Returns whether the query matches a single document by path (rather than a
 * collection).
 */return j.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):e4(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,r):this.getDocumentsMatchingCollectionQuery(e,t,n,r)}/**
     * Given a collection group, returns the next documents that follow the provided offset, along
     * with an updated batch ID.
     *
     * <p>The documents returned by this method are ordered by remote version from the provided
     * offset. If there are no more remote documents after the provided offset, documents with
     * mutations in order of batch id from the offset are returned. Since all documents in a batch are
     * returned together, the total number of documents returned can exceed {@code count}.
     *
     * @param transaction
     * @param collectionGroup The collection group for the documents.
     * @param offset The offset to index into.
     * @param count The number of documents to return
     * @return A LocalWriteResult with the documents that follow the provided offset and the last processed batch id.
     */getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next(i=>{let s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):K.resolve(tu()),a=-1,o=i;return s.next(t=>K.forEach(t,(t,n)=>(a<n.largestBatchId&&(a=n.largestBatchId),i.get(t)?K.resolve():this.remoteDocumentCache.getEntry(e,t).next(e=>{o=o.insert(t,e)}))).next(()=>this.populateOverlays(e,t,i)).next(()=>this.computeViews(e,o,t,td())).next(e=>({batchId:a,changes:tl(e)})))})}getDocumentsMatchingDocumentQuery(e,t){// Just do a simple document lookup.
return this.getDocument(e,new j(t)).next(e=>{let t=to();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}getDocumentsMatchingCollectionGroupQuery(e,t,n,r){let i=t.collectionGroup,s=to();return this.indexManager.getCollectionParents(e,i).next(a=>K.forEach(a,a=>{var o;let l=(o=a.child(i),new e0(o,/*collectionGroup=*/null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt));return this.getDocumentsMatchingCollectionQuery(e,l,n,r).next(e=>{e.forEach((e,t)=>{s=s.insert(e,t)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,t,n,r){// Query the remote documents and overlay mutations.
let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,r))).next(e=>{// As documents might match the query because of their overlay we need to
// include documents for all overlays in the initial document set.
i.forEach((t,n)=>{let r=n.getKey();null===e.get(r)&&(e=e.insert(r,ex.newInvalidDocument(r)))});// Apply the overlays and match against the query.
let n=to();return e.forEach((e,r)=>{let s=i.get(e);void 0!==s&&tR(s.mutation,r,er.empty(),M.now()),tn(t,r)&&(n=n.insert(e,r))}),n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nC{constructor(e){this.serializer=e,this.lr=new Map,this.hr=new Map}getBundleMetadata(e,t){return K.resolve(this.lr.get(t))}saveBundleMetadata(e,t){return this.lr.set(t.id,{id:t.id,version:t.version,createTime:nr(t.createTime)}),K.resolve()}getNamedQuery(e,t){return K.resolve(this.hr.get(t))}saveNamedQuery(e,t){return this.hr.set(t.name,{name:t.name,query:/**
 * Encodes a `BundledQuery` from bundle proto to a Query object.
 *
 * This reconstructs the original query used to build the bundle being loaded,
 * including features exists only in SDKs (for example: limit-to-last).
 */function(e){let t=function(e){var t,n,r,i,s,a,o,l;let u,h=function(e){let t=ns(e);// In v1beta1 queries for collections at the root did not have a trailing
// "/documents". In v1 all resource paths contain "/documents". Preserve the
// ability to read the v1beta1 form for compatibility with queries persisted
// in the local target cache.
return 4===t.length?V.emptyPath():nh(t)}(e.parent),c=e.structuredQuery,d=c.from?c.from.length:0,f=null;if(d>0){1===d||E();let e=c.from[0];e.allDescendants?f=e.collectionId:h=h.child(e.collectionId)}let p=[];c.where&&(p=function(e){var t;let n=function e(t){return void 0!==t.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":let t=nf(e.unaryFilter.field);return eF.create(t,"=="/* Operator.EQUAL */,{doubleValue:NaN});case"IS_NULL":let n=nf(e.unaryFilter.field);return eF.create(n,"=="/* Operator.EQUAL */,{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let r=nf(e.unaryFilter.field);return eF.create(r,"!="/* Operator.NOT_EQUAL */,{doubleValue:NaN});case"IS_NOT_NULL":let i=nf(e.unaryFilter.field);return eF.create(i,"!="/* Operator.NOT_EQUAL */,{nullValue:"NULL_VALUE"});default:return E()}}(t):void 0!==t.fieldFilter?eF.create(nf(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"=="/* Operator.EQUAL */;case"NOT_EQUAL":return"!="/* Operator.NOT_EQUAL */;case"GREATER_THAN":return">"/* Operator.GREATER_THAN */;case"GREATER_THAN_OR_EQUAL":return">="/* Operator.GREATER_THAN_OR_EQUAL */;case"LESS_THAN":return"<"/* Operator.LESS_THAN */;case"LESS_THAN_OR_EQUAL":return"<="/* Operator.LESS_THAN_OR_EQUAL */;case"ARRAY_CONTAINS":return"array-contains"/* Operator.ARRAY_CONTAINS */;case"IN":return"in"/* Operator.IN */;case"NOT_IN":return"not-in"/* Operator.NOT_IN */;case"ARRAY_CONTAINS_ANY":return"array-contains-any"/* Operator.ARRAY_CONTAINS_ANY */;default:return E()}}(t.fieldFilter.op),t.fieldFilter.value):void 0!==t.compositeFilter?eV.create(t.compositeFilter.filters.map(t=>e(t)),function(e){switch(e){case"AND":return"and"/* CompositeOperator.AND */;case"OR":return"or"/* CompositeOperator.OR */;default:return E()}}(t.compositeFilter.op)):E()}(e);return n instanceof eV&&eB(t=n)&&eU(t)?n.getFilters():[n]}(c.where));let g=[];c.orderBy&&(g=c.orderBy.map(e=>new eM(nf(e.field),function(e){switch(e){case"ASCENDING":return"asc"/* Direction.ASCENDING */;case"DESCENDING":return"desc"/* Direction.DESCENDING */;default:return}}(e.direction))));let m=null;c.limit&&(m=null==(u="object"==typeof(t=c.limit)?t.value:t)?null:u);let y=null;c.startAt&&(y=function(e){let t=!!e.before,n=e.values||[];return new eR(n,t)}(c.startAt));let v=null;return c.endAt&&(v=function(e){let t=!e.before,n=e.values||[];return new eR(n,t)}(c.endAt)),n=h,r=f,i=g,s=p,a=m,o=y,l=v,new e0(n,r,i,s,a,"F"/* LimitType.First */,o,l)}({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?e7(t,t.limit,"L"/* LimitType.Last */):t}(t.bundledQuery),readTime:nr(t.readTime)}),K.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * An in-memory implementation of DocumentOverlayCache.
 */class nS{constructor(){// A map sorted by DocumentKey, whose value is a pair of the largest batch id
// for the overlay and the overlay itself.
this.overlays=new J(j.comparator),this.Pr=new Map}getOverlay(e,t){return K.resolve(this.overlays.get(t))}getOverlays(e,t){let n=tu();return K.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&n.set(t,e)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((n,r)=>{this.It(e,t,r)}),K.resolve()}removeOverlaysForBatchId(e,t,n){let r=this.Pr.get(n);return void 0!==r&&(r.forEach(e=>this.overlays=this.overlays.remove(e)),this.Pr.delete(n)),K.resolve()}getOverlaysForCollection(e,t,n){let r=tu(),i=t.length+1,s=new j(t.child("")),a=this.overlays.getIteratorFrom(s);for(;a.hasNext();){let e=a.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;// Documents from sub-collections
s.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return K.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new J((e,t)=>e-t),s=this.overlays.getIterator();for(;s.hasNext();){let e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=tu(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}let a=tu(),o=i.getIterator();for(;o.hasNext()&&(o.getNext().value.forEach((e,t)=>a.set(e,t)),!(a.size()>=r)););return K.resolve(a)}It(e,t,n){// Remove the association of the overlay to its batch id.
let r=this.overlays.get(n.key);if(null!==r){let e=this.Pr.get(r.largestBatchId).delete(n.key);this.Pr.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new t$(t,n));// Create the association of this overlay to the given largestBatchId.
let i=this.Pr.get(t);void 0===i&&(i=td(),this.Pr.set(t,i)),this.Pr.set(t,i.add(n.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * A collection of references to a document from some kind of numbered entity
 * (either a target ID or batch ID). As references are added to or removed from
 * the set corresponding events are emitted to a registered garbage collector.
 *
 * Each reference is represented by a DocumentReference object. Each of them
 * contains enough information to uniquely identify the reference. They are all
 * stored primarily in a set sorted by key. A document is considered garbage if
 * there's no references in that set (this can be efficiently checked thanks to
 * sorting by key).
 *
 * ReferenceSet also keeps a secondary set that contains references sorted by
 * IDs. This one is used to efficiently implement removal of all references by
 * some target ID.
 */class nA{constructor(){// A set of outstanding references to a document sorted by key.
this.Ir=new et(nD.dr),this.Tr=new et(nD.Er)}/** Returns true if the reference set contains no references. */isEmpty(){return this.Ir.isEmpty()}/** Adds a reference to the given document key for the given ID. */addReference(e,t){let n=new nD(e,t);this.Ir=this.Ir.add(n),this.Tr=this.Tr.add(n)}/** Add references to the given document keys for the given ID. */Ar(e,t){e.forEach(e=>this.addReference(e,t))}/**
     * Removes a reference to the given document key for the given
     * ID.
     */removeReference(e,t){this.Rr(new nD(e,t))}Vr(e,t){e.forEach(e=>this.removeReference(e,t))}/**
     * Clears all references with a given ID. Calls removeRef() for each key
     * removed.
     */mr(e){let t=new j(new V([])),n=new nD(t,e),r=new nD(t,e+1),i=[];return this.Tr.forEachInRange([n,r],e=>{this.Rr(e),i.push(e.key)}),i}gr(){this.Ir.forEach(e=>this.Rr(e))}Rr(e){this.Ir=this.Ir.delete(e),this.Tr=this.Tr.delete(e)}pr(e){let t=new j(new V([])),n=new nD(t,e),r=new nD(t,e+1),i=td();return this.Tr.forEachInRange([n,r],e=>{i=i.add(e.key)}),i}containsKey(e){let t=new nD(e,0),n=this.Ir.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class nD{constructor(e,t){this.key=e,this.yr=t}/** Compare by key then by ID */static dr(e,t){return j.comparator(e.key,t.key)||L(e.yr,t.yr)}/** Compare by ID then by key */static Er(e,t){return L(e.yr,t.yr)||j.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nN{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,/**
         * The set of all mutations that have been sent but not yet been applied to
         * the backend.
         */this.mutationQueue=[],/** Next value to use when assigning sequential IDs to each mutation batch. */this.wr=1,/** An ordered mapping between documents and the mutations batch IDs. */this.Sr=new et(nD.dr)}checkEmpty(e){return K.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){let i=this.wr;this.wr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let s=new tj(i,t,n,r);// Track references by document key and index collection parents.
for(let t of(this.mutationQueue.push(s),r))this.Sr=this.Sr.add(new nD(t.key,i)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return K.resolve(s)}lookupMutationBatch(e,t){return K.resolve(this.br(t))}getNextMutationBatchAfterBatchId(e,t){let n=this.Dr(t+1),r=n<0?0:n;// The requested batchId may still be out of range so normalize it to the
// start of the queue.
return K.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return K.resolve(0===this.mutationQueue.length?-1:this.wr-1)}getAllMutationBatches(e){return K.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let n=new nD(t,0),r=new nD(t,Number.POSITIVE_INFINITY),i=[];return this.Sr.forEachInRange([n,r],e=>{let t=this.br(e.yr);i.push(t)}),K.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new et(L);return t.forEach(e=>{let t=new nD(e,0),r=new nD(e,Number.POSITIVE_INFINITY);this.Sr.forEachInRange([t,r],e=>{n=n.add(e.yr)})}),K.resolve(this.Cr(n))}getAllMutationBatchesAffectingQuery(e,t){// Use the query path as a prefix for testing if a document matches the
// query.
let n=t.path,r=n.length+1,i=n;j.isDocumentKey(i)||(i=i.child(""));let s=new nD(new j(i),0),a=new et(L);return this.Sr.forEachWhile(e=>{let t=e.key.path;return!!n.isPrefixOf(t)&&// Rows with document keys more than one segment longer than the query
// path can't be matches. For example, a query on 'rooms' can't match
// the document /rooms/abc/messages/xyx.
// TODO(mcg): we'll need a different scanner when we implement
// ancestor queries.
(t.length===r&&(a=a.add(e.yr)),!0)},s),K.resolve(this.Cr(a))}Cr(e){// Construct an array of matching batches, sorted by batchID to ensure that
// multiple mutations affecting the same document key are applied in order.
let t=[];return e.forEach(e=>{let n=this.br(e);null!==n&&t.push(n)}),t}removeMutationBatch(e,t){0===this.vr(t.batchId,"removed")||E(),this.mutationQueue.shift();let n=this.Sr;return K.forEach(t.mutations,r=>{let i=new nD(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Sr=n})}xn(e){// No-op since the memory mutation queue does not maintain a separate cache.
}containsKey(e,t){let n=new nD(t,0),r=this.Sr.firstAfterOrEqual(n);return K.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,K.resolve()}/**
     * Finds the index of the given batchId in the mutation queue and asserts that
     * the resulting index is within the bounds of the queue.
     *
     * @param batchId - The batchId to search for
     * @param action - A description of what the caller is doing, phrased in passive
     * form (e.g. "acknowledged" in a routine that acknowledges batches).
     */vr(e,t){return this.Dr(e)}/**
     * Finds the index of the given batchId in the mutation queue. This operation
     * is O(1).
     *
     * @returns The computed index of the batch with the given batchId, based on
     * the state of the queue. Note this index can be negative if the requested
     * batchId has already been remvoed from the queue or past the end of the
     * queue if the batchId is larger than the last added batch.
     */Dr(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}/**
     * A version of lookupMutationBatch that doesn't return a promise, this makes
     * other functions that uses this code easier to read and more efficent.
     */br(e){let t=this.Dr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * The memory-only RemoteDocumentCache for IndexedDb. To construct, invoke
 * `newMemoryRemoteDocumentCache()`.
 */class nk{/**
     * @param sizer - Used to assess the size of a document. For eager GC, this is
     * expected to just return 0 to avoid unnecessarily doing the work of
     * calculating the size.
     */constructor(e){this.Fr=e,/** Underlying cache of documents and their read times. */this.docs=new J(j.comparator),/** Size of all cached documents. */this.size=0}setIndexManager(e){this.indexManager=e}/**
     * Adds the supplied entry to the cache and updates the cache size as appropriate.
     *
     * All calls of `addEntry`  are required to go through the RemoteDocumentChangeBuffer
     * returned by `newChangeBuffer()`.
     */addEntry(e,t){let n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.Fr(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}/**
     * Removes the specified entry from the cache and updates the cache size as appropriate.
     *
     * All calls of `removeEntry` are required to go through the RemoteDocumentChangeBuffer
     * returned by `newChangeBuffer()`.
     */removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let n=this.docs.get(t);return K.resolve(n?n.document.mutableCopy():ex.newInvalidDocument(t))}getEntries(e,t){let n=ts;return t.forEach(e=>{let t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():ex.newInvalidDocument(e))}),K.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let i=ts,s=t.path,a=new j(s.child("")),o=this.docs.getIteratorFrom(a);for(;o.hasNext();){let{key:e,value:{document:a}}=o.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||0>=function(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:0!==(n=j.comparator(e.documentKey,t.documentKey))?n:L(e.largestBatchId,t.largestBatchId)}(new q(a.readTime,a.key,-1),n)||(r.has(a.key)||tn(t,a))&&(i=i.insert(a.key,a.mutableCopy()))}return K.resolve(i)}getAllFromCollectionGroup(e,t,n,r){// This method should only be called from the IndexBackfiller if persistence
// is enabled.
E()}Mr(e,t){return K.forEach(this.docs,e=>t(e))}newChangeBuffer(e){// `trackRemovals` is ignores since the MemoryRemoteDocumentCache keeps
// a separate changelog and does not need special handling for removals.
return new nx(this)}getSize(e){return K.resolve(this.size)}}/**
 * Creates a new memory-only RemoteDocumentCache.
 *
 * @param sizer - Used to assess the size of a document. For eager GC, this is
 * expected to just return 0 to avoid unnecessarily doing the work of
 * calculating the size.
 *//**
 * Handles the details of adding and updating documents in the MemoryRemoteDocumentCache.
 */class nx extends nb{constructor(e){super(),this.ur=e}applyChanges(e){let t=[];return this.changes.forEach((n,r)=>{r.isValidDocument()?t.push(this.ur.addEntry(e,r)):this.ur.removeEntry(n)}),K.waitFor(t)}getFromCache(e,t){return this.ur.getEntry(e,t)}getAllFromCache(e,t){return this.ur.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nR{constructor(e){this.persistence=e,/**
         * Maps a target to the data about that target
         */this.Or=new ti(e=>eX(e),eJ),/** The last received snapshot version. */this.lastRemoteSnapshotVersion=P.min(),/** The highest numbered target ID encountered. */this.highestTargetId=0,/** The highest sequence number encountered. */this.Nr=0,/**
         * A ordered bidirectional mapping between documents and the remote target
         * IDs.
         */this.Br=new nA,this.targetCount=0,this.Lr=n_.Bn()}forEachTarget(e,t){return this.Or.forEach((e,n)=>t(n)),K.resolve()}getLastRemoteSnapshotVersion(e){return K.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return K.resolve(this.Nr)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),K.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Nr&&(this.Nr=t),K.resolve()}Qn(e){this.Or.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this.Lr=new n_(t),this.highestTargetId=t),e.sequenceNumber>this.Nr&&(this.Nr=e.sequenceNumber)}addTargetData(e,t){return this.Qn(t),this.targetCount+=1,K.resolve()}updateTargetData(e,t){return this.Qn(t),K.resolve()}removeTargetData(e,t){return this.Or.delete(t.target),this.Br.mr(t.targetId),this.targetCount-=1,K.resolve()}removeTargets(e,t,n){let r=0,i=[];return this.Or.forEach((s,a)=>{a.sequenceNumber<=t&&null===n.get(a.targetId)&&(this.Or.delete(s),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),K.waitFor(i).next(()=>r)}getTargetCount(e){return K.resolve(this.targetCount)}getTargetData(e,t){let n=this.Or.get(t)||null;return K.resolve(n)}addMatchingKeys(e,t,n){return this.Br.Ar(t,n),K.resolve()}removeMatchingKeys(e,t,n){this.Br.Vr(t,n);let r=this.persistence.referenceDelegate,i=[];return r&&t.forEach(t=>{i.push(r.markPotentiallyOrphaned(e,t))}),K.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Br.mr(t),K.resolve()}getMatchingKeysForTargetId(e,t){let n=this.Br.pr(t);return K.resolve(n)}containsKey(e,t){return K.resolve(this.Br.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * A memory-backed instance of Persistence. Data is stored only in RAM and
 * not persisted across sessions.
 */class nL{/**
     * The constructor accepts a factory for creating a reference delegate. This
     * allows both the delegate and this instance to have strong references to
     * each other without having nullable fields that would then need to be
     * checked or asserted on every access.
     */constructor(e,t){this.kr={},this.overlays={},this.qr=new H(0),this.Qr=!1,this.Qr=!0,this.referenceDelegate=e(this),this.Kr=new nR(this),this.indexManager=new nv,this.remoteDocumentCache=new nk(e=>this.referenceDelegate.$r(e)),this.serializer=new nm(t),this.Ur=new nC(this.serializer)}start(){return Promise.resolve()}shutdown(){// No durable state to ensure is closed on shutdown.
return this.Qr=!1,Promise.resolve()}get started(){return this.Qr}setDatabaseDeletedListener(){// No op.
}setNetworkEnabled(){// No op.
}getIndexManager(e){// We do not currently support indices for memory persistence, so we can
// return the same shared instance of the memory index manager.
return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new nS,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.kr[e.toKey()];return n||(n=new nN(t,this.referenceDelegate),this.kr[e.toKey()]=n),n}getTargetCache(){return this.Kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ur}runTransaction(e,t,n){m("MemoryPersistence","Starting transaction:",e);let r=new nO(this.qr.next());return this.referenceDelegate.Wr(),n(r).next(e=>this.referenceDelegate.Gr(r).next(()=>e)).toPromise().then(e=>(r.raiseOnCommittedEvent(),e))}zr(e,t){return K.or(Object.values(this.kr).map(n=>()=>n.containsKey(e,t)))}}/**
 * Memory persistence is not actually transactional, but future implementations
 * may have transaction-scoped state.
 */class nO extends ${constructor(e){super(),this.currentSequenceNumber=e}}class nM{constructor(e){this.persistence=e,/** Tracks all documents that are active in Query views. */this.jr=new nA,/** The list of documents that are potentially GCed after each transaction. */this.Hr=null}static Jr(e){return new nM(e)}get Yr(){if(this.Hr)return this.Hr;throw E()}addReference(e,t,n){return this.jr.addReference(n,t),this.Yr.delete(n.toString()),K.resolve()}removeReference(e,t,n){return this.jr.removeReference(n,t),this.Yr.add(n.toString()),K.resolve()}markPotentiallyOrphaned(e,t){return this.Yr.add(t.toString()),K.resolve()}removeTarget(e,t){this.jr.mr(t.targetId).forEach(e=>this.Yr.add(e.toString()));let n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.Yr.add(e.toString()))}).next(()=>n.removeTargetData(e,t))}Wr(){this.Hr=new Set}Gr(e){// Remove newly orphaned documents.
let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return K.forEach(this.Yr,n=>{let r=j.fromPath(n);return this.Zr(e,r).next(e=>{e||t.removeEntry(r,P.min())})}).next(()=>(this.Hr=null,t.apply(e)))}updateLimboDocument(e,t){return this.Zr(e,t).next(e=>{e?this.Yr.delete(t.toString()):this.Yr.add(t.toString())})}$r(e){// For eager GC, we don't care about the document size, there are no size thresholds.
return 0}Zr(e,t){return K.or([()=>K.resolve(this.jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.zr(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * A set of changes to what documents are currently in view and out of view for
 * a given query. These changes are sent to the LocalStore by the View (via
 * the SyncEngine) and are used to pin / unpin documents as appropriate.
 */class nP{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Qi=n,this.Ki=r}static $i(e,t){let n=td(),r=td();for(let e of t.docChanges)switch(e.type){case 0/* ChangeType.Added */:n=n.add(e.doc.key);break;case 1/* ChangeType.Removed */:r=r.add(e.doc.key)}return new nP(e,t.fromCache,n,r)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * A tracker to keep a record of important details during database local query
 * execution.
 */class nF{constructor(){/**
         * Counts the number of documents passed through during local query execution.
         */this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * The Firestore query engine.
 *
 * Firestore queries can be executed in three modes. The Query Engine determines
 * what mode to use based on what data is persisted. The mode only determines
 * the runtime complexity of the query - the result set is equivalent across all
 * implementations.
 *
 * The Query engine will use indexed-based execution if a user has configured
 * any index that can be used to execute query (via `setIndexConfiguration()`).
 * Otherwise, the engine will try to optimize the query by re-using a previously
 * persisted query result. If that is not possible, the query will be executed
 * via a full collection scan.
 *
 * Index-based execution is the default when available. The query engine
 * supports partial indexed execution and merges the result from the index
 * lookup with documents that have not yet been indexed. The index evaluation
 * matches the backend's format and as such, the SDK can use indexing for all
 * queries that the backend supports.
 *
 * If no index exists, the query engine tries to take advantage of the target
 * document mapping in the TargetCache. These mappings exists for all queries
 * that have been synced with the backend at least once and allow the query
 * engine to only read documents that previously matched a query plus any
 * documents that were edited after the query was last listened to.
 *
 * There are some cases when this optimization is not guaranteed to produce
 * the same results as full collection scans. In these cases, query
 * processing falls back to full scans. These cases are:
 *
 * - Limit queries where a document that matched the query previously no longer
 *   matches the query.
 *
 * - Limit queries where a document edit may cause the document to sort below
 *   another document that is in the local cache.
 *
 * - Queries that have never been CURRENT or free of limbo documents.
 */class nV{constructor(){this.Ui=!1,this.Wi=!1,/**
         * SDK only decides whether it should create index when collection size is
         * larger than this.
         */this.Gi=100,this.zi=2}/** Sets the document view to query against. */initialize(e,t){this.ji=e,this.indexManager=t,this.Ui=!0}/** Returns all local documents matching the specified query. */getDocumentsMatchingQuery(e,t,n,r){// Stores the result from executing the query; using this object is more
// convenient than passing the result between steps of the persistence
// transaction and improves readability comparatively.
let i={result:null};return this.Hi(e,t).next(e=>{i.result=e}).next(()=>{if(!i.result)return this.Ji(e,t,r,n).next(e=>{i.result=e})}).next(()=>{if(i.result)return;let n=new nF;return this.Yi(e,t,n).next(r=>{if(i.result=r,this.Wi)return this.Zi(e,t,n,r.size)})}).next(()=>i.result)}Zi(e,t,n,r){return n.documentReadCount<this.Gi?(g()<=l.LogLevel.DEBUG&&m("QueryEngine","SDK will not create cache indexes for query:",tt(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Gi,"documents"),K.resolve()):(g()<=l.LogLevel.DEBUG&&m("QueryEngine","Query:",tt(t),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.zi*r?(g()<=l.LogLevel.DEBUG&&m("QueryEngine","The SDK decides to create cache indexes for query:",tt(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,e5(t))):K.resolve())}/**
     * Performs an indexed query that evaluates the query based on a collection's
     * persisted index values. Returns `null` if an index is not available.
     */Hi(e,t){if(e1(t))// key-based lookups. It is more efficient to scan all documents in a
// collection, rather than to perform individual lookups.
return K.resolve(null);let n=e5(t);return this.indexManager.getIndexType(e,n).next(r=>0/* IndexType.NONE */===r?null:(null!==t.limit&&1/* IndexType.PARTIAL */===r&&(n=e5(// We cannot apply a limit for targets that are served using a partial
    // index. If a partial index will be used to serve the target, the
    // query may return a superset of documents that match the target
    // (e.g. if the index doesn't include all the target's filters), or
    // may return the correct set of documents in the wrong order (e.g. if
    // the index doesn't include a segment for one of the orderBys).
    // Therefore, a limit should not be applied in such cases.
    t=e7(t,null,"F"/* LimitType.First */))),this.indexManager.getDocumentsMatchingTarget(e,n).next(r=>{let i=td(...r);return this.ji.getDocuments(e,i).next(r=>this.indexManager.getMinOffset(e,n).next(n=>{let s=this.Xi(t,r);return this.es(t,s,i,n.readTime)?this.Hi(e,e7(t,null,"F"/* LimitType.First */)):this.ts(e,s,t,n)}))})))}/**
     * Performs a query based on the target's persisted query mapping. Returns
     * `null` if the mapping is not available or cannot be used.
     */Ji(e,t,n,r){return e1(t)||r.isEqual(P.min())?K.resolve(null):this.ji.getDocuments(e,n).next(i=>{let s=this.Xi(t,i);return this.es(t,s,n,r)?K.resolve(null):(g()<=l.LogLevel.DEBUG&&m("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),tt(t)),this.ts(e,s,t,/**
 * Creates an offset that matches all documents with a read time higher than
 * `readTime`.
 */function(e,t){// We want to create an offset that matches all documents with a read time
// greater than the provided read time. To do so, we technically need to
// create an offset for `(readTime, MAX_DOCUMENT_KEY)`. While we could use
// Unicode codepoints to generate MAX_DOCUMENT_KEY, it is much easier to use
// `(readTime + 1, DocumentKey.empty())` since `> DocumentKey.empty()` matches
// all valid document IDs.
let n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=P.fromTimestamp(1e9===r?new M(n+1,0):new M(n,r));return new q(i,j.empty(),-1)}(r,0)).next(e=>e))});// Queries that have never seen a snapshot without limbo free documents
// should also be run as a full collection scan.
}/** Applies the query filter and sorting to the provided documents.  */Xi(e,t){// Sort the documents and re-apply the query filter since previously
// matching documents do not necessarily still match the query.
let n=new et(tr(e));return t.forEach((t,r)=>{tn(e,r)&&(n=n.add(r))}),n}/**
     * Determines if a limit query needs to be refilled from cache, making it
     * ineligible for index-free execution.
     *
     * @param query - The query.
     * @param sortedPreviousResults - The documents that matched the query when it
     * was last synchronized, sorted by the query's comparator.
     * @param remoteKeys - The document keys that matched the query at the last
     * snapshot.
     * @param limboFreeSnapshotVersion - The version of the snapshot when the
     * query was last synchronized.
     */es(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)// longer matches.
return!0;// Limit queries are not eligible for index-free query execution if there is
// a potential that an older document from cache now sorts before a document
// that was previously part of the limit. This, however, can only happen if
// the document at the edge of the limit goes out of limit.
// If a document that is not the limit boundary sorts differently,
// the boundary of the limit itself did not change and documents from cache
// will continue to be "rejected" by this boundary. Therefore, we can ignore
// any modifications that don't affect the last document.
let i="F"/* LimitType.First */===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Yi(e,t,n){return g()<=l.LogLevel.DEBUG&&m("QueryEngine","Using full collection scan to execute query:",tt(t)),this.ji.getDocumentsMatchingQuery(e,t,q.min(),n)}/**
     * Combines the results from an indexed execution with the remaining documents
     * that have not yet been indexed.
     */ts(e,t,n,r){// Retrieve all results for documents that were updated since the offset.
return this.ji.getDocumentsMatchingQuery(e,n,r).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Implements `LocalStore` interface.
 *
 * Note: some field defined in this class might have public access level, but
 * the class is not exported so they are only accessible from this module.
 * This is useful to implement optional features (like bundles) in free
 * functions, such that they are tree-shakeable.
 */class nU{constructor(/** Manages our in-memory or durable persistence. */e,t,n,r){this.persistence=e,this.ns=t,this.serializer=r,/**
         * Maps a targetID to data about its target.
         *
         * PORTING NOTE: We are using an immutable data structure on Web to make re-runs
         * of `applyRemoteEvent()` idempotent.
         */this.rs=new J(L),/** Maps a target to its targetID. */this.ss=new ti(e=>eX(e),eJ),/**
         * A per collection group index of the last read time processed by
         * `getNewDocumentChanges()`.
         *
         * PORTING NOTE: This is only used for multi-tab synchronization.
         */this.os=new Map,this._s=e.getRemoteDocumentCache(),this.Kr=e.getTargetCache(),this.Ur=e.getBundleCache(),this.us(n)}us(e){// TODO(indexing): Add spec tests that test these components change after a
// user change
this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new nI(this._s,this.mutationQueue,this.documentOverlayCache,this.indexManager),this._s.setIndexManager(this.indexManager),this.ns.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.rs))}}/**
 * Tells the LocalStore that the currently authenticated user has changed.
 *
 * In response the local store switches the mutation queue to the new user and
 * returns any resulting document changes.
 */// PORTING NOTE: Android and iOS only return the documents affected by the
// change.
async function nB(e,t){return await e.persistence.runTransaction("Handle user change","readonly",n=>{// Swap out the mutation queue, grabbing the pending mutation batches
// before and after.
let r;return e.mutationQueue.getAllMutationBatches(n).next(i=>(r=i,e.us(t),e.mutationQueue.getAllMutationBatches(n))).next(t=>{let i=[],s=[],a=td();for(let e of r)for(let t of(i.push(e.batchId),e.mutations))a=a.add(t.key);for(let e of t)for(let t of(s.push(e.batchId),e.mutations))a=a.add(t.key);// Return the set of all (potentially) changed documents and the list
// of mutation batch IDs that were affected by change.
return e.localDocuments.getDocuments(n,a).next(e=>({cs:e,removedBatchIds:i,addedBatchIds:s}))})})}/**
 * Returns the last consistent snapshot processed (used by the RemoteStore to
 * determine whether to buffer incoming snapshots from the backend).
 */function nj(e){return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Kr.getLastRemoteSnapshotVersion(t))}/**
 * Returns the TargetData as seen by the LocalStore, including updates that may
 * have not yet been persisted to the TargetCache.
 */// Visible for testing.
/**
 * Unpins all the documents associated with the given target. If
 * `keepPersistedTargetData` is set to false and Eager GC enabled, the method
 * directly removes the associated target data from the target cache.
 *
 * Releasing a non-existing `Target` is a no-op.
 */// PORTING NOTE: `keepPersistedTargetData` is multi-tab only.
async function nq(e,t,n){let r=e.rs.get(t);try{n||await e.persistence.runTransaction("Release target",n?"readwrite":"readwrite-primary",t=>e.persistence.referenceDelegate.removeTarget(t,r))}catch(e){if(!G(e))throw e;// All `releaseTarget` does is record the final metadata state for the
// target, but we've been recording this periodically during target
// activity. If we lose this write this could cause a very slight
// difference in the order of target deletion during GC, but we
// don't define exact LRU semantics so this is acceptable.
m("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}e.rs=e.rs.remove(t),e.ss.delete(r.target)}/**
 * Runs the specified query against the local store and returns the results,
 * potentially taking advantage of query data from previous executions (such
 * as the set of remote keys).
 *
 * @param usePreviousResults - Whether results from previous executions can
 * be used to optimize this query execution.
 */function n$(e,t,n){let r=P.min(),i=td();return e.persistence.runTransaction("Execute query","readwrite",s=>(function(e,t,n){let r=e.ss.get(n);return void 0!==r?K.resolve(e.rs.get(r)):e.Kr.getTargetData(t,n)})(e,s,e5(t)).next(t=>{if(t)return r=t.lastLimboFreeSnapshotVersion,e.Kr.getMatchingKeysForTargetId(s,t.targetId).next(e=>{i=e})}).next(()=>e.ns.getDocumentsMatchingQuery(s,t,n?r:P.min(),n?i:td())).next(n=>{var r;let s;return r=t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2)),s=e.os.get(r)||P.min(),n.forEach((e,t)=>{t.readTime.compareTo(s)>0&&(s=t.readTime)}),e.os.set(r,s),{documents:n,Ps:i}}))}/**
 * Metadata state of the local client. Unlike `RemoteClientState`, this class is
 * mutable and keeps track of all pending mutations, which allows us to
 * update the range of pending mutation batch IDs as new mutations are added or
 * removed.
 *
 * The data in `LocalClientState` is not read from WebStorage and instead
 * updated via its instance methods. The updated state can be serialized via
 * `toWebStorageJSON()`.
 */// Visible for testing.
class nz{constructor(){this.activeTargetIds=tf}Rs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}/**
     * Converts this entry into a JSON-encoded format we can use for WebStorage.
     * Does not encode `clientId` as it is part of the key in WebStorage.
     */As(){let e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class nK{constructor(){this.ro=new nz,this.io={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){// No op.
}updateMutationState(e,t,n){// No op.
}addLocalQueryTarget(e){return this.ro.Rs(e),this.io[e]||"not-current"}updateQueryState(e,t,n){this.io[e]=t}removeLocalQueryTarget(e){this.ro.Vs(e)}isLocalQueryTarget(e){return this.ro.activeTargetIds.has(e)}clearQueryState(e){delete this.io[e]}getAllActiveQueryTargets(){return this.ro.activeTargetIds}isActiveQueryTarget(e){return this.ro.activeTargetIds.has(e)}start(){return this.ro=new nz,Promise.resolve()}handleUserChange(e,t,n){// No op.
}setOnlineState(e){// No op.
}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){// No op.
}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nG{so(e){// No-op.
}shutdown(){// No-op.
}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */// References to `window` are guarded by BrowserConnectivityMonitor.isAvailable()
/* eslint-disable no-restricted-globals *//**
 * Browser implementation of ConnectivityMonitor.
 */class nH{constructor(){this.oo=()=>this._o(),this.ao=()=>this.uo(),this.co=[],this.lo()}so(e){this.co.push(e)}shutdown(){window.removeEventListener("online",this.oo),window.removeEventListener("offline",this.ao)}lo(){window.addEventListener("online",this.oo),window.addEventListener("offline",this.ao)}_o(){for(let e of(m("ConnectivityMonitor","Network connectivity changed: AVAILABLE"),this.co))e(0/* NetworkStatus.AVAILABLE */)}uo(){for(let e of(m("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE"),this.co))e(1/* NetworkStatus.UNAVAILABLE */)}// TODO(chenbrian): Consider passing in window either into this component or
// here for testing via FakeWindow.
/** Checks that all used attributes of window are available. */static C(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * The value returned from the most recent invocation of
 * `generateUniqueDebugId()`, or null if it has never been invoked.
 */let nQ=null;/**
 * Generates and returns an initial value for `lastUniqueDebugId`.
 *
 * The returned value is randomly selected from a range of integers that are
 * represented as 8 hexadecimal digits. This means that (within reason) any
 * numbers generated by incrementing the returned number by 1 will also be
 * represented by 8 hexadecimal digits. This leads to all "IDs" having the same
 * length when converted to a hexadecimal string, making reading logs containing
 * these IDs easier to follow. And since the return value is randomly selected
 * it will help to differentiate between logs from different executions.
 *//**
 * Generates and returns a unique ID as a hexadecimal string.
 *
 * The returned ID is intended to be used in debug logging messages to help
 * correlate log messages that may be spatially separated in the logs, but
 * logically related. For example, a network connection could include the same
 * "debug ID" string in all of its log messages to help trace a specific
 * connection over time.
 *
 * @return the 10-character generated ID (e.g. "0xa1b2c3d4").
 */function nW(){return null===nQ?nQ=268435456+Math.round(2147483648*Math.random()):nQ++,"0x"+nQ.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nY={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * Maps RPC names to the corresponding REST endpoint name.
 *
 * We use array notation to avoid mangling.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Provides a simple helper class that implements the Stream interface to
 * bridge to other implementations that are streams but do not implement the
 * interface. The stream callbacks are invoked with the callOn... methods.
 */class nX{constructor(e){this.ho=e.ho,this.Po=e.Po}Io(e){this.To=e}Eo(e){this.Ao=e}onMessage(e){this.Ro=e}close(){this.Po()}send(e){this.ho(e)}Vo(){this.To()}mo(e){this.Ao(e)}fo(e){this.Ro(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nJ="WebChannelConnection";class nZ extends /**
 * Base class for all Rest-based connections to the backend (WebChannel and
 * HTTP).
 */class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;let t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.po=t+"://"+e.host,this.yo=`projects/${n}/databases/${r}`,this.wo="(default)"===this.databaseId.database?`project_id=${n}`:`project_id=${n}&database_id=${r}`}get So(){// Both `invokeRPC()` and `invokeStreamingRPC()` use their `path` arguments to determine
// where to run the query, and expect the `request` to NOT specify the "path".
return!1}bo(e,t,n,r,i){let s=nW(),a=this.Do(e,t);m("RestConnection",`Sending RPC '${e}' ${s}:`,a,n);let o={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Co(o,r,i),this.vo(e,a,o,n).then(t=>(m("RestConnection",`Received RPC '${e}' ${s}: `,t),t),t=>{throw v("RestConnection",`RPC '${e}' ${s} failed with error: `,t,"url: ",a,"request:",n),t})}Fo(e,t,n,r,i,s){// The REST API automatically aggregates all of the streamed results, so we
// can just use the normal invoke() method.
return this.bo(e,t,n,r,i)}/**
     * Modifies the headers for a request, adding any authorization token if
     * present and any additional headers for the request.
     */Co(e,t,n){e["X-Goog-Api-Client"]=// so we need to get its value when we need it in a function.
function(){return"gl-js/ fire/"+f}(),// mess with CORS and redirects by proxies. If we add custom headers
// we will need to change this code to potentially use the $httpOverwrite
// parameter supported by ESF to avoid triggering preflight requests.
e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,n)=>e[n]=t),n&&n.headers.forEach((t,n)=>e[n]=t)}Do(e,t){let n=nY[e];return`${this.po}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,t,n,r){let i=nW();return new Promise((s,a)=>{let o=new h.XhrIo;o.setWithCredentials(!0),o.listenOnce(h.EventType.COMPLETE,()=>{try{switch(o.getLastErrorCode()){case h.ErrorCode.NO_ERROR:let t=o.getResponseJson();m(nJ,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(t)),s(t);break;case h.ErrorCode.TIMEOUT:m(nJ,`RPC '${e}' ${i} timed out`),a(new b(_.DEADLINE_EXCEEDED,"Request time out"));break;case h.ErrorCode.HTTP_ERROR:let n=o.getStatus();if(m(nJ,`RPC '${e}' ${i} failed with status:`,n,"response text:",o.getResponseText()),n>0){let e=o.getResponseJson();Array.isArray(e)&&(e=e[0]);let t=null==e?void 0:e.error;if(t&&t.status&&t.message){let e=function(e){let t=e.toLowerCase().replace(/_/g,"-");return Object.values(_).indexOf(t)>=0?t:_.UNKNOWN}(t.status);a(new b(e,t.message))}else a(new b(_.UNKNOWN,"Server responded with status "+o.getStatus()))}else // it's most probably a connection issue
a(new b(_.UNAVAILABLE,"Connection failed."));break;default:E()}}finally{m(nJ,`RPC '${e}' ${i} completed.`)}});let l=JSON.stringify(r);m(nJ,`RPC '${e}' ${i} sending request:`,r),o.send(t,"POST",l,n,15)})}Mo(e,t,n){let i=nW(),s=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=(0,h.createWebChannelTransport)(),o=(0,h.getStatEventTarget)(),l={// Required for backend stickiness, routing behavior is based on this
// parameter.
httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{// This param is used to improve routing and project isolation by the
// backend and must be included in every request.
database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{// Override the default timeout (randomized between 10-20 seconds) since
// a large write batch on a slow internet connection may take a long
// time to send to the backend. Rather than have WebChannel impose a
// tight timeout which could lead to infinite timeouts and retries, we
// set it very large (5-10 minutes) and rely on the browser's builtin
// timeouts to kick in if the request isn't working.
forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;void 0!==u&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Co(l.initMessageHeaders,t,n),// (Authorization, etc.) will trigger the browser to make a CORS preflight
// request because the XHR will no longer meet the criteria for a "simple"
// CORS request:
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#Simple_requests
// Therefore to avoid the CORS preflight request (an extra network
// roundtrip), we use the encodeInitMessageHeaders option to specify that
// the headers should instead be encoded in the request's POST payload,
// which is recognized by the webchannel backend.
l.encodeInitMessageHeaders=!0;let c=s.join("");m(nJ,`Creating RPC '${e}' stream ${i}: ${c}`,l);let d=a.createWebChannel(c,l),f=!1,p=!1,g=new nX({ho:t=>{p?m(nJ,`Not sending because RPC '${e}' stream ${i} is closed:`,t):(f||(m(nJ,`Opening RPC '${e}' stream ${i} transport.`),d.open(),f=!0),m(nJ,`RPC '${e}' stream ${i} sending:`,t),d.send(t))},Po:()=>d.close()}),y=(e,t,n)=>{// TODO(dimond): closure typing seems broken because WebChannel does
// not implement goog.events.Listenable
e.listen(t,e=>{try{n(e)}catch(e){setTimeout(()=>{throw e},0)}})};// Closure events are guarded and exceptions are swallowed, so catch any
// exception and rethrow using a setTimeout so they become visible again.
// Note that eventually this function could go away if we are confident
// enough the code is exception free.
return y(d,h.WebChannel.EventType.OPEN,()=>{p||m(nJ,`RPC '${e}' stream ${i} transport opened.`)}),y(d,h.WebChannel.EventType.CLOSE,()=>{p||(p=!0,m(nJ,`RPC '${e}' stream ${i} transport closed`),g.mo())}),y(d,h.WebChannel.EventType.ERROR,t=>{p||(p=!0,v(nJ,`RPC '${e}' stream ${i} transport errored:`,t),g.mo(new b(_.UNAVAILABLE,"The operation could not be completed")))}),y(d,h.WebChannel.EventType.MESSAGE,t=>{var n;if(!p){let s=t.data[0];s||E();// TODO(b/35143891): There is a bug in One Platform that caused errors
// (and only errors) to be wrapped in an extra array. To be forward
// compatible with the bug we need to check either condition. The latter
// can be removed once the fix has been rolled out.
// Use any because msgData.error is not typed.
let a=s.error||(null===(n=s[0])||void 0===n?void 0:n.error);if(a){m(nJ,`RPC '${e}' stream ${i} received error:`,a);// error.status will be a string like 'OK' or 'NOT_FOUND'.
let t=a.status,n=/**
 * Maps an error Code from a GRPC status identifier like 'NOT_FOUND'.
 *
 * @returns The Code equivalent to the given status string or undefined if
 *     there is no match.
 */function(e){// lookup by string
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let t=r[e];if(void 0!==t)return tK(t)}(t),s=a.message;void 0===n&&(n=_.INTERNAL,s="Unknown error status: "+t+" with message "+a.message),p=!0,g.mo(new b(n,s)),d.close()}else m(nJ,`RPC '${e}' stream ${i} received:`,s),g.fo(s)}}),y(o,h.Event.STAT_EVENT,t=>{t.stat===h.Stat.PROXY?m(nJ,`RPC '${e}' stream ${i} detected buffering proxy`):t.stat===h.Stat.NOPROXY&&m(nJ,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{// Technically we could/should wait for the WebChannel opened event,
// but because we want to send the first message with the WebChannel
// handshake we pretend the channel opened here (asynchronously), and
// then delay the actual open until the first message is sent.
g.Vo()},0),g}}/** The Platform's 'document' implementation or null if not available. */function n0(){// `document` is not always available, e.g. in ReactNative and WebWorkers.
// eslint-disable-next-line no-restricted-globals
return"undefined"!=typeof document?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n1(e){return new t8(e,/* useProto3Json= */!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * A helper for running delayed tasks following an exponential backoff curve
 * between attempts.
 *
 * Each delay is made up of a "base" delay which follows the exponential
 * backoff curve, and a +/- 50% "jitter" that is calculated and added to the
 * base delay. This prevents clients from accidentally synchronizing their
 * delays causing spikes of load to the backend.
 */class n2{constructor(/**
     * The AsyncQueue to run backoff operations on.
     */e,/**
     * The ID to use when scheduling backoff operations on the AsyncQueue.
     */t,/**
     * The initial delay (used as the base delay on the first retry attempt).
     * Note that jitter will still be applied, so the actual delay could be as
     * little as 0.5*initialDelayMs.
     */n=1e3,r=1.5,i=6e4){this._i=e,this.timerId=t,this.xo=n,this.Oo=r,this.No=i,this.Bo=0,this.Lo=null,/** The last backoff attempt, as epoch milliseconds. */this.ko=Date.now(),this.reset()}/**
     * Resets the backoff delay.
     *
     * The very next backoffAndWait() will have no delay. If it is called again
     * (i.e. due to an error), initialDelayMs (plus jitter) will be used, and
     * subsequent ones will increase according to the backoffFactor.
     */reset(){this.Bo=0}/**
     * Resets the backoff delay to the maximum delay (e.g. for use after a
     * RESOURCE_EXHAUSTED error).
     */qo(){this.Bo=this.No}/**
     * Returns a promise that resolves after currentDelayMs, and increases the
     * delay for any subsequent attempts. If there was a pending backoff operation
     * already, it will be canceled.
     */Qo(e){// Cancel any pending backoff operation.
this.cancel();// First schedule using the current base (which may be 0 and should be
// honored as such).
let t=Math.floor(this.Bo+this.Ko()),n=Math.max(0,Date.now()-this.ko),r=Math.max(0,t-n);// Guard against lastAttemptTime being in the future due to a clock change.
r>0&&m("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Bo} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Lo=this._i.enqueueAfterDelay(this.timerId,r,()=>(this.ko=Date.now(),e())),// bounds.
this.Bo*=this.Oo,this.Bo<this.xo&&(this.Bo=this.xo),this.Bo>this.No&&(this.Bo=this.No)}$o(){null!==this.Lo&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){null!==this.Lo&&(this.Lo.cancel(),this.Lo=null)}/** Returns a random value in the range [-currentBaseMs/2, currentBaseMs/2] */Ko(){return(Math.random()-.5)*this.Bo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * A PersistentStream is an abstract base class that represents a streaming RPC
 * to the Firestore backend. It's built on top of the connections own support
 * for streaming RPCs, and adds several critical features for our clients:
 *
 *   - Exponential backoff on failure
 *   - Authentication via CredentialsProvider
 *   - Dispatching all callbacks into the shared worker queue
 *   - Closing idle streams after 60 seconds of inactivity
 *
 * Subclasses of PersistentStream implement serialization of models to and
 * from the JSON representation of the protocol buffers for a specific
 * streaming RPC.
 *
 * ## Starting and Stopping
 *
 * Streaming RPCs are stateful and need to be start()ed before messages can
 * be sent and received. The PersistentStream will call the onOpen() function
 * of the listener once the stream is ready to accept requests.
 *
 * Should a start() fail, PersistentStream will call the registered onClose()
 * listener with a FirestoreError indicating what went wrong.
 *
 * A PersistentStream can be started and stopped repeatedly.
 *
 * Generic types:
 *  SendType: The type of the outgoing message of the underlying
 *    connection stream
 *  ReceiveType: The type of the incoming message of the underlying
 *    connection stream
 *  ListenerType: The type of the listener that will be used for callbacks
 */class n9{constructor(e,t,n,r,i,s,a,o){this._i=e,this.Uo=n,this.Wo=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=a,this.listener=o,this.state=0/* PersistentStreamState.Initial */,/**
         * A close count that's incremented every time the stream is closed; used by
         * getCloseGuardedDispatcher() to invalidate callbacks that happen after
         * close.
         */this.Go=0,this.zo=null,this.jo=null,this.stream=null,this.Ho=new n2(e,t)}/**
     * Returns true if start() has been called and no error has occurred. True
     * indicates the stream is open or in the process of opening (which
     * encompasses respecting backoff, getting auth tokens, and starting the
     * actual RPC). Use isOpen() to determine if the stream is open and ready for
     * outbound requests.
     */Jo(){return 1/* PersistentStreamState.Starting */===this.state||5/* PersistentStreamState.Backoff */===this.state||this.Yo()}/**
     * Returns true if the underlying RPC is open (the onOpen() listener has been
     * called) and the stream is ready for outbound requests.
     */Yo(){return 2/* PersistentStreamState.Open */===this.state||3/* PersistentStreamState.Healthy */===this.state}/**
     * Starts the RPC. Only allowed if isStarted() returns false. The stream is
     * not immediately ready for use: onOpen() will be invoked when the RPC is
     * ready for outbound requests, at which point isOpen() will return true.
     *
     * When start returns, isStarted() will return true.
     */start(){4/* PersistentStreamState.Error */!==this.state?this.auth():this.Zo()}/**
     * Stops the RPC. This call is idempotent and allowed regardless of the
     * current isStarted() state.
     *
     * When stop returns, isStarted() and isOpen() will both return false.
     */async stop(){this.Jo()&&await this.close(0/* PersistentStreamState.Initial */)}/**
     * After an error the stream will usually back off on the next attempt to
     * start it. If the error warrants an immediate restart of the stream, the
     * sender can use this to indicate that the receiver should not back off.
     *
     * Each error will call the onClose() listener. That function can decide to
     * inhibit backoff if required.
     */Xo(){this.state=0/* PersistentStreamState.Initial */,this.Ho.reset()}/**
     * Marks this stream as idle. If no further actions are performed on the
     * stream for one minute, the stream will automatically close itself and
     * notify the stream's onClose() handler with Status.OK. The stream will then
     * be in a !isStarted() state, requiring the caller to start the stream again
     * before further use.
     *
     * Only streams that are in state 'Open' can be marked idle, as all other
     * states imply pending network operations.
     */e_(){// Starts the idle time if we are in state 'Open' and are not yet already
// running a timer (in which case the previous idle timeout still applies).
this.Yo()&&null===this.zo&&(this.zo=this._i.enqueueAfterDelay(this.Uo,6e4,()=>this.t_()))}/** Sends a message to the underlying stream. */n_(e){this.r_(),this.stream.send(e)}/** Called by the idle timer when the stream should close due to inactivity. */async t_(){if(this.Yo())// it restarts so set the stream state to Initial instead of Error.
return this.close(0/* PersistentStreamState.Initial */)}/** Marks the stream as active again. */r_(){this.zo&&(this.zo.cancel(),this.zo=null)}/** Cancels the health check delayed operation. */i_(){this.jo&&(this.jo.cancel(),this.jo=null)}/**
     * Closes the stream and cleans up as necessary:
     *
     * * closes the underlying GRPC stream;
     * * calls the onClose handler with the given 'error';
     * * sets internal stream state to 'finalState';
     * * adjusts the backoff timer based on the error
     *
     * A new stream can be opened by calling start().
     *
     * @param finalState - the intended state of the stream after closing.
     * @param error - the error the connection was closed with.
     */async close(e,t){// Cancel any outstanding timers (they're guaranteed not to execute).
this.r_(),this.i_(),this.Ho.cancel(),// underlying stream), guaranteeing they won't execute.
this.Go++,4/* PersistentStreamState.Error */!==e?this.Ho.reset():t&&t.code===_.RESOURCE_EXHAUSTED?(y(t.toString()),y("Using maximum backoff delay to prevent overloading the backend."),this.Ho.qo()):t&&t.code===_.UNAUTHENTICATED&&3/* PersistentStreamState.Healthy */!==this.state&&// "unauthenticated" error means the token was rejected. This should rarely
// happen since both Auth and AppCheck ensure a sufficient TTL when we
// request a token. If a user manually resets their system clock this can
// fail, however. In this case, we should get a Code.UNAUTHENTICATED error
// before we received the first message and we need to invalidate the token
// to ensure that we fetch a new token.
(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.s_(),this.stream.close(),this.stream=null),// inhibit backoff or otherwise manipulate the state in its non-started state.
this.state=e,await this.listener.Eo(t)}/**
     * Can be overridden to perform additional cleanup before the stream is closed.
     * Calling super.tearDown() is not required.
     */s_(){}auth(){this.state=1/* PersistentStreamState.Starting */;let e=this.o_(this.Go),t=this.Go;// TODO(mikelehen): Just use dispatchIfNotClosed, but see TODO below.
Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,n])=>{// Stream can be stopped while waiting for authentication.
// TODO(mikelehen): We really should just use dispatchIfNotClosed
// and let this dispatch onto the queue, but that opened a spec test can
// of worms that I don't want to deal with in this PR.
this.Go===t&&// Normally we'd have to schedule the callback on the AsyncQueue.
// However, the following calls are safe to be called outside the
// AsyncQueue since they don't chain asynchronous calls
this.__(e,n)},t=>{e(()=>{let e=new b(_.UNKNOWN,"Fetching auth token failed: "+t.message);return this.a_(e)})})}__(e,t){let n=this.o_(this.Go);this.stream=this.u_(e,t),this.stream.Io(()=>{n(()=>(this.state=2/* PersistentStreamState.Open */,this.jo=this._i.enqueueAfterDelay(this.Wo,1e4,()=>(this.Yo()&&(this.state=3/* PersistentStreamState.Healthy */),Promise.resolve())),this.listener.Io()))}),this.stream.Eo(e=>{n(()=>this.a_(e))}),this.stream.onMessage(e=>{n(()=>this.onMessage(e))})}Zo(){this.state=5/* PersistentStreamState.Backoff */,this.Ho.Qo(async()=>{this.state=0/* PersistentStreamState.Initial */,this.start()})}// Visible for tests
a_(e){// In theory the stream could close cleanly, however, in our current model
// we never expect this to happen because if we stop a stream ourselves,
// this callback will never be called. To prevent cases where we retry
// without a backoff accidentally, we set the stream to error in all cases.
return m("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4/* PersistentStreamState.Error */,e)}/**
     * Returns a "dispatcher" function that dispatches operations onto the
     * AsyncQueue but only runs them if closeCount remains unchanged. This allows
     * us to turn auth / stream callbacks into no-ops if the stream is closed /
     * re-opened, etc.
     */o_(e){return t=>{this._i.enqueueAndForget(()=>this.Go===e?t():(m("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}/**
 * A PersistentStream that implements the Listen RPC.
 *
 * Once the Listen stream has called the onOpen() listener, any number of
 * listen() and unlisten() calls can be made to control what changes will be
 * sent from the server for ListenResponses.
 */class n4 extends n9{constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff"/* TimerId.ListenStreamConnectionBackoff */,"listen_stream_idle"/* TimerId.ListenStreamIdle */,"health_check_timeout"/* TimerId.HealthCheckTimeout */,t,n,r,s),this.serializer=i}u_(e,t){return this.connection.Mo("Listen",e,t)}onMessage(e){// A successful response means the stream is healthy
this.Ho.reset();let t=function(e,t){let n;if("targetChange"in t){var r,i;t.targetChange;// proto3 default value is unset in JSON (undefined), so use 'NO_CHANGE'
// if unset
let s="NO_CHANGE"===(r=t.targetChange.targetChangeType||"NO_CHANGE")?0/* WatchTargetChangeState.NoChange */:"ADD"===r?1/* WatchTargetChangeState.Added */:"REMOVE"===r?2/* WatchTargetChangeState.Removed */:"CURRENT"===r?3/* WatchTargetChangeState.Current */:"RESET"===r?4/* WatchTargetChangeState.Reset */:E(),a=t.targetChange.targetIds||[],o=(i=t.targetChange.resumeToken,e.useProto3Json?(void 0===i||"string"==typeof i||E(),es.fromBase64String(i||"")):(void 0===i||i instanceof Uint8Array||E(),es.fromUint8Array(i||new Uint8Array))),l=t.targetChange.cause,u=l&&function(e){let t=void 0===e.code?_.UNKNOWN:tK(e.code);return new b(t,e.message||"")}(l);n=new t1(s,a,o,u||null)}else if("documentChange"in t){t.documentChange;let r=t.documentChange;r.document,r.document.name,r.document.updateTime;let i=no(e,r.document.name),s=nr(r.document.updateTime),a=r.document.createTime?nr(r.document.createTime):P.min(),o=new ek({mapValue:{fields:r.document.fields}}),l=ex.newFoundDocument(i,s,a,o),u=r.targetIds||[],h=r.removedTargetIds||[];n=new tZ(u,h,l.key,l)}else if("documentDelete"in t){t.documentDelete;let r=t.documentDelete;r.document;let i=no(e,r.document),s=r.readTime?nr(r.readTime):P.min(),a=ex.newNoDocument(i,s),o=r.removedTargetIds||[];n=new tZ([],o,a.key,a)}else if("documentRemove"in t){t.documentRemove;let r=t.documentRemove;r.document;let i=no(e,r.document),s=r.removedTargetIds||[];n=new tZ([],s,i,null)}else{if(!("filter"in t))return E();{t.filter;let e=t.filter;e.targetId;let{count:r=0,unchangedNames:i}=e,s=new tz(r,i),a=e.targetId;n=new t0(a,s)}}return n}(this.serializer,e),n=function(e){// We have only reached a consistent snapshot for the entire stream if there
// is a read_time set and it applies to all targets (i.e. the list of
// targets is empty). The backend is guaranteed to send such responses.
if(!("targetChange"in e))return P.min();let t=e.targetChange;return t.targetIds&&t.targetIds.length?P.min():t.readTime?nr(t.readTime):P.min()}(e);return this.listener.c_(t,n)}/**
     * Registers interest in the results of the given target. If the target
     * includes a resumeToken it will be included in the request. Results that
     * affect the target will be streamed back as WatchChange messages that
     * reference the targetId.
     */l_(e){let t={};t.database=nu(this.serializer),t.addTarget=function(e,t){let n;let r=t.target;if((n=eZ(r)?{documents:{documents:[nl(e,r.path)]}}:{query:function(e,t){var n,r;// Dissect the path into parent, collectionId, and optional key filter.
let i={structuredQuery:{}},s=t.path;null!==t.collectionGroup?(i.parent=nl(e,s),i.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i.parent=nl(e,s.popLast()),i.structuredQuery.from=[{collectionId:s.lastSegment()}]);let a=function(e){if(0!==e.length)return function e(t){return t instanceof eF?function(e){if("=="/* Operator.EQUAL */===e.op){if(eS(e.value))return{unaryFilter:{field:nd(e.field),op:"IS_NAN"}};if(eC(e.value))return{unaryFilter:{field:nd(e.field),op:"IS_NULL"}}}else if("!="/* Operator.NOT_EQUAL */===e.op){if(eS(e.value))return{unaryFilter:{field:nd(e.field),op:"IS_NOT_NAN"}};if(eC(e.value))return{unaryFilter:{field:nd(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:nd(e.field),op:t3[e.op],value:e.value}}}(t):t instanceof eV?function(t){let n=t.getFilters().map(t=>e(t));return 1===n.length?n[0]:{compositeFilter:{op:t7[t.op],filters:n}}}(t):E()}(eV.create(e,"and"/* CompositeOperator.AND */))}(t.filters);a&&(i.structuredQuery.where=a);let o=function(e){if(0!==e.length)return e.map(e=>({field:nd(e.field),direction:t5[e.dir]}))}(t.orderBy);o&&(i.structuredQuery.orderBy=o);let l=ne(e,t.limit);return null!==l&&(i.structuredQuery.limit=l),t.startAt&&(i.structuredQuery.startAt={before:(n=t.startAt).inclusive,values:n.position}),t.endAt&&(i.structuredQuery.endAt={before:!(r=t.endAt).inclusive,values:r.position}),i}(e,r)}).targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=nn(e,t.resumeToken);let r=ne(e,t.expectedCount);null!==r&&(n.expectedCount=r)}else if(t.snapshotVersion.compareTo(P.min())>0){// TODO(wuandy): Consider removing above check because it is most likely true.
// Right now, many tests depend on this behaviour though (leaving min() out
// of serialization).
n.readTime=nt(e,t.snapshotVersion.toTimestamp());let r=ne(e,t.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,e);let n=function(e,t){let n=function(e){switch(e){case"TargetPurposeListen"/* TargetPurpose.Listen */:return null;case"TargetPurposeExistenceFilterMismatch"/* TargetPurpose.ExistenceFilterMismatch */:return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom"/* TargetPurpose.ExistenceFilterMismatchBloom */:return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution"/* TargetPurpose.LimboResolution */:return"limbo-document";default:return E()}}(t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,e);n&&(t.labels=n),this.n_(t)}/**
     * Unregisters interest in the results of the target associated with the
     * given targetId.
     */h_(e){let t={};t.database=nu(this.serializer),t.removeTarget=e,this.n_(t)}}/**
 * A Stream that implements the Write RPC.
 *
 * The Write RPC requires the caller to maintain special streamToken
 * state in between calls, to help the server understand which responses the
 * client has processed by the time the next request is made. Every response
 * will contain a streamToken; this value must be passed to the next
 * request.
 *
 * After calling start() on this stream, the next request must be a handshake,
 * containing whatever streamToken is on hand. Once a response to this
 * request is received, all pending mutations may be submitted. When
 * submitting multiple batches of mutations at the same time, it's
 * okay to use the same streamToken for the calls to writeMutations.
 *
 * TODO(b/33271235): Use proto types
 */class n6 extends n9{constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff"/* TimerId.WriteStreamConnectionBackoff */,"write_stream_idle"/* TimerId.WriteStreamIdle */,"health_check_timeout"/* TimerId.HealthCheckTimeout */,t,n,r,s),this.serializer=i,this.P_=!1}/**
     * Tracks whether or not a handshake has been successfully exchanged and
     * the stream is ready to accept mutations.
     */get I_(){return this.P_}// Override of PersistentStream.start
start(){this.P_=!1,this.lastStreamToken=void 0,super.start()}s_(){this.P_&&this.d_([])}u_(e,t){return this.connection.Mo("Write",e,t)}onMessage(e){var t,n;if(e.streamToken||E(),this.lastStreamToken=e.streamToken,this.P_){// A successful first write response means the stream is healthy,
// Note, that we could consider a successful handshake healthy, however,
// the write itself might be causing an error we want to back off from.
this.Ho.reset();let r=(t=e.writeResults,n=e.commitTime,t&&t.length>0?(void 0!==n||E(),t.map(e=>{let t;return(t=e.updateTime?nr(e.updateTime):nr(n)).isEqual(P.min())&&// The Firestore Emulator currently returns an update time of 0 for
// deletes of non-existing documents (rather than null). This breaks the
// test "get deleted doc while offline with source=cache" as NoDocuments
// with version 0 are filtered by IndexedDb's RemoteDocumentCache.
// TODO(#2149): Remove this when Emulator is fixed
(t=nr(n)),new tA(t,e.transformResults||[])})):[]),i=nr(e.commitTime);return this.listener.T_(i,r)}// The first response is always the handshake response
return e.writeResults&&0!==e.writeResults.length&&E(),this.P_=!0,this.listener.E_()}/**
     * Sends an initial streamToken to the server, performing the handshake
     * required to make the StreamingWrite RPC work. Subsequent
     * calls should wait until onHandshakeComplete was called.
     */A_(){// TODO(dimond): Support stream resumption. We intentionally do not set the
// stream token on the handshake, ignoring any stream token we might have.
let e={};e.database=nu(this.serializer),this.n_(e)}/** Sends a group of mutations to the Firestore backend to apply. */d_(e){let t={streamToken:this.lastStreamToken,writes:e.map(e=>(function(e,t){var n;let r;if(t instanceof tO)r={update:nc(e,t.key,t.value)};else if(t instanceof tU)r={delete:na(e,t.key)};else if(t instanceof tM)r={update:nc(e,t.key,t.data),updateMask:function(e){let t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}(t.fieldMask)};else{if(!(t instanceof tB))return E();r={verify:na(e,t.key)}}return t.fieldTransforms.length>0&&(r.updateTransforms=t.fieldTransforms.map(e=>(function(e,t){let n=t.transform;if(n instanceof tv)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof tw)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof t_)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof tT)return{fieldPath:t.field.canonicalString(),increment:n.Te};throw E()})(0,e))),t.precondition.isNone||(r.currentDocument=void 0!==(n=t.precondition).updateTime?{updateTime:nt(e,n.updateTime.toTimestamp())}:void 0!==n.exists?{exists:n.exists}:E()),r})(this.serializer,e))};this.n_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Datastore and its related methods are a wrapper around the external Google
 * Cloud Datastore grpc API, which provides an interface that is more convenient
 * for the rest of the client SDK architecture to consume.
 *//**
 * An implementation of Datastore that exposes additional state for internal
 * consumption.
 */class n5 extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.R_=!1}V_(){if(this.R_)throw new b(_.FAILED_PRECONDITION,"The client has already been terminated.")}/** Invokes the provided RPC with auth and AppCheck tokens. */bo(e,t,n){return this.V_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.bo(e,t,n,r,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new b(_.UNKNOWN,e.toString())})}/** Invokes the provided RPC with streamed results with auth and AppCheck tokens. */Fo(e,t,n,r){return this.V_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Fo(e,t,n,i,s,r)).catch(e=>{throw"FirebaseError"===e.name?(e.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new b(_.UNKNOWN,e.toString())})}terminate(){this.R_=!0}}/**
 * A component used by the RemoteStore to track the OnlineState (that is,
 * whether or not the client as a whole should be considered to be online or
 * offline), implementing the appropriate heuristics.
 *
 * In particular, when the client is trying to connect to the backend, we
 * allow up to MAX_WATCH_STREAM_FAILURES within ONLINE_STATE_TIMEOUT_MS for
 * a connection to succeed. If we have too many failures or the timeout elapses,
 * then we set the OnlineState to Offline, and the client will behave as if
 * it is offline (get()s will return cached data, etc.).
 */class n3{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,/** The current OnlineState. */this.state="Unknown"/* OnlineState.Unknown */,/**
         * A count of consecutive failures to open the stream. If it reaches the
         * maximum defined by MAX_WATCH_STREAM_FAILURES, we'll set the OnlineState to
         * Offline.
         */this.f_=0,/**
         * A timer that elapses after ONLINE_STATE_TIMEOUT_MS, at which point we
         * transition from OnlineState.Unknown to OnlineState.Offline without waiting
         * for the stream to actually fail (MAX_WATCH_STREAM_FAILURES times).
         */this.g_=null,/**
         * Whether the client should log a warning message if it fails to connect to
         * the backend (initially true, cleared after a successful stream, or if we've
         * logged the message already).
         */this.p_=!0}/**
     * Called by RemoteStore when a watch stream is started (including on each
     * backoff attempt).
     *
     * If this is the first attempt, it sets the OnlineState to Unknown and starts
     * the onlineStateTimer.
     */y_(){0===this.f_&&(this.w_("Unknown"/* OnlineState.Unknown */),this.g_=this.asyncQueue.enqueueAfterDelay("online_state_timeout"/* TimerId.OnlineStateTimeout */,1e4,()=>(this.g_=null,this.S_("Backend didn't respond within 10 seconds."),this.w_("Offline"/* OnlineState.Offline */),Promise.resolve())))}/**
     * Updates our OnlineState as appropriate after the watch stream reports a
     * failure. The first failure moves us to the 'Unknown' state. We then may
     * allow multiple failures (based on MAX_WATCH_STREAM_FAILURES) before we
     * actually transition to the 'Offline' state.
     */b_(e){"Online"/* OnlineState.Online */===this.state?this.w_("Unknown"/* OnlineState.Unknown */):(this.f_++,this.f_>=1&&(this.D_(),this.S_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.w_("Offline"/* OnlineState.Offline */)))}/**
     * Explicitly sets the OnlineState to the specified state.
     *
     * Note that this resets our timers / failure counters, etc. used by our
     * Offline heuristics, so must not be used in place of
     * handleWatchStreamStart() and handleWatchStreamFailure().
     */set(e){this.D_(),this.f_=0,"Online"/* OnlineState.Online */===e&&// We've connected to watch at least once. Don't warn the developer
// about being offline going forward.
(this.p_=!1),this.w_(e)}w_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}S_(e){let t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.p_?(y(t),this.p_=!1):m("OnlineStateTracker",t)}D_(){null!==this.g_&&(this.g_.cancel(),this.g_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n7{constructor(/**
     * The local store, used to fill the write pipeline with outbound mutations.
     */e,/** The client-side proxy for interacting with the backend. */t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},/**
         * A list of up to MAX_PENDING_WRITES writes that we have fetched from the
         * LocalStore via fillWritePipeline() and have or will send to the write
         * stream.
         *
         * Whenever writePipeline.length > 0 the RemoteStore will attempt to start or
         * restart the write stream. When the stream is established the writes in the
         * pipeline will be sent in order.
         *
         * Writes remain in writePipeline until they are acknowledged by the backend
         * and thus will automatically be re-sent if the stream is interrupted /
         * restarted before they're acknowledged.
         *
         * Write responses from the backend are linked to their originating request
         * purely based on order, and so we can just shift() writes from the front of
         * the writePipeline as we receive responses.
         */this.C_=[],/**
         * A mapping of watched targets that the client cares about tracking and the
         * user has explicitly called a 'listen' for this target.
         *
         * These targets may or may not have been sent to or acknowledged by the
         * server. On re-establishing the listen stream, these targets should be sent
         * to the server. The targets removed with unlistens are removed eagerly
         * without waiting for confirmation from the listen stream.
         */this.v_=new Map,/**
         * A set of reasons for why the RemoteStore may be offline. If empty, the
         * RemoteStore may start its network connections.
         */this.F_=new Set,/**
         * Event handlers that get called when the network is disabled or enabled.
         *
         * PORTING NOTE: These functions are used on the Web client to create the
         * underlying streams (to support tree-shakeable streams). On Android and iOS,
         * the streams are created during construction of RemoteStore.
         */this.M_=[],this.x_=i,this.x_.so(e=>{n.enqueueAndForget(async()=>{// Porting Note: Unlike iOS, `restartNetwork()` is called even when the
// network becomes unreachable as we don't have any other way to tear
// down our streams.
ro(this)&&(m("RemoteStore","Restarting streams for network reachability change."),await async function(e){e.F_.add(4/* OfflineCause.ConnectivityChange */),await re(e),e.O_.set("Unknown"/* OnlineState.Unknown */),e.F_.delete(4/* OfflineCause.ConnectivityChange */),await n8(e)}(this))})}),this.O_=new n3(n,r)}}async function n8(e){if(ro(e))for(let t of e.M_)await t(/* enabled= */!0)}/**
 * Temporarily disables the network. The network can be re-enabled using
 * enableNetwork().
 */async function re(e){for(let t of e.M_)await t(/* enabled= */!1)}/**
 * Starts new listen for the given target. Uses resume token if provided. It
 * is a no-op if the target of given `TargetData` is already being listened to.
 */function rt(e,t){e.v_.has(t.targetId)||// Mark this as something the client is currently listening for.
(e.v_.set(t.targetId,t),ra(e)?rs(e):rb(e).Yo()&&rr(e,t))}/**
 * Removes the listen from server. It is a no-op if the given target id is
 * not being listened to.
 */function rn(e,t){let n=rb(e);e.v_.delete(t),n.Yo()&&ri(e,t),0===e.v_.size&&(n.Yo()?n.e_():ro(e)&&// Revert to OnlineState.Unknown if the watch stream is not open and we
// have no listeners, since without any listens to send we cannot
// confirm if the stream is healthy and upgrade to OnlineState.Online.
e.O_.set("Unknown"/* OnlineState.Unknown */))}/**
 * We need to increment the the expected number of pending responses we're due
 * from watch so we wait for the ack to process any messages from this target.
 */function rr(e,t){if(e.N_.Le(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(P.min())>0){let n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}rb(e).l_(t)}/**
 * We need to increment the expected number of pending responses we're due
 * from watch so we wait for the removal on the server before we process any
 * messages from this target.
 */function ri(e,t){e.N_.Le(t),rb(e).h_(t)}function rs(e){e.N_=new t9({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),lt:t=>e.v_.get(t)||null,st:()=>e.datastore.serializer.databaseId}),rb(e).start(),e.O_.y_()}/**
 * Returns whether the watch stream should be started because it's necessary
 * and has not yet been started.
 */function ra(e){return ro(e)&&!rb(e).Jo()&&e.v_.size>0}function ro(e){return 0===e.F_.size}async function rl(e){e.v_.forEach((t,n)=>{rr(e,t)})}async function ru(e,t){e.N_=void 0,ra(e)?(e.O_.b_(t),rs(e)):// The online state is set to unknown because there is no active attempt
// at establishing a connection
e.O_.set("Unknown"/* OnlineState.Unknown */)}async function rh(e,t,n){if(e.O_.set("Online"/* OnlineState.Online */),t instanceof t1&&2/* WatchTargetChangeState.Removed */===t.state&&t.cause)// to raise events
try{await /** Handles an error on a target */async function(e,t){let n=t.cause;for(let r of t.targetIds)e.v_.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.v_.delete(r),e.N_.removeTarget(r))}(e,t)}catch(n){m("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await rc(e,n)}else if(t instanceof tZ?e.N_.Ge(t):t instanceof t0?e.N_.Xe(t):e.N_.He(t),!n.isEqual(P.min()))try{let t=await nj(e.localStore);n.compareTo(t)>=0&&// We have received a target change with a global snapshot if the snapshot
// version is not equal to SnapshotVersion.min().
await /**
 * Takes a batch of changes from the Datastore, repackages them as a
 * RemoteEvent, and passes that on to the listener, which is typically the
 * SyncEngine.
 */function(e,t){let n=e.N_._t(t);// Update in-memory resume tokens. LocalStore will update the
// persistent view of these when applying the completed RemoteEvent.
return n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){let i=e.v_.get(r);// A watched target might have been removed already.
i&&e.v_.set(r,i.withResumeToken(n.resumeToken,t))}}),// existence filter mismatches.
n.targetMismatches.forEach((t,n)=>{let r=e.v_.get(t);if(!r)return;// Clear the resume token for the target, since we're in a known mismatch
// state.
e.v_.set(t,r.withResumeToken(es.EMPTY_BYTE_STRING,r.snapshotVersion)),// deliberately don't send a resume token so that we get a full update.
ri(e,t);// Mark the target we send as being on behalf of an existence filter
// mismatch, but don't actually retain that in listenTargets. This ensures
// that we flag the first re-listen this way without impacting future
// listens of this target (that might happen e.g. on reconnect).
let i=new ng(r.target,t,n,r.sequenceNumber);rr(e,i)}),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){m("RemoteStore","Failed to raise snapshot:",t),await rc(e,t)}}/**
 * Recovery logic for IndexedDB errors that takes the network offline until
 * `op` succeeds. Retries are scheduled with backoff using
 * `enqueueRetryable()`. If `op()` is not provided, IndexedDB access is
 * validated via a generic operation.
 *
 * The returned Promise is resolved once the network is disabled and before
 * any retry attempt.
 */async function rc(e,t,n){if(!G(t))throw t;e.F_.add(1/* OfflineCause.IndexedDbFailed */),await re(e),e.O_.set("Offline"/* OnlineState.Offline */),n||// Use a simple read operation to determine if IndexedDB recovered.
// Ideally, we would expose a health check directly on SimpleDb, but
// RemoteStore only has access to persistence through LocalStore.
(n=()=>nj(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{m("RemoteStore","Retrying IndexedDB access"),await n(),e.F_.delete(1/* OfflineCause.IndexedDbFailed */),await n8(e)})}/**
 * Executes `op`. If `op` fails, takes the network offline until `op`
 * succeeds. Returns after the first attempt.
 */function rd(e,t){return t().catch(n=>rc(e,n,t))}async function rf(e){let t=rT(e),n=e.C_.length>0?e.C_[e.C_.length-1].batchId:-1;for(;ro(e)&&e.C_.length<10;)try{let r=await /**
 * Gets the mutation batch after the passed in batchId in the mutation queue
 * or null if empty.
 * @param afterBatchId - If provided, the batch to search after.
 * @returns The next mutation or null if there wasn't one.
 */function(e,t){return e.persistence.runTransaction("Get next mutation batch","readonly",n=>(void 0===t&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t)))}(e.localStore,n);if(null===r){0===e.C_.length&&t.e_();break}n=r.batchId,/**
 * Queues additional writes to be sent to the write stream, sending them
 * immediately if the write stream is established.
 */function(e,t){e.C_.push(t);let n=rT(e);n.Yo()&&n.I_&&n.d_(t.mutations)}(e,r)}catch(t){await rc(e,t)}rp(e)&&rg(e)}function rp(e){return ro(e)&&!rT(e).Jo()&&e.C_.length>0}function rg(e){rT(e).start()}async function rm(e){rT(e).A_()}async function ry(e){let t=rT(e);// Send the write pipeline now that the stream is established.
for(let n of e.C_)t.d_(n.mutations)}async function rv(e,t,n){let r=e.C_.shift(),i=tq.from(r,t,n);await rd(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),// slot has freed up.
await rf(e)}async function rw(e,t){// If the write stream closed after the write handshake completes, a write
// operation failed and we fail the pending operation.
t&&rT(e).I_&&// This error affects the actual write.
await async function(e,t){var n;// Only handle permanent errors here. If it's transient, just let the retry
// logic kick in.
if(/**
 * Determines whether an error code represents a permanent error when received
 * in response to a non-write operation.
 *
 * See isPermanentWriteError for classifying write errors.
 */function(e){switch(e){default:return E();case _.CANCELLED:case _.UNKNOWN:case _.DEADLINE_EXCEEDED:case _.RESOURCE_EXHAUSTED:case _.INTERNAL:case _.UNAVAILABLE:// Unauthenticated means something went wrong with our token and we need
// to retry with new credentials which will happen automatically.
case _.UNAUTHENTICATED:return!1;case _.INVALID_ARGUMENT:case _.NOT_FOUND:case _.ALREADY_EXISTS:case _.PERMISSION_DENIED:case _.FAILED_PRECONDITION:// Aborted might be retried in some scenarios, but that is dependant on
// the context and should handled individually by the calling code.
// See https://cloud.google.com/apis/design/errors.
case _.ABORTED:case _.OUT_OF_RANGE:case _.UNIMPLEMENTED:case _.DATA_LOSS:return!0}}(n=t.code)&&n!==_.ABORTED){// This was a permanent error, the request itself was the problem
// so it's not going to succeed if we resend it.
let n=e.C_.shift();// In this case it's also unlikely that the server itself is melting
// down -- this was just a bad request so inhibit backoff on the next
// restart.
rT(e).Xo(),await rd(e,()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t)),// another slot has freed up.
await rf(e)}}(e,t),// pipeline for failed writes
rp(e)&&rg(e)}async function rE(e,t){e.asyncQueue.verifyOperationInProgress(),m("RemoteStore","RemoteStore received new credentials");let n=ro(e);// Tear down and re-create our network streams. This will ensure we get a
// fresh auth token for the new user and re-fill the write pipeline with
// new mutations from the LocalStore (since mutations are per-user).
e.F_.add(3/* OfflineCause.CredentialChange */),await re(e),n&&// Don't set the network status to Unknown if we are offline.
e.O_.set("Unknown"/* OnlineState.Unknown */),await e.remoteSyncer.handleCredentialChange(t),e.F_.delete(3/* OfflineCause.CredentialChange */),await n8(e)}/**
 * Toggles the network state when the client gains or loses its primary lease.
 */async function r_(e,t){t?(e.F_.delete(2/* OfflineCause.IsSecondary */),await n8(e)):t||(e.F_.add(2/* OfflineCause.IsSecondary */),await re(e),e.O_.set("Unknown"/* OnlineState.Unknown */))}/**
 * If not yet initialized, registers the WatchStream and its network state
 * callback with `remoteStoreImpl`. Returns the existing stream if one is
 * already available.
 *
 * PORTING NOTE: On iOS and Android, the WatchStream gets registered on startup.
 * This is not done on Web to allow it to be tree-shaken.
 */function rb(e){var t,n,r;return e.B_||// Create stream (but note that it is not started yet).
(e.B_=(t=e.datastore,n=e.asyncQueue,r={Io:rl.bind(null,e),Eo:ru.bind(null,e),c_:rh.bind(null,e)},t.V_(),new n4(n,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,r)),e.M_.push(async t=>{t?(e.B_.Xo(),ra(e)?rs(e):e.O_.set("Unknown"/* OnlineState.Unknown */)):(await e.B_.stop(),e.N_=void 0)})),e.B_}/**
 * If not yet initialized, registers the WriteStream and its network state
 * callback with `remoteStoreImpl`. Returns the existing stream if one is
 * already available.
 *
 * PORTING NOTE: On iOS and Android, the WriteStream gets registered on startup.
 * This is not done on Web to allow it to be tree-shaken.
 */function rT(e){var t,n,r;return e.L_||// Create stream (but note that it is not started yet).
(e.L_=(t=e.datastore,n=e.asyncQueue,r={Io:rm.bind(null,e),Eo:rw.bind(null,e),E_:ry.bind(null,e),T_:rv.bind(null,e)},t.V_(),new n6(n,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,r)),e.M_.push(async t=>{t?(e.L_.Xo(),await rf(e)):(await e.L_.stop(),e.C_.length>0&&(m("RemoteStore",`Stopping write stream with ${e.C_.length} pending writes`),e.C_=[]))})),e.L_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Represents an operation scheduled to be run in the future on an AsyncQueue.
 *
 * It is created via DelayedOperation.createAndSchedule().
 *
 * Supports cancellation (via cancel()) and early execution (via skipDelay()).
 *
 * Note: We implement `PromiseLike` instead of `Promise`, as the `Promise` type
 * in newer versions of TypeScript defines `finally`, which is not available in
 * IE.
 */class rI{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new T,this.then=this.deferred.promise.then.bind(this.deferred.promise),// and so we attach a dummy catch callback to avoid
// 'UnhandledPromiseRejectionWarning' log spam.
this.deferred.promise.catch(e=>{})}get promise(){return this.deferred.promise}/**
     * Creates and returns a DelayedOperation that has been scheduled to be
     * executed on the provided asyncQueue after the provided delayMs.
     *
     * @param asyncQueue - The queue to schedule the operation on.
     * @param id - A Timer ID identifying the type of operation this is.
     * @param delayMs - The delay (ms) before the operation should be scheduled.
     * @param op - The operation to run.
     * @param removalCallback - A callback to be called synchronously once the
     *   operation is executed or canceled, notifying the AsyncQueue to remove it
     *   from its delayedOperations list.
     *   PORTING NOTE: This exists to prevent making removeDelayedOperation() and
     *   the DelayedOperation class public.
     */static createAndSchedule(e,t,n,r,i){let s=Date.now()+n,a=new rI(e,t,s,r,i);return a.start(n),a}/**
     * Starts the timer. This is called immediately after construction by
     * createAndSchedule().
     */start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}/**
     * Queues the operation to run immediately (if it hasn't already been run or
     * canceled).
     */skipDelay(){return this.handleDelayElapsed()}/**
     * Cancels the operation if it hasn't already been executed or canceled. The
     * promise will be rejected.
     *
     * As long as the operation has not yet been run, calling cancel() provides a
     * guarantee that the operation will not be run.
     */cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new b(_.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}/**
 * Returns a FirestoreError that can be surfaced to the user if the provided
 * error is an IndexedDbTransactionError. Re-throws the error otherwise.
 */function rC(e,t){if(y("AsyncQueue",`${t}: ${e}`),G(e))return new b(_.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * DocumentSet is an immutable (copy-on-write) collection that holds documents
 * in order specified by the provided comparator. We always add a document key
 * comparator on top of what is provided to guarantee document equality based on
 * the key.
 */class rS{/** The default ordering is by key if the comparator is omitted */constructor(e){// We are adding document key comparator to the end as it's the only
// guaranteed unique property of a document.
this.comparator=e?(t,n)=>e(t,n)||j.comparator(t.key,n.key):(e,t)=>j.comparator(e.key,t.key),this.keyedMap=to(),this.sortedSet=new J(this.comparator)}/**
     * Returns an empty copy of the existing DocumentSet, using the same
     * comparator.
     */static emptySet(e){return new rS(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}/**
     * Returns the index of the provided key in the document set, or -1 if the
     * document key is not present in the set;
     */indexOf(e){let t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}/** Iterates documents in order defined by "comparator" */forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}/** Inserts or updates a document with the same key */add(e){// First remove the element if we have it.
let t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}/** Deletes a document with a given key */delete(e){let t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof rS)||this.size!==e.size)return!1;let t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){let e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){let e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){let n=new rS;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * DocumentChangeSet keeps track of a set of changes to docs in a query, merging
 * duplicate events for the same doc.
 */class rA{constructor(){this.k_=new J(j.comparator)}track(e){let t=e.doc.key,n=this.k_.get(t);n?0/* ChangeType.Added */!==e.type&&3/* ChangeType.Metadata */===n.type?this.k_=this.k_.insert(t,e):3/* ChangeType.Metadata */===e.type&&1/* ChangeType.Removed */!==n.type?this.k_=this.k_.insert(t,{type:n.type,doc:e.doc}):2/* ChangeType.Modified */===e.type&&2/* ChangeType.Modified */===n.type?this.k_=this.k_.insert(t,{type:2/* ChangeType.Modified */,doc:e.doc}):2/* ChangeType.Modified */===e.type&&0/* ChangeType.Added */===n.type?this.k_=this.k_.insert(t,{type:0/* ChangeType.Added */,doc:e.doc}):1/* ChangeType.Removed */===e.type&&0/* ChangeType.Added */===n.type?this.k_=this.k_.remove(t):1/* ChangeType.Removed */===e.type&&2/* ChangeType.Modified */===n.type?this.k_=this.k_.insert(t,{type:1/* ChangeType.Removed */,doc:n.doc}):0/* ChangeType.Added */===e.type&&1/* ChangeType.Removed */===n.type?this.k_=this.k_.insert(t,{type:2/* ChangeType.Modified */,doc:e.doc}):// Added->Added
// Removed->Removed
// Modified->Added
// Removed->Modified
// Metadata->Added
// Removed->Metadata
E():this.k_=this.k_.insert(t,e)}q_(){let e=[];return this.k_.inorderTraversal((t,n)=>{e.push(n)}),e}}class rD{constructor(e,t,n,r,i,s,a,o,l){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=a,this.excludesMetadataChanges=o,this.hasCachedResults=l}/** Returns a view snapshot as if all documents in the snapshot were added. */static fromInitialDocuments(e,t,n,r,i){let s=[];return t.forEach(e=>{s.push({type:0/* ChangeType.Added */,doc:e})}),new rD(e,t,rS.emptySet(t),s,n,r,/* syncStateChanged= */!0,/* excludesMetadataChanges= */!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&e8(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==n[e].type||!t[e].doc.isEqual(n[e].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Holds the listeners and the last received ViewSnapshot for a query being
 * tracked by EventManager.
 */class rN{constructor(){this.Q_=void 0,this.listeners=[]}}class rk{constructor(){this.queries=new ti(e=>te(e),e8),this.onlineState="Unknown"/* OnlineState.Unknown */,this.K_=new Set}}async function rx(e,t){let n=t.query,r=!1,i=e.queries.get(n);if(i||(r=!0,i=new rN),r)try{i.Q_=await e.onListen(n)}catch(n){let e=rC(n,`Initialization of query '${tt(t.query)}' failed`);return void t.onError(e)}e.queries.set(n,i),i.listeners.push(t),t.U_(e.onlineState),i.Q_&&t.W_(i.Q_)&&rM(e)}async function rR(e,t){let n=t.query,r=!1,i=e.queries.get(n);if(i){let e=i.listeners.indexOf(t);e>=0&&(i.listeners.splice(e,1),r=0===i.listeners.length)}if(r)return e.queries.delete(n),e.onUnlisten(n)}function rL(e,t){let n=!1;for(let r of t){let t=r.query,i=e.queries.get(t);if(i){for(let e of i.listeners)e.W_(r)&&(n=!0);i.Q_=r}}n&&rM(e)}function rO(e,t,n){let r=e.queries.get(t);if(r)for(let e of r.listeners)e.onError(n);// Remove all listeners. NOTE: We don't need to call syncEngine.unlisten()
// after an error.
e.queries.delete(t)}// Call all global snapshot listeners that have been set.
function rM(e){e.K_.forEach(e=>{e.next()})}/**
 * QueryListener takes a series of internal view snapshots and determines
 * when to raise the event.
 *
 * It uses an Observer to dispatch events.
 */class rP{constructor(e,t,n){this.query=e,this.G_=t,/**
         * Initial snapshots (e.g. from cache) may not be propagated to the wrapped
         * observer. This flag is set to true once we've actually raised an event.
         */this.z_=!1,this.j_=null,this.onlineState="Unknown"/* OnlineState.Unknown */,this.options=n||{}}/**
     * Applies the new ViewSnapshot to this listener, raising a user-facing event
     * if applicable (depending on what changed, whether the user has opted into
     * metadata-only changes, etc.). Returns true if a user-facing event was
     * indeed raised.
     */W_(e){if(!this.options.includeMetadataChanges){// Remove the metadata only changes.
let t=[];for(let n of e.docChanges)3/* ChangeType.Metadata */!==n.type&&t.push(n);e=new rD(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,/* excludesMetadataChanges= */!0,e.hasCachedResults)}let t=!1;return this.z_?this.H_(e)&&(this.G_.next(e),t=!0):this.J_(e,this.onlineState)&&(this.Y_(e),t=!0),this.j_=e,t}onError(e){this.G_.error(e)}/** Returns whether a snapshot was raised. */U_(e){this.onlineState=e;let t=!1;return this.j_&&!this.z_&&this.J_(this.j_,e)&&(this.Y_(this.j_),t=!0),t}J_(e,t){return(// Always raise the first event when we're synced
!e.fromCache||(!this.options.Z_||!("Offline"/* OnlineState.Offline */!==t))&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"/* OnlineState.Offline */===t));// Raise data from cache if we have any documents, have cached results before,
// or we are offline.
}H_(e){// We don't need to handle includeDocumentMetadataChanges here because
// the Metadata only changes have already been stripped out if needed.
// At this point the only changes we will see are the ones we should
// propagate.
if(e.docChanges.length>0)return!0;let t=this.j_&&this.j_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges;// Generally we should have hit one of the cases above, but it's possible
// to get here if there were only metadata docChanges and they got
// stripped out.
}Y_(e){e=rD.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.z_=!0,this.G_.next(e)}}/**
 * Returns a `LoadBundleTaskProgress` representing the progress that the loading
 * has succeeded.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rF{constructor(e){this.key=e}}class rV{constructor(e){this.key=e}}/**
 * View is responsible for computing the final merged truth of what docs are in
 * a query. It gets notified of local and remote changes to docs, and applies
 * the query filters and limits to determine the most correct possible results.
 */class rU{constructor(e,/** Documents included in the remote target */t){this.query=e,this.oa=t,this._a=null,this.hasCachedResults=!1,/**
         * A flag whether the view is current with the backend. A view is considered
         * current after it has seen the current flag from the backend and did not
         * lose consistency within the watch stream (e.g. because of an existence
         * filter mismatch).
         */this.current=!1,/** Documents in the view but not in the remote target */this.aa=td(),/** Document Keys that have local changes */this.mutatedKeys=td(),this.ua=tr(e),this.ca=new rS(this.ua)}/**
     * The set of remote documents that the server has told us belongs to the target associated with
     * this view.
     */get la(){return this.oa}/**
     * Iterates over a set of doc changes, applies the query limit, and computes
     * what the new results should be, what the changes were, and whether we may
     * need to go back to the local cache for more results. Does not make any
     * changes to the view.
     * @param docChanges - The doc changes to apply to this view.
     * @param previousChanges - If this is being called with a refill, then start
     *        with this set of docs and changes instead of the current view.
     * @returns a new set of docs, changes, and refill flag.
     */ha(e,t){let n=t?t.Pa:new rA,r=t?t.ca:this.ca,i=t?t.mutatedKeys:this.mutatedKeys,s=r,a=!1,o="F"/* LimitType.First */===this.query.limitType&&r.size===this.query.limit?r.last():null,l="L"/* LimitType.Last */===this.query.limitType&&r.size===this.query.limit?r.first():null;// Drop documents out to meet limit/limitToLast requirement.
if(e.inorderTraversal((e,t)=>{let u=r.get(e),h=tn(this.query,t)?t:null,c=!!u&&this.mutatedKeys.has(u.key),d=!!h&&(h.hasLocalMutations||// We only consider committed mutations for documents that were
// mutated during the lifetime of the view.
this.mutatedKeys.has(h.key)&&h.hasCommittedMutations),f=!1;u&&h?u.data.isEqual(h.data)?c!==d&&(n.track({type:3/* ChangeType.Metadata */,doc:h}),f=!0):this.Ia(u,h)||(n.track({type:2/* ChangeType.Modified */,doc:h}),f=!0,(o&&this.ua(h,o)>0||l&&0>this.ua(h,l))&&// This doc moved from inside the limit to outside the limit.
// That means there may be some other doc in the local cache
// that should be included instead.
(a=!0)):!u&&h?(n.track({type:0/* ChangeType.Added */,doc:h}),f=!0):u&&!h&&(n.track({type:1/* ChangeType.Removed */,doc:u}),f=!0,(o||l)&&// A doc was removed from a full limit query. We'll need to
// requery from the local cache to see if we know about some other
// doc that should be in the results.
(a=!0)),f&&(h?(s=s.add(h),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))}),null!==this.query.limit)for(;s.size>this.query.limit;){let e="F"/* LimitType.First */===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1/* ChangeType.Removed */,doc:e})}return{ca:s,Pa:n,es:a,mutatedKeys:i}}Ia(e,t){// We suppress the initial change event for documents that were modified as
// part of a write acknowledgment (e.g. when the value of a server transform
// is applied) as Watch will send us the same document again.
// By suppressing the event, we only raise two user visible events (one with
// `hasPendingWrites` and the final state of the document) instead of three
// (one with `hasPendingWrites`, the modified document with
// `hasPendingWrites` and the final state of the document).
return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}/**
     * Updates the view with the given ViewDocumentChanges and optionally updates
     * limbo docs and sync state from the provided target change.
     * @param docChanges - The set of changes to make to the view's docs.
     * @param updateLimboDocuments - Whether to update limbo documents based on
     *        this change.
     * @param targetChange - A target change to apply for computing limbo docs and
     *        sync state.
     * @returns A new ViewChange with the given docs, changes, and sync state.
     */// PORTING NOTE: The iOS/Android clients always compute limbo document changes.
applyChanges(e,t,n){let r=this.ca;this.ca=e.ca,this.mutatedKeys=e.mutatedKeys;// Sort changes based on type and query comparator
let i=e.Pa.q_();i.sort((e,t)=>(function(e,t){let n=e=>{switch(e){case 0/* ChangeType.Added */:return 1;case 2/* ChangeType.Modified */:case 3/* ChangeType.Metadata */:// A metadata change is converted to a modified change at the public
    // api layer.  Since we sort by document key and then change type,
    // metadata and modified changes must be sorted equivalently.
    return 2;case 1/* ChangeType.Removed */:return 0;default:return E()}};return n(e)-n(t)})(e.type,t.type)||this.ua(e.doc,t.doc)),this.da(n);let s=t?this.Ta():[],a=0===this.aa.size&&this.current?1/* SyncState.Synced */:0/* SyncState.Local */,o=a!==this._a;return(this._a=a,0!==i.length||o)?{snapshot:new rD(this.query,e.ca,r,i,e.mutatedKeys,0/* SyncState.Local */===a,o,/* excludesMetadataChanges= */!1,!!n&&n.resumeToken.approximateByteSize()>0),Ea:s}:{Ea:s}}/**
     * Applies an OnlineState change to the view, potentially generating a
     * ViewChange if the view's syncState changes as a result.
     */U_(e){return this.current&&"Offline"/* OnlineState.Offline */===e?// to refresh our syncState and generate a ViewChange as appropriate. We
// are guaranteed to get a new TargetChange that sets `current` back to
// true once the client is back online.
(this.current=!1,this.applyChanges({ca:this.ca,Pa:new rA,mutatedKeys:this.mutatedKeys,es:!1},/* updateLimboDocuments= */!1)):{Ea:[]}}/**
     * Returns whether the doc for the given key should be in limbo.
     */Aa(e){// If the remote end says it's part of this query, it's not in limbo.
return!this.oa.has(e)&&// The local store doesn't think it's a result, so it shouldn't be in limbo.
!!this.ca.has(e)&&!this.ca.get(e).hasLocalMutations}/**
     * Updates syncedDocuments, current, and limbo docs based on the given change.
     * Returns the list of changes to which docs are in limbo.
     */da(e){e&&(e.addedDocuments.forEach(e=>this.oa=this.oa.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.oa=this.oa.delete(e)),this.current=e.current)}Ta(){// We can only determine limbo documents when we're in-sync with the server.
if(!this.current)return[];// TODO(klimt): Do this incrementally so that it's not quadratic when
// updating many documents.
let e=this.aa;this.aa=td(),this.ca.forEach(e=>{this.Aa(e.key)&&(this.aa=this.aa.add(e.key))});// Diff the new limbo docs with the old limbo docs.
let t=[];return e.forEach(e=>{this.aa.has(e)||t.push(new rV(e))}),this.aa.forEach(n=>{e.has(n)||t.push(new rF(n))}),t}/**
     * Update the in-memory state of the current view with the state read from
     * persistence.
     *
     * We update the query view whenever a client's primary status changes:
     * - When a client transitions from primary to secondary, it can miss
     *   LocalStorage updates and its query views may temporarily not be
     *   synchronized with the state on disk.
     * - For secondary to primary transitions, the client needs to update the list
     *   of `syncedDocuments` since secondary clients update their query views
     *   based purely on synthesized RemoteEvents.
     *
     * @param queryResult.documents - The documents that match the query according
     * to the LocalStore.
     * @param queryResult.remoteKeys - The keys of the documents that match the
     * query according to the backend.
     *
     * @returns The ViewChange that resulted from this synchronization.
     */// PORTING NOTE: Multi-tab only.
Ra(e){this.oa=e.Ps,this.aa=td();let t=this.ha(e.documents);return this.applyChanges(t,/*updateLimboDocuments=*/!0)}/**
     * Returns a view snapshot as if this query was just listened to. Contains
     * a document add for every existing document and the `fromCache` and
     * `hasPendingWrites` status of the already established view.
     */// PORTING NOTE: Multi-tab only.
Va(){return rD.fromInitialDocuments(this.query,this.ca,this.mutatedKeys,0/* SyncState.Local */===this._a,this.hasCachedResults)}}/**
 * QueryView contains all of the data that SyncEngine needs to keep track of for
 * a particular query.
 */class rB{constructor(/**
     * The query itself.
     */e,/**
     * The target number created by the client that is used in the watch
     * stream to identify this query.
     */t,/**
     * The view is responsible for computing the final merged truth of what
     * docs are in the query. It gets notified of local and remote changes,
     * and applies the query filters and limits to determine the most correct
     * possible results.
     */n){this.query=e,this.targetId=t,this.view=n}}/** Tracks a limbo resolution. */class rj{constructor(e){this.key=e,/**
         * Set to true once we've received a document. This is used in
         * getRemoteKeysForTarget() and ultimately used by WatchChangeAggregator to
         * decide whether it needs to manufacture a delete event for the target once
         * the target is CURRENT.
         */this.ma=!1}}/**
 * An implementation of `SyncEngine` coordinating with other parts of SDK.
 *
 * The parts of SyncEngine that act as a callback to RemoteStore need to be
 * registered individually. This is done in `syncEngineWrite()` and
 * `syncEngineListen()` (as well as `applyPrimaryState()`) as these methods
 * serve as entry points to RemoteStore's functionality.
 *
 * Note: some field defined in this class might have public access level, but
 * the class is not exported so they are only accessible from this module.
 * This is useful to implement optional features (like bundles) in free
 * functions, such that they are tree-shakeable.
 */class rq{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.fa={},this.ga=new ti(e=>te(e),e8),this.pa=new Map,/**
         * The keys of documents that are in limbo for which we haven't yet started a
         * limbo resolution query. The strings in this set are the result of calling
         * `key.path.canonicalString()` where `key` is a `DocumentKey` object.
         *
         * The `Set` type was chosen because it provides efficient lookup and removal
         * of arbitrary elements and it also maintains insertion order, providing the
         * desired queue-like FIFO semantics.
         */this.ya=new Set,/**
         * Keeps track of the target ID for each document that is in limbo with an
         * active target.
         */this.wa=new J(j.comparator),/**
         * Keeps track of the information about an active limbo resolution for each
         * active target ID that was started for the purpose of limbo resolution.
         */this.Sa=new Map,this.ba=new nA,/** Stores user completion handlers, indexed by User and BatchId. */this.Da={},/** Stores user callbacks waiting for all pending writes to be acknowledged. */this.Ca=new Map,this.va=n_.Ln(),this.onlineState="Unknown"/* OnlineState.Unknown */,// startup. In the interim, a client should only be considered primary if
// `isPrimary` is true.
this.Fa=void 0}get isPrimaryClient(){return!0===this.Fa}}/**
 * Initiates the new listen, resolves promise when listen enqueued to the
 * server. All the subsequent view snapshots or errors are sent to the
 * subscribed handlers. Returns the initial snapshot.
 */async function r$(e,t){var n,r;let i,s;let a=(e.remoteStore.remoteSyncer.applyRemoteEvent=rH.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=r5.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=rW.bind(null,e),e.fa.c_=rL.bind(null,e.eventManager),e.fa.xa=rO.bind(null,e.eventManager),e),o=a.ga.get(t);if(o)// already exists when EventManager calls us for the first time. This
// happens when the primary tab is already listening to this query on
// behalf of another tab and the user of the primary also starts listening
// to the query. EventManager will not have an assigned target ID in this
// case and calls `listen` to obtain this ID.
i=o.targetId,a.sharedClientState.addLocalQueryTarget(i),s=o.view.Va();else{let e=await (n=a.localStore,r=e5(t),n.persistence.runTransaction("Allocate target","readwrite",e=>{let t;return n.Kr.getTargetData(e,r).next(i=>i?// previous targetID.
    // TODO(mcg): freshen last accessed date?
    (t=i,K.resolve(t)):n.Kr.allocateTargetId(e).next(i=>(t=new ng(r,i,"TargetPurposeListen"/* TargetPurpose.Listen */,e.currentSequenceNumber),n.Kr.addTargetData(e,t).next(()=>t))))}).then(e=>{// If Multi-Tab is enabled, the existing target data may be newer than
// the in-memory data
let t=n.rs.get(e.targetId);return(null===t||e.snapshotVersion.compareTo(t.snapshotVersion)>0)&&(n.rs=n.rs.insert(e.targetId,e),n.ss.set(r,e.targetId)),e})),o=a.sharedClientState.addLocalQueryTarget(e.targetId);i=e.targetId,s=await rz(a,t,i,"current"===o,e.resumeToken),a.isPrimaryClient&&rt(a.remoteStore,e)}return s}/**
 * Registers a view for a previously unknown query and computes its initial
 * snapshot.
 */async function rz(e,t,n,r,i){// PORTING NOTE: On Web only, we inject the code that registers new Limbo
// targets based on view changes. This allows us to only depend on Limbo
// changes when user code includes queries.
e.Ma=(t,n,r)=>(async function(e,t,n,r){let i=t.view.ha(n);i.es&&// The query has a limit and some docs were removed, so we need
    // to re-run the query against the local store to make sure we
    // didn't lose any good docs that had been past the limit.
    (i=await n$(e.localStore,t.query,/* usePreviousResults= */!1).then(({documents:e})=>t.view.ha(e,i)));let s=r&&r.targetChanges.get(t.targetId),a=t.view.applyChanges(i,/* updateLimboDocuments= */e.isPrimaryClient,s);return r2(e,t.targetId,a.Ea),a.snapshot})(e,t,n,r);let s=await n$(e.localStore,t,/* usePreviousResults= */!0),a=new rU(t,s.Ps),o=a.ha(s.documents),l=tJ.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"/* OnlineState.Offline */!==e.onlineState,i),u=a.applyChanges(o,/* updateLimboDocuments= */e.isPrimaryClient,l);r2(e,n,u.Ea);let h=new rB(t,n,a);return e.ga.set(t,h),e.pa.has(n)?e.pa.get(n).push(t):e.pa.set(n,[t]),u.snapshot}/** Stops listening to the query. */async function rK(e,t){let n=e.ga.get(t),r=e.pa.get(n.targetId);if(r.length>1)return e.pa.set(n.targetId,r.filter(e=>!e8(e,t))),void e.ga.delete(t);e.isPrimaryClient?(// We need to remove the local query target first to allow us to verify
// whether any other client is still interested in this target.
e.sharedClientState.removeLocalQueryTarget(n.targetId),e.sharedClientState.isActiveQueryTarget(n.targetId)||await nq(e.localStore,n.targetId,/*keepPersistedTargetData=*/!1).then(()=>{e.sharedClientState.clearQueryState(n.targetId),rn(e.remoteStore,n.targetId),r0(e,n.targetId)}).catch(z)):(r0(e,n.targetId),await nq(e.localStore,n.targetId,/*keepPersistedTargetData=*/!0))}/**
 * Initiates the write of local mutation batch which involves adding the
 * writes to the mutation queue, notifying the remote store about new
 * mutations and raising events for any changes this write caused.
 *
 * The promise returned by this call is resolved when the above steps
 * have completed, *not* when the write was acked by the backend. The
 * userCallback is resolved once the write was acked/rejected by the
 * backend (or failed locally for any other reason).
 */async function rG(e,t,n){var r;let i=(e.remoteStore.remoteSyncer.applySuccessfulWrite=rY.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=rX.bind(null,e),e);try{let e;let s=await function(e,t){let n,r;let i=M.now(),s=t.reduce((e,t)=>e.add(t.key),td());return e.persistence.runTransaction("Locally write mutations","readwrite",a=>{// Figure out which keys do not have a remote version in the cache, this
// is needed to create the right overlay mutation: if no remote version
// presents, we do not need to create overlays as patch mutations.
// TODO(Overlay): Is there a better way to determine this? Using the
//  document version does not work because local mutations set them back
//  to 0.
let o=ts,l=td();return e._s.getEntries(a,s).next(e=>{(o=e).forEach((e,t)=>{t.isValidDocument()||(l=l.add(e))})}).next(()=>e.localDocuments.getOverlayedDocuments(a,o)).next(r=>{n=r;// For non-idempotent mutations (such as `FieldValue.increment()`),
// we record the base state in a separate patch mutation. This is
// later used to guarantee consistent values and prevents flicker
// even if the backend sends us an update that already includes our
// transform.
let s=[];for(let e of t){let t=/**
 * If this mutation is not idempotent, returns the base value to persist with
 * this mutation. If a base value is returned, the mutation is always applied
 * to this base value, even if document has already been updated.
 *
 * The base value is a sparse object that consists of only the document
 * fields for which this mutation contains a non-idempotent transformation
 * (e.g. a numeric increment). The provided value guarantees consistent
 * behavior for non-idempotent transforms and allow us to return the same
 * latency-compensated value even if the backend has already applied the
 * mutation. The base value is null for idempotent mutations, as they can be
 * re-played even if the backend has already applied them.
 *
 * @returns a base value to store along with the mutation, or null for
 * idempotent mutations.
 */function(e,t){let n=null;for(let r of e.fieldTransforms){let e=t.data.field(r.field),i=ty(r.transform,e||null);null!=i&&(null===n&&(n=ek.empty()),n.set(r.field,i))}return n||null}(e,n.get(e.key).overlayedDocument);null!=t&&// NOTE: The base state should only be applied if there's some
// existing document to override, so use a Precondition of
// exists=true
s.push(new tM(e.key,t,/**
 * Returns a FieldMask built from all fields in a MapValue.
 */function e(t){let n=[];return Y(t.fields,(t,r)=>{let i=new B([t]);if(eA(r)){let t=e(r.mapValue).fields;if(0===t.length)n.push(i);else // leaf nodes.
for(let e of t)n.push(i.child(e))}else // nodes.
n.push(i)}),new er(n)}(t.value.mapValue),tD.exists(!0)))}return e.mutationQueue.addMutationBatch(a,i,s,t)}).next(t=>{r=t;let i=t.applyToLocalDocumentSet(n,l);return e.documentOverlayCache.saveOverlays(a,t.batchId,i)})}).then(()=>({batchId:r.batchId,changes:tl(n)}))}(i.localStore,t);i.sharedClientState.addPendingMutation(s.batchId),r=s.batchId,(e=i.Da[i.currentUser.toKey()])||(e=new J(L)),e=e.insert(r,n),i.Da[i.currentUser.toKey()]=e,await r4(i,s.changes),await rf(i.remoteStore)}catch(t){// If we can't persist the mutation, we reject the user callback and
// don't send the mutation. The user can then retry the write.
let e=rC(t,"Failed to persist write");n.reject(e)}}/**
 * Applies one remote event to the sync engine, notifying any views of the
 * changes, and releasing any pending mutation batches that would become
 * visible because of the snapshot version the remote event contains.
 */async function rH(e,t){try{let n=await /**
 * Updates the "ground-state" (remote) documents. We assume that the remote
 * event reflects any write batches that have been acknowledged or rejected
 * (i.e. we do not re-apply local mutations to updates from this event).
 *
 * LocalDocuments are re-calculated if there are remaining mutations in the
 * queue.
 */function(e,t){let n=t.snapshotVersion,r=e.rs;return e.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{var s;let a,o;let l=e._s.newChangeBuffer({trackRemovals:!0});// Reset newTargetDataByTargetMap in case this transaction gets re-run.
r=e.rs;let u=[];t.targetChanges.forEach((s,a)=>{var o;let l=r.get(a);if(!l)return;// Only update the remote keys if the target is still active. This
// ensures that we can persist the updated target data along with
// the updated assignment.
u.push(e.Kr.removeMatchingKeys(i,s.removedDocuments,a).next(()=>e.Kr.addMatchingKeys(i,s.addedDocuments,a)));let h=l.withSequenceNumber(i.currentSequenceNumber);null!==t.targetMismatches.get(a)?h=h.withResumeToken(es.EMPTY_BYTE_STRING,P.min()).withLastLimboFreeSnapshotVersion(P.min()):s.resumeToken.approximateByteSize()>0&&(h=h.withResumeToken(s.resumeToken,n)),r=r.insert(a,h),o=h,// Always persist target data if we don't already have a resume token.
(0===l.resumeToken.approximateByteSize()||o.snapshotVersion.toMicroseconds()-l.snapshotVersion.toMicroseconds()>=3e8||s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size>0)&&u.push(e.Kr.updateTargetData(i,h))});let h=ts,c=td();// HACK: The only reason we allow a null snapshot version is so that we
// can synthesize remote events when we get permission denied errors while
// trying to resolve the state of a locally cached document that is in
// limbo.
if(t.documentUpdates.forEach(n=>{t.resolvedLimboDocuments.has(n)&&u.push(e.persistence.referenceDelegate.updateLimboDocument(i,n))}),// the remote documents in advance in a single call.
u.push((s=t.documentUpdates,a=td(),o=td(),s.forEach(e=>a=a.add(e)),l.getEntries(i,a).next(e=>{let t=ts;return s.forEach((n,r)=>{let i=e.get(n);// Check if see if there is a existence state change for this document.
r.isFoundDocument()!==i.isFoundDocument()&&(o=o.add(n)),// to ensure that rejected limbo resolutions (which fabricate
// NoDocuments with SnapshotVersion.min()) never add documents to
// cache.
r.isNoDocument()&&r.version.isEqual(P.min())?// events. We remove these documents from cache since we lost
// access.
(l.removeEntry(n,r.readTime),t=t.insert(n,r)):!i.isValidDocument()||r.version.compareTo(i.version)>0||0===r.version.compareTo(i.version)&&i.hasPendingWrites?(l.addEntry(r),t=t.insert(n,r)):m("LocalStore","Ignoring outdated watch update for ",n,". Current version:",i.version," Watch version:",r.version)}),{ls:t,hs:o}})).next(e=>{h=e.ls,c=e.hs})),!n.isEqual(P.min())){let t=e.Kr.getLastRemoteSnapshotVersion(i).next(t=>e.Kr.setTargetsMetadata(i,i.currentSequenceNumber,n));u.push(t)}return K.waitFor(u).next(()=>l.apply(i)).next(()=>e.localDocuments.getLocalViewOfDocuments(i,h,c)).next(()=>h)}).then(t=>(e.rs=r,t))}(e.localStore,t);// Update `receivedDocument` as appropriate for any limbo targets.
t.targetChanges.forEach((t,n)=>{let r=e.Sa.get(n);r&&// Since this is a limbo resolution lookup, it's for a single document
// and it could be added, modified, or removed, but not a combination.
(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1||E(),t.addedDocuments.size>0?r.ma=!0:t.modifiedDocuments.size>0?r.ma||E():t.removedDocuments.size>0&&(r.ma||E(),r.ma=!1))}),await r4(e,n,t)}catch(e){await z(e)}}/**
 * Applies an OnlineState change to the sync engine and notifies any views of
 * the change.
 */function rQ(e,t,n){var r;// If we are the secondary client, we explicitly ignore the remote store's
// online state (the local client may go offline, even though the primary
// tab remains online) and only apply the primary tab's online state from
// SharedClientState.
if(e.isPrimaryClient&&0/* OnlineStateSource.RemoteStore */===n||!e.isPrimaryClient&&1/* OnlineStateSource.SharedClientState */===n){let n;let i=[];e.ga.forEach((e,n)=>{let r=n.view.U_(t);r.snapshot&&i.push(r.snapshot)}),(r=e.eventManager).onlineState=t,n=!1,r.queries.forEach((e,r)=>{for(let e of r.listeners)e.U_(t)&&(n=!0)}),n&&rM(r),i.length&&e.fa.c_(i),e.onlineState=t,e.isPrimaryClient&&e.sharedClientState.setOnlineState(t)}}/**
 * Rejects the listen for the given targetID. This can be triggered by the
 * backend for any active target.
 *
 * @param syncEngine - The sync engine implementation.
 * @param targetId - The targetID corresponds to one previously initiated by the
 * user as part of TargetData passed to listen() on RemoteStore.
 * @param err - A description of the condition that has forced the rejection.
 * Nearly always this will be an indication that the user is no longer
 * authorized to see the data matching the target.
 */async function rW(e,t,n){// PORTING NOTE: Multi-tab only.
e.sharedClientState.updateQueryState(t,"rejected",n);let r=e.Sa.get(t),i=r&&r.key;if(i){// TODO(klimt): We really only should do the following on permission
// denied errors, but we don't have the cause code here.
// It's a limbo doc. Create a synthetic event saying it was deleted.
// This is kind of a hack. Ideally, we would have a method in the local
// store to purge a document. However, it would be tricky to keep all of
// the local store's invariants with another method.
let n=new J(j.comparator);// TODO(b/217189216): This limbo document should ideally have a read time,
// so that it is picked up by any read-time based scans. The backend,
// however, does not send a read time for target removals.
n=n.insert(i,ex.newNoDocument(i,P.min()));let r=td().add(i),s=new tX(P.min(),/* targetChanges= */new Map,/* targetMismatches= */new J(L),n,r);await rH(e,s),// We only remove it from bookkeeping after we successfully applied the
// RemoteEvent. If `applyRemoteEvent()` throws, we want to re-listen to
// this query when the RemoteStore restarts the Watch stream, which should
// re-trigger the target failure.
e.wa=e.wa.remove(i),e.Sa.delete(t),r9(e)}else await nq(e.localStore,t,/* keepPersistedTargetData */!1).then(()=>r0(e,t,n)).catch(z)}async function rY(e,t){var n;let r=t.batch.batchId;try{let i=await (n=e.localStore).persistence.runTransaction("Acknowledge batch","readwrite-primary",e=>{let r=t.batch.keys(),i=n._s.newChangeBuffer({trackRemovals:!0});return(function(e,t,n,r){let i=n.batch,s=i.keys(),a=K.resolve();return s.forEach(e=>{a=a.next(()=>r.getEntry(t,e)).next(t=>{let s=n.docVersions.get(e);null!==s||E(),0>t.version.compareTo(s)&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&// We use the commitVersion as the readTime rather than the
// document's updateTime since the updateTime is not advanced
// for updates that do not modify the underlying document.
(t.setReadTime(n.commitVersion),r.addEntry(t)))})}),a.next(()=>e.mutationQueue.removeMutationBatch(t,i))})(n,e,t,i).next(()=>i.apply(e)).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=td();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t))).next(()=>n.localDocuments.getDocuments(e,r))});// The local store may or may not be able to apply the write result and
// raise events immediately (depending on whether the watcher is caught
// up), so we raise user callbacks first so that they consistently happen
// before listen events.
rZ(e,r,/*error=*/null),rJ(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await r4(e,i)}catch(e){await z(e)}}async function rX(e,t,n){var r;try{let i=await (r=e.localStore).persistence.runTransaction("Reject batch","readwrite-primary",e=>{let n;return r.mutationQueue.lookupMutationBatch(e,t).next(t=>(null!==t||E(),n=t.keys(),r.mutationQueue.removeMutationBatch(e,t))).next(()=>r.mutationQueue.performConsistencyCheck(e)).next(()=>r.documentOverlayCache.removeOverlaysForBatchId(e,n,t)).next(()=>r.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,n)).next(()=>r.localDocuments.getDocuments(e,n))});// The local store may or may not be able to apply the write result and
// raise events immediately (depending on whether the watcher is caught up),
// so we raise user callbacks first so that they consistently happen before
// listen events.
rZ(e,t,n),rJ(e,t),e.sharedClientState.updateMutationState(t,"rejected",n),await r4(e,i)}catch(e){await z(e)}}/**
 * Triggers the callbacks that are waiting for this batch id to get acknowledged by server,
 * if there are any.
 */function rJ(e,t){(e.Ca.get(t)||[]).forEach(e=>{e.resolve()}),e.Ca.delete(t)}/** Reject all outstanding callbacks waiting for pending writes to complete. */function rZ(e,t,n){let r=e.Da[e.currentUser.toKey()];// NOTE: Mutations restored from persistence won't have callbacks, so it's
// okay for there to be no callback for this ID.
if(r){let i=r.get(t);i&&(n?i.reject(n):i.resolve(),r=r.remove(t)),e.Da[e.currentUser.toKey()]=r}}function r0(e,t,n=null){for(let r of(e.sharedClientState.removeLocalQueryTarget(t),e.pa.get(t)))e.ga.delete(r),n&&e.fa.xa(r,n);e.pa.delete(t),e.isPrimaryClient&&e.ba.mr(t).forEach(t=>{e.ba.containsKey(t)||// We removed the last reference for this key
r1(e,t)})}function r1(e,t){e.ya.delete(t.path.canonicalString());// It's possible that the target already got removed because the query failed. In that case,
// the key won't exist in `limboTargetsByKey`. Only do the cleanup if we still have the target.
let n=e.wa.get(t);null!==n&&(rn(e.remoteStore,n),e.wa=e.wa.remove(t),e.Sa.delete(n),r9(e))}function r2(e,t,n){for(let r of n)r instanceof rF?(e.ba.addReference(r.key,t),function(e,t){let n=t.key,r=n.path.canonicalString();e.wa.get(n)||e.ya.has(r)||(m("SyncEngine","New document in limbo: "+n),e.ya.add(r),r9(e))}(e,r)):r instanceof rV?(m("SyncEngine","Document no longer in limbo: "+r.key),e.ba.removeReference(r.key,t),e.ba.containsKey(r.key)||// We removed the last reference for this key
r1(e,r.key)):E()}/**
 * Starts listens for documents in limbo that are enqueued for resolution,
 * subject to a maximum number of concurrent resolutions.
 *
 * Without bounding the number of concurrent resolutions, the server can fail
 * with "resource exhausted" errors which can lead to pathological client
 * behavior as seen in https://github.com/firebase/firebase-js-sdk/issues/2683.
 */function r9(e){for(;e.ya.size>0&&e.wa.size<e.maxConcurrentLimboResolutions;){var t;let n=e.ya.values().next().value;e.ya.delete(n);let r=new j(V.fromString(n)),i=e.va.next();e.Sa.set(i,new rj(r)),e.wa=e.wa.insert(r,i),rt(e.remoteStore,new ng(e5((t=r.path,new e0(t))),i,"TargetPurposeLimboResolution"/* TargetPurpose.LimboResolution */,H.ae))}}async function r4(e,t,n){let r=[],i=[],s=[];e.ga.isEmpty()||(e.ga.forEach((a,o)=>{s.push(e.Ma(o,t,n).then(t=>{// Update views if there are actual changes.
if(// secondary clients to update query state.
(t||n)&&e.isPrimaryClient&&e.sharedClientState.updateQueryState(o.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){r.push(t);let e=nP.$i(o.targetId,t);i.push(e)}}))}),await Promise.all(s),e.fa.c_(r),await async function(e,t){try{await e.persistence.runTransaction("notifyLocalViewChanges","readwrite",n=>K.forEach(t,t=>K.forEach(t.Qi,r=>e.persistence.referenceDelegate.addReference(n,t.targetId,r)).next(()=>K.forEach(t.Ki,r=>e.persistence.referenceDelegate.removeReference(n,t.targetId,r)))))}catch(e){if(!G(e))throw e;// If `notifyLocalViewChanges` fails, we did not advance the sequence
// number for the documents that were included in this transaction.
// This might trigger them to be deleted earlier than they otherwise
// would have, but it should not invalidate the integrity of the data.
m("LocalStore","Failed to update sequence numbers: "+e)}for(let n of t){let t=n.targetId;if(!n.fromCache){let n=e.rs.get(t),r=n.snapshotVersion,i=n.withLastLimboFreeSnapshotVersion(r);// Advance the last limbo free snapshot version
e.rs=e.rs.insert(t,i)}}}(e.localStore,i))}async function r6(e,t){if(!e.currentUser.isEqual(t)){m("SyncEngine","User change. New user:",t.toKey());let n=await nB(e.localStore,t);e.currentUser=t,e.Ca.forEach(e=>{e.forEach(e=>{e.reject(new b(_.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))})}),e.Ca.clear(),e.sharedClientState.handleUserChange(t,n.removedBatchIds,n.addedBatchIds),await r4(e,n.cs)}}function r5(e,t){let n=e.Sa.get(t);if(n&&n.ma)return td().add(n.key);{let n=td(),r=e.pa.get(t);if(!r)return n;for(let t of r){let r=e.ga.get(t);n=n.unionWith(r.view.la)}return n}}class r3{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=n1(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){var /** Manages our in-memory or durable persistence. */t,n,r,i;return t=this.persistence,n=new nV,r=e.initialUser,i=this.serializer,new nU(t,n,r,i)}createPersistence(e){return new nL(nM.Jr,this.serializer)}createSharedClientState(e){return new nK}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}/**
 * Initializes and wires the components that are needed to interface with the
 * network.
 */class r7{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,/* startAsPrimary=*/!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>rQ(this.syncEngine,e,1/* OnlineStateSource.SharedClientState */),this.remoteStore.remoteSyncer.handleCredentialChange=r6.bind(null,this.syncEngine),await r_(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new rk}createDatastore(e){var t,n,r;let i=n1(e.databaseInfo.databaseId),s=(t=e.databaseInfo,new nZ(t));return n=e.authCredentials,r=e.appCheckCredentials,new n5(n,r,s,i)}createRemoteStore(e){var t,n,r,i;return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=nH.C()?new nH:new nG,new n7(t,n,r,e=>rQ(this.syncEngine,e,0/* OnlineStateSource.RemoteStore */),i)}createSyncEngine(e,t){return function(e,t,n,r,i,s,a){let o=new rq(e,t,n,r,i,s);return a&&(o.Fa=!0),o}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){m("RemoteStore","RemoteStore shutting down."),e.F_.add(5/* OfflineCause.Shutdown */),await re(e),e.x_.shutdown(),// triggering spurious listener events with cached data, etc.
e.O_.set("Unknown"/* OnlineState.Unknown */)}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * On web, a `ReadableStream` is wrapped around by a `ByteStreamReader`.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//*
 * A wrapper implementation of Observer<T> that will dispatch events
 * asynchronously. To allow immediate silencing, a mute call is added which
 * causes events scheduled to no longer be raised.
 */class r8{constructor(e){this.observer=e,/**
         * When set to true, will not raise future events. Necessary to deal with
         * async detachment of listener.
         */this.muted=!1}next(e){this.observer.next&&this.Ba(this.observer.next,e)}error(e){this.observer.error?this.Ba(this.observer.error,e):y("Uncaught Error in snapshot listener:",e.toString())}La(){this.muted=!0}Ba(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * FirestoreClient is a top-level class that constructs and owns all of the //
 * pieces of the client SDK architecture. It is responsible for creating the //
 * async queue that is shared by all of the other components in the system. //
 */class ie{constructor(e,t,/**
     * Asynchronous queue responsible for all of our internal processing. When
     * we get incoming work from the user (via public API) or the network
     * (incoming GRPC messages), we should always schedule onto this queue.
     * This ensures all of our work is properly serialized (e.g. we don't
     * start processing a new operation while the previous one is waiting for
     * an async I/O to complete).
     */n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=d.UNAUTHENTICATED,this.clientId=R.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,async e=>{m("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(n,e=>(m("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}/**
     * Checks that the client has not been terminated. Ensures that other methods on //
     * this class cannot be called after the client is terminated. //
     */verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new b(_.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();let e=new T;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),// RemoteStore as it will prevent the RemoteStore from retrieving auth
// tokens.
this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){let t=rC(n,"Failed to shutdown persistence");e.reject(t)}}),e.promise}}async function it(e,t){e.asyncQueue.verifyOperationInProgress(),m("FirestoreClient","Initializing OfflineComponentProvider");let n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async e=>{r.isEqual(e)||(await nB(t.localStore,e),r=e)}),// need to be terminated to allow the delete to succeed.
t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function ir(e,t){e.asyncQueue.verifyOperationInProgress();let n=await ii(e);m("FirestoreClient","Initializing OnlineComponentProvider");let r=await e.getConfiguration();await t.initialize(n,r),// precedence over the offline component provider.
e.setCredentialChangeListener(e=>rE(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,n)=>rE(t.remoteStore,n)),e._onlineComponents=t}async function ii(e){if(!e._offlineComponents){if(e._uninitializedComponentsProvider){m("FirestoreClient","Using user provided OfflineComponentProvider");try{await it(e,e._uninitializedComponentsProvider._offline)}catch(t){if(!("FirebaseError"===t.name?t.code===_.FAILED_PRECONDITION||t.code===_.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||// When the browser is out of quota we could get either quota exceeded
// or an aborted error depending on whether the error happened during
// schema migration.
22===t.code||20===t.code||// Firefox Private Browsing mode disables IndexedDb and returns
// INVALID_STATE for any usage.
11===t.code))throw t;v("Error using user provided cache. Falling back to memory cache: "+t),await it(e,new r3)}}else m("FirestoreClient","Using default OfflineComponentProvider"),await it(e,new r3)}return e._offlineComponents}async function is(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(m("FirestoreClient","Using user provided OnlineComponentProvider"),await ir(e,e._uninitializedComponentsProvider._online)):(m("FirestoreClient","Using default OnlineComponentProvider"),await ir(e,new r7))),e._onlineComponents}async function ia(e){let t=await is(e),n=t.eventManager;return n.onListen=r$.bind(null,t.syncEngine),n.onUnlisten=rK.bind(null,t.syncEngine),n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Compares two `ExperimentalLongPollingOptions` objects for equality.
 *//**
 * Creates and returns a new `ExperimentalLongPollingOptions` with the same
 * option values as the given instance.
 */function io(e){let t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let il=new Map;/**
 * An instance map that ensures only one Datastore exists per Firestore
 * instance.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iu(e,t,n){if(!n)throw new b(_.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}/**
 * Validates that `path` refers to a document (indicated by the fact it contains
 * an even numbers of segments).
 */function ih(e){if(!j.isDocumentKey(e))throw new b(_.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}/**
 * Validates that `path` refers to a collection (indicated by the fact it
 * contains an odd numbers of segments).
 */function ic(e){if(j.isDocumentKey(e))throw new b(_.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}/**
 * Returns true if it's a non-null object without a custom prototype
 * (i.e. excludes Array, Date, etc.).
 *//** Returns a string describing the type / value of the provided input. */function id(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{var t;let n=(t=e).constructor?t.constructor.name:null;return n?`a custom ${n} object`:"an object"}}return"function"==typeof e?"a function":E()}function ip(e,t){if("_delegate"in e&&// Unwrap Compat types
// eslint-disable-next-line @typescript-eslint/no-explicit-any
(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new b(_.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let n=id(e);throw new b(_.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */// settings() defaults:
/**
 * A concrete type describing all the values that can be applied via a
 * user-supplied `FirestoreSettings` object. This is a separate type so that
 * defaults can be supplied and the value can be checked for equality.
 */class ig{constructor(e){var t,n;if(void 0===e.host){if(void 0!==e.ssl)throw new b(_.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new b(_.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}/**
 * Validates that two boolean options are not set at the same time.
 * @internal
 */(function(e,t,n,r){if(!0===t&&!0===r)throw new b(_.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:// the TypeScript compiler has narrowed the type to boolean already.
// noinspection PointlessBooleanExpressionJS
this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=io(null!==(n=e.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new b(_.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new b(_.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new b(_.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){var t,n;return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,n=e.experimentalLongPollingOptions,t.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class im{/** @hideconstructor */constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,/**
         * Whether it's a Firestore or Firestore Lite instance.
         */this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ig({}),this._settingsFrozen=!1}/**
     * The {@link @firebase/app#FirebaseApp} associated with this `Firestore` service
     * instance.
     */get app(){if(!this._app)throw new b(_.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new b(_.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ig(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new C;switch(e.type){case"firstParty":return new N(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new b(_.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}/** Returns a JSON-serializable representation of this `Firestore` instance. */toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}/**
     * Terminates all components used by this client. Subclasses can override
     * this method to clean up their own dependencies, but must also call this
     * method.
     *
     * Only ever called once.
     */_terminate(){/**
 * Removes all components associated with the provided instance. Must be called
 * when the `Firestore` instance is terminated.
 */return function(e){let t=il.get(e);t&&(m("ComponentProvider","Removing Datastore"),il.delete(e),t.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * A `Query` refers to a query which you can read or listen to. You can also
 * construct refined `Query` objects by adding filters and ordering.
 */class iy{// This is the lite version of the Query class in the main SDK.
/** @hideconstructor protected */constructor(e,/**
     * If provided, the `FirestoreDataConverter` associated with this instance.
     */t,n){this.converter=t,this._query=n,/** The type of this Firestore reference. */this.type="query",this.firestore=e}withConverter(e){return new iy(this.firestore,e,this._query)}}/**
 * A `DocumentReference` refers to a document location in a Firestore database
 * and can be used to write, read, or listen to the location. The document at
 * the referenced location may or may not exist.
 */class iv{/** @hideconstructor */constructor(e,/**
     * If provided, the `FirestoreDataConverter` associated with this instance.
     */t,n){this.converter=t,this._key=n,/** The type of this Firestore reference. */this.type="document",this.firestore=e}get _path(){return this._key.path}/**
     * The document's identifier within its collection.
     */get id(){return this._key.path.lastSegment()}/**
     * A string representing the path of the referenced document (relative
     * to the root of the database).
     */get path(){return this._key.path.canonicalString()}/**
     * The collection this `DocumentReference` belongs to.
     */get parent(){return new iw(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new iv(this.firestore,e,this._key)}}/**
 * A `CollectionReference` object can be used for adding documents, getting
 * document references, and querying for documents (using {@link (query:1)}).
 */class iw extends iy{/** @hideconstructor */constructor(e,t,n){super(e,t,new e0(n)),this._path=n,/** The type of this Firestore reference. */this.type="collection"}/** The collection's identifier. */get id(){return this._query.path.lastSegment()}/**
     * A string representing the path of the referenced collection (relative
     * to the root of the database).
     */get path(){return this._query.path.canonicalString()}/**
     * A reference to the containing `DocumentReference` if this is a
     * subcollection. If this isn't a subcollection, the reference is null.
     */get parent(){let e=this._path.popLast();return e.isEmpty()?null:new iv(this.firestore,/* converter= */null,new j(e))}withConverter(e){return new iw(this.firestore,e,this._path)}}function iE(e,t,...n){if(e=(0,u.getModularInstance)(e),iu("collection","path",t),e instanceof im){let r=V.fromString(t,...n);return ic(r),new iw(e,/* converter= */null,r)}{if(!(e instanceof iv||e instanceof iw))throw new b(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=e._path.child(V.fromString(t,...n));return ic(r),new iw(e.firestore,/* converter= */null,r)}}function i_(e,t,...n){if(e=(0,u.getModularInstance)(e),// 'undefined' and 'null'.
1==arguments.length&&(t=R.V()),iu("doc","path",t),e instanceof im){let r=V.fromString(t,...n);return ih(r),new iv(e,/* converter= */null,new j(r))}{if(!(e instanceof iv||e instanceof iw))throw new b(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=e._path.child(V.fromString(t,...n));return ih(r),new iv(e.firestore,e instanceof iw?e.converter:null,new j(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ib{constructor(){// The last promise in the queue.
this.Za=Promise.resolve(),// retried with backoff.
this.Xa=[],// be changed again.
this.eu=!1,// automatically removed after they are run or canceled.
this.tu=[],this.nu=null,// assertion sanity-checks.
this.ru=!1,this.iu=!1,this.su=[],this.Ho=new n2(this,"async_queue_retry"/* TimerId.AsyncQueueRetry */),// operations. Meant to speed up recovery when we regain file system access
// after page comes into foreground.
this.ou=()=>{let e=n0();e&&m("AsyncQueue","Visibility state changed to "+e.visibilityState),this.Ho.$o()};let e=n0();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.ou)}get isShuttingDown(){return this.eu}/**
     * Adds a new operation to the queue without waiting for it to complete (i.e.
     * we ignore the Promise result).
     */enqueueAndForget(e){// eslint-disable-next-line @typescript-eslint/no-floating-promises
this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this._u(),this.au(e)}enterRestrictedMode(e){if(!this.eu){this.eu=!0,this.iu=e||!1;let t=n0();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.ou)}}enqueue(e){if(this._u(),this.eu)return new Promise(()=>{});// Create a deferred Promise that we can return to the callee. This
// allows us to return a "hanging Promise" only to the callee and still
// advance the queue even when the operation is not run.
let t=new T;return this.au(()=>this.eu&&this.iu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xa.push(e),this.uu()))}/**
     * Runs the next operation from the retryable queue. If the operation fails,
     * reschedules with backoff.
     */async uu(){if(0!==this.Xa.length){try{await this.Xa[0](),this.Xa.shift(),this.Ho.reset()}catch(e){if(!G(e))throw e;// Failure will be handled by AsyncQueue
m("AsyncQueue","Operation failed with retryable error: "+e)}this.Xa.length>0&&// If there are additional operations, we re-schedule `retryNextOp()`.
// This is necessary to run retryable operations that failed during
// their initial attempt since we don't know whether they are already
// enqueued. If, for example, `op1`, `op2`, `op3` are enqueued and `op1`
// needs to  be re-run, we will run `op1`, `op1`, `op2` using the
// already enqueued calls to `retryNextOp()`. `op3()` will then run in the
// call scheduled here.
// Since `backoffAndRun()` cancels an existing backoff and schedules a
// new backoff on every call, there is only ever a single additional
// operation in the queue.
this.Ho.Qo(()=>this.uu())}}au(e){let t=this.Za.then(()=>(this.ru=!0,e().catch(e=>{let t;this.nu=e,this.ru=!1;let n=(t=e.message||"",e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t);// Re-throw the error so that this.tail becomes a rejected Promise and
    // all further attempts to chain (via .then) will just short-circuit
    // and return the rejected Promise.
    throw y("INTERNAL UNHANDLED ERROR: ",n),e}).then(e=>(this.ru=!1,e))));return this.Za=t,t}enqueueAfterDelay(e,t,n){this._u(),this.su.indexOf(e)>-1&&(t=0);let r=rI.createAndSchedule(this,e,t,n,e=>this.cu(e));return this.tu.push(r),r}_u(){this.nu&&E()}verifyOperationInProgress(){}/**
     * Waits until all currently queued tasks are finished executing. Delayed
     * operations are not run.
     */async lu(){// Operations in the queue prior to draining may have enqueued additional
// operations. Keep draining the queue until the tail is no longer advanced,
// which indicates that no more new operations were enqueued and that all
// operations were executed.
let e;do e=this.Za,await e;while(e!==this.Za)}/**
     * For Tests: Determine if a delayed operation with a particular TimerId
     * exists.
     */hu(e){for(let t of this.tu)if(t.timerId===e)return!0;return!1}/**
     * For Tests: Runs some or all delayed operations early.
     *
     * @param lastTimerId - Delayed operations up to and including this TimerId
     * will be drained. Pass TimerId.All to run all delayed operations.
     * @returns a Promise that resolves once all operations have been run.
     */Pu(e){// Note that draining may generate more delayed ops, so we do that first.
return this.lu().then(()=>{for(let t of(// Run ops in the same order they'd run if they ran naturally.
this.tu.sort((e,t)=>e.targetTimeMs-t.targetTimeMs),this.tu))if(t.skipDelay(),"all"/* TimerId.All */!==e&&t.timerId===e)break;return this.lu()})}/**
     * For Tests: Skip all subsequent delays for a timer id.
     */Iu(e){this.su.push(e)}/** Called once a DelayedOperation is run or canceled. */cu(e){// NOTE: indexOf / slice are O(n), but delayedOperations is expected to be small.
let t=this.tu.indexOf(e);this.tu.splice(t,1)}}/**
 * The Cloud Firestore service interface.
 *
 * Do not call this constructor directly. Instead, use {@link (getFirestore:1)}.
 */class iT extends im{/** @hideconstructor */constructor(e,t,n,r){super(e,t,n,r),/**
         * Whether it's a {@link Firestore} or Firestore Lite instance.
         */this.type="firestore",this._queue=new ib,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||// The client must be initialized to ensure that all subsequent API
// usage throws an exception.
iS(this),this._firestoreClient.terminate()}}function iI(e,t){let n="object"==typeof e?e:(0,a.getApp)(),r=(0,a._getProvider)(n,"firestore").getImmediate({identifier:"string"==typeof e?e:t||"(default)"});if(!r._initialized){let e=(0,u.getDefaultEmulatorHostnameAndPort)("firestore");e&&/**
 * Modify this instance to communicate with the Cloud Firestore emulator.
 *
 * Note: This must be called before this instance has been used to do any
 * operations.
 *
 * @param firestore - The `Firestore` instance to configure to connect to the
 * emulator.
 * @param host - the emulator host (ex: localhost).
 * @param port - the emulator port (ex: 9000).
 * @param options.mockUserToken - the mock auth token to use for unit testing
 * Security Rules.
 */function(e,t,n,r={}){var i;let s=(e=ip(e,im))._getSettings(),a=`${t}:${n}`;if("firestore.googleapis.com"!==s.host&&s.host!==a&&v("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=d.MOCK_USER;else{// Let createMockUserToken validate first (catches common mistakes like
// invalid field "uid" and missing field "sub" / "user_id".)
t=(0,u.createMockUserToken)(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);let s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new b(_.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new d(s)}e._authCredentials=new S(new I(t,n))}}(r,...e)}return r}/**
 * @internal
 */function iC(e){return e._firestoreClient||iS(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function iS(e){var t,n,r,i,s,a;let o=e._freezeSettings(),l=(i=e._databaseId,s=(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",a=e._persistenceKey,new ef(i,s,a,o.host,o.ssl,o.experimentalForceLongPolling,o.experimentalAutoDetectLongPolling,io(o.experimentalLongPollingOptions),o.useFetchStreams));e._firestoreClient=new ie(e._authCredentials,e._appCheckCredentials,e._queue,l),(null===(n=o.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=o.localCache)||void 0===r?void 0:r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:o.localCache.kind,_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * An immutable object representing an array of bytes.
 */class iA{/** @hideconstructor */constructor(e){this._byteString=e}/**
     * Creates a new `Bytes` object from the given Base64 string, converting it to
     * bytes.
     *
     * @param base64 - The Base64 string used to create the `Bytes` object.
     */static fromBase64String(e){try{return new iA(es.fromBase64String(e))}catch(e){throw new b(_.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}/**
     * Creates a new `Bytes` object from the given Uint8Array.
     *
     * @param array - The Uint8Array used to create the `Bytes` object.
     */static fromUint8Array(e){return new iA(es.fromUint8Array(e))}/**
     * Returns the underlying bytes as a Base64-encoded string.
     *
     * @returns The Base64-encoded string created from the `Bytes` object.
     */toBase64(){return this._byteString.toBase64()}/**
     * Returns the underlying bytes in a new `Uint8Array`.
     *
     * @returns The Uint8Array created from the `Bytes` object.
     */toUint8Array(){return this._byteString.toUint8Array()}/**
     * Returns a string representation of the `Bytes` object.
     *
     * @returns A string representation of the `Bytes` object.
     */toString(){return"Bytes(base64: "+this.toBase64()+")"}/**
     * Returns true if this `Bytes` object is equal to the provided one.
     *
     * @param other - The `Bytes` object to compare against.
     * @returns true if this `Bytes` object is equal to the provided one.
     */isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * A `FieldPath` refers to a field in a document. The path may consist of a
 * single field name (referring to a top-level field in the document), or a
 * list of field names (referring to a nested field in the document).
 *
 * Create a `FieldPath` by providing field names. If more than one field
 * name is provided, the path will point to a nested field in a document.
 */class iD{/**
     * Creates a `FieldPath` from the provided field names. If more than one field
     * name is provided, the path will point to a nested field in a document.
     *
     * @param fieldNames - A list of field names.
     */constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new b(_.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new B(e)}/**
     * Returns true if this `FieldPath` is equal to the provided one.
     *
     * @param other - The `FieldPath` to compare against.
     * @returns true if this `FieldPath` is equal to the provided one.
     */isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Sentinel values that can be used when writing document fields with `set()`
 * or `update()`.
 */class iN{/**
     * @param _methodName - The public API endpoint that returns this class.
     * @hideconstructor
     */constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * An immutable object representing a geographic location in Firestore. The
 * location is represented as latitude/longitude pair.
 *
 * Latitude values are in the range of [-90, 90].
 * Longitude values are in the range of [-180, 180].
 */class ik{/**
     * Creates a new immutable `GeoPoint` object with the provided latitude and
     * longitude values.
     * @param latitude - The latitude as number between -90 and 90.
     * @param longitude - The longitude as number between -180 and 180.
     */constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new b(_.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new b(_.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}/**
     * The latitude of this `GeoPoint` instance.
     */get latitude(){return this._lat}/**
     * The longitude of this `GeoPoint` instance.
     */get longitude(){return this._long}/**
     * Returns true if this `GeoPoint` is equal to the provided one.
     *
     * @param other - The `GeoPoint` to compare against.
     * @returns true if this `GeoPoint` is equal to the provided one.
     */isEqual(e){return this._lat===e._lat&&this._long===e._long}/** Returns a JSON-serializable representation of this GeoPoint. */toJSON(){return{latitude:this._lat,longitude:this._long}}/**
     * Actually private to JS consumers of our API, so this function is prefixed
     * with an underscore.
     */_compareTo(e){return L(this._lat,e._lat)||L(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ix=/^__.*__$/;/** The result of parsing document data (e.g. for a setData call). */class iR{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new tM(e,this.data,this.fieldMask,t,this.fieldTransforms):new tO(e,this.data,t,this.fieldTransforms)}}/** The result of parsing "update" data (i.e. for an updateData call). */class iL{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new tM(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function iO(e){switch(e){case 0/* UserDataSource.Set */:// fall through
case 2/* UserDataSource.MergeSet */:// fall through
case 1/* UserDataSource.Update */:return!0;case 3/* UserDataSource.Argument */:case 4/* UserDataSource.ArrayArgument */:return!1;default:throw E()}}/** A "context" object passed around while parsing user data. */class iM{/**
     * Initializes a ParseContext with the given source and path.
     *
     * @param settings - The settings for the parser.
     * @param databaseId - The database ID of the Firestore instance.
     * @param serializer - The serializer to use to generate the Value proto.
     * @param ignoreUndefinedProperties - Whether to ignore undefined properties
     * rather than throw.
     * @param fieldTransforms - A mutable list of field transforms encountered
     * while parsing the data.
     * @param fieldMask - A mutable list of field paths encountered while parsing
     * the data.
     *
     * TODO(b/34871131): We don't support array paths right now, so path can be
     * null to indicate the context represents any location within an array (in
     * which case certain features will not work and errors will be somewhat
     * compromised).
     */constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,// external call and we need to validate the entire path.
void 0===i&&this.du(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Tu(){return this.settings.Tu}/** Returns a new context with the specified settings overwritten. */Eu(e){return new iM(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Au(e){var t;let n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Eu({path:n,Ru:!1});return r.Vu(e),r}mu(e){var t;let n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Eu({path:n,Ru:!1});return r.du(),r}fu(e){// TODO(b/34871131): We don't support array paths right now; so make path
// undefined.
return this.Eu({path:void 0,Ru:!0})}gu(e){return iH(e,this.settings.methodName,this.settings.pu||!1,this.path,this.settings.yu)}/** Returns 'true' if 'fieldPath' was traversed when creating this context. */contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}du(){// TODO(b/34871131): Remove null check once we have proper paths for fields
// within arrays.
if(this.path)for(let e=0;e<this.path.length;e++)this.Vu(this.path.get(e))}Vu(e){if(0===e.length)throw this.gu("Document fields must not be empty");if(iO(this.Tu)&&ix.test(e))throw this.gu('Document fields cannot begin and end with "__"')}}/**
 * Helper for parsing raw user input (provided via the API) into internal model
 * classes.
 */class iP{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||n1(e)}/** Creates a new top-level parse context. */wu(e,t,n,r=!1){return new iM({Tu:e,methodName:t,yu:n,path:B.emptyPath(),Ru:!1,pu:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function iF(e){let t=e._freezeSettings(),n=n1(e._databaseId);return new iP(e._databaseId,!!t.ignoreUndefinedProperties,n)}class iV extends iN{_toFieldTransform(e){if(2/* UserDataSource.MergeSet */!==e.Tu)throw 1/* UserDataSource.Update */===e.Tu?e.gu(`${this._methodName}() can only appear at the top level of your update data`):e.gu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);// No transform to add for a delete, but we need to add it to our
// fieldMask so it gets deleted.
return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof iV}}class iU extends iN{_toFieldTransform(e){return new tS(e.path,new tv)}isEqual(e){return e instanceof iU}}/**
 * Parses user data to Protobuf Values.
 *
 * @param input - Data to be parsed.
 * @param context - A context object representing the current path being parsed,
 * the source of the data being parsed, etc.
 * @returns The parsed value, or null if the value was a FieldValue sentinel
 * that should not be included in the resulting parsed data.
 */function iB(e,t){if(iq(// from firestore-exp.
e=(0,u.getModularInstance)(e)))return i$("Unsupported field value:",t,e),ij(e,t);if(e instanceof iN)// in which case we do not want to include this field in our parsed data
// (as doing so will overwrite the field directly prior to the transform
// trying to transform it). So we don't add this location to
// context.fieldMask and we return null as our parsing result.
/**
 * "Parses" the provided FieldValueImpl, adding any necessary transforms to
 * context.fieldTransforms.
 */return function(e,t){// Sentinels are only supported with writes, and not within arrays.
if(!iO(t.Tu))throw t.gu(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.gu(`${e._methodName}() is not currently supported inside arrays`);let n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)// don't handle this below. If `ignoreUndefinedProperties` is false,
// `parseScalarValue` will reject an undefined value.
return null;if(// field mask paths more granular than the top-level array.
t.path&&t.fieldMask.push(t.path),e instanceof Array){// TODO(b/34871131): Include the path containing the array in the error
// message.
// In the case of IN queries, the parsed data is an array (representing
// the set of values to be included for the IN query) that may directly
// contain additional arrays (each representing an individual field
// value), so we disable this validation.
if(t.settings.Ru&&4/* UserDataSource.ArrayArgument */!==t.Tu)throw t.gu("Nested arrays are not supported");return function(e,t){let n=[],r=0;for(let i of e){let e=iB(i,t.fu(r));null==e&&// Just include nulls in the array for fields being replaced with a
// sentinel.
(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=(0,u.getModularInstance)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e){var n,r,i;return n=t.serializer,"number"==typeof(i=r=e)&&Number.isInteger(i)&&!Q(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER?tg(r):tp(n,r)}if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){let n=M.fromDate(e);return{timestampValue:nt(t.serializer,n)}}if(e instanceof M){// Firestore backend truncates precision down to microseconds. To ensure
// offline mode works the same with regards to truncation, perform the
// truncation immediately without waiting for the backend to do that.
let n=new M(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:nt(t.serializer,n)}}if(e instanceof ik)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof iA)return{bytesValue:nn(t.serializer,e._byteString)};if(e instanceof iv){let n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.gu(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:ni(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.gu(`Unsupported field value: ${id(e)}`)}(e,t)}function ij(e,t){let n={};return X(e)?// mask to ensure that the server creates a map entry.
t.path&&t.path.length>0&&t.fieldMask.push(t.path):Y(e,(e,r)=>{let i=iB(r,t.Au(e));null!=i&&(n[e]=i)}),{mapValue:{fields:n}}}function iq(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof M||e instanceof ik||e instanceof iA||e instanceof iv||e instanceof iN)}function i$(e,t,n){if(!iq(n)||!("object"==typeof n&&null!==n&&(Object.getPrototypeOf(n)===Object.prototype||null===Object.getPrototypeOf(n)))){let r=id(n);throw"an object"===r?t.gu(e+" a custom object"):t.gu(e+" "+r)}}/**
 * Helper that calls fromDotSeparatedString() but wraps any error thrown.
 */function iz(e,t,n){if(// FieldPath.
(t=(0,u.getModularInstance)(t))instanceof iD)return t._internalPath;if("string"==typeof t)return iG(e,t);throw iH("Field path arguments must be of type string or ",e,/* hasConverter= */!1,/* path= */void 0,n)}/**
 * Matches any characters in a field path string that are reserved.
 */let iK=RegExp("[~\\*/\\[\\]]");/**
 * Wraps fromDotSeparatedString with an error message about the method that
 * was thrown.
 * @param methodName - The publicly visible method name
 * @param path - The dot-separated string form of a field path which will be
 * split on dots.
 * @param targetDoc - The document against which the field path will be
 * evaluated.
 */function iG(e,t,n){if(t.search(iK)>=0)throw iH(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,/* hasConverter= */!1,/* path= */void 0,n);try{return new iD(...t.split("."))._internalPath}catch(r){throw iH(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,/* hasConverter= */!1,/* path= */void 0,n)}}function iH(e,t,n,r,i){let s=r&&!r.isEmpty(),a=void 0!==i,o=`Function ${t}() called with invalid data`;n&&(o+=" (via `toFirestore()`)"),o+=". ";let l="";return(s||a)&&(l+=" (found",s&&(l+=` in field ${r}`),a&&(l+=` in document ${i}`),l+=")"),new b(_.INVALID_ARGUMENT,o+e+l)}/** Checks `haystack` if FieldPath `needle` is present. Runs in O(n). */function iQ(e,t){return e.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * A `DocumentSnapshot` contains data read from a document in your Firestore
 * database. The data can be extracted with `.data()` or `.get(<field>)` to
 * get a specific field.
 *
 * For a `DocumentSnapshot` that points to a non-existing document, any data
 * access will return 'undefined'. You can use the `exists()` method to
 * explicitly verify a document's existence.
 */class iW{// Note: This class is stripped down version of the DocumentSnapshot in
// the legacy SDK. The changes are:
// - No support for SnapshotMetadata.
// - No support for SnapshotOptions.
/** @hideconstructor protected */constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}/** Property of the `DocumentSnapshot` that provides the document's ID. */get id(){return this._key.path.lastSegment()}/**
     * The `DocumentReference` for the document included in the `DocumentSnapshot`.
     */get ref(){return new iv(this._firestore,this._converter,this._key)}/**
     * Signals whether or not the document at the snapshot's location exists.
     *
     * @returns true if the document exists.
     */exists(){return null!==this._document}/**
     * Retrieves all fields in the document as an `Object`. Returns `undefined` if
     * the document doesn't exist.
     *
     * @returns An `Object` containing all fields in the document or `undefined`
     * if the document doesn't exist.
     */data(){if(this._document){if(this._converter){// We only want to use the converter and create a new DocumentSnapshot
// if a converter has been provided.
let e=new iY(this._firestore,this._userDataWriter,this._key,this._document,/* converter= */null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}/**
     * Retrieves the field specified by `fieldPath`. Returns `undefined` if the
     * document or field doesn't exist.
     *
     * @param fieldPath - The path (for example 'foo' or 'foo.bar') to a specific
     * field.
     * @returns The data at the specified field location or undefined if no such
     * field exists in the document.
     */// We are using `any` here to avoid an explicit cast by our users.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
get(e){if(this._document){let t=this._document.data.field(iX("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}/**
 * A `QueryDocumentSnapshot` contains data read from a document in your
 * Firestore database as part of a query. The document is guaranteed to exist
 * and its data can be extracted with `.data()` or `.get(<field>)` to get a
 * specific field.
 *
 * A `QueryDocumentSnapshot` offers the same API surface as a
 * `DocumentSnapshot`. Since query results contain only existing documents, the
 * `exists` property will always be true and `data()` will never return
 * 'undefined'.
 */class iY extends iW{/**
     * Retrieves all fields in the document as an `Object`.
     *
     * @override
     * @returns An `Object` containing all fields in the document.
     */data(){return super.data()}}/**
 * Helper that calls `fromDotSeparatedString()` but wraps any error thrown.
 */function iX(e,t){return"string"==typeof t?iG(e,t):t instanceof iD?t._internalPath:t._delegate._internalPath}/**
 * An `AppliableConstraint` is an abstraction of a constraint that can be applied
 * to a Firestore query.
 */class iJ{}/**
 * A `QueryConstraint` is used to narrow the set of documents returned by a
 * Firestore query. `QueryConstraint`s are created by invoking {@link where},
 * {@link orderBy}, {@link (startAt:1)}, {@link (startAfter:1)}, {@link
 * (endBefore:1)}, {@link (endAt:1)}, {@link limit}, {@link limitToLast} and
 * can then be passed to {@link (query:1)} to create a new query instance that
 * also contains this `QueryConstraint`.
 */class iZ extends iJ{}function i0(e,t,...n){let r=[];for(let i of(t instanceof iJ&&r.push(t),function(e){let t=e.filter(e=>e instanceof i2).length,n=e.filter(e=>e instanceof i1).length;if(t>1||t>0&&n>0)throw new b(_.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r=r.concat(n)),r))e=i._apply(e);return e}/**
 * A `QueryFieldFilterConstraint` is used to narrow the set of documents returned by
 * a Firestore query by filtering on one or more document fields.
 * `QueryFieldFilterConstraint`s are created by invoking {@link where} and can then
 * be passed to {@link (query:1)} to create a new query instance that also contains
 * this `QueryFieldFilterConstraint`.
 */class i1 extends iZ{/**
     * @internal
     */constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,/** The type of this query constraint */this.type="where"}static _create(e,t,n){return new i1(e,t,n)}_apply(e){let t=this._parse(e);return i3(e._query,t),new iy(e.firestore,e.converter,e3(e._query,t))}_parse(e){let t=iF(e.firestore),n=function(e,t,n,r,i,s,a){let o;if(i.isKeyField()){if("array-contains"/* Operator.ARRAY_CONTAINS */===s||"array-contains-any"/* Operator.ARRAY_CONTAINS_ANY */===s)throw new b(_.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"/* Operator.IN */===s||"not-in"/* Operator.NOT_IN */===s){i5(a,s);let t=[];for(let n of a)t.push(i6(r,e,n));o={arrayValue:{values:t}}}else o=i6(r,e,a)}else"in"/* Operator.IN */!==s&&"not-in"/* Operator.NOT_IN */!==s&&"array-contains-any"/* Operator.ARRAY_CONTAINS_ANY */!==s||i5(a,s),o=/**
 * Parse a "query value" (e.g. value in a where filter or a value in a cursor
 * bound).
 *
 * @param allowArrays - Whether the query value is an array that may directly
 * contain additional arrays (e.g. the operand of an `in` query).
 */function(e,t,n,r=!1){return iB(n,e.wu(r?4/* UserDataSource.ArrayArgument */:3/* UserDataSource.Argument */,t))}(n,t,a,/* allowArrays= */"in"/* Operator.IN */===s||"not-in"/* Operator.NOT_IN */===s);return eF.create(i,s,o)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value);return n}}/**
 * A `QueryCompositeFilterConstraint` is used to narrow the set of documents
 * returned by a Firestore query by performing the logical OR or AND of multiple
 * {@link QueryFieldFilterConstraint}s or {@link QueryCompositeFilterConstraint}s.
 * `QueryCompositeFilterConstraint`s are created by invoking {@link or} or
 * {@link and} and can then be passed to {@link (query:1)} to create a new query
 * instance that also contains the `QueryCompositeFilterConstraint`.
 */class i2 extends iJ{/**
     * @internal
     */constructor(/** The type of this query constraint */e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new i2(e,t)}_parse(e){let t=this._queryConstraints.map(t=>t._parse(e)).filter(e=>e.getFilters().length>0);return 1===t.length?t[0]:eV.create(t,this._getOperator())}_apply(e){let t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){let n=e,r=t.getFlattenedFilters();for(let e of r)i3(n,e),n=e3(n,e)}(e._query,t),new iy(e.firestore,e.converter,e3(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and"/* CompositeOperator.AND */:"or"/* CompositeOperator.OR */}}/**
 * A `QueryOrderByConstraint` is used to sort the set of documents returned by a
 * Firestore query. `QueryOrderByConstraint`s are created by invoking
 * {@link orderBy} and can then be passed to {@link (query:1)} to create a new query
 * instance that also contains this `QueryOrderByConstraint`.
 *
 * Note: Documents that do not contain the orderBy field will not be present in
 * the query result.
 */class i9 extends iZ{/**
     * @internal
     */constructor(e,t){super(),this._field=e,this._direction=t,/** The type of this query constraint */this.type="orderBy"}static _create(e,t){return new i9(e,t)}_apply(e){let t=function(e,t,n){if(null!==e.startAt)throw new b(_.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new b(_.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");let r=new eM(t,n);return function(e,t){if(null===e2(e)){// This is the first order by. It must match any inequality.
let n=e9(e);null!==n&&i7(e,n,t.field)}}(e,r),r}(e._query,this._field,this._direction);return new iy(e.firestore,e.converter,function(e,t){// TODO(dimond): validate that orderBy does not list the same key twice.
let n=e.explicitOrderBy.concat([t]);return new e0(e.path,e.collectionGroup,n,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}}/**
 * Creates a {@link QueryOrderByConstraint} that sorts the query result by the
 * specified field, optionally in descending order instead of ascending.
 *
 * Note: Documents that do not contain the specified field will not be present
 * in the query result.
 *
 * @param fieldPath - The field to sort by.
 * @param directionStr - Optional direction to sort by ('asc' or 'desc'). If
 * not specified, order will be ascending.
 * @returns The created {@link QueryOrderByConstraint}.
 */function i4(e,t="asc"){let n=iX("orderBy",e);return i9._create(n,t)}function i6(e,t,n){if("string"==typeof(n=(0,u.getModularInstance)(n))){if(""===n)throw new b(_.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!e4(t)&&-1!==n.indexOf("/"))throw new b(_.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);let r=t.path.child(V.fromString(n));if(!j.isDocumentKey(r))throw new b(_.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return eb(e,new j(r))}if(n instanceof iv)return eb(e,n._key);throw new b(_.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${id(n)}.`)}/**
 * Validates that the value passed into a disjunctive filter satisfies all
 * array requirements.
 */function i5(e,t){if(!Array.isArray(e)||0===e.length)throw new b(_.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}/**
 * Given an operator, returns the set of operators that cannot be used with it.
 *
 * This is not a comprehensive check, and this function should be removed in the
 * long term. Validations should occur in the Firestore backend.
 *
 * Operators in a query must adhere to the following set of rules:
 * 1. Only one inequality per query.
 * 2. `NOT_IN` cannot be used with array, disjunctive, or `NOT_EQUAL` operators.
 */function i3(e,t){if(t.isInequality()){let n=e9(e),r=t.field;if(null!==n&&!n.isEqual(r))throw new b(_.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${r.toString()}'`);let i=e2(e);null!==i&&i7(e,r,i)}let n=function(e,t){for(let n of e)for(let e of n.getFlattenedFilters())if(t.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!="/* Operator.NOT_EQUAL */:return["!="/* Operator.NOT_EQUAL */,"not-in"/* Operator.NOT_IN */];case"array-contains-any"/* Operator.ARRAY_CONTAINS_ANY */:case"in"/* Operator.IN */:return["not-in"/* Operator.NOT_IN */];case"not-in"/* Operator.NOT_IN */:return["array-contains-any"/* Operator.ARRAY_CONTAINS_ANY */,"in"/* Operator.IN */,"not-in"/* Operator.NOT_IN */,"!="/* Operator.NOT_EQUAL */];default:return[]}}(t.op));if(null!==n)throw n===t.op?new b(_.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new b(_.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}function i7(e,t,n){if(!n.isEqual(t))throw new b(_.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class i8{convertValue(e,t="none"){switch(em(e)){case 0/* TypeOrder.NullValue */:return null;case 1/* TypeOrder.BooleanValue */:return e.booleanValue;case 2/* TypeOrder.NumberValue */:return el(e.integerValue||e.doubleValue);case 3/* TypeOrder.TimestampValue */:return this.convertTimestamp(e.timestampValue);case 4/* TypeOrder.ServerTimestampValue */:return this.convertServerTimestamp(e,t);case 5/* TypeOrder.StringValue */:return e.stringValue;case 6/* TypeOrder.BlobValue */:return this.convertBytes(eu(e.bytesValue));case 7/* TypeOrder.RefValue */:return this.convertReference(e.referenceValue);case 8/* TypeOrder.GeoPointValue */:return this.convertGeoPoint(e.geoPointValue);case 9/* TypeOrder.ArrayValue */:return this.convertArray(e.arrayValue,t);case 10/* TypeOrder.ObjectValue */:return this.convertObject(e.mapValue,t);default:throw E()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}/**
     * @internal
     */convertObjectMap(e,t="none"){let n={};return Y(e,(e,r)=>{n[e]=this.convertValue(r,t)}),n}convertGeoPoint(e){return new ik(el(e.latitude),el(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":let n=ec(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(ed(e));default:return null}}convertTimestamp(e){let t=eo(e);return new M(t.seconds,t.nanos)}convertDocumentKey(e,t){let n=V.fromString(e);np(n)||E();let r=new ep(n.get(1),n.get(3)),i=new j(n.popFirst(5));return r.isEqual(t)||// TODO(b/64130202): Somehow support foreign references.
y(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Metadata about a snapshot, describing the state of the snapshot.
 */class se{/** @hideconstructor */constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}/**
     * Returns true if this `SnapshotMetadata` is equal to the provided one.
     *
     * @param other - The `SnapshotMetadata` to compare against.
     * @returns true if this `SnapshotMetadata` is equal to the provided one.
     */isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}/**
 * A `DocumentSnapshot` contains data read from a document in your Firestore
 * database. The data can be extracted with `.data()` or `.get(<field>)` to
 * get a specific field.
 *
 * For a `DocumentSnapshot` that points to a non-existing document, any data
 * access will return 'undefined'. You can use the `exists()` method to
 * explicitly verify a document's existence.
 */class st extends iW{/** @hideconstructor protected */constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}/**
     * Returns whether or not the data exists. True if the document exists.
     */exists(){return super.exists()}/**
     * Retrieves all fields in the document as an `Object`. Returns `undefined` if
     * the document doesn't exist.
     *
     * By default, `serverTimestamp()` values that have not yet been
     * set to their final value will be returned as `null`. You can override
     * this by passing an options object.
     *
     * @param options - An options object to configure how data is retrieved from
     * the snapshot (for example the desired behavior for server timestamps that
     * have not yet been set to their final value).
     * @returns An `Object` containing all fields in the document or `undefined` if
     * the document doesn't exist.
     */data(e={}){if(this._document){if(this._converter){// We only want to use the converter and create a new DocumentSnapshot
// if a converter has been provided.
let t=new sn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,/* converter= */null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}/**
     * Retrieves the field specified by `fieldPath`. Returns `undefined` if the
     * document or field doesn't exist.
     *
     * By default, a `serverTimestamp()` that has not yet been set to
     * its final value will be returned as `null`. You can override this by
     * passing an options object.
     *
     * @param fieldPath - The path (for example 'foo' or 'foo.bar') to a specific
     * field.
     * @param options - An options object to configure how the field is retrieved
     * from the snapshot (for example the desired behavior for server timestamps
     * that have not yet been set to their final value).
     * @returns The data at the specified field location or undefined if no such
     * field exists in the document.
     */// We are using `any` here to avoid an explicit cast by our users.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
get(e,t={}){if(this._document){let n=this._document.data.field(iX("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}/**
 * A `QueryDocumentSnapshot` contains data read from a document in your
 * Firestore database as part of a query. The document is guaranteed to exist
 * and its data can be extracted with `.data()` or `.get(<field>)` to get a
 * specific field.
 *
 * A `QueryDocumentSnapshot` offers the same API surface as a
 * `DocumentSnapshot`. Since query results contain only existing documents, the
 * `exists` property will always be true and `data()` will never return
 * 'undefined'.
 */class sn extends st{/**
     * Retrieves all fields in the document as an `Object`.
     *
     * By default, `serverTimestamp()` values that have not yet been
     * set to their final value will be returned as `null`. You can override
     * this by passing an options object.
     *
     * @override
     * @param options - An options object to configure how data is retrieved from
     * the snapshot (for example the desired behavior for server timestamps that
     * have not yet been set to their final value).
     * @returns An `Object` containing all fields in the document.
     */data(e={}){return super.data(e)}}/**
 * A `QuerySnapshot` contains zero or more `DocumentSnapshot` objects
 * representing the results of a query. The documents can be accessed as an
 * array via the `docs` property or enumerated using the `forEach` method. The
 * number of documents can be determined via the `empty` and `size`
 * properties.
 */class sr{/** @hideconstructor */constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new se(r.hasPendingWrites,r.fromCache),this.query=n}/** An array of all the documents in the `QuerySnapshot`. */get docs(){let e=[];return this.forEach(t=>e.push(t)),e}/** The number of documents in the `QuerySnapshot`. */get size(){return this._snapshot.docs.size}/** True if there are no documents in the `QuerySnapshot`. */get empty(){return 0===this.size}/**
     * Enumerates all of the documents in the `QuerySnapshot`.
     *
     * @param callback - A callback to be called with a `QueryDocumentSnapshot` for
     * each document in the snapshot.
     * @param thisArg - The `this` binding for the callback.
     */forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new sn(this._firestore,this._userDataWriter,n.key,n,new se(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}/**
     * Returns an array of the documents changes since the last snapshot. If this
     * is the first snapshot, all documents will be in the list as 'added'
     * changes.
     *
     * @param options - `SnapshotListenOptions` that control whether metadata-only
     * changes (i.e. only `DocumentSnapshot.metadata` changed) should trigger
     * snapshot events.
     */docChanges(e={}){let t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new b(_.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=/** Calculates the array of `DocumentChange`s for a given `ViewSnapshot`. */function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map(n=>{let r=new sn(e._firestore,e._userDataWriter,n.doc.key,n.doc,new se(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:t++}})}{// A `DocumentSet` that is updated incrementally as changes are applied to use
// to lookup the index of a document.
let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3/* ChangeType.Metadata */!==e.type).map(t=>{let r=new sn(e._firestore,e._userDataWriter,t.doc.key,t.doc,new se(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter),i=-1,s=-1;return 0/* ChangeType.Added */!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1/* ChangeType.Removed */!==t.type&&(s=(n=n.add(t.doc)).indexOf(t.doc.key)),{type:function(e){switch(e){case 0/* ChangeType.Added */:return"added";case 2/* ChangeType.Modified */:case 3/* ChangeType.Metadata */:return"modified";case 1/* ChangeType.Removed */:return"removed";default:return E()}}(t.type),doc:r,oldIndex:i,newIndex:s}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}class si extends i8{constructor(e){super(),this.firestore=e}convertBytes(e){return new iA(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new iv(this.firestore,/* converter= */null,t)}}/**
 * Executes the query and returns the results as a `QuerySnapshot`.
 *
 * Note: `getDocs()` attempts to provide up-to-date data when possible by
 * waiting for data from the server, but it may return cached data or fail if
 * you are offline and the server cannot be reached. To specify this behavior,
 * invoke {@link getDocsFromCache} or {@link getDocsFromServer}.
 *
 * @returns A `Promise` that will be resolved with the results of the query.
 */function ss(e){e=ip(e,iy);let t=ip(e.firestore,iT),n=iC(t),r=new si(t);return(/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){if("L"/* LimitType.Last */===e.limitType&&0===e.explicitOrderBy.length)throw new b(_.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}(e._query),(function(e,t,n={}){let r=new T;return e.asyncQueue.enqueueAndForget(async()=>(function(e,t,n,r,i){let s=new r8({next:n=>{// Remove query first before passing event to user to avoid
    // user actions affecting the now stale query.
    t.enqueueAndForget(()=>rR(e,a)),n.fromCache&&"server"===r.source?i.reject(new b(_.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),a=new rP(n,s,{includeMetadataChanges:!0,Z_:!0});return rx(e,a)})(await ia(e),e.asyncQueue,t,n,r)),r.promise})(n,e._query).then(n=>new sr(t,r,e,n)))}function sa(e,t,n,...r){e=ip(e,iv);let i=ip(e.firestore,iT),s=iF(i);return su(i,[("string"==typeof// performing validation.
(t=(0,u.getModularInstance)(t))||t instanceof iD?/** Parse update data from a list of field/value arguments. */function(e,t,n,r,i,s){let a=e.wu(1/* UserDataSource.Update */,t,n),o=[iz(t,r,n)],l=[i];if(s.length%2!=0)throw new b(_.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let e=0;e<s.length;e+=2)o.push(iz(t,s[e])),l.push(s[e+1]);let h=[],c=ek.empty();// We iterate in reverse order to pick the last value for a field if the
// user specified the field multiple times.
for(let e=o.length-1;e>=0;--e)if(!iQ(h,o[e])){let t=o[e],n=l[e];// For Compat types, we have to "extract" the underlying types before
// performing validation.
n=(0,u.getModularInstance)(n);let r=a.mu(t);if(n instanceof iV)h.push(t);else{let e=iB(n,r);null!=e&&(h.push(t),c.set(t,e))}}let d=new er(h);return new iL(c,d,a.fieldTransforms)}(s,"updateDoc",e._key,t,n,r):/** Parse update data from an update() call. */function(e,t,n,r){let i=e.wu(1/* UserDataSource.Update */,t,n);i$("Data must be an object, but it was:",i,r);let s=[],a=ek.empty();Y(r,(e,r)=>{let o=iG(t,e,n);// For Compat types, we have to "extract" the underlying types before
// performing validation.
r=(0,u.getModularInstance)(r);let l=i.mu(o);if(r instanceof iV)s.push(o);else{let e=iB(r,l);null!=e&&(s.push(o),a.set(o,e))}});let o=new er(s);return new iL(a,o,i.fieldTransforms)}(s,"updateDoc",e._key,t)).toMutation(e._key,tD.exists(!0))])}/**
 * Deletes the document referred to by the specified `DocumentReference`.
 *
 * @param reference - A reference to the document to delete.
 * @returns A Promise resolved once the document has been successfully
 * deleted from the backend (note that it won't resolve while you're offline).
 */function so(e){return su(ip(e.firestore,iT),[new tU(e._key,tD.none())])}/**
 * Add a new document to specified `CollectionReference` with the given data,
 * assigning it a document ID automatically.
 *
 * @param reference - A reference to the collection to add this document to.
 * @param data - An Object containing the data for the new document.
 * @returns A `Promise` resolved with a `DocumentReference` pointing to the
 * newly created document after it has been written to the backend (Note that it
 * won't resolve while you're offline).
 */function sl(e,t){var n,r;let i=ip(e.firestore,iT),s=i_(e),a=(n=e.converter)?r&&(r.merge||r.mergeFields)?n.toFirestore(t,r):n.toFirestore(t):t;return su(i,[/** Parse document data from a set() call. */(function(e,t,n,r,i,s={}){let a,o;let l=e.wu(s.merge||s.mergeFields?2/* UserDataSource.MergeSet */:0/* UserDataSource.Set */,t,n,i);i$("Data must be an object, but it was:",l,r);let u=ij(r,l);if(s.merge)a=new er(l.fieldMask),o=l.fieldTransforms;else if(s.mergeFields){let e=[];for(let r of s.mergeFields){let i=iz(t,r,n);if(!l.contains(i))throw new b(_.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);iQ(e,i)||e.push(i)}a=new er(e),o=l.fieldTransforms.filter(e=>a.covers(e.field))}else a=null,o=l.fieldTransforms;return new iR(new ek(u),a,o)})(iF(e.firestore),"addDoc",s._key,a,null!==e.converter,{}).toMutation(s._key,tD.exists(!1))]).then(()=>s)}/**
 * Locally writes `mutations` on the async queue.
 * @internal
 */function su(e,t){return function(e,t){let n=new T;return e.asyncQueue.enqueueAndForget(async()=>rG(await is(e).then(e=>e.syncEngine),t,n)),n.promise}(iC(e),t)}/**
 * Returns a sentinel used with {@link @firebase/firestore/lite#(setDoc:1)} or {@link @firebase/firestore/lite#(updateDoc:1)} to
 * include a server-generated timestamp in the written data.
 */function sh(){return new iU("serverTimestamp")}new WeakMap,function(e=!0){f=a.SDK_VERSION,(0,a._registerComponent)(new(0,o.Component)("firestore",(t,{instanceIdentifier:n,options:r})=>{let i=t.getProvider("app").getImmediate(),s=new iT(new A(t.getProvider("auth-internal")),new x(t.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new b(_.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ep(e.options.projectId,t)}(i,n),i);return r=Object.assign({useFetchStreams:e},r),s._setSettings(r),s},"PUBLIC").setMultipleInstances(!0)),(0,a.registerVersion)(c,"4.1.3",void 0),(0,a.registerVersion)(c,"4.1.3","esm2017")}()}),i.register("dZnwr",function(t,n){e(t.exports,"_registerComponent",function(){return m}),e(t.exports,"_getProvider",function(){return y}),e(t.exports,"_removeServiceInstance",function(){return v}),e(t.exports,"SDK_VERSION",function(){return _}),e(t.exports,"initializeApp",function(){return b}),e(t.exports,"getApp",function(){return T}),e(t.exports,"registerVersion",function(){return I});var r=i("lrvMc"),s=i("4Qo5T"),a=i("6zkFe"),o=i("egtKB");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l{constructor(e){this.container=e}// In initial implementation, this will be called by installations on
// auth token refresh, and installations will send this string.
getPlatformInfoString(){let e=this.container.getProviders();// Loop through providers and get library/version pairs from any that are
// version components.
return e.map(e=>{if(!/**
 *
 * @param provider check if this provider provides a VersionService
 *
 * NOTE: Using Provider<'app-version'> is a hack to indicate that the provider
 * provides VersionService. The provider is not necessarily a 'app-version'
 * provider.
 */function(e){let t=e.getComponent();return(null==t?void 0:t.type)==="VERSION"/* ComponentType.VERSION */}(e))return null;{let t=e.getImmediate();return`${t.library}/${t.version}`}}).filter(e=>e).join(" ")}}let u="@firebase/app",h="0.9.18",c=new s.Logger("@firebase/app"),d="[DEFAULT]",f={[u]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},p=new Map,g=new Map;/**
 *
 * @param component - the component to register
 * @returns whether or not the component is registered successfully
 *
 * @internal
 */function m(e){let t=e.name;if(g.has(t))return c.debug(`There were multiple attempts to register component ${t}.`),!1;// add the component to existing app instances
for(let n of(g.set(t,e),p.values()))!/**
 * @param component - the component being added to this app's container
 *
 * @internal
 */function(e,t){try{e.container.addComponent(t)}catch(n){c.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}(n,e);return!0}/**
 *
 * @param app - FirebaseApp instance
 * @param name - service name
 *
 * @returns the provider for the service with the matching name
 *
 * @internal
 */function y(e,t){let n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 *
 * @param app - FirebaseApp instance
 * @param name - service name
 * @param instanceIdentifier - service instance identifier in case the service supports multiple instances
 *
 * @internal
 */function v(e,t,n=d){y(e,t).clearInstance(n)}let w=new a.ErrorFactory("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.Component("app",()=>this,"PUBLIC"/* ComponentType.PUBLIC */))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}/**
     * This function will throw an Error if the App has already been deleted -
     * use before performing API actions on the App.
     */checkDestroyed(){if(this.isDeleted)throw w.create("app-deleted"/* AppError.APP_DELETED */,{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * The current SDK version.
 *
 * @public
 */let _="10.3.1";function b(e,t={}){let n=e;if("object"!=typeof t){let e=t;t={name:e}}let i=Object.assign({name:d,automaticDataCollectionEnabled:!1},t),s=i.name;if("string"!=typeof s||!s)throw w.create("bad-app-name"/* AppError.BAD_APP_NAME */,{appName:String(s)});if(n||(n=(0,a.getDefaultAppConfig)()),!n)throw w.create("no-options"/* AppError.NO_OPTIONS */);let o=p.get(s);if(o){// return the existing app if options and config deep equal the ones in the existing app.
if((0,a.deepEqual)(n,o.options)&&(0,a.deepEqual)(i,o.config))return o;throw w.create("duplicate-app"/* AppError.DUPLICATE_APP */,{appName:s})}let l=new r.ComponentContainer(s);for(let e of g.values())l.addComponent(e);let u=new E(n,i,l);return p.set(s,u),u}/**
 * Retrieves a {@link @firebase/app#FirebaseApp} instance.
 *
 * When called with no arguments, the default app is returned. When an app name
 * is provided, the app corresponding to that name is returned.
 *
 * An exception is thrown if the app being retrieved has not yet been
 * initialized.
 *
 * @example
 * ```javascript
 * // Return the default app
 * const app = getApp();
 * ```
 *
 * @example
 * ```javascript
 * // Return a named app
 * const otherApp = getApp("otherApp");
 * ```
 *
 * @param name - Optional name of the app to return. If no name is
 *   provided, the default is `"[DEFAULT]"`.
 *
 * @returns The app corresponding to the provided app name.
 *   If no app name is provided, the default app is returned.
 *
 * @public
 */function T(e=d){let t=p.get(e);if(!t&&e===d&&(0,a.getDefaultAppConfig)())return b();if(!t)throw w.create("no-app"/* AppError.NO_APP */,{appName:e});return t}/**
 * Registers a library's name and version for platform logging purposes.
 * @param library - Name of 1p or 3p library (e.g. firestore, angularfire)
 * @param version - Current version of that library.
 * @param variant - Bundle variant, e.g., node, rn, etc.
 *
 * @public
 */function I(e,t,n){var i;// TODO: We can use this check to whitelist strings when/if we set up
// a good whitelist system.
let s=null!==(i=f[e])&&void 0!==i?i:e;n&&(s+=`-${n}`);let a=s.match(/\s|\//),o=t.match(/\s|\//);if(a||o){let e=[`Unable to register library "${s}" with version "${t}":`];a&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),a&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),c.warn(e.join(" "));return}m(new r.Component(`${s}-version`,()=>({library:s,version:t}),"VERSION"/* ComponentType.VERSION */))}let C="firebase-heartbeat-store",S=null;function A(){return S||(S=(0,o.openDB)("firebase-heartbeat-database",1,{upgrade:(e,t)=>{0===t&&e.createObjectStore(C)}}).catch(e=>{throw w.create("idb-open"/* AppError.IDB_OPEN */,{originalErrorMessage:e.message})})),S}async function D(e){try{let t=await A(),n=await t.transaction(C).objectStore(C).get(k(e));return n}catch(e){if(e instanceof a.FirebaseError)c.warn(e.message);else{let t=w.create("idb-get"/* AppError.IDB_GET */,{originalErrorMessage:null==e?void 0:e.message});c.warn(t.message)}}}async function N(e,t){try{let n=await A(),r=n.transaction(C,"readwrite"),i=r.objectStore(C);await i.put(t,k(e)),await r.done}catch(e){if(e instanceof a.FirebaseError)c.warn(e.message);else{let t=w.create("idb-set"/* AppError.IDB_WRITE */,{originalErrorMessage:null==e?void 0:e.message});c.warn(t.message)}}}function k(e){return`${e.name}!${e.options.appId}`}class x{constructor(e){this.container=e,/**
         * In-memory cache for heartbeats, used by getHeartbeatsHeader() to generate
         * the header string.
         * Stores one record per date. This will be consolidated into the standard
         * format of one record per user agent string before being sent as a header.
         * Populated from indexedDB when the controller is instantiated and should
         * be kept in sync with indexedDB.
         * Leave public for easier testing.
         */this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new L(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}/**
     * Called to report a heartbeat. The function will generate
     * a HeartbeatsByUserAgent object, update heartbeatsCache, and persist it
     * to IndexedDB.
     * Note that we only store one heartbeat per day. So if a heartbeat for today is
     * already logged, subsequent calls to this function in the same day will be ignored.
     */async triggerHeartbeat(){let e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=R();return(// Do not store a heartbeat if one is already stored for this day
// or if a header has already been sent today.
(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate===n||this._heartbeatsCache.heartbeats.some(e=>e.date===n))?void 0:(this._heartbeatsCache.heartbeats.push({date:n,agent:t}),// Remove entries older than 30 days.
this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{let t=new Date(e.date).valueOf(),n=Date.now();return n-t<=2592e6}),this._storage.overwrite(this._heartbeatsCache)))}/**
     * Returns a base64 encoded string which can be attached to the heartbeat-specific header directly.
     * It also clears all heartbeats from memory as well as in IndexedDB.
     *
     * NOTE: Consuming product SDKs should not send the header if this method
     * returns an empty string.
     */async getHeartbeatsHeader(){// If it's still null or the array is empty, there is no data to send.
if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";let e=R(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){// Heartbeats grouped by user agent in the standard format to be sent in
// the header.
let n=[],r=e.slice();for(let i of e){// Look for an existing entry with the same user agent.
let e=n.find(e=>e.agent===i.agent);if(e)// If the header would exceed max size, remove the added date
// and stop adding to the header.
{if(e.dates.push(i.date),O(n)>t){e.dates.pop();break}}else if(// If no entry for this user agent exists, create one.
n.push({agent:i.agent,dates:[i.date]}),O(n)>t){// If the header would exceed max size, remove the added heartbeat
// entry and stop adding to the header.
n.pop();break}// Pop unsent entry from queue. (Skipped if adding the entry exceeded
// quota and the loop breaks early.)
r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=(0,a.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:t}));return(// Store last sent date to prevent another being logged/sent for the same day.
this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(// Store any unsent entries if they exist.
this._heartbeatsCache.heartbeats=n,// This seems more likely than emptying the array (below) to lead to some odd state
// since the cache isn't empty and this will be called again on the next request,
// and is probably safest if we await it.
await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r)}}function R(){let e=new Date;// Returns date format 'YYYY-MM-DD'
return e.toISOString().substring(0,10)}class L{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,a.isIndexedDBAvailable)()&&(0,a.validateIndexedDBOpenable)().then(()=>!0).catch(()=>!1)}/**
     * Read all heartbeats.
     */async read(){let e=await this._canUseIndexedDBPromise;if(!e)return{heartbeats:[]};{let e=await D(this.app);return e||{heartbeats:[]}}}// overwrite the storage with the provided heartbeats
async overwrite(e){var t;let n=await this._canUseIndexedDBPromise;if(n){let n=await this.read();return N(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}// add heartbeats
async add(e){var t;let n=await this._canUseIndexedDBPromise;if(n){let n=await this.read();return N(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}/**
 * Calculate bytes of a HeartbeatsByUserAgent array after being wrapped
 * in a platform logging header JSON object, stringified, and converted
 * to base 64.
 */function O(e){// base64 has a restricted set of characters, all of which should be 1 byte.
return(0,a.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:e})).length}m(new r.Component("platform-logger",e=>new l(e),"PRIVATE"/* ComponentType.PRIVATE */)),m(new r.Component("heartbeat",e=>new x(e),"PRIVATE"/* ComponentType.PRIVATE */)),// Register `app` package.
I(u,h,""),// BUILD_TARGET will be replaced by values like esm5, esm2017, cjs5, etc during the compilation
I(u,h,"esm2017"),// Register platform SDK identifier (no version).
I("fire-js","")}),i.register("lrvMc",function(t,n){e(t.exports,"Component",function(){return s}),e(t.exports,"ComponentContainer",function(){return l});var r=i("6zkFe");/**
 * Component for service name T, e.g. `auth`, `auth-internal`
 */class s{/**
     *
     * @param name The public service name, e.g. app, auth, firestore, database
     * @param instanceFactory Service factory responsible for creating the public interface
     * @param type whether the service provided by the component is public or private
     */constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,/**
         * Properties to be added to the service namespace
         */this.serviceProps={},this.instantiationMode="LAZY"/* InstantiationMode.LAZY */,this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let a="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Provider for instance for service name T, e.g. 'auth', 'auth-internal'
 * NameServiceMapping[T] is an alias for the type of the instance
 */class o{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}/**
     * @param identifier A provider can provide mulitple instances of a service
     * if this.component.multipleInstances is true.
     */get(e){// if multipleInstances is not supported, use the default name
let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let e=new r.Deferred;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{let n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){// when the instance factory throws an exception during get(), it should not cause
// a fatal error. We just return the unresolved promise in this case.
}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;// if multipleInstances is not supported, use the default name
let n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}else{// In case a component is not initialized and should/can not be auto-initialized at the moment, return null if the optional flag is set, or throw
if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);// return early without attempting to initialize the component if the component requires explicit initialization (calling `Provider.initialize()`)
if(this.component=e,this.shouldAutoInitialize()){// if the service is eager, initialize the default instance
if("EAGER"/* InstantiationMode.EAGER */===e.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:a})}catch(e){// when the instance factory for an eager Component throws an exception during the eager
// initialization, it should not cause a fatal error.
// TODO: Investigate if we need to make it configurable, because some component may want to cause
// a fatal error in this case?
}// Create service instances for the pending promises and resolve them
// NOTE: if this.multipleInstances is false, only the default instance will be created
// and all promises with resolve with it regardless of the identifier.
for(let[e,t]of this.instancesDeferred.entries()){let n=this.normalizeInstanceIdentifier(e);try{// `getOrInitializeService()` should always return a valid instance since a component is guaranteed. use ! to make typescript happy.
let e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){// when the instance factory throws an exception, it should not cause
// a fatal error. We just leave the promise unresolved.
}}}}clearInstance(e=a){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}// app.delete() will call this method on every provider to delete the services
// TODO: should we mark the provider as deleted?
async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e)// legacy services
// eslint-disable-next-line @typescript-eslint/no-explicit-any
.map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e)// modularized services
// eslint-disable-next-line @typescript-eslint/no-explicit-any
.map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=a){return this.instances.has(e)}getOptions(e=a){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let r=this.getOrInitializeService({instanceIdentifier:n,options:t});// resolve any pending promise waiting for the service instance
for(let[e,t]of this.instancesDeferred.entries()){let i=this.normalizeInstanceIdentifier(e);n===i&&t.resolve(r)}return r}/**
     *
     * @param callback - a function that will be invoked  after the provider has been initialized by calling provider.initialize().
     * The function is invoked SYNCHRONOUSLY, so it should not execute any longrunning tasks in order to not block the program.
     *
     * @param identifier An optional instance identifier
     * @returns a function to unregister the callback
     */onInit(e,t){var n;let r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);let s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}/**
     * Invoke onInit callbacks synchronously
     * @param instance the service instance`
     */invokeOnInitCallbacks(e,t){let n=this.onInitCallbacks.get(t);if(n)for(let r of n)try{r(e,t)}catch(e){// ignore errors in the onInit callback
}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:e===a?void 0:e,options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),/**
             * Invoke onInit listeners.
             * Note this.component.onInstanceCreated is different, which is used by the component creator,
             * while onInit listeners are registered by consumers of the provider.
             */this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){// ignore errors in the onInstanceCreatedCallback
}return n||null}normalizeInstanceIdentifier(e=a){return this.component?this.component.multipleInstances?e:a:e// assume multiple instances are supported before the component is provided.
}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"/* InstantiationMode.EXPLICIT */!==this.component.instantiationMode}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * ComponentContainer that provides Providers for service name T, e.g. `auth`, `auth-internal`
 */class l{constructor(e){this.name=e,this.providers=new Map}/**
     *
     * @param component Component being added
     * @param overwrite When a component with the same name has already been registered,
     * if overwrite is true: overwrite the existing component with the new component and create a new
     * provider with the new component. It can be useful in tests where you want to use different mocks
     * for different tests.
     * if overwrite is false: throw an exception
     */addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){let t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}/**
     * getProvider provides a type safe interface where it can only be called with a field name
     * present in NameServiceMapping interface.
     *
     * Firebase SDKs providing services should extend NameServiceMapping interface to register
     * themselves.
     */getProvider(e){if(this.providers.has(e))return this.providers.get(e);// create a Provider for a service that hasn't registered with Firebase
let t=new o(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}}),i.register("6zkFe",function(n,r){e(n.exports,"base64urlEncodeWithoutPadding",function(){return c}),e(n.exports,"getDefaultEmulatorHostnameAndPort",function(){return v}),e(n.exports,"getDefaultAppConfig",function(){return w}),e(n.exports,"Deferred",function(){return E}),e(n.exports,"createMockUserToken",function(){return _}),e(n.exports,"getUA",function(){return b}),e(n.exports,"isSafari",function(){return T}),e(n.exports,"isIndexedDBAvailable",function(){return I}),e(n.exports,"validateIndexedDBOpenable",function(){return C}),e(n.exports,"FirebaseError",function(){return S}),e(n.exports,"ErrorFactory",function(){return A}),e(n.exports,"deepEqual",function(){return(/**
 * Deep equal two objects. Support Arrays and Objects.
 */function e(t,n){if(t===n)return!0;let r=Object.keys(t),i=Object.keys(n);for(let s of r){if(!i.includes(s))return!1;let r=t[s],a=n[s];if(N(r)&&N(a)){if(!e(r,a))return!1}else if(r!==a)return!1}for(let e of i)if(!r.includes(e))return!1;return!0})}),e(n.exports,"getModularInstance",function(){return k});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @fileoverview Firebase constants.  Some of these (@defines) can be overridden at compile-time.
 */var s=i("fW3Z9");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let a=function(e){// TODO(user): Use native implementations if/when available
let t=[],n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:(i<2048?t[n++]=i>>6|192:((64512&i)==55296&&r+1<e.length&&(64512&e.charCodeAt(r+1))==56320?(// Surrogate Pair
i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128):t[n++]=i>>12|224,t[n++]=i>>6&63|128),t[n++]=63&i|128)}return t},o=function(e){// TODO(user): Use native implementations if/when available
let t=[],n=0,r=0;for(;n<e.length;){let i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){let s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){// Surrogate Pair
let s=e[n++],a=e[n++],o=e[n++],l=((7&i)<<18|(63&s)<<12|(63&a)<<6|63&o)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(1023&l))}else{let s=e[n++],a=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&a)}}return t.join("")},l={/**
     * Maps bytes to characters.
     */byteToCharMap_:null,/**
     * Maps characters to bytes.
     */charToByteMap_:null,/**
     * Maps bytes to websafe characters.
     * @private
     */byteToCharMapWebSafe_:null,/**
     * Maps websafe characters to bytes.
     * @private
     */charToByteMapWebSafe_:null,/**
     * Our default alphabet, shared between
     * ENCODED_VALS and ENCODED_VALS_WEBSAFE
     */ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",/**
     * Our default alphabet. Value 64 (=) is special; it means "nothing."
     */get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},/**
     * Our websafe alphabet.
     */get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},/**
     * Whether this browser supports the atob and btoa functions. This extension
     * started at Mozilla but is now implemented by many browsers. We use the
     * ASSUME_* variables to avoid pulling in the full useragent detection library
     * but still allowing the standard per-browser compilations.
     *
     */HAS_NATIVE_SUPPORT:"function"==typeof atob,/**
     * Base64-encode an array of bytes.
     *
     * @param input An array of bytes (numbers with
     *     value in [0, 255]) to encode.
     * @param webSafe Boolean indicating we should use the
     *     alternative alphabet.
     * @return The base64 encoded string.
     */encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();let n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){let i=e[t],s=t+1<e.length,a=s?e[t+1]:0,o=t+2<e.length,l=o?e[t+2]:0,u=i>>2,h=(3&i)<<4|a>>4,c=(15&a)<<2|l>>6,d=63&l;o||(d=64,s||(c=64)),r.push(n[u],n[h],n[c],n[d])}return r.join("")},/**
     * Base64-encode a string.
     *
     * @param input A string to encode.
     * @param webSafe If true, we should use the
     *     alternative alphabet.
     * @return The base64 encoded string.
     */encodeString(e,t){return(// Shortcut for Mozilla browsers that implement
// a native base64 encoder in the form of "btoa/atob"
this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(a(e),t))},/**
     * Base64-decode a string.
     *
     * @param input to decode.
     * @param webSafe True if we should use the
     *     alternative alphabet.
     * @return string representing the decoded value.
     */decodeString(e,t){return(// Shortcut for Mozilla browsers that implement
// a native base64 encoder in the form of "btoa/atob"
this.HAS_NATIVE_SUPPORT&&!t?atob(e):o(this.decodeStringToByteArray(e,t)))},/**
     * Base64-decode a string.
     *
     * In base-64 decoding, groups of four characters are converted into three
     * bytes.  If the encoder did not apply padding, the input length may not
     * be a multiple of 4.
     *
     * In this case, the last group will have fewer than 4 characters, and
     * padding will be inferred.  If the group has one or two characters, it decodes
     * to one byte.  If the group has three characters, it decodes to two bytes.
     *
     * @param input Input to decode.
     * @param webSafe True if we should use the web-safe alphabet.
     * @return bytes representing the decoded value.
     */decodeStringToByteArray(e,t){this.init_();let n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){let i=n[e.charAt(t++)],s=t<e.length,a=s?n[e.charAt(t)]:0;++t;let o=t<e.length,l=o?n[e.charAt(t)]:64;++t;let h=t<e.length,c=h?n[e.charAt(t)]:64;if(++t,null==i||null==a||null==l||null==c)throw new u;let d=i<<2|a>>4;if(r.push(d),64!==l){let e=a<<4&240|l>>2;if(r.push(e),64!==c){let e=l<<6&192|c;r.push(e)}}}return r},/**
     * Lazy static initialization function. Called before
     * accessing any of the static map variables.
     * @private
     */init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};// We want quick mappings back and forth, so we precompute two maps.
for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};/**
 * An error encountered while decoding base64 string.
 */class u extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}/**
 * URL-safe base64 encoding
 */let h=function(e){let t=a(e);return l.encodeByteArray(t,!0)},c=function(e){// Use base64url encoding and remove padding in the end (dot characters).
return h(e).replace(/\./g,"")},d=function(e){try{return l.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null},f=()=>/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Polyfill for `globalThis` object.
 * @returns the `globalThis` object for the given environment.
 * @public
 */(function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==t)return t;throw Error("Unable to locate global object.")})().__FIREBASE_DEFAULTS__,p=()=>{if(void 0===s||void 0===s.env)return;let e=void 0;if(e)return JSON.parse(e)},g=()=>{let e;if("undefined"==typeof document)return;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){// Some environments such as Angular Universal SSR have a
// `document` object but error on accessing `document.cookie`.
return}let t=e&&d(e[1]);return t&&JSON.parse(t)},m=()=>{try{return f()||p()||g()}catch(e){/**
         * Catch-all for being unable to get __FIREBASE_DEFAULTS__ due
         * to any environment case we have not accounted for. Log to
         * info instead of swallowing so we can find these unknown cases
         * and add paths for them if needed.
         */console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},y=e=>{var t,n;return null===(n=null===(t=m())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},v=e=>{let t=y(e);if(!t)return;let n=t.lastIndexOf(":");// Finding the last since IPv6 addr also has colons.
if(n<=0||n+1===t.length)throw Error(`Invalid host ${t} with no separate hostname and port!`);// eslint-disable-next-line no-restricted-globals
let r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]},w=()=>{var e;return null===(e=m())||void 0===e?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}/**
     * Our API internals are not promiseified and cannot because our callback APIs have subtle expectations around
     * invoking promises inline, which Promises are forbidden to do. This method accepts an optional node-style callback
     * and returns a node-style callback which will resolve or reject the Deferred's promise.
     */wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(// Attaching noop handler just in case developer wasn't expecting
// promises
this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _(e,t){if(e.uid)throw Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let n=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw Error("mockUserToken must contain 'sub' or 'user_id' field!");let s=Object.assign({// Set all required fields to decent defaults
iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[c(JSON.stringify({alg:"none",type:"JWT"})),c(JSON.stringify(s)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Returns navigator.userAgent string or '' if it's not defined.
 * @return user agent string
 */function b(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}/** Returns true if we are running in Safari. */function T(){return!/**
 * Detect Node.js.
 *
 * @return true if Node.js environment is detected or specified.
 */// Node detection logic from: https://github.com/iliakan/detect-node/
function(){var e;let n=null===(e=m())||void 0===e?void 0:e.forceEnvironment;if("node"===n)return!0;if("browser"===n)return!1;try{return"[object process]"===Object.prototype.toString.call(t.process)}catch(e){return!1}}()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}/**
 * This method checks if indexedDB is supported by current browser/service worker context
 * @return true if indexedDB is supported by current browser/service worker context
 */function I(){try{return"object"==typeof indexedDB}catch(e){return!1}}/**
 * This method validates browser/sw context for indexedDB by opening a dummy indexedDB database and reject
 * if errors occur during the database open operation.
 *
 * @throws exception if current browser/sw context can't run idb.open (ex: Safari iframe, Firefox
 * private browsing)
 */function C(){return new Promise((e,t)=>{try{let n=!0,r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})}// Based on code from:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Custom_Error_Types
class S extends Error{constructor(/** The error code for this error. */e,t,/** Custom data for this error. */n){super(t),this.code=e,this.customData=n,/** The custom name for all FirebaseErrors. */this.name="FirebaseError",// Fix For ES5
// https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
Object.setPrototypeOf(this,S.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,A.prototype.create)}}class A{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){let n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?i.replace(D,(e,t)=>{let r=n[t];return null!=r?String(r):`<${t}?>`}):"Error",a=`${this.serviceName}: ${s} (${r}).`,o=new S(r,a,n);return o}}let D=/\{\$([^}]+)}/g;function N(e){return null!==e&&"object"==typeof e}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(e){return e&&e._delegate?e._delegate:e}}),i.register("fW3Z9",function(e,t){// shim for using process in browser
var n,r,i,s=e.exports={};function a(){throw Error("setTimeout has not been defined")}function o(){throw Error("clearTimeout has not been defined")}function l(e){if(n===setTimeout)return setTimeout(e,0);// if setTimeout wasn't available but was latter defined
if((n===a||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{// when when somebody has screwed with setTimeout but no I.E. maddness
return n(e,0)}catch(t){try{// When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
return n.call(null,e,0)}catch(t){// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:a}catch(e){n=a}try{r="function"==typeof clearTimeout?clearTimeout:o}catch(e){r=o}}();var u=[],h=!1,c=-1;function d(){h&&i&&(h=!1,i.length?u=i.concat(u):c=-1,u.length&&f())}function f(){if(!h){var e=l(d);h=!0;for(var t=u.length;t;){for(i=u,u=[];++c<t;)i&&i[c].run();c=-1,t=u.length}i=null,h=!1,function(e){if(r===clearTimeout)return clearTimeout(e);// if clearTimeout wasn't available but was latter defined
if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{// When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
return r.call(null,e)}catch(t){// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
// Some versions of I.E. have different rules for clearTimeout vs setTimeout
return r.call(this,e)}}}(e)}}// v8 likes predictible objects
function p(e,t){this.fun=e,this.array=t}function g(){}s.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new p(e,t)),1!==u.length||h||l(f)},p.prototype.run=function(){this.fun.apply(null,this.array)},s.title="browser",s.browser=!0,s.env={},s.argv=[],s.version="",s.versions={},s.on=g,s.addListener=g,s.once=g,s.off=g,s.removeListener=g,s.removeAllListeners=g,s.emit=g,s.prependListener=g,s.prependOnceListener=g,s.listeners=function(e){return[]},s.binding=function(e){throw Error("process.binding is not supported")},s.cwd=function(){return"/"},s.chdir=function(e){throw Error("process.chdir is not supported")},s.umask=function(){return 0}}),i.register("4Qo5T",function(t,n){var r,i;e(t.exports,"LogLevel",function(){return r}),e(t.exports,"Logger",function(){return h}),e(t.exports,"setLogLevel",function(){return c}),e(t.exports,"setUserLogHandler",function(){return d});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * A container for all of the Logger instances
 */let s=[];(i=r||(r={}))[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT";let a={debug:r.DEBUG,verbose:r.VERBOSE,info:r.INFO,warn:r.WARN,error:r.ERROR,silent:r.SILENT},o=r.INFO,l={[r.DEBUG]:"log",[r.VERBOSE]:"log",[r.INFO]:"info",[r.WARN]:"warn",[r.ERROR]:"error"},u=(e,t,...n)=>{if(t<e.logLevel)return;let r=new Date().toISOString(),i=l[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class h{/**
     * Gives you an instance of a Logger to capture messages according to
     * Firebase's logging scheme.
     *
     * @param name The name that the logs will be associated with
     */constructor(e){this.name=e,/**
         * The log level of the given Logger instance.
         */this._logLevel=o,/**
         * The main (internal) log handler for the Logger instance.
         * Can be set to a new function in internal package code but not by user.
         */this._logHandler=u,/**
         * The optional, additional, user-defined log handler for the Logger instance.
         */this._userLogHandler=null,/**
         * Capture the current instance for later use
         */s.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in r))throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}// Workaround for setter/getter having to be the same type.
setLogLevel(e){this._logLevel="string"==typeof e?a[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}/**
     * The functions below are all based on the `console` interface
     */debug(...e){this._userLogHandler&&this._userLogHandler(this,r.DEBUG,...e),this._logHandler(this,r.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,r.VERBOSE,...e),this._logHandler(this,r.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,r.INFO,...e),this._logHandler(this,r.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,r.WARN,...e),this._logHandler(this,r.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,r.ERROR,...e),this._logHandler(this,r.ERROR,...e)}}function c(e){s.forEach(t=>{t.setLogLevel(e)})}function d(e,t){for(let n of s){let i=null;t&&t.level&&(i=a[t.level]),null===e?n.userLogHandler=null:n.userLogHandler=(t,n,...s)=>{let a=s.map(e=>{if(null==e)return null;if("string"==typeof e)return e;if("number"==typeof e||"boolean"==typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(e){return null}}).filter(e=>e).join(" ");n>=(null!=i?i:t.logLevel)&&e({level:r[n].toLowerCase(),message:a,args:s,type:t.name})}}}}),i.register("egtKB",function(t,n){e(t.exports,"openDB",function(){return s});var r=i("jnUgu");/**
 * Open a database.
 *
 * @param name Name of the database.
 * @param version Schema version.
 * @param callbacks Additional callbacks.
 */function s(e,t,{blocked:n,upgrade:i,blocking:s,terminated:a}={}){let o=indexedDB.open(e,t),l=(0,r.w)(o);return i&&o.addEventListener("upgradeneeded",e=>{i((0,r.w)(o.result),e.oldVersion,e.newVersion,(0,r.w)(o.transaction),e)}),n&&o.addEventListener("blocked",e=>n(e.oldVersion,e.newVersion,e)),l.then(e=>{a&&e.addEventListener("close",()=>a()),s&&e.addEventListener("versionchange",e=>s(e.oldVersion,e.newVersion,e))}).catch(()=>{}),l}let a=["get","getKey","getAll","getAllKeys","count"],o=["put","add","delete","clear"],l=new Map;function u(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t))return;if(l.get(t))return l.get(t);let n=t.replace(/FromIndex$/,""),r=t!==n,i=o.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||a.includes(n)))return;let s=async function(e,...t){// isWrite ? 'readwrite' : undefined gzipps better, but fails in Edge :(
let s=this.transaction(e,i?"readwrite":"readonly"),a=s.store;// Must reject if op rejects.
// If it's a write operation, must reject if tx.done rejects.
// Must reject with op rejection first.
// Must resolve with op value.
// Must handle both promises (no unhandled rejections)
return r&&(a=a.index(t.shift())),(await Promise.all([a[n](...t),i&&s.done]))[0]};return l.set(t,s),s}(0,r.r)(e=>({...e,get:(t,n,r)=>u(t,n)||e.get(t,n,r),has:(t,n)=>!!u(t,n)||e.has(t,n)}))}),i.register("jnUgu",function(t,n){let r,i;e(t.exports,"w",function(){return f}),e(t.exports,"r",function(){return d});let s=(e,t)=>t.some(t=>e instanceof t),a=new WeakMap,o=new WeakMap,l=new WeakMap,u=new WeakMap,h=new WeakMap,c={get(e,t,n){if(e instanceof IDBTransaction){// Special handling for transaction.done.
if("done"===t)return o.get(e);// Polyfill for objectStoreNames because of Edge.
if("objectStoreNames"===t)return e.objectStoreNames||l.get(e);// Make tx.store return the only store in the transaction, or undefined if there are many.
if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}// Else transform whatever we get back.
return f(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function d(e){c=e(c)}function f(e){var t;// We sometimes generate multiple promises from a single IDBRequest (eg when cursoring), because
// IDB is weird and a single IDBRequest can yield many responses, so these can't be cached.
if(e instanceof IDBRequest)return function(e){let t=new Promise((t,n)=>{let r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(f(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)});return t.then(t=>{t instanceof IDBCursor&&a.set(t,e);// Catching to avoid "Uncaught Promise exceptions"
}).catch(()=>{}),// This mapping exists in reverseTransformCache but doesn't doesn't exist in transformCache. This
// is because we create many promises from a single IDBRequest.
h.set(t,e),t}(e);// If we've already transformed this value before, reuse the transformed value.
// This is faster, but it also provides object equality.
if(u.has(e))return u.get(e);let n="function"==typeof(t=e)?// Due to expected object equality (which is enforced by the caching in `wrap`), we
// only create one new func per func.
// Edge doesn't support objectStoreNames (booo), so we polyfill it here.
t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(i||(i=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return(// Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
// the original object.
t.apply(p(this),e),f(a.get(this)))}:function(...e){// Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
// the original object.
return f(t.apply(p(this),e))}:function(e,...n){let r=t.call(p(this),e,...n);return l.set(r,e.sort?e.sort():[e]),f(r)}:(t instanceof IDBTransaction&&function(e){// Early bail if we've already created a done promise for this transaction.
if(o.has(e))return;let t=new Promise((t,n)=>{let r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)});// Cache it for later retrieval.
o.set(e,t)}(t),s(t,r||(r=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(t,c):t;return n!==e&&(u.set(e,n),h.set(n,e)),n}let p=e=>h.get(e)}),i.register("fcjPQ",function(n,r){e(n.exports,"createWebChannelTransport",function(){return nP}),e(n.exports,"getStatEventTarget",function(){return nF}),e(n.exports,"ErrorCode",function(){return nV}),e(n.exports,"EventType",function(){return nU}),e(n.exports,"Event",function(){return nB}),e(n.exports,"Stat",function(){return nj}),e(n.exports,"WebChannel",function(){return nq}),e(n.exports,"XhrIo",function(){return n$}),e(n.exports,"Md5",function(){return nz}),e(n.exports,"Integer",function(){return nK});var i,s,a,o,l,u="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{},h={},c=c||{},d=u||self;function f(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function p(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function g(e,t,n){return e.call.apply(e.bind,arguments)}function m(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function y(e,t,n){return(y=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?g:m).apply(null,arguments)}function v(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function w(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}function E(){this.s=this.s,this.o=this.o}E.prototype.s=!1,E.prototype.sa=function(){this.s||(this.s=!0,this.N())},E.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};let _=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return -1};function b(e){let t=e.length;if(0<t){let n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function T(e,t){for(let t=1;t<arguments.length;t++){let n=arguments[t];if(f(n)){let t=e.length||0,r=n.length||0;e.length=t+r;for(let i=0;i<r;i++)e[t+i]=n[i]}else e.push(n)}}function I(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}I.prototype.h=function(){this.defaultPrevented=!0};var C=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{d.addEventListener("test",()=>{},t),d.removeEventListener("test",()=>{},t)}catch(e){}return e}();function S(e){return/^[\s\xa0]*$/.test(e)}function A(){var e=d.navigator;return e&&(e=e.userAgent)?e:""}function D(e){return -1!=A().indexOf(e)}function N(e){return N[" "](e),e}N[" "]=function(){};var k=D("Opera"),x=D("Trident")||D("MSIE"),R=D("Edge"),L=R||x,O=D("Gecko")&&!(-1!=A().toLowerCase().indexOf("webkit")&&!D("Edge"))&&!(D("Trident")||D("MSIE"))&&!D("Edge"),M=-1!=A().toLowerCase().indexOf("webkit")&&!D("Edge");function P(){var e=d.document;return e?e.documentMode:void 0}e:{var F,V="",U=(F=A(),O?/rv:([^\);]+)(\)|;)/.exec(F):R?/Edge\/([\d\.]+)/.exec(F):x?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(F):M?/WebKit\/(\S+)/.exec(F):k?/(?:Version)[ \/]?(\S+)/.exec(F):void 0);if(U&&(V=U?U[1]:""),x){var B=P();if(null!=B&&B>parseFloat(V)){s=String(B);break e}}s=V}var j=d.document&&x&&(P()||parseInt(s,10))||void 0;function q(e,t){if(I.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(O){e:{try{N(t.nodeName);var i=!0;break e}catch(e){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:$[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&q.$.h.call(this)}}w(q,I);var $={2:"touch",3:"pen",4:"mouse"};q.prototype.h=function(){q.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var z="closure_listenable_"+(1e6*Math.random()|0),K=0;function G(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=i,this.key=++K,this.fa=this.ia=!1}function H(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function Q(e,t,n){for(let r in e)t.call(n,e[r],r,e)}function W(e){let t={};for(let n in e)t[n]=e[n];return t}let Y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function X(e,t){let n,r;for(let t=1;t<arguments.length;t++){for(n in r=arguments[t])e[n]=r[n];for(let t=0;t<Y.length;t++)n=Y[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function J(e){this.src=e,this.g={},this.h=0}function Z(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],s=_(i,t);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(H(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function ee(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.fa&&s.listener==t&&!!n==s.capture&&s.la==r)return i}return -1}J.prototype.add=function(e,t,n,r,i){var s=e.toString();(e=this.g[s])||(e=this.g[s]=[],this.h++);var a=ee(e,t,r,i);return -1<a?(t=e[a],n||(t.ia=!1)):((t=new G(t,this.src,s,!!r,i)).ia=n,e.push(t)),t};var et="closure_lm_"+(1e6*Math.random()|0),en={};function er(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var a=p(i)?!!i.capture:!!i,o=eo(e);if(o||(e[et]=o=new J(e)),(n=o.add(t,n,r,a,s)).proxy)return n;if(r=function e(t){return ea.call(e.src,e.listener,t)},n.proxy=r,r.src=e,r.listener=n,e.addEventListener)C||(i=a),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(es(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function ei(e){if("number"!=typeof e&&e&&!e.fa){var t=e.src;if(t&&t[z])Z(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(es(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=eo(t))?(Z(n,e),0==n.h&&(n.src=null,t[et]=null)):H(e)}}}function es(e){return e in en?en[e]:en[e]="on"+e}function ea(e,t){if(e.fa)e=!0;else{t=new q(t,this);var n=e.listener,r=e.la||e.src;e.ia&&ei(e),e=n.call(r,t)}return e}function eo(e){return(e=e[et])instanceof J?e:null}var el="__closure_events_fn_"+(1e9*Math.random()>>>0);function eu(e){return"function"==typeof e?e:(e[el]||(e[el]=function(t){return e.handleEvent(t)}),e[el])}function eh(){E.call(this),this.i=new J(this),this.S=this,this.J=null}function ec(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,"string"==typeof t)t=new I(t,e);else if(t instanceof I)t.target=t.target||e;else{var i=t;X(t=new I(r,e),i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var a=t.g=n[s];i=ed(a,r,!0,t)&&i}if(i=ed(a=t.g=e,r,!0,t)&&i,i=ed(a,r,!1,t)&&i,n)for(s=0;s<n.length;s++)i=ed(a=t.g=n[s],r,!1,t)&&i}function ed(e,t,n,r){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var a=t[s];if(a&&!a.fa&&a.capture==n){var o=a.listener,l=a.la||a.src;a.ia&&Z(e.i,a),i=!1!==o.call(l,r)&&i}}return i&&!r.defaultPrevented}w(eh,E),eh.prototype[z]=!0,eh.prototype.removeEventListener=function(e,t,n,r){!function e(t,n,r,i,s){if(Array.isArray(n))for(var a=0;a<n.length;a++)e(t,n[a],r,i,s);else(i=p(i)?!!i.capture:!!i,r=eu(r),t&&t[z])?(t=t.i,(n=String(n).toString())in t.g&&-1<(r=ee(a=t.g[n],r,i,s))&&(H(a[r]),Array.prototype.splice.call(a,r,1),0==a.length&&(delete t.g[n],t.h--))):t&&(t=eo(t))&&(n=t.g[n.toString()],t=-1,n&&(t=ee(n,r,i,s)),(r=-1<t?n[t]:null)&&ei(r))}(this,e,t,n,r)},eh.prototype.N=function(){if(eh.$.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)H(n[r]);delete t.g[e],t.h--}}this.J=null},eh.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},eh.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var ef=d.JSON.stringify,ep=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new eg,e=>e.reset());class eg{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}let em,ey=!1,ev=new class{constructor(){this.h=this.g=null}add(e,t){let n=ep.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}},ew=()=>{let e=d.Promise.resolve(void 0);em=()=>{e.then(eE)}};var eE=()=>{let e;for(var t;e=null,ev.g&&(e=ev.g,ev.g=ev.g.next,ev.g||(ev.h=null),e.next=null),t=e;){try{t.h.call(t.g)}catch(e){!function(e){d.setTimeout(()=>{throw e},0)}(e)}ep.j(t),100>ep.h&&(ep.h++,t.next=ep.g,ep.g=t)}ey=!1};function e_(e,t){eh.call(this),this.h=e||1,this.g=t||d,this.j=y(this.qb,this),this.l=Date.now()}function eb(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}function eT(e,t,n){if("function"==typeof e)n&&(e=y(e,n));else if(e&&"function"==typeof e.handleEvent)e=y(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:d.setTimeout(e,t||0)}w(e_,eh),(l=e_.prototype).ga=!1,l.T=null,l.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),ec(this,"tick"),this.ga&&(eb(this),this.start()))}},l.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},l.N=function(){e_.$.N.call(this),eb(this),delete this.g};class eI extends E{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:function e(t){t.g=eT(()=>{t.g=null,t.i&&(t.i=!1,e(t))},t.j);let n=t.h;t.h=null,t.m.apply(null,n)}(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function eC(e){E.call(this),this.h=e,this.g={}}w(eC,E);var eS=[];function eA(e,t,n,r){Array.isArray(n)||(n&&(eS[0]=n.toString()),n=eS);for(var i=0;i<n.length;i++){var s=function e(t,n,r,i,s){if(i&&i.once)return function e(t,n,r,i,s){if(Array.isArray(n)){for(var a=0;a<n.length;a++)e(t,n[a],r,i,s);return null}return r=eu(r),t&&t[z]?t.P(n,r,p(i)?!!i.capture:!!i,s):er(t,n,r,!0,i,s)}(t,n,r,i,s);if(Array.isArray(n)){for(var a=0;a<n.length;a++)e(t,n[a],r,i,s);return null}return r=eu(r),t&&t[z]?t.O(n,r,p(i)?!!i.capture:!!i,s):er(t,n,r,!1,i,s)}(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function eD(e){Q(e.g,function(e,t){this.g.hasOwnProperty(t)&&ei(e)},e),e.g={}}function eN(){this.g=!0}function ek(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var a=1;a<i.length;a++)i[a]=""}}}}return ef(n)}catch(e){return t}}(e,n)+(r?" "+r:"")})}eC.prototype.N=function(){eC.$.N.call(this),eD(this)},eC.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},eN.prototype.Ea=function(){this.g=!1},eN.prototype.info=function(){};var ex={},eR=null;function eL(){return eR=eR||new eh}function eO(e){I.call(this,ex.Ta,e)}function eM(e){let t=eL();ec(t,new eO(t))}function eP(e,t){I.call(this,ex.STAT_EVENT,e),this.stat=t}function eF(e){let t=eL();ec(t,new eP(t,e))}function eV(e,t){I.call(this,ex.Ua,e),this.size=t}function eU(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){e()},t)}ex.Ta="serverreachability",w(eO,I),ex.STAT_EVENT="statevent",w(eP,I),ex.Ua="timingevent",w(eV,I);var eB={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},ej={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function eq(){}function e$(e){return e.h||(e.h=e.i())}function ez(){}eq.prototype.h=null;var eK={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function eG(){I.call(this,"d")}function eH(){I.call(this,"c")}function eQ(){}function eW(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new eC(this),this.P=eX,e=L?125:void 0,this.V=new e_(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new eY}function eY(){this.i=null,this.g="",this.h=!1}w(eG,I),w(eH,I),w(eQ,eq),eQ.prototype.g=function(){return new XMLHttpRequest},eQ.prototype.i=function(){return{}},o=new eQ;var eX=45e3,eJ={},eZ={};function e0(e,t,n){e.L=1,e.v=tl(tr(t)),e.s=n,e.S=!0,e1(e,null)}function e1(e,t){e.G=Date.now(),e4(e),e.A=tr(e.v);var n=e.A,r=e.W;Array.isArray(r)||(r=[String(r)]),t_(n.i,"t",r),e.C=0,n=e.l.J,e.h=new eY,e.g=nh(e.l,n?t:null,!e.s),0<e.O&&(e.M=new eI(y(e.Pa,e,e.g),e.O)),eA(e.U,e.g,"readystatechange",e.nb),t=e.I?W(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),eM(),function(e,t,n,r,i,s){e.info(function(){if(e.g){if(s)for(var a="",o=s.split("&"),l=0;l<o.length;l++){var u=o[l].split("=");if(1<u.length){var h=u[0];u=u[1];var c=h.split("_");a=2<=c.length&&"type"==c[1]?a+(h+"=")+u+"&":a+(h+"=redacted&")}}else a=null}else a=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+a})}(e.j,e.u,e.A,e.m,e.W,e.s)}function e2(e){return!!e.g&&"GET"==e.u&&2!=e.L&&e.l.Ha}function e9(e,t,n){let r=!0,i;for(;!e.J&&e.C<n.length;)if((i=function(e,t){var n=e.C,r=t.indexOf("\n",n);return -1==r?eZ:isNaN(n=Number(t.substring(n,r)))?eJ:(r+=1)+n>t.length?eZ:(t=t.slice(r,r+n),e.C=r+n,t)}(e,n))==eZ){4==t&&(e.o=4,eF(14),r=!1),ek(e.j,e.m,null,"[Incomplete Response]");break}else if(i==eJ){e.o=4,eF(15),ek(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else ek(e.j,e.m,i,null),e8(e,i);e2(e)&&i!=eZ&&i!=eJ&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,eF(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.ba&&(e.ba=!0,(t=e.l).g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),nn(t),t.M=!0,eF(11))):(ek(e.j,e.m,n,"[Invalid Chunked Response]"),e7(e),e3(e))}function e4(e){e.Y=Date.now()+e.P,e6(e,e.P)}function e6(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=eU(y(e.lb,e),t)}function e5(e){e.B&&(d.clearTimeout(e.B),e.B=null)}function e3(e){0==e.l.H||e.J||ns(e.l,e)}function e7(e){e5(e);var t=e.M;t&&"function"==typeof t.sa&&t.sa(),e.M=null,eb(e.V),eD(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function e8(e,t){try{var n=e.l;if(0!=n.H&&(n.g==e||tD(n.i,e))){if(!e.K&&tD(n.i,e)&&3==n.H){try{var r=n.Ja.g.parse(t)}catch(e){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(n.g.G+3e3<e.G)ni(n),t4(n);else break e}nt(n),eF(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&0==n.A&&!n.v&&(n.v=eU(y(n.ib,n),6e3));if(1>=tA(n.i)&&n.oa){try{n.oa()}catch(e){}n.oa=void 0}}else no(n,11)}else if((e.K||n.g==e)&&ni(n),!S(t))for(i=n.Ja.g.parse(t),t=0;t<i.length;t++){let o=i[t];if(n.V=o[0],o=o[1],2==n.H){if("c"==o[0]){n.K=o[1],n.pa=o[2];let t=o[3];null!=t&&(n.ra=t,n.l.info("VER="+n.ra));let i=o[4];null!=i&&(n.Ga=i,n.l.info("SVER="+n.Ga));let l=o[5];null!=l&&"number"==typeof l&&0<l&&(r=1.5*l,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;let u=e.g;if(u){let e=u.g?u.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=r.i;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(tN(s,s.h),s.h=null))}if(r.F){let e=u.g?u.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.Da=e,to(r.I,r.F,e))}}if(n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),(r=n).wa=nu(r,r.J?r.pa:null,r.Y),e.K){tk(r.i,e);var a=r.L;a&&e.setTimeout(a),e.B&&(e5(e),e4(e)),r.g=e}else ne(r);0<n.j.length&&t5(n)}else"stop"!=o[0]&&"close"!=o[0]||no(n,7)}else 3==n.H&&("stop"==o[0]||"close"==o[0]?"stop"==o[0]?no(n,7):t9(n):"noop"!=o[0]&&n.h&&n.h.Aa(o),n.A=0)}}eM(4)}catch(e){}}function te(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(f(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=function(e){if(e.ta&&"function"==typeof e.ta)return e.ta();if(!e.Z||"function"!=typeof e.Z){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(f(e)||"string"==typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}for(let r in t=[],n=0,e)t[n++]=r;return t}}}(e),r=function(e){if(e.Z&&"function"==typeof e.Z)return e.Z();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(f(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}(l=eW.prototype).setTimeout=function(e){this.P=e},l.nb=function(e){e=e.target;let t=this.M;t&&3==tX(e)?t.l():this.Pa(e)},l.Pa=function(e){try{if(e==this.g)e:{let h=tX(this.g);var t=this.g.Ia();let c=this.g.da();if(!(3>h)&&(3!=h||L||this.g&&(this.h.h||this.g.ja()||tJ(this.g)))){this.J||4!=h||7==t||(8==t||0>=c?eM(3):eM(2)),e5(this);var n=this.g.da();this.ca=n;t:if(e2(this)){var r=tJ(this.g);e="";var i=r.length,s=4==tX(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){e7(this),e3(this);var a="";break t}this.h.i=new d.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,a=this.h.g}else a=this.g.ja();if(this.i=200==n,function(e,t,n,r,i,s,a){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+s+" "+a})}(this.j,this.u,this.A,this.m,this.W,h,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var o,l=this.g;if((o=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!S(o)){var u=o;break t}}u=null}if(n=u)ek(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,e8(this,n);else{this.i=!1,this.o=3,eF(12),e7(this),e3(this);break e}}this.S?(e9(this,h,a),L&&this.i&&3==h&&(eA(this.U,this.V,"tick",this.mb),this.V.start())):(ek(this.j,this.m,a,null),e8(this,a)),4==h&&e7(this),this.i&&!this.J&&(4==h?ns(this.l,this):(this.i=!1,e4(this)))}else(function(e){let t={};e=(e.g&&2<=tX(e)&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<e.length;r++){if(S(e[r]))continue;var n=function(e){var t=1;e=e.split(":");let n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}(e[r]);let i=n[0];if("string"!=typeof(n=n[1]))continue;n=n.trim();let s=t[i]||[];t[i]=s,s.push(n)}!function(e,t){for(let n in e)t.call(void 0,e[n],n,e)}(t,function(e){return e.join(", ")})})(this.g),400==n&&0<a.indexOf("Unknown SID")?(this.o=3,eF(12)):(this.o=0,eF(13)),e7(this),e3(this)}}}catch(e){}finally{}},l.mb=function(){if(this.g){var e=tX(this.g),t=this.g.ja();this.C<t.length&&(e5(this),e9(this,e,t),this.i&&4!=e&&e4(this))}},l.cancel=function(){this.J=!0,e7(this)},l.lb=function(){this.B=null;let e=Date.now();0<=e-this.Y?(function(e,t){e.info(function(){return"TIMEOUT: "+t})}(this.j,this.A),2!=this.L&&(eM(),eF(17)),e7(this),this.o=2,e3(this)):e6(this,this.Y-e)};var tt=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function tn(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof tn){this.h=e.h,ti(this,e.j),this.s=e.s,this.g=e.g,ts(this,e.m),this.l=e.l;var t=e.i,n=new ty;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),ta(this,n),this.o=e.o}else e&&(t=String(e).match(tt))?(this.h=!1,ti(this,t[1]||"",!0),this.s=tu(t[2]||""),this.g=tu(t[3]||"",!0),ts(this,t[4]),this.l=tu(t[5]||"",!0),ta(this,t[6]||"",!0),this.o=tu(t[7]||"")):(this.h=!1,this.i=new ty(null,this.h))}function tr(e){return new tn(e)}function ti(e,t,n){e.j=n?tu(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function ts(e,t){if(t){if(isNaN(t=Number(t))||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function ta(e,t,n){var r,i;t instanceof ty?(e.i=t,r=e.i,(i=e.h)&&!r.j&&(tv(r),r.i=null,r.g.forEach(function(e,t){var n=t.toLowerCase();t!=n&&(tw(this,t),t_(this,n,e))},r)),r.j=i):(n||(t=th(t,tg)),e.i=new ty(t,e.h))}function to(e,t,n){e.i.set(t,n)}function tl(e){return to(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function tu(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function th(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,tc),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function tc(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}tn.prototype.toString=function(){var e=[],t=this.j;t&&e.push(th(t,td,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(th(t,td,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(th(n,"/"==n.charAt(0)?tp:tf,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",th(n,tm)),e.join("")};var td=/[#\/\?@]/g,tf=/[#\?:]/g,tp=/[#\?]/g,tg=/[#\?@]/g,tm=/#/g;function ty(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function tv(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}function tw(e,t){tv(e),t=tb(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function tE(e,t){return tv(e),t=tb(e,t),e.g.has(t)}function t_(e,t,n){tw(e,t),0<n.length&&(e.i=null,e.g.set(tb(e,t),b(n)),e.h+=n.length)}function tb(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(l=ty.prototype).add=function(e,t){tv(this),this.i=null,e=tb(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},l.forEach=function(e,t){tv(this),this.g.forEach(function(n,r){n.forEach(function(n){e.call(t,n,r,this)},this)},this)},l.ta=function(){tv(this);let e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){let i=e[r];for(let e=0;e<i.length;e++)n.push(t[r])}return n},l.Z=function(e){tv(this);let t=[];if("string"==typeof e)tE(this,e)&&(t=t.concat(this.g.get(tb(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},l.set=function(e,t){return tv(this),this.i=null,tE(this,e=tb(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},l.get=function(e,t){return e&&0<(e=this.Z(e)).length?String(e[0]):t},l.toString=function(){if(this.i)return this.i;if(!this.g)return"";let e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];let s=encodeURIComponent(String(r)),a=this.Z(r);for(r=0;r<a.length;r++){var i=s;""!==a[r]&&(i+="="+encodeURIComponent(String(a[r]))),e.push(i)}}return this.i=e.join("&")};var tT=class{constructor(e,t){this.g=e,this.map=t}};function tI(e){this.l=e||tC,e=d.PerformanceNavigationTiming?0<(e=d.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):!!(d.g&&d.g.Ka&&d.g.Ka()&&d.g.Ka().ec),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var tC=10;function tS(e){return!!e.h||!!e.g&&e.g.size>=e.j}function tA(e){return e.h?1:e.g?e.g.size:0}function tD(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function tN(e,t){e.g?e.g.add(t):e.h=t}function tk(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function tx(e){if(null!=e.h)return e.i.concat(e.h.F);if(null!=e.g&&0!==e.g.size){let t=e.i;for(let n of e.g.values())t=t.concat(n.F);return t}return b(e.i)}tI.prototype.cancel=function(){if(this.i=tx(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(let e of this.g.values())e.cancel();this.g.clear()}};var tR=class{stringify(e){return d.JSON.stringify(e,void 0)}parse(e){return d.JSON.parse(e,void 0)}};function tL(){this.g=new tR}function tO(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch(e){}}function tM(e){this.l=e.fc||null,this.j=e.ob||!1}function tP(e,t){eh.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=tF,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}w(tM,eq),tM.prototype.g=function(){return new tP(this.l,this.j)},tM.prototype.i=(i={},function(){return i}),w(tP,eh);var tF=0;function tV(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}function tU(e){e.readyState=4,e.l=null,e.j=null,e.A=null,tB(e)}function tB(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(l=tP.prototype).open=function(e,t){if(this.readyState!=tF)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,tB(this)},l.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;let t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||d).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))},l.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,tU(this)),this.readyState=tF},l.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,tB(this)),this.g&&(this.readyState=3,tB(this),this.g))){if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(void 0!==d.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;tV(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))}},l.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?tU(this):tB(this),3==this.readyState&&tV(this)}},l.Za=function(e){this.g&&(this.response=this.responseText=e,tU(this))},l.Ya=function(e){this.g&&(this.response=e,tU(this))},l.ka=function(){this.g&&tU(this)},l.setRequestHeader=function(e,t){this.v.append(e,t)},l.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},l.getAllResponseHeaders=function(){if(!this.h)return"";let e=[],t=this.h.entries();for(var n=t.next();!n.done;)e.push((n=n.value)[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(tP.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var tj=d.JSON.parse;function tq(e){eh.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=t$,this.L=this.M=!1}w(tq,eh);var t$="",tz=/^https?$/i,tK=["POST","PUT"];function tG(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,tH(e),tW(e)}function tH(e){e.F||(e.F=!0,ec(e,"complete"),ec(e,"error"))}function tQ(e){if(e.h&&void 0!==c&&(!e.C[1]||4!=tX(e)||2!=e.da())){if(e.v&&4==tX(e))eT(e.La,0,e);else if(ec(e,"readystatechange"),4==tX(e)){e.h=!1;try{let a=e.da();switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t,n,r=!0;break;default:r=!1}if(!(t=r)){if(n=0===a){var i=String(e.I).match(tt)[1]||null;!i&&d.self&&d.self.location&&(i=d.self.location.protocol.slice(0,-1)),n=!tz.test(i?i.toLowerCase():"")}t=n}if(t)ec(e,"complete"),ec(e,"success");else{e.m=6;try{var s=2<tX(e)?e.g.statusText:""}catch(e){s=""}e.j=s+" ["+e.da()+"]",tH(e)}}finally{tW(e)}}}}function tW(e,t){if(e.g){tY(e);let n=e.g,r=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||ec(e,"ready");try{n.onreadystatechange=r}catch(e){}}}function tY(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(d.clearTimeout(e.A),e.A=null)}function tX(e){return e.g?e.g.readyState:0}function tJ(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case t$:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function tZ(e){let t="";return Q(e,function(e,n){t+=n+":"+e+"\r\n"}),t}function t0(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=tZ(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):to(e,t,n))}function t1(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function t2(e){this.Ga=0,this.j=[],this.l=new eN,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=t1("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=t1("baseRetryDelayMs",5e3,e),this.hb=t1("retryDelaySeedMs",1e4,e),this.eb=t1("forwardChannelMaxRetries",2,e),this.xa=t1("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.dc||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new tI(e&&e.concurrentRequestLimit),this.Ja=new tL,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}function t9(e){if(t6(e),3==e.H){var t=e.W++,n=tr(e.I);if(to(n,"SID",e.K),to(n,"RID",t),to(n,"TYPE","terminate"),t7(e,n),(t=new eW(e,e.l,t)).L=2,t.v=tl(tr(n)),n=!1,d.navigator&&d.navigator.sendBeacon)try{n=d.navigator.sendBeacon(t.v.toString(),"")}catch(e){}!n&&d.Image&&((new Image).src=t.v,n=!0),n||(t.g=nh(t.l,null),t.g.ha(t.v)),t.G=Date.now(),e4(t)}nl(e)}function t4(e){e.g&&(nn(e),e.g.cancel(),e.g=null)}function t6(e){t4(e),e.u&&(d.clearTimeout(e.u),e.u=null),ni(e),e.i.cancel(),e.m&&("number"==typeof e.m&&d.clearTimeout(e.m),e.m=null)}function t5(e){if(!tS(e.i)&&!e.m){e.m=!0;var t=e.Na;em||ew(),ey||(em(),ey=!0),ev.add(t,e),e.C=0}}function t3(e,t){var n;n=t?t.m:e.W++;let r=tr(e.I);to(r,"SID",e.K),to(r,"RID",n),to(r,"AID",e.V),t7(e,r),e.o&&e.s&&t0(r,e.o,e.s),n=new eW(e,e.l,n,e.C+1),null===e.o&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=t8(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),tN(e.i,n),e0(n,r,t)}function t7(e,t){e.na&&Q(e.na,function(e,n){to(t,n,e)}),e.h&&te({},function(e,n){to(t,n,e)})}function t8(e,t,n){n=Math.min(e.j.length,n);var r=e.h?y(e.h.Va,e.h,e):null;e:{var i=e.j;let t=-1;for(;;){let e=["count="+n];-1==t?0<n?(t=i[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let a=0;a<n;a++){let n=i[a].g,o=i[a].map;if(0>(n-=t))t=Math.max(0,i[a].g-100),s=!1;else try{!function(e,t,n){let r=n||"";try{te(e,function(e,n){let i=e;p(e)&&(i=ef(e)),t.push(r+n+"="+encodeURIComponent(i))})}catch(e){throw t.push(r+"type="+encodeURIComponent("_badmap")),e}}(o,e,"req"+n+"_")}catch(e){r&&r(o)}}if(s){r=e.join("&");break e}}}return e=e.j.splice(0,n),t.F=e,r}function ne(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;em||ew(),ey||(em(),ey=!0),ev.add(t,e),e.A=0}}function nt(e){return!e.g&&!e.u&&!(3<=e.A)&&(e.ba++,e.u=eU(y(e.Ma,e),na(e,e.A)),e.A++,!0)}function nn(e){null!=e.B&&(d.clearTimeout(e.B),e.B=null)}function nr(e){e.g=new eW(e,e.l,"rpc",e.ba),null===e.o&&(e.g.I=e.s),e.g.O=0;var t=tr(e.wa);to(t,"RID","rpc"),to(t,"SID",e.K),to(t,"AID",e.V),to(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&to(t,"TO",e.qa),to(t,"TYPE","xmlhttp"),t7(e,t),e.o&&e.s&&t0(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.v=tl(tr(t)),n.s=null,n.S=!0,e1(n,e)}function ni(e){null!=e.v&&(d.clearTimeout(e.v),e.v=null)}function ns(e,t){var n=null;if(e.g==t){ni(e),nn(e),e.g=null;var r=2}else{if(!tD(e.i,t))return;n=t.F,tk(e.i,t),r=1}if(0!=e.H){if(t.i){if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.G;var i,s=e.C;ec(r=eL(),new eV(r,n)),t5(e)}else ne(e)}else if(3==(s=t.o)||0==s&&0<t.ca||!(1==r&&(i=t,!(tA(e.i)>=e.i.j-(e.m?1:0))&&(e.m?(e.j=i.F.concat(e.j),!0):1!=e.H&&2!=e.H&&!(e.C>=(e.cb?0:e.eb))&&(e.m=eU(y(e.Na,e,i),na(e,e.C)),e.C++,!0)))||2==r&&nt(e)))switch(n&&0<n.length&&((t=e.i).i=t.i.concat(n)),s){case 1:no(e,5);break;case 4:no(e,10);break;case 3:no(e,6);break;default:no(e,2)}}}function na(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function no(e,t){if(e.l.info("Error code "+t),2==t){var n=null;e.h&&(n=null);var r=y(e.pb,e);n||(n=new tn("//www.google.com/images/cleardot.gif"),d.location&&"http"==d.location.protocol||ti(n,"https"),tl(n)),function(e,t){let n=new eN;if(d.Image){let r=new Image;r.onload=v(tO,n,r,"TestLoadImage: loaded",!0,t),r.onerror=v(tO,n,r,"TestLoadImage: error",!1,t),r.onabort=v(tO,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=v(tO,n,r,"TestLoadImage: timeout",!1,t),d.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}(n.toString(),r)}else eF(2);e.H=0,e.h&&e.h.za(t),nl(e),t6(e)}function nl(e){if(e.H=0,e.ma=[],e.h){let t=tx(e.i);(0!=t.length||0!=e.j.length)&&(T(e.ma,t),T(e.ma,e.j),e.i.i.length=0,b(e.j),e.j.length=0),e.h.ya()}}function nu(e,t,n){var r=n instanceof tn?tr(n):new tn(n);if(""!=r.g)t&&(r.g=t+"."+r.g),ts(r,r.m);else{var i=d.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new tn(null);r&&ti(s,r),t&&(s.g=t),i&&ts(s,i),n&&(s.l=n),r=s}return n=e.F,t=e.Da,n&&t&&to(r,n,t),to(r,"VER",e.ra),t7(e,r),r}function nh(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return(t=new tq(n&&e.Ha&&!e.va?new tM({ob:!0}):e.va)).Oa(e.J),t}function nc(){}function nd(){if(x&&!(10<=Number(j)))throw Error("Environmental error: no available transport.")}function nf(e,t){eh.call(this),this.g=new t2(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!S(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!S(t)&&(this.g.F=t,null!==(e=this.h)&&t in e&&t in(e=this.h)&&delete e[t]),this.j=new nm(this)}function np(e){eG.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(let n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function ng(){eH.call(this),this.status=1}function nm(e){this.g=e}function ny(){this.blockSize=-1,this.blockSize=64,this.g=[,,,,],this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function nv(e,t,n){n||(n=0);var r=Array(16);if("string"==typeof t)for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var s=e.g[3],a=t+(s^n&(i^s))+r[0]+3614090360&4294967295;a=s+(i^(t=n+(a<<7&4294967295|a>>>25))&(n^i))+r[1]+3905402710&4294967295,a=i+(n^(s=t+(a<<12&4294967295|a>>>20))&(t^n))+r[2]+606105819&4294967295,a=n+(t^(i=s+(a<<17&4294967295|a>>>15))&(s^t))+r[3]+3250441966&4294967295,a=t+(s^(n=i+(a<<22&4294967295|a>>>10))&(i^s))+r[4]+4118548399&4294967295,a=s+(i^(t=n+(a<<7&4294967295|a>>>25))&(n^i))+r[5]+1200080426&4294967295,a=i+(n^(s=t+(a<<12&4294967295|a>>>20))&(t^n))+r[6]+2821735955&4294967295,a=n+(t^(i=s+(a<<17&4294967295|a>>>15))&(s^t))+r[7]+4249261313&4294967295,a=t+(s^(n=i+(a<<22&4294967295|a>>>10))&(i^s))+r[8]+1770035416&4294967295,a=s+(i^(t=n+(a<<7&4294967295|a>>>25))&(n^i))+r[9]+2336552879&4294967295,a=i+(n^(s=t+(a<<12&4294967295|a>>>20))&(t^n))+r[10]+4294925233&4294967295,a=n+(t^(i=s+(a<<17&4294967295|a>>>15))&(s^t))+r[11]+2304563134&4294967295,a=t+(s^(n=i+(a<<22&4294967295|a>>>10))&(i^s))+r[12]+1804603682&4294967295,a=s+(i^(t=n+(a<<7&4294967295|a>>>25))&(n^i))+r[13]+4254626195&4294967295,a=i+(n^(s=t+(a<<12&4294967295|a>>>20))&(t^n))+r[14]+2792965006&4294967295,a=n+(t^(i=s+(a<<17&4294967295|a>>>15))&(s^t))+r[15]+1236535329&4294967295,n=i+(a<<22&4294967295|a>>>10),a=t+(i^s&(n^i))+r[1]+4129170786&4294967295,t=n+(a<<5&4294967295|a>>>27),a=s+(n^i&(t^n))+r[6]+3225465664&4294967295,s=t+(a<<9&4294967295|a>>>23),a=i+(t^n&(s^t))+r[11]+643717713&4294967295,i=s+(a<<14&4294967295|a>>>18),a=n+(s^t&(i^s))+r[0]+3921069994&4294967295,n=i+(a<<20&4294967295|a>>>12),a=t+(i^s&(n^i))+r[5]+3593408605&4294967295,t=n+(a<<5&4294967295|a>>>27),a=s+(n^i&(t^n))+r[10]+38016083&4294967295,s=t+(a<<9&4294967295|a>>>23),a=i+(t^n&(s^t))+r[15]+3634488961&4294967295,i=s+(a<<14&4294967295|a>>>18),a=n+(s^t&(i^s))+r[4]+3889429448&4294967295,n=i+(a<<20&4294967295|a>>>12),a=t+(i^s&(n^i))+r[9]+568446438&4294967295,t=n+(a<<5&4294967295|a>>>27),a=s+(n^i&(t^n))+r[14]+3275163606&4294967295,s=t+(a<<9&4294967295|a>>>23),a=i+(t^n&(s^t))+r[3]+4107603335&4294967295,i=s+(a<<14&4294967295|a>>>18),a=n+(s^t&(i^s))+r[8]+1163531501&4294967295,n=i+(a<<20&4294967295|a>>>12),a=t+(i^s&(n^i))+r[13]+2850285829&4294967295,t=n+(a<<5&4294967295|a>>>27),a=s+(n^i&(t^n))+r[2]+4243563512&4294967295,s=t+(a<<9&4294967295|a>>>23),a=i+(t^n&(s^t))+r[7]+1735328473&4294967295,i=s+(a<<14&4294967295|a>>>18),a=n+(s^t&(i^s))+r[12]+2368359562&4294967295,a=t+((n=i+(a<<20&4294967295|a>>>12))^i^s)+r[5]+4294588738&4294967295,a=s+((t=n+(a<<4&4294967295|a>>>28))^n^i)+r[8]+2272392833&4294967295,a=i+((s=t+(a<<11&4294967295|a>>>21))^t^n)+r[11]+1839030562&4294967295,a=n+((i=s+(a<<16&4294967295|a>>>16))^s^t)+r[14]+4259657740&4294967295,a=t+((n=i+(a<<23&4294967295|a>>>9))^i^s)+r[1]+2763975236&4294967295,a=s+((t=n+(a<<4&4294967295|a>>>28))^n^i)+r[4]+1272893353&4294967295,a=i+((s=t+(a<<11&4294967295|a>>>21))^t^n)+r[7]+4139469664&4294967295,a=n+((i=s+(a<<16&4294967295|a>>>16))^s^t)+r[10]+3200236656&4294967295,a=t+((n=i+(a<<23&4294967295|a>>>9))^i^s)+r[13]+681279174&4294967295,a=s+((t=n+(a<<4&4294967295|a>>>28))^n^i)+r[0]+3936430074&4294967295,a=i+((s=t+(a<<11&4294967295|a>>>21))^t^n)+r[3]+3572445317&4294967295,a=n+((i=s+(a<<16&4294967295|a>>>16))^s^t)+r[6]+76029189&4294967295,a=t+((n=i+(a<<23&4294967295|a>>>9))^i^s)+r[9]+3654602809&4294967295,a=s+((t=n+(a<<4&4294967295|a>>>28))^n^i)+r[12]+3873151461&4294967295,a=i+((s=t+(a<<11&4294967295|a>>>21))^t^n)+r[15]+530742520&4294967295,a=n+((i=s+(a<<16&4294967295|a>>>16))^s^t)+r[2]+3299628645&4294967295,n=i+(a<<23&4294967295|a>>>9),a=t+(i^(n|~s))+r[0]+4096336452&4294967295,t=n+(a<<6&4294967295|a>>>26),a=s+(n^(t|~i))+r[7]+1126891415&4294967295,s=t+(a<<10&4294967295|a>>>22),a=i+(t^(s|~n))+r[14]+2878612391&4294967295,i=s+(a<<15&4294967295|a>>>17),a=n+(s^(i|~t))+r[5]+4237533241&4294967295,n=i+(a<<21&4294967295|a>>>11),a=t+(i^(n|~s))+r[12]+1700485571&4294967295,t=n+(a<<6&4294967295|a>>>26),a=s+(n^(t|~i))+r[3]+2399980690&4294967295,s=t+(a<<10&4294967295|a>>>22),a=i+(t^(s|~n))+r[10]+4293915773&4294967295,i=s+(a<<15&4294967295|a>>>17),a=n+(s^(i|~t))+r[1]+2240044497&4294967295,n=i+(a<<21&4294967295|a>>>11),a=t+(i^(n|~s))+r[8]+1873313359&4294967295,t=n+(a<<6&4294967295|a>>>26),a=s+(n^(t|~i))+r[15]+4264355552&4294967295,s=t+(a<<10&4294967295|a>>>22),a=i+(t^(s|~n))+r[6]+2734768916&4294967295,i=s+(a<<15&4294967295|a>>>17),a=n+(s^(i|~t))+r[13]+1309151649&4294967295,n=i+(a<<21&4294967295|a>>>11),a=t+(i^(n|~s))+r[4]+4149444226&4294967295,t=n+(a<<6&4294967295|a>>>26),a=s+(n^(t|~i))+r[11]+3174756917&4294967295,s=t+(a<<10&4294967295|a>>>22),a=i+(t^(s|~n))+r[2]+718787259&4294967295,i=s+(a<<15&4294967295|a>>>17),a=n+(s^(i|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(a<<21&4294967295|a>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}function nw(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var s=0|e[i];r&&s==t||(n[i]=s,r=!1)}this.g=n}(l=tq.prototype).Oa=function(e){this.M=e},l.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():o.g(),this.C=this.u?e$(this.u):e$(o),this.g.onreadystatechange=y(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(e){tG(this,e);return}if(e=n||"",n=new Map(this.headers),r){if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if("function"==typeof r.keys&&"function"==typeof r.get)for(let e of r.keys())n.set(e,r.get(e));else throw Error("Unknown input type for opt_headers: "+String(r))}for(let[s,a]of(r=Array.from(n.keys()).find(e=>"content-type"==e.toLowerCase()),i=d.FormData&&e instanceof d.FormData,!(0<=_(tK,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),n))this.g.setRequestHeader(s,a);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{var s;tY(this),0<this.B&&((this.L=(s=this.g,x&&"number"==typeof s.timeout&&void 0!==s.ontimeout))?(this.g.timeout=this.B,this.g.ontimeout=y(this.ua,this)):this.A=eT(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(e){tG(this,e)}},l.ua=function(){void 0!==c&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ec(this,"timeout"),this.abort(8))},l.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,ec(this,"complete"),ec(this,"abort"),tW(this))},l.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),tW(this,!0)),tq.$.N.call(this)},l.La=function(){this.s||(this.G||this.v||this.l?tQ(this):this.kb())},l.kb=function(){tQ(this)},l.isActive=function(){return!!this.g},l.da=function(){try{return 2<tX(this)?this.g.status:-1}catch(e){return -1}},l.ja=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},l.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),tj(t)}},l.Ia=function(){return this.m},l.Sa=function(){return"string"==typeof this.j?this.j:String(this.j)},(l=t2.prototype).ra=8,l.H=1,l.Na=function(e){if(this.m){if(this.m=null,1==this.H){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;let i=new eW(this,this.l,e),s=this.s;if(this.U&&(s?X(s=W(s),this.U):s=this.U),null!==this.o||this.O||(i.I=s,s=null),this.P)e:{for(var t=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&"string"==typeof(r=r.map.__data__)){r=r.length;break t}r=void 0}if(void 0===r)break;if(4096<(t+=r)){t=n;break e}if(4096===t||n===this.j.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=t8(this,i,t),to(n=tr(this.I),"RID",e),to(n,"CVER",22),this.F&&to(n,"X-HTTP-Session-Id",this.F),t7(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(tZ(s)))+"&"+t:this.o&&t0(n,this.o,s)),tN(this.i,i),this.bb&&to(n,"TYPE","init"),this.P?(to(n,"$req",t),to(n,"SID","null"),i.aa=!0,e0(i,n,null)):e0(i,n,t),this.H=2}}else 3==this.H&&(e?t3(this,e):0==this.j.length||tS(this.i)||t3(this))}},l.Ma=function(){if(this.u=null,nr(this),this.ca&&!(this.M||null==this.g||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=eU(y(this.jb,this),e)}},l.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,eF(10),t4(this),nr(this))},l.ib=function(){null!=this.v&&(this.v=null,t4(this),nt(this),eF(19))},l.pb=function(e){e?(this.l.info("Successfully pinged google.com"),eF(2)):(this.l.info("Failed to ping google.com"),eF(1))},l.isActive=function(){return!!this.h&&this.h.isActive(this)},(l=nc.prototype).Ba=function(){},l.Aa=function(){},l.za=function(){},l.ya=function(){},l.isActive=function(){return!0},l.Va=function(){},nd.prototype.g=function(e,t){return new nf(e,t)},w(nf,eh),nf.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;eF(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=nu(e,null,e.Y),t5(e)},nf.prototype.close=function(){t9(this.g)},nf.prototype.u=function(e){var t=this.g;if("string"==typeof e){var n={};n.__data__=e,e=n}else this.v&&((n={}).__data__=ef(e),e=n);t.j.push(new tT(t.fb++,e)),3==t.H&&t5(t)},nf.prototype.N=function(){this.g.h=null,delete this.j,t9(this.g),delete this.g,nf.$.N.call(this)},w(np,eG),w(ng,eH),w(nm,nc),nm.prototype.Ba=function(){ec(this.g,"a")},nm.prototype.Aa=function(e){ec(this.g,new np(e))},nm.prototype.za=function(e){ec(this.g,new ng)},nm.prototype.ya=function(){ec(this.g,"b")},w(ny,function(){this.blockSize=-1}),ny.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},ny.prototype.j=function(e,t){void 0===t&&(t=e.length);for(var n=t-this.blockSize,r=this.m,i=this.h,s=0;s<t;){if(0==i)for(;s<=n;)nv(this,e,s),s+=this.blockSize;if("string"==typeof e){for(;s<t;)if(r[i++]=e.charCodeAt(s++),i==this.blockSize){nv(this,r),i=0;break}}else for(;s<t;)if(r[i++]=e[s++],i==this.blockSize){nv(this,r),i=0;break}}this.h=i,this.i+=t},ny.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=255&n,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};var nE={};function n_(e){return -128<=e&&128>e?Object.prototype.hasOwnProperty.call(nE,e)?nE[e]:nE[e]=new nw([0|e],0>e?-1:0):new nw([0|e],0>e?-1:0)}function nb(e){if(isNaN(e)||!isFinite(e))return nI;if(0>e)return nN(nb(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=nT;return new nw(t,0)}var nT=4294967296,nI=n_(0),nC=n_(1),nS=n_(16777216);function nA(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function nD(e){return -1==e.h}function nN(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new nw(n,~e.h).add(nC)}function nk(e,t){return e.add(nN(t))}function nx(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function nR(e,t){this.g=e,this.h=t}function nL(e,t){if(nA(t))throw Error("division by zero");if(nA(e))return new nR(nI,nI);if(nD(e))return t=nL(nN(e),t),new nR(nN(t.g),nN(t.h));if(nD(t))return t=nL(e,nN(t)),new nR(nN(t.g),t.h);if(30<e.g.length){if(nD(e)||nD(t))throw Error("slowDivide_ only works with positive integers.");for(var n=nC,r=t;0>=r.X(e);)n=nO(n),r=nO(r);var i=nM(n,1),s=nM(r,1);for(r=nM(r,2),n=nM(n,2);!nA(r);){var a=s.add(r);0>=a.X(e)&&(i=i.add(n),s=a),r=nM(r,1),n=nM(n,1)}return t=nk(e,i.R(t)),new nR(i,t)}for(i=nI;0<=e.X(t);){for(r=48>=(r=Math.ceil(Math.log(n=Math.max(1,Math.floor(e.ea()/t.ea())))/Math.LN2))?1:Math.pow(2,r-48),a=(s=nb(n)).R(t);nD(a)||0<a.X(e);)n-=r,a=(s=nb(n)).R(t);nA(s)&&(s=nC),i=i.add(s),e=nk(e,a)}return new nR(i,e)}function nO(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new nw(n,e.h)}function nM(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,i=[],s=0;s<r;s++)i[s]=0<t?e.D(s+n)>>>t|e.D(s+n+1)<<32-t:e.D(s+n);return new nw(i,e.h)}(l=nw.prototype).ea=function(){if(nD(this))return-nN(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:nT+r)*t,t*=nT}return e},l.toString=function(e){if(2>(e=e||10)||36<e)throw Error("radix out of range: "+e);if(nA(this))return"0";if(nD(this))return"-"+nN(this).toString(e);for(var t=nb(Math.pow(e,6)),n=this,r="";;){var i=nL(n,t).g,s=((0<(n=nk(n,i.R(t))).g.length?n.g[0]:n.h)>>>0).toString(e);if(nA(n=i))return s+r;for(;6>s.length;)s="0"+s;r=s+r}},l.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},l.X=function(e){return nD(e=nk(this,e))?-1:nA(e)?0:1},l.abs=function(){return nD(this)?nN(this):this},l.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,i=0;i<=t;i++){var s=r+(65535&this.D(i))+(65535&e.D(i)),a=(s>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);r=a>>>16,s&=65535,a&=65535,n[i]=a<<16|s}return new nw(n,-2147483648&n[n.length-1]?-1:0)},l.R=function(e){if(nA(this)||nA(e))return nI;if(nD(this))return nD(e)?nN(this).R(nN(e)):nN(nN(this).R(e));if(nD(e))return nN(this.R(nN(e)));if(0>this.X(nS)&&0>e.X(nS))return nb(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<e.g.length;i++){var s=this.D(r)>>>16,a=65535&this.D(r),o=e.D(i)>>>16,l=65535&e.D(i);n[2*r+2*i]+=a*l,nx(n,2*r+2*i),n[2*r+2*i+1]+=s*l,nx(n,2*r+2*i+1),n[2*r+2*i+1]+=a*o,nx(n,2*r+2*i+1),n[2*r+2*i+2]+=s*o,nx(n,2*r+2*i+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new nw(n,0)},l.gb=function(e){return nL(this,e).h},l.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new nw(n,this.h&e.h)},l.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new nw(n,this.h|e.h)},l.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new nw(n,this.h^e.h)},nd.prototype.createWebChannel=nd.prototype.g,nf.prototype.send=nf.prototype.u,nf.prototype.open=nf.prototype.m,nf.prototype.close=nf.prototype.close,eB.NO_ERROR=0,eB.TIMEOUT=8,eB.HTTP_ERROR=6,ej.COMPLETE="complete",ez.EventType=eK,eK.OPEN="a",eK.CLOSE="b",eK.ERROR="c",eK.MESSAGE="d",eh.prototype.listen=eh.prototype.O,tq.prototype.listenOnce=tq.prototype.P,tq.prototype.getLastError=tq.prototype.Sa,tq.prototype.getLastErrorCode=tq.prototype.Ia,tq.prototype.getStatus=tq.prototype.da,tq.prototype.getResponseJson=tq.prototype.Wa,tq.prototype.getResponseText=tq.prototype.ja,tq.prototype.send=tq.prototype.ha,tq.prototype.setWithCredentials=tq.prototype.Oa,ny.prototype.digest=ny.prototype.l,ny.prototype.reset=ny.prototype.reset,ny.prototype.update=ny.prototype.j,nw.prototype.add=nw.prototype.add,nw.prototype.multiply=nw.prototype.R,nw.prototype.modulo=nw.prototype.gb,nw.prototype.compare=nw.prototype.X,nw.prototype.toNumber=nw.prototype.ea,nw.prototype.toString=nw.prototype.toString,nw.prototype.getBits=nw.prototype.D,nw.fromNumber=nb,nw.fromString=function e(t,n){if(0==t.length)throw Error("number format error: empty string");if(2>(n=n||10)||36<n)throw Error("radix out of range: "+n);if("-"==t.charAt(0))return nN(e(t.substring(1),n));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var r=nb(Math.pow(n,8)),i=nI,s=0;s<t.length;s+=8){var a=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+a),n);8>a?(a=nb(Math.pow(n,a)),i=i.R(a).add(nb(o))):i=(i=i.R(r)).add(nb(o))}return i};var nP=h.createWebChannelTransport=function(){return new nd},nF=h.getStatEventTarget=function(){return eL()},nV=h.ErrorCode=eB,nU=h.EventType=ej,nB=h.Event=ex,nj=h.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20};h.FetchXmlHttpFactory=tM;var nq=h.WebChannel=ez,n$=h.XhrIo=tq,nz=h.Md5=ny,nK=h.Integer=nw}),i.register("1Nsm9",function(t,n){e(t.exports,"initializeApp",function(){return i("dZnwr").initializeApp}),e(t.exports,"registerVersion",function(){return i("dZnwr").registerVersion}),/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(0,i("dZnwr").registerVersion)("firebase","10.3.1","app")}),i("aaO3d")}();