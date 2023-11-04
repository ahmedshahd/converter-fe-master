import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Upload } from "./components/home-content/Upload";
import { environment } from "../environments/environment";

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  convert(upload: Upload): Observable<any> {
    const formData = new FormData()
    formData.append("file", upload.file);
    formData.append("company_name", upload.company);
    formData.append("input_type", upload.inputType);

    return this.http.post(`${environment.apiUri}/converters/convert`, formData, {
      responseType: "blob"
    });
  }

  getConverters(): Observable<any> {
    return this.http.get(`${environment.apiUri}/converters`)
  }
}
