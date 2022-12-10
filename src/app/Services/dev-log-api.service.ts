import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DevLogApiService {
  constructor(private _Http: HttpClient, @Inject("baseUrl") private baseUrl: string) { }

  private url(request: Partial<RequestParameters>) {
    return `${this.baseUrl}/${request.endpoint}`;
  }

  get<T>(request: Partial<RequestParameters>, id?: string):Observable<T|any> {
    //Yapılan istek türünde değer döneceği bildirilir. partial olarak bildirilmeyen nesneler oluşturulup verilmelidir, 
    //partial ifadesi ile nesne anlık olarak oluşturulabilir.
    let url: string = "";
    if (request.externalUrl) {
      url = request.externalUrl;
    }
    else {
      url = `${this.url(request)}${id ? `/${id}` : ""}`;
    }
    return this._Http.get<T>(url,{headers : request.headers})
  }

  post<T>(request: Partial<RequestParameters>,body:Partial<T|any>):Observable<T>{
    let url:string ="";
    if (request.externalUrl) {
      url = request.externalUrl;
    }
    else{
      url = `${this.url(request)}`
    }
    return this._Http.post<T>(url,body,{headers:request.headers})
  }

  put<T>(request: Partial<RequestParameters>,body:Partial<T>):Observable<T|any>{
    let url:string ="";
    if (request.externalUrl) {
      url = request.externalUrl;
    }
    else{
      url = `${this.url(request)}`
    }
    return this._Http.put<T>(url,body,{headers:request.headers})
  }

  delete<T>(request: Partial<RequestParameters>,id:string):Observable<T|any>{
    let url:string ="";
    if (request.externalUrl) {
      url = request.externalUrl;
    }
    else{
      url = `${this.url(request)}/${id}`;
    }
    return this._Http.delete<T>(url,{headers:request.headers});
  }

}


export class RequestParameters {
  endpoint?: string;
  headers?: HttpHeaders;
  externalUrl?: string;
}