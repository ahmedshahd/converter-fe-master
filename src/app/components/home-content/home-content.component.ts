import { Component, Input, OnInit } from '@angular/core';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { Upload } from "./Upload";
import { ApiService } from "../../api.service";
import { NgbCollapseModule } from "@ng-bootstrap/ng-bootstrap";
import { findInputType } from "../../../helpers/find-input-type-helper";
import { findCompany } from "../../../helpers/find-company-helper";

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.css']
})
export class HomeContentComponent implements OnInit {
  faLink = faLink;

  submitting = false;
  converters = [];
  model = new Upload()
  apiError: string | null = null;
  _previewData: Blob
  get companyNames() {
    return this.converters?.find(converter => converter.inputType === this.model.inputType)?.companies || []
  }

  constructor(public apiService: ApiService) {
  }

  async ngOnInit() {
    this.apiService.getConverters().subscribe({
      next: (res) => {
        this.converters = res;
      },
      error: (err) => {
        this.apiError = err.message || err;
      },
    })
  }

  async onSubmit() {
    this.submitting = true;
    this.apiError = null;
    this._previewData = null;
    this.apiService.convert(this.model).subscribe(data => {
      this._previewData = data;
      this.submitting = false
    }, error => {
      this.submitting = false;
      if (error.error) {
        error.error.text().then(errorMessage => this.apiError = errorMessage);
      }
      this.apiError = error?.message || error
    })
  }

  onFileSelected(event) {
    const file:File = event.target.files[0];

    if (file) {
      this.model.file = file;
    }
  }

  handleFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.model.file = input.files?.[0];
    this.model.inputType = findInputType(this.model.file.name);
    this.model.company = findCompany(this.model.file.name);
  }
}



